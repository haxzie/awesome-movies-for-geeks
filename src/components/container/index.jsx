import React from 'react';
import Styles from './styles.module.scss';

const Container = ({ children }) => {

    return (
        <div className={ Styles.container }>
            { children }
        </div>
    )
}

export default Container;