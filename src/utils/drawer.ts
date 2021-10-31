import { Circle } from '../Shapes/Circle';
import { Drawable, DrawableType, DrawerOptions } from '../Shapes/Shapes.interfaces';

export const drawableMap: Record<DrawableType, Drawable> = {
	circle: new Circle()
};

export const defaultDrawerOptions: DrawerOptions = {
	yOffset: 0
};
