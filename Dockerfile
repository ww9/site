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
RUN apk update && apk add bash openssh vim zip rsync
COPY . /

# So we can deploy using our SSH key
RUN mkdir -p /root/.ssh
# RUN chown -R node:node /home/node/.ssh
RUN echo $'\nHost *167.71.127.126*\n\
	StrictHostKeyChecking no\n\
	' > /root/.ssh/config

RUN npm install -g nodemon && npm install
CMD ["nodemon", "build"]