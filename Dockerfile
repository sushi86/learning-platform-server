FROM node:15.5.1-alpine3.10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

EXPOSE 8080
CMD [ "node", "./dist/app.js" ]
