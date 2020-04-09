import React, { Component } from 'react';
import '../index.css';
import constants from './constants/constants';
import { AntDesign } from 'react-web-vector-icons';
import Header from './Header';
import Mobile0 from './Mobile0';
import Mobile1 from './Mobile1';
import Mobile4 from './Mobile4';
import Footer from './Footer';

class Mobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        console.log('render mobile');

        return (
            <div style={styles.mobile}>
                <Header />
                <Mobile1 />
                <Mobile4 />
                <Mobile0 />
                <Footer />
            </div>
        )
    }
}

const styles = ({
    mobile: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        overflow: 'hidden',
    },
});

export default Mobile;
