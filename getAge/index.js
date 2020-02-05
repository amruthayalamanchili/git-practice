class App extends React.Component {
	render() {
		return (
			<div>
				<Hello />
				<Messages />
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById('root'));
