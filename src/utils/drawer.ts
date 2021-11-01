import { Circle } from '../shapes/Circle';
import { Drawable, DrawableType } from '../drawer/Drawable';
import { DrawerOptions } from '../drawer/types';

type DrawableImplementation = { new (): Drawable } & typeof Drawable;

const drawableMap: Record<DrawableType, DrawableImplementation> = {
	circle: Circle
};

export const defaultDrawerOptions: DrawerOptions = {
	yOffset: 0,
	color: 'black'
};

export function getDrawable(type: DrawableType) {
	const drawable = drawableMap[type];
	if (!drawable) {
		throw new Error(`No drawable found for type ${type}`);
	}

	return new drawable();
}
