
.PHONY: cqlsh
cqlsh:
	docker-compose exec kong-database cqlsh

.PHONY: cassandra-initialize
cassandra-initialize:
	docker-compose run kong-database

.PHONY: kong
kong-initialize:
	docker-compose run kong kong migrations bootstrap

.PHONY: build
build:
	docker-compose build --force-rm

.PHONY: start
start:
	docker-compose up

.PHONY: stop
stop:
	docker-compose down

# http://cassandra.apache.org/doc/latest/cql/index.html
# https://www.devmedia.com.br/introducao-ao-cassandra/38377
# https://docs.konghq.com/install/ubuntu/
# https://hub.docker.com/_/cassandra
# https://hub.docker.com/_/kong
# https://github.com/PGBI/kong-dashboard/blob/3.0/docker-compose.yml
