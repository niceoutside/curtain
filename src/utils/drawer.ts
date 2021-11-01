import { Circle } from '../Shapes/Circle';
import { Drawable, DrawableType, DrawerOptions } from '../Shapes/Shapes.interfaces';

type DrawableImplementation = { new (): Drawable } & typeof Drawable;

const drawableMap: Record<DrawableType, DrawableImplementation> = {
	circle: Circle
};

export const defaultDrawerOptions: DrawerOptions = {
	yOffset: 0
};

export function getDrawable(type: DrawableType) {
	const drawable = drawableMap[type];
	if (!drawable) {
		throw new Error(`No drawable found for type ${type}`);
	}

	return new drawable();
}
