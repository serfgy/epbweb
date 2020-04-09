import React, { Component } from 'react';
import '../index.css';
import constants from './constants/constants';
import bistro1 from './images/bistro1.png';
import bistro2 from './images/bistro2.png';
import { AntDesign } from 'react-web-vector-icons';

class Bistro1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        console.log('render bistro1');

        return (
            <div style={styles.bistro1}>
                <div className='body-col-2'>
                    <div style={styles.product} className='mobile-size-1'><span style={styles.product2} className='mobile-size-2'>bistro</span><span className='clip-text'>POS</span><span style={styles.product3}>®</span></div>
                    <div style={styles.slogan} className='mobile-size-3'>When running</div>
                    <div style={styles.slogan} className='mobile-size-3'>isn't enough.</div>
                    <div style={styles.slogan} className='mobile-size-3'>You have to wing it.</div>
                    <div style={styles.afterSlogan}>Go the <span style={{ color: 'rgb(255,100,130)' }}><b>extra mile</b></span> with our integrated restaurant POS so you can provide the <span style={{ color: 'rgb(255,100,130)' }}><b>best service</b></span> to your customers.</div>
                    <div style={styles.buttonsContainer}>
                        <div style={styles.button}>REQUEST A DEMO</div>
                        <div style={styles.buttonReverse}>OUR SOLUTIONS</div>
                    </div>
                </div>
                <div className='body-col-2' style={{ position: 'relative', minHeight: 400 }}>
                    <img style={styles.image1} src={bistro2} />
                    <img style={styles.image2} src={bistro1} />
                </div>
            </div>
        )
    }
}

const styles = ({
    bistro1: {
        width: '100%',
        maxWidth: 1000,
        marginBottom: 100,
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
        width: '140%',
        position: 'absolute',
        top: 25,
        left: 75,
        filter: 'drop-shadow(0 0 0.75rem rgb(255,212,38))',
    },
    image2: {
        width: '140%',
        position: 'absolute',
        top: 125,
        left: 25,
        filter: 'drop-shadow(0 0 0.75rem rgb(255,100,130))',
        zIndex: 2,
    },
});

export default Bistro1;
