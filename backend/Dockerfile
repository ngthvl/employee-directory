FROM node:20-alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm i -g pm2 && \
    npm i --quiet --production

COPY . .

EXPOSE 8000

RUN pwd && ls -al

CMD ["pm2-runtime", "start", "./src/server.js"]
