import { defaultDrawerOptions, getDrawable } from '../utils/drawer';
import { applyStyleOnTop } from '../utils/style';
import { Drawable, DrawableType } from './Drawable';
import { DrawerOptions } from './types';

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

		if (this.options.color) {
			this.drawable.color = this.options.color;
		}

		this.initializeCurtainNode();
	}

	private initializeCurtainNode = () => {
		this.curtainNode.style.zIndex = '30';
		this.curtainNode.style.position = 'absolute';
		this.curtainNode.style.top = this.options.anchors.top || '0';
		this.curtainNode.style.left = this.options.anchors.left || '0';
		this.curtainNode.style.right = this.options.anchors.right || '0';
		this.curtainNode.style.bottom = this.options.anchors.bottom || '0';
		this.curtainNode.style.overflow = 'hidden';
		this.curtainNode.style.width = `${this.revealNode.clientWidth}px`;
		this.curtainNode.style.height = `${this.revealNode.clientHeight}px`;

		this.revealNode.style.position = 'relative';
		this.revealNode.prepend(this.curtainNode);

		this.update();
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

	getDrawable = (): Drawable => this.drawable;

	private draw = (width: number, height: number, offsetTop: number) => {
		const drawableStyle = this.drawable.getNodeStyle(width, height, offsetTop);

		applyStyleOnTop(this.curtainNode, drawableStyle);
	};

	update = (): Drawer => {
		requestAnimationFrame(() => {
			const rect = this.revealNode.getBoundingClientRect();
			const offsetTop = rect.top + rect.height * this.options.yOffset;

			this.draw(rect.width, rect.height, offsetTop);
		});

		return this;
	};

	destroy = () => {
		this.curtainNode.remove();
	};
}
