# AJAX Posts Block

WordPress block editor plugin with AJAX posts block that queries and displays
posts by type, category(s), post tag(s).

## Features

* Default and wide (with columns) block alignment support
* Set number of posts to display
* Filter to specific public post type(s)
* Filter to specific categories and post tags
* Forward/back paging without page reload
* Post featured image/thumbnail display
* "Read time" (custom meta) can be set for a post in the editor's sidebar, which will be conditionally displayed in the byline for each post listed by the block

## Contributing

Reviewing this plugin, or want to submit a PR? Here's how to get set up after
cloning/downloading the plugin into your WordPress install:

1. Install composer dependencies: `composer install`
1. Install WordPress coding standards library: `composer run-script install-codestandards`
1. Refresh the composer autoloader: `composer dump-autoload`
1. Install node packages: `npm install` (we use Node 14.x with NPM 6.x)
1. If you're using VS Code, there's a `settings.sample.json` in `.vscode` for a head start on getting Intelephense and PHPCS/WPCS integrated with your editor
1. Spin up build scripts for editor, front end, and dynamic asset dependency management (via @wordpress/scripts): `npm start`
1. Check against WordPress project standards with `composer run-script phpcs`, `npm run lint:css`, and `npm run lint:js`
1. Build production-ready, minified assets with `npm run build`

## Testing

The setup here is somewhat dependent on your environment.

1. Do "Contributing" steps above.
1. Install [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/).
1. Make sure your Docker service is running. Some Debian Linux distributions may not have a typical `init` or  `systemd` and need `sudo service docker start`. You may also need to [allow your user to use docker](https://docs.docker.com/engine/install/linux-postinstall/).
1. Run `npm run env:start`. If you don't already have WordPress testing dependencies installed, you may have to execute the `bin/install-wp-tests.sh` script (ex: `bash bin/install-wp-tests.sh`).
1. Run `composer run-script test` for PHP unit and integration tests. [Some tests may need their snapshots updated](https://jestjs.io/docs/snapshot-testing), depending on the changes that are made.
1. Run `npm run test:e2e` for JavaScript end-to-end tests. If you get issues loading the puppeteer module, run `npm cache clean --force`, delete the `node_modules` folder, then run `npm install` ([Trac #52843](https://core.trac.wordpress.org/ticket/52843)).
1. Run `npm run test:unit` for JavaScript unit tests.
