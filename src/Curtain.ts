import { Drawer } from './Shapes/Drawer';
import { DrawableType } from './Shapes/Shapes.interfaces';

export class Curtain {
	private fillNode = document.createElement('div');
	private drawer: Drawer;
	private curtainType: DrawableType = 'circle';

	private constructor(public node: HTMLElement) {
		this.node = node;
		this.node.style.position = 'relative';
		this.drawer = Drawer.forNode(node, { yOffset: 0.5 });
	}

	static hang(curtain: HTMLElement) {
		return new Curtain(curtain);
	}

	takeDown = () => {
		this.fillNode?.remove();
	};

	update = () => {
		this.drawer.ofType(this.curtainType).update();
	};
}
