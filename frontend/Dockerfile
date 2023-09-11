FROM node:20-alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm i -g pm2 && \
    npm i --quiet --production

COPY . .

RUN npm run build
