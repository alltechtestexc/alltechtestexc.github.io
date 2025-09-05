@echo off
:: ====== CONFIGURATION ======
:: Replace with your repo URL
set GITHUB_REPO_URL=https://github.com/alltechtestexc/alltechtestexc.github.io.git
set BRANCH=gh-pages
set COMMIT_MSG=Deploy static site

:: ====== BUILD NEXT.JS ======
echo Installing dependencies...
@REM call npm install

echo Building Next.js static site...
call npm run build

:: ====== DEPLOY TO GITHUB ======
cd out

:: Initialize Git (clean deployment each time)
git init
git remote add origin %GITHUB_REPO_URL%
git checkout -b %BRANCH%

git add .
git commit -m "%COMMIT_MSG%"
git push -u origin %BRANCH% --force

cd ..
echo Deployment complete!
pause
