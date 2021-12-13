FROM node:14-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm install -g nodemon
RUN npm install -g sequelize-cli

# RUN npx sequelize-cli db:create
# RUN sequelize-cli db:migrate
# RUN sequelize-cli db:seed:all

EXPOSE 3003

CMD [ "npm", "start" ]
