import React, { Component } from 'react';
import '../index.css';
import constants from './constants/constants';
import { AntDesign } from 'react-web-vector-icons';
import Header from './Header';
import System0 from './System0';
import System1 from './System1';
import System4 from './System4';
import Footer from './Footer';

class System extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        console.log('render system');

        return (
            <div style={styles.system}>
                <Header />
                <System1 />
                <System4 />
                <System0 />
                <Footer />
            </div>
        )
    }
}

const styles = ({
    system: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
    },
});

export default System;
