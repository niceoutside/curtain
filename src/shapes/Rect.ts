import { Drawable } from '../drawer/Drawable';

export class Rect extends Drawable {
	getNodeStyle = (
		_width: number,
		_height: number,
		offsetTop: number
	): Partial<CSSStyleDeclaration> => {
		return {
			height: `${offsetTop}px`,
			width: '100%',
			backgroundColor: this.color
		};
	};
}
