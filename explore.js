import React from 'react'

export default function Explore() {
  return (
    <div className='col-md-10'>
      <form class="d-flex" style={{marginLeft:'30%',paddingTop:'2%'}}>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      </form>
        
     <h5 style={{marginLeft:"30%",paddingTop:"2%"}}>Categories</h5>

        <div className='fan' style={{marginLeft:'60%',height:'600px',width:'1000px',paddingTop:'2%'}}>
        <div class='row'>

          <div class='col-md-3'>
         <div class="card">
  <img src='https://cdn.sharechat.com/326a3bb_1636059522643_sc.jpeg' alt="..."/>
</div>
         </div>
        
         <h5>Bakthi Special</h5>


         <div class='col-md-3'>
         <div class="card">
  <img src='https://cdn4.sharechat.com/20a847eb_1697611841250_sc.webp' alt="..."/>
</div>
         </div>
         <h5>astrology</h5>

         <div class='col-md-3'>
         <div class="card">
  <img src='https://cdn.sharechat.com/37f8eb45_1673249299815_sc.png' alt="..."/>
</div>
         </div>
         <h5>Cultural Tradition</h5>

</div>
<div style={{marginLeft:'10%'}}><button type="button" class="btn btn-primary">See more</button>
</div>
         </div>

         
   </div>

       

     
       
  )
}