# FROM alpine:latest

# WORKDIR /public

# COPY . /public

# RUN npm install

# EXPOSE 3003

# CMD [ "node", "sdc-server/start" ]

FROM node:latest

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

# RUN apk -U add vim
RUN npm run build

EXPOSE 3003
# EXPOSE 4001 4002 4003

CMD [ "node", "sdc-server/start" ]