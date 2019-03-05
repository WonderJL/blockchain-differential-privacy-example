up:
	docker-compose up es6-starter
build:
	docker-compose up --build --force-recreate es6-starter
sh:
	docker-compose exec es6-starter sh
stop:
	docker-compose stop es6-starter
down:
	docker-compose down
