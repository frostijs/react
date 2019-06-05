#! /bin/bash

export IMAGE_NAME="frosti-react"

echo 'Docker build:' $IMAGE_NAME

docker build -t $IMAGE_NAME ./

echo 'Docker run:' $IMAGE_NAME

docker run -it -p 3000:3000 $IMAGE_NAME

echo 'Done!'
