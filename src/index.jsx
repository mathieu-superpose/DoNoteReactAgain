import './App.scss';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from 'components/MarkdownInput'

const App = () => {
	const [title, setTitle] = useState('');
	const [note, setNote] = useState('');

	return (
	    <div className='App'>
			<header>
				<h1>Do Note React Again</h1>
			</header>
			<MarkdownInput setTitle={setTitle} setNote={setNote} />
	    </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));