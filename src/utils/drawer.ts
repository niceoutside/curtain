import { Drawable, DrawableType } from '../drawer/Drawable';
import { DrawerOptions } from '../drawer/types';

type DrawableImplementation = { new (): Drawable } & typeof Drawable;

const drawableImport: Record<DrawableType, () => Promise<DrawableImplementation>> = {
	circle: async () => (await import('../shapes/Circle')).Circle,
	rect: async () => (await import('../shapes/Rect')).Rect
};

export const defaultDrawerOptions: DrawerOptions = {
	yOffset: 0,
	color: 'black',
	zIndex: '30',
	anchors: {
		top: '0',
		left: '0',
		right: '0',
		bottom: '0'
	}
};

export async function getDrawable(type: DrawableType) {
	const drawable = await drawableImport[type]();
	if (!drawable) {
		throw new Error(`No drawable found for type ${type}`);
	}

	return new drawable();
}
