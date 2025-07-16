FROM node:22-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --ignore-scripts
RUN yarn global add serve

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "serve", "-s", "dist", "-l", "3000" ]