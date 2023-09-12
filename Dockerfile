FROM node:20.6.1 AS build

WORKDIR /app

COPY src src

COPY \
  package.json \
  package-lock.json \
  tsconfig.json \
  public \
  src \
  ./

RUN ls
RUN pwd

RUN npm install

RUN npm run build

FROM nginx:1.25.2
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
