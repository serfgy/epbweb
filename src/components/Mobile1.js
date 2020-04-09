import React, { Component } from 'react';
import '../index.css';
import constants from './constants/constants';
import mobile1 from './images/mobile1.png';
import mobile2 from './images/mobile2.png';
import mobile3 from './images/mobile3.png';
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
                <div className='body-col-2'>
                    <div style={styles.product} className='mobile-size-1'><span style={styles.product2} className='mobile-size-2'>epb</span><span className='clip-text'>MOBILE</span><span style={styles.product3}>®</span></div>
                    <div style={styles.slogan} className='mobile-size-3'>Be all-knowing.</div>
                    <div style={styles.slogan} className='mobile-size-3'>Be everywhere.</div>
                    <div style={styles.afterSlogan}>Stay in control while on-the-go with a pocket ERP at your fingertips.</div>
                    <div style={styles.buttonsContainer}>
                        <div style={styles.button}>REQUEST A DEMO</div>
                        <div style={styles.buttonReverse}>OUR SOLUTIONS</div>
                    </div>
                </div>
                <div className='body-col-2' style={{ position: 'relative', minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img style={styles.image1} src={mobile1} />
                    <img style={styles.image2} src={mobile2} />
                    <img style={styles.image3} src={mobile3} />
                </div>
            </div>
        )
    }
}

const styles = ({
    mobile1: {
        width: '100%',
        maxWidth: 1000,
        marginBottom: 100,
        overflow: 'hidden',
    },
    product: {
        fontFamily: 'segoeui-light',
    },
    product2: {
        fontFamily: 'velocity',
        margin: '0 0 0 20px',
    },
    product3: {
        fontFamily: 'lato-regular',
        fontSize: 20,
    },
    slogan: {
        fontFamily: 'raleway-bold',
        margin: '0 20px 0 20px',
    },
    afterSlogan: {
        fontFamily: 'lato-regular',
        color: constants.fjord,
        fontSize: 18,
        letterSpacing: 0.5,
        marginTop: 20,
        maxWidth: 1000,
        lineHeight: 1.5,
        margin: '20px 20px 0 20px',
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
    image1: {
        margin: '40px 0 0 0',
        width: '50%',
        filter: 'drop-shadow(0 0 0.75rem rgb(48,219,91))',
    },
    image2: {
        width: '50%',
        position: 'absolute',
        top: 125,
        right: 25,
        filter: 'drop-shadow(0 0 0.75rem rgb(255,212,38))',
        zIndex: -1,
    },
    image3: {
        width: '50%',
        position: 'absolute',
        top: 125,
        left: 25,
        filter: 'drop-shadow(0 0 0.75rem rgb(255,100,130))',
        zIndex: -1,
    },
});

export default Mobile1;
