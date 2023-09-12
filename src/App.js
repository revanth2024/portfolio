// import logo from './logo.svg';
import './App.css';
import Typewriter from "typewriter-effect";
import resume from "./images/resume.pdf"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function App() { 
  const form = useRef();
  const sendEmail = (e) => {
      e.preventDefault();  
      emailjs.sendForm('service_5w2eg9h', 'template_4o66foh', form.current, '0rDS12dou2aLUaPK-')
        .then((result) => {
          alert("message sent successfully.")
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
 
  return (
      <div className="App">
      <nav className="navbar navbar-expand-lg" id='navbar'>
          <div className="container-fluid">
              <h3 id='logo' className='mb-0'>Portfolio</h3>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/" rel="noopener">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#about" rel="noopener">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#projects" rel="noopener">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#education" rel="noopener">Education</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active me-0" aria-current="page" href="#contact" rel="noopener">Contact</a>
                </li>               
              </ul>              
            </div>
          </div>
        </nav>

      <div id='herosection'>
        <div className='container-fluid'>
            <div className='row align-items-center justify-content-center'id='herosectionflex'>
                <div className='col-xl-6 col-lg-6 col-md-6'>
                    <div className='d-flex align-items-baseline py-lg-3'>
                        <h4 className='hello text-white'>Hello,I’m</h4>
                        <h1 className='myname text-white fw-semibold ps-3'>REVANTH</h1>
                    </div>
                    <div className='d-flex  align-items-baseline pb-lg-3'>
                        <h4 className='subrole text-white'>I’m a </h4>  
                        <h2 className='typedletter ps-3 fw-medium'>
                          <Typewriter
                              options={{
                                strings: ['Front-End Developer'],
                                autoStart: true,
                                loop: true,
                              }}/></h2>                        
                    </div>
                    <div className='d-flex  align-items-baseline pb-lg-3'>
                        <h5 className=' text-white text-start fw-normal lh-base' id='bannerabout'>This is my official portfolio to showcase my all works related to web development and designing.</h5>
                    </div>
                    <div className='pb-3'>
                        <a href='mailto:revanth2899@gmail.com' className='anchortag' rel="noopener">
                          <button className='d-flex' id='bannerbtn' target="_blank" >Hire me</button></a>
                    </div>
                    <div className='d-flex align-items-center pb-lg-3'>
                        <a href='https://github.com/revanth2024' target="_blank" rel="noopener" className='anchortag'><i className="fa-brands fa-github fa-xl socialicon"></i> </a>
                        <a href='https://www.linkedin.com/in/revanth-r-19936426b/' target="_blank" rel="noopener" className='anchortag'><i className="fa-brands fa-linkedin-in fa-xl socialicon"></i> </a>
                        <a href='https://wa.me/8056812955' target="_blank" rel="noopener" className='anchortag'><i className="fa-brands fa-whatsapp fa-xl socialicon"></i> </a>                      
                    </div>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 heroimage'>
                    <img src={require("./images/banner.png")}className='img-fluid'id='heroimage' alt=''></img>
                    <span className='spinnerimg'></span>
                </div>
            </div>
        </div>
    </div>
    
    <div className='container-fluid'id='about'>
            <div className='aboutheading pt-lg-5'>
                <h1 className='text-black fw-semibold mb-0'>About <span>me</span> </h1>
            </div>
            <div className='row align-items-lg-center'id='aboutsection'>
                <div className='col-lg-5 col-xl-5 col-md-6'>
                    <img src={require("./images/about.png")} className='img-fluid' alt='' id='aboutimg'></img>
                </div>
                <div className='col-lg-7 col-xl-7 col-md-6'>
                    <div className='mt-lg-5'>
                        <h5 className='text-start lh-lg about-us'>As a Dedicated Front End Web Developer with Entry level experience in creating visually appealing and user-friendly websites. Proficient in HTML, CSS, and JavaScript, React with a strong foundation in responsive design and cross-browser compatibility.</h5>    
                    </div>
                    <div className='text-start'id='aboutflex'>
                        <div className='d-flex align-items-baseline pt-5'id='nameflex'>
                            <h4 className='fw-bold'id='key'>Name</h4>
                            <h5 className='text-black'id='value'>Revanth  R</h5>
                          </div>
                          <div className='d-flex align-items-baseline pt-3'id='dobflex'>
                            <h4 className='fw-bold' id='key'>Date of birth</h4>
                            <h5 className='text-black' id='value'>28.10.1999</h5>
                          </div>
                          <div className='d-flex align-items-baseline pt-3'id='emailflex'>
                            <h4 className='fw-bold' id='key'>Email</h4>
                            <h5 className='text-black' id='value'>revanth2899@gmail.com</h5>
                          </div>
                          <div className='d-flex align-items-baseline pt-3'id='numberflex'>
                            <h4 className='fw-bold' id='key'>Mobile</h4>
                            <h5 className='text-black' id='value'>8056812955</h5>
                          </div>
                          <div className='d-flex align-items-baseline pt-3'id='addressflex'>
                            <h4 className='fw-bold' id='key'>Address</h4>
                            <h5 className='text-black' id='value'>No 8B, kumaran colony main road vadapalani - chennai</h5>
                          </div> 
                                                   
                    </div>
                    <div className='mt-lg-5' id='downloadbutton'>
                        <a href={resume}  target="_blank" rel="noopener" className='anchortagdownload'>
                          <button className='d-flex ' id='downloadbtn'>
                            <i className="fa-solid fa-download p-2"></i>Download CV</button></a>
                    </div>                    
                </div>
            </div>
        </div>

      <div className='skilssection'>
        <div className='container-fluid'>
            <div>
              <h1 className='fw-semibold text-white' id='skilsheading'>My <span className='spanstwo'>Skills</span></h1>
            </div>
            <div className='row py-xl-5 py-lg-5'>
              <div className='col-xl-3 col-lg-2 col-md-3 col-sm-3 py-3 logoicon'>
                  <img src={require("./images/figma.png")} alt="Avatar" className="img-fluid"
                  id='logoimg'></img>
                  <div className="middle">
                    <div className="text">Figma</div>
                  </div>
              </div>   
              <div className='col-xl-3 col-lg-2 col-md-3 col-sm-3 py-3 logoicon'>
                  <img src={require("./images/html.png")} className='img-fluid' alt="Avatar" id='logoimg'></img>
                  <div className="middle">
                    <div className="text">HTML</div>
                  </div>
              </div>
              <div className='col-xl-3 col-lg-2 col-md-3 col-sm-3 py-3 logoicon'>
                  <img src={require("./images/css.png")} className='img-fluid' alt='Avatar' id='logoimg'></img>
                  <div className="middle">
                    <div className="text">CSS</div>
                  </div>
              </div>
              <div className='col-xl-3 col-lg-2 col-md-3 col-sm-3 py-3 logoicon'>
                  <img src={require("./images/bootstrap.png")} className='img-fluid' alt='Avatar' id='logoimg'></img>
                  <div className="middle">
                    <div className="text">Bootstrap</div>
                  </div>
              </div>              
            </div>
            <div className='row py-xl-5 py-lg-5'id='skillsicontwo'>
              <div className='col-xl-3 col-lg-2 col-md-3 col-sm-3 py-3 logoicon'>
                  <img src={require("./images/js.png")} className='img-fluid' alt='Avatar' id='logoimg'></img>
                  <div className="middle">
                    <div className="text">JavaScript</div>
                  </div>
              </div>
              <div className='col-xl-3 col-lg-2 col-md-3 col-sm-3 py-3 logoicon'>
                  <img src={require("./images/jquery.png")} className='img-fluid' alt='Avatar' id='logoimg'></img>
                  <div className="middle">
                    <div className="text">JQuery</div>
                  </div>
              </div>
              <div className='col-xl-3 col-lg-2 col-md-3 col-sm-3 py-3 logoicon'>
                  <img src={require("./images/react.png")} className='img-fluid' alt='Avatar' id='logoimg'></img>
                  <div className="middle">
                    <div className="text">React</div>
                  </div>
              </div>
              <div className='col-xl-3 col-lg-2 col-md-3 col-sm-3 py-3 logoicon'>
                  <img src={require("./images/wordpress.png")} className='img-fluid' alt='Avatar' id='logoimg'></img>
                  <div className="middle">
                    <div className="text">Wordpress</div>
                  </div>
              </div>              
            </div>            
        </div>
      </div> 

      <div id='projects'>
        <div className='container-fluid'>
          <div className='projectheading'>
            <h1>Recent    <span>Projects</span></h1>
          </div>
          <div className='projects'>
              <figure className="snip1577">
              <img src={require("./images/reactmultipage.png")} alt="sample99" />
                <figcaption><h3>Camera Ecommerce Website</h3>
                  <h4>( React )</h4>
                </figcaption>
                <a href="https://pixelcamera.netlify.app/" target="_blank" rel="noopener"></a>
              </figure>
              <figure className="snip1577 ">
              <img src={require("./images/chatapp.png")} alt="sample99" />
                <figcaption><h3>Instagram Chattingapp</h3>
                  <h4>( React )</h4>
                </figcaption>
                <a href="https://instagramchatapp.netlify.app/" target="_blank" rel="noopener"></a>
              </figure>
              <figure className="snip1577">
              <img src={require("./images/mpbootstrap.png")} alt="sample99" />
                <figcaption><h3>Tattoo Shop Website</h3>
                  <h4>( Bootstrap )</h4>
                </figcaption>
                <a href="https://revanth2024.github.io/tattooshop/" target="_blank" rel="noopener"></a>
              </figure> 
          </div>
          <div className='projectstwo'>
              <figure className="snip1577">
              <img src={require("./images/spbootstrap.png")} alt="sample99" />
                <figcaption><h3>Restaurant Website</h3>
                  <h4>( Bootstrap )</h4>
                </figcaption>
                <a href="https://revanth2024.github.io/foodierestaurant/" target="_blank" rel="noopener"></a>
              </figure>
              <figure className="snip1577 ">
              <img src={require("./images/crudoperation.png")} alt="sample99" />
                <figcaption><h3>CRUD Operation </h3>
                  <h4>( JavaScript )</h4>
                </figcaption>
                <a href="https://revanth2024.github.io/crudoperationjs/" target="_blank" rel="noopener"></a>
              </figure>
              <figure className="snip1577">
              <img src={require("./images/api.png")} alt="sample99" />
                <figcaption><h3>Dictionary API Website</h3>
                  <h4>( JavaScript )</h4>
                </figcaption>
                <a href="https://revanth2024.github.io/dictionaryapi/" target="_blank" rel="noopener"></a>
              </figure> 
          </div>
          <div className='projectsthree'>
              <figure className="snip1577">
              <img src={require("./images/mphtml.png")} alt="sample99" />
                <figcaption><h3>Bicycle Multipage Webiste</h3>
                  <h4>( HTML $ CSS )</h4>
                </figcaption>
                <a href="https://revanth2024.github.io/bicyclewebsite/" target="_blank" rel="noopener"></a>
              </figure>
              <figure className="snip1577">
              <img src={require("./images/sphtml.png")} alt="sample99" />
                <figcaption><h3>Dog Pet Shop Website</h3>
                  <h4>( HTML $ CSS )</h4>
                </figcaption>
                <a href="https://revanth2024.github.io/petshop/" target="_blank" rel="noopener"> </a>
              </figure>
              {/* <figure className="snip1577">
              <img src={require("./images/api.png")} alt="sample99" />
                <figcaption><h3>Dictionary API Website</h3>
                  <h4>( Wordpress )</h4>
                </figcaption>
                <a href="/">git</a>
              </figure>  */}
          </div>          
        </div>
      </div>

      <div className='educationsection' id='education'>
        <div className='container-fluid'>
          <div className='educationheading'>
            <h1 className='text-white'>My <span className='spanstwo'>Education</span></h1>
          </div>
          <div className='row educationpart'>
            <div className='col-lg-6 col-xl-6' id='educationborder'>
              <div className='coursedivision'>
                  <h3 className='coursename'>Web Design & Development</h3>
                  <h5 className='centername'>Web D School</h5>
                  <p className='yearpassing'>( 2023 )</p>
              </div>
              <div  className='coursedivision'>
                  <h3 className='coursename'>B.Sc ( Mathematics )</h3>
                  <h5 className='centername'>Sacred Heart College , Dindigul</h5>
                  <p className='yearpassing'>( 2023 )</p>
              </div>
              <div  className='coursedivision'>
                  <h3 className='coursename'>HSC</h3>
                  <h5 className='centername'>ICI Govt Boys School, Tenkasi</h5>
                  <p className='yearpassing'>( 2015-2017 )</p>
              </div>
              <div className='coursedivision'>
                  <h3 className='coursename'>SSLC</h3>
                  <h5 className='centername'>ICI Govt Boys School, Tenkasi</h5>
                  <p className='yearpassing'>( 2013-2015 )</p>
              </div>
                  
            </div>
            <div className='col-lg-6 col-xl-6' id='educationborder'>
                  <h3 className='coursename'>Design & Development</h3>
                  <ul className='projectslist'>
                    <li>Instagram chat app was developed by React JS.</li>
                    <li>E-commerce multiPage website was developed by React JS.</li>
                    <li>Developed a football club registration form using HTML , CSS , Javascript.</li>
                    <li>Developed a Dictionary API using Javascript , we can see meanings and some informations.</li>
                    <li>Developed a food restaurant single page website using Bootstrap.</li>
                    <li>Developed a Tattoo shop Dynamic website using Bootstrap.</li>
                    <li>Developed a Bicycle multipage website using  HTML,CSS.</li>
                    <li>Developed a Dog petshop static website using HTML,CSS.</li>
                  </ul>
            </div>
          </div>
        </div>
      </div>


      <div id='contact'>
        <div className='container-fluid'>
            <div className='contactheading'>
              <h1>Contact <span>me</span></h1>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <input type="text" name="from_name"   placeholder='Your Name' className='inputtag' />
                    <input type="email" name="from_email"  placeholder='Your Email' className='inputtag'/>
                </div>
                <div className='secondformtag'>
                    <input type='number'  placeholder='Mobile Number' className='inputtag' name='mobile_number' ></input>
                    <input type='text'  placeholder='Your Subject' className='inputtag' name='your_subject' ></input>
                </div>
                <div>
                <textarea name="message" className="story"  rows="7" cols="89" placeholder='Your Messages'/>
                </div>
                <div className='contactbtnbox'>
                  <a href='/' rel="noopener">
                    <button className='contactbtn'>Submit</button>
                  </a>              
                </div>
            </form>
           
        </div>
      </div>

   </div>
  );
}

export default App;
