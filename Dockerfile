FROM trion/ng-cli:1.7.0 as angular-builder
LABEL angular-builder true
ARG http_proxy=
ENV http_proxy=${http_proxy}
# https://docs.docker.com/engine/userguide/eng-image/multistage-build/
# https://medium.com/@shakyShane/lets-talk-about-docker-artifacts-27454560384f
USER 0
WORKDIR /app
COPY frontend/package.json frontend/yarn.lock ./
RUN yarn
COPY frontend ./
RUN yarn build
# TODO ver como parametrizar el prod-build cuando salgamos a prod.

FROM nginx:mainline-alpine

COPY configs/nginx.conf /etc/nginx/nginx.conf
COPY --from=angular-builder /app/dist /usr/share/nginx/html
