const Stylecard={
       background:"#fff7e3"
  }
  //here we used destructueing 
 const RestCard=({resname,cuisine,img})=>{ /*  here we used destructuring */
       return(
            <div className="rescard" style={Stylecard}>

           
                  <img className="img" src={img}></img>

                 <h3 className="resname">{resname}</h3>
                 <h4>{cuisine}</h4>
                 <h4>4 stars</h4>
                 <h4>29 minutes</h4>

            </div>
       )
 }

 const Body=()=>{

     return(

           <div className="body">


                <div className="search">
                    <input placeholder="search food items"></input>
                    <button>enter</button>
                </div>


                <div className="rest-container">


                    <RestCard  resname="KFC"  cuisine="chicken , leg" img="data:image/jpeg;base64,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"/> 
                 <RestCard resname="Meghna foods" cuisine="north indian" img="https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg"/>  
                 <RestCard resname="harilal" cuisine="chinese pastries" img="https://content3.jdmagicbox.com/comp/patna/r9/0612px612.x612.190724052315.n3r9/catalogue/harilal-s-patliputra-industrial-area-patna-sweet-shop-home-delivery-al3pw0ceyv.jpg"/>
                 {/* props is shared as object */}
              {/* why do we need props for dynamic data shharing  there is something called destructuring */}
                     
                  


                </div>

             
   


           </div>

     )
       
      
 }

 export default Body
