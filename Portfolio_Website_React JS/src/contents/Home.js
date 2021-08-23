import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic1 from '../img/images.jpeg';
import profilepic2 from '../img/tinbox.jpeg';
import profilepic3 from '../img/storage.jpg';
import Social from '../components/Social'
import '../index.scss';
import Hd from  '../components/hd';



class Home extends Component {
    render() {
        return (
            <div className="condiv home"  style={{  backgroundImage: `url("https://cdn.wallpapersafari.com/0/93/P25alN.jpg")`}} >
                  {/* <div class="row">
                      <div class="column">
            <img src={profilepic1} alt="ProfilePic" className="profilepic1"></img>
            </div>
            <div class="column">
            <img src={profilepic2} alt="ProfilePic" className="profilepic2"></img>
            </div>
            <div class="column">
            <img src={profilepic3} alt="ProfilePic" className="profilepic3"></img>
            </div>
            </div> */}
            <ReactTypingEffect  className="typingeffect" text={['WELCOME']} speed={100} eraseDelay={700}/>
           <div class="hd">
            <Hd />
            </div>
            <ReactTypingEffect  className="typingeffect" text={['Babloo Box Store,Anand Nagar']} speed={100} eraseDelay={700}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    