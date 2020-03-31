import React, { Component } from 'react';
import '../index.css';
import constants from './constants/constants';
import { AntDesign } from 'react-web-vector-icons';
import Header from './Header';
import Bistro1 from './Bistro1';
import Footer from './Footer';

class Bistro extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        console.log('render bistro');

        return (
            <div style={styles.bistro}>
                <Header />
                <Bistro1 />
                <Footer />
            </div>
        )
    }
}

const styles = ({
    bistro: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
    },
});

export default Bistro;
