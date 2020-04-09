import React, { Component } from 'react';
import '../index.css';
import map from './images/map.png';
import constants from './constants/constants';
import { AntDesign } from 'react-web-vector-icons';

class Bistro4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        console.log('render bistro4');

        return (
            <div style={styles.bistro4}>
                <div style={styles.bistro4Inner}>
                    <img style={styles.image} src={map} />
                    <div style={styles.bistro4Title}>Developed <span style={{ opacity: 0.6 }}>in</span></div>
                    <div style={styles.bistro4TitleA}>Asia</div>
                    <div style={styles.bistro4Title}><span style={{ opacity: 0.6 }}>for</span> efficiency driven</div>
                    <div style={styles.bistro4TitleA}>enterprises.</div>
                    <div style={styles.bistro4TitleB}>Engage our consultants with 20+ years of helping local businesses.</div>
                </div>
            </div>
        )
    }
}

const styles = ({
    bistro4: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 400,
        backgroundColor: 'rgb(255,100,130)',
    },
    bistro4Inner: {
        width: '100%',
        maxWidth: 1000,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'relative',
    },
    bistro4Title: {
        marginRight: 20,
        fontSize: 40,
        fontFamily: 'raleway-bold',
        color: 'white',
        zIndex: 1,
    },
    bistro4TitleA: {
        marginRight: 20,
        fontSize: 52,
        fontFamily: 'raleway-bold',
        color: 'black',
        zIndex: 1,
    },
    bistro4TitleB: {
        margin: '20px 20px 0 20px',
        fontSize: 20,
        fontFamily: 'raleway-bold',
        color: 'black',
        textAlign: 'right',
        zIndex: 1,
    },
    image: {
        position: 'absolute',
        left: -80,
        top: -80,
        zIndex: 0,
        transform: 'rotate(10deg)',
    }
});

export default Bistro4;
