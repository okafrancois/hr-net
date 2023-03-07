FROM node:18-alpine
RUN npm install -g docker
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install

COPY / /app

EXPOSE 5173

CMD ["npm", "run", "dev"]
