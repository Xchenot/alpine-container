# Alpine container

This project provides a template to start an alpine conatiner with docker.

## Prerequisites

The only tools you need to build this project are :

- Docker Compose
- Makefile support (see GNU Make for windows OS)

## Install

To install the project, just clone it:

``` bash
$ git clone git@github.com:Xchenot/development-environments.git
```

## Launch container

### node
make start

for download libraries :
npm install

for add new library :
npm install [package]

### python 

for download libraries :
./download.sh

for add new library :
pipenv install [package]
pip install -t ./libs


## Google auth
set variable
astuce: display current path "pwd"
export GOOGLE_APPLICATION_CREDENTIALS="/root/app/env/zeiver-7bf91a919a71.json"

verify if the variable is set
echo $GOOGLE_APPLICATION_CREDENTIALS

testing
curl -X POST \
-H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \
-H "Content-Type: application/json; charset=utf-8" \
-d @request.json \
https://dialogflow.googleapis.com/v3beta1/projects/zeiver/locations/us/agents/c7cb8806-ce62-4b90-94dc-9a5f3bbcc8fe/sessions/qnq5t:detectIntent


## Testing

## Deploying

## Destroying

## Unlocking

## Bash History

## Troubleshooting
