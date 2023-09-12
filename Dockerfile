FROM node:20.6.1

WORKDIR /app

COPY src src

COPY \
  package.json \
  package-lock.json \
  tsconfig.json \
  public \
  src \
  ./

RUN npm install

RUN npm run build

FROM nginx:1.17.7-alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
