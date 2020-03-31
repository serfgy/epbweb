import React, { Component } from 'react';
import '../index.css';
import constants from './constants/constants';
import { AntDesign } from 'react-web-vector-icons';
import Header from './Header';
import Home1 from './Home1';
import Home2 from './Home2';
import Home3 from './Home3';
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
                <Home2 />
                <Home3 />
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
    },
});

export default Home;
