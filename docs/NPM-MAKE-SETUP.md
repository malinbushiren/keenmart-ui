# 公共 npm → Figma Make

## 当前状态

- 包：`keenmart-ui-kit@0.1.0`，公共 npm。
- 公共配置、安装示例、四份指南已准备；本地打包、安装、类型、Vite 构建与资源检查通过。
- 尚未实际发布；npm 登录、线上安装及 Make 项目安装需继续完成。
- 不需要 Figma 团队私有 registry 配置。

## 发布（维护者）

在仓库根目录执行 `npm run library:check`。随后进入 `packages/keenmart-ui`：

```sh
npm login --auth-type=web --registry=https://registry.npmjs.org/
npm whoami --registry=https://registry.npmjs.org/
npm publish --access public --registry=https://registry.npmjs.org/
npm view keenmart-ui-kit@0.1.0 version dist.integrity --registry=https://registry.npmjs.org/
```

账号或双因素验证由本人在 npm 官方页面完成，不在聊天中传递密码或 token。
当前包名查询返回 404；首次发布时仍须检查名称可用性。

## 产品在 Make 中使用（发布后）

1. 在 Make kit 添加 npm 包 `keenmart-ui-kit`，选择 `0.1.0`。
2. 添加包内 guidelines 文件夹的四份 Markdown。
3. 在 Make 项目使用该 kit，并明确要求调用真实组件。
4. 按包 README 导入 styles.css 和 fonts.css。确认根节点使用 Page 或 .km-system。
5. 第一次生成后检查按钮、商品卡、底部 tab 是否调用包内组件，检查图片路径与交互。

可直接发送：

> 安装 keenmart-ui-kit@0.1.0，导入其 styles.css 和 fonts.css。阅读四份指南，列出页面模块和组件映射，优先调用包内已有组件，不要手写重画已有组件。间距、颜色、字体、圆角使用 tokens。缺少图片用色块。页面根使用 Page，状态栏和安全区只渲染一次。

## 字体及媒体

公共包排除无再分发许可记录的 DdmcSans 字体；Poppins 作为金额回退字体。第三方素材保持原权利归属，不因组件 MIT 许可而重新授权。

## 官方资料

- https://help.figma.com/hc/en-us/articles/43602872461079-Bring-your-design-system-package-to-a-Make-kit
- https://help.figma.com/hc/en-us/articles/35946832653975-Use-your-design-system-package-in-Make-kits
