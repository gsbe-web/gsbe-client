FROM node:22-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --ignore-scripts
RUN yarn global add serve

COPY . .

ARG VITE_NODE_ENV
ENV VITE_NODE_ENV=$VITE_NODE_ENV

ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

# ENV VITE_API_BASE_URL=https://gsbe-server-production.up.railway.app/api/v1

RUN yarn build

EXPOSE 3000

CMD [ "serve", "-s", "dist", "-l", "3000" ]