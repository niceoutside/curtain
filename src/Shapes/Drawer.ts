import { defaultDrawerOptions, getDrawable } from '../utils/drawer';
import { applyStyleOnTop } from '../utils/style';
import { Drawable, DrawableType, DrawerOptions } from './Shapes.interfaces';

export class Drawer {
	private curtainNode: HTMLElement;
	private drawable: Drawable;
	private options: DrawerOptions = defaultDrawerOptions;

	private constructor(
		private revealNode: HTMLElement,
		type: DrawableType,
		options: Partial<DrawerOptions> = {}
	) {
		this.options = { ...this.options, ...options };
		this.curtainNode = document.createElement('div');
		this.drawable = getDrawable(type);

		this.initializeCurtainNode();
	}

	private initializeCurtainNode = () => {
		this.curtainNode.style.position = 'absolute';
		this.curtainNode.style.top = '0px';
		this.curtainNode.style.left = '0px';
		this.curtainNode.style.right = '0px';
		this.curtainNode.style.overflow = 'hidden';
		this.curtainNode.style.width = `${this.revealNode.clientWidth}px`;
		this.curtainNode.style.height = `${this.revealNode.clientHeight}px`;
		this.curtainNode.style.backgroundColor = 'red';

		this.revealNode.style.position = 'relative';
		this.revealNode.prepend(this.curtainNode);
		this.draw(this.revealNode.clientWidth, this.revealNode.clientHeight);
	};

	static forNode(
		node: HTMLElement,
		type: DrawableType,
		options: Partial<DrawerOptions> = {}
	): Drawer {
		return new Drawer(node, type, options);
	}

	setType = (type: DrawableType) => {
		this.drawable = getDrawable(type);

		return this.update();
	};

	private draw = (width: number, height: number) => {
		const drawableStyle = this.drawable.getNodeStyle(width, height);

		applyStyleOnTop(this.curtainNode, drawableStyle);
	};

	update = (): Drawer => {
		const rect = this.revealNode.getBoundingClientRect();
		const offsetTop = rect.top + rect.height * this.options.yOffset;
		this.draw(rect.width, offsetTop);

		return this;
	};
}
