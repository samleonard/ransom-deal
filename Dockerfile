FROM node:20.6.1 AS build

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY tsconfig.json tsconfig.json
COPY public public
COPY src src

RUN npm install
RUN npm run build

FROM nginx:1.25.2
COPY --from=build /app/build /usr/share/nginx/html
COPY infra/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]

HEALTHCHECK CMD curl http://localhost/ || exit 1