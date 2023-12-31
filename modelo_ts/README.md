# comandos de inicialização

npm i -D typescript ts-node nodemon @types/express prisma
npm i express sqlite3 sqlite

# scripts

"dev": "nodemon --exec ts-node src/server.ts"

# iniciar prisma

npx prisma init --datasource-provider sqlite
npx prisma migrate dev