const fs = require('fs');
const { execSync } = require('child_process');

// 找 playwright-core
const bases = [
  'C:/Users/denglw/.workbuddy/binaries/node/versions/22.22.2-3/node_modules',
  'C:/Users/denglw/.workbuddy/binaries/node/workspace/node_modules'
];
let pw = null, base = null;
for (const b of bases) {
  try { pw = require(b + '/agent-browser/node_modules/playwright-core'); base = b + '/agent-browser/node_modules/playwright-core'; break; } catch (e) {}
  try { pw = require(b + '/playwright-core'); base = b + '/playwright-core'; break; } catch (e) {}
}
const log = [];
log.push('pw at: ' + base);
if (!pw) { fs.writeFileSync('_check_result.txt', log.join('\n')); process.exit(1); }

(async () => {
  const browser = await pw.chromium.launch({
    executablePath: 'C:/Users/denglw/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe',
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('CONSOLE: ' + m.text()); });

  await page.goto('http://localhost:8080/index.html', { waitUntil: 'networkidle' });

  // 检查页面横向溢出
  const pageScroll = await page.evaluate(() => ({
    scrollW: document.documentElement.scrollWidth,
    clientW: document.documentElement.clientWidth,
    bodyScrollW: document.body.scrollWidth
  }));
  log.push('MAIN PAGE: scrollW=' + pageScroll.scrollW + ' clientW=' + pageScroll.clientW + ' hOverflow=' + (pageScroll.scrollW > pageScroll.clientW));

  // 打开映射关系设置列表弹窗
  await page.click('main table tbody tr:first-child td:nth-child(6) span');
  await page.waitForTimeout(300);
  const listScroll = await page.evaluate(() => {
    const el = document.getElementById('mappingListModal');
    const inner = el.querySelector(':scope > div > div:nth-child(2)');
    return { elW: el.querySelector(':scope > div').scrollWidth, elC: el.querySelector(':scope > div').clientWidth, inner: inner ? inner.scrollWidth + '/' + inner.clientWidth : 'n/a' };
  });
  log.push('MODAL1 inner hScroll: ' + listScroll.inner);
  await page.screenshot({ path: '_shot_modal1.png' });

  // 打开映射关系配置弹窗（object 类型）
  await page.click('#mappingListModal tbody tr:first-child span[onclick*="openFieldMapping"]');
  await page.waitForTimeout(300);
  const m3Scroll = await page.evaluate(() => {
    const el = document.getElementById('fieldMappingModal');
    const inner = el.querySelector(':scope > div > div:nth-child(2)');
    return inner ? inner.scrollWidth + '/' + inner.clientWidth : 'n/a';
  });
  log.push('MODAL3(object) inner hScroll: ' + m3Scroll);
  log.push('MODAL3(object) doc hScroll: ' + await page.evaluate(() => document.documentElement.scrollWidth + '/' + document.documentElement.clientWidth));
  await page.screenshot({ path: '_shot_modal3_object.png' });

  // 切到 material
  await page.selectOption('#fieldMappingType', 'material');
  await page.waitForTimeout(300);
  const m3m = await page.evaluate(() => {
    const el = document.getElementById('fieldMappingModal');
    const inner = el.querySelector(':scope > div > div:nth-child(2)');
    return inner ? inner.scrollWidth + '/' + inner.clientWidth : 'n/a';
  });
  log.push('MODAL3(material) inner hScroll: ' + m3m);
  await page.screenshot({ path: '_shot_modal3_material.png', fullPage: false });

  log.push('PAGE_ERRORS: ' + (errors.length ? errors.join(' | ') : 'none'));
  await browser.close();
  fs.writeFileSync('_check_result.txt', log.join('\n'));
})().catch(e => { log.push('FATAL: ' + e.message); fs.writeFileSync('_check_result.txt', log.join('\n')); process.exit(1); });
