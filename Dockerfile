FROM node:22-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --ignore-scripts
RUN yarn global add serve

COPY . .
ENV NODE_ENV=production
ENV VITE_API_BASE_URL=https://gsbe-server-production.up.railway.app/api/v1
RUN yarn build

EXPOSE 3000

CMD [ "serve", "-s", "dist", "-l", "3000" ]