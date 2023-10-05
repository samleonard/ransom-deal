#!/bin/bash
set -e

echo Running eslint...
npx eslint --max-warnings=0 src/**/* 
echo ESLint passed!

echo
npx prettier --check . 
echo

echo Checking types... 
npx tsc --noEmit 
echo TSC passed!