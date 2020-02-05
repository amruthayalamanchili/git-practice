function getAge() {
	return Math.floor(Math.random() * 100) + 1;
}
class Messages extends React.Component {
	render() {
		const age = getAge();
		let msg;
		if (age <= 1) {
			msg = (
				<div>
					<h1>Hello Baby</h1>
					<img src="http://gdj.graphicdesignjunction.com/wp-content/uploads/2012/08/cute-baby-photo-25.jpg" />
				</div>
			);
		} else if (age > 1 && age <= 10) {
			msg = (
				<div>
					<h1>Hey Kiddo</h1>
					<img src="http://blog.fifthroom.com/wp-content/uploads/2017/04/kids-003.jpg" />
				</div>
			);
		} else if (age > 10 && age <= 20) {
			msg = (
				<div>
					<h1>hey yougsters</h1>
					<img src="https://thumbs.dreamstime.com/z/teenage-boys-girls-using-mobile-phones-sitting-home-72883539.jpg" />
				</div>
			);
		} else if (age > 20 && age <= 50) {
			msg = (
				<div>
					<h1>ladies and gentlemen</h1>
					<img src="http://thegraphicsfairy.com/wp-content/uploads/2015/08/Old-World-French-Ladies-Gentlemen-thm-GraphicsFairy.jpg" />
				</div>
			);
		} else if (age > 50 && age <= 100) {
			msg = (
				<div>
					<h1>GrandMas And GrandPas</h1>
					<img src="http://www.thefashionablehousewife.com/wp-content/uploads/2015/10/grandma-grandpa-elderly-couple-seniors.jpg" />
				</div>
			);
		}
		return (
			<div>
				<h1>I am {age} years Old</h1>
				{msg}
			</div>
		);
	}
}
