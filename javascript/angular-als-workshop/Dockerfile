FROM node:argon
MAINTAINER Mauricio Barrera

RUN apt-get update && apt-get install -qq -y nodejs npm

ENV INSTALL_PATH /webapp

RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY package.json $INSTALL_PATH
RUN npm install

RUN npm install -g bower
RUN npm install -g watchify

COPY . $INSTALL_PATH

RUN bower install --allow-root
RUN cd $INSTALL_PATH/client
RUN watchify app.js -o bundle-js
VOLUME ["$INSTALL_PATH/public"]

EXPOSE 8000
RUN cd $INSTALL_PATH
CMD ["node","server.js"]
