# KeenMart UI Kit

React 19 组件、设计 tokens、样式和 Figma Make 使用指南。组件名称以中文说明为主，代码导出使用英文名称。版本 0.1.0 为初始版本，部分组件尚未完成视觉验收。

## 安装

```sh
npm install keenmart-ui-kit@0.1.0
```

```tsx
import 'keenmart-ui-kit/styles.css';
import 'keenmart-ui-kit/fonts.css';
import { Page, Button } from 'keenmart-ui-kit';

export default function App() {
  return <Page background="gray" footer={<Button onClick={() => {}}>Continue</Button>}>
    <section style={{padding:'var(--ds-space-12)'}}>Page content</section>
  </Page>;
}
```

`Page` 提供 `.km-system` 样式作用域、状态栏及底部安全区；不要重复添加。不使用 Page 时，应用根容器必须添加 `className="km-system"`。样式和字体只导入一次。

## Figma Make

发布后，在 Make kit 添加 npm 包 `keenmart-ui-kit` 并选择版本 `0.1.0`；公共 npm 包无需配置团队私有 registry。把 `guidelines/` 下四份指南加入 kit，再使用该 kit 创建页面。也可以直接在 Make 对话中要求安装该包。

可直接发送下面的提示词：

> 安装 keenmart-ui-kit@0.1.0，导入 keenmart-ui-kit/styles.css 和 keenmart-ui-kit/fonts.css。先阅读 Guidelines.md、Foundations.md、Components.md、PagePatterns.md。页面使用包导出的 Page 和现有业务组件，遵守 tokens；不要用手写 JSX 重画已有组件。Page 统一管理背景、状态栏及底部安全区。先列出页面模块与组件映射，再实现页面。缺少图片时使用色块占位。生成后检查卡片与背景区分、左右间距、文字层级以及交互状态。

指南描述使用方法；npm 提供真实组件实现，两者一起使用。新增需求仍需实现数据和事件处理，包不包含真实支付、订单、短信服务。

## 资源与字体

- 内置图标和演示图片使用随包资源路径，不依赖原站 `/assets` 服务。
- 新图片请传入工程导入资源或可访问 URL，不使用本机绝对路径。
- 公共包不包含缺少再分发许可的 DdmcSans 字体，金额字体自动回退 Poppins。具有授权的项目可自行加载 DdmcSans。
- 第三方素材不随组件代码重新授权，正式使用时替换为自己的授权素材。见 THIRD-PARTY-NOTICES.md。
- 包含 tokens.json；不包含演示网站、历史 Screen、登录凭据或服务端接口。

## 维护

仓库根目录执行 `npm run library:check`，验证打包、离线安装、严格类型、独立 Vite 构建和资源路径。该检查不代表浏览器视觉验收。

发布使用包目录中的 `npm publish --access public`。需要先登录 npm；首次发布后在 npm 网页核对版本与包文件。每次更新必须提升版本，Make 中也须更新版本。

## 中英文

```tsx
import { LocaleProvider, Page, Button } from 'keenmart-ui-kit';
<LocaleProvider locale="zh-CN">
  <Page background="gray"><Button>继续</Button></Page>
</LocaleProvider>
```

英文使用 locale="en"。中文正文优先调用设备已安装的 PingFang SC；公共包不复制该字体文件。没有该字体时使用中文系统备用字体。语言模式保持价格字体变量不变。组件内置 UI 提示使用语言字典；商品名、页面文案、日期和业务数据由调用方提供对应语言，可使用 messages 补充或覆盖内置提示。
