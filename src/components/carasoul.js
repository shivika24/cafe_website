import React, { Component } from 'react';
import img1 from './images/bg_1.jpg';
import img2 from './images/bg_2.jpg';
import img3 from './images/bg_3.jpg';
import c1 from './images/about.jpg';
import c2 from './images/about-1.jpg';
import chef1 from './images/chef-1.jpg';
import chef2 from './images/chef-2.jpg';
import chef3 from './images/chef-3.jpg';
import chef4 from './images/chef-4.jpg';
import './carasoul.css';
import Reservation from './reservation';
import Blog from './blog';
class Carasoul extends Component
{
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render()
    {
        return(
            <div>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>                
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" id="c1" src={img1} alt="First slide"/>
                    <div class="carousel-caption">                    
                     <h1 id="chead" className="subheading" style={{marginTop:"-38%"}}>Dice 'n' Dine</h1>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" id="c1" src={img2} alt="Second slide"/>
                    <div class="carousel-caption">                    
                     <h1 id="chead" className="subheading" style={{marginTop:"-38%"}}>Dice 'n' Dine</h1>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" id="c1" src={img3} alt="Third slide"/>
                    <div class="carousel-caption">                    
                     <h1 id="chead" className="subheading" style={{marginTop:"-38%"}}>Dice 'n' Dine</h1>
                    </div>
                </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                 </a>
                </div>
                <br/><br/><br/>
                <a href="#about"><div className="row" style={{padding:0,margin:0}}>
                    <div className="col-md-6 col-12" style={{padding:0,margin:0}}>
                        <div className="row">
                        <div className="col-12 col-md-6 col-6">
                            <img src={c1} style={{marginLeft:"10%",width:"90%",height:"500px"}} className="ml-3"/>
                        </div>
                        <div className="col-12 col-md-6 col-6">
                            <img src={c2} style={{width:"90%",height:"500px",marginTop:"30px"}} className="ml-3"/>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-12" style={{padding:0,margin:0}}>
                    <center><h1 id="about" className="subheading">about</h1></center> 
                    <center><h1 style={{marginTop:"-8vw"}} id="abouth">Dice 'n' Dine</h1></center>
                    <center><h4 style={{color:"gray"}}>Name say’s it all, Experience Disconnect 2 connect. With the digital age taking over interaction and communication and true connection falling. Screen time taking over interaction & communication, The true connect with Family - Friends -Colleague or even your Boss seems a miss.</h4>
                    <h3><span style={{color:"gray"}}>Mon - Fri</span><span style={{color:"#5a5555"}}> 8 AM - 11 PM</span></h3>    
                    <h2 style={{color:"#96810e",fontWeight:"500"}}>+91 9988655750</h2></center>                             
                    </div>
                </div></a>
                <br/><br/>
                <div className="row" style={{padding:0,margin:0}}>
                    <div className="col">
                        <center><h1 style={{color:"#96810e",fontWeight:"600"}}>10</h1></center>
                        <center><h6 style={{color:"gray"}}>YEARS OF EXPERIENCE</h6></center>
                    </div>
                    <div className="col">
                        <center><h1 style={{color:"#96810e",fontWeight:"600"}}>100</h1></center>
                        <center><h6 style={{color:"gray"}}>MENUS/DISHES</h6></center>                        
                    </div>
                    <div className="col">
                        <center><h1 style={{color:"#96810e",fontWeight:"600"}}>50</h1></center>
                        <center><h6 style={{color:"gray"}}>STAFFS</h6></center>
                        
                    </div>
                    <div className="col">
                        <center><h1 style={{color:"#96810e",fontWeight:"600"}}>1000+</h1></center>
                        <center><h6 style={{color:"gray"}}>HAPPY CUSTOMERS</h6></center>                        
                    </div>
                    <div className="col">
                        <p>Name say’s it all, Experience Disconnect 2 connect. </p>                        
                    </div>
                </div>
                <br/><br/>
                <div className="row" style={{padding:0,margin:0,backgroundColor:"rgba(231, 227, 227, 0.31)"}}>
                <div className="col-md-12">
                <center><h1 id="about" className="subheading">Services</h1></center>
                <center><h1 style={{marginTop:"-8vw"}} id="abouth">Catering Services</h1></center>
                </div>
                </div>
                <div className="row" style={{margin:0,padding:0,backgroundColor:"rgba(231, 227, 227, 0.31)"}}>
                    <div className="col-4">
                    <center><i class="fas fa-birthday-cake fa-5x" style={{color:"#c5ac25"}}></i></center>
                    <center><h3>Birthday Parties</h3></center>
                    <center><p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p></center>
                    </div>
                    <div className="col-4">
                    <center><i class="fas fa-business-time fa-5x" style={{color:"#c5ac25"}}></i></center>
                    <center><h3>Business Meetings</h3></center>
                    <center><p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p></center>                        
                    </div>
                    <div className="col-4">
                    <center><i class="fas fa-glass-cheers fa-5x" style={{color:"#c5ac25"}}></i></center>
                    <center><h3>Wedding Party</h3></center>
                    <center><p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p></center>                                                                        
                    </div>
                </div>
                <br/><br/>
                <div className="row" style={{padding:0,margin:0}}>
                <div className="col-md-12">
                <center><h1 id="about" className="subheading">Specialities</h1></center>
                <center><h1 style={{marginTop:"-8vw"}} id="abouth">Our Menu</h1></center>
                </div>
                </div>
                <div className="row" style={{padding:0,margin:0}}>
                    <div className="container" style={{outlineStyle:"solid",outlineColor:"rgb(209, 208, 200)",padding:0}}>
                        <div className="row" style={{padding:0,margin:0}}>
                            <div className="col-md-3 col-6"  style={{margin:0,padding:0}}>
                                <img style={{width:"100%",height:"230px"}} src="https://www.schoolofphotography.co.in/wp-content/uploads/2017/10/food_photography_palm_beach_gardens_florida_parched_pig.jpg"/>
                            </div>
                            <div className="col-md-3 col-6">
                            <span style={{float:"right",color:"#c5ac25",fontWeight:"500",fontSize:"2vw"}}>Rs. 425</span>
                                <h4><span>Grilled Beef with potatoes</span></h4>
                                <h5 style={{color:"gray"}}>Meat, Potatoes, Rice, Tomatoe</h5>
                                <button class="btn btn-primary">ORDER NOW</button>
                            </div>
                            <div className="col-md-3 col-6"  style={{margin:0,padding:0}}>
                                <img style={{width:"100%",height:"230px"}} src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2018/11/K3A5136_1.jpg?resize=1500%2C994&ssl=1"/>
                            </div>
                            <div className="col-md-3 col-6">
                            <span style={{float:"right",color:"#c5ac25",fontWeight:"500",fontSize:"2vw"}}>Rs. 425</span>
                                <h4><span>Grilled Beef with potatoes</span></h4>
                                <h5 style={{color:"gray"}}>Meat, Potatoes, Rice, Tomatoe</h5>
                                <button class="btn btn-primary">ORDER NOW</button>
                            </div>
                        </div>
                        <div className="row" style={{padding:0,margin:0}}>
                            <div className="col-md-3 col-6">
                            <span style={{float:"right",color:"#c5ac25",fontWeight:"500",fontSize:"2vw"}}>Rs. 425</span>
                                <h4><span>Grilled Beef with potatoes</span></h4>
                                <h5 style={{color:"gray"}}>Meat, Potatoes, Rice, Tomatoe</h5>
                                <button class="btn btn-primary">ORDER NOW</button>
                            </div>
                            <div className="col-md-3 col-6"  style={{margin:0,padding:0}}>
                                <img style={{width:"100%",height:"230px"}} src="https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2014/05/02_Tip01_45_vs_90_Tacos.jpg?w=600&h=1260&ssl=1"/>
                            </div>
                            <div className="col-md-3 col-6">
                            <span style={{float:"right",color:"#c5ac25",fontWeight:"500",fontSize:"2vw"}}>Rs. 425</span>
                                <h4><span>Grilled Beef with potatoes</span></h4>
                                <h5 style={{color:"gray"}}>Meat, Potatoes, Rice, Tomatoe</h5>
                                <button class="btn btn-primary">ORDER NOW</button>
                            </div>
                            <div className="col-md-3 col-6"  style={{margin:0,padding:0}}>
                                <img style={{width:"100%",height:"230px"}} src="https://img.fixthephoto.com/blog/UserFiles/Image/111/Image/40-dark-food-photography-tips_640x640.jpg"/>
                            </div>
                        </div>
                        <div className="row" style={{padding:0,margin:0}}>
                            <div className="col-md-3 col-6"  style={{margin:0,padding:0}}>
                                <img style={{width:"100%",height:"230px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQjELJ-lJ0pXscdRSCDJDsXPskh6t4D7RnKQ&usqp=CAU"/>
                            </div>
                            <div className="col-md-3 col-6" >
                            <span style={{float:"right",color:"#c5ac25",fontWeight:"500",fontSize:"2vw"}}>Rs. 425</span>
                                <h4><span>Grilled Beef with potatoes</span></h4>
                                <h5 style={{color:"gray"}}>Meat, Potatoes, Rice, Tomatoe</h5>
                                <button class="btn btn-primary">ORDER NOW</button>
                            </div>
                            <div className="col-md-3 col-6"  style={{margin:0,padding:0}}>
                                <img style={{width:"100%",height:"230px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOw6sUGRdDUaLrUUCFCdJCvMTBhQBsb3dC5Q&usqp=CAU"/>
                            </div>
                            <div className="col-md-3 col-6">
                            <span style={{float:"right",color:"#c5ac25",fontWeight:"500",fontSize:"2vw"}}>Rs. 425</span>
                                <h4><span>Grilled Beef with potatoes</span></h4>
                                <h5 style={{color:"gray"}}>Meat, Potatoes, Rice, Tomatoe</h5>
                                <button class="btn btn-primary">ORDER NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <div className="row" style={{padding:0,margin:0,backgroundColor:"rgba(231, 227, 227, 0.31)"}}>
                <div className="col-md-12">
                <center><h1 id="about" className="subheading">Chef</h1></center>
                <center><h1 style={{marginTop:"-8vw"}} id="abouth">Our MasterChef</h1></center>
                </div>
                </div> 
                <div className="row" style={{padding:0,margin:0,backgroundColor:"rgba(231, 227, 227, 0.31)"}}>
                    <div className="col-md-3 col-6">
                    <div className="container">
                        <img src={chef1} style={{width:"100%",height:"100%"}}/>
                        <center><h5>John Smooth</h5></center>
                        <center><h6 style={{color:"gray"}}>Restaurant Owner</h6></center>
                        <center><i class="fab fa-twitter fa-lg" style={{color:"#bfbd87"}}></i><i class="fab fa-facebook-f fa-lg" style={{marginLeft:"3%",color:"#bfbd87"}}></i><i class="fab fa-google-plus-g fa-lg" style={{marginLeft:"3%",color:"#bfbd87"}}></i><i class="fab fa-instagram fa-lg" style={{marginLeft:"3%",color:"#bfbd87"}}></i></center>
                    </div>
                    </div>
                    <div className="col-md-3 col-6">
                    <div className="container">
                        <img src={chef2} style={{width:"100%",height:"100%"}}/>
                        <center><h5>Rebeca Welson</h5></center>
                        <center><h6 style={{color:"gray"}}>Head Chef</h6></center>
                        <center><i class="fab fa-twitter fa-lg" style={{color:"#bfbd87"}}></i><i class="fab fa-facebook-f fa-lg" style={{marginLeft:"3%",color:"#bfbd87"}}></i><i class="fab fa-google-plus-g fa-lg" style={{marginLeft:"3%",color:"#bfbd87"}}></i><i class="fab fa-instagram fa-lg" style={{marginLeft:"3%",color:"#bfbd87"}}></i></center>
                    </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="container">
                        <img src={chef3} style={{width:"100%",height:"100%"}}/>
                        <center><h5>Kharl Branyt</h5></center>
                        <center><h6 style={{color:"gray"}}>Chef</h6></center>
                        <center><i class="fab fa-twitter fa-lg" style={{color:"#bfbd87"}}></i><i class="fab fa-facebook-f fa-lg" style={{marginLeft:"3%",color:"#bfbd87"}}></i><i class="fab fa-google-plus-g fa-lg" style={{marginLeft:"3%",color:"#bfbd87"}}></i><i class="fab fa-instagram fa-lg" style={{marginLeft:"3%",color:"#bfbd87"}}></i></center>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                    <div className="container">
                        <img src={chef4} style={{width:"100%",height:"100%"}}/>
                        <center><h5>Luke Simon</h5></center>
                        <center><h6 style={{color:"gray"}}>Chef</h6></center>
                        <center><i class="fab fa-twitter fa-lg" style={{color:"#bfbd87"}}></i><i class="fab fa-facebook-f fa-lg" style={{marginLeft:"3%",color:"#bfbd87"}}></i><i class="fab fa-google-plus-g fa-lg" style={{marginLeft:"3%",color:"#bfbd87"}}></i><i class="fab fa-instagram fa-lg" style={{marginLeft:"3%",color:"#bfbd87"}}></i></center>
                        <br/><br/>
                    </div>
                    </div>
                </div>  
                <Reservation/>                

                <div className="row" style={{margin:0,padding:0}}>
                <div className="col-md-12">
                <center><h1 id="about" className="subheading">Testimony</h1></center>
                <center><h1 style={{marginTop:"-8vw"}} id="abouth">Happy Customers</h1></center>
                </div>                    
                </div>    
                <div className="row" style={{margin:0,padding:0}}>
                    <div className="col-md-12">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className="row" style={{margin:0,padding:0}}>
                    <div className="col-md-4">
                    <div class="card">
                    <center><img class="card-img-top" id="ppimg" src="https://www.attractivepartners.co.uk/wp-content/uploads/2017/06/profile.jpg" alt="Card image cap"/></center>
                       <div class="card-body">
                       <center><h5 class="card-title">Preeti Goel</h5>
                       <p class="card-text">Best place to hangout with friends... Wonderful food, wonderful games n wonderful service...So just eat,play,drink,play n repeat..?</p>
                       <p>Customer</p></center>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card">
                    <center><img class="card-img-top" id="ppimg" src="https://www.irreverentgent.com/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg" alt="Card image cap"/></center>
                       <div class="card-body">
                       <center><h5 class="card-title">Aarya Verma</h5>
                       <p class="card-text">Best place to be with friends .. fried ice cream and sizzling brownie is just awesome.. there are some 200 games that you can play with your friends ..</p>
                       <p>Customer</p></center>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card">
                    <center><img class="card-img-top" id="ppimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8Wd0IWiGZZOrLiZc0U9aYtZbSXguQjliiFA&usqp=CAU" alt="Card image cap"/></center>
                       <div class="card-body">
                       <center><h5 class="card-title">Chiny krishna</h5>
                       <p class="card-text">Excellent food and service ! -Friendly staff (always with a smile on their faces ) -Excellent variety of coffee, coolers, shakes and starters.</p>
                       <p>Customer</p></center>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                   <div class="carousel-item">
                   <div className="row" style={{margin:0,padding:0}}>
                    <div className="col-md-4">
                    <div class="card">
                    <center><img class="card-img-top" id="ppimg" src="https://www.attractivepartners.co.uk/wp-content/uploads/2017/06/profile.jpg" alt="Card image cap"/></center>
                       <div class="card-body">
                       <h5 class="card-title">Preeti Goel</h5>
                       <p class="card-text">Best place to hangout with friends... Wonderful food, wonderful games n wonderful service...So just eat,play,drink,play n repeat..?</p>
                       <p>Customer</p>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card">
                    <center><img class="card-img-top" id="ppimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwLqjtiEWtXwCuxJxSc3DO9sx-nHDfn9E-Bw&usqp=CAU" alt="Card image cap"/></center>
                       <div class="card-body">
                       <center><h5 class="card-title">Aarya Verma</h5>
                       <p class="card-text">Best place to be with friends .. fried ice cream and sizzling brownie is just awesome.. there are some 200 games that you can play with your friends ..</p>
                       <p>Customer</p></center>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card">
                    <center><img class="card-img-top" id="ppimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcsjMZRq5tDcW-zaTDcZL01NOCrDYLglPqfQ&usqp=CAU" alt="Card image cap"/></center>
                       <div class="card-body">
                       <center><h5 class="card-title">Chiny krishna</h5>
                       <p class="card-text">Excellent food and service ! -Friendly staff (always with a smile on their faces ) -Excellent variety of coffee, coolers, shakes and starters.</p>
                       <p>Customer</p></center>
                    </div>
                    </div>
                    </div>
                    </div>      
                    </div>
                    <div class="carousel-item">
                    <div className="row" style={{margin:0,padding:0}}>
                    <div className="col-md-4">
                    <div class="card">
                    <center><img class="card-img-top" id="ppimg" src="https://www.attractivepartners.co.uk/wp-content/uploads/2017/06/profile.jpg" alt="Card image cap"/></center>
                       <div class="card-body">
                       <center><h5 class="card-title">Preeti Goel</h5>
                       <p class="card-text">Best place to hangout with friends... Wonderful food, wonderful games n wonderful service...So just eat,play,drink,play n repeat..?</p>
                       <p>Customer</p></center>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card">
                    <center><img class="card-img-top" id="ppimg" src="https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Madeline-Mann.jpeg" alt="Card image cap"/></center>
                       <div class="card-body">
                       <center><h5 class="card-title">Aarya Verma</h5>
                       <p class="card-text">Best place to be with friends .. fried ice cream and sizzling brownie is just awesome.. there are some 200 games that you can play with your friends ..</p>
                       <p>Customer</p></center>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card">
                    <center><img class="card-img-top" id="ppimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT16eO5W8VPjVFrkvG8n_2FQKjByMcbLtBF4A&usqp=CAU" alt="Card image cap"/></center>
                       <div class="card-body">
                       <center><h5 class="card-title">Chiny krishna</h5>
                       <p class="card-text">Excellent food and service ! -Friendly staff (always with a smile on their faces ) -Excellent variety of coffee, coolers, shakes and starters.</p>
                       <p>Customer</p></center>
                    </div>
                    </div>
                    </div>
                    </div>      
                    </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    </div>

                </div>
                </div><br/>
                <Blog/>

            </div>
        )
    }
}
export default Carasoul;