import { Drawer } from "./Drawer";

const allRoundRoundNodes = document.getElementsByClassName("roundround");
const observer = new IntersectionObserver(doMagic);

function doMagic(entries: IntersectionObserverEntry[]) {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    // remove handler
    return;
  }

  const drawer = new Drawer(entry.target as HTMLElement);
  document.addEventListener("scroll", drawer.handleScroll);
  drawer.draw();
}

Array.from(allRoundRoundNodes).forEach((roundRoundNode) => {
  observer.observe(roundRoundNode);
});
