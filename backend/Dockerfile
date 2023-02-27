FROM node:18-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev:server"]
