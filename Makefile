.PHONY: install
install: ##@development resolving packages dependecies.
	yarn install

.PHONY: start
start: ##@development starting the development server.
	yarn start

.PHONY: build
build: ##@development creating an optimized production build.
	yarn build

.PHONY: serve
serve: ##@development serving production build locally.
	yarn serve

.PHONY: deploy
deploy: ##@development deploying build to github.
	GIT_USER=$(user) USE_SSH=true yarn deploy
