import { Drawable } from './Shapes.interfaces';

export class Circle extends Drawable {
	getNodeStyle = (width: number, height: number, offsetTop: number) => {
		const aspectRatioFactor = height > width ? width / height : height / width;
		const curveWidth = width * aspectRatioFactor * 0.25;

		const topLeft = { x: -curveWidth, y: 0 };
		const topRight = { x: width + curveWidth, y: 0 };
		const bottomRight = { x: topRight.x, y: offsetTop };
		const bottomLeft = { x: topLeft.x, y: offsetTop };
		const curvePoint = { x: topRight.x * 0.5, y: bottomRight.y * 0.5 };

		const style: Partial<CSSStyleDeclaration> = {
			height: `${offsetTop}px`,
			width: '100%',
			top: '0px',
			backgroundColor: this.color,
			clipPath: `path('M ${topLeft.x} ${topLeft.y} L ${topRight.x} ${topRight.y} L ${bottomRight.x} ${bottomRight.y} C ${bottomRight.x} ${bottomRight.y} ${curvePoint.x} ${curvePoint.y} ${bottomLeft.x} ${bottomLeft.y}')`
		};

		return style;
	};
}
