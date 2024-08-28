#!/bin/bash

# 进入项目目录
cd /app/NotionNext

# 拉取最新代码，强制覆盖本地更改
git fetch origin my-branch
git reset --hard origin/my-branch

# 安装生产依赖
yarn install --production

# 构建项目
yarn build

# 重启应用程序
pkill -f "yarn start"
yarn start