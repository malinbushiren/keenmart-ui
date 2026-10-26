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
