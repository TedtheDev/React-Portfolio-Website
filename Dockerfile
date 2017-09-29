FROM node:latest
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm build
COPY . .
EXPOSE 8080
CMD ["npm","start"]
