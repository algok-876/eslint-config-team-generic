# 团队通用 Eslint 配置
为了统一团队代码风格，将 Eslint 配置封装到一起，提供开箱即用的配置。对于JS代码，提供 airbnb 风格配置。此外，还提供 Raect，Vue，TS 代码的 Eslint 配置。

## 安装
```bash
npm i eslint-config-team-generic
```

## 使用
该配置依赖了其他一些插件，在实际项目中需要将其安装为开发依赖，通过以下命令查看所有对等依赖

```bash
npm info "eslint-config-team-generic" peerDependencies
```
### 添加JS代码检查
将 `team-generic` 添加到配置文件 `.eslintrc.json` 中

```json
{
  "extends": [
    "team-generic"
  ]
}
```
### 添加React代码检查
1. 安装以下对等依赖
```json
{
  "eslint-plugin-import": "^2.30.0",
  "eslint-plugin-jsx-a11y": "^6.10.0",
  "eslint-plugin-react": "^7.36.1",
  "eslint-plugin-react-hooks": "^4.6.2",
}
```
2. 修改配置文件
```json
{
  "extends": [
    "team-generic/react"
  ]
}
```

### 添加Vue代码检查
1. 安装以下对等依赖
```json
{
  "eslint-plugin-vue": "^9.28.0",
  "vue-eslint-parser": "^9.4.3"
}
```
2. 修改配置文件
```json
{
  "extends": [
    "team-generic/vue"
  ]
}
```

### 添加TS代码检查
1. 安装以下对等依赖
```json
{
  "@typescript-eslint/eslint-plugin": "^8.8.0",
  "@typescript-eslint/parser": "^8.8.0",
}
```
2. 修改配置文件
```json
{
  "extends": [
    "team-generic/ts"
  ]
}
```