# 商品详情页 · 模块设计与实现

来源：[Figma 140:54048](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=140-54048)。

此节点是四张重叠长图，不是可逐层提取的原生组件。以其内容顺序和信息关系为结构参考，按当前 KeenMart 基础规范生成可交互页面；不将整页图片嵌入实现。商品图复用当前库内紫甘蓝素材；服务图形使用现有基础图标，未复制参考图的三维插画或红色购买控件。演示推荐数据不代表真实库存或价格，配送及售后需业务接入后提供。

## 先分析结构

| 顺序 | 模块 | 实现及归属 | 职责 |
| --- | --- | --- | --- |
| 1 | 页面外壳、状态栏与导航 | Page / NavBar，基础组件 | 统一背景、安全区、内容滚动与固定底栏 |
| 2 | 商品图集 | ProductMediaGallery，新增业务组件 | 1:1图槽、轮播、预览事件 |
| 3 | 售价与规格 | ProductVariantPricing，新增业务组件 | 复用价格组合、ChoiceChip，选择后通知页面 |
| 4 | 标题、排名、摘要 | ProductSummary，新增业务组件 | 标题、Tag、关键参数、完整介绍入口 |
| 5 | 送达与售后 | ProductFulfillment，新增业务组件 | 复用白卡、列表行，展示数据与售后入口 |
| 6 | 相似商品 | ProductCollection / ProductCard，复用业务组件 | 现有双列商卡，不创建另一套商卡 |
| 7 | 供应商 | ProductSupplierPanel，新增业务组件 | 名称、经营指标、供应商入口 |
| 8 | 商品参数 | ProductAttributes，新增业务组件 | 语义参数表、标签值结构 |
| 9 | 服务保障 | ProductServiceBenefits，新增业务组件 | 现有图标与品牌绿、服务详情事件 |
| 10 | 补充说明 | Card / Collapse，复用基础组件 | 折叠长文 |
| 11 | 猜你喜欢 | ProductCollection / ProductCard，复用业务组件 | 灰色feeds承载白卡 |
| 固定底部 | 收藏、购物车与购买 | ProductPurchaseBar，新增业务组件 | 角标、收藏、数量；不重复绘制安全区 |
| 交互弹层 | 商品介绍、售后、购物车、供应商 | BottomSheet / Button，复用基础组件 | 由页面决定打开内容与状态 |
| 图片预览 | ImageViewer，扩展基础组件 | 可传 counter，显示对应图片序号 |

## 再生成组件

新增组件全部在业务组件目录“商品与购物车”，中文主名、英文辅助。基础元素没有重复创建。现有 ImageViewer 新增可选 counter 参数，保持其他调用兼容。

每个新增组件仅接收数据、受控状态和事件；不读取接口、不包含整页导航，不内置真实配送、售后或客服承诺。来源和依赖由 catalog 脚本维护，参数及用法同步到 COMPONENT-API.md 和 COMPONENT-USAGE.md。

## 最后组合页面

- 页面实现：src/design-system/ProductDetailPage.tsx。
- 演示数据：src/design-system/product-detail-data.ts；接口接入时替换此层数据。
- 模块样式：src/design-system/product-detail.css；使用当前颜色、字号、间距、圆角令牌。
- 页面库入口：http://127.0.0.1:5173/?node=140%3A54048。
- 页面目录：商品详情 → 商品详情 · 模块化组合，节点 140:54048。
- 直接预览：http://127.0.0.1:5173/?assembly=140%3A54048。
- 目录入口：http://127.0.0.1:5173/?view=system&panel=composition&recipe=140%3A54048。

页面保存每个规格的购买数量，切换规格不覆盖其他规格；相似和推荐商品数量独立维护并汇总到购物车角标。无数量时显示加购，减到0恢复加购。收藏在当前页面会话内有效。购物车仅展示明细，未提交订单；客服入口明确提示尚未接入，分享复制当前页面链接。

## 验证及边界

运行 catalog:build 与 build，检查组件目录、类型及生产构建。浏览器检查规格价格、分规格数量、减到0、收藏、购物车明细、图集预览、图片加载和比例。此页为按结构和现有系统生成的新页面，视觉验收仍待用户确认；不修改旧页面的审核结论。未回写 Figma，未发布 npm，未接入后端。
