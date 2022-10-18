import { CurtainPole } from './CurtainPole';

const curtain = document.getElementById('curtain');

const pole = new CurtainPole();

if (curtain) {
	pole.hang(curtain, {
		type: 'rect',
		color: 'green',
		yOffset: 0.25,
		endOffset: 1.25,
		anchors: { top: '-1px' }
	});
}
