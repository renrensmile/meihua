# 部署到 GitHub Pages

项目已配置 GitHub Actions 自动部署：推送 `main` 或 `master` 分支后，会构建并发布网站。

## 首次配置

1. 在 GitHub 创建一个新的空仓库，例如 `learning-notes`。
2. 将 `E:\blog\learning-notes` 中的内容提交并推送到该仓库。
3. 打开仓库 **Settings → Pages**。
4. 将 **Build and deployment → Source** 选择为 **GitHub Actions**。
5. 前往 **Actions** 等待“部署 VuePress 到 GitHub Pages”完成。
6. 在 **Settings → Pages** 查看网站访问地址。

## 地址规则

- 用户主页仓库：`https://<用户名>.github.io/`
- 普通项目仓库：`https://<用户名>.github.io/<仓库名>/`

工作流会自动处理两种场景的资源基础路径，不需要修改站点配置。

## 本地构建检查

```bash
npm install
npm run build
```

构建产物为 `docs/.vuepress/dist/`，无需提交到 Git。
