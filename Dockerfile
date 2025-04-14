
# 使用 php:8.2-apache 映像，這會同時提供 Apache 和 PHP 支援
FROM php:8.2-apache

COPY ./httpd.conf /etc/apache2/sites-available/000-default.conf

COPY ./src /var/www/html/
COPY ./dist /var/www/html/dist/

# 啟用 Apache 模組
# RUN a2enmod rewrite

# CMD ["apache2-foreground"]

EXPOSE 8080