FROM node:4.5.0

# creating app directory
ENV SRC=/usr/src/app

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install --global npm@3.10.8 &&\
  mkdir -p $SRC

WORKDIR $SRC

# Install app dependencies
COPY . $SRC
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
