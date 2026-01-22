# Depth Summary Bookshelf

这是一个基于 React Router 7 构建的深度书籍摘要书架应用，旨在展示和管理书籍的深度阅读摘要。

## 项目介绍

该项目是一个现代化的 Web 应用，使用 React Router v7 作为核心框架，结合 Vite 进行快速构建。它具有以下特点：

- **动态路由**：根据书籍数据自动生成每本书的独立也没路由。
- **现代化技术栈**：使用 React 19, TypeScript, Tailwind CSS v4。
- **高性能**：利用 Vite 的极速 HMR 和构建能力。
- **清晰的架构**：基于 React Router 7 的路由配置 (`routes.ts`) 和数据驱动的设计。

## 技术栈

- **框架**: [React Router 7](https://reactrouter.com/)
- **构建工具**: [Vite](https://vitejs.dev/)
- **语言**: TypeScript
- **样式**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI 库**: React 19
- **Node 版本**: 24.13.0

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发环境运行

```bash
npm run dev
```
访问 http://localhost:5173 即可查看应用。

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run start
```

## 项目结构

```
app/
├── books/          # 书籍页面组件
├── components/     # 通用组件
├── data/           # 数据文件 (如 books.ts)
├── routes/         # 路由页面 (如 home.tsx)
├── root.tsx        # 根布局
└── routes.ts       # 路由配置
```

## 功能特性

- 首页展示书架
- 点击书籍进入详情页（阅读摘要）
- 响应式设计
