FROM ruby:2.3-onbuild
MAINTAINER Mauricio Barrera
RUN apt-get update && apt-get install -qq -y build-essential nodejs libsqlite3-dev libmysqld-dev --no-install-recommends
RUN bundle config --global frozen 0

ENV INSTALL_PATH /app

RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

ONBUILD COPY Gemfile $INSTALL_PATH
ONBUILD COPY Gemfile.lock $INSTALL_PATH
ONBUILD RUN bundle install --without development test

COPY . $INSTALL_PATH

RUN bundle exec rake db:migrate RAILS_ENV=staging

VOLUME ["$INSTALL_PATH/public"]

EXPOSE 3000

CMD ["rails","server","-b","0.0.0.0"]

