import React, { Component } from 'react';
import '../index.css';
import customer1 from './images/customer1.png';
import customer2 from './images/customer2.jfif';
import customer3 from './images/customer3.jpg';
import customer4 from './images/customer4.png';
import customer5 from './images/customer5.png';
import customer6 from './images/customer6.png';
import customer7 from './images/customer7.jpg';
import constants from './constants/constants';
import { AntDesign } from 'react-web-vector-icons';

class Home5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        console.log('render home5');

        return (
            <div style={styles.home5}>
                <div style={styles.quotes}>
                    <div style={styles.quote}>
                        “With epb, it's all <span style={{color:'black'}}>happy experiences.</span>
                    </div>
                    <div style={styles.quote}>
                    <span style={{color:'black'}}>Attitude, capability</span>, they have it all.”
                    </div>
                    <div style={styles.quotee}>
                        — Eddie Teo, IT Director, Fragrance Bak Kwa
                    </div>
                </div>
                <div style={styles.customers}>
                    <img style={styles.image} src={customer2} />
                    <img style={styles.image} src={customer3} />
                    <img style={styles.image} src={customer4} />
                    <img style={styles.image} src={customer5} />
                    <img style={styles.image} src={customer6} />
                    <img style={styles.image} src={customer7} />
                    <img style={styles.imageAlt} src={customer1} />
                </div>
            </div>
        )
    }
}

const styles = ({
    home5: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px 0 60px 0',
        minHeight: 400,
        backgroundColor: 'rgb(242,242,247)',

    },
    image: {
        maxWidth: 64,
        maxHeight: 64,
        width: 'auto',
        height: 'auto',
        margin: '0 20px 0 20px',
        filter: 'grayscale(100%)',
        opacity: 0.2,
    },
    imageAlt: {
        maxWidth: 64,
        maxHeight: 64,
        width: 'auto',
        height: 'auto',
        margin: '0 20px 0 20px',
    },
    quotes: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    quote: {
        fontFamily: 'raleway-regular',
        fontSize: 40,
        color: constants.grey5,
        textAlign: 'center',
        margin: '0 20px 0 20px',
    },
    quotee: {
        margin: '20px 0 20px 0',
        fontFamily: 'lato-regular',
        fontSize: 18,
        color: 'grey',
    },
    customers: {
        height: 100,
        // backgroundColor: 'grey',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home5;
