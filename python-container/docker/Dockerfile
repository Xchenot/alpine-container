FROM python:3.9-rc-alpine

RUN apk update
RUN apk add gcc
RUN apk add musl-dev
RUN apk add libffi-dev
RUN pip3 install pipenv

ENTRYPOINT ["/bin/sh", "-c"]