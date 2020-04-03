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
});

export default Downloads;
