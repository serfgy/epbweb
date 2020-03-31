import React, { Component } from 'react';
import '../index.css';
import constants from './constants/constants';
import { AntDesign } from 'react-web-vector-icons';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        console.log('render footer');

        return (
            <div style={styles.footer}>
                <div style={styles.footerColumnWrapper}>
                    <div style={styles.footerColumn} className='footer-col'>
                        <div style={{ flex: 1 }}>
                            <div style={styles.footerTitle}>Products</div>
                            <div style={styles.footerSubtitle}>epbOS</div>
                            <div style={styles.footerSubtitle}>epbMOBILE</div>
                            <div style={styles.footerSubtitle}>bistroPOS</div>
                            <div style={styles.footerSubtitle}>Integrations</div>
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={styles.footerTitle}>Developers</div>
                            <div style={styles.footerSubtitle}>Docs</div>
                            <div style={styles.footerSubtitle}>API</div>
                            <div style={styles.footerSubtitle}>Downloads</div>
                        </div>
                    </div>
                    <div style={styles.footerColumn} className='footer-col'>
                        <div style={{ flex: 1 }}>
                            <div style={styles.footerTitle}>Enterprise</div>
                            <div style={styles.footerSubtitle}>Why EPB?</div>
                            <div style={styles.footerSubtitle}>Solutions</div>
                            <div style={styles.footerSubtitle}>Customers</div>
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={styles.footerTitle}>Resources</div>
                            <div style={styles.footerSubtitle}>Support</div>
                            <div style={styles.footerSubtitle}>Trusted Partners</div>
                            <div style={styles.footerSubtitle}>Advisory Services</div>
                        </div>
                    </div>
                    <div style={styles.footerColumn} className='footer-col'>
                        <div style={{ flex: 1 }}>
                            <div style={styles.footerTitle}>Company</div>
                            <div style={styles.footerSubtitle}>About</div>
                            <div style={styles.footerSubtitle}>Team</div>
                            <div style={styles.footerSubtitle}>Jobs</div>
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={styles.footerTitle}>Contact</div>
                            <div style={styles.footerSubtitle}>Contact Sales</div>
                            <div style={styles.footerSubtitle}>Contact Us</div>
                            <div style={styles.footerSubtitle}>Github</div>
                            <div style={styles.footerSubtitle}>Youtube</div>
                            <div style={styles.footerSubtitle}>Twitter</div>
                        </div>
                    </div>
                </div>
                <div style={styles.footerEmail}></div>
                <div style={styles.footerCopyright}>
                    <div style={{ fontFamily: 'lato-regular', fontSize: 12, margin: '0 0 0 10px' }}>©2020&ensp;Enterprise Browser</div>
                    <div>
                        <AntDesign style={styles.footerIcon} name='github' size={16} color='#DADEE0' />
                        <AntDesign style={styles.footerIcon} name='youtube' size={16} color='#DADEE0' />
                        <AntDesign style={styles.footerIcon} name='twitter' size={16} color='#DADEE0' />
                        <AntDesign style={styles.footerIcon} name='facebook-square' size={16} color='#DADEE0' />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = ({
    footer: {
        width: '100%',
        maxWidth: 1000,
    },
    footerColumnWrapper: {
        width: '100%',
    },
    footerEmail: {
        float: 'left',
        width: '100%',
        height: 120,
    },
    footerCopyright: {
        float: 'left',
        width: '100%',
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    footerColumn: {
        margin: '20px 0 20px 0',
        display: 'flex',
        flexDirection: 'row',
    },
    footerTitle: {
        fontFamily: 'raleway-bold',
        fontSize: 16,
        color: constants.grey1,
        margin: '0 0 0 20px',
    },
    footerSubtitle: {
        fontFamily: 'lato-regular',
        fontSize: 15,
        margin: '20px 0 0 20px',
        color: '#6A8294',
    },
    footerIcon: {
        float: 'right',
        margin: '0 10px 0 10px',
    },
});

export default Footer;
