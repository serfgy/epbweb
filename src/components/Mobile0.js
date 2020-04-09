import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom';
import '../index.css';
import constants from './constants/constants';
import { AntDesign } from 'react-web-vector-icons';

class Mobile0 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        console.log('render mobile0');

        return (
            <div style={styles.mobile0}>
                <div style={styles.title}>Contact us today to find out how we can help your business!</div>
                <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>
                    <div style={styles.button}>
                        REQUEST A DEMO
                    </div>
                </Link>
            </div>
        )
    }
}

const styles = ({
    mobile0: {
        width: '100%',
        maxWidth: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'green',
        height: 400,
    },
    title: {
        fontFamily: 'raleway-bold',
        fontSize: 24,
        margin: '0 20px 20px 20px',
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
    },
});

export default Mobile0;
