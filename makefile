.PHONY: build
build:
	@$(MAKE) -C backend build      
	@$(MAKE) -C logger build
	@$(MAKE) -C task_service build
	@$(MAKE) -C frontend build

# Start up all services
.PHONY: up
up:
	@$(MAKE) -C backend up
	@$(MAKE) -C logger up
	@$(MAKE) -C task_service up
	@$(MAKE) -C frontend up

# Tear down all services
.PHONY: down
down:
	@$(MAKE) -C backend down
	@$(MAKE) -C logger down
	@$(MAKE) -C task_service  down
	@$(MAKE) -C frontend down

# Remove all older setup and start fresh services
.PHONY: recreate
recreate:
	@$(MAKE) -C backend recreate
	@$(MAKE) -C logger recreate
	@$(MAKE) -C task_service recreate
	@$(MAKE) -C frontend recreate