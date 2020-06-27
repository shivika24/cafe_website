import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
class Blog extends Component
{
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render()
    {
        return (
            <div>
                <div  id="box-4" style={{backgroundImage: "url(https://images.iphonephotographyschool.com/23059/970/food.jpg)",padding: "50px"}}>
                <div className="row" style={{margin:0,padding:0}}>
                <div className="col-md-12">
                <center><h1 id="about" className="subheading">Blogs</h1></center>
                <center><h1 style={{marginTop:"-7vw",color:"rgb(230, 230, 230)"}} id="abouth">Recent Posts</h1></center>
                </div>                    
                </div> 
                <div className="row" style={{margin:0,padding:0}}>
                    <div className="col-md-4">
                    <div class="card">
                         <img class="card-img-top" id="blogimage" src="https://img.delicious.com.au/PWHHMbtc/w759-h506-cfill/del/2016/08/miso-butter-chicken-with-roast-carrots-and-spaghetti-38982-2.jpg" alt="Card image cap"/>
                         <div class="card-body">
                         <p>Sept. 06, 2019 Admin</p>
                         <h5 class="card-title">Taste the delicious foods in Asia</h5>
                         <Link to="/blog1" class="btn btn-primary">Read More</Link>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card">
                         <img class="card-img-top" id="blogimage" src="https://i.pinimg.com/originals/e6/63/02/e66302d6a617fcc02151f285e7efbb6b.jpg" alt="Card image cap"/>
                         <div class="card-body">
                         <p>March. 06, 2020 Admin</p>
                         <h5 class="card-title">Taste the delicious foods in Asia</h5>
                         <Link to="/blog2" class="btn btn-primary">Read More</Link>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card">
                         <img class="card-img-top" id="blogimage" src="https://i.pinimg.com/originals/6c/77/b3/6c77b3906592679daf55d688a962f432.jpg" alt="Card image cap"/>
                         <div class="card-body">
                         <p>May. 09, 2020 Admin</p>
                         <h5 class="card-title">Taste the delicious foods in Asia</h5>
                         <Link to="/blog3" class="btn btn-primary">Read More</Link>
                    </div>
                    </div>
                    </div>
                </div><br/><br/>
                </div>
            </div>
        )
    }
}
export default Blog;