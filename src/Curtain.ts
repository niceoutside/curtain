import { Drawer } from './Shapes/Drawer';

export class Curtain {
	private fillNode = document.createElement('div');
	private drawer: Drawer;

	private constructor(public node: HTMLElement) {
		this.node = node;
		this.node.style.position = 'relative';
		this.drawer = Drawer.forNode(node);
	}

	static hang(curtain: HTMLElement) {
		return new Curtain(curtain);
	}

	takeDown = () => {
		this.fillNode?.remove();
	};

	update = () => {
		this.drawer.ofType('circle').update();
	};
}
