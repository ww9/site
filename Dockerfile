FROM node:16-alpine as base
WORKDIR /
COPY package*.json /
EXPOSE 4444

FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY . /
CMD ["node", "build"]

FROM base as dev
ENV NODE_ENV=development
RUN apk update && apk add bash
COPY . /
RUN npm install -g nodemon && npm install
CMD ["nodemon", "build"]