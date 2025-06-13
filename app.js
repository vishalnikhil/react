import React from "react";


import ReactDOM from "react-dom/client"; 


const Header= ()=>{

     return(
           
          <div className="header">

            {/* logo */}

            <div className="logo">

                  <img className="img-logo" src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg"></img>

            </div>



            {/* navbar */}


            <div className="navbar">

                <ul className="navitems" >
                     
                    <li className="navlist">Home</li>
                    <li className="navlist">About us</li>
                    <li className="navlist">Contact us</li>
                    <li className="navlist">Cart</li>
                    
                </ul>


            </div>


          </div>
     )

}

  const Stylecard={
       background:"#fff7e3"
  }

 const RestCard=({resname,cuisine})=>{
       return(
            <div className="rescard" style={Stylecard}>

           
                  <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC_HBGeynBdWgXk3jz4jvZykhECPo0BVI1_Q&s"></img>

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


                    <RestCard  resname="KFC"  cuisine="chicken , leg"/> 
                 <RestCard resname="Meghna foods" cuisine="north indian"/>  
                 {/* props of the object props */}

                     
                    
                        






                </div>

             
   


           </div>

     )
       
      
 }


  const Applayout=()=>{

     return(
          <div className=""> 


            <Header/>
            <Body></Body>
           </div>
     )

  };


  const root=ReactDOM.createRoot(document.getElementById("root"));

  root.render(<Applayout/>)


 









