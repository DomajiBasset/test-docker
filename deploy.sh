#!/bin/bash

running_containers=$(docker ps -q)

case "$1" in
stop)
  docker-compose stop
  ;;
restart)
  if [ -n "$running_containers" ]; then
    docker-compose stop
    docker-compose start
  else
    docker-compose start
  fi
  ;;
rebuild)
  if [ -n "$running_containers" ]; then
    docker-compose down
  fi
  docker-compose up -d --build
  docker image prune -f
  ;;
*)
  echo "請使用正確參數。可用參數：stop | restart | rebuild"
  ;;
esac
