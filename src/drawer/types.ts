export interface DrawerOptions {
	yOffset: number;
	endOffset: number;
	color: CSSStyleDeclaration['color'];
	zIndex: CSSStyleDeclaration['zIndex'];
	anchors: {
		top?: CSSStyleDeclaration['top'];
		left?: CSSStyleDeclaration['left'];
		right?: CSSStyleDeclaration['right'];
		bottom?: CSSStyleDeclaration['bottom'];
	};
}
