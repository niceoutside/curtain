import { defaultDrawerOptions, getDrawable } from '../utils/drawer';
import { applyStyleOnTop } from '../utils/style';
import { Drawable, DrawableType } from './Drawable';
import { DrawerOptions } from './types';

export class Drawer {
	private curtainNode: HTMLElement;
	private drawable: Drawable | null = null;
	private options: DrawerOptions;

	private async setDrawable(type: DrawableType, color?: CSSStyleDeclaration['color']) {
		this.drawable = await getDrawable(type);

		if (color) {
			this.drawable.color = color;
		}
	}

	private async init(type: DrawableType, color?: CSSStyleDeclaration['color']) {
		await this.setDrawable(type, color);
		this.initializeCurtainNode();
	}

	private constructor(
		private revealNode: HTMLElement,
		type: DrawableType,
		options: Partial<DrawerOptions> = {}
	) {
		this.options = { ...defaultDrawerOptions, ...options };
		this.curtainNode = document.createElement('div');

		this.init(type, options.color);
	}

	private initializeCurtainNode = () => {
		this.curtainNode.style.overflow = 'hidden';
		this.curtainNode.style.position = 'absolute';
		this.curtainNode.style.zIndex = this.options.zIndex;
		this.curtainNode.style.top = this.options.anchors.top || '0';
		this.curtainNode.style.left = this.options.anchors.left || '0';
		this.curtainNode.style.right = this.options.anchors.right || '0';
		this.curtainNode.style.bottom = this.options.anchors.bottom || '0';
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

	setType = async (type: DrawableType) => {
		this.drawable = await getDrawable(type);

		return this.update();
	};

	getDrawable = async () => this.drawable;

	private draw = (width: number, height: number, offsetTop: number) => {
		if (!this.drawable) {
			throw new Error('Drawable not set correctly.');
		}

		const drawableStyle = this.drawable.getNodeStyle(width, height, offsetTop);

		applyStyleOnTop(this.curtainNode, drawableStyle);
	};

	update = (): Drawer => {
		requestAnimationFrame(() => {
			const rect = this.revealNode.getBoundingClientRect();
			const offsetTop =
				rect.top + rect.height * this.options.yOffset * (1 - this.options.endOffset);

			this.draw(rect.width, rect.height, offsetTop);
		});

		return this;
	};

	destroy = () => {
		this.curtainNode.remove();
	};
}
