function getGreeting() {
	var greetings = [ 'Good Morning', 'Good Afternoon', 'Good Evening', 'Good Night' ];
	return greetings[Math.floor(Math.random() * greetings.length)];
}
class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>{getGreeting()} All,</h1>
				<h2>Yeah I got there</h2>
				<h3>Hello.......................</h3>
			</div>
		);
	}
}
