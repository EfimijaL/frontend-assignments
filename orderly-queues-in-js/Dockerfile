FROM node:16

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

# Bundle app source
COPY . .

CMD [ "node", "build/implementation.js" ]
