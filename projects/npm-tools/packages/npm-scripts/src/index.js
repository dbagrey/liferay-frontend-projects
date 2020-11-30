/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const minimist = require('minimist');

module.exports = async function () {
	const ARGS_ARRAY = process.argv.slice(2);

	const {
		_: [type],
	} = minimist(ARGS_ARRAY);

	const PUBLIC_COMMANDS = {
		async build() {
			require('./scripts/build')(...ARGS_ARRAY.slice(1));
		},

		async check() {
			await require('./scripts/check')();
		},

		async fix() {
			await require('./scripts/fix')();
		},

		async prettier() {
			await require('./scripts/prettier')(...ARGS_ARRAY.slice(1));
		},

		storybook() {

			// Storybook is temporarily disabled until it supports webpack 5
			// require('./scripts/storybook')();

			/* eslint-disable-next-line no-console */
			console.log(`
			
	WARNING:

	Storybook has been temporarily disabled because it does not support 
	webpack 5.

	See https://bit.ly/35zFX4E for more information.

`);
		},

		test() {
			require('./scripts/test')(ARGS_ARRAY);
		},

		theme() {
			require('./scripts/theme').run(...ARGS_ARRAY.slice(1));
		},

		webpack() {
			require('./scripts/webpack')(...ARGS_ARRAY.slice(1));
		},
	};

	const PRIVATE_COMMANDS = {
		async format() {
			await require('./scripts/format')();
		},

		'format:check': async function formatCheck() {
			await require('./scripts/format')({check: true});
		},

		async lint() {
			await require('./scripts/lint')();
		},

		'lint:fix': async function lintFix() {
			await require('./scripts/lint')({fix: true});
		},

		/**
		 * Only errors are reported. Warnings are ignored.
		 */
		'lint:quiet': async function lintQuiet() {
			await require('./scripts/lint')({quiet: true});
		},
	};

	const COMMANDS = {
		...PUBLIC_COMMANDS,
		...PRIVATE_COMMANDS,
	};

	if (COMMANDS[type]) {
		await COMMANDS[type]();
	}
	else {
		const commands = Object.keys(PUBLIC_COMMANDS).join(', ');

		throw new Error(
			`liferay-npm-scripts requires a valid command (${commands})`
		);
	}
};
