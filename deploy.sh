#!/usr/bin/env sh
echo "Getting ready for deployment"

# experiemnt # 1
# file='package.json'
# search="'name': 'miguel-rivas-2021-react',"
# replace="'homepage': 'https://miguel-rivas.github.io/2021-react',"
# sed -i "2s/$replace/" $file

# experiemnt # 2
# echo '"homepage": "https://miguel-rivas.github.io/2021-react",' >> package.json

git push git@github.com:miguel-rivas/2021-react.git --delete gh-pages
npm run build
cd build || exit
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:miguel-rivas/2021-react.git master:gh-pages