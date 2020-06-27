import React, { Component } from 'react';
import './contact.css';
class Contact extends Component
{
  componentDidMount() {
    window.scrollTo(0, 0)
  }
    render()
    {
        return (
            <div>
            <div id="box-2" style={{backgroundImage: "url(https://www.photojaanic.com/blog/wp-content/uploads/sites/2/2017/07/food-photography-tips-photojaanic-3-1-1080x720.jpg)"}}>
            <center><h1 id="contacth">Contact<br/><br/></h1></center>
            </div>
            <section className="sec4" id="contact">
            <div className="container">
               <div className="row">
               <div className="col-lg-5 mr-lg-5 col-xs-12 col-12" data-aos="zoom-in" data-aos-duration="1000">
               <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.1402945670916!2d76.86233941448828!3d30.65817768166319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f94f4bfffffff%3A0xdbef6bd4a744d435!2sExotic%20Heights!5e0!3m2!1sen!2sin!4v1587211899340!5m2!1sen!2sin" width="100%" height="300px" frameborder="0" style={{border:"0"}} allowfullscreen=""></iframe>
            
            <div className="map-info mx-auto">
              <h3 className="mb3">Contact Us!</h3>
              <div className="contact-details">
                <p className="footer-text mb-0">+919988655750</p>
                <p className="email">
                  <a href="mailto:shivikasingla24@gmail.com">shivikasingla24@gmail.com</a>
                </p>
              </div>
              <div className="contact-icons">
                <a href="https://github.com/shivika24" target="_blank"><i className="fa fa-github"
                    aria-hidden="true"></i></a><br/>
                <a href="https://www.linkedin.com/in/shivika-singla-62b13a177/" target="_blank"><i
                    className="fa fa-linkedin-square" aria-hidden="true"></i></a>

              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 mr-lg-5 col-xs-12 col-12">
          <div className="contact-form">
            <h2 className="mb-4">Contact Us</h2>

            <form className="gform"
              action="https://script.google.com/macros/s/AKfycbyc6jvSMz5lzibG5Bm8GxWktZbtC2PkUPVlZRT8/exec"
              method="POST" data-email="shivikasingla24@gmail.com" target="_blank">
              <div className="row">

                <div className="col-lg-6 col-12">
                  <input type="text" className="form-control" name="name" placeholder="Your Name" id="name" required/>
                </div>

                <div className="col-lg-6 col-12">
                  <input type="email" className="form-control" name="email" placeholder="Email" id="email" required/>
                </div>

                <div className="col-12">
                  <textarea name="message" rows="6" className="form-control" id="message" placeholder="Message" required></textarea>
                </div>

                <div className="ml-lg-auto col-lg-5 col-12">
                    <br/>
                  <input type="submit" className="submit-btn" value="Okay! submit" id="subbut"/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
            </div>
        )
    }
}
export default Contact;