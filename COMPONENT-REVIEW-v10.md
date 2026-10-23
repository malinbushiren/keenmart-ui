# v0.10 页面与组件修正

依据本轮 10 张截图，用户明确修改优先于原页面历史样式。

- 原页面的通用 SVG 透明背景规则排除优惠券页面，修复输入状态原页面的背景被覆盖问题。
- 当前券、输入券、历史券：灰色列表承载白色券卡；头部仍为白色；原文案、状态、有效期保留。
- 无券：使用原稿 `/assets/48e4a.svg`，说明文字恢复辅助字阶；内容区上下留白实测为 1:2。
- 兑换成功：新增 `VoucherSuccessDialog`，固定浅绿渐变、绿色标题和白色券卡；默认无关闭按钮，支持可关闭变体；操作区不带分割线。
- Profile：三张白色信息列表卡，恢复原头像、姓名和脱敏手机号；去掉不属于原稿的编辑表单与 Save。
- About：灰底白卡，恢复图标占位、版本 V 1.5.200_5412、Privacy Policy 与 Term of use。
- 注销失败：多条原因由 Result.details 在白卡中承载，唯一 OK 操作通栏且与原因卡同宽。
- 未登录长首页：恢复品牌／地址／搜索头、新客 SAR100 营销头图、Keen Point 轮播、原分类网格与推荐流；使用本地原素材和结构化内容，移除位置错误的 NewUserOffer 券列表。
- 推荐 feeds：ProductCollection 自带灰色承载层，白色商品卡可辨识，作用于所有调用页面。

## 规则与组件

规则共 28 条；补充优惠券／推荐流的承载背景、正确业务空图、单操作通栏、结果原因卡、兑换成功弹窗。网页、DESIGN-RULES.md、COMPONENT-USAGE.md 和 AGENTS.md 同步维护。

新增 VoucherList、VoucherSuccessDialog、HomeVoucherBanner；扩展 Result.details/fullWidthAction、SearchBar.submitIcon、PromoCodeForm.onFocus；组件目录及状态示例已更新。

## 验证

- catalog:build 与生产 build 通过。
- 11 个页面及 9 个组件状态检查通过，无图片加载失败、错误浮层或页面横向溢出。
- 实测空状态留白比例 1.99996，失败页按钮与原因卡均为 351px。
- RED99 输入／兑换／Got it／历史券切换／返回，以及弹窗可选关闭变体交互通过。
- 详细结果见 component-refinement-v10-verification.json。以上检查不替代用户视觉验收，审核状态保持待确认。
