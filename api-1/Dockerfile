FROM node:13-alpine

USER root
ENV WORKDIR=/usr/src/app

RUN mkdir -p $WORKDIR
WORKDIR $WORKDIR

COPY package.json .

RUN yarn
RUN yarn global add nodemon

VOLUME [ "$WORKDIR/node_modules" ]

CMD [ "nodemon", "." ]
