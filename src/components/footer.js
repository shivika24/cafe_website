import React, { Component } from 'react';
class Footer extends Component
{
    render()
    {
        return (
            <div>
                 <footer class="ftco-footer ftco-bg-dark ftco-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-6 col-lg-3">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Dice 'n' Dine</h2>
              <p>Name say’s it all, Experience Disconnect 2 connect. So put down the phones, tablets, and laptops for a while and get back to being socially interactive.</p>
              <i class="fab fa-twitter fa-lg" style={{color:"white"}}></i><i class="fab fa-facebook-f fa-lg" style={{marginLeft:"10%",color:"white"}}></i><i class="fab fa-instagram fa-lg" style={{marginLeft:"10%",color:"white"}}></i>
                
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Open Hours</h2>
              <ul class="list-unstyled open-hours">
                <li class="d-flex"><span>Monday</span><span>9:00 - 24:00</span></li>
                <li class="d-flex"><span>Tuesday</span><span>9:00 - 24:00</span></li>
                <li class="d-flex"><span>Wednesday</span><span>9:00 - 24:00</span></li>
                <li class="d-flex"><span>Thursday</span><span>9:00 - 24:00</span></li>
                <li class="d-flex"><span>Friday</span><span>9:00 - 02:00</span></li>
                <li class="d-flex"><span>Saturday</span><span>9:00 - 02:00</span></li>
                <li class="d-flex"><span>Sunday</span><span> 9:00 - 02:00</span></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
             <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Instagram</h2>
              <div class="thumb d-sm-flex">
	            	<a href="#" class="thumb-menu img" style={{backgroundImage: "url(https://i.pinimg.com/originals/6c/77/b3/6c77b3906592679daf55d688a962f432.jpg)"}}>
	            	</a>
	            	<a href="#" class="thumb-menu img" style={{backgroundImage: "url(https://twolovesstudio.com/wp-content/uploads/2017/05/99-Best-Food-Photography-Tips-5-1.jpg)"}}>
	            	</a>
	            	<a href="#" class="thumb-menu img" style={{backgroundImage: "url(https://cdn.filtergrade.com/wp-content/uploads/2016/10/03022009/Mowiekay3.png)"}}>
	            	</a>
	            </div>
	            <div class="thumb d-flex">
	            	<a href="#" class="thumb-menu img" style={{backgroundImage: "url(https://expertphotography.com/wp-content/uploads/2018/07/dark-food-photography-still-life.jpg)"}}>
	            	</a>
	            	<a href="#" class="thumb-menu img" style={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSweI_fDYW7X3jQnhayQjE1iYBioccSsCIw0w&usqp=CAU)"}}>
	            	</a>
	            	<a href="#" class="thumb-menu img" style={{backgroundImage: "url(https://www.canva.com/learn/wp-content/uploads/2018/06/FoodPhotographyProps34-tb-2640x1485.jpg)"}}>
	            	</a>
	            </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="ftco-footer-widget mb-4">
            	<h2 class="ftco-heading-2">Newsletter</h2>
            	<p>Far far away, behind the word mountains, far from the countries.</p>
              <form action="#" class="subscribe-form">
                <div class="form-group">
                  <input type="text" class="form-control mb-2 text-center" placeholder="Enter email address"/>
                  <input type="submit" value="Subscribe" class="form-control submit px-3"/>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
          Copyright ©2020 All rights reserved
            <p></p>
          </div>
        </div>
      </div>
    </footer>
            </div>
        )
    }
}
export default Footer;