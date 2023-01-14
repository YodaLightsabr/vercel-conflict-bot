npm install @conflict/beta@latest

LOCAL_CONFLICT_VERSION_DETAILS=$(npm list @conflict/beta --depth=0)
git add -A
git commit -am "Bump Conflit version\
$LOCAL_CONFLICT_VERSION_DETAILS\
\
"
git push
