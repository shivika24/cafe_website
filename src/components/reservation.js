import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class Reservation extends Component
{
    constructor(props){
        super(props)
        this.state = { startDate: new Date()};
      }
      componentDidMount() {
        window.scrollTo(0, 0)
      }
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };
    render()
    {
        return (
            <div>
                <div id="box-3" style={{backgroundImage: "url(https://www.canva.com/learn/wp-content/uploads/2018/06/FoodPhotographyProps34-tb-2640x1485.jpg)",padding: "50px"}}>
                <section id="featured-models" className="col-md-6" style={{height: "100%"}}>
                <div class="text-center">
                <center><h1 id="about" className="subheading" style={{marginTop:"-14%",fontSize:"5vw"}}>Book a table</h1></center>
                <center><h1 style={{marginTop:"-5vw",fontSize:"3vw"}} id="abouth">Make Reservation</h1></center>
                  </div>
                <div className="row">
                <div className="col-md-6 col-12 p-4">
                    <span style={{marginLeft:"-65%"}}>Name</span>
                <input type="text" class="form-control" placeholder="Your Name"/>
                </div>
                <div className="col-md-6 col-12 p-4">
                <span style={{marginLeft:"-88%"}}>Email</span>
                <input type="text" class="form-control"  placeholder="Your Email"/>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6 col-12 p-4">
                    <span style={{marginLeft:"-65%"}}>Phone</span>
                <input type="text" class="form-control"  placeholder="Your Phone no."/>
                </div>
                <div className="col-md-6 col-12 p-4">
                <span style={{marginLeft:"-88%"}}>Date</span><br/>
                <DatePicker className="form-control" selected={this.state.startDate} onChange={this.handleChange}/>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6 col-12 p-4">
                    <span style={{marginLeft:"-65%"}}>Time</span>
                <input type="text" class="form-control"  placeholder="Time"/>
                </div>
                <div className="col-md-6 col-12 p-4">
                <span style={{marginLeft:"-64%"}}>No. Of Persons</span>
                <input type="text" class="form-control"  placeholder="Person"/>
                </div>
                </div><br/><br/>
                <div className="row">
                    <div className="col-md-12">
                    <center><button class="btn btn-lg" id="rbut">Make A Reservation</button></center>
                    </div>
                </div>
            </section>
                </div><br/>
            </div>
        )
    }
}
export default Reservation;