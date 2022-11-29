import "./App.css";

function App() {
	const results = [0, 1];
	for (let i = 2; i <= 25; i++) {
		const a = results[i - 1];
		const b = results[i - 2];

		results.push(a + b);
	}
	return (
		<div className='App'>
			<header className='App-header'>
				<h2> On my way to being a Ninja </h2>
				<h4>Fibonacci Sequence to the nth value</h4>
				{results.map((result, index) => (
					<li>{result}</li>
				))}
			</header>
		</div>
	);
}

export default App;
