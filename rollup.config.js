import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { dependencies, peerDependencies } from './package.json';

const external = [...Object.keys(dependencies || {}), ...Object.keys(peerDependencies || {})];

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
	input: {
		main: 'src/index.ts',
		pole: 'src/CurtainPole.ts',
		curtain: 'src/Curtain.ts',
		utils_style: 'src/utils/style.ts',
		utils_drawer: 'src/utils/drawer.ts',
		drawer: 'src/drawer/Drawer.ts',
		drawable: 'src/drawer/Drawable.ts',
		shapes_circle: 'src/shapes/Circle.ts'
	},
	output: [
		{
			dir: 'dist/esm',
			format: 'es',
			sourcemap: true
		},
		{
			dir: 'dist/cjs',
			format: 'cjs',
			sourcemap: true
		}
	],
	external,
	plugins: [
		resolve({ extensions }),
		commonjs(),
		babel({
			extensions,
			babelHelpers: 'runtime',
			include: ['src/**'],
			sourceMaps: true,
			compact: true,
			minified: true,
			comments: false
		}),
		terser()
	]
};
