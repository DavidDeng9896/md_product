# Registry 科学数据注册

## 版本说明

| 版本号 | 修订内容 | 修复原因 | 修订时间 | 变更人 | 变更状态图 | ONES需求链接 |
| --- | --- | --- | --- | --- | --- | --- |
| V1.0 |  |  | 2026.2.12 |  |  |  |

## 评审记录

| 评审时间 | 评审类型 | 需求版本号 | 主持人 | 与会人 | 会议结论 |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |

# 需求背景

在生物药物研究中从质粒到细胞系，再到病毒载体，大分子研发涉及许多实体和参数，这些都必须进行数字化建模并相互关联。大分子研发中实体和相互关联的复杂性远超小分子研发，而且，由于许多大分子研发流程仍在不断变化，相对应的数据模式也要能够灵活应对。

如果没有一个强大的注册系统来跟踪和互联所有这些部分，最终得到的数据将会是不准确、冗余或不充分的。用户有一个合适匹配生物注册系统，那么几乎可以回答任何关于大分子的问题。有了这些触手可及的答案，用户可以利用可靠且全面的数据和结果来推动研究决策。

我们针对上文描述的大分子的科学数据建模与数据分析场景，着手解决研发数据分散、关联弱的问题，通过注册汇总不同批次产物、样品、实验信息，能够通过对数据进行各个维度的筛选整合，形成灵活可靠的数据结构，帮助建立起后续数据分析的能力。

以下需求描述，将重点以抗体研发流程的基本流程涉及到的业务对象进行说明；

目标用户

用户群体包括：负责数据注册和管理的数据管理员、需要记录和追溯实验数据的科研人员、需要进行数据分析和价值挖掘的数据分析师、负责实验室管理和合规审计的实验室管理人员、以及需要跨团队共享数据的项目负责人。

### 抗体数据对象结构

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/321b17dd-57a3-4473-bf5c-dbaacb50ab2b.png)

### 抗体基础结构

[《抗体的结构》](https://alidocs.dingtalk.com/api/doc/transit?dentryUuid=lyQod3RxJK3OKNpafO0n6gXOJkb4Mw9r&queryString=utm_medium%3Ddingdoc_doc_plugin_card%26utm_source%3Ddingdoc_doc)

# 需求描述

### 功能性需求描述

| 用户是谁？ | 使用业务场景 | 使用流程 | 验收标准 |
| --- | --- | --- | --- |
|  |  |  |  |

# 功能设计

## 功能结构

![image](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/a/ROl8Y1LoYfgKnkz1/09fb12fbcd6646b19c789c7ed2f7b13b0073.png)

### 功能清单

| 主模块 | 次级模块 | 功能名称 | 功能简述 | 进度 | 参考<br>示例 | 优先级 | 发版计划 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 配置中心 | 参数设置 | 数据字典 | 设置全局统一的下拉设置字段 | 100% |  |  |  |
|  |  | 字段集 | 设置可能在多个对象中通用的字段集合 | 100% |  |  |  |
|  |  | 数据对象 | 设置不同对象的数据结构，帮助用户在registry更好的管理科研数据 | 100% |  |  |  |
|  |  | 结果表 | 设置在实验过程中需要填写的各种检测结果或实验数据格式 | 进行中 |  |  |  |
| Registry | 科研数据注册 | 注册实体对象的列表 | 显示注册实体列表，具备灵活搜索筛选的能力 | 100% |  |  |  |
|  |  | 自定义数据视图 | 支持用户自定义列表显示内容 |  |  |  |  |
|  |  | 注册数据详情 | 显示不同对象的数据内容及关联的结果数据、关联数据等 | 80% |  |  |  |
|  |  | 抗体分析结果展示 | 完整抗体分子分析结果展示 | 100% |  |  |  |
|  |  | 计算模型对接及展示 | PTM翻译后修饰<br>（抗体双链一起计算，但在分子层面上显示）<br>（单链计算，结果在单链上显示） | 100% |  | 高 |  |
|  |  |  | mutation突变<br>（蛋白单链计算） | 100% |  |  |  |
|  |  |  | aggregation聚集<br>（抗体双链一起计算）（pdb+折线图） | 100% |  | 高 |  |
|  |  |  | solubility溶解性<br>（抗体双链一起计算）（pdb+折线图） | 100% |  |  |  |
|  |  |  | viscosity粘度<br>（抗体双链一起计算）（pdb+折线图） | 100% |  |  |  |
|  |  |  | immunogenicity免疫原性<br>（蛋白单链计算，单链显示） | 100% |  | 中 |  |
|  |  |  | Cysteine stability半酰胺酸稳定性<br>（抗体双链一起计算）（pdb） |  |  |  |  |
|  |  |  | thermal stability热稳定性<br>（抗体双链一起计算）（折线图） |  |  | 高 |  |
|  |  |  | clipping肽链剪切<br>（抗体双链一起计算，但在单链上显示） | 100% |  |  |  |
|  |  | 密码子优化 | 根据肽链的密码子优化计算，生成DNA序列，展示DNA序列并进行质粒拼接 |  |  |  |  |
|  |  | 结果数据导入、导出 | 导入线下实验结果数据 | 进行中 |  |  |  |
|  |  | 样品检测数据汇总 |  | 进行中 |  |  |  |
| ELN | 模板 | 模板设计加入注册模块和结果模块 | 模块设计中加入入注册模块和结果模块 |  |  |  |  |
|  | 实验记录 | 注册对象 | 在实验中注册对象实体 |  |  |  |  |
|  |  | 填写实验结果 | 在实验的结果表中填写实验数据 |  |  |  |  |
|  |  | 样品引用对象数据 |  | 进行中 |  |  |  |
|  |  | 物料引用对象数据 |  | 进行中 |  |  |  |

# 需求详情

## 字段集设置

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | 配置中心-参数设置-数据模型设置-字段集 |
| **功能说明** | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/1750f9c5-6707-4903-9fd6-6ef4137926e6.png)<br>用于定义和管理科学数据的字段结构。用户可以根据不同的数据类型和业务需求，创建自定义的字段集模板，配置各类字段属性和验证规则。 |
| **权限** | \-- |
| **B、功能点** |  |
| **功能点** | **描述** |
| 字段集列表展示 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/1750f9c5-6707-4903-9fd6-6ef4137926e6.png)<br>字段集列表展示：<br>*   支持分页浏览字段集列表（默认20/页）<br>    <br>*   每页显示字段集名称、所属公司、类型、描述、创建时间、创建人、修改人、修改时间等信息<br>    <br>*   字段集搜索：提供关键字搜索功能，支持按字段集名称速检索<br>    <br>*   字段集删除：支持删除不再使用的字段集，需二次确认进行操作，删除前需进行校验是否被引用过，引用过则不允许删除；<br>    <br>*   字段集编辑：支持对现有字段集进行修改，包括基本信息编辑和字段结构调整 |
| 字段集创建 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/da0a9ee9-8b58-431d-b157-88cf7acc262c.png)<br>字段集创建：字段集的基本信息填写和字段配置<br>1.  必填表单项：<br>    <br>    1.  名称（如 Antigen Metadata）公司内唯一（公司内不允许重复）<br>        <br>    2.  系统名称（全局唯一）<br>        <br>    3.  所属公司，选择所属公司，单选<br>        <br>    4.  集合类型（同对象类型，自定义 、DNA、RNA、氨基酸、化合物）<br>        <br>2.  字段配置区：支持新增、编辑、删除字段，配置字段规则<br>    <br>3.  字段类型支持：下拉选项、关联、关联查找、文本、数字、日期、附件、计算等（具体字段类型见下文） |

## 对象设置

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | 配置中心-参数设置-数据模型设置-对象模型 |
| **功能说明** | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/5cef72c8-be99-45ff-b009-9cb851054601.png)<br>对象设置模块用于定义科学数据注册的业务对象模型，是系统数据建模的核心功能。通过对象设置，用户可以构建完整的数据模型结构，定义对象之间的关联关系，实现复杂的业务场景支持。<br>功能描述：对象设置模块提供了可视化的对象建模能力，支持创建不同类型的业务对象，如抗体、细胞、质粒、实验样本等。每个对象可以关联特定的字段集，继承字段集的定义，同时可以添加对象特有的属性和关联关系。 |
| **权限** | 公司管理员权限可管理对应公司下的数据 |
| **B、功能点** |  |
| **功能点** | **描述** |
| 对象列表 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/5cef72c8-be99-45ff-b009-9cb851054601.png)<br>对象列表展示：<br>*   支持分页浏览字段集列表（默认20/页）<br>    <br>*   每页显示字段对象名称、前缀、所属公司、对象类型、适用范围、创建时间、创建人、修改人、修改时间等信息<br>    <br>*   搜索：提供关键字搜索功能，支持按对象名称检索<br>    <br>*   对象删除：支持删除不再使用的对象，需二次确认进行操作，删除前需进行校验是否被实验或模板引用过，引用过则不允许删除；<br>    <br>*   对象编辑：支持对现有对象集进行修改，包括基本信息编辑和字段调整（具体编辑的约束见下文） |
| 新增/编辑 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/7a1aadaf-a44c-4b0e-883d-5899157e3e32.png)<br>创建：基本信息填写和字段配置<br>1.  必填表单项：<br>    <br>    1.  名称（如 Antigen Complex）公司内唯一（公司内不允许重复）<br>        <br>    2.  前缀，英文字符约束，不包括标点<br>        <br>    3.  系统名称（全局唯一）<br>        <br>    4.  所属公司，选择所属公司，单选<br>        <br>    5.  对象类型（自定义 、DNA、RNA、氨基酸、化合物、新增抗体蛋白）<br>        <br>2.  名称规则，点击进入名称规则设置（见下文）<br>    <br>3.  适用范围，非必填，选择所属公司下的部门，可多选（在实验或模板中使用时，部门下的成员可以用，为空则为所属公司都可用）<br>    <br>4.  对象图标<br>    <br>    1.  点击修改时从系统预设的图标中选择匹配的图形表示对象，以此在对象的引用和查看预览时，可通过图形内容快速识别是什么类型的对象；<br>        <br>    2.  创建对象时，图标显示为默认对象图标，可进行修改选择匹配对象图标；<br>        <br>5.  备注：非必填<br>    <br>6.  选择字段集：点击弹窗选择字段集合  <br>    ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/ddc0eafc-30f0-4413-93c5-2a0af1d20f2c.png)<br>    <br>    1.  点击添加弹窗，可选择对象所属公司下字段集，选择后字段类型对应显示<br>        <br>    2.  选择字段集后，显示字段集下关联字段列表(如图)<br>        <br>    3.  点击添加，将字段集关联字段添加至对象字段中<br>        <br>    4.  删除：点击删除，二次确认后删除字段集，对象字段中关联的字段也对应删除<br>        <br>7.  对象字段设置<br>    <br>    1.  字段类型支持：下拉选项、关联、关联查找、文本、数字、日期、附件、公式、图片等（具体字段类型见下文）<br>        <br>    2.  补充字段类型：<br>        <br>        1.  人员：支持选择当前人所在公司下的人员（支持多选设置）<br>            <br>        2.  部门：支持选择当前人所在公司下的部门（支持多选设置）<br>            <br>    3.  支持设置字段是否为注册必填项，勾选后注册时需填写该字段内容<br>        <br>    4.  支持设置关联对象为父对象，注意整个对象的字段设置中只能设置一个父对象<br>        <br>    5.  显示/隐藏，默认添加的字段为显示字段，隐藏后在注册时、详情、列表中不显示；<br>        <br>    6.  删除，点击二次确认后删除字段（无引用和注册数据情况下）<br>        <br>    7.  从字段集关联的字段，不允许修改字段属性设置（可修改是否隐藏、是否为父级） |
| 名称规则 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/d96e37a3-75c5-46a3-a0d5-218a95753d55.png)<br>1.  名称规则<br>    <br>    1.  点击对象规则编辑，设置对象名称规则<br>        <br>    2.  规则定义名称的组成部分，如前缀、父对象，组成部分包括：<br>        <br>    3.  **固定字符** - 用于分隔模板各组成部分的符号或固定字符。例如：“-”、“\_”、“ ”<br>        <br>    4.  **父项编号/名称**：_父项_ - 仅当该对象有关联父对象时才启用。(因此根据从一个实体（父项）创建的批次（子项）数量自动生成)<br>        <br>    5.  流水号：默认出现在末尾，默认3位数，选项3位、4位、5位、不限制位数<br>        <br>    6.  设置：<br>        <br>        1.  编号与名称保持一致：默认勾选，不勾选情况下，对象编号为自增流水<br>            <br>        2.  名称支持修改：默认不勾选，勾选情况下 名称支持手动修改<br>            <br>2.  名称规则支持可变更<br>    <br>3.  编号如何进行回收？ |
| 对象字段修改约束 | 对象产生数据及被其他对象关联后，约束对象的内容修改和删除操作<br>1.  对象本身不可删除<br>    <br>2.  可修改内容：对象名称、所属公司、适用范围、名称规则、备注<br>    <br>3.  对象字段修改：<br>    <br>    1.  新增字段<br>        <br>    2.  原字段重命名，不可修改key<br>        <br>    3.  调整字段排序<br>        <br>    4.  ~~可将单选改为多选，多选不可改成单选~~<br>        <br>    5.  修改是否必填<br>        <br>    6.  父对象设置不可更改 |

### 抗体蛋白类型设置

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | 配置中心-参数设置-数据模型设置-对象模型/字段集 |
| **功能说明** | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/1b06bb4d-023b-40af-9478-5a40a6f0dc11.png)<br>对象设置与外部接口对接的设置 |
| **权限** | 对象、字段集编辑权限 |
| **B、功能点** |  |
| **功能点** | **描述** |
| 抗体蛋白分析设置 | 抗体蛋白分析：<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/1b06bb4d-023b-40af-9478-5a40a6f0dc11.png)<br>1.  对于抗体蛋白类型的对象，可设置抗体蛋白分析选项；<br>    <br>2.  设置默认为关闭状态，开启后可设置分析接口参数；<br>    <br>    1.  用户可选择关联的【氨基酸类型】对象，可选择多个字段；<br>        <br>    2.  将选择的对象实体的列作为分析参数提交MirABO接口<br>        <br>    3.  如字段关联了多个对象实体，则将多个实体序列一起提交<br>        <br>3.  开启后对象详情显示出“蛋白结构”、“蛋白分析”~~、“3D结构”~~ 页签（如下图）  <br>    ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/7daab255-0f92-48cb-a294-656f30e8e451.png) |
| 抗体的Chain Type | 在抗体蛋白类型下，氨基酸类型的关联字段配置，支持配置抗体的链类型（如下图）<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/80b704fd-86cd-4122-8e7c-c651ba0df9cf.png) |

### 化合物类型设置

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | 配置中心-参数设置-数据模型设置-对象模型 |
| **功能说明** | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/d265f400-7463-45bd-ab86-46337b58c9c4.png)<br>支持化合物类型的对象类型设置 |
| **权限** | 对象、字段集编辑权限 |
| **B、功能点** |  |
| **功能点** | **描述** |
| 设置 | 1.  新增化合物对象时，默认自动出现如下内置表字段的关联查找<br>    <br>    ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/f89bb7b2-04bd-45f0-bc15-c72e21910a06.png)<br>    <br>    不支持删除和设置，其中cas 默认不显示<br>    <br>    不需要勾选必填，这些为关联查找内容<br>    <br>    用户可以将其在使用时进行隐藏字段<br>    <br>2.  对于化合物直接的父子关联的说明<br>    <br>    1.  化合物对象关联一个化合物对象的父对象时，默认继承父对象的结构和属性相关内容<br>        <br>    2.  表现为父对象的化合物内置属性表，可被子对象继承使用  <br>        ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/53d19b4e-9532-4320-9c5a-952ea6f769ac.png) |
| 化合物类型内置表 | 支持化合物基础属性和结构的固定内置表，为自动计算或Marvin服务赋值内容，可在对象中进行引用<br>*   Structure：前端显示结构式图形，存储内容应该为molv2000<br>    <br>*   IUPAC：根据结构输出的标准名称，长文本<br>    <br>*   MF：文本<br>    <br>*   MW: 2位小数<br>    <br>*   SMILES：长文本<br>    <br>*   CAS：文本 多个值<br>    <br>*   SMARTS：长文本<br>    <br>*   InChI：长文本<br>    <br>*   InChIKey：文本<br>    <br>*   Exact Mass (精确分子量)：4位小数<br>    <br>*   Atom Count (原子数)：整数<br>    <br>*   Heavy Atom Count(重原子数)：整数<br>    <br>*   HBA (氢键受体数)：整数<br>    <br>*   HBD (氢键供体数)：整数<br>    <br>*   Aromatic Rings (芳香环)：整数<br>    <br>*   Rotatable Bonds (可旋转键数)：整数<br>    <br>*   cLogP：2位小数<br>    <br>*   cLogD(ph7.4)：2位小数<br>    <br>*   tPSA (拓扑极性表面积)：1位小数<br>    <br>*   MR (摩尔折射率)：4位小数<br>    <br>*   pKa：2位小数<br>    <br>*   Ro5：文本<br>    <br>*   QED Weighted：4位小数 |

## 字段设置

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | 配置中心-参数设置-数据模型设置-对象模型/字段集 |
| **功能说明** | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/b0ced6be-15d1-418c-ac26-1753ca81e2b6.png)<br>对象设置和字段集设置时添加的字段能力包括：文本、数字、日期、下拉选择、关联对象、关联查找、公式、汇总、图片、附件等 |
| **权限** | 对象、字段集编辑权限 |
| **B、功能点** |  |
| **功能点** | **描述** |
| 字段设置 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/c5b0ff85-1df9-4447-84e4-cba68b0b5267.png)<br>新增字段：<br>1.  点击新增字段或“+” ，表格最下新增一行；<br>    <br>2.  字段名称、Key、字段类型、字段设置为必填项，在对象保存时进行校验；<br>    <br>3.  必填：默认不勾选，勾选后注册对象时 字段需必填；<br>    <br>4.  显示/隐藏：默认选中，控制在注册或实验中是否显示该字段；<br>    <br>5.  字段类型：<br>    <br>    1.  支持下拉选择字段类型，文本、数字、下拉选择、用户、日期、勾选、附件、公式、关联、关联查找、汇总<br>        <br>    2.  选择关联后，可选择关联对象，支持搜索选择对象![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/483d4c45-77bc-454d-ada1-e7a7b2392c5d.png)<br>        <br>6.  字段设置：见下文；<br>    <br>7.  删除：点击后删除整行，如对象已被引用则不可删除字段 |
| 文本 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/fffe01f8-9883-4312-8813-19f88374bbb1.png)<br>字段类型选择文本类型时，可点击字段设置图标，对该类型的字段进行设置<br>*   点击设置按钮，浮窗打开字段设置项<br>    <br>*   文本类型：选择单行文本、多行文本<br>    <br>*   默认值设置：单行文本设置默认预填内容<br>    <br>*   点击确认后完成设置：字段设置列表多行显示字段设置的内容 |
| 下拉选择 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/06695f79-4610-429e-837e-412999091512.png)<br>1.  选项内容：支持选项从字典选择、自定义；<br>    <br>2.  选择“自定义”时，用户可自定义选项上图（支持增删、调整顺序）；<br>    <br>3.  选择“从字典选择”时，可从字典列表中选择使用的字典；<br>    <br>4.  多选，确定当前字段是否支持多选； |
| 日期 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/d15380ac-a467-4ef0-b777-bd4c8e9a3dd3.png)<br>1.  日期格式：可选择日期格式<br>    <br>    1.  年-月  yyyy-MM<br>        <br>    2.  年-月-日 yyyy-MM-dd<br>        <br>    3.  年-月-日 时:分 yyyy-MM-dd HH:mm<br>        <br>    4.  年-月-日 时:分:秒 yyyy-MM-dd HH:mm:ss<br>        <br>    5.  时:分 HH:mm<br>        <br>    6.  时:分:秒 HH:mm:ss<br>        <br>2.  默认值：选择是否在创建数据时 自动填充当前时间 |
| 数字 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/129deefb-ab42-4751-bd4b-babb8a5634c6.png)<br>*   格式：可选项，“数字”、“百分比(%)”, 默认显示“数字”<br>    <br>*   小数位：可选项，"整数","不限位数","1位","2位","3位","4位","5位"；<br>    <br>*   默认值：填写数字类型<br>    <br>数字校验显？？ |
| 用户 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/a08a1f71-8c85-4713-9063-35d58623510c.png)<br>*   支持选择公司下的用户<br>    <br>*   多选：确定当前字段是否支持多选用户<br>    <br>*   默认值：选择是否在创建数据时 自动填充当前用户 |
| 勾选、附件、图片 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/38821484-ed7c-46a3-bc9b-6b40b87681a2.png) |
| 关联 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/2823861f-ef22-4116-ba4b-cf9c35606e1b.png) |
| 关联查找 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/9ea4e1c2-8ffa-472d-be92-4b01cd4aa885.png)<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/d04b1a53-0be3-48c5-9ac8-80d99c42ac19.png)<br>1.  已关联字段选择范围为当前对象中设置的关联字段；<br>    <br>2.  选择已关联字段后，出现从关联字段表中选择显示的查找字段(如图2，标题显示-“从”+{关联字段所属对象}+“中选择要进行查找的字段”)<br>    <br>3.  选择查找字段后出现筛选条件设置（如图3）<br>    <br>4.  筛选条件（在查找过程中，对于满足条件的内容进行筛选后显示）<br>    <br>    1.  点击添加条件，设置字段查找条件，默认第一个条件字段为查找字段(可修改)<br>        <br>    2.  默认条件间的关系为“满足所有条件”（即，且的关系），也可选择“满足任一条件”（即，或的关系）<br>        <br>    3.  用户可选择对象表中的，文本、下拉选择、数字、勾选、关联类型的字段进行筛选条件的设置；<br>        <br>    4.  点击删除则直接删除条件<br>        <br>    5.  文本类型的筛选设置：适用文本类型，关联类型<br>        <br>        1.  等于：字符完全匹配<br>            <br>        2.  不等于：字符完全不匹配<br>            <br>        3.  包含：文本包含某字符串<br>            <br>        4.  不包含：文本包含某字符串<br>            <br>        5.  为空：文本为空，注意这种情况无需设置条件值<br>            <br>        6.  不为空：文本不为空，注意这种情况无需设置条件值<br>            <br>        7.  如为关联类型则可能存在一个字段多个值的情况：<br>            <br>            1.  等于：完全匹配，<br>                <br>            2.  不等于：完全不匹配<br>                <br>            3.  包含：任一对象的显示值，模糊匹配条件<br>                <br>            4.  不包含：任一对象的显示值，都无法匹配条件<br>                <br>            5.  适配多个的情况下条件值可输入多个用“,”间隔开进行匹配<br>                <br>    6.  数字类型的筛选设置：适用类型数字<br>        <br>        1.  条件值只能填写数字<br>            <br>        2.  “=” ：<br>            <br>        3.  “≠”：<br>            <br>        4.  “>” ：<br>            <br>        5.  “≥”：<br>            <br>        6.  “<”：<br>            <br>        7.  “≤”：<br>            <br>        8.  为空：数值为空，注意这种情况无需设置条件值<br>            <br>        9.  不为空：数值不为空，注意这种情况无需设置条件值<br>            <br>    7.  枚举类型的筛选设置：适用于下拉选择类型<br>        <br>        1.  等于：选项完全相等(包含多个选项)<br>            <br>        2.  不等于：选项完全不相等(包含多个选项)<br>            <br>        3.  属于：某个/几个选项属于<br>            <br>        4.  不属于：某个/几个选项都不属于<br>            <br>        5.  为空：没有任何选项，注意这种情况无需设置条件值<br>            <br>        6.  不为空：有任何选项，注意这种情况无需设置条件值<br>            <br>        7.  注：在设置条件值时，下拉选择条件值，可多选（不是填写字符）<br>            <br>        8.  如，下拉选项条件值已被删除，则条件值显示占位“未设置条件” |
| 公式 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/efb6cb63-3cd1-4922-a704-ece99aac09a7.png)<br>待补充？<br>公式能力需具备基础公式计算能力<br>数学运算<br>统计计算<br>文本函数：<br>逻辑函数<br>日期函数<br>数组操作：<br>还需要支持科学计算相关能力<br>化学结构计算函数：需要具备一定的化学分子结构属性的计算<br>生物化学计算函数(本期待定)<br>具体公式能力见附件[《公式》](https://alidocs.dingtalk.com/api/doc/transit?dentryUuid=vy20BglGWOeqDXaRuGrD3M6rJA7depqY&queryString=utm_medium%3Ddingdoc_doc_plugin_card%26utm_source%3Ddingdoc_doc) |
| 汇总 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/bd07bd64-f1b3-4e67-841d-c9db985d565d.png)<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/fac4e834-6bb6-4e8e-90f7-c5171e670c17.png)<br>汇总类型字段是科学数据注册系统中业务字段的核心组件之一，主要用于对关联记录数据进行聚合运算。在复杂的科学数据管理场景中，用户经常需要对其关联的数据进行统计、分析和汇总；<br>1.  汇总字段的 "关联字段"、“查找字段”、“筛选条件”设置与关联查找类型一样<br>    <br>2.  对于选择的查找的数组进行统计汇总：包括，计数、~~非空计数~~、~~数值计数~~、求和、平均值、最大值、最小值、数组连接、数组去重、~~数组去空~~、连接：<br>    <br>3.  一般来讲汇总字段的结果是实时计算的。如果修改了源数据或改变了关联关系，汇总结果会自动刷新；但在实验记录中除外，该部分在ELN实验记录注册和结果表中另述 |
| 链接 | 暂不做 |
| 图片 | 支持下拉选择图片类型；图片类型相关的显示在表格部分已详细说明 |

## 特殊类型的字段查找

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | 配置中心-参数设置-数据模型设置-对象模型/字段集 |
| **功能说明** | DNA/RNA、氨基酸类型的对象引用，可对序列相关特征内容进行引用 |
| **权限** | 对象、字段集编辑权限 |
| **B、功能点** |  |
| **功能点** | **描述** |
| 序列相关属性的关联查找 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/9ea4e1c2-8ffa-472d-be92-4b01cd4aa885.png)<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/8053cf2a-930d-4536-8711-3ccaa352469d.png)<br>1.  对于对象类型为氨基酸、DNA\RNA类型，设置关联查找字段时，可选择序列字段进行关联；<br>    <br>2.  点击“选择序列字段”，出现关联字段选项：<br>    <br>    1.  优先显示当前对象的序列，前置签署<br>        <br>    2.  对象自身的序列选项：氨基酸 (Self)、DNA (Self)、RNA (Self)<br>        <br>    3.  点击后出现选择序列的关联表（如图2、3）<br>        <br>    4.  选择序列表里面的关联字段<br>        <br>3.  选择已关联字段后，出现从关联字段表中选择显示的查找字段(如图2，标题显示-“从氨基酸 (Self)-\[序列关联表\]中选择要进行查找的字段”)<br>    <br>4.  选择查找字段后出现筛选条件设置（如图3）<br>    <br>5.  筛选条件（在查找过程中，对于满足条件的内容进行筛选后显示）<br>    <br>    1.  点击添加条件，设置字段查找条件，默认第一个条件字段为查找字段(可修改)<br>        <br>    2.  默认条件间的关系为“满足所有条件”（即，且的关系），也可选择“满足任一条件”（即，或的关系）<br>        <br>    3.  用户可选择对象表中的，文本、下拉选择、~~日期、~~数字、勾选、关联类型的字段进行筛选条件的设置；<br>        <br>    4.  点击删除则直接删除条件 |
| 氨基酸类型序列字段 | 1.  计算属性：Size、MW(Da)、pl、Extinction Coefficient、Absorbance<br>    <br>2.  序列特征：Name、Type、Start、End、Size、Species、Strand、Comments<br>    <br>3.  Mutation：Position、WT 、Mut、Type、Reference Position<br>    <br>4.  ~~PTM：Position、Residue、Modification Type、Motif~~<br>    <br>5.  ~~Fc Functional Effects：Engineering Type、Function、Effect~~ |
| DNA/RNA类型字段 | 1.  计算属性：Structure Type、Size、MW(Da)、Melting Temp (℃)、GC (%)<br>    <br>2.  序列特征：Name、Type、Start、End、Size、Species、Strand、Comments<br>    <br>3.  片段：Name、Start、End、Size、Strand<br>    <br>4.  引物：Name、Bases、Start、End、Size、Strand<br>    <br>5.  翻译：Type、Start、End、Size、Strand |

## 字典设置

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | 配置中心-参数设置-数据模型设置-数据字典 |
| **功能说明** | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/2e0b6fe2-7af1-40d6-9b5a-ca51a3201256.png)<br>用于定义和管理科学数据的数据字典结构，用户可以在对象/字段集的设置中选择下拉字段-数据字典 |
| **权限** | \-- |
| **B、功能点** |  |
| **功能点** | **描述** |
| 字段集列表展示 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/2e0b6fe2-7af1-40d6-9b5a-ca51a3201256.png)<br>字段集列表展示：<br>*   支持分页浏览字段集列表（默认20/页），默认显示正常的列表，可选择停用切换至停用；<br>    <br>*   每页显示字典名称、key、所属公司、创建时间、创建人、修改人、修改时间等信息<br>    <br>*   搜索：提供关键字搜索功能，支持按名称速检索<br>    <br>*   删除：支持删除不再使用的字典，需二次确认进行操作，删除前需进行校验是否被引用过，引用过则不允许删除；<br>    <br>*   停用：点击“停用”，则该字段状态为停用；停用字段在对象/字段集不可使用；<br>    <br>*   字段集编辑：支持对现有字段集进行修改，包括基本信息编辑和字段结构调整；<br>    <br>*   停用列表，与正常列表一样，操作列支持编辑、恢复、删除 |
| 创建/编辑 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/0f1c6860-cda4-428d-9831-25d1f93d3d68.png)<br>创建/编辑：<br>1.  必填表单项：<br>    <br>    1.  名称（如 Antigen Type）公司内唯一（公司内不允许重复）<br>        <br>    2.  Key（全局唯一）<br>        <br>    3.  所属公司，选择所属公司，单选<br>        <br>    4.  选项：用户可自定义选项（支持增删、调整顺序）<br>        <br>2.  字典引用后约束：<br>    <br>    1.  名称、Key、所属公司不可修改<br>        <br>    2.  选项只能新增不能删除 |

## 对象实体的编号/名称

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | 配置中心-参数设置-数据模型设置-对象设置 |
| **功能说明** | 用于定义和管理对象实体的名称和编号生成规则，管理约束用户的命名规范； |
| **权限** | \-- |
| **B、功能点** |  |
| **功能点** | **描述** |
| 编号/名称 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/eb7064f7-c164-490e-8573-ea09098e1706.png)<br>1.  编号规则设置：点击图标弹窗设置对象编号规则（见下文）<br>    <br>2.  名称/编号设置：<br>    <br>    1.  名称与编号默认保持一致：默认勾选，勾选后注册时名称自动填充预生成的编号；不勾选的情况下，名称支持修改选项不出现（即名称是需要用户填写的）<br>        <br>    2.  名称支持修改：默认勾选，勾选的情况下支持注册时编辑名称<br>        <br>3.  对象标签的显示：设置为单选<br>    <br>    1.  默认为显示名称，用户可选择其他选项，显示编号或显示名称(编号)<br>        <br>    2.  设置后，在各个模块引用时按设置的名称或编号进行显示；<br>        <br>    3.  如设置发生变更，则实验记录内容要保持原设置（用户新引用内容保持最新设置） |
| 编号规则配置 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/0e8eff8b-ef68-46ee-9f5d-2beabc9ee36f.png)<br>点击编号的编辑按钮，弹窗(如上图)<br>1.  支持前缀、固定字符、父对象名称、注册流水号进行排序设置<br>    <br>2.  固定字符：可输入字符或字母，支持上下移动；不支持复制<br>    <br>3.  注册流水号，默认3位数，可选择4位、5位、不限位数(从1 自然增加)<br>    <br>4.  流水号只能处于最后位置，确认后将示例带入规则字段显示![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/eb7064f7-c164-490e-8573-ea09098e1706.png) |
| 编号回收问题 | 实际情况存在ELN中预生成注册编号，或删除已存在的对象；出现以前编号流水号空缺情况；需支持编号流水的自动回收机制<br>？？ |

## 结果表设置

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | 配置中心-参数设置-数据模型设置-对象模型 |
| **功能说明** | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/5dcb87c2-d07a-4482-920b-687593e598e8.png)<br>结果表定义了实验记录内结果所规范数据的结构。用来确保跨实验和检测的标准化、可检索、合规的数据收集。具备创建、配置、编辑结果表设置，以满足组织对的数据管理需求。 |
| **权限** | 公司管理员权限可管理对应公司下的数据 |
| **B、功能点** |  |
| **功能点** | **描述** |
| 对象列表 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/8d46244f-bb3a-42f3-afb7-219475d40eca.png)<br>列表展示：<br>*   支持分页浏览字段集列表（默认20/页）<br>    <br>*   每页显示字段表名称、系统名称、所属公司、适用范围、创建时间、创建人、修改人、修改时间等信息<br>    <br>*   搜索：提供关键字搜索功能，支持按名称检索<br>    <br>*   对象删除：支持删除不再使用的表结构，需二次确认进行操作，删除前需进行校验是否被实验或模板引用过，引用过则不允许删除；<br>    <br>*   表结构编辑：支持对现有表进行修改，包括基本信息编辑和字段调整（具体编辑的约束见下文） |
| 新增/编辑 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/ff6fd1a5-63a3-4157-8ab2-d6b2c0ed9517.png)<br>1.  必填表单项：<br>    <br>    1.  名称（如 Antigen Complex）公司内唯一（公司内不允许重复）<br>        <br>    2.  系统名称（全局唯一）<br>        <br>    3.  所属公司，选择所属公司，单选<br>        <br>2.  适用范围，非必填，选择所属公司下的部门，可多选（在实验或模板中使用时，部门下的成员可以用，为空则为所属公司都可用）<br>    <br>3.  备注：非必填<br>    <br>4.  字段设置<br>    <br>    1.  字段类型支持：下拉选项、关联、关联查找、文本、数字、日期、附件、公式、汇总、图片等（具体字段类型见下文）<br>        <br>    2.  支持设置字段是否为必填项，勾选后提交数据时需填写该字段内容<br>        <br>    3.  显示/隐藏，默认添加的字段为显示字段，隐藏后在详情、列表中不显示；<br>        <br>    4.  删除，点击二次确认后删除字段（无引用和注册数据情况下）<br>        <br>5.  字段其他的设置项，同对象设置 |

## 对象详情

### 预览

| **A****、概述** |  |  |  |
| --- | --- | --- | --- |
| **功能编号** |  |  |  |
| **功能模块**<br>**访问入口** | Registry-科学数据注册-对象详情 |  |  |
| **功能说明** | 主要内容为在列表中如何查看对象的信息内容，及说明详情各部分的功能布局 |  |  |
| **权限** | 对象查看权限 |  |  |
| **B、功能点** |  |  |  |
| **功能点** | **描述** |  |  |
| 预览 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/8cfa8cd5-017d-4a15-a904-e149d28091b1.png)<br>1.  点击列表名称，侧边抽屉打开预览详情页面（如图）<br>    <br>2.  头部通过页签切换详情不同部分内容<br>    <br>3.  右侧显示更多、展开、关闭按钮<br>    <br>4.  交互：<br>    <br>    1.  详情页面非模态化显示，即显示侧边详情时可点击做其他操作;<br>        <br>    2.  点击列表名称切换侧边栏数据（可快速依次预览数据内容）;<br>        <br>    3.  点击空白区域不关闭右侧抽屉（这里与化合物那边的交互不同，后面化合物那边需要改下）;<br>        <br>    4.  点击关闭按钮关闭详情；<br>        <br>    5.  切换对象列表时关闭详情、切换应用内页签关闭详情；<br>        <br>5.  操作：<br>    <br>    1.  展开，点击展开完整显示页面(如下图)，元数据部分的内展示在左边（在完整页面点击 收起按钮恢复侧边显示）![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/9a226bb5-8c18-474a-8195-8388e55b10d5.png)<br>        <br>    2.  更多，点击更多，显示“新页签打开”、 “复制”、“修改状态”、“设置数据分享人”、“删除”<br>        <br>        1.  新页签打开，在系统内开新页签打开该详情(如下图)  <br>            ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/4506aa37-7e09-45e2-85ee-754d0cd8d9d4.png)<br>            <br>        2.  复制、修改状态、设置数据分享人（见下文，待补充）？？<br>            <br>        3.  删除，无任何关联的对象可删除，点击删除二次确认后删除对象 |  |  |
| 详情区域 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/e879cdc3-1dbc-46b5-8b74-b10ad8e26916.png)<br>可见详情内容如上图，左侧1区域，右侧2区域<br>1.  区域1，主要内容为对象的元信息，分为3个部分<br>    <br>    1.  所有对象的公共基础信息<br>        <br>        1.  编号：根据注册时产生编号<br>            <br>        2.  名称：对象名称，注册时产生，编辑时是否可更改取决于对象设置<br>            <br>        3.  项目：注册时关联的项目<br>            <br>        4.  所属部门：注册时，选择对象内容所属部门<br>            <br>        5.  创建人、创建时间<br>            <br>        6.  对象类型：创建的注册对象归属类型<br>            <br>        7.  数据分享：额外给予部分人员可以见的数据的权限<br>            <br>        8.  状态：分为"有效"与"停用",默认创建时为“有效”状态，<br>            <br>    2.  对象的自定义信息<br>        <br>        1.  对象自定义的信息内容，该部分列表为2列，左侧为字段名称，右侧为值<br>            <br>        2.  整体的显示规则，见表格能力的概述部分<br>            <br>    3.  别名  <br>        ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/4e3d319c-d9f7-41b1-906f-63284cbed890.png)<br>        <br>        1.  可点击新增、编辑、删除<br>            <br>        2.  文本类型，点击编辑时，列表处于可编辑状态，此时可删除行、新增行、编辑别名<br>            <br>        3.  删除时，二次确认后删除<br>            <br>2.  区域2，根据不同类型的对象显示信息内容有所差异，如下<br>    <br>    1.  自定义类型对象：引用关系、关联结果、子对象(如果有)、关联物料<br>        <br>    2.  氨基酸类型对象：序列内容(氨基酸序列)、引用关系、关联结果、子对象(如果有)、3D 结构(本期不做)、关联物料、Codon Optimization(本期不做)<br>        <br>    3.  DNA、RNA类型对象：序列内容(DNA/RNA序列)、引用关系、关联结果、子对象(如果有)、关联物料<br>        <br>    4.  化合物类型对象：引用关系、关联结果、子对象(如果有)、关联物料 |  |  |
| 对象标签预览 | 1.  在系统中进行引用的对象实体，显示时是以标签形式呈现<br>    <br>2.  能够看到标签，则用户具有hover查看这个注册实体的基础信息(如下图)![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/5d3fdf0f-5fae-4887-ae32-ce744961d9f6.png)<br>    <br>    1.  显示内容元数据的基础信息、对象自定义信息；<br>        <br>    2.  基础信息显示：【名称】【对象名称】【编号】【项目】【创建人】【创建时间】【对象自定义信息...】；<br>        <br>    3.  针对标签预览中的显示的对象，仍然可hover显示内部的标签预览<br>        <br>3.  点击标签跳转至对象详情(独立详情页面)，如无权限则toast“无权限查看” |  |  |

### 对象注册

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | Registry-科学数据注册-对象列表-注册对象 |
| **功能说明** | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/95520e10-fdc4-43d2-a8fe-e669010c7a2b.png)<br>在列表点击新增手动新增注册数据 |
| **权限** | 对象查看权限 |
| **B、功能点** |  |
| **功能点** | **描述** |
| 手动注册 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/ef3b6032-8bb6-46b4-8bd1-9127887f154e.png)<br>点击列表“新增”，显示注册弹窗<br>1.  基础信息部分<br>    <br>    1.  显示当前注册的对象名称及所属类型(如上图所示)<br>        <br>    2.  名称，必填，是否预先生成名称和是否能够填写，取决于对象配置<br>        <br>    3.  所属部门，必填，可选择多个部门<br>        <br>    4.  别名：可输入多个别名(如图)<br>        <br>2.  自定义信息<br>    <br>    1.  只需展示和填写，需要用户输入的内容，不显示关联查找、公式、汇总类型的字段<br>        <br>3.  针对DNA、RNA、氨基酸序列类型的对象，用户可上传序列内容（见下文）<br>    <br>4.  可见范围：<br>    <br>    1.  项目成员可见，控制新增的实体项目下的成员是否可见，默认不勾选<br>        <br>    2.  所属部门成员可见，控制新增的实体部门下的成员是否可见，默认不勾选 |
| 氨基酸类型 | 1.  针对氨基酸类型对象  <br>    ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/bbd543c2-0f11-4e58-a94b-827be1d24348.png)<br>    <br>    1.  默认最后显示序列的填写内容（字符约束同当前的氨基酸库）<br>        <br>    2.  可点击上传附件，切换至序列上传，只可上传一个序列（同当前氨基酸库功能）<br>        <br>2.  对于DNA、RNA类型对象，同理；差别在于可设置序列的结构（如下图）![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/130e7712-144b-4964-bd70-fb5338312d61.png) |
| 化合物对象 | 见 4.8.12 |

### 元数据-编辑信息

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | Registry-科学数据注册-对象详情 |
| **功能说明** | 编辑数据 |
| **权限** | 对象查看权限，编辑权限 |
| **B、功能点** |  |
| **功能点** | **描述** |
| 基础信息 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/69b9f39c-2754-430e-8092-8c2e94c9d6de.png)<br>点击基础信息，编辑按钮，弹窗(如上图)<br>1.  名称：名称是否可编辑取决于对象配置及该对象是否已被引用（引用的前提下不可以编辑）<br>    <br>2.  用户手动修改，所属部门、项目、数据分享人、状态 |
| 自定义信息 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/589ea6b8-5395-4d1d-a353-70a42c8f7d9f.png)<br>编辑自定义信息，见上图<br>*   点击编辑，列表进入可编辑状态；<br>    <br>*   编辑的的方式和功能参照数据表格概述部分<br>    <br>*   完成编辑后，可点击完成退出编辑模式；点击取消则放弃本次编辑内容，退出编辑模型 |

### 氨基酸序列信息

| **A****、概述** |  |  |  |
| --- | --- | --- | --- |
| **功能编号** |  |  |  |
| **功能模块**<br>**访问入口** | Registry-科学数据注册-对象详情 |  |  |
| **功能说明** | 查看/编辑 氨基酸类序列，且支持蛋白质优化相关的功能呈现<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/951d3f70-f458-44fe-b9c5-4e7b7629df00.png) |  |  |
| **权限** | 对象查看权限，编辑权限 |  |  |
| **B、功能点** |  |  |  |
| **功能点** | **描述** |  |  |
| 序列信息的预览 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/f1a0eaa1-4027-48d2-8eb7-6c7589968d4b.png) | 对于氨基酸类型的对象，包含默认的序列信息的部分，包括序图谱缩略图、计算属性、序列特征、Mutation Sites、PTM、Fc Functional Effects;<br>1.  计算属性：<br>    <br>    1.  Size: 序列大小<br>        <br>    2.  MW(Da)：需要接口调用计算<br>        <br>    3.  pl：需要接口调用计算<br>        <br>    4.  Extinction Coefficient：需要接口调用计算<br>        <br>    5.  Absorbance：需要接口调用计算<br>        <br>2.  序列特征：<br>    <br>    1.  特征列表在原有基础上增加Species、Comments<br>        <br>    2.  其中特征的Type，需要和Mirabo沟通对应映射、增加或修改<br>        <br>    3.  多余附属信息，放入Comments字段<br>        <br>3.  Mutation , 突变点位（默认需从Mirabo接口同步内容）<br>    <br>    1.  Position，突变的位置，单个位点<br>        <br>    2.  WT-Mut，显示正常和突变的版本<br>        <br>    3.  Type，突变的类型<br>        <br>    4.  Reference Position，参考位置<br>        <br>4.  PTM，修饰位置（需从Mirabo接口同步内容）<br>    <br>    1.  Position，修饰的位置，单个位点<br>        <br>    2.  Residue，修饰的氨基酸是什么<br>        <br>    3.  Modification Type，修饰的类型<br>        <br>    4.  Motif，位点周围的氨基酸序列模式<br>        <br>5.  Fc Functional Effects，Fc 功能效应（需从Mirabo接口同步内容）<br>    <br>    1.  Engineering Type，工程改造类型<br>        <br>    2.  Function，具体功能<br>        <br>    3.  Effect，实际效果 |  |
| 序列编辑器 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/acacde1c-8249-4461-9c6e-66ec636697d5.png)<br>1.  点击序列编辑或查看序列，全屏打开序列编辑器<br>    <br>    1.  有序列编辑权限的用户，看到的是“序列编辑”按钮；<br>        <br>    2.  无编辑权限但是有序列信息查看权限的用户，可见“查看序列”按钮<br>        <br>    3.  以上权限都没有，无进入序列编辑器的入口<br>        <br>**编辑器改造**<br>1.  Sequence Map （序列图显示）增加PTM及Mutation类型的标记显示  <br>    ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/37762420-2498-401b-9148-44b6c1ad873e.png)<br>    <br>    1.  在对应的氨基酸点位上以圆点显示突变或修饰位置(Mirabo 接口提供能力)<br>        <br>    2.  圆点颜色，默认按不同类型进行设置（后续前端开发确定）<br>        <br>    3.  在Sequence Map上hover至圆点则显示当前突变和修饰信息<br>        <br>        1.  PTM：Type、Residue、Modif<br>            <br>        2.  Mut：Type、W-M、Reference Position<br>            <br>    4.  同时，可在序列预览显示处设置是否显示PTM 或 Mutation![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/3a8859d1-8a30-41e6-8319-89d31e698ac3.png)<br>        <br>2.  Sequence Map （序列图显示）增加抗体编号 (Antibody Numbering)的显示<br>    <br>    1.  在PTM或Mutation上层显示 氨基酸对应抗体编号；<br>        <br>    2.  需要根据视图的大小进行显示（如下图）<br>        <br>    3.  同时，可在序列预览显示处设置是否显示 Antibody Numbering  <br>        ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/b41f0903-3518-41e3-86ff-4b2a0472d469.png)<br>        <br>5.  Properties 显示  <br>    ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/1228c272-0f7d-417e-944f-218a560fe89e.png)<br>    <br>    1.  对接Mirabo 接口获取数据<br>        <br>    2.  用户不能直接修改<br>        <br>6.  触发抗体分析<br>    <br>    1.  具有Mirabo 数据接口的用户可自动在外部导入或添加序列后，调用一次接口自动分析抗体数据<br>        <br>    2.  在对序列编辑后，点击按钮时时会自动分析  <br>        ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/7d6a8748-e330-481b-9a4e-db6ba969484f.png) |  |  |

### DNA\RNA序列信息

| **A****、概述** |  |  |  |
| --- | --- | --- | --- |
| **功能编号** |  |  |  |
| **功能模块**<br>**访问入口** | Registry-科学数据注册-对象详情 |  |  |
| **功能说明** | 查看/编辑 氨基酸类序列，且支持蛋白质优化相关的功能呈现<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/951d3f70-f458-44fe-b9c5-4e7b7629df00.png) |  |  |
| **权限** | 对象查看权限，编辑权限 |  |  |
| **B、功能点** |  |  |  |
| **功能点** | **描述** |  |  |
| 序列信息的预览 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/72d519f4-1796-4a74-aa97-922778b06b13.png) | 对于氨基酸类型的对象，包含默认的序列信息的部分，包括图谱缩略图、计算属性、特征、片段、引物、翻译;<br>1.  计算属性：<br>    <br>    1.  Size: 序列大小<br>        <br>    2.  结构：Circular/Linear<br>        <br>    3.  MW(Da)：需要接口调用计算<br>        <br>    4.  pl：需要接口调用计算<br>        <br>    5.  Melting Temp (℃)：编辑器能力<br>        <br>    6.  GC (%)：编辑器能力<br>        <br>2.  序列特征：<br>    <br>    1.  原信息字段<br>        <br>3.  片段、引物、翻译原字段信息 |  |
| 序列编辑器 | 点击全屏显示，与原功能一致 |  |  |

### 关联结果

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | Registry-科学数据注册-对象详情-引用关系 |
| **功能说明** | 显示实验中填写的对象实体在过程中实验和检测的标准化数据，以满足组织对数据管理闭环需求。<br>*   实验记录中使用结果表录入数据和当前对象实体有关联的内容进行汇总显示<br>    <br>*   样品信息中关联了当前对象实体则样品检测相关结果在此处汇总显示<br>    <br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/a951b0cb-9ce2-4b8c-bfff-bc2d69367a6c.png) |
| **权限** | 对象查看权限 |
| **B、功能点** |  |
| **功能点** | **描述** |
| 结果表 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/f0cf6520-beb0-48fd-bd89-7fc75741176b.png?x-oss-process=image/crop,x_0,y_0,w_1119,h_386/ignore-error,1)<br>1.  在实验记录中填写结果表，其中有相关定义字段关联了对象实体，则实体对象的关联结果显示相关结果表内容；<br>    <br>2.  结果表的显示的主要内容为结果表数据定义约束，在此基础上新增：<br>    <br>    1.  实验记录：实验记录编号链接<br>        <br>    2.  项目：项目编号<br>        <br>    3.  创建人：当前数据创建人<br>        <br>    4.  创建时间：当前数据产生时间<br>        <br>3.  表头显示，结果表名称<br>    <br>4.  其他：鼠标hover实体对象显示气泡（统一在表格中描述） |
| 结果表在Registry中的编辑 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/ef876d38-24ba-41d4-aa38-127de5be6f4d.png)<br>1.  点击编辑图标进入编辑状态<br>    <br>2.  编辑状态，出现提交、取消按钮，并提示进入编辑状态，实验记录的数据不可编辑；<br>    <br>3.  进入编辑状态时，用户可直接在列表上进行编辑（除实验记录数据外），点击提交后完成编辑内容<br>    <br>4.  支持批量删除多行，二次确认后删除（除实验记录数据外）<br>    <br>5.  支持导出当前列表<br>    <br>6.  支持导入新数据（同对象列表的结果导入，但无需选择导入的结果表步骤） |
| 关联样品 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/f0cf6520-beb0-48fd-bd89-7fc75741176b.png?x-oss-process=image/crop,x_0,y_395,w_1119,h_351/ignore-error,1)<br>1.  在请验时，批次信息中关联了对象实体，则实体对象检测项的结果数据显示至关联结果中；<br>    <br>2.  关联样品，显示内容：<br>    <br>    1.  根据关联样品的检测项分组显示<br>        <br>    2.  样品批号<br>        <br>    3.  样品名称：显示实体对象<br>        <br>    4.  检测项结果：根据检测项目的最新的结果列设置显示<br>        <br>    5.  实验记录：样品检测的的实验记录编号链接<br>        <br>    6.  项目：项目编号<br>        <br>    7.  分析人：分析人<br>        <br>    8.  反馈结果时间：分析结果时间<br>        <br>3.  其他：鼠标hover实体对象显示气泡（统一在表格中描述） |
| 父对象查看的关联结果 | 父对象下可查看所有子对象的关联结果内容：<br>如，Antibody的子对象为Purility Protein，那么Purility Protein的所有实体在实验结果表关联数据和样品数据都将呈现在Antibody父实体的关联结果中 |

### 关联结果数据导入

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | Registry-科学数据注册-对象详情-关联数据 |
| **功能说明** | 实验数据不依赖ELN模块，支持用户上传线下结果数据进入关联结果内容 |
| **权限** | 对象查看权限 |
| **B、功能点** |  |
| **功能点** | **描述** |
| 数据导入 | 支持在对象列表点击“结果数据导入”按钮，导入关联结果数据信息(实验信息)<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/179f38bf-f080-4540-b558-249b5b7d7098.png)<br>1.  选择需要导入数据的表结构（选择范围是对象关联的数据表）  <br>    ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/4f0b91e1-a795-4898-b6f1-4e170debf531.png)<br>    <br>2.  可选择用户可见的结果表<br>    <br>3.  点击“下一步”，进入通用导入  <br>    ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/6538de93-3905-4aac-9606-8db7d8f2719a.png)<br>    <br>4.  校验后，将内容导入数据库，进入对象详情-关联结果，可见与对象关联的数据内容<br>    <br>5.  导入的数据支持用户删除对应数据（支持使用上下文菜单中的删除，删除符合条件的数据，但实验关联数据无法删除）  <br>    ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/258b55c8-d361-4f6f-8d00-420f1ee97667.png)<br>    <br>6.  注意，导入的内容不限定对象，即关联的结果是根据自己数据的关联对象进行匹配 |
| 导入规则 | 1.  显示当前导入的名称(系统名称)<br>    <br>2.  弹窗内显示用户可手动填写的表格<br>    <br>    1.  列表字段内容为注册时填写内容（见下文）<br>        <br>    2.  表头对于需要必填字段出现“\*” 号提示<br>        <br>    3.  hover至![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/f47d29a8-19af-47d6-a1ae-2b790355534e.png?x-oss-process=image/crop,x_0,y_0,w_30,h_36/ignore-error,1)出现气泡，显示当前字段的说明（见下文）<br>        <br>    4.  默认列表行数为20行<br>        <br>3.  字段：<br>    <br>    1.  导入的显示字段为新增时需填写字段（元数据-基础信息显示在前，其他字段按对象配置顺序显示）;<br>        <br>    2.  对于字段属于必填项，则显示出星号;<br>        <br>    3.  不支持导入字段：图片、附件、链接、关联查找、公式;<br>        <br>    4.  字段说明：<br>        <br>        1.  单行文本，多行文本：文本类型+(必填)+，请输入文本内容;<br>            <br>        2.  关联对象：关联对象+(必填)+(单选/多选)+，请输入关联对象编号或名称，多选请用“,” 进行分割填写;<br>            <br>        3.  下拉选择：下拉选择+(必填)+(单选/多选)+，请输入匹配的下拉选择内容;（选择范围：1，2，3...）;<br>            <br>        4.  数字：数字类型+(必填)+，请输入小数为2位的数字<br>            <br>        5.  时间：时间类型+(必填)+，请输入yyyy-mm-dd hh:mm类型日期;<br>            <br>        6.  人员：人员类型+(必填)+，请输入人员的账号;<br>            <br>        7.  部门：部门类型+(必填)+，请输入部门名称;<br>            <br>        8.  复选框：复选框类型+(必填)+，请输入是/否;<br>            <br>        9.  其他类型：图片、附件、链接、关联查找、公式字段不支持导入;<br>            <br>4.  支持列表基本编辑能力<br>    <br>    1.  对于文本、关联对象、时间选择、人员、部门、复选框在导入列表中都以文本方式进行填写;<br>        <br>    2.  对于下拉选择支持在单元格直接进行对应类型的选择;<br>        <br>    3.  图片、附件、链接、关联查找、公式，不支持填写，或填写后忽略内容；<br>        <br>    4.  支持列的上下文菜单；<br>        <br>    5.  不需要筛选排序能力；<br>        <br>    6.  支持列表表格的填充柄。<br>        <br>5.  点击确认后，进行导入的数据校验<br>    <br>    1.  对行不为空的数据进行导入完整性校验；<br>        <br>    2.  必填内容不能为空；<br>        <br>    3.  数据匹配校验：关联对象、用户、部门、下拉选择，需要能够匹配系统已有数据；<br>        <br>    4.  格式校验：日期、数字，日期格式匹配，数字按系统设置进行约束填入（如缺失位数自动补0，超过位数舍去多余小数位）；<br>        <br>    5.  无需填写内容忽略校验和内容；<br>        <br>    6.  对于不符合校验数据单元格，进行标识（如图），鼠标hover后显示校验不通过原因  <br>        ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/eda6391e-d94d-453f-834c-6dea142752ce.png)<br>        <br>6.  其他：支持用户复制excel数据粘贴导入至列表中（详见表格能力复制单元格内容） |
| 全局结果导入 入口 | 待补充 |

### \[ELN\] 关联结果中支持样品检测数据

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | Registry-科学数据注册-对象详情-关联结果 |
| **功能说明** | 1.  请验时支持选择 科学数据注册的对象实体<br>    <br>2.  样品-检项，状态变为已完成时，样品结果关联至对象实体 |
| **权限** | 对象查看权限 |
| **B、功能点** |  |
| **功能点** | **描述** |
| 样品请验 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/17dac3a2-4631-4748-a956-4063e8e8e297.png)![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/00736c23-f4c8-4d21-a955-44ed7b75f5a0.png?x-oss-process=image/crop,x_0,y_0,w_815,h_464/ignore-error,1)<br>如图所示<br>1.  样品名称支持选注册数据<br>    <br>2.  选择注册数据完成后，回填样品名称字段 "编号(名称)"（上图2 是选择对象为化合物类型对象时）<br>    <br>3.  已经选择过的内容支持在下拉列表中记忆，用户可再选择<br>    <br>注册数据选择（**列表筛选优化**）<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/d33fe0d4-8406-41fa-9246-6f4bc1711535.png)<br>1.  支持名称、编号、~~项目号、创建人~~模糊检索<br>    <br>2.  列表表头支持字段筛选，包括Structure支持结构式的检索<br>    <br>3.  默认左侧定位至 “全部注册实体”，即可见全部用户的数据<br>    <br>4.  检索全局数据时，结构检索下只呈现化合物相关数据<br>    <br>5.  点击<添加>选择对应的数据进入样品<br>    <br>6.  列表中对于关联物料的对象实体，显示关联物料容器数量，点击显示物料弹窗，默认将物料名称填上搜索对象相关的物料数据，确定物料后关闭全部弹窗返回样品请验<br>    <br>选择的物料主数据-为对象时：<br>1.  送样时选择的物料关联了注册数据的情况 (如下图)<br>    <br>    ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/38040304-1aff-4662-80a8-037885d80241.png)<br>    <br>2.  这种情况送样的样品，反馈结果后 也需要在对象中显示样品的检测结果 |
| 注册数据在ELN其他地方的显示 | 样品名称关联了注册对象时：<br>*   样品列表（样品池、我的分析、我的请验）：鼠标hover 样品名称气泡显示出对象的基础信息内容（Registry已实现）<br>    <br>*   其他地方：检测报告单、样品库<br>    <br>样品名称选择的物料->主数据关联注册对象时：<br>*   鼠标hover样品名称气泡显示（如下图），且支持在这个气泡基础上hover注册数据对象 出现这个对象的基础信息内容  <br>    ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/afb93e58-c40c-42df-86bf-97fc48e9a315.png) |
| 样品结果表字段 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/7c01158b-168c-474b-92b7-b31feb742ad8.png)<br>1.  根据关联样品的检测项分组显示<br>    <br>2.  样品批号<br>    <br>3.  样品名称：显示实体对象<br>    <br>4.  项目：项目编号<br>    <br>5.  检测项结果：根据检测项目的最新的结果列设置显示（结果 或 检测内自定义的结果字段）<br>    <br>6.  检测完成时间 (原检测登记数据字段)<br>    <br>7.  备注 (原检测登记数据字段)<br>    <br>8.  谱图附件 (原检测登记数据字段)<br>    <br>9.  实验记录：样品检测的的实验记录编号链接，可点击链接跳转<br>    <br>10.  创建人：创建人（即分析人）<br>    <br>11.  创建时间：数据创建时间 |
| 导入情况 | 导入的样品模板需增加字段：【注册对象】【注册数据】<br>*   注册对象：支持选择样品导入的公司下（请样时选择的公司）的对象<br>    <br>*   注册数据：用户自己输入导入的对象编号<br>    <br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/8dbe769d-74cd-4706-854a-b58282153310.png)<br>*   样品名称显示时匹配优先级（用来处理注册数据、化合物、样品名称都填写的情况），注册数据->化合物编号->样品名称 |
| 其他边界情况说明 | 1.  影响范围补充说明：<br>    <br>    1.  实验中反馈结果时，对于需要进行模块复核的检测报告单模块，需模块复核后同步数据至registry结果数据<br>        <br>    2.  结果变更，结果变更成功后需要更新最新结果至数据表<br>        <br>2.  实验记录内进行请验，暂不支持从实验记录请验时选择注册对象数据<br>    <br>3.  Registry中不支持之间修改样品结果数据，需要在ELN的检测报告单登记结果时进行变更修改 |
| licence控制 | licence中有Registry部分时在请验时才显示选择注册数据内容 |

### 子对象列表

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | Registry-科学数据注册-对象详情-子对象 |
| **功能说明** | 父任务下记录所有注册的子对象的数据，通过父实体可查看所有子实体的注册数据，帮助科研人员汇总实际实验数据 |
| **权限** | 对象查看权限 |
| **B、功能点** |  |
| **功能点** | **描述** |
| 子对象实体在父实体中显示 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/1632577e-5933-4451-92fa-90a2bc1467f9.png?x-oss-process=image/crop,x_0,y_0,w_670,h_365/ignore-error,1)<br>如图所示<br>1.  子对象展示在关联结果Tab后，父对象下的不同子对象，分不同的tab显示<br>    <br>2.  列表显示子对象的【名称】【编号】【元数据-自定义对象的信息】【实验记录链接】【项目】【创建人、创建时间】<br>    <br>3.  搜索：支持检索\[名称、编号、实验、项目\]<br>    <br>4.  其他：鼠标hover实体对象显示气泡（统一在表格中描述）<br>    <br>5.  在列表直接新增子对象实体，暂不做 |

### 引用关系

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | Registry-科学数据注册-对象详情-引用关系 |
| **功能说明** | 记录实体被实验记录引用；记录注册实体被引用的关系<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/15116897-9046-4702-b550-25034e11838e.png) |
| **权限** | 对象查看权限 |
| **B、功能点** |  |
| **功能点** | **描述** |
| 引用关系 | 对象实体被引用的情况<br>1.  实验、科学数据库中注册实体：注册实体时构建关联的关系，记录注册实体和关联的关系<br>    <br>2.  实验中编辑器引用实体：记录实验记录编辑引用对象时，记录实验和关联的关系<br>    <br>3.  实验中注册对象：实验中注册对象，记录实验的关联（类型为注册实体）<br>    <br>4.  ~~结果表中引用实体：已经在结果表中存在~~<br>    <br>5.  ~~产物中引用实体：在关联物料中已体现~~<br>    <br>6.  ~~物料中引用实体：在关联物料中已体现~~<br>    <br>7.  ~~样品中应用实体：在结果表中已体现~~ |
| 列表的内容 | 1.  名称：引用的对象，实验记录或实体对象<br>    <br>2.  项目：实体或实验记录所属项目<br>    <br>3.  类型：实验记录引用、实体注册引用<br>    <br>4.  修改人：最新的修改人<br>    <br>5.  修改时间：引用的最新时间<br>    <br>6.  如引用方删除关联则这里也要对应删除 |

### 关联物料

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | Inventory-物料配置<br>Registry-科学数据注册-对象详情-关联物料 |
| **功能说明** | 1.  物料主数据支持接入科学数据注册实体，使用注册实体的物料主数据的入库物料将在Registry 注册实体详情中显示相关库存信息；<br>    <br>2.  使用场景：支持注册实体的实际产出进行库存管理和追踪 |
| **权限** | 对象查看权限 |
| **B、功能点** |  |
| **功能点** | **描述** |
| 物料类型设置 | 物料类型设置在所有的业务类型里的基础信息部分，新增“注册数据” 选项（基础属性的别名后增加，默认不显示）<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/73f68809-181a-4e8d-bea9-8185bc78c4cf.png)<br>1.  【注册数据】字段设置为显示时，物料主数据支持选择Registry 科学注册数据；<br>    <br>2.  主数据唯一校验，支持选择后，注册数据编号参与主数据的唯一校验；<br>    <br>3.  注意，对于普通物料中【化合物】与【注册数据】只能选择其中一个；选择时toast提示 “当前【化合物】和【注册数据】只能显示其中一个”。 |
| 物料主数据 | 物料主数据新增入口分为，物料库-物料配置-物料主数据、ELN-实验记录-产出入库模块<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/9e3cbaf6-5c2a-4db2-93a7-46518912b22b.png)![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/a667c645-2634-4ed9-acca-134fe8210d91.png)<br>注册数据选择<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/b4b6003c-89d4-4893-8002-5f5a56e5342b.png)<br>1.  支持名称、编号、~~项目号、创建人~~模糊检索<br>    <br>2.  列表表头支持字段筛选，包括Structure支持结构式的检索<br>    <br>3.  默认左侧定位至 “全部注册实体”，即可见全部用户的数据<br>    <br>4.  检索全局数据时，结构检索下只呈现化合物相关数据<br>    <br>5.  点击<添加>选择对应的数据进入<br>    <br>6.  选择实体填入【注册数据】时，将注册数据填入内容，同步更新进物料名称 "编号 (名称)"（如：HW1800035 (6-dihydroxycyclohexa-1,3-diene-1-carboxylic acid )<br>    <br>7.  对于【注册数据】时，如果选中化合物类型数据时，下面显示【化合物编号】【化合物名称】【分子量】【cas】 |
| 物料库其他要求 | 1.  对于在物料主数据详情、物料详情中查看【注册数据】时<br>    <br>    1.  显示对应注册对象标签 ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/10365703-cfea-43a5-8977-c65d68ee15fa.png) <br>        <br>    2.  对象标签hover上显示该对象的基础信息（结构式信息暂不显示）  <br>        ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/80e9a3ce-5784-48bc-b4b9-131c92c02f34.png)<br>        <br>2.  注册字段-化合物类型的数据在库存台账中暂不需要支持结构式检索（库存台账的结构式检索，仍然只支持原化合物的检索即可）<br>    <br>3.  物料申领列表支持显示搜索 注册数据内容（暂不需要支持 化合物类型的结构式搜索，结构式图片不显示）![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/d50dad7c-5db4-4787-a120-29e6cfab6cd4.png) |
| Registry显示相关内容 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/53523d2a-a1a3-4680-ac52-5203d6a66715.png?x-oss-process=image/crop,x_16,y_0,w_1878,h_382/ignore-error,1)<br>1.  与注册数据关联的物料可以在对应Registry 关联物料 tab下显示（该部分处于所有tab的最后内容）；<br>    <br>2.  支持容器号、批次、物料编号、物料名称进行搜索；<br>    <br>3.  默认不显示没有剩余量的物料；<br>    <br>4.  字段如上图所示，支持点击批次链接跳转物料管理的批次信息、支持点击来源实验跳转ELN实验预览页面（无权限需提示）。 |
| 物料主数据导入 | 主数据导入模板增加字段：【注册对象】【注册数据】<br>选择物料类型后，对于物料类型设置中启用注册数据字段的导入模板增加【注册对象】【注册数据】<br>*   注册对象：支持选择当前物料类型的公司下的对象<br>    <br>*   注册数据：用户自己输入导入的对象编号<br>    <br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/c7884eac-9256-497c-a2bc-38ac7284cb00.png) |

### 化合物类型内容展示

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | Registry-科学数据注册-对象详情 |
| **功能说明** | 化合物类型对象和子对象进行实体创建和查看的相关说明 |
| **权限** |  |
| **B、功能点** |  |
| **功能点** | **描述** |
| 化合物类型对象的新增 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/7f60e592-d0aa-4df7-aafd-164c51e8d66e.png)<br>*   除设置的其他需要填写的内容外，新增过程中需要用户绘制化合物结构图<br>    <br>*   绘制完成后，点击“同步数据”，系统需自动完成【IUPAC】【SMILES】【MF】【MW】【InChI】【InChIKey】【CAS】【mol v2000】等相关数据，其中将【cas】【分子量】预填进入，分子量用户可修改；<br>    <br>*   结构校验，用户自己绘制结构时，可点击“结构校验”，进行当前~~公司~~对象内的结构进行重复性校验；同时点击确认后也会进行校验，如有相同结构则会进行提醒，用户仍可注册为新结构![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/04e58d7c-2b4a-4659-bd08-d61820c0c8d4.png)<br>    <br>*   注：以上逻辑参考下当前的化合物库，均已实现功能 |
| 化合物子对象的新增 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/4d68a998-7efd-42fc-808b-e133a9a42b08.png)<br>*   子对象关联对象为化合物时，支持下拉筛选化合物<br>    <br>*   点击“![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/7299ebe1-0143-4cec-8840-d934c5bcb9a3.png)”弹窗绘图进行结构的检索（统一的结构式检索逻辑）<br>    <br>*   同时支持编号、名称、别名、cas号的检索<br>    <br>*   点击选择内容将化合物对象填入  <br>    ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/dcd42f30-ff7c-43e0-be41-abb0f305099d.png) |
| 详情显示 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/b56b150a-acc9-4fcd-befc-8cb0c192516f.png)<br>*   如图显示，左侧为化合物元数据内容，右侧第一个是结构属性内容；<br>    <br>*   结构属性计算后支持编辑<br>    <br>*   结构被引用的情况（目前只有对象实体引用）下不允许修改化合物结构<br>    <br>*   化合物子对象实体引用父对象也是化合物类型时，子对象详情中也显示相同的父对象化合物结构属性页签（相当于引用了父对象的结构，且不可修改结构和属性内容） |
| 导入的情况 | 见4.12 |

### 对象实体关系图

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | Registry-科学数据注册-对象详情-注册实体关系图 |
| **功能说明** | 通过某个对象实体查看相互关联的实体关系，及追溯整个关系链条参与的实体情况<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/a48b4393-fc6b-44df-b4d9-b12d5555310a.png) |
| 典型场景 | 1.  生物分子谱系追踪<br>    <br>    1.  抗体药物研发中，可通过 关系图 查看目标抗体的重链 / 轻链序列来源、对应的表达质粒、稳转细胞株，以及下游纯化得到的蛋白样本，完整呈现从基因序列到最终样品的全链路衍生关系。<br>        <br>2.  实验数据溯源<br>    <br>    1.  当分析实验结果异常时，可通过关联实体快速回溯到对应的起始样本、批次、构建原型，定位问题来源，无需在多个页面手动检索。<br>        <br>3.  复杂项目全局把控<br>    <br>    1.  对于包含数十上百个构建体的大型项目，管理者可通过  关系图 快速掌握项目整体结构、各分支的构建进度，识别缺失的中间环节。 |
| **权限** | 对象查看权限 |
| **B、功能点** |  |
| **功能点** | **描述** |
| 注册实体关系图 | 1.  新增的入口位置：对象详情->右侧Tab->子对象Tab后，增加“注册关系图” 入口；<br>    <br>2.  点击呈现以当前注册对象实体为起点，向上游和下游寻找相关联注册实体或父子实体：  <br>    ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/2bf769d7-6f4f-40d2-a0c5-c07c9c43d94e.png)<br>    <br>    1.  查找层级限制，以当前对象为起点 向上及向下分别穿透3个层级的实体关系；<br>        <br>    2.  查询到得实体通过连线表示关联和父子关系图谱（如图）；<br>        <br>    3.  每个节点默认显示：对象图标+对象编号+名称+所属对象；<br>        <br>    4.  对于当前用户没有权限可见得实体，则只显示占位 “无权限查看”（如图）；<br>        <br>    5.  可拖动节点位置。<br>        <br>3.  查看实体信息  <br>    ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/80fd240b-be02-4c60-9aec-e2156e95a03b.png)<br>    <br>    1.  将鼠标悬停在实体标签上可查看该实体的详细信息；<br>        <br>    2.  点击实体标签可跳转至该实体的详情页面（新页面打开）；<br>        <br>4.  支持手动点击查看超过上下3层外的关系实体：<br>    <br>    1.  对于上下的第3层关系实体，如有大于3层外的关联关系没有显示，鼠标hover节点时，出现进一步穿透图标（如下图），点击可向上披露一个层信息和关联关系；  <br>        ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/fa377eeb-29a0-4f55-853b-45a465dc824b.png)<br>        <br>5.  关系图在左下角包含一个工具栏，配有可用于操作关系图的控件。  <br>    ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/51f18230-6418-443c-bafd-6559a94c83a8.png)<br>    <br>    1.  选择+或-进行放大或缩小，也可以使用鼠标滚轮或触控板；<br>        <br>    2.  选择框架图标以适配整个图表进行查看；<br>        <br>    3.  选择十字准星图标以居中显示在当前（即你当前详情的实体）对象实体上；<br>        <br>    4.  在图表上的任意位置点击并拖动，即可在关系图中平移；<br>        <br>6.  按对象筛选实体  <br>    ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/32c37e3e-84dd-4437-ad69-dbee3ba2fff5.png)<br>    <br>    1.  点击实体图左侧的筛选图标，打开架构筛选菜单；<br>        <br>    2.  取消选择你想从图表中隐藏的任何对象；<br>        <br>    3.  点击确定更改；<br>        <br>    4.  实体映射将重新加载并应用你的筛选条件；<br>        <br>    5.  当筛选器处于活动状态时，筛选器图标上会出现一个蓝色圆点，以表明图表未显示所有关系<br>        <br>7.  按关系筛选实体<br>    <br>8.  节点显示字段内容设置  <br>    ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/2af6b6e2-05d4-4d72-af25-766a981b0f09.png)<br>    <br>    1.  设置节点中对应对象希望显示的字段，默认显示的是对象类型；<br>        <br>    2.  设置分为2个部分：<br>        <br>        1.  基础字段，所有对象共同部分内容<br>            <br>        2.  对象自定义字段（注意选择的自定义字段不显示关联字段内容，因为这部分内容已经在实体关系图中已体现），每个对象独立设置<br>            <br>    3.  对象自定义中的对象是用户可见的内容，用户可以根据需要选择展示字段内容<br>        <br>    4.  这部分设置内容存储在用户个人账户，并对所有对象实体生效（个人设置一份对所有查看的对象都生效） |
| html 原型Demo | [请至钉钉文档查看附件《registry-map.html》。](https://alidocs.dingtalk.com/i/nodes/vy20BglGWOeqDXaRuGNwAbowJA7depqY?doc_type=wiki_doc&iframeQuery=anchorId%3DX02msfxxq9q7hnd3wa2ri4&rnd=0.4666792818659471) |

### Codon Optimization(本期不做)

## 抗体蛋白分析

### 结构分析

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | Registry-科学数据注册-对象详情-结构分析 |
| **功能说明** | 注册分子后，自动调用结构分析接口，分析蛋白分子的结构信息<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/01aee521-6ecd-4d64-8787-4157919fc79e.png) |
| **权限** | 对象查看权限 |
| **B、功能点** |  |
| **功能点** | **描述** |
| 结构分析-概览 | 结构化储存，支持关联查找通过 关联对象->关联对象查找表 “分子结构概览”<br>显示字段（如下图）<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/4bc3623c-bca8-4818-a361-a537a1983a0e.png?x-oss-process=image/crop,x_0,y_0,w_1308,h_733/ignore-error,1)<br>*   ~~Type：文本~~<br>    <br>*   Species：文本<br>    <br>*   Chain Count：int<br>    <br>*   Has FC：YES/NO<br>    <br>*   MW(Da)：数字，2位小数<br>    <br>*   pI：数字，2位小数<br>    <br>*   EC：数字，2位小数<br>    <br>*   ~~Absorbance：数字，2位小数~~<br>    <br>*   Is Knobs-into-holes：YES/NO<br>    <br>*   Has Common LC：YES/NO<br>    <br>*   Is Symmetric：YES/NO<br>    <br>*   Is CrossMab：YES/NO<br>    <br>*   Valency：int<br>    <br>*   Specficity Count：int<br>    <br>*   Molecular Type：文本<br>    <br>*   Format Label：文本<br>    <br>*   ~~FC Function：文本~~<br>    <br>*   Fc Effector Analysis: list |
| 结构拓扑图 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/65d3170f-f123-4a41-81de-40adee56b8b8.png)<br>非结构化储存，支持关联查找通过 关联对象->关联对象查找对象字段 “分子结构拓扑图”；<br>整个图作为整体可被自定义字段引用（特殊对象字段）<br>在自定义字段显示的交互与方式：<br>*   缩略图显示在字段列表中<br>    <br>*   点击弹出显示整体完整信息<br>    <br>*   鼠标hover显示拓扑图中Domain详细信息 |
| 链信息 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/3e240589-1613-4cab-a1c8-2bbec47a6bcf.png)<br>一级标题显示链名称（会显示该分子所有链的基础信息及Domian相关信息）<br>*   链信息：显示如图内容，点击名称可跳转到系统关联的AA对象实体，其他字段内容非结构化存储<br>    <br>*   Domian信息：如图，非结构化存储 |
| numbling | 待补充 |
| 副产物 | 非结构化存储 |

### 3D结构信息

连同结构分析时，同步完成，有数据就显示3D结构信息的tab，没有就不显示整个Tab

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | Registry-科学数据注册-对象详情-3D结构信息 |
| **功能说明** | 上传/预测蛋白3D结构<br>在线预览蛋白的PDB结构<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/f839ad64-7959-4f0a-8cd1-2992f1767b55.png) |
| **权限** | 对象查看权限 |
| **B、功能点** |  |
| **功能点** | **描述** |
| 3D结构上传 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/41e4e8da-e690-42cb-9162-734dfefd0c7d.png)<br>1.  在没有3D结构时，查看为缺省页，支持用户上传和点击进行预测（3D结构预测，要在设置内打开-抗体蛋白参数接口时显示）<br>    <br>2.  上传，上传.pdb、.cif、.bcif、.pdbqt、.pqr 格式的文件，上传后预览<br>    <br>3.  蛋白3D结构预测，请求Mriabo接口，获取pdb文件后预览<br>    <br>    1.  二次气泡确认，文字如上图，确认后，开启接口<br>        <br>    2.  反馈等待进度（如图）  <br>        ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/b76f84fe-0f0d-4111-b2b9-35ad5707971a.png) |
| 更新结构 | 在已有结构信息的前提下，支持用户再上传或再次预测，无论哪种途径完成后将会替换现有结构信息（只保留当前完成的版本）<br>在已有3D结构的前提下，上传和预测按钮悬浮在预览框的最下面（包括提交预测后的进度信息）<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/9a7e86a0-f4fc-4768-9f56-ca16329657d1.png)<br>在更新上结构后，自动帮用户更新蛋白分析相关已分析内容（即蛋白分析用户已触发分析的内容，用新结构自动重新计算） |

### 蛋白分析

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | Registry-科学数据注册-对象详情-蛋白分析 |
| **功能说明** | 注册分子后，用户可选择分析蛋白的各个指标选项维度：PTM Liabiliities、Proteolytic Site Prediction、Aggregation、Cysteine Stability、Solubility、Viscosity、Thermal Stability 、Immunogenicity<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/453ae823-c9ed-4083-89cc-42c66215a373.png) |
| **权限** | 对象查看权限 |
| **B、功能点** |  |
| **功能点** | **描述** |
| 蛋白分析-概览 | 对于未进行分析的对象，进入"蛋白分析"tab（如下图）<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/a58cb3f0-0f3c-426e-88d6-cdb03f4057ba.png)<br>1.  根据上图的内容，用户可多选需要进行分析的内容，可多选<br>    <br>2.  完成后点击“开始分析” （至少选择一个）<br>    <br>3.  进行分析请求接口的提交，页面显示进度和完成状态  <br>    ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/ea7db1b5-2936-4241-8250-29e36c0a556a.png)<br>    <br>4.  对于未进行分析项目，用户可以单独进行分析的提交，确认后进入提交状态<br>    <br>5.  提交前校验：  <br>    ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/4bc92485-0dd1-4492-a6e5-a0d281c6501d.png)<br>    <br>    1.  点击“开始分析”，如所选内容包括 “Cysteine Stability、Thermal Stability、Solubility、Aggregation、Viscosity” ，则前置条件需要有蛋白pdb结构，如没有3d结构 则需要进行探测提醒（如上图）；<br>        <br>    2.  用户上传PDB文件后，继续后续分析；<br>        <br>    3.  用户点击“蛋白3D结构预测” 则显示进度（如上图），用户可以关闭探测（如再次触发打开 则还是显示这个弹窗 显示进度），用户在3D结构Tab查看时，也可以查看到进度内容；  <br>        ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/6a6b04e5-80fa-4ff3-bf1e-04cb7e1f6ce6.png)<br>        <br>6.  提交后等待时需显示出现，当前分析的状态进度值<br>    <br>7.  对于完成的项目，显示出分析结果数值，点击可弹窗查看结果内容<br>    <br>    1.  结果值为：High、Medium、Low + 具体数值显示<br>        <br>    2.  点击侧边抽屉显示详情页面  <br>        ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/3e13193f-3a86-4a6e-8abe-545bd18ce881.png)<br>        <br>        1.  标题显示对应的分析项目名称，点击“关闭”收起当前抽屉<br>            <br>        2.  内容左上显示对象实体的名称、编号、右侧显示结果值<br>            <br>        3.  详情主要内容显示分析的详情信息，该部分的信息以非结构化的方式存储<br>            <br>        4.  前端显示的方法，参考Mirabo的前端展示（对方说会给予一些组件的JS 看是否可以直接使用？） |
| 每个分析预测项目名称与说明 | ### Sequence Liabilities<br>*   PTM Liabiliities v1.0 Identify Sequenc motifs prone to PTMs like deamidation and oxidation.<br>    <br>*   Proteolytic Site Prediction v1.0 Predict potential cleavage sites to assess the potential clipping variants.<br>    <br>### Biophysical Properties<br>*   Aggregation v1.0 Predict the tendency to form aggregates by analyzing drivers like surface hydrophobic patches, charge distribution, and structural stability.<br>    <br>*   Cysteine Stability v1.0  Assess free cysteine residues and disulfide bond configurations to predict mispairing and structural integrity risks.<br>    <br>*   Solubility v1.0  Predict solubility upon expression and in high-concentration formulations to prevent manufacturing and dosing issues.<br>    <br>*   Viscosity v1.0 Predict high viscosity in concentrated formulations by analysing surface charge patches, hydrophobicity, and transient protein-protein interactions.<br>    <br>*   Thermal Stability v1.0 Estimate structural stability under thermal stress by calculating the free energy of folding<br>    <br>### Satety & Efficacy<br>*   Immunogenicity v1.0  Assess the risk of inducing an ADA response through T-cell/B-cell epitope prediction and BCR naturalness analysis. |
| 名词解释 | PTM Liabilities v1.0<br>翻译后修饰风险评估 V1.0<br>识别易发生脱酰胺、氧化等翻译后修饰的序列基序<br>Proteolytic Site Prediction v1.0<br>蛋白酶切位点预测 V1.0<br>预测潜在酶切位点，评估蛋白剪切变体生成风险<br>Aggregation v1.0<br>聚集倾向预测 V1.0<br>分析表面疏水区域、电荷分布、结构稳定性等影响因素，预测蛋白聚集趋势<br>Cysteine Stability v1.0<br>半胱氨酸稳定性评估 V1.0<br>检测游离半胱氨酸残基与二硫键排布，预判键位错配及蛋白结构破损风险<br>Solubility v1.0<br>溶解度预测 V1.0<br>预测蛋白表达阶段与高浓度制剂下的溶解性能，规避生产及给药应用问题<br>Viscosity v1.0<br>黏度特性预测 V1.0<br>结合表面电荷分布、疏水性、瞬时蛋白互作，预判高浓度制剂高黏度问题<br>Thermal Stability v1.0<br>热稳定性评估 V1.0<br>计算蛋白折叠自由能，评估热应激环境下的结构稳定程度<br>Immunogenicity v1.0<br>免疫原性风险评估 V1.0<br>通过 T/B 细胞表位预测、B 细胞受体天然性分析，评估诱发抗药抗体（ADA）免疫应答风险 |
| 对象自定义字段引用分析数据 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/8eb69eed-74b9-4e00-ba9b-54f07126d5c9.png)<br>1.  系统支持在对象配置时，字段引用蛋白分析内容（具体配置见上文）<br>    <br>2.  在完成分析后，在配置的自定义字段可见对应的分析结果（列表同样如此）<br>    <br>    1.  点击蓝色数字弹出显示分析详情页面（见下文）<br>        <br>    2.  暂时无分析结果则不显示为空<br>        <br>    3.  该部分字段同计算字段一样在实体中不可以进行修改、导入 |
| 详情内容 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/54178e1a-5780-46ee-a42b-bfe6cb067caf.png)<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/f95599f2-f22c-403f-9c66-e3b0a9af4d99.png)<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/067cab26-6f43-4c11-a3e3-cb8dbaf69058.png)<br>蛋白分析项的优先级 |

## 对象列表

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | Registry-科学数据注册 |
| **功能说明** | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/98fcfe9a-abf7-4f50-a729-abf9cac824b3.png)<br>注册的科学数据，使用两栏布局设计，左侧为导航侧边栏，右侧为内容主区域显示列表及详情，可进行数据的搜索筛选、导入、导出 |
| **权限** | 见下文 |
| **B、功能点** |  |
| **功能点** | **描述** |
| 科学数据注册列表-左侧导航栏 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/b7cb78f1-c5be-4f10-9915-bc94bdfc9e41.png)<br>1.  左侧导航栏显示：当前公司下设置的对象列表（部门适用范围下的对象？？）<br>    <br>2.  按对象类型进行分组显示对象：<br>    <br>    1.  分组排序自定义、DNA/RNA、氨基酸、化合物；<br>        <br>    2.  组内对象显示顺序按对象创建时间显示；<br>        <br>    3.  对象类型下无可见对象则不显示，分组；<br>        <br>3.  导航中对象图标为对象设置中的图标；<br>    <br>4.  点击导航，切换列表数据内容； |
| 科学数据注册列表-列表 | 列表数据显示：<br>1.  对象基础字段（所有对象都保持一致）<br>    <br>    1.  名称：对象名称，保持公司下唯一<br>        <br>    2.  别名：多个标签样显示<br>        <br>    3.  编号：对象编号，保持公司下唯一<br>        <br>    4.  项目：对象所属项目，可能有多个<br>        <br>    5.  所属部门：对象所属部门，多个<br>        <br>    6.  状态：有效、作废<br>        <br>2.  对象定义字段：<br>    <br>    1.  显示根据对象定义的字段<br>        <br>    2.  字段的类型及显示方式由对象设置决定(见上文)<br>        <br>3.  关键词搜索：<br>    <br>    1.  内容见[《数据表格能力概述 V1》](https://alidocs.dingtalk.com/api/doc/transit?dentryUuid=ZX6GRezwJl7PK2N3UQdjvkxKVdqbropQ&queryString=utm_medium%3Ddingdoc_doc_plugin_card%26utm_source%3Ddingdoc_doc)3.1-数据筛选和排序<br>        <br>4.  列表表头筛选<br>    <br>    1.  内容见[《数据表格能力概述 V1》](https://alidocs.dingtalk.com/api/doc/transit?dentryUuid=ZX6GRezwJl7PK2N3UQdjvkxKVdqbropQ&queryString=utm_medium%3Ddingdoc_doc_plugin_card%26utm_source%3Ddingdoc_doc)3.2-列表搜索 |
| 化合物结构在列表中的显示 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/f7d816a8-0869-42a2-b811-bb704ce139de.png)<br>支持Structure字段列，通过ketcher组件实时渲染显示化合物结构图<br>点击下拉支持对化合物结构进行检索：<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/32267244-70d3-4167-8863-834ae9d20d59.png)<br>支持化合物的相似、子结构、精确结构的检索，默认选项为精确结构<br>确认后表头显示筛选![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/3ce06a8d-d862-4657-ad13-d39b369e710d.png)，以smiles方式显示:\[字段名称\] \[搜索方式\]包含“\[smiles\]” |

## 外部实验结果导入

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | Registry-科学数据注册 |
| **功能说明** | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/2efb28e3-4e28-4146-a4c6-3c2bd7e4f5e3.png)<br>在对象列表右上角，上传本地实验数据关联至相关的对象实体 |
| **权限** | 见下文 |
| **B、功能点** |  |
| **功能点** | **描述** |
| 科学数据实验结果数据导入 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/b7cb78f1-c5be-4f10-9915-bc94bdfc9e41.png)<br>1.  导入入口<br>    <br>*   位置：列表页面顶部右侧导入操作按钮；<br>    <br>*   触发方式：点击“导入”按钮后弹窗(如下)；  <br>    ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/4f0b91e1-a795-4898-b6f1-4e170debf531.png)<br>    <br>*   用户选择可见的结果表后，点击下一步，则弹窗进入对应结果格式的导入页面<br>    <br>1.  导入数据：  <br>    ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/6538de93-3905-4aac-9606-8db7d8f2719a.png)<br>    <br>    1.  页面显示导入的结果表名称<br>        <br>    2.  导入的相关描述请见下章节 批量操作的导入部分<br>        <br>2.  导入后，在对象的关联结果中显示与对象关联的结果数据<br>    <br>3.  注意，导入的内容不限定对象，即关联的结果是根据自己数据的关联对象进行匹配 |

### 数据录入 Agent （Data Entry Agent）

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | Registry-科学数据注册-结果数据导入<br>ELN-实验记录-结果数据导入 |
| **功能说明** | 在对象列表右上角，上传本地实验数据关联至相关的对象实体 |
| **权限** | 见下文 |
| **B、功能点** |  |
| **功能点** | **描述** |
| 背景 | 背景：<br>科研大量数据来自 CRO 报告、仪器输出 PDF / 不规则 Excel、历史遗留文档、纸质扫描件；原始文件格式混乱，传统导入需要严格模板，科学家大量时间消耗在复制粘贴、整理表格<br>支持能力<br>非标准化 Excel、CSV、PDF 报告、图片扫描表格、CRO 交付文档；不需要严格对齐预设模板<br>可接入：仪器文件（后续对接）<br>交互入口（三处嵌入业务界面，不是独立页面）<br>导入表头部✨AI 按钮（结果表、注册表）<br>AI 对话聊天框直接上传文件，自然语言指令导入数据（未来规划）<br>### 三步工作流<br>1.  选择目标表 + 上传文件：选定内部表结构（结果表 / 注册实体表），上传多份原始文件<br>    <br>2.  确认 AI 解析指令 + 样例预览：AI 自动读取 实验记录或表结构的上下文，自动生成映射规则；用户可以补充提示（空值处理、样本 ID 关联规则、单位转换），编辑 AI 生成样例行做 Few‑shot 校正<br>    <br>3.  人工审核确认入库：预览全部解析结果，修改错误，确认写入 Benchling 结构化表；<br>    <br>4.  完整溯源：原始附件、AI 指令、解析日志全部保留，满足科研合规？？ |
| 科学数据实验结果数据导入 |  |

## 对象的批量操作（导入导出）

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | Registry-科学数据注册 |
| **功能说明** | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/98fcfe9a-abf7-4f50-a729-abf9cac824b3.png)<br>在列表操作导出筛选条件下的内容，导入用户上传的数据进行校验注册 |
| **权限** | 见下文 |
| **B、功能点** |  |
| **功能点** | **描述** |
| 科学数据注册列表-导出 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/b7cb78f1-c5be-4f10-9915-bc94bdfc9e41.png)<br>1.  导出入口<br>    <br>*   位置：列表页面顶部右侧工具栏导出操作按钮；<br>    <br>*   触发方式：点击“导出”按钮后直接触发下载；<br>    <br>1.  导出格式：Excel（.xlsx）<br>    <br>2.  数据范围选择<br>    <br>    *   默认用户可见全部数据（导出时用户可选）<br>        <br>    *   自定义筛选（按条件过滤后导出）<br>        <br>*   筛选条件：支持与列表页面相同的过滤逻辑（如时间范围、关键词搜索、状态筛选等）、列设置内容。<br>    <br>1.  导出的文件保留表格的列名和数据，基础样式（如列顺序、数据类型）；<br>    <br>2.  导出数据特殊类型处理：<br>    <br>    1.  对象类型：转化成文本导出<br>        <br>    2.  图片：浮动图片导出<br>        <br>    3.  下拉选择：导出时，保留下拉值<br>        <br>    4.  附件：文本显示<br>        <br>    5.  链接：保留链接显示，点击可打开系统链接<br>        <br>    6.  人员、部门：文本显示<br>        <br>    7.  复选框：显示True/False<br>        <br>3.  文件命名：支持自定义文件名，格式默认为`列表名称_yyyyMMddHHmmss.格式`。 |
| 科学数据注册列表-导入 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/17678808-c240-4257-8623-9dbc56e5bf7b.png)<br>1.  导入入口<br>    <br>    1.  位置：列表页面顶部右侧工具栏导入操作按钮；<br>        <br>    2.  触发方式：点击“导入”按钮后弹窗(如图)；<br>        <br>2.  显示当前导入的对象名称和类型，如“ Antibody Complex (自定义类型)”；<br>    <br>3.  弹窗内显示用户可手动填写的表格<br>    <br>    1.  列表字段内容为注册时填写内容（见下文）<br>        <br>    2.  表头对于需要必填字段出现“\*” 号提示<br>        <br>    3.  hover至![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/f47d29a8-19af-47d6-a1ae-2b790355534e.png?x-oss-process=image/crop,x_0,y_0,w_30,h_36/ignore-error,1)出现气泡，显示当前字段的说明（见下文）<br>        <br>    4.  默认列表行数为20行<br>        <br>4.  字段：<br>    <br>    1.  导入的显示字段为新增时需填写字段（元数据-基础信息显示在前，其他字段按对象配置顺序显示）;<br>        <br>    2.  对于字段属于必填项，则显示出星号;<br>        <br>    3.  特殊字段在导入中显示：<br>        <br>        1.  氨基酸、DNA、RNA类型：默认显示序列结构（2个选项Circular、Linear）、序列字段；<br>            <br>        2.  化合物类型：默认显示Structure、Smiles<br>            <br>        3.  以上情况字段，导入时在表中显示位置紧接元数据-基础信息之后<br>            <br>    4.  不支持导入字段：图片、附件、链接、关联查找、公式;<br>        <br>    5.  字段说明：<br>        <br>        1.  单行文本，多行文本：文本类型+(必填)+，请输入文本内容;<br>            <br>        2.  关联对象：关联对象+(必填)+(单选/多选)+，请输入关联对象编号或名称，多选请用“,” 进行分割填写;<br>            <br>        3.  下拉选择：下拉选择+(必填)+(单选/多选)+，请输入匹配的下拉选择内容;（选择范围：1，2，3...）;<br>            <br>        4.  数字：数字类型+(必填)+，请输入小数为2位的数字<br>            <br>        5.  时间：时间类型+(必填)+，请输入yyyy-mm-dd hh:mm类型日期;<br>            <br>        6.  人员：人员类型+(必填)+，请输入人员的账号;<br>            <br>        7.  部门：部门类型+(必填)+，请输入部门名称;<br>            <br>        8.  复选框：复选框类型+(必填)+，请输入True/False;<br>            <br>        9.  其他类型：该字段不支持导入;<br>            <br>5.  支持列表基本编辑能力<br>    <br>    1.  对于文本、关联对象、时间选择、人员、部门、复选框在导入列表中都以文本方式进行填写;<br>        <br>    2.  对于下拉选择支持在单元格直接进行对应类型的选择;<br>        <br>    3.  图片、附件、链接、关联查找、公式，不支持填写，或填写后忽略内容<br>        <br>    4.  支持列的上下文菜单<br>        <br>    5.  不需要筛选排序能力<br>        <br>    6.  支持列表表格的填充柄<br>        <br>6.  特殊情况：<br>    <br>    1.  列表不支持对象编号列的编辑，因为用户不需要填写<br>        <br>    2.  对象名称列，根据对象设置进行约束<br>        <br>        1.  名称默认为空，需必填校验<br>            <br>        2.  名称规则同编号，且不可编辑，无需填写<br>            <br>        3.  名称规则同编号，且可编辑，填写了内容则按填写内容生成数据<br>            <br>7.  点击确认后，进行导入的数据校验<br>    <br>    1.  对行不为空的数据进行注册完整性校验<br>        <br>    2.  必填内容不能为空<br>        <br>    3.  数据匹配校验：关联对象、用户、部门、下拉选择，需要能够匹配系统已有数据<br>        <br>    4.  格式校验：日期、数字，日期格式匹配，数字按系统设置进行约束填入（如缺失位数自动补0，超过位数舍去多余小数位）<br>        <br>    5.  无需填写内容忽略校验和内容<br>        <br>    6.  对于不符合校验数据单元格，进行标识（如图），鼠标hover后显示校验不通过原因  <br>        ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/eda6391e-d94d-453f-834c-6dea142752ce.png)<br>        <br>8.  其他：支持用户复制excel数据粘贴导入至列表中（详见表格能力复制单元格内容） |
| 上传本地文件进行 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/17678808-c240-4257-8623-9dbc56e5bf7b.png)<br>支持导出列表数据表模板<br>填写数据内容后，导入数据内容，在列表中显示；完成数据的预录入 |
| 化合物类型对象导入注意事项 | 1.  注意导入过程中，Structure 做为mol数据渲染结构的显示（当前版本导入表不支持编辑）<br>    <br>    1.  如导入时为excel导入则需根据smiles 解析molV2000 作为Structure 渲染数据；<br>        <br>    2.  如导入时为SDF导入则需根据mol解析出smiles<br>        <br>    3.  smiles 可直接在导入表中编辑，编辑后更新Structure<br>        <br>2.  导入文件支持.csv格式，默认按“,”进行分割<br>    <br>3.  SDF的导入情况：<br>    <br>    1.  ~~支持选择多个SDF文件~~<br>        <br>    2.  每个sdf解析其结构和相关字段内容<br>        <br>        1.  解析的结构信息为molV2000，匹配Structure转换为smiles填入，mol按原内容导<br>            <br>        2.  其他字段匹配格式见示例<br>            <br>[请至钉钉文档查看附件《示例.sdf》。](https://alidocs.dingtalk.com/i/nodes/vy20BglGWOeqDXaRuGNwAbowJA7depqY?doc_type=wiki_doc&iframeQuery=anchorId%3DX02mru1ygj31d2sfkab7ssj&rnd=0.4666792818659471) |

## 列表自定义视图

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | Registry-科学数据注册-注册对象-自定义视图 |
| **功能说明** | 通过将对象、子对象相关的结果数据和检测数据汇总成一个完整的数据视图，方便让科研人员看到完整的数据以及数据直接的管理；<br>*   用户可以根据需要对多个数据表和字段进行编排。<br>    <br>*   用户可以基于该视图内容进行检索、筛选和分析。<br>    <br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/7c8fab2c-afcb-4ea8-a606-e21a9578ca60.png) |
| **权限** |  |
| **B、功能点** |  |
| **功能点** | **描述** |
| 配置自定义视图 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/4175704c-e29a-405e-a54a-46bf2360f02f.png)<br>点击“视图设置” 按钮，弹窗显示（如下）可对当前的对象下的视图进行管理<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/0649836e-0733-4aca-a3c9-366b80e8419e.png)<br>新增视图/编辑视图：<br>1.  新弹窗打开，对视图进行设置（见下文）<br>    <br>2.  完成新增后，默认视图开启显示<br>    <br>3.  可点击某个视图进行复制，点击后 弹窗确认是否复制，复制后在当前复制视图下，新增一个副本标题为”xxx(复制)“<br>    <br>4.  点击按钮进行编辑，点击进入视图设置界面（见下文）<br>    <br>5.  点击删除按钮，二次弹窗确认后删除视图 |
| 视图设置 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/e9a03507-7e50-4ba3-9d11-dbe23f16be76.png)<br>1.  新增是头部显示视图名称填写，确定后完成  <br>    ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/f6990757-b952-4e45-bb55-5d58455cdc7d.png)<br>    <br>2.  内容区域左侧为各个对象和结果表<br>    <br>    1.  点击侧边对象或表名称，右侧显示表内的相关字段<br>        <br>    2.  第一层级为当前对象（图片中为Antibody Complex“”），默认选项定为在第一级对象上<br>        <br>    3.  点击“添加关联对象”，浮窗选一级对象的子对象或有关联关系的对象（子对象前置）<br>        <br>        1.  选择时支持搜索选择<br>            <br>        2.  ~~选择关联对象时需确保第三级的对象与第二级有关联关系（即在选择第一个关联对象后，选择第二个时需要保持与第一个有关联关系，这个依赖后续数据层级归属）~~<br>            <br>        3.  注：基于上文 在第一个关联对象选择后，选择第二个关联是需要再进一步筛选与上层级关联关系的对象<br>            <br>        4.  注：如果选择对象为子对象则在对象名称后标明（如下图：Purifield Protein (子对象)）<br>            <br>    4.  关联结果表（必须设置）：<br>        <br>        1.  添加关联结果表：可选择所有与一级对象或一级对象子对象有关联的结果表；<br>            <br>        2.  添加检测结果：可选择对象公司下，所有检测项的结果表；<br>            <br>        3.  注：如关联结果为检测项则在名称后标明（如下图：CE-SDS (检测结果)）<br>            <br>    <br>    ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/dc90b167-3906-475c-9faf-2aae461bbdd2.png)<br>    <br>3.  对象表选择的字段范围：<br>    <br>    1.  通用部分：名称、编号、项目、所属部门、创建人、创建时间、对象类型、状态、别名<br>        <br>    2.  抗体类型：通用部分+对象定义的字段；<br>        <br>    3.  氨基酸类型：通用部分+对象定义的字段；<br>        <br>    4.  DNA/RNA类型：通用部分+对象定义的字段；<br>        <br>    5.  化合物类型：通用部分+对象定义的字段+化合物内置对象；<br>        <br>4.  结果数据字段范围：(结果表+检测结果合并显示)<br>    <br>    1.  结果表：用户定义字段<br>        <br>    2.  检测结果数据：样品名称、样品批次号、结果数据(多字段)、请验单号、实验记录(分析)、项目、创建人、创建时间 |
| 视图匹配逻辑 | 数据范围：<br>*   用户可见一级对象下的所有数据（包括结果数据、检测数据）<br>    <br>*   用户可见一级对象->所有子对象数据（包括结果数据、检测数据）<br>    <br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/b16275b9-6515-43f3-9de8-c7c5ed32b0ca.png)<br>数据显示匹配/显示原则：<br>1.  一级对象相同组并显示（如上图1部分）<br>    <br>2.  一级对象后的子对象或关联对象依次显示（如上图2）<br>    <br>3.  对象后的结果数据，按设置排序方式依次显示<br>    <br>4.  结果数据行对应匹配方式<br>    <br>    1.  依次从最右侧对象列开始查找匹配行关系（如图3）<br>        <br>    2.  对于最右侧匹配不到的行可置空（如图4）<br>        <br>    3.  对于关联对象无匹配关联的行，直接跨过关联对象直接匹配至一级对象（如图5） |
|  | 支持分页显示；<br>导出内容；<br>对象合并去掉 |

## 权限与角色

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | Registry-科学数据注册 |
| **功能说明** |  |
| **权限** |  |
| **B、功能点** |  |
| **功能点** | **描述** |
| 配置中心-角色 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/89c9d4de-854f-4884-a879-27887d29ccee.png)<br>新增科学数据注册其下设置：<br>1.  新增，支持在对应可见的对象下创建对象；<br>    <br>2.  导入，支持导入对象或导入对象的关联数据；<br>    <br>3.  编辑，支持编辑对象信息，包括氨基酸类型、DNA/RNA类型对象的序列内容；<br>    <br>4.  导出，导出可见数据内容；<br>    <br>5.  查看序列信息，查看氨基酸类型、DNA/RNA类型对象的序列内容；<br>    <br>6.  删除，支持删除对象；<br>    <br>7.  自定义视图设置：支持对自定义视图进行 新增、编辑、删除操作 |
| 配置中心-管理授权 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/dd4da766-bd3b-4143-a4cf-bc25cdb5545f.png)<br>管理授权-科学数据管理，新增科学数据注册的权限，可额外给予指定人、角色、部门用户，某部分数据的权限 |
| 数据权限 | 1.  创建人：默认创建人拥有数据的查看、编辑、删除权限<br>    <br>2.  所属部门：各条注册数据，可设置是否所属部门成员可见（这种只可见序列外的信息，查看序列内容需要 “查看序列信息” 权限）,默认为否<br>    <br>3.  项目：各条注册数据，可设置是否项目成员可见（这种只可见序列外的信息，查看序列内容需要 “查看序列信息” 权限）,默认为否 |
| Licence 授权 | 对象设置、字段集、结果表字典的设置入口及Registry的授权关联，无Registry授权的情况下无该设置入口；<br>增值服务增加抗体分析的几个接口功能的授权：<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/f1a52bcf-f927-4227-9ff3-2e135767ad38.png)<br>授权后显示如：“Registry-抗体分析 (Protein-analysis，PTM & Mut，Codon-optimization)” |

## 模板中插入注册、结果表

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | ELN-模板-模板设计 |
| **功能说明** | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/a8bac9d4-038f-406c-8101-743c84c57f33.png)<br>模板设计中支持插入定义好的 数据注册的模块，从模板创建的实验，将具备数据的注册和结果汇总的功能 |
| **权限** |  |
| **B、功能点** |  |
| **功能点** | **描述** |
| 模板中插入 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/6bc4792c-91b6-4671-9a96-a0e48d468cd1.png)<br>模板设计-左侧模块选择，增加"数据注册"选项：<br>1.  显示“注册表”列表及“结果表”列表的分类，分类下显示当前用户在适用范围内可见的模块（此时每一个表都是一个独立的模块）<br>    <br>2.  搜索，支持搜名称及系统字段，搜索内容呈现同原模块搜索显示<br>    <br>3.  模块预览，点击预览可查看当前表的默认显示内容信息<br>    <br>4.  点击+,添加对应模块进入模板最后序列，模块名称为当前插入的表名称+“注册”（如“Purified Protein注册”），用户可修改（见图）<br>    <br>5.  列设置：<br>    <br>    1.  默认显示元数据-基础字段：编号、名称、别名称；元数据-自定义字段，全部字段；<br>        <br>    2.  点击列设置，可设置默认显示的字段；默认字段显示范围即元数据所有字段<br>        <br>    3.  针对结果表，默认就是配置中心定义的所有字段<br>        <br>    4.  可重复添加同一模块表<br>        <br>6.  设置中，无“模块设计”、“另存为”功能 |
| 在实验记录中临时插入表 | 结果表及注册表内容放入模块列表中，以“注册表”列表及“结果表”列表的分类，分类下显示当前用户在适用范围内可见的模块（与模块显示一样只显示名称即可）<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/9f3bdbaa-60fc-44c7-b57d-1a247f6b59b6.png)<br>*   点击确定加入实验中，可重复添加同一模块<br>    <br>*   列设置使用默认设置 |

## 在实验记录中使用

### 注册表

| **A****、概述** |  |
| --- | --- |
| **功能编号** |  |
| **功能模块**<br>**访问入口** | ELN-实验记录 |
| **功能说明** | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/ead3e603-4c96-498e-a000-a7908051f825.png)<br>在实验记录中进行对象实体的注册与更新，帮助实验人员结构化实验关键过程数据；支持研发过程上下游环节数据的引用，提高数据的重复利用和准确。 |
| **权限** | 实验记录创建人、协作人权限 |
| **B、功能点** |  |
| **功能点** | **描述** |
| 数据录入 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/bb015ed1-6ef6-4747-9fd4-b1086945ea2b.png)<br>模板设计-左侧模块选择，增加"数据注册"选项：<br>1.  显示“注册表”列表及“结果表”列表的分类，分类下显示当前用户在适用范围内可见的模块（此时每一个表都是一个独立的模块）<br>    <br>2.  搜索，支持搜名称及系统字段，搜索内容呈现同原模块搜索显示<br>    <br>3.  预览，点击预览可查看当前表的默认显示内容信息<br>    <br>4.  点击+,添加对应模块进入模板最后序列，模块名称为当前插入的表名称，用户可修改（见图）<br>    <br>5.  列设置：<br>    <br>    1.  默认显示元数据-基础字段：编号、名称、别名称；元数据-自定义字段，全部字段；<br>        <br>    2.  点击列设置，可设置默认显示的字段；默认字段显示范围即元数据所有字段<br>        <br>    3.  针对结果表，默认就是配置中心定义的所有字段<br>        <br>    4.  可重复添加同一模块表<br>        <br>6.  设置中，无“模块设计”、“另存为”功能 |
| 在实验记录中临时插入表 | 结果表及注册表内容放入模块列表中，以“注册表”列表及“结果表”列表的分类，分类下显示当前用户在适用范围内可见的模块（与模块显示一样只显示名称即可）<br>![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jMypKPNqDv/img/9f3bdbaa-60fc-44c7-b57d-1a247f6b59b6.png)<br>*   点击确定加入实验中，可重复添加同一模块<br>    <br>*   列设置使用默认设置 |

### 结果表

## 列设置

参见表格能力描述2.5部分