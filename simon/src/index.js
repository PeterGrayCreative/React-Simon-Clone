import React from 'react';
import ReactDOM from 'react-dom';
import LogicContainer from './logiccontainer';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LogicContainer />, document.getElementById('root'));
registerServiceWorker();
