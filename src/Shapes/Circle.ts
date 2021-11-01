import { Drawable } from './Shapes.interfaces';

export class Circle extends Drawable {
	getNodeStyle = (nodeWidth: number, nodeHeight: number) => {
		const curveWidth = nodeHeight * 0.5;

		const topLeft = { x: -curveWidth, y: 0 };
		const topRight = { x: nodeWidth + curveWidth, y: 0 };
		const bottomRight = { x: topRight.x, y: nodeHeight };
		const bottomLeft = { x: topLeft.x, y: nodeHeight };
		const curvePoint = { x: topRight.x * 0.5, y: bottomRight.y * 0.5 };

		const style: Partial<CSSStyleDeclaration> = {
			height: `${nodeHeight}px`,
			top: '0px',
			backgroundColor: 'red',
			clipPath: `path('M ${topLeft.x} ${topLeft.y} L ${topRight.x} ${topRight.y} L ${bottomRight.x} ${bottomRight.y} C ${bottomRight.x} ${bottomRight.y} ${curvePoint.x} ${curvePoint.y} ${bottomLeft.x} ${bottomLeft.y}')`
		};

		return style;
	};
}
