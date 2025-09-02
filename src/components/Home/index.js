import LogoTitle from '../../assets/images/logo-xs.png';
import {Link} from 'react-router-dom'
import './index.scss'
import Sidebar from '../Sidebar/'
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['a', 'n', 'd', 'e', 'r']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    return (
        <>
        <Sidebar />
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/> I'M
                <img src={LogoTitle} id='xslogo' alt="developer"/>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15}/>
                </h1>
                <h2>Full Stack Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    </>)
}
export default Home;