FROM node:alpine

WORKDIR /usr/express-app
COPY package.json tsconfig.json ormconfig.json /usr/express-app/
RUN npm i
COPY src /usr/express-app/src
RUN npm run build
EXPOSE 3000
ENTRYPOINT ["node", "dist/index.js"]
