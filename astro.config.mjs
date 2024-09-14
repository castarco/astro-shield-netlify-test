/*
 * SPDX-FileCopyrightText: 2024 KindSpells Labs S.L.
 *
 * SPDX-License-Identifier: MIT
 */

import { resolve } from 'node:path'

// import { shield } from '@kindspells/astro-shield'
import { defineConfig } from 'astro/config'

/**
 * @typedef {{ -readonly [key in keyof T]: T[key] }} Mutable<T>
 * @template {any} T
 */

const rootDir = new URL('.', import.meta.url).pathname
const hashesModule = resolve(rootDir, 'src', 'generated', 'sri.mjs')

// https://astro.build/config
export default defineConfig({
	output: 'static',
	trailingSlash: 'always',
	// integrations: [
	// 	shield({
	// 		sri: {
	// 			enableStatic: true,
	// 			enableMiddleware: false,
	// 			hashesModule,
	// 		},
	// 	}),
	// ],
})
