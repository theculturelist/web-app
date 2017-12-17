FROM node:8.9.3-slim

# creating app directory
ENV SRC=/usr/src/app

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN useradd --user-group --create-home --shell /bin/false app &&\
  mkdir -p $SRC

WORKDIR $SRC

# Install app dependencies
COPY . $SRC
RUN yarn install

EXPOSE 3000

CMD [ "yarn", "start" ]
