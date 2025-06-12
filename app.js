import React from "react";


import ReactDOM from "react-dom/client"; 

// const parent=React.createElement("h1",{id:"parent"},"this is direct from React");

const Component= ()=>(

       <div id="mainContainer">

   <h1 id="comp"> this is jsk component</h1>


       </div>

);

//what to do noq
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<Component/>);

