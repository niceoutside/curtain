export type DrawableType = 'circle';

export interface Drawable {
	getNodeStyle: (nodeWidth: number, nodeHeight: number) => Partial<CSSStyleDeclaration>;
}
