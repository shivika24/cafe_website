import React, { Component } from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import m1 from './images/m1.jpg'
import m2 from './images/m2.jpg'
import m3 from './images/m3.jpg'
import m4 from './images/m4.jpg'
import m5 from './images/m5.jpg'
import m6 from './images/m6.jpg'
import m7 from './images/m7.jpg'
import m8 from './images/m8.jpg'
import m9 from './images/m9.jpg'
import m10 from './images/m10.jpg'
import m11 from './images/m11.jpg'
import m12 from './images/m12.jpg'
import Navbar from './navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class Menu extends Component
{
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render()
    {
        return (
            <div>
            <div id="box-2" style={{backgroundImage: "url(https://www.photojaanic.com/blog/wp-content/uploads/sites/2/2017/07/food-photography-tips-photojaanic-3-1-1080x720.jpg)"}}>
            <center><h1 id="contacth">Specialities<br/><br/></h1></center>
            </div><br/>
            <center><h1>FOOD MENU</h1></center>
            <br/><br/>
            <div className="row" style={{padding:0,margin:0}}>
                <div className="col-md-4" style={{padding:"25px"}}>
                <Zoom>
                <center><img  alt="img" src={m1} style={{width:"100%"}}/></center>
                </Zoom>
                </div>
                <div className="col-md-4" style={{padding:"25px"}}>
                <Zoom>
                <center><img  alt="img" src={m2} style={{width:"100%"}}/></center>
                </Zoom>
                </div>
                <div className="col-md-4" style={{padding:"25px"}}>
                <Zoom>
                <center><img  alt="img" src={m3} style={{width:"100%"}}/></center>
                </Zoom>
                </div>
            </div><br/><br/>
            <div className="row" style={{padding:0,margin:0}}>
                <div className="col-md-4" style={{padding:"25px"}}>
                <Zoom>
                <center><img  alt="img" src={m4} style={{width:"100%"}}/></center>
                </Zoom>
                </div>
                <div className="col-md-4" style={{padding:"25px"}}>
                <Zoom>
                <center><img  alt="img" src={m5} style={{width:"100%"}}/></center>
                </Zoom>
                </div>
                <div className="col-md-4" style={{padding:"25px"}}>
                <Zoom>
                <center><img  alt="img" src={m6} style={{width:"100%"}}/></center>
                </Zoom>
                </div>
            </div>
            <br/><br/>
            <div className="row" style={{padding:0,margin:0}}>
                <div className="col-md-4" style={{padding:"25px"}}>
                <Zoom>
                <center><img  alt="img" src={m7} style={{width:"100%"}}/></center>
                </Zoom>
                </div>
                <div className="col-md-4" style={{padding:"25px"}}>
                <Zoom>
                <center><img  alt="img" src={m8} style={{width:"100%"}}/></center>
                </Zoom>
                </div>
                <div className="col-md-4" style={{padding:"25px"}}>
                <Zoom>
                <center><img  alt="img" src={m9} style={{width:"100%"}}/></center>
                </Zoom>
                </div>
            </div>
            <br/><br/>
            <div className="row" style={{padding:0,margin:0}}>
                <div className="col-md-4" style={{padding:"25px"}}>
                <Zoom>
                <center><img  alt="img" src={m10} style={{width:"80%"}}/></center>
                </Zoom>
                </div>
                <div className="col-md-4" style={{padding:"25px"}}>
                <Zoom>
                <center><img  alt="img" src={m11} style={{width:"80%"}}/></center>
                </Zoom>
                </div>
                <div className="col-md-4" style={{padding:"25px"}}>
                <Zoom>
                <center><img  alt="img" src={m12} style={{width:"80%"}}/></center>
                </Zoom>
                </div>
            </div><br/><br/>
            <div className="row" style={{margin:0,padding:0,backgroundColor:"#000000cf"}}>
                <div className="col-md-6 col-12">
                    <center><p style={{paddingTop:"10%"}}>Name say’s it all, Experience Disconnect 2 connect. With the digital age taking over interaction and communication and true connection falling. Screen time taking over interaction & communication, The true connect with Family - Friends -Colleague or even your Boss seems a miss. So put down the phones, tablets, and laptops for a while and get back to being socially interactive.</p></center>
                </div>
                <div className="col-md-6 col-12" style={{margin:0,paddingTop:"4%",paddingRight:"4%",paddingLeft:"4%"}}>
                <div className="map" style={{height:"300px"}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.1402945670916!2d76.86233941448828!3d30.65817768166319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f94f4bfffffff%3A0xdbef6bd4a744d435!2sExotic%20Heights!5e0!3m2!1sen!2sin!4v1587211899340!5m2!1sen!2sin" width="100%" height="300px" frameborder="0" style={{border:"0"}} allowfullscreen=""></iframe>
                </div><br/>
                </div>
            </div>
            </div>
        )
    }
}
export default Menu;
