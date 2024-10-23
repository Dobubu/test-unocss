// eslint.config.mjs
import antfu from "@antfu/eslint-config";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default antfu(
	{
		stylistic: {
			indent: "tab",
			quotes: "double",
			semi: true,
		},
		formatters: {
			css: true,
		},
	},
	...compat.config({
		extends: [
			"mischa2919",
		],
	}),
	{
		rules: {
			eqeqeq: "error",
		},
	},
);
