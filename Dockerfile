FROM node:18.8.0-alpine

RUN mkdir /villager-bot-site
WORKDIR /villager-bot-site

COPY package*.json ./
RUN yarn

COPY . .

RUN yarn build

CMD [ "yarn", "start" ]
