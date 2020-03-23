import React, { Component } from 'react';
import '../index.css';
import constants from './constants/constants';
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
                <div style={styles.slogan}>The Operating System</div>
                <div style={styles.slogan}>for your business.</div>
                <div style={styles.afterSlogan}>Introducing <b>epbOS</b>&reg;, state of the art integrated software solutions
                to take your business to the next level.</div>
                <div style={styles.buttonsContainer}>
                    <div style={styles.button}>REQUEST A DEMO</div>
                    <div style={styles.buttonReverse}>OUR SOLUTIONS</div>
                </div>
            </div>
        )
    }
}

const styles = ({
    home1: {
        width: '100%',
        maxWidth: 1000,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    slogan: {
        fontFamily: 'raleway-bold',
        fontSize: 64,
        margin: '0 0 0 20px',
    },
    afterSlogan: {
        fontFamily: 'lato-regular',
        color: constants.fjord,
        fontSize: 16,
        letterSpacing: 0.5,
        marginTop: 20,
        maxWidth: 500,
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

export default Home1;
