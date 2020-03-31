import React, { Component } from 'react';
import '../index.css';
import constants from './constants/constants';
import { AntDesign } from 'react-web-vector-icons';

class Mobile1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        console.log('render mobile1');

        return (
            <div style={styles.mobile1}>
                <div style={styles.product}><span style={styles.product2}>epb</span><span className='clip-text'>MOBILE</span><span style={styles.product3}>®</span></div>
                <div style={styles.slogan}>Be all-knowing.</div>
                <div style={styles.slogan}>Be everywhere.</div>
                <div style={styles.afterSlogan}>Stay in control while on-the-go with a pocket ERP at your fingertips.</div>
                <div style={styles.buttonsContainer}>
                    <div style={styles.button}>REQUEST A DEMO</div>
                    <div style={styles.buttonReverse}>OUR SOLUTIONS</div>
                </div>
            </div>
        )
    }
}

const styles = ({
    mobile1: {
        width: '100%',
        maxWidth: 1000,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    product: {
        fontFamily: 'segoeui-light',
        fontSize: 128,
    },
    product2: {
        fontFamily: 'velocity',
        fontSize: 84,
        margin: '0 0 0 20px',
    },
    product3: {
        fontFamily: 'lato-regular',
        fontSize: 20,
        verticalAlign: 84,
    },
    slogan: {
        fontFamily: 'raleway-bold',
        fontSize: 64,
        margin: '0 0 0 20px',
    },
    afterSlogan: {
        fontFamily: 'lato-regular',
        color: constants.fjord,
        fontSize: 18,
        letterSpacing: 0.5,
        marginTop: 20,
        maxWidth: 1000,
        lineHeight: 1.5,
        margin: '20px 0 0 20px',
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        margin: '20px 0 0 20px',
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

export default Mobile1;
