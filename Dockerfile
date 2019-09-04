FROM node:10.16.3-alpine

COPY ./web-content, index.js, package.json, package-lock.json   ./
RUN npm install
CMD [ "npm", "start" ]

