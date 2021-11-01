export type DrawableType = 'circle';

export abstract class Drawable {
	public color: CSSStyleDeclaration['color'] = 'black';

	abstract getNodeStyle: (
		nodeWidth: number,
		nodeHeight: number,
		offsetTop: number
	) => Partial<CSSStyleDeclaration>;
}
