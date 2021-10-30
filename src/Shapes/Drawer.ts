import { applyStyleOnTop } from '../utils/style';
import { Circle } from './Circle';
import { Drawable, DrawableType } from './Shapes.interfaces';

const drawables: Record<DrawableType, Drawable> = {
	circle: new Circle()
};

export class Drawer {
	private curtainNode: HTMLElement;
	private drawable: Drawable | undefined;

	constructor(private revealNode: HTMLElement) {
		this.curtainNode = document.createElement('div');
		this.initializeCurtainNode();
	}

	initializeCurtainNode() {
		this.curtainNode.style.position = 'absolute';
		this.curtainNode.style.top = '0px';
		this.curtainNode.style.left = '0px';
		this.curtainNode.style.right = '0px';
		this.curtainNode.style.overflow = 'hidden';
		this.curtainNode.style.width = `${this.revealNode.clientWidth}px`;
		this.curtainNode.style.height = `${this.revealNode.clientHeight}px`;
		this.curtainNode.style.backgroundColor = 'red';

		this.revealNode.prepend(this.curtainNode);
	}

	static forNode(node: HTMLElement): Drawer {
		return new Drawer(node);
	}

	ofType(type: DrawableType): Drawer {
		this.drawable = drawables[type];
		return this;
	}

	update(): Drawer {
		if (!this.drawable) {
			throw new Error(`Can not draw. Set type first`);
		}

		const drawableStyle = this.drawable.getNodeStyle(
			this.revealNode.clientWidth,
			this.revealNode.clientHeight
		);

		applyStyleOnTop(this.curtainNode, drawableStyle);

		return this;
	}
}
