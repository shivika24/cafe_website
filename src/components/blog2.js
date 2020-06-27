import React, { Component } from 'react';
import img2 from './images/b3.jpg';
import img1 from './images/b1.jpg';
import img from './images/b2.jpg';
import img3 from './images/b4.jpg';
class Blog2 extends Component
{
  componentDidMount() {
    window.scrollTo(0, 0)
  }
    render()
    {
        return (
            <div>
            <div id="box-2" style={{backgroundImage: "url(https://www.photojaanic.com/blog/wp-content/uploads/sites/2/2017/07/food-photography-tips-photojaanic-3-1-1080x720.jpg)"}}>
            <center><h1 id="contacth">Blog<br/><br/></h1></center>
            </div><br/>
            <section>
			<div class="container">
				<div class="row">
          <div class="col-lg-8">
            <h2 class="mb-3">Rasawala Dhokla Recipe</h2>
            <p>Dhokla Rasawala is a simple dish made with some leftover dhokla that has lost all its moisture, this rasawala dhokla is an ideal way to serve it. Simmer the dhokla pieces in rasa just before serving and see the left over dhoklas magically transform to a new avatar and create a left over magic, “Dhokla Rasawala ”. Even the fresh dhoklas for that matter in this form taste equally good.Serve Rasawala Dhokla along with Gujarati Methi Thepla and Masala Chai for a filling and delicious breakfast with your family.</p>
            <h3>Recipe:-</h3>
            <ol>
                <li>To begin making the Rasawala Dhokla recipe, in a large bowl combine the salt, yogurt and besan, whisk it  together along with water to make a thick batter.</li>
                <li>Set the batter aside for 3 to 4 hours and allow it to ferment. </li>
                <li>After 3 to 4 hours, all the lemon juice, ginger garlic paste and enos fruit salt. Whisk well to combine.</li>
                <li>Prepare the steamer by preheating it with 1 cup water at its bottom. Grease the dhokla plates with oil.</li>
                <li>Pour the dhokla batter into each plate, filling only up to half its level.</li>
                <li>Steam for about 12 to 15 minutes on high heat with the lid covered, until the dhoklas are cooked, that when a tester like a clean knife when inserted into the centre comes out clean. Turn off the heat and allow it to rest for 5 minutes in the steamer.</li>
                <li>Take out the dholka plates from the steamer and allow it to cool completely before you can cut them into square or diamond pieces. Arrange them on a serving platter.</li>
            </ol>
            <p>
              <img src={img} alt="" class="img-fluid"/>
            </p>
            <div class="tag-widget post-tag-container mb-5 mt-5">
              <div class="tagcloud">
                <a href="#" class="tag-cloud-link">Food</a>
                <a href="#" class="tag-cloud-link">Wine</a>
                <a href="#" class="tag-cloud-link">Drink</a>
                <a href="#" class="tag-cloud-link">Dish</a>
              </div>
            </div>
            
            <div class="about-author d-flex p-4 bg-light">
              <div class="bio mr-5">
                <img src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg" alt="Image placeholder" class="img-fluid mb-4"/>
              </div>
              <div class="desc">
                <h3>Shivika Singla</h3>
                <p>I was born and raised in California and I currently live in Texas. As this may come as a shock to some of you I am currently 16 years old. I love my family more than anything in the world. And if it wasn’t for the constant love and support of my amazing parents I would be nothing and wouldn’t have been able to do what I did</p>
              </div>
            </div>


            <div class="pt-5 mt-5">
              <h3 class="mb-5 h4 font-weight-bold p-4 bg-light">07 Feedbacks</h3>
              <ul class="comment-list">
                <li class="comment">
                  <div class="vcard bio">
                    <img src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg" alt="Image placeholder"/>
                  </div>
                  <div class="comment-body">
                    <h3>John Doe</h3>
                    <div class="meta mb-2">Sept. 07, 2019 at 2:21pm</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                    <p><a href="#" class="reply">Reply</a></p>
                  </div>
                </li>

                <li class="comment">
                  <div class="vcard bio">
                    <img src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg" alt="Image placeholder"/>
                  </div>
                  <div class="comment-body">
                    <h3>John Doe</h3>
                    <div class="meta mb-2">Sept. 07, 2019 at 2:21pm</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                    <p><a href="#" class="reply">Reply</a></p>
                  </div>

                  <ul class="children">
                    <li class="comment">
                      <div class="vcard bio">
                        <img src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg" alt="Image placeholder"/>
                      </div>
                      <div class="comment-body">
                        <h3>John Doe</h3>
                        <div class="meta mb-2">Sept. 07, 2019 at 2:21pm</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                        <p><a href="#" class="reply">Reply</a></p>
                      </div>


                      <ul class="children">
                        <li class="comment">
                          <div class="vcard bio">
                            <img src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg" alt="Image placeholder"/>
                          </div>
                          <div class="comment-body">
                            <h3>John Doe</h3>
                            <div class="meta mb-2">Sept. 07, 2019 at 2:21pm</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                            <p><a href="#" class="reply">Reply</a></p>
                          </div>

                            <ul class="children">
                              <li class="comment">
                                <div class="vcard bio">
                                  <img src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg" alt="Image placeholder"/>
                                </div>
                                <div class="comment-body">
                                  <h3>John Doe</h3>
                                  <div class="meta mb-2">Sept. 07, 2019 at 2:21pm</div>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                  <p><a href="#" class="reply">Reply</a></p>
                                </div>
                              </li>
                            </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li class="comment">
                  <div class="vcard bio">
                    <img src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg" alt="Image placeholder"/>
                  </div>
                  <div class="comment-body">
                    <h3>John Doe</h3>
                    <div class="meta mb-2">Sept. 07, 2019 at 2:21pm</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                    <p><a href="#" class="reply">Reply</a></p>
                  </div>
                </li>
              </ul>
              
              <div class="comment-form-wrap pt-5">
                <h3 class="mb-5 h4 font-weight-bold p-4 bg-light">Leave a comment</h3>
                <form action="#" class="p-4 p-md-5 bg-light">
                  <div class="form-group">
                    <label for="name">Name *</label>
                    <input type="text" class="form-control" id="name"/>
                  </div>
                  <div class="form-group">
                    <label for="email">Email *</label>
                    <input type="email" class="form-control" id="email"/>
                  </div>
                  <div class="form-group">
                    <label for="website">Website</label>
                    <input type="url" class="form-control" id="website"/>
                  </div>

                  <div class="form-group">
                    <label for="message">Message</label>
                    <textarea name="" id="message" cols="30" rows="10" class="form-control"></textarea>
                  </div>
                  <div class="form-group">
                    <input type="submit" value="Post Comment" class="btn py-3 px-4 btn-primary"/>
                  </div>

                </form>
              </div>
            </div>
          </div> 

          <div class="col-lg-4 sidebar">
            <div class="sidebar-box">
              <form action="#" class="search-form">
                <div class="form-group">
                  <span class="icon icon-search"></span>
                  <input type="text" class="form-control" placeholder="Type a keyword and hit enter"/>
                </div>
              </form>
            </div>
            <div class="sidebar-box">
            	<h3>Category</h3>
              <ul class="categories">
                <li><a href="#">Breakfast <span>(6)</span></a></li>
                <li><a href="#">Lunch <span>(8)</span></a></li>
                <li><a href="#">Dinner <span>(2)</span></a></li>
                <li><a href="#">Desserts <span>(2)</span></a></li>
                <li><a href="#">Drinks <span>(2)</span></a></li>
                <li><a href="#">Wine <span>(2)</span></a></li>
              </ul>
            </div>

            <div class="sidebar-box">
              <h3>Popular Articles</h3>
              <div class="block-21 mb-4 d-flex">
                <img class="blog-img mr-4" src={img1}/>
                <div class="text">
                  <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div class="meta">
                    <div><a href="#"><span class="icon-calendar"></span> June 25, 2019</a></div>
                    <div><a href="#"><span class="icon-person"></span> Dave Lewis</a></div>
                    <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                  </div>
                </div>
              </div>
              <div class="block-21 mb-4 d-flex">
              <img class="blog-img mr-4" src={img2}/>
                <div class="text">
                  <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div class="meta">
                    <div><a href="#"><span class="icon-calendar"></span> June 25, 2019</a></div>
                    <div><a href="#"><span class="icon-person"></span> Dave Lewis</a></div>
                    <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                  </div>
                </div>
              </div>
              <div class="block-21 mb-4 d-flex">
              <img class="blog-img mr-4" src={img3}/>
                <div class="text">
                  <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div class="meta">
                    <div><a href="#"><span class="icon-calendar"></span> June 25, 2019</a></div>
                    <div><a href="#"><span class="icon-person"></span> Dave Lewis</a></div>
                    <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sidebar-box">
              <h3>Tag Cloud</h3>
              <ul class="tagcloud m-0 p-0">
                <a href="#" class="tag-cloud-link">Dish</a>
                <a href="#" class="tag-cloud-link">Food</a>
                <a href="#" class="tag-cloud-link">Lunch</a>
                <a href="#" class="tag-cloud-link">Menu</a>
                <a href="#" class="tag-cloud-link">Dessert</a>
                <a href="#" class="tag-cloud-link">Drinks</a>
                <a href="#" class="tag-cloud-link">Sweets</a>
              </ul>
            </div>

            <div class="sidebar-box">
            	<h3>Archives</h3>
              <ul class="categories">
              	<li><a href="#">January 2019 <span>(20)</span></a></li>
              	<li><a href="#">December 2018 <span>(30)</span></a></li>
              	<li><a href="#">Novemmber 2018 <span>(20)</span></a></li>
                <li><a href="#">September 2018 <span>(6)</span></a></li>
                <li><a href="#">August 2018 <span>(8)</span></a></li>
              </ul>
            </div>


            <div class="sidebar-box">
              <h3>Paragraph</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
            </div>
          </div>
        </div>
			</div>
		</section>



          </div>
        
        )
    }
}
export default Blog2;