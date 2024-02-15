# Use uma imagem base do Node.js
FROM node:14-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie os arquivos do projeto para o diretório de trabalho
COPY . .

# Construa o projeto React
RUN npm run build

# Exponha a porta 3000
EXPOSE 3000

# Inicie a aplicação React quando o contêiner for iniciado
CMD ["npm", "start"]
