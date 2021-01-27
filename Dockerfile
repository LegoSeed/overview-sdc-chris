FROM node:8.10-alpine

WORKDIR /public

COPY . /public

RUN npm install

EXPOSE 3003

CMD [ "npm", "run", "prod" ]