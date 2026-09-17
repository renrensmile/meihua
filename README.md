# 梅花易数学习笔记

这是一个独立的梅花易数学习笔记站点，基于 **VuePress 2 + Vue 3 + Vite** 构建，可通过 GitHub Pages 发布。

## 一、目录说明

```text
E:\blog\learning-notes
├── docs/                         # 网站内容根目录
│   ├── README.md                 # 网站首页
│   ├── .vuepress/
│   │   ├── config.mjs            # 网站标题、顶部导航、左侧目录
│   │   └── public/               # 原样复制到网站根目录的静态文件
│   │       └── tools/            # 刷题工具等独立 HTML 页面
│   ├── guide/                    # 入门导读与写作说明
│   ├── basics/                   # 基础体系
│   ├── divination/               # 起卦方法
│   ├── cases/                    # 案例与复盘
│   └── tools/                    # 工具的站内承载页
├── .github/workflows/deploy.yml  # GitHub Pages 自动发布工作流
├── package.json                  # 启动与构建命令
└── README.md                     # 本维护说明
```

## 二、本地预览与构建

### 首次安装依赖

```bash
cd E:\blog\learning-notes
npm install
```

### 启动本地预览

```bash
npm run dev
```

默认访问地址是 `http://localhost:8080/`。如果 8080 已被其他项目占用，终端会自动提示新的端口；请以终端输出为准。

### 生成发布文件

```bash
npm run build
```

构建产物在 `docs/.vuepress/dist/`。该目录是自动生成的，**不要手工编辑，也不要提交到 Git**。

---

## 三、新增一篇笔记

以在“基础体系”下新增《五行生克》为例。

### 1. 新建 Markdown 文件

在下面目录创建文件：

```text
docs/basics/wuxing-shengke.md
```

写入内容：

```markdown
# 五行生克

## 五行

木、火、土、金、水。

## 生克关系

- 木生火，火生土，土生金，金生水，水生木。
- 木克土，土克水，水克火，火克金，金克木。

## 学习记录

这里继续补充自己的理解、取象和练习。
```

### 2. 加入左侧菜单

打开：

```text
docs/.vuepress/config.mjs
```

找到 `'/basics/'` 下的 `children`，在合适位置添加一行：

```js
pageLink('五行生克', '/basics/wuxing-shengke.html'),
```

完整示例：

```js
'/basics/': [
  {
    text: '基础体系',
    children: [
      pageLink('基础体系', '/basics/'),
      pageLink('第一章：记住卦名和卦序', '/basics/chapter-01-hexagram-names.html'),
      pageLink('八卦基础', '/basics/bagua.html'),
      pageLink('五行生克', '/basics/wuxing-shengke.html'),
      pageLink('六十四卦基础框架', '/basics/sixty-four-hexagrams.html')
    ]
  }
],
```

### 3. 本地检查

保存后，开发服务会自动刷新。若没有启动服务，执行：

```bash
npm run dev
```

打开“基础体系”，左侧会出现“**五行生克**”。

> 日常创建时可以直接使用中文文件名或中文目录名，例如 `五行生克.md`、`象意笔记/`。提交给我整理时，我会统一转换为英文路径，并同步更新顶部导航、左侧菜单和站内链接；页面展示标题仍保持中文。

---

## 四、新增一个栏目 / 目录

例如新增一个一级栏目“象意笔记”。

### 1. 创建目录与栏目首页

创建目录：

```text
docs/images/
```

创建栏目首页文件：

```text
docs/images/README.md
```

写入：

```markdown
# 象意笔记

记录卦象、物象、人物、方位等取象内容。
```

> `README.md` 会自动成为该目录的首页，即 `/images/`。

### 2. 新建栏目内文章

例如：

```text
docs/images/qian-gua.md
```

内容：

```markdown
# 乾卦取象

记录乾卦的常见象意和练习。
```

### 3. 增加顶部导航

在 `docs/.vuepress/config.mjs` 的 `navbar` 内加入：

```js
{ text: '象意笔记', link: '/images/' },
```

例如放在“基础体系”后面：

```js
navbar: [
  { text: '首页', link: '/' },
  { text: '入门导读', link: '/guide/' },
  { text: '基础体系', link: '/basics/' },
  { text: '象意笔记', link: '/images/' },
  { text: '起卦方法', link: '/divination/' }
],
```

### 4. 增加对应左侧菜单

在 `sidebar` 内新增完整的 `'/images/'` 配置：

```js
'/images/': [
  {
    text: '象意笔记',
    children: [
      pageLink('象意笔记', '/images/'),
      pageLink('乾卦取象', '/images/qian-gua.html')
    ]
  }
],
```

**顶部导航与左侧菜单需要一起添加**：

- 顶部负责切换一级栏目；
- 左侧负责显示该栏目下的文章层级；
- 每一篇文章都使用 `pageLink(...)`，不要直接写字符串，否则 VuePress 可能会把当前页重复插入左侧顶部。

---

## 五、现有栏目对应关系

| 顶部栏目 | 内容目录 | 左侧配置键 |
| --- | --- | --- |
| 入门导读 | `docs/guide/` | `'/guide/'` |
| 基础体系 | `docs/basics/` | `'/basics/'` |
| 起卦方法 | `docs/divination/` | `'/divination/'` |
| 案例与复盘 | `docs/cases/` | `'/cases/'` |
| 学习工具 | `docs/tools/` | `'/tools/'` |

## 六、工具页面怎么添加

### 独立 HTML 工具

例如有一个现成的 HTML 工具文件：

```text
my-tool.html
```

复制到：

```text
docs/.vuepress/public/tools/my-tool.html
```

然后建立一个站内承载页：

```text
docs/tools/my-tool.md
```

内容可以参考现有的 `docs/tools/classic-quiz.md`：用 `<iframe>` 引入 `/tools/my-tool.html`。

最后在 `'/tools/'` 的 `children` 中加入：

```js
pageLink('我的工具', '/tools/my-tool.html'),
```

不要在 Markdown 正文中直接跳转 `/tools/my-tool.html`；通过站内承载页进入，可避免 VuePress 前端路由把静态 HTML 当成不存在的页面而显示 404。

## 七、发布到 GitHub Pages

项目已包含自动发布文件：

```text
.github/workflows/deploy.yml
```

首次发布：

1. 在 GitHub 创建仓库。
2. 提交并推送 `E:\blog\learning-notes` 的代码。
3. 打开仓库 **Settings → Pages**。
4. 将 **Build and deployment → Source** 设为 **GitHub Actions**。
5. 后续每次推送到 `main` 或 `master`，GitHub Actions 会自动构建并发布。

本地提交示例：

```bash
cd E:\blog\learning-notes
git add .
git commit -m "新增五行生克笔记"
git push
```

## 八、中文命名整理规则

日常记录时，目录和 Markdown 文件可以直接使用中文名称，不需要先自己翻译：

```text
docs/象意笔记/
docs/象意笔记/乾卦取象.md
```

完成一批内容后，只需说明“整理新增笔记”并告诉我目录位置。我会完成以下处理：

1. 将目录和文件统一转换为英文路径，例如：

   ```text
   docs/images/
   docs/images/qian-gua.md
   ```

2. 保留页面中的中文标题，例如“象意笔记”“乾卦取象”。
3. 同步修改 `docs/.vuepress/config.mjs` 中的顶部导航、左侧菜单和文章链接。
4. 检查旧路径引用，避免出现 404。
5. 执行构建确认站点正常。

> 不需要先自行改英文名；中文用于写作和整理，英文路径由我统一维护。

## 九、日常维护检查清单

新增或修改内容后，按以下顺序检查：

1. Markdown 文件是否放在正确目录。
2. 文章标题是否正确。
3. 对应左侧菜单是否已经增加 `pageLink(...)`。
4. 新一级栏目是否同时增加了顶部导航与左侧菜单配置。
5. 执行 `npm run dev` 检查链接和左侧层级。
6. 发布前执行 `npm run build`。
7. 构建成功后再提交并推送到 GitHub。
