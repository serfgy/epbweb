import React, { Component } from 'react';
import '../index.css';
import constants from './constants/constants';
import { AntDesign } from 'react-web-vector-icons';
import Home6 from './Home6';
import Header from './Header';
import Footer from './Footer';
import branch1 from './images/branch1.jpg';
import branch2 from './images/branch2.jpg';
import branch3 from './images/branch3.jpg';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        console.log('render contact');

        return (
            <div style={styles.contact}>
                <Header />
                <div style={styles.contact0}>
                    <div className='body-col-2'>
                        <div style={styles.wrapper}>
                            <div style={styles.title}>Contact Us</div>
                            <div style={styles.subtitle}>Leave us a message and we will get to you shortly!</div>
                            <div style={styles.inputTitle}>NAME<span style={{ color: 'red' }}>*</span></div>
                            <input style={styles.input} />
                            <div style={styles.inputTitle}>EMAIL<span style={{ color: 'red' }}>*</span></div>
                            <input style={styles.input} />
                            <div style={styles.inputTitle}>COMPANY</div>
                            <input style={styles.input} />
                            <div style={styles.inputTitle}>MESSAGE</div>
                            <textarea style={styles.textarea} />
                            <div style={styles.button}>GET IN TOUCH</div>
                        </div>
                    </div>
                    <div className='body-col-2'>
                        <div style={styles.wrapper}>
                            <div style={styles.branchContainer}>
                                <div style={styles.branchTitle}>Singapore</div>
                                <div style={styles.branchAddress}>33 UBi Avenue 3</div>
                                <div style={styles.branchAddress}>#07-65 Vertex Tower A</div>
                                <div style={styles.branchAddress}>Singapore 408868</div>
                                <div style={styles.branchPhone}>+65 6509 4065</div>
                                <div style={styles.image1}></div>
                            </div>
                            <div style={styles.branchContainer}>
                                <div style={styles.branchTitle}>Shanghai</div>
                                <div style={styles.branchAddress}>Changlin Road, Baoshen District</div>
                                <div style={styles.branchAddress}>Room 5014, No. 913</div>
                                <div style={styles.branchPhone}>+ 86 21 6386 8208</div>
                                <div style={styles.image2}></div>
                            </div>
                            <div style={styles.branchContainer}>
                                <div style={styles.branchTitle}>Taipei</div>
                                <div style={styles.branchAddress}>Sec 1, Keelung Rd, Xinyi District</div>
                                <div style={styles.branchAddress}>Room 1201, 12F, No. 333</div>
                                <div style={styles.branchAddress}>Taipei 11012</div>
                                <div style={styles.branchPhone}>+ 886 2 2361 9781</div>
                                <div style={styles.image3}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Home6 />
                <Footer />
            </div >
        )
    }
}

const styles = ({
    contact: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
    },
    contact0: {
        width: '100%',
        maxWidth: 1000,
        // backgroundColor: 'green',
        minHeight: 400,
    },
    title: {
        fontFamily: 'raleway-bold',
        fontSize: 16,
        margin: '60px 0px 0 0px',
    },
    subtitle: {
        fontFamily: 'lato-regular',
        fontSize: 16,
        margin: '0px 0px 60px 0px',
    },
    inputTitle: {
        fontFamily: 'lato-regular',
        fontSize: 12,
        margin: '0px 0px 0px 0px',
    },
    input: {
        // width: '100%',
        maxWidth: 400,
        margin: '10px 0px 40px 0px',
        padding: '10px 10px 10px 10px',
        borderRadius: 5,
        border: 'none',
        backgroundColor: 'rgb(242,242,247)',
        height: 20,
        fontFamily: 'lato-regular',
        fontSize: 16,
    },
    textarea: {
        // width: '100%',
        maxWidth: 400,
        margin: '10px 0px 40px 0px',
        padding: '10px 10px 10px 10px',
        borderRadius: 5,
        border: 'none',
        backgroundColor: 'rgb(242,242,247)',
        height: 100,
        fontFamily: 'lato-regular',
        fontSize: 16,
    },
    wrapper: {
        // backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
    },
    branchContainer: {
        borderRadius: 10,
        // backgroundColor: 'red',
        height: 200,
        margin: '20px 0 20px 0',
        position: 'relative',
    },
    branchTitle: {
        fontFamily: 'raleway-bold',
        fontSize: 18,
        margin: '0 0 10px 0',
    },
    branchAddress: {
        fontFamily: 'lato-regular',
        fontSize: 16,
    },
    branchPhone: {
        fontFamily: 'lato-regular',
        fontSize: 16,
        color: constants.occupied,
        margin: '10px 0 0 0'
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
        margin: '0 0 60px 0px',
    },
    image1: {
        position: 'absolute',
        left: 40,
        right: 0,
        top: 30,
        bottom: 0,
        backgroundImage: `url(${branch1})`,
        backgroundSize: 'cover',
        borderRadius: 10,
        zIndex: -1,
        opacity: 0.2,
    },
    image2: {
        position: 'absolute',
        left: 40,
        right: 0,
        top: 30,
        bottom: 0,
        backgroundImage: `url(${branch2})`,
        backgroundSize: 'cover',
        borderRadius: 10,
        zIndex: -1,
        opacity: 0.2,
    },
    image3: {
        position: 'absolute',
        left: 40,
        right: 0,
        top: 30,
        bottom: 0,
        backgroundImage: `url(${branch3})`,
        backgroundSize: 'cover',
        borderRadius: 10,
        zIndex: -1,
        opacity: 0.2,
    }
});

export default Contact;
