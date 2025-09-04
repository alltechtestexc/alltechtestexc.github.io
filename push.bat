@echo off
:: ====== CONFIGURATION ======
:: Replace these with your details
set GITHUB_REPO_URL=https://github.com/alltechtestexc/alltechtestexc.github.io.git
set BRANCH=main
set COMMIT_MSG=Build and deploy

:: ====== BUILD NEXT.JS ======
echo Building Next.js project...
@REM call npm install
call npm run build

:: If you export static site:
:: call npm run export

:: ====== PUSH TO GITHUB ======
echo Preparing to push build to GitHub...

git init
git remote add origin %GITHUB_REPO_URL%
git add .
git commit -m "%COMMIT_MSG%"
git branch -M %BRANCH%
git push -u origin %BRANCH% --force

echo Done!
pause
