import React, { Component } from 'react';
import '../index.css';
import constants from './constants/constants';
import { AntDesign } from 'react-web-vector-icons';

class Home2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        console.log('render home2');

        return (
            <div style={styles.home2}>
                <div style={styles.home2Left}>
                    <div style={styles.home2Title}>INTEGRATED ERP</div>
                    <div style={styles.home2Subtitle}>One. Ecosystem.</div>
                    <div style={styles.home2Text}>Have a whole suite of apps at your fingertips by onboarding the EPB family. Never again
                    worry about customizations and integrations holding you back.</div>
                </div>
                <div style={styles.home2Right}>
                    <div style={styles.home2Title}>LASTING USER CONFIDENCE</div>
                    <div style={styles.home2Subtitle}>Companion For Growth</div>
                    <div style={styles.home2Text}>Stay ahead of your competitors with an operating system that more than keeps up with changing
                    landscapes and evolving demands so you can focus on running your business.</div>
                </div>
                <div style={styles.home2Left}>
                    <div style={styles.home2Title}>OPEN SOURCE</div>
                    <div style={styles.home2Subtitle}>Proprietary Development</div>
                    <div style={styles.home2Text}>Join us in collaboration efforts to co-develop peripheral systems.
                    Leave a legacy in building efficiency optimizing workflows for your business.</div>
                </div>
            </div>
        )
    }
}

const styles = ({
    home2: {
        width: '100%',
        maxWidth: 1000,
        display: 'flex',
        flexDirection: 'column',
    },
    home2Left: {
        display: 'flex',
        flexDirection: 'column',
        height: 500,
        justifyContent: 'center',
        margin: '0 20px 0 20px',
    },
    home2Right: {
        display: 'flex',
        flexDirection: 'column',
        height: 500,
        justifyContent: 'center',
        alignItems: 'flex-end',
        textAlign: 'right',
        margin: '0 20px 0 20px',
    },
    home2Title: {
        fontFamily: 'eina01-bold',
        color: constants.fjord,
        fontSize: 16,
        letterSpacing: 1,
        marginBottom: 20,
    },
    home2Subtitle: {
        fontFamily: 'raleway-bold',
        fontSize: 48,
    },
    home2Text: {
        fontFamily: 'lato-regular',
        color: constants.fjord,
        fontSize: 16,
        letterSpacing: 0.5,
        marginTop: 20,
        maxWidth: 400,
        lineHeight: 1.5,
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
    },
    button: {
        fontFamily: 'raleway-bold',
        fontSize: 14,
        borderRadius: 5,
        height: 60,
        width: 160,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid black',
        padding: '0 10px 0 10px',
        marginRight: 20,
    },
    buttonReverse: {
        fontFamily: 'raleway-bold',
        fontSize: 14,
        borderRadius: 5,
        height: 60,
        width: 160,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid white',
        padding: '0 10px 0 10px',
        marginRight: 20,
    },
});

export default Home2;
