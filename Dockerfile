FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]