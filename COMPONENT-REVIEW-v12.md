# Figma 验收逐项修正 · v0.12

验收来源：[gpt 组件验收01](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=137-52176)。20 张截图对应 19 组标注，其中 ActionSheet 两张截图对应同一条说明。所有修改按标注范围实施，未把历史原稿替换为新组合。

第 18 张截图的笔误已由用户澄清：**灰色内容不要展示在灰色背景上**。

| 序号 | 组件 | 修正 |
|---|---|---|
| 1 | CancelReasonPicker | 恢复七项原因的 BottomSheet、RadioRow、Switch 提示条与吸底 Confirm；页面组合保留订单列表背景。 |
| 2 | SelectField | 用受控 combobox 和统一圆角列表面板替换系统原生 select 菜单；固定箭头内距、焦点与键盘操作。 |
| 3 | Section | 保留有实际调用的标题＋内容布局工具，明确它不是业务卡片；示例改为真实 ProductList，说明普通布局可以替代。 |
| 4 | Checkbox | 选中状态保持品牌绿色底，勾选改白色；保留禁用与焦点状态。 |
| 5 | ActionSheet | 操作逐行纵向排列；示例使用拍照、相册、取消命令。 |
| 6 | SwipeAction | 补充二、三个操作变体；普通操作中性，删除红色；展开宽度按操作数量计算，默认隐藏。 |
| 7 | PullRefresh | 移除假 Refresh 按钮，实现下拉阈值、松手刷新与加载／失败状态，说明是规范补充交互容器。 |
| 8 | StickyBar | 补充单按钮、双等宽按钮、内容＋按钮；说明 Page.footer 与容器 sticky 的职责，增加滚动示例。 |
| 9 | ProductList | 重新核对最新 136:39483、136:40098、136:40212 原稿；列表示例同步新商卡数据、单位、供应商与三种布局。 |
| 10 | ProductCollection | 保留猜你喜欢标题＋灰色信息流，示例同步最新商卡，白色商卡不融入白底。 |
| 11 | CartGroup | 收紧分组标题到底部首行的重复 padding，保留标题和商品行本身的间距。 |
| 12 | AddressForm | 增加显式 surface=white/gray；地图与表单统一承载，字段使用对比底色，补充适配页面背景规则。 |
| 13 | OrderCard | 去除商品图容器底部多余 padding，将数量／总额距图片控制为基础间距。 |
| 14 | ReviewEditor | 移除内部 Submit 和 onSubmit；页面级提交保留在 Page.footer 操作栏。 |
| 15 | PromoCodeForm | 白色展示承载区、灰色胶囊输入框；明确输入焦点边界，加载时禁止重复提交。 |
| 16 | MembershipBenefits | 未找到可靠原稿和页面调用，删除虚构权益组件、示例、目录和页面模板依赖。 |
| 17 | OrderRemarks | 按用户澄清“灰色内容不要放灰色背景”落实：白色备注任务区，灰色输入框与选项。 |
| 18 | PromotionGroup | 复用原稿 CartPromotionBar 与真实活动商品，去掉虚构全选框、绿色提示卡与重复卡片。 |
| 19 | CategoryLayout | SKU 促销另占价格／购买区下方完整一行，避免数量控件挤压；分类文案、筛选、排序、重量翻译为英文。 |

## 验证与边界

- `npm run catalog:build` 和 `npm run build` 通过。
- `node scripts/verify-acceptance-v12.mjs`：71 个相关组件状态及 109 个页面组合静态渲染；227 个本地资产引用存在；14 项结构和接口断言通过。验证记录见 `acceptance-v12-verification.json`。
- 当前目录 142 个组件（65 基础＋77 业务），35 条共享设计规则；组件 API、说明、来源与依赖同步生成。
- 本地浏览器仍由 Work 设置禁用，无法进行最终截图、有效几何尺寸和实时手势检查；因此本轮各条标注的视觉审核保持 pending，没有标为验收通过。静态渲染和构建不代表视觉验收。
- 没有回写 Figma，没有替换历史原稿，也没有接入真实支付、订单或地图服务。
