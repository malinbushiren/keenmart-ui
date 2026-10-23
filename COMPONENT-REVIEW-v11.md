# 定制商卡与分类框架 · v0.11

来源：Figma `muIyl7AhHSieD13gdjfEw1` 的 `136:39431`；三种商卡和两个分类框架均读取设计上下文及截图，并将所需资产保存到本地。

## 当前实现

- `ProductCard`：`grid` 双列瀑布流、`full-width` 通栏单列、`category` 分类单列。图片槽位分别为自适应正方形、120px、72px；分类商卡独立示例宽 299px。
- `ProductPriceGroup`：币种、金额整数／小数、售卖单位、单位价、原价。`ProductPurchaseControl`：添加、数量、数量角标、提醒、相似商品、多规格；数量为 1 时禁用减号。
- `ProductStatusOverlay`：售罄、下架、非卖品及中英文；`ProductSupplierTag`：供应商图标、名称与入口。
- `CategoryLayout`：文字一级＋图片二级侧栏，或图片一级＋文字二级侧栏＋三级筛选＋排序。分类与商品区域分别滚动；切换、搜索和排序通过受控回调连接应用数据。
- 基础元素复用当前 Price、Tag、Button、AddButton、QuantityStepper、SearchBar、ChoiceChip、BottomSheet、Icon。只为商卡解剖结构增加业务样式，颜色、字阶、圆角和间距引用现有基础变量。
- 当前 27 个含商卡的页面入口已接入新组件。旧基础商卡、CategoryBrowser、旧样式和 26 个独立商卡入口已从运行目录移除；历史文件保存在 `work/retired-product-cards/`。并排审核中的历史原稿只供追溯。
- 目录共 143 个组件、109 个页面组合；接口、依赖、使用说明及两条新设计规则同步生成。所有视觉审核保持 pending。

## 验证

`npm run catalog:build`、`npm run build` 通过。`node scripts/verify-commerce.mjs` 对 109 个页面、44 个相关组件状态执行 React 静态渲染，检查 227 个本地资产引用，无失败；同时断言旧组件退出、三种卡片结构及数量上下限。此检查不代表浏览器视觉验收。

浏览器关闭控制前：检查过 16 种商卡状态，未发现图片缺失或横向溢出；规格抽屉加购后数量为 1 且减号禁用，最大数量的加号禁用。已查看双列商卡与图片一级分类框架。

随后 Work 设置停用了浏览器控制，未完成最终分类框架和迁移页面的逐页截图复核，也没有本轮最终截图产物。后续新增的分类示例宽度、独立购买控件样式和页面头部承接修正已通过构建及静态渲染，仍需浏览器视觉复核。未回写 Figma，未接真实商城接口。
