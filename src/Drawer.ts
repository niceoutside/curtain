interface DrawerOptions {
  yOffset: number;
  radius: number;
  delay: number;
}

const defaultDrawerOptions: DrawerOptions = {
  yOffset: 1,
  radius: 2,
  delay: 1,
};

export class Drawer {
  private fillNode = document.createElement("div");

  constructor(
    private node: HTMLElement,
    private options = defaultDrawerOptions
  ) {
    this.node = node;
    this.node.style.position = "relative";
  }

  draw() {
    const oWidth = this.node.clientWidth;
    const oHeight = this.node.clientHeight;
    const curveWidth = oHeight * 0.5;

    const topLeft = { x: -curveWidth, y: 0 };
    const topRight = { x: oWidth + curveWidth, y: 0 };
    const bottomRight = { x: topRight.x, y: oHeight };
    const bottomLeft = { x: topLeft.x, y: oHeight };
    const curvePoint = { x: topRight.x * 0.5, y: bottomRight.y * 0.5 };

    this.fillNode.style.overflow = "hidden";
    this.fillNode.style.width = `${oWidth}px`;
    // this.fillNode.style.height = getComputedStyle(this.node).height * 0.5;
    this.fillNode.style.height = `${oHeight}px`;
    this.fillNode.style.top = "0px";
    this.fillNode.style.backgroundColor = "red";
    this.fillNode.style.clipPath = `path('M ${topLeft.x} ${topLeft.y} L ${topRight.x} ${topRight.y} L ${bottomRight.x} ${bottomRight.y} C ${bottomRight.x} ${bottomRight.y} ${curvePoint.x} ${curvePoint.y} ${bottomLeft.x} ${bottomLeft.y}')`;

    this.node.prepend(this.fillNode);
  }

  handleScroll = () => {
    // const rect = this.node.getBoundingClientRect();
    // const bottom = Math.max(0, rect.top);
    // this.fillNode.style.height = `${bottom * this.options.yOffset}px`;
  };
}
