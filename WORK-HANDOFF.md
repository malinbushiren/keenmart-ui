# 公司 / 家里继续工作

本仓库保存源码、本地图片与字体、组件规范、生成脚本和验收记录。预览服务与聊天记录不会通过 Git 同步。

私有仓库：https://github.com/malinbushiren/keenmart-ui 。默认分支为 `main`。

## 另一台电脑首次使用

1. 安装 Git、Node.js 24 和 Python 3（生成组件目录时使用）。
2. 登录同一个 GitHub 账号，克隆本私有仓库到本地目录。
3. 在 Codex 中打开克隆后的 `keenmart-ui` 文件夹。
4. 在项目目录运行：

```bash
npm ci
npm run dev -- --port 5173
```

打开 http://127.0.0.1:5173/?view=system 。只有启动本机服务后，该链接才能访问。

可使用 GitHub Desktop 登录后克隆，或使用已配置认证的 Git：

```bash
git clone https://github.com/malinbushiren/keenmart-ui.git
cd keenmart-ui
```

公司电脑已配置专用 SSH 密钥，通过 GitHub SSH 的 443 端口连接。该配置只保存在本机 `.git/config`；不要复制或上传私钥，家里电脑需单独登录或配置自己的 SSH 密钥。

## 每次换电脑

离开当前电脑前，让 Codex：“检查当前改动，提交并推送到 GitHub，更新 WORK-HANDOFF.md 的进度。”确认 push 成功，文件才已同步到远程。

到另一台电脑后，让 Codex：“先检查本地未提交改动，再拉取 GitHub 最新代码，读取 AGENTS.md、DESIGN-RULES.md 和 WORK-HANDOFF.md，继续未完成的验收。”

本地没有未提交修改时使用 `git pull --ff-only`；有修改时先保存并处理，不使用强制覆盖或强制推送。两台电脑尽量轮流工作，避免同时修改同一文件。

依赖发生变化时重新运行 `npm ci`。修改后运行 `npm run build`；规范或目录变化时先运行 `npm run catalog:build`。

## 当前工作进度（2026-10-23）

- 当前版本 v0.12：142 个组件，109 个页面组合入口，35 条设计规则。
- 最新验收来源：Figma `muIyl7AhHSieD13gdjfEw1`，节点 `137:52176`。
- 20 张截图 / 19 组标注的实现与静态检查已完成，详见 COMPONENT-REVIEW-v12.md 和 acceptance-v12-items.json。
- 用户澄清：OrderRemarks 的规则为“灰色内容不要展示在灰色背景上”。
- 浏览器连接已恢复；此前本地预览服务停止导致错误页，不能继续归因为缺少插件。
- 尚待完成：逐项截图与真实交互验收，不得将静态检查视为视觉通过。
- 保留原稿对照，严格依据标注调整；不扩展未要求的页面结构，不写回 Figma。

## 组件中文名称（2026-10-26）

- 全部 142 个组件（65 基础、77 业务）改为中文主名称、英文辅助名称；代码标识与 URL 保持原值。
- 名称源为 `src/design-system/component-names.json`，目录生成时校验名称完整且唯一。目录、详情、组合依赖、页面覆盖、规则关联及组件文档共用名称源；支持中英文搜索。
- 已通过目录重新生成、TypeScript 与生产构建、差异格式检查；浏览器已核查基础与业务目录及中英文搜索。
- 本次仅完成名称展示验收，之前页面标注的逐项视觉与交互验收仍按上方待办继续。

## 仓库边界

`node_modules`、`dist`、本机环境配置和密钥不进入 Git。图片、字体、历史验收说明和 `work/retired-product-cards` 保留，以便完整还原和追溯。GitHub 仓库保持私有。

## 商卡与业务组件修正（2026-10-26）

- 当前目录为 140 个组件（65 基础、75 业务）、424 个状态；109 个页面组合、35 条规则。
- 来源：用户本轮 7 张截图；Figma `136:39431`，大图蒙层 `136:39533`、紧凑蒙层 `136:40281`、供应商标签 `136:39576` / `136:39583`、完整规格抽屉 `52:46299` / `52:46431`。
- 状态蒙层补为三种状态 × 中英文 × 165/72 两种尺寸，共 12 个变体；使用白色 50% 图片遮罩、黑色 60% 文字胶囊。紧凑原稿中部分变体名称与可见文字交叉，代码按可见语义统一为 sold-out / unavailable / not-for-sale。
- 供应商名称、更多供应商比价共用 ProductSupplierTag，通过 variant 切换；商卡数据增加 supplierVariant，示例包含比价标签。
- 商卡加购数量为 1 时可减至 0，恢复加购按钮；QuantityStepper 新增 min（默认 1），购物车规则保持下限 1。AGENTS、规则源与生成文档已同步。
- 移除公开 Price 与 ProductDetailHeader 组件、演示、接口和目录依赖。金额格式保留为内部 price-value.tsx，公开商品金额使用 ProductPriceGroup；详情组合使用基础组件，不再引用已移除头部组件。
- ProductList 展示名改为 feeds；ProductCollection 改为猜你喜欢。两者均提供双列和单列通栏示例，示例加购与数量变化可更新本地数据。
- ProductSpecPicker 为完整白色规格面板，含商品摘要、处理方式、口味、数量、主按钮及安全区；open/onClose 可直接控制底部抽屉，页面无需重复包装 BottomSheet。
- 购物车图片占位统一正方形，普通 80×80、赠品 50×50；地址字段名称置于框内，保留无障碍标签。
- 检查：`npm run catalog:build`、`npm run build`、`node scripts/check-commerce-review.mjs`、`git diff --check`。自动检查覆盖蒙层矩阵、供应商变体、1→0 与购物车下限、数量上限、两种布局、规格选择回调、面板结构及地址标签。
- 本轮浏览器已查看蒙层状态目录与实际半透明效果、规格面板整体；已实测购买控件 1→0→1。随后浏览器工具连续两次等待自动审批超时。
- 用户明确选择“先交付代码，稍后验收”。剩余浏览器验收：供应商变体切换、规格选项/数量/关闭与真实抽屉、单/双列布局、购物车所有图片实际尺寸、地址字段位置与输入。不要把自动检查或已查看部分视为全部视觉通过。
