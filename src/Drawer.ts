interface DrawerOptions {
  yOffset: number;
  radius: number;
  delay: number;
}

const defaultDrawerOptions: DrawerOptions = {
  yOffset: 0.5,
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
    const radiusPx = window.innerWidth * this.options.radius;

    this.fillNode.style.position = "absolute";
    this.fillNode.style.overflow = "hidden";
    this.fillNode.style.width = `${radiusPx}px`;
    this.fillNode.style.height = "0px";
    this.fillNode.style.bottom = "0px";
    this.fillNode.style.backgroundColor = "cornflowerblue";
    this.fillNode.style.borderTopLeftRadius = `${radiusPx}px`;
    this.fillNode.style.borderTopRightRadius = `${radiusPx}px`;

    this.node.appendChild(this.fillNode);
  }

  handleScroll = () => {
    const rect = this.node.getBoundingClientRect();
    const whateverTop = rect.height - rect.top;
    const offsetPx = this.options.yOffset * rect.height;

    this.fillNode.style.height = `${whateverTop + offsetPx}px`;
  };
}
