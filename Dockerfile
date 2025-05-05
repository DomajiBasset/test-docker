
# 使用 php:8.2-apache 映像，這會同時提供 Apache 和 PHP 支援
FROM php:8.2-apache

RUN a2enmod rewrite

COPY dist/ /var/www/html/ 
COPY ./httpd.conf /etc/apache2/sites-available/000-default.conf
COPY ./.htaccess /var/www/html/.htaccess

RUN chown -R www-data:www-data /var/www/html
# RUN chmod -R 755 /var/www/html

EXPOSE 80