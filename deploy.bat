@echo off
echo ========================================
echo Zero Torque Golf Putter Portfolio
echo GitHub Pages Deployment Script
echo ========================================
echo.

cd /d "%~dp0"

echo Step 1: Checking Git installation...
git --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Git is not installed or not in PATH
    echo Please install Git from https://git-scm.com/download/win
    pause
    exit /b 1
)

echo.
echo Step 2: Initializing Git repository...
git init
git branch -M main

echo.
echo Step 3: Adding all files to Git...
git add .

echo.
echo Step 4: Creating commit...
git commit -m "Deploy Zero Torque Golf Putter portfolio"

echo.
echo ========================================
echo Configuration Required
echo ========================================
echo.
echo Please do one of the following:
echo   Option A: Enter your GitHub username when prompted
echo   Option B: Edit DEPLOY-CONFIG.txt manually
echo.
pause
