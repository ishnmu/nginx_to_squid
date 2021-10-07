start:
	docker-compose up -d

logs: 
	docker-compose logs -f

stop:
	docker-compose down

restart:
	docker-compose restart

clean: stop
