import React,{useState} from 'react'
import './home.css'
import logo from "./images/hplogo.png";

const Home = () => {


const [open, setopen] = useState()




  return (
    <div className='home'>
       
       

    <section className='sec1'>

        <div className={open ? "navbar open" : "navbar"}>

          <div className="navbaritem">
          
            <ul>
                <li> <a href='' >Home</a></li>
                <li> <a href='' >About</a></li>
                <li> <a href='' >Near By</a></li>
            </ul>


            <ul>
            <li> <a href='' className='tag_a' >login</a></li>
            </ul>

            </div>
          



        </div>

        <div className='nav_toggle' onClick={()=>setopen(!open)}>
        <i class="fa-sharp fa-solid fa-bars"></i>
          </div>

        <div className='img_container'>
            <img 
            className='logo'
            src={logo} 
            
            alt='' />

          </div>

        

    </section>








    <section className='sec2'>


        <ul>
        <li> <a href='' >Enter U ID</a></li>
        </ul>


    </section>







    <section className='sec3'>

        <ul >
        <li> <a href='' className='tag_a' >Running Game</a></li>
        </ul>


        <div className='card_div'>


                  <div class="card">
                    <div class="card-field">
                        <h1>this is card</h1>
                    </div>
                    <div className='card-btn-con'>
                        <button class="card-btn">Place A Bid</button>
                    </div>
                </div>

                <div class="card">
                    <div class="card-field">
                        <h1>this is card</h1>
                    </div>
                    <div className='card-btn-con'>
                        <button class="card-btn">Place A Bid</button>
                    </div>
                </div>

                <div class="card">
                    <div class="card-field">
                        <h1>this is card</h1>
                    </div>
                    <div className='card-btn-con'>
                        <button class="card-btn">Place A Bid</button>
                    </div>
                </div>


                </div>

    </section>

 


    <section className='sec4'>


<ul>
<li> <a href='' className='tag_a' >Our Partner</a></li>
</ul>


</section>



<section className='sec5'>


<ul>
<li> <a href='' >Address Name Phone number</a></li>
</ul>


</section>




    </div>
  )
}

export default Home