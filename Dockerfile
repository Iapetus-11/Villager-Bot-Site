FROM node:18-alpine

RUN mkdir -p /villager-bot-site
WORKDIR /villager-bot-site

COPY package*.json ./
RUN yarn

COPY . .

RUN yarn build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "yarn", "start" ]
