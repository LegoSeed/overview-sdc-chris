# FROM alpine:latest

# WORKDIR /public

# COPY . /public

# RUN npm install

# EXPOSE 3003

# CMD [ "node", "sdc-server/start" ]

FROM alpine:latest

WORKDIR /public

COPY . /public

RUN npm install

EXPOSE 3003

CMD [ "node", "sdc-server/start" ]