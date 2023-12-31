FROM node:latest

WORKDIR /usr/app

COPY package.json /usr/app/

RUN yarn install

COPY . . 

EXPOSE 8080


CMD ["yarn", "dev"]