export class Curtain {
	private fillNode = document.createElement('div');

	private constructor(public node: HTMLElement) {
		this.node = node;
		this.node.style.position = 'relative';
		this.node.prepend(this.fillNode);

		this.fillNode.style.position = 'absolute';
		this.fillNode.style.top = '0px';
		this.fillNode.style.left = '0px';
		this.fillNode.style.right = '0px';
		this.fillNode.style.overflow = 'hidden';
		this.fillNode.style.width = `${this.node.clientWidth}px`;
		this.fillNode.style.height = `${this.node.clientHeight}px`;
		this.fillNode.style.backgroundColor = 'red';
	}

	static hang(curtain: HTMLElement) {
		return new Curtain(curtain);
	}

	takeDown = () => {
		this.fillNode?.remove();
	};

	update = () => {
		const rect = this.node.getBoundingClientRect();
		const top = Math.max(0, rect.top);

		const oHeight = this.node.clientHeight;
		const oWidth = this.node.clientWidth;
		const curveWidth = oHeight * 0.5;

		const topLeft = { x: -curveWidth, y: 0 };
		const topRight = { x: oWidth + curveWidth, y: 0 };
		const bottomRight = { x: topRight.x, y: oHeight };
		const bottomLeft = { x: topLeft.x, y: oHeight };
		const curvePoint = { x: topRight.x * 0.5, y: bottomRight.y * 0.5 };

		// this.fillNode.style.height = `${top}px`;
		this.fillNode.style.height = `${oHeight}px`;
		this.fillNode.style.top = '0px';
		this.fillNode.style.backgroundColor = 'red';
		this.fillNode.style.clipPath = `path('M ${topLeft.x} ${topLeft.y} L ${topRight.x} ${topRight.y} L ${bottomRight.x} ${bottomRight.y} C ${bottomRight.x} ${bottomRight.y} ${curvePoint.x} ${curvePoint.y} ${bottomLeft.x} ${bottomLeft.y}')`;
	};
}
