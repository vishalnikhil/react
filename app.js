  
  const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{id:"tag"},"i am an h1 tag"),React.createElement("h2",{},"i am an h2 tag")]))
  
  const root=ReactDOM.createRoot(document.getElementById("parent"));

  root.render(parent);

  //this is very complex thats why jsk was introduced
  
  
  
  
  
//   const heading=React.createElement("h1",{id:"heading" , class:"head"},"hello world from react");

//         const root=ReactDOM.createRoot(document.getElementById("root"));

//         root.render(heading);



        

        