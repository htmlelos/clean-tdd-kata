FROM node:17-alpine3.14

WORKDIR /app
COPY . .
RUN yarn install 
RUN yarn build
# RUN yarn serve

EXPOSE 3000

CMD ["nodemon", "dist/server.js"]