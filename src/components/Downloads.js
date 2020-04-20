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
                    <div style={styles.remarks}>Updated 19/04/2020</div>
                    <div style={styles.row}>
                        <AntDesign name='apple1' size={24} color='#A3AAAE' />
                        <div style={styles.rowItem}>
                            <div style={styles.itemTitle}>LATEST</div>
                            <div style={styles.itemVersion}>1.10.7</div>
                        </div>
                        <div style={styles.rowItem}>
                            <div style={styles.itemTitleAlt}>SUPPORT</div>
                            <div style={styles.itemVersion}>1.8.4</div>
                        </div>
                        <div style={styles.rowItem}>
                            <div style={styles.itemTitleAlt}>SUPPORT</div>
                            <div style={styles.itemVersion}>1.6.7</div>
                        </div>
                    </div>
                    <div style={styles.row}>
                        <AntDesign name='android1' size={24} color='#8CC541' />
                        <div style={styles.rowItem}>
                            <div style={styles.itemTitle}>LATEST</div>
                            <div style={styles.itemVersion}>1.10.7</div>
                        </div>
                        <div style={styles.rowItem}>
                            <div style={styles.itemTitleAlt}>SUPPORT</div>
                            <div style={styles.itemVersion}>1.8.4</div>
                        </div>
                        <div style={styles.rowItem}>
                            <div style={styles.itemTitleAlt}>SUPPORT</div>
                            <div style={styles.itemVersion}>1.6.7</div>
                        </div>
                    </div>
                    <div style={styles.contact}>*For older mobile versions not listed here, <span style={{ textDecoration: 'underline', color: 'blue' }}>contact us</span>.</div>
                    <div style={styles.title}>bistroPOS</div>
                    <div style={styles.remarks}>Updated 19/04/2020</div>
                    <div style={styles.row}>
                        <AntDesign name='apple1' size={24} color='#A3AAAE' />
                        <div style={styles.rowItem}>
                            <div style={styles.itemTitle}>LATEST</div>
                            <div style={styles.itemVersion}>1.6.2</div>
                        </div>
                    </div>
                    <div style={styles.row}>
                        <AntDesign name='android1' size={24} color='#8CC541' />
                        <div style={styles.rowItem}>
                            <div style={styles.itemTitle}>LATEST</div>
                            <div style={styles.itemVersion}>TBA</div>
                        </div>
                    </div>
                    <div style={styles.contact}>*For older bistro versions not listed here, <span style={{ textDecoration: 'underline', color: 'blue' }}>contact us</span>.</div>
                    <div style={styles.title}>epbOS</div>
                    <div style={styles.remarks}>Updated 19/04/2020</div>
                    <div style={styles.row}>
                        <AntDesign name='apple1' size={24} color='#A3AAAE' />
                        <div style={styles.rowItem}>
                            <div style={styles.itemTitle}>LATEST</div>
                            <div style={styles.itemVersion}>905</div>
                        </div>
                        <div style={styles.rowItem}>
                            <div style={styles.itemTitleAlt}>SUPPORT</div>
                            <div style={styles.itemVersion}>900</div>
                        </div>
                    </div>
                    <div style={styles.row}>
                        <AntDesign name='windows' size={24} color='#00A4EF' />
                        <div style={styles.rowItem}>
                            <div style={styles.itemTitle}>LATEST</div>
                            <div style={styles.itemVersion}>905</div>
                        </div>
                        <div style={styles.rowItem}>
                            <div style={styles.itemTitleAlt}>SUPPORT</div>
                            <div style={styles.itemVersion}>900</div>
                        </div>
                    </div>
                    <div style={styles.contact}>*For older EPB versions not listed here, <span style={{ textDecoration: 'underline', color: 'blue' }}>contact us</span>.</div>
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
        margin: '60px 20px 0 20px',
    },
    remarks: {
        fontFamily: 'lato-regular',
        fontSize: 12,
        margin: '0 20px 0 20px',
        // color: constants.grey5,
    },
    row: {
        padding: '0 20px 0 20px',
        height: 80,
        // backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    rowItem: {
        margin: '0 0 0 20px',
        height: 40,
        width: 80,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: '0 10px 0 10px',
    },
    itemTitle: {
        fontFamily: 'eina01-regular',
        fontSize: 10,
        color: 'red',
        letterSpacing: 1,
    },
    itemTitleAlt: {
        fontFamily: 'eina01-regular',
        fontSize: 10,
        letterSpacing: 1,
    },
    itemVersion: {
        fontFamily: 'lato-regular',
        fontSize: 18,
    },
    contact: {
        fontFamily: 'lato-regular',
        fontSize: 12,
        margin: '0 20px 0 20px',
    },
});

export default Downloads;
