import React, { Component } from 'react';
import '../index.css';
import constants from './constants/constants';
import { AntDesign } from 'react-web-vector-icons';
import Header from './Header';
import Home0 from './Home0';
import Home1 from './Home1';
import Home2 from './Home2';
import Home4 from './Home4';
import Home5 from './Home5';
import Home6 from './Home6';
import Footer from './Footer';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        console.log('render home');

        return (
            <div style={styles.home}>
                <Header />
                <Home1 />
                <Home4 />
                <Home2 />
                <Home6 />
                <Home0 />
                <Home5 />
                <Footer />
            </div>
        )
    }
}

const styles = ({
    home: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        overflow: 'hidden',
    },
});

export default Home;
