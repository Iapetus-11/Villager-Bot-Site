FROM node:18-alpine AS build

WORKDIR /villagerbot.com

COPY . .
RUN npm i
RUN npm run build

FROM node:18-alpine AS deploy

WORKDIR /villagerbot.com

# copy over necessary files from build stage
COPY --from=build /villagerbot.com/package.json .
COPY --from=build /villagerbot.com/.output .

# install prod dependencies
RUN npm i --omit=dev --omit:optional

CMD ["node", "server/index.mjs"]
