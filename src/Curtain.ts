import { Drawer } from './Shapes/Drawer';
import { DrawableType } from './Shapes/Shapes.interfaces';

export interface CurtainOptions {
	type?: DrawableType;
	color?: string;
}

export class Curtain {
	private drawer: Drawer;

	private constructor(public node: HTMLElement, options: CurtainOptions) {
		const { color, type = 'circle' } = options;

		this.node = node;
		this.drawer = Drawer.forNode(node, type, { yOffset: 0.5, color });
	}

	static hang(curtain: HTMLElement, options: CurtainOptions) {
		return new Curtain(curtain, options);
	}

	update = () => {
		this.drawer.update();
	};
}
