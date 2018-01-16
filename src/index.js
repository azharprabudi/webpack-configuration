if (module.hot) {
    module.hot.accept();
}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import goku from './assets/images/goku.png';

class Index extends Component {
    render() {
        return (
            <div>
                <div>
                    <h4>halo semua apa kabar lagi apa gaes cius cius ?</h4>
                </div>
                <img src={goku} alt="goku"/>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
