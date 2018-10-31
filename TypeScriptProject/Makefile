.DEFAULT_GOAL := help

clean: ## remove generated folders
	rm -rf coverage
	rm -rf dist
	rm -rf node_modules
	rm -rf .nyc_output
	rm -rf reports
	rm -rf .scannerwork

.PHONY: help
help: ## show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'