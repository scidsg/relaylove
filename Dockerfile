FROM nginx

COPY design-system /usr/share/nginx/html/design-system
COPY css /usr/share/nginx/html/css
COPY index.html /usr/share/nginx/html


EXPOSE 80
