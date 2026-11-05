<!-- current-visual-policy:start -->
## Current visual policy / 2026-11-05

### 商卡统一使用三种定制结构 (commerce-anatomy)

ProductCard 的 grid、full-width、category 分别用于双列瀑布流、通栏单列和分类单列；保留商品图、标题、重量、价格层级、促销、供应商和购买状态。图片槽位分别为自适应正方形、120px、72px；尺寸来自本轮原稿。商卡高度随实际内容自适应，不设置固定卡高或标题最小高度，不为短标题补齐三行空白；无重量等可选内容时不渲染空占位。双列保持瀑布流，不强制同排等高。价格、标签、数量、按钮和文字使用当前基础规范与令牌，不在页面重新实现旧商卡。双列商卡多规格通过抽屉选择，宽屏商卡可在卡内展开规格。商卡加购数量为 1 时减号可点击，减到 0 恢复加购按钮。 状态蒙层使用白色 50% 遮罩和黑色 60% 胶囊，支持 165 与 72 两套尺寸、售罄/已下架/非卖品及中英文共 12 个变体；供应商名称与比价共用一个可切换标签组件。购物车商品图片占位始终为 1:1。规格选择作为完整白色底部抽屉，包含商品摘要、规格、数量、主按钮与安全区。地址表单字段名称放在输入框内，保留无障碍标签。 商卡售价统一使用黑色（Black90），包括促销商品和展开规格；促销通过标签表达，不将售价改为红色。

### 蓝色与蓝灰统一去色相 (neutral-colors)

所有基础组件、业务组件及新生成页面禁止使用蓝色、蓝灰色或带蓝色色相的背景、文字、边框、阴影和渐变。中性色必须 R=G=B，优先使用 Black90 #1A1A1A、Black70 #4D4D4D、Black50 #808080、Black30 #B3B3B3、Black20 #CCCCCC、Black10 #E6E6E6、Black4 #F5F5F5 与白色；透明色使用等值 RGB 或中性黑白叠加。不能使用 slate、zinc 默认冷灰或自行调制蓝灰。历史 blue token/标签参数仅为兼容标识，其渲染为中性灰，不能据名称恢复蓝色；温层标同样遵循。商品照片与原始品牌素材不做去色处理。

### 标签按实心与色温两级排序 (tag-priority)

标签排序先比较样式：实心优先于空心；同样式再比较色温：暖色（red/orange/gold）优先于冷色（green），冷色优先于灰色（gray，以及已转为中性灰的兼容 blue）。同优先级保持调用方传入顺序。样式优先级高于色温，因此实心灰色仍先于空心暖色。默认 variant=outline、tone=red；排序不得修改调用方数组。

### 分割线只放在列表项之间 (list-separators)

带分割线的列表在项与项之间展示分割线，最后一项底部不再添加分割线；单行列表不额外添加底部分割线。列表后仍有不同内容分区时，可保留明确的分区边界。折叠列表同样遵循末项无分割线，不能因为内容容器存在而给末项补画底线。

### 导航箭头复用图标库且不大于文字 (navigation-arrows)

列表行、摘要入口等导航箭头统一使用图标库的右箭头，不使用 ›、> 等文本字符模拟。箭头尺寸等于或小于对应文字字号，14px 正文优先使用12px箭头；不可为了填满行高放大箭头。折叠入口复用 ListRow，右侧使用向下箭头，展开后切换为向上箭头，并暴露展开状态。

商卡售价一律为 Black90 #1A1A1A，包含促销售价与展开规格，原价和单位仍使用中性灰。上述规则优先于本文件历史示例与 Figma 原稿；生成后检查所有背景、文字、边框、阴影、渐变，禁止引入蓝灰或默认 slate 冷灰。
<!-- current-visual-policy:end -->

# 基础样式与变量

本表由当前 tokens.json 生成；对应 CSS 在原 React 工程的 src/design-system/variables.css。此文档不会自动安装 CSS。下表原样展开当前 token，不建立第二套语义颜色。具体组件的角色字号由源码及设计规则决定，不将通用 pageTitle 套到所有导航标题。

字体：英文正文/控件为 Poppins；中文正文/控件为设备已安装的 PingFang SC，备用 Hiragino Sans GB、Microsoft YaHei、sans-serif。LocaleProvider 设置 en 或 zh-CN。价格字体始终使用 --ds-price-font（DdmcSans、Poppins、sans-serif），不随语言切换。公共包不内置 PingFang 和 DdmcSans 字体文件；有授权的宿主可自行加载。字体缺失时需要核查尺寸变化。

| Token 路径 | 类型 | 值 | 备注 |
|---|---|---|---|
| space.0 | dimension | {"value":0,"unit":"px"} |  |
| space.3 | dimension | {"value":3,"unit":"px"} |  |
| space.6 | dimension | {"value":6,"unit":"px"} |  |
| space.9 | dimension | {"value":9,"unit":"px"} |  |
| space.12 | dimension | {"value":12,"unit":"px"} |  |
| space.18 | dimension | {"value":18,"unit":"px"} |  |
| space.24 | dimension | {"value":24,"unit":"px"} |  |
| space.30 | dimension | {"value":30,"unit":"px"} |  |
| radius.4 | dimension | {"value":4,"unit":"px"} |  |
| radius.9 | dimension | {"value":9,"unit":"px"} |  |
| radius.12 | dimension | {"value":12,"unit":"px"} |  |
| radius.100 | dimension | {"value":100,"unit":"px"} |  |
| size.control | dimension | {"value":48,"unit":"px"} |  |
| size.compact | dimension | {"value":28,"unit":"px"} |  |
| size.add | dimension | {"value":30,"unit":"px"} |  |
| typography.pageTitle | typography | {"fontFamily":"Poppins","fontSize":{"value":24,"unit":"px"},"fontWeight":600,"letterSpacing":{"value":0,"unit":"px"},"lineHeight":1.333333} |  |
| typography.cardTitle | typography | {"fontFamily":"Poppins","fontSize":{"value":20,"unit":"px"},"fontWeight":600,"letterSpacing":{"value":0,"unit":"px"},"lineHeight":1.25} |  |
| typography.sectionTitle | typography | {"fontFamily":"Poppins","fontSize":{"value":18,"unit":"px"},"fontWeight":600,"letterSpacing":{"value":0,"unit":"px"},"lineHeight":1.333333} |  |
| typography.control | typography | {"fontFamily":"Poppins","fontSize":{"value":16,"unit":"px"},"fontWeight":600,"letterSpacing":{"value":0,"unit":"px"},"lineHeight":1.3125} |  |
| typography.body | typography | {"fontFamily":"Poppins","fontSize":{"value":14,"unit":"px"},"fontWeight":400,"letterSpacing":{"value":0,"unit":"px"},"lineHeight":1.357143} |  |
| typography.description | typography | {"fontFamily":"Poppins","fontSize":{"value":13,"unit":"px"},"fontWeight":400,"letterSpacing":{"value":0,"unit":"px"},"lineHeight":1.384615} |  |
| typography.caption | typography | {"fontFamily":"Poppins","fontSize":{"value":12,"unit":"px"},"fontWeight":400,"letterSpacing":{"value":0,"unit":"px"},"lineHeight":1.5} |  |
| typography.tag | typography | {"fontFamily":"Poppins","fontSize":{"value":11,"unit":"px"},"fontWeight":400,"letterSpacing":{"value":0,"unit":"px"},"lineHeight":1.181818} |  |
| typography.heading | typography | {"fontFamily":"Poppins","fontSize":{"value":18,"unit":"px"},"fontWeight":600,"lineHeight":1.2777777777777777} | 来源：已验收登录、验证码、隐私弹层、首页和分类；用于对应文字角色。 |
| typography.title | typography | {"fontFamily":"Poppins","fontSize":{"value":20,"unit":"px"},"fontWeight":600,"lineHeight":1.25} | 来源：已验收登录、验证码、隐私弹层、首页和分类；用于对应文字角色。 |
| typography.navigation | typography | {"fontFamily":"Poppins","fontSize":{"value":18,"unit":"px"},"fontWeight":600,"lineHeight":1.2777777777777777} | 来源：已验收登录、验证码、隐私弹层、首页和分类；用于对应文字角色。 |
| typography.field | typography | {"fontFamily":"Poppins","fontSize":{"value":16,"unit":"px"},"fontWeight":400,"lineHeight":1.3125} | 来源：已验收登录、验证码、隐私弹层、首页和分类；用于对应文字角色。 |
| typography.display | typography | {"fontFamily":"Poppins","fontSize":{"value":28,"unit":"px"},"fontWeight":600,"lineHeight":1.2142857142857142} | 来源：已验收登录、验证码、隐私弹层、首页和分类；用于对应文字角色。 |
| fontFamily.font | fontFamily | ["Poppins","-apple-system","sans-serif"] |  |
| fontFamily.price-font | fontFamily | ["DdmcSans","Poppins","sans-serif"] |  |
| color.dark.black | color | "#000000" | 纯黑细节或系统控件。 |
| color.dark.black90 | color | "#1A1A1A" | 主文字、标题、正文、价格；原 textCommerce 与 textAccount 统一为 #1A1A1A。 |
| color.dark.black70 | color | "#4D4D4D" | 次级说明及较强辅助文字。 |
| color.dark.black50 | color | "#808080" | 辅助文字、日期及说明。 |
| color.dark.black30 | color | "#B3B3B3" | 弱化文字、占位与失效状态。 |
| color.dark.black20 | color | "#CCCCCC" | 边框、禁用按钮及弱描边。 |
| color.dark.black10 | color | "#E6E6E6" | 列表分隔线、虚线及中性占位。 |
| color.dark.black4 | color | "#F5F5F5" | 页面底色、输入底色、中性标签。 |
| color.light.white | color | {"colorSpace":"srgb","components":[1,1,1],"alpha":1} | 白色卡片、浮层及反白按钮文字。 |
| color.light.primary | color | {"colorSpace":"srgb","components":[1,1,1],"alpha":0.93} | 深色表面主文字，白色 93% 透明度。 |
| color.light.secondary | color | {"colorSpace":"srgb","components":[1,1,1],"alpha":0.65} | 深色表面辅助文字，白色 65% 透明度。 |
| color.light.tertiary | color | {"colorSpace":"srgb","components":[1,1,1],"alpha":0.35} | 深色表面弱化信息，白色 35% 透明度。 |
| color.light.background | color | {"colorSpace":"srgb","components":[1,1,1],"alpha":0.1} | 深色表面底色叠加，白色 10% 透明度。 |
| color.light.quaternary | color | {"colorSpace":"srgb","components":[1,1,1],"alpha":0.02} | 深色表面极弱叠加，白色 2% 透明度。 |
| color.green.pressed | color | "#00992B" | 主按钮与加购按下态、绿色强调文字。 |
| color.green.primary | color | "#00B740" | 成功状态、优惠券标签文字；参考图 primary 绿色。 |
| color.green.hover | color | "#21CC46" | 主操作与加购悬停态。 |
| color.green.tint50 | color | "#80DB9F" | 来自用户颜色参考图；用于该色系浅色背景或分层装饰。 |
| color.green.tint30 | color | "#B3E9C6" | 来自用户颜色参考图；用于该色系浅色背景或分层装饰。 |
| color.green.tint05 | color | "#F2FBF5" | 来自用户颜色参考图；用于该色系浅色背景或分层装饰。 |
| color.green.alpha09 | color | {"colorSpace":"srgb","components":[0,0.7176470588235294,0.25098039215686274],"alpha":0.09} | 绿色透明浅底，叠加于白色时接近 #E8F9EE。 |
| color.green.bright | color | "#00BF20" | 加购按钮、主操作按钮、数量增加按钮；用户确认的交互绿色。 |
| color.green.tint09 | color | "#E8F9EE" | 选中备注标签的固定底色；不依赖底层表面颜色。；用于该色系浅色背景或分层装饰。 |
| color.green.promotionStart | color | "#24D64E" | 优惠券 Use now 渐变起点。 |
| color.green.promotionEnd | color | "#2DBA59" | 优惠券 Use now 渐变终点。 |
| color.green.header | color | "#01A334" | 首页顶部背景；来源 1:1965。按钮与加购仍用 green.bright。 |
| color.red.pressed | color | "#EC1212" | 危险操作按下态。 |
| color.red.primary | color | "#FF3133" | 促销价格、错误及警示文字。 |
| color.red.hover | color | "#FF5F5F" | 危险操作悬停态。 |
| color.red.tint50 | color | "#FF9899" | 来自用户颜色参考图；用于该色系浅色背景或分层装饰。 |
| color.red.tint30 | color | "#FFC1C2" | 来自用户颜色参考图；用于该色系浅色背景或分层装饰。 |
| color.red.tint20 | color | "#FFD6D6" | 来自用户颜色参考图；用于该色系浅色背景或分层装饰。 |
| color.red.tint05 | color | "#FFF5F5" | 促销、危险标签浅底。 |
| color.yellow.pressed | color | "#D28C11" | 黄色操作按下态。 |
| color.yellow.primary | color | "#FFB51C" | 星级评分、警示强调。 |
| color.yellow.hover | color | "#FFC745" | 黄色操作悬停态。 |
| color.yellow.soft | color | "#FFD86E" | 来自用户颜色参考图 |
| color.yellow.alpha30 | color | {"colorSpace":"srgb","components":[1,0.7098039215686275,0.10980392156862745],"alpha":0.3} | 参考图后三项文字重复；按 Primary 派生的候选透明色，待确认 |
| color.yellow.alpha20 | color | {"colorSpace":"srgb","components":[1,0.7098039215686275,0.10980392156862745],"alpha":0.2} | 参考图后三项文字重复；按 Primary 派生的候选透明色，待确认 |
| color.yellow.alpha05 | color | {"colorSpace":"srgb","components":[1,0.7098039215686275,0.10980392156862745],"alpha":0.05} | 参考图后三项文字重复；按 Primary 派生的候选透明色，待确认 |
| color.blue.primary | color | "#808080" | 兼容旧 blue 标识的中性灰；已移除蓝色色相。新组件优先使用 dark.black50。 |
| color.blue.alpha05 | color | {"colorSpace":"srgb","components":[0,0,0],"alpha":0.05} | 兼容旧 blue 标识的中性黑色 5% 透明底；禁止恢复浅蓝底。 |

CSS 变量及尺寸以源码为准，不能根据 token 路径猜变量名称。
