## Eventee Web App Deployment Script

!/bin/bash

# create sql
mysql -u root -e 'drop database eventee'
mysql -u root -e 'create database eventee'
mysql -u root eventee < api/sql/eventee.sql

# start server
#php -S localhost:8080
php -S localhost:8888

#react
#cd reactapp
#npm install
#npm run build
#mv dist ..

