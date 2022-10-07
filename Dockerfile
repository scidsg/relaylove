FROM nginx

COPY assets /usr/share/nginx/html/assets
COPY index.html /usr/share/nginx/html


EXPOSE 80
