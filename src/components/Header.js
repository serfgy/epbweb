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
            mobileMenu: false,
            languageMenu: false,
        };
    }

    componentDidMount() {
    }

    toggleMobileMenuDisplay() {
        const { mobileMenu } = this.state;
        if (mobileMenu) {
            this.setState({
                mobileMenu: false,
            })
        } else {
            this.setState({
                mobileMenu: true,
            })
        }
    }

    toggleLanguageMenuDisplay() {
        const { languageMenu } = this.state;
        if (languageMenu) {
            this.setState({
                languageMenu: false,
            })
        } else {
            this.setState({
                languageMenu: true,
            })
        }
    }

    render() {
        const { languageMenu, mobileMenu } = this.state;
        console.log('render header');

        return (
            <div style={styles.header}>
                {
                    mobileMenu &&
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
                        <a href='https://www.epbrowser.com/install' style={{ textDecoration: 'none', color: 'black' }}>
                            <div style={styles.headerMobileMenuSelection}>
                                Downloads
                            </div>
                        </a>
                        <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>
                            <div style={styles.headerMobileMenuSelection}>
                                Contact
                            </div>
                        </Link>
                        <div style={styles.headerMobileMenuLanguages}>
                            <div style={styles.languageAlt}>EN</div>
                            <div style={styles.language}><b>简</b></div>
                            <div style={styles.language}><b>繁</b></div>
                        </div>
                    </div>
                }
                {
                    languageMenu &&
                    <div style={styles.headerLanguageMenu}>
                        <div style={styles.headerMobileMenuLanguages}>
                            <div style={styles.languageAlt}>EN</div>
                            <div style={styles.language}><b>简</b></div>
                            <div style={styles.language}><b>繁</b></div>
                        </div>
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
                        <a href='https://www.epbrowser.com/install' style={{ textDecoration: 'none', color: 'black' }}>Downloads</a>
                    </div>
                    <div style={styles.headerTitle} className='header-col'>
                        <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link>
                    </div>
                    <div style={styles.headerTitle} className='header-col'
                        onClick={() => this.toggleLanguageMenuDisplay()}>
                        <div style={styles.headerTitleLanguage}>EN</div>
                    </div>
                    <div style={styles.headerMobileMenuIcon} className='header-mobile-menu'
                        onClick={() => this.toggleMobileMenuDisplay()}>
                        <div style={styles.headerMobileMenuIconWrapper}>
                            <div style={{ width: 24, height: 4, borderRadius: 2, backgroundColor: 'black', }}></div>
                            <div style={{ width: 24, height: 4, borderRadius: 2, backgroundColor: 'black', margin: '4px 0 4px 0' }}></div>
                            <div style={{ width: 24, height: 4, borderRadius: 2, backgroundColor: 'black', }}></div>
                        </div>
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
    headerLanguageMenu: {
        padding: '10px 0 10px 0',
        position: 'absolute',
        width: 160,
        borderRadius: 10,
        backgroundColor: 'white',
        right: 10,
        bottom: -60,
        boxShadow: '0px 0px 15px 5px #D1D1D6',
        zIndex: 10,
    },
    headerMobileMenu: {
        padding: '10px 0 10px 0',
        position: 'absolute',
        width: 160,
        borderRadius: 10,
        backgroundColor: 'white',
        right: 10,
        bottom: -300,
        boxShadow: '0px 0px 15px 5px #D1D1D6',
        zIndex: 10,
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
    headerMobileMenuLanguages: {
        margin: '0 20px 0 20px',
        fontFamily: 'raleway-bold',
        fontSize: 16,
        color: constants.grey3,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-between',
    },
    language: {
        width: 36,
        height: 36,
        margin: '2px 2px 2px 2px',
        backgroundColor: 'white',
        color: constants.grey5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    languageAlt: {
        width: 36,
        height: 36,
        margin: '2px 2px 2px 2px',
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
    headerTitleLanguage: {
        color: constants.grey5
    },
    headerMobileMenuIcon: {
        // backgroundColor: 'blue',
        height: 64,
        width: 64,
    },
    headerMobileMenuIconWrapper: {
        height: 64,
        width: 64,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Header;
