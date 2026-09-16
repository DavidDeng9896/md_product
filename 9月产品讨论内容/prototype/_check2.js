const fs = require('fs');
const path = 'C:/Users/denglw/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe';
const log = [];
const { execSync } = require('child_process');
const shots = [
  ['_shot_modal_object.png', 'http://localhost:8080/index.html#mapping-config'],
  ['_shot_modal_material.png', 'http://localhost:8080/index.html#mapping-config-material'],
  ['_shot_modal_list.png', 'http://localhost:8080/index.html#mapping-list']
];
for (const [out, url] of shots) {
  try {
    execSync(`"${path}" --headless=new --disable-gpu --no-sandbox --window-size=1440,1000 --screenshot="C:/Users/denglw/Downloads/对象复制功能/prototype/${out}" --virtual-time-budget=5000 --hide-scrollbars "${url}"`, { timeout: 30000 });
    log.push(out + ' OK');
  } catch (e) { log.push(out + ' FAIL: ' + e.message.slice(0, 150)); }
}
fs.writeFileSync('_check_result.txt', log.join('\n'));
