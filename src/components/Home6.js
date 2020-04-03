import React, { Component } from 'react';
import '../index.css';
import map from './images/map.png';
import paint from './images/paint.jpg';
import constants from './constants/constants';
import { AntDesign } from 'react-web-vector-icons';

class Home6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        console.log('render home6');

        return (
            <div style={styles.home6}>
                <div style={styles.home6Inner}>
                    <div style={styles.home6InnerFirst} className='body-col-2'>
                        <div style={styles.square}>
                            <div style={styles.squareNumber}>12</div>
                            <div style={styles.squareText}>Countries Supported</div>
                        </div>
                        <div style={styles.square}>
                            <div style={styles.squareNumber}>100+</div>
                            <div style={styles.squareText}>Customers Live</div>
                        </div>
                        <div style={styles.square}>
                            <div style={styles.squareNumber}>1219</div>
                            <div style={styles.squareText}>Clients Installed</div>
                        </div>
                        <div style={styles.square}>
                            <div style={styles.squareNumber}>2892</div>
                            <div style={styles.squareText}>Existing Users</div>
                        </div>
                    </div>
                    <div style={styles.home6InnerSecond} className='body-col-2'>
                        <div style={styles.square}>
                            <div style={styles.squareNumber}>78</div>
                            <div style={styles.squareText}>Documents</div>
                        </div>
                        <div style={styles.square}>
                            <div style={styles.squareNumber}>13</div>
                            <div style={styles.squareText}>Modules</div>
                        </div>
                        <div style={styles.square}>
                            <div style={styles.squareNumber}>1</div>
                            <div style={styles.squareText}>System</div>
                        </div>
                        <div style={styles.square}>
                            <div style={styles.squareNumber}>100%</div>
                            <div style={styles.squareText}>Implementation Sucess</div>
                        </div>
                    </div>
                </div>
                <div style={styles.home6Row}>
                    <div style={styles.text}>
                        1,000,000,000+ data transactions generated since inception in 1996.
                    </div>
                </div>
            </div>
        )
    }
}

const styles = ({
    home6: {
        marginTop: 60,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: constants.grey3,
    },
    home6Inner: {
        height: '100%',
        width: '100%',
        maxWidth: 1000,
    },
    home6InnerFirst: {
        height: 320,
    },
    home6InnerSecond: {
        height: 320,
    },
    square: {
        float: 'left',
        width: '50%',
        height: 160,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    squareNumber: {
        fontFamily: 'raleway-regular',
        fontSize: 56,
        color: 'white',
    },
    squareText: {
        fontFamily: 'raleway-regular',
        fontSize: 16,
    },
    home6Row: {
        margin: '20px 0 0 0',
        display: 'flex',
        flexDirection: 'column',
    },
    text: {
        fontFamily: 'raleway-bold',
        fontSize: 24,
        margin: '20px 20px 40px 20px',
        textAlign: 'center',
        color: 'white',
    },
});

export default Home6;
