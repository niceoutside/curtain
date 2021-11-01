import { Drawer } from './Shapes/Drawer';
import { DrawableType } from './Shapes/Shapes.interfaces';

export class Curtain {
	private drawer: Drawer;

	private constructor(public node: HTMLElement, type: DrawableType) {
		this.node = node;
		this.drawer = Drawer.forNode(node, type, { yOffset: 0.5 });
	}

	static hang(curtain: HTMLElement, type: DrawableType) {
		return new Curtain(curtain, type);
	}

	update = () => {
		this.drawer.update();
	};
}
