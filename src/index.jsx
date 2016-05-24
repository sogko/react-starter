import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello world!</h1>
				<p>If you see this, you are ready to do some React.</p>
				<p>Take it from here, captain!</p>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#app"));
