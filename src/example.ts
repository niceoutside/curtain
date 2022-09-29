import { CurtainPole } from './CurtainPole';

const curtain = document.getElementById('curtain');

const pole = new CurtainPole();

if (curtain) {
	pole.hang(curtain, {
		type: 'rect',
		color: 'green',
		yOffset: 0,
		anchors: { top: '-1px' }
	});
}
