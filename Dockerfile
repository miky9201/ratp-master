FROM node:12.18

ADD . /app/ 
WORKDIR /app

RUN yarn

EXPOSE 3000
