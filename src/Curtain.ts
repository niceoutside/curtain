import { DrawableType } from './drawer/Drawable';
import { Drawer } from './drawer/Drawer';

export interface CurtainOptions {
	type?: DrawableType;
	color?: string;
	yOffset?: number;
}

export class Curtain {
	private drawer: Drawer;

	private constructor(public node: HTMLElement, options: CurtainOptions) {
		const { color, type = 'circle', yOffset = 0 } = options;

		this.node = node;
		this.drawer = Drawer.forNode(node, type, { yOffset, color });
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
