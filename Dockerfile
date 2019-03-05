FROM node:10-alpine

RUN apk add --update \
  bash \
  git \
  && rm -rf /var/cache/apk/*

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app/

RUN npm run build

CMD npm run start
