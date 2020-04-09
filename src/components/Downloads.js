import React, { Component } from 'react';
import '../index.css';
import constants from './constants/constants';
import { AntDesign } from 'react-web-vector-icons';
import Header from './Header';
import Footer from './Footer';

class Downloads extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        console.log('render downloads');

        return (
            <div style={styles.downloads}>
                <Header />
                <div style={styles.downloads0}>
                    <div style={styles.title}>epbMOBILE</div>
                    <div style={styles.subtitle}>iOS</div>
                    <div style={styles.text}>1.10.2</div>
                    <div style={styles.text}>1.9.2</div>
                    <div style={styles.text}>1.8.4</div>
                    <div style={styles.subtitle}>Android</div>
                    <div style={styles.text}>1.10.2</div>
                    <div style={styles.text}>1.9.2</div>
                    <div style={styles.text}>1.8.4</div>
                    <div style={styles.title}>bistroPOS</div>
                    <div style={styles.subtitle}>iOS</div>
                    <div style={styles.text}>1.6.2</div>
                </div>
                <Footer />
            </div>
        )
    }
}

const styles = ({
    downloads: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
    },
    downloads0: {
        width: '100%',
        maxWidth: 1000,
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor: 'green',
        minHeight: 400,
    },
    title: {
        fontFamily: 'raleway-bold',
        fontSize: 16,
        margin: '60px 20px 20px 20px',
    },
    subtitle: {
        fontFamily: 'raleway-bold',
        fontSize: 16,
        margin: '20px 20px 20px 60px',
    },
    text: {
        fontFamily: 'lato-regular',
        fontSize: 16,
        margin: '20px 20px 20px 100px',
        textDecoration: 'underline',
        color: 'blue',
    },
});

export default Downloads;
