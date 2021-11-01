import { Curtain } from './Curtain';
import { DrawableType } from './Shapes/Shapes.interfaces';

export interface CurtainPoleOptions {
	scrollContainer?: Document | HTMLElement;
}

export class CurtainPole {
	private curtains: Curtain[] = [];
	private scrollContainer: Document | HTMLElement;
	private observer: IntersectionObserver;
	private scrollHandler: (() => void) | null = null;

	constructor(options: CurtainPoleOptions = {}) {
		const { scrollContainer = document } = options;

		this.scrollContainer = scrollContainer;
		this.observer = new IntersectionObserver(this.checkEntries);
	}

	private checkEntries = (entries: IntersectionObserverEntry[]) => {
		const entry = entries[0];

		if (entry.isIntersecting) {
			this.scrollHandler = this.handleScroll(entry);
			this.scrollContainer.addEventListener('scroll', this.scrollHandler);
		} else if (this.scrollHandler) {
			this.scrollContainer.removeEventListener('scroll', this.scrollHandler);
			this.scrollHandler = null;
		}
	};

	private handleScroll = (entry: IntersectionObserverEntry) => () => {
		const curtain = this.curtains.find((c) => c.node === entry.target);
		if (!curtain) {
			return;
		}

		curtain.update();
	};

	hang = (node: HTMLElement, type: DrawableType = 'circle') => {
		const curtain = this.curtains.find((c) => c.node === node);
		if (curtain) {
			console.warn('Curtain already hanging...');
			return;
		}

		this.curtains.push(Curtain.hang(node, type));
		this.observer.observe(node);
	};
}
