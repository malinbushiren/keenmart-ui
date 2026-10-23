# KeenMart 设计系统 · v0.12

现有 109 个页面／状态是设计来源。当前提供 65 个基础组件、77 个业务组件，共 142 个组件；14 个组件是基于移动应用常见需求的规范补充。

## 查看与审核

运行 `npm run dev`，打开 `http://127.0.0.1:5173/?view=system`。展示页包含基础规范、基础组件、业务组件、图标库、页面组合、页面覆盖和待审核决策。

- [组件体系与来源](./COMPONENT-SYSTEM.md)：分类、状态、来源、补充项与使用规则。
- [组件接口](./COMPONENT-API.md)：从实际 TypeScript 代码提取的接口。
- `src/design-system/component-catalog.json`：组件清单与依赖。
- `src/design-system/page-recipes.json`：109 个页面入口对应的 48 类拼装模板。
- `component-coverage-verification.json` 与 `component-interaction-verification.json`：运行覆盖和交互检查结果。

## 基础规范

颜色只保留一层基础变量，语义场景写在备注中。主文字 `dark.black90=#1A1A1A`；加购 `green.bright=#00BF20`；选中备注 `green.tint09=#E8F9EE`。42 个基础颜色包含中性色、反白透明色、绿、红、黄及来源蓝色。黄色后三项为派生候选，仍需设计确认。

Poppins 用于正文与控件，DdmcSans 用于价格。字号、间距、圆角与控件尺寸均来自 `src/design-system/tokens.json`；`npm run tokens:build` 生成 CSS 变量及解析后的 JSON。公共组件直接引用基础颜色，不另设语义颜色别名。

图标库已导入 846 个本地 SVG，另有 24 个因导出超时尚未完成，详见 `src/design-system/icon-import-status.json`。

## 维护与组合

`components.tsx`、`foundations.tsx`、`business.tsx` 和 `Icon.tsx` 是公共组件实现；`ComponentExample.tsx` 是状态示例；`PageAssembly.tsx` 是页面组合示例。组合页不导入旧页面模块，原页面保留用于对照。

使用组件 props、业务数据和有限插槽组合页面。优先补充已有组件的必要状态，避免为每张页面复制一个组件。业务请求、支付、地图 SDK 和上传服务由应用层接入，示例仅使用本地数据及事件。

运行 `npm run catalog:build` 可同步目录、页面依赖、接口与文档；需要 Python 3 和 Node。运行 `npm run build` 执行 TypeScript 与生产构建。

## 验收边界

组件清单与全部页面拼装入口已经建立。运行检查只证明入口和状态可以渲染，不代表 109 个组合页面均已逐像素还原；它们的视觉审核状态仍为 pending。包含商卡的当前页面已使用新版业务组件，历史原稿保留用于对照；组件尚未回写 Figma。


## 页面并排审核

页面组合已增加原页面与组合页并排对照、统一缩放、按比例滚动联动、上一页／下一页、状态重置和逐页备注。问题分类为已直接修正、待修正与建议覆盖；审核决定只保存在本地，不会自动覆盖原页面。详见 [COMPARISON-REVIEW.md](./COMPARISON-REVIEW.md)。

## 本轮组件走查

新增手机号组合、区号选择、四／六位验证码、文字按钮、等宽操作栏；首页和分类接入实际分类与商品；搜索新增头部与建议区，购物车区分清空确认、失效分组、空态及推荐区。

本轮检查见 `component-refinement-verification.json`。渲染和交互通过不等于全量视觉验收。

## v0.11 使用规则与落地

不再使用 10 号业务文字；12 号只有 18px 行高。字体选择、白／灰底场景和操作／弹层选择见基础规范，以及 [完整组件使用手册](./COMPONENT-USAGE.md)。142 个组件均有独立定义、使用场景、避免事项和职责边界。

Page 负责整页背景、状态栏、内容和安全区；Card 始终为白色。连续表单／正文用 white，商品和信息卡分组用 gray。全部组合页面使用 Page。原页面仅修正了返回实例缺少尺寸导致的位置错误，保留其余对照内容。

评价、支付方式、卡输入、订单列表与七种订单状态已经重新配置；验证记录见 `component-refinement-v06-verification.json`。
