FROM node:18-alpine

ENV RUN_MODE=dev

RUN npm install -g docker
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install

COPY / /app

COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
