const popmotion = require('popmotion');
const ball = document.querySelector('.ball');

popmotion.animate({
	from: "-50px",
	to: "100px",
	repeat: Infinity,
	repeatType: "mirror",
	type: "spring",
	onUpdate(update) {
		// console.log(update);
		ball.style.right = update;
		ball.style.top = update;
	},
})
