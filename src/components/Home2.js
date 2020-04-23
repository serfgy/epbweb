import React, { Component } from 'react';
import '../index.css';
import constants from './constants/constants';
import mobile1 from './images/mobile1.png';
import mobile2 from './images/mobile2.png';
import mobile3 from './images/mobile3.png';
import bistro1 from './images/bistro1.png';
import bistro2 from './images/bistro2.png';
import { AntDesign } from 'react-web-vector-icons';

class Home2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        console.log('render home2');

        return (
            <div style={styles.home2}>
                <div style={styles.home2Block} className='body-col-2'>
                    <div style={styles.home2Left}>
                        <div style={styles.home2Title}>INTEGRATED ERP</div>
                        <div style={styles.home2Subtitle}>One Ecosystem</div>
                        <div style={styles.home2Text}>Have a whole suite of apps at your fingertips by onboarding the EPB family. Never again
                    worry about customizations and integrations holding you back.</div>
                        <div style={styles.home2Point}>
                            <div style={styles.home2Bullet}></div>
                            <div style={styles.home2BulletText}>More than 20 Management Modules</div>
                        </div>
                        <div style={styles.home2Point}>
                            <div style={styles.home2Bullet}></div>
                            <div style={styles.home2BulletText}>Integrated in 1 System</div>
                        </div>
                        <div style={styles.home2Point}>
                            <div style={styles.home2Bullet}></div>
                            <div style={styles.home2BulletText}>Cross Platform Compatibility</div>
                        </div>
                    </div>
                </div>
                <div style={styles.home2Block} className='body-col-2'>
                    <div style={styles.home2BlockWrapper}>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>Sales Management</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>Purchase Management</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>Customer Relationship Management</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>Customer Service Management</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>Retail Management</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>Restaurant Management</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>eCommerce</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>Project Management</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>Quality Control Management</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>Job Costing Management</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>Marine Logistic Management</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>Inventory Management</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>Warehouse Management</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>Manufacturing Management</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>Finance Management</div>
                        </div>
                    </div>
                    <div style={styles.home2BlockWrapperAlt}>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>Office Management</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>3PL Management</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>Fixed Asset Management</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>Multi-Org Consolidation</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>EDI Management</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>Business Intelligence</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>Mobile Utility</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>Booking Planning</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>Workflow Management</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>Report Customization</div>
                        </div>
                        <div style={styles.home2ModulePoint}>
                            <div style={styles.home2ModuleBulletContainer}>
                                <div style={styles.home2ModuleBullet1}></div>
                                <div style={styles.home2ModuleBullet2}></div>
                                <div style={styles.home2ModuleBullet3}></div>
                            </div>
                            <div style={styles.home2ModuleBulletText}>General Master Files</div>
                        </div>
                    </div>
                </div>
                <div style={styles.home2Block} className='body-col-2'>
                    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                        <img style={styles.imageBistro1} src={bistro1} />
                        <img style={styles.imageBistro2} src={bistro2} />
                    </div>
                </div>
                <div style={styles.home2Block} className='body-col-2'>
                    <div style={styles.home2Right}>
                        <div style={styles.home2Title}>LASTING CONFIDENCE</div>
                        <div style={styles.home2Subtitle}>Growth Companion</div>
                        <div style={styles.home2Text}>
                            Stay ahead of your competitors with an operating system that more than keeps up with changing
                            landscapes and evolving demands so you can focus on running your business.
                        </div>
                        <div style={styles.home2Point}>
                            <div style={styles.home2Bullet}></div>
                            <div style={styles.home2BulletText}>Top User Satisfaction</div>
                        </div>
                        <div style={styles.home2Point}>
                            <div style={styles.home2Bullet}></div>
                            <div style={styles.home2BulletText}>Future Proof Solutions</div>
                        </div>
                    </div>
                </div>
                <div style={styles.home2Block} className='body-col-2'>
                    <div style={styles.home2Left}>
                        <div style={styles.home2Title}>PROPRIETARY DEVELOPMENT</div>
                        <div style={styles.home2Subtitle}>Aggressive Progression</div>
                        <div style={styles.home2Text}>Join us in collaboration efforts to co-develop peripheral systems.
                    Leave a legacy in building efficiency optimizing workflows for your business.</div>
                        <div style={styles.home2Point}>
                            <div style={styles.home2Bullet}></div>
                            <div style={styles.home2BulletText}>Co-develop Systems</div>
                        </div>
                        <div style={styles.home2Point}>
                            <div style={styles.home2Bullet}></div>
                            <div style={styles.home2BulletText}>Quick Ideation-to-Deployment Cycles</div>
                        </div>
                    </div>
                </div>
                <div style={styles.home2Block} className='body-col-2'>
                    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                        <img style={styles.imageMobile1} src={mobile1} />
                        <img style={styles.imageMobile2} src={mobile2} />
                        <img style={styles.imageMobile3} src={mobile3} />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = ({
    home2: {
        width: '100%',
        maxWidth: 1000,
    },
    home2Block: {
        height: 600,
        position: 'relative',
        // backgroundColor: 'red'
    },
    home2BlockWrapper: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    home2BlockWrapperAlt: {
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 360,
        right: -600,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        opacity: 0.6,
    },
    home2Left: {
        display: 'flex',
        flexDirection: 'column',
        height: 600,
        justifyContent: 'center',
        margin: '0 20px 0 20px',
    },
    home2Right: {
        display: 'flex',
        flexDirection: 'column',
        height: 600,
        justifyContent: 'center',
        alignItems: 'flex-end',
        textAlign: 'right',
        margin: '0 20px 0 20px',
    },
    home2Title: {
        fontFamily: 'eina01-bold',
        color: '#DAA520',
        fontSize: 16,
        letterSpacing: 1,
        marginBottom: 10,
    },
    home2Subtitle: {
        fontFamily: 'raleway-bold',
        fontSize: 48,
    },
    home2Text: {
        fontFamily: 'lato-regular',
        color: constants.fjord,
        fontSize: 16,
        letterSpacing: 0.5,
        marginTop: 20,
        maxWidth: 400,
        lineHeight: 1.5,
    },
    home2Point: {
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0 0 0',
    },
    home2Bullet: {
        height: 10,
        width: 10,
        backgroundColor: '#DAA520',
        opacity: 0.6,
        margin: '0 20px 0 0',
        transform: 'rotate(45deg)',
    },
    home2BulletText: {
        fontFamily: 'lato-bold',
        color: constants.fjord,
        fontSize: 16,
        // letterSpacing: 0.5,
        // lineHeight: 1.5,
    },
    home2ModulePoint: {
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0 0 40px',
    },
    home2ModuleBulletContainer: {
        height: 20,
        width: 20,
        // backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        margin: '0 20px 0 0',
    },
    home2ModuleBullet1: {
        height: 4,
        width: 20,
        backgroundColor: 'rgb(255,100,130)',
        borderRadius: 2,
    },
    home2ModuleBullet2: {
        height: 4,
        width: 14,
        backgroundColor: 'rgb(255,179,64)',
        borderRadius: 2,
        // margin:'1px 0 1px 0',
    },
    home2ModuleBullet3: {
        height: 4,
        width: 8,
        backgroundColor: 'rgb(255,212,38)',
        borderRadius: 2,
    },
    home2ModuleBulletText: {
        fontFamily: 'lato-bold',
        color: constants.grey2,
        fontSize: 16,
        // letterSpacing: 0.5,
        // lineHeight: 1.5,
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
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
        marginRight: 20,
    },
    buttonReverse: {
        fontFamily: 'raleway-bold',
        fontSize: 14,
        borderRadius: 5,
        height: 60,
        width: 160,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid white',
        padding: '0 10px 0 10px',
        marginRight: 20,
    },
    imageMobile1: {
        width: '50%',
        position: 'absolute',
        top: 25,
        right: 25,
        zIndex: 3,
        borderRadius: 5,
        boxShadow: '0px 0px 15px 5px rgb(255,212,38)',
    },
    imageMobile2: {
        width: '50%',
        position: 'absolute',
        top: 25,
        right: 125,
        zIndex: 2,
        borderRadius: 5,
        boxShadow: '0px 0px 15px 5px rgb(255,212,38)',
        opacity: 0.6,
    },
    imageMobile3: {
        width: '50%',
        position: 'absolute',
        top: 25,
        right: 225,
        zIndex: 1,
        borderRadius: 5,
        boxShadow: '0px 0px 15px 5px rgb(255,212,38)',
        opacity: 0.2,
    },
    imageBistro1: {
        height: '80%',
        position: 'absolute',
        top: 25,
        right: 25,
        zIndex: 2,
        borderRadius: 5,
        boxShadow: '0px 0px 15px 5px rgb(255,212,38)',
    },
    imageBistro2: {
        height: '80%',
        position: 'absolute',
        top: 25,
        right: 325,
        zIndex: 3,
        borderRadius: 5,
        boxShadow: '0px 0px 15px 5px rgb(255,212,38)',
    },
});

export default Home2;
