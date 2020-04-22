import React, { Component } from 'react';
import '../index.css';
import constants from './constants/constants';
import system1 from './images/system1.png';
import { AntDesign } from 'react-web-vector-icons';

class Home1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        console.log('render home1');

        return (
            <div style={styles.home1}>
                <div className='body-col-2'>
                    <div style={styles.product} className='mobile-size-1'><span style={styles.product2} className='mobile-size-2'>epb</span><span className='clip-text'>OS</span><span style={styles.product3}>®</span></div>
                    <div style={styles.slogan} className='mobile-size-3'>The Operating System</div>
                    <div style={styles.slogan} className='mobile-size-3'>for your business.</div>
                    <div style={styles.afterSlogan}>Navigate the evolving landscape confidently with our state of the art integrated ERP.</div>
                    <div style={styles.buttonsContainer}>
                        <div style={styles.button}>CONTACT US NOW</div>
                        <div style={styles.buttonReverse}>OUR SOLUTIONS</div>
                    </div>
                </div>
                <div className='body-col-2' style={{ position: 'relative', minHeight: 400 }}>
                    <img style={styles.image1} src={system1} />
                </div>
            </div>
        )
    }
}

const styles = ({
    home1: {
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
        height: '120%',
        position: 'absolute',
        top: 25,
        left: 25,
        // filter: 'drop-shadow(0 0 0.75rem rgb(255,212,38))',
        boxShadow: '0px 0px 15px 5px rgb(255,212,38)',
        borderRadius: 5,
    },
});

export default Home1;
