import { DrawableType } from './drawer/Drawable';
import { Drawer } from './drawer/Drawer';
import { DrawerOptions } from './drawer/types';

export interface CurtainOptions {
	type?: DrawableType;
	color?: DrawerOptions['color'];
	yOffset?: DrawerOptions['yOffset'];
	anchors?: DrawerOptions['anchors'];
	zIndex?: DrawerOptions['zIndex'];
}

export class Curtain {
	private drawer: Drawer;

	private constructor(public node: HTMLElement, options: CurtainOptions) {
		const { color, type = 'circle', yOffset = 0, anchors = {}, zIndex = '30' } = options;

		this.node = node;
		this.drawer = Drawer.forNode(node, type, { yOffset, color, anchors, zIndex });
	}

	static hang(curtain: HTMLElement, options: CurtainOptions) {
		return new Curtain(curtain, options);
	}

	update = () => {
		this.drawer.update();
	};

	takeDown = () => {
		this.drawer.destroy();
	};
}
