import React, { Component } from 'react';
import {
    Link, Redirect
} from 'react-router-dom';
import '../index.css';
import constants from './constants/constants';
import { AntDesign } from 'react-web-vector-icons';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
        };
    }

    componentDidMount() {
    }

    toggleMenuDisplay() {
        const { menu } = this.state;
        if (menu) {
            this.setState({
                menu: false,
            })
        } else {
            this.setState({
                menu: true,
            })
        }
    }

    render() {
        const { menu } = this.state;
        console.log('render header');

        return (
            <div style={styles.header}>
                {
                    menu &&
                    <div style={styles.headerMobileMenu}>
                        <Link to="/mobile" style={{ textDecoration: 'none', color: 'black' }}>
                            <div style={styles.headerMobileMenuSelection}>
                                epbMOBILE
                            </div>
                        </Link>
                        <Link to="/bistro" style={{ textDecoration: 'none', color: 'black' }}>
                            <div style={styles.headerMobileMenuSelection}>
                                bistroPOS
                            </div>
                        </Link>
                        <Link to="/downloads" style={{ textDecoration: 'none', color: 'black' }}>
                            <div style={styles.headerMobileMenuSelection}>
                                Downloads
                            </div>
                        </Link>
                        <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>
                            <div style={styles.headerMobileMenuSelection}>
                                Contact
                            </div>
                        </Link>
                    </div>
                }
                <div style={styles.logo}><Link to='/' style={{ textDecoration: 'none', color: 'black' }}>epb</Link></div>
                <div style={styles.headerTitles}>
                    {/* <div style={styles.headerTitle} className='header-col'>
                        <Link to="/system" style={{ textDecoration: 'none', color: 'black' }}>epbOS</Link>
                    </div> */}
                    <div style={styles.headerTitle} className='header-col'>
                        <Link to="/mobile" style={{ textDecoration: 'none', color: 'black' }}>epbMOBILE</Link>
                    </div>
                    <div style={styles.headerTitle} className='header-col'>
                        <Link to="/bistro" style={{ textDecoration: 'none', color: 'black' }}>bistroPOS</Link>
                    </div>
                    <div style={styles.headerTitle} className='header-col'>
                        <Link to="/downloads" style={{ textDecoration: 'none', color: 'black' }}>Downloads</Link>
                    </div>
                    <div style={styles.headerTitle} className='header-col'>
                        <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link>
                    </div>
                    <div style={styles.headerMobileMenuIcon} className='header-mobile-menu'
                        onClick={() => this.toggleMenuDisplay()}>
                        <div style={{ width: 24, height: 4, borderRadius: 2, backgroundColor: 'black',  }}></div>
                        <div style={{ width: 24, height: 4, borderRadius: 2, backgroundColor: 'black', margin: '4px 0 4px 0' }}></div>
                        <div style={{ width: 24, height: 4, borderRadius: 2, backgroundColor: 'black',}}></div>
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
        position: 'relative',
        // backgroundColor: 'blue'
    },
    headerMobileMenu: {
        padding: '10px 0 10px 0',
        position: 'absolute',
        width: 160,
        borderRadius: 10,
        backgroundColor: 'white',
        right: 10,
        bottom: -240,
        boxShadow: '0px 0px 15px 5px #D1D1D6',
    },
    headerMobileMenuSelection: {
        margin: '0 20px 0 0',
        fontFamily: 'raleway-bold',
        fontSize: 16,
        color: constants.grey3,
        textAlign: 'right',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    logo: {
        fontFamily: 'velocity',
        fontSize: 24,
        margin: '5px 0 0 20px',
        // backgroundColor:'red'
    },
    headerTitles: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // backgroundColor: 'orange'
    },
    headerTitle: {
        margin: '0 20px 0 40px',
        fontFamily: 'raleway-bold',
        fontSize: 16,
        color: constants.grey3,
        justifyContent: 'flex-end'
    },
    headerMobileMenuIcon: {
        // backgroundColor: 'blue',
        height: 64,
        width: 64,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Header;
