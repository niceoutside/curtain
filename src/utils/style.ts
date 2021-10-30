export const applyStyleOnTop = (node: HTMLElement, style: Partial<CSSStyleDeclaration>): void => {
	for (const prop in style) {
		const styleValue = style[prop];

		if (styleValue) {
			node.style[prop] = styleValue;
		}
	}
};
