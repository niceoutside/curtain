import { Curtain, CurtainOptions } from './Curtain';

export interface CurtainPoleOptions {
	scrollContainer?: Document | HTMLElement;
}

export class CurtainPole {
	private curtains: Curtain[] = [];
	private scrollContainer: Document | HTMLElement;
	private observer: IntersectionObserver;
	private updateHandler: (() => void) | null = null;

	constructor(options: CurtainPoleOptions = {}) {
		const { scrollContainer = document } = options;

		this.scrollContainer = scrollContainer;
		this.observer = new IntersectionObserver(this.checkEntries);
	}

	private checkEntries = (entries: IntersectionObserverEntry[]) => {
		const entry = entries[0];

		if (entry.isIntersecting) {
			this.updateHandler = this.handleUpdate(entry);
			if (this.updateHandler) {
				this.scrollContainer.addEventListener('scroll', this.updateHandler);
				window.addEventListener('resize', this.updateHandler);
			}
		} else if (this.updateHandler) {
			this.scrollContainer.removeEventListener('scroll', this.updateHandler);
			window.removeEventListener('resize', this.updateHandler);
			this.updateHandler = null;
		}
	};

	private handleUpdate = (entry: IntersectionObserverEntry) => {
		const curtain = this.curtains.find((c) => c.node === entry.target);
		if (!curtain) {
			return null;
		}
		return () => curtain.update();
	};

	hang = (node: HTMLElement, options: CurtainOptions = {}) => {
		const curtain = this.curtains.find((c) => c.node === node);
		if (curtain) {
			console.warn('Curtain already hanging...');
			return;
		}

		this.curtains.push(Curtain.hang(node, options));
		this.observer.observe(node);
	};

	takeDown = (node: HTMLElement) => {
		const curtain = this.curtains.find((c) => c.node === node);
		if (!curtain) {
			console.warn('Curtain not hanging...');
			return;
		}

		this.observer.unobserve(node);
		curtain.takeDown();
		this.curtains = this.curtains.filter((c) => c.node !== node);
	};

	destroy = () => {
		this.observer.disconnect();
		this.curtains.forEach((curtain) => curtain.takeDown());
		this.curtains = [];
	};
}
