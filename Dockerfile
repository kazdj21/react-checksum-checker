FROM node:latest as buildStage
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM node:latest
WORKDIR /app
COPY --from=buildStage /app/build /app
RUN npm init -y
RUN npm install -g http-server
EXPOSE 8080

CMD ["http-server", "/app"]