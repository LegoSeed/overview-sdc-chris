# FROM alpine:latest

# WORKDIR /public

# COPY . /public

# RUN npm install

# EXPOSE 3003

# CMD [ "node", "sdc-server/start" ]

FROM node:8-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3003

CMD [ "node", "sdc-server/start" ]