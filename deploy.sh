#!/bin/bash

running_containers=$(docker ps -q)

# 檢查傳入的參數
if [ "$1" == "stop" ]; then
  docker-compose stop
elif [ "$1" == "restart" ]; then
  if [ -n "$running_containers" ]; then
    docker-compose stop
    docker-compose start
  else
    docker-compose start
  fi
elif [ "$1" == "rebuild" ]; then
  if [ -n "$running_containers" ]; then
    docker-compose down
  fi
  docker-compose up -d --build
  docker image prune -f
else
  # 如果沒有提供正確的參數，顯示使用方式
  echo "請使用正確參數。"
fi
