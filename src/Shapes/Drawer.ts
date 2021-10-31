import { defaultDrawerOptions, drawableMap } from '../utils/drawer';
import { applyStyleOnTop } from '../utils/style';
import { Drawable, DrawableType, DrawerOptions } from './Shapes.interfaces';

export class Drawer {
	private curtainNode: HTMLElement;
	private drawable: Drawable = drawableMap.circle;
	private options: DrawerOptions = defaultDrawerOptions;

	constructor(private revealNode: HTMLElement, options: Partial<DrawerOptions> = {}) {
		this.options = { ...this.options, ...options };
		this.curtainNode = document.createElement('div');
		this.initializeCurtainNode();
		this.draw(revealNode.clientWidth, revealNode.clientHeight);
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

	static forNode(node: HTMLElement, options: Partial<DrawerOptions> = {}): Drawer {
		return new Drawer(node, options);
	}

	ofType(type: DrawableType): Drawer {
		this.drawable = drawableMap[type];
		return this;
	}

	private draw(width: number, height: number) {
		if (!this.drawable) {
			throw new Error(`Can not draw. Set type first`);
		}

		const drawableStyle = this.drawable.getNodeStyle(width, height);

		applyStyleOnTop(this.curtainNode, drawableStyle);
	}

	update(): Drawer {
		const rect = this.revealNode.getBoundingClientRect();
		const offsetTop = rect.top + rect.height * this.options.yOffset;
		this.draw(rect.width, offsetTop);

		return this;
	}
}
