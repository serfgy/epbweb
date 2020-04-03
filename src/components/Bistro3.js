import React, { Component } from 'react';
import '../index.css';
import constants from './constants/constants';
import { AntDesign } from 'react-web-vector-icons';

class Bistro3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        console.log('render bistro3');

        return (
            <div style={styles.bistro3}>
                <div style={styles.column} className='body-col-3'>
                    <div style={styles.columnImage}>
                    </div>
                    <div className='fa' style={styles.columnTitle}>
                        Fully Customizable
                    </div>
                    <div style={styles.columnText}>
                        From ideaization to execution, enjoy as we build your requests into functionalities
                        of the system in record time.
                    </div>
                </div>
                <div style={styles.column} className='body-col-3'>
                    <div style={styles.columnImage}>

                    </div>
                    <div style={styles.columnTitle}>
                        Platform Agnostic
                    </div>
                    <div style={styles.columnText}>
                        Run on windows, mac, ipads, tablets, run everywhere.
                    </div>
                    <div style={styles.columnIcons}>
                        <AntDesign style={styles.columnIcon} name='windows' size={24} color={constants.grey4} />
                        <AntDesign style={styles.columnIcon} name='apple1' size={24} color={constants.grey4}/>
                        <AntDesign style={styles.columnIcon} name='android1' size={24} color={constants.grey4} />
                        <AntDesign style={styles.columnIcon} name='ie' size={24} color={constants.grey4} />
                        <AntDesign style={styles.columnIcon} name='chrome' size={24} color={constants.grey4} />
                    </div>
                </div>
                <div style={styles.column} className='body-col-3'>
                    <div style={styles.columnImage}>

                    </div>
                    <div style={styles.columnTitle}>
                        Real Time Data
                    </div>
                    <div style={styles.columnText}>
                        View your restaurant's live sales with <b>epbMOBILE</b>. Sit back and watch the figures jump.
                    </div>
                </div>
                <div style={styles.column} className='body-col-3'>
                    <div style={styles.columnImage}>

                    </div>
                    <div style={styles.columnTitle}>
                        Integrated Accounting
                    </div>
                    <div style={styles.columnText}>
                        Watch your stock cut and costs factored seamlessly with each action as all transactions
                        are integrated with <b>epbOS</b>.
                    </div>
                </div>
                <div style={styles.column} className='body-col-3'>
                    <div style={styles.columnImage}>

                    </div>
                    <div style={styles.columnTitle}>
                        Intuitive Interface
                    </div>
                    <div style={styles.columnText}>
                        No more deadpan corporate software. Running a restaurant seems refreshing and exciting now!
                    </div>
                </div>
                <div style={styles.column} className='body-col-3'>
                    <div style={styles.columnImage}>

                    </div>
                    <div style={styles.columnTitle}>
                        Transparency & Traceability
                    </div>
                    <div style={styles.columnText}>
                        Record every action a user makes for a full accountability experience.
                    </div>
                </div>
            </div>
        )
    }
}

const styles = ({
    bistro3: {
        width: '100%',
        maxWidth: 1000,
        // display: 'flex',
        // flexDirection: 'column',
        // backgroundColor: 'red'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 360,
    },
    columnImage: {
        margin: '60px 0 0 20px',
        height: 80,
        width: 80,
        borderRadius: 40,
        // backgroundColor: 'green',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/108/760/31/colorful-painting-artwork-swirl-wallpaper-preview.jpg")',
        backgroundSize: 'contain',
    },
    columnTitle: {
        fontFamily: 'eina01-semibold',
        fontSize: 18,
        margin: '10px 20px 5px 20px',
    },
    columnText: {
        fontFamily: 'lato-regular',
        fontSize: 18,
        margin: '0 20px 0px 20px',
    },
    columnIcons: {
        margin: '10px 0 0 20px',
        // backgroundColor: 'green'
    },
    columnIcon: {
        margin: '0 10px 0 0',
    },
});

export default Bistro3;
