import { CurtainPole } from './CurtainPole';

const curtain = document.getElementById('curtain');

const pole = new CurtainPole();

if (curtain) {
	pole.hang(curtain, { color: 'green', yOffset: 0.5 });
}
