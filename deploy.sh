#!/usr/bin/env sh
echo "Getting ready for deployment"
git push git@github.com:miguel-rivas/2021-react.git --delete gh-pages
npm run build
cd build || exit
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:miguel-rivas/2021-react.git master:gh-pages