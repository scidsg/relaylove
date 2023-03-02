ARG NEXT_PUBLIC_MATOMO_URL NEXT_PUBLIC_MATOMO_SITE_ID PORT=3000 USER=node

###########
# BUILDER #
###########
FROM node:lts-alpine3.16 as build

ARG NEXT_PUBLIC_MATOMO_URL 
ARG NEXT_PUBLIC_MATOMO_SITE_ID

WORKDIR /workspace
COPY . .
RUN npm install

# build NextJs project
RUN npm run build

ENV PORT=${PORT} NEXT_PUBLIC_MATOMO_URL=${NEXT_PUBLIC_MATOMO_URL} NEXT_PUBLIC_MATOMO_SITE_ID=${NEXT_PUBLIC_MATOMO_SITE_ID}

###########
# PROJECT #
###########
FROM node:16-slim

ARG NEXT_PUBLIC_MATOMO_URL 
ARG NEXT_PUBLIC_MATOMO_SITE_ID
ARG USER

WORKDIR /app
COPY --from=build --chown=${USER}:${USER} /workspace/.next /app/.next
COPY --from=build --chown=${USER}:${USER} /workspace/node_modules /app/node_modules
COPY --from=build --chown=${USER}:${USER} /workspace/package.json /app/
COPY --from=build --chown=${USER}:${USER} /workspace/package-lock.json /app/

# inject build args as enviroment variables
ENV PORT=${PORT} NEXT_PUBLIC_MATOMO_URL=${NEXT_PUBLIC_MATOMO_URL} NEXT_PUBLIC_MATOMO_SITE_ID=${NEXT_PUBLIC_MATOMO_SITE_ID}

# set user context
USER ${USER}

# expose port
EXPOSE ${PORT}

# run for production
CMD [ "npm", "run", "start"]