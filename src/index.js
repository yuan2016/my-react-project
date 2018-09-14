import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './Page';
import registerServiceWorker from './registerServiceWorker';

const render = Component => {   // 增加react-hot-loader保持状态刷新操作，如果不需要可去掉并把下面注释的打开
    ReactDOM.render(
        <Component />,
        document.getElementById('root')
    );
};

render(Page);
registerServiceWorker();
