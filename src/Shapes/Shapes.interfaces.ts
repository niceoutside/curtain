export type DrawableType = 'circle';

export abstract class Drawable {
	abstract getNodeStyle: (nodeWidth: number, nodeHeight: number) => Partial<CSSStyleDeclaration>;
}

export interface DrawerOptions {
	yOffset: number;
}
