FROM ruby:2.3-slim
MAINTAINER Mauricio Barrera

RUN apt-get update && apt-get install -qq -y build-essential nodejs libsqlite3-dev libmysqld-dev --no-install-recommends

ENV INSTALL_PATH /app

RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY Gemfile Gemfile
RUN bundle install

COPY . .

RUN bundle exec rake RAILS_ENV=staging

VOLUME ["$INSTALL_PATH/public"]

EXPOSE 3000

CMD rails server

