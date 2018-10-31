.DEFAULT_GOAL := help

test: ## Run tests
	mvn clean test

run: ## Run Java App
	mvn clean package exec:java

jenkins: ## run tests, coverage, send to sonar
	mvn clean verify jacoco:report org.pitest:pitest-maven:mutationCoverage sonar:sonar

.PHONY: help
help: ## show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'