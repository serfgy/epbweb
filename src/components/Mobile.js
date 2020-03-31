import React, { Component } from 'react';
import '../index.css';
import constants from './constants/constants';
import { AntDesign } from 'react-web-vector-icons';
import Header from './Header';
import Mobile1 from './Mobile1';
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
    },
});

export default Mobile;
