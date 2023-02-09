#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹

cd docs/.vuepress/dist

# deploy to github
# echo 'b.xugaoyi.com' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='自动部署'
  githubUrl=git@github.com:recreyed/hitaki.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://recreyed:${GITHUB_TOKEN}@github.com/recreyed/hitaki.git
  git config --global user.name "recreyed"
  git config --global user.email "1760603940@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl main:gh-pages # 推送到github

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist