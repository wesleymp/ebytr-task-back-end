FROM node:16-alpine

RUN apk update && apk upgrade && \
  apk add --no-cache bash git openssh

RUN apk add g++ make py3-pip

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g npm@6

RUN npm install

COPY . .

EXPOSE 3333

CMD npm run dev
