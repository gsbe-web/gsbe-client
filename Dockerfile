FROM node:22-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --ignore-scripts
RUN yarn global add serve

COPY . .

ARG VITE_API_URL
ENV VITE_API_URL=https://gsbe-server.vercel.app/api/v1/

RUN yarn build

EXPOSE 3000

CMD [ "serve", "-s", "dist", "-l", "3000" ]