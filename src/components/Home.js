import React, { Component } from 'react';
import '../index.css';
import constants from './constants/constants';
import { AntDesign } from 'react-web-vector-icons';
import Home1 from './Home1';
import Home2 from './Home2';
import Home3 from './Home3';
import Footer from './Footer';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        console.log('render home');

        return (
            <div style={styles.home}>
                <div style={styles.header}>
                    <div style={styles.logo}>epb</div>
                    <div style={styles.headerTitles}>
                        <div style={styles.headerTitle} className='header-col'>Enterprise</div>
                        <div style={styles.headerTitle} className='header-col'>Downloads</div>
                        <div style={styles.headerTitle} className='header-col'>Contact</div>
                    </div>
                </div>
                <Home1 />
                <Home2 />
                <Home3 />
                <Footer />
            </div>
        )
    }
}

const styles = ({
    home: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        maxWidth: 1000,
        display: 'flex',
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        fontFamily: 'velocity',
        fontSize: 48,
        margin: '0 0 0 20px',
    },
    headerTitles: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    headerTitle: {
        width: 120,
        margin: '0 20px 0 20px',
        fontFamily: 'raleway-bold',
        fontSize: 16,
        color: constants.grey3,
        textAlign: 'center',
    }
});

export default Home;
