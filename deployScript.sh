## Eventee Web App Deployment Script

!/bin/bash

# create sql
mysql -u root -e 'drop database eventee2'
mysql -u root -e 'create database eventee2'
mysql -u root eventee2 < api/sql/eventee2.sql

# start server
#php -S localhost:8080
php -S localhost:8888

#react
#cd reactapp
#npm install
#npm run build
#mv dist ..

