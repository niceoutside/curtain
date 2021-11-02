export interface DrawerOptions {
	yOffset: number;
	color: CSSStyleDeclaration['color'];
	anchors: {
		top?: CSSStyleDeclaration['top'];
		left?: CSSStyleDeclaration['left'];
		right?: CSSStyleDeclaration['right'];
		bottom?: CSSStyleDeclaration['bottom'];
	};
}
