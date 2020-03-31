import React, { Component } from 'react';
import {
    Link,
  } from 'react-router-dom';
import '../index.css';
import constants from './constants/constants';
import { AntDesign } from 'react-web-vector-icons';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        console.log('render header');

        return (
            <div style={styles.header}>
                <div style={styles.logo}><Link to='/' style={{ textDecoration: 'none', color: 'black' }}>epb</Link></div>
                <div style={styles.headerTitles}>
                    <div style={styles.headerTitle} className='header-col'>
                        <Link to="/system" style={{ textDecoration: 'none', color: 'black' }}>epbOS</Link>
                    </div>
                    <div style={styles.headerTitle} className='header-col'>
                        <Link to="/mobile" style={{ textDecoration: 'none', color: 'black' }}>epbMOBILE</Link>
                    </div>
                    <div style={styles.headerTitle} className='header-col'>
                        <Link to="/bistro" style={{ textDecoration: 'none', color: 'black' }}>bistroPOS</Link>
                    </div>
                    <div style={styles.headerTitle} className='header-col'>
                        <Link to="/download" style={{ textDecoration: 'none', color: 'black' }}>Download</Link>
                    </div>
                    <div style={styles.headerTitle} className='header-col'>
                        <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = ({
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
        fontSize: 24,
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
        margin: '0 20px 0 40px',
        fontFamily: 'raleway-bold',
        fontSize: 16,
        color: constants.grey3,
        justifyContent:'flex-end'
    }
});

export default Header;
