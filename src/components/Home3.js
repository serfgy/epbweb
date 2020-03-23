import React, { Component } from 'react';
import '../index.css';
import constants from './constants/constants';
import { AntDesign } from 'react-web-vector-icons';

class Home3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        console.log('render home3');

        return (
            <div style={styles.home3}>
                <div style={styles.home31}>
                    <div style={styles.home31Slogan}>MADE IN</div>
                    <div style={styles.home31Slogan}><span style={{ color: constants.grey5 }}>SINGAPORE</span></div>
                    <div style={styles.home31Slogan}>FOR EFFICIENCY FOCUSED</div>
                    <div style={styles.home31Slogan}><span style={{ color: constants.grey5 }}>ENTERPRISES</span></div>
                    <div style={styles.home31Text}>
                        Never underestimate the asian way. Our EPB consultants are here to help you realise a system
                        that fits your business so you don't have to.
                    </div>
                </div>
                <div style={styles.home32}></div>
                <div style={styles.home33}>
                    <div style={styles.home33Slogan}><span style={{ color: constants.grey5 }}>Tailored</span> to fit.</div>
                    <div style={styles.home33Slogan}><span style={{ color: constants.grey5 }}>Built</span> to last.</div>
                    <div style={styles.home33Slogan}><span style={{ color: constants.grey5 }}>Engineered</span> to scale.</div>
                    <div style={styles.home33Text}>
                        <span style={{ color: constants.grey5 }}>Choose the</span> system with a human touch. <span style={{ color: constants.grey5 }}>Choose</span> EPB.
                    </div>
                    <div style={styles.button}>CONSULT US NOW</div>
                </div>
            </div>
        )
    }
}

const styles = ({
    home3: {
        width: '100%',
        maxWidth: 1000,
        display: 'flex',
        flexDirection: 'column',
    },
    home31: {
        height: 600,
        // backgroundColor: 'red',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    home32: {
        height: 600,
        // backgroundColor: 'green',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    home33: {
        height: 600,
        // backgroundColor: 'blue',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    home31Slogan: {
        fontFamily: 'raleway-bold',
        fontSize: 48,
        textAlign: 'right',
        margin: '0 20px 0 0',
    },
    home31Text: {
        fontFamily: 'lato-regular',
        fontSize: 18,
        textAlign: 'right',
        margin: '20px 20px 0 0',
        maxWidth: 400,
    },
    home33Slogan: {
        fontFamily: 'raleway-bold',
        fontSize: 42,
        margin: '0 0 0 0',
    },
    home33Text: {
        fontFamily: 'raleway-bold',
        fontSize: 20,
        margin: '20px 0 0 0',
        textAlign: 'center',
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
        margin: '20px 0 0 0',
    },
});

export default Home3;
