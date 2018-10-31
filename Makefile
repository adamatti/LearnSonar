.DEFAULT_GOAL := help

stop: ## Stop containers
	docker-compose stop -t 0

rm: stop ## remove containers
	docker-compose rm -fv 

deps: ## start dependencies. E.g: postgre, sonar
	docker-compose up -d

.PHONY: help
help: ## show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'