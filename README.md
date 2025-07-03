parecel is very powerful
package-json

i can use vite in the place of parcel

root.render

react alone is not powerful but the things react use makes it powerful like the parcel

hashing concept

props

and till now i know hooks , useState  

diff algo is also something that makes react faster

old virtual dom gets compared with current virtual dom and then updates

this algo comes under React fiber --- this finds the new diff and updates the dom


vitual dom is an object

react doesnt touch the real dom so much

react is fast because it does efficient dom manipulation ( virtual dom ) how-react fibre learn it

useState return an array you can destructure it on fly

react through virtual dom keeps ui layer and data layer in sync 


..microservice architecture // monolitic

why microserives  // single responsibility 

   all the services talk to each other in microservice 

    you can write each service in different lang and it gets integrated

different serives can be held at different ports


shimmer ui-- we show fake cards before actuall api is called and data is retrived
it shows the skeleton that will be getting actual data after api is called   (conditonal rendering)

  useeffect==cors error

swiggy ,zomato, yt alll uses it

===

since the login btn is a const how does it gets updated as logout ..this breaks the rule right no when you call the onclick func then the whole component in which the btn is present gets re rendered and now the btn variable has a different value this is beauty of reach ,amazing isn't it

only then button compenend gets re render not the whole page,thats cool and now this is the beauty of useState


  reconsilation algorithms(effective dom manipulations)
    and dont forget Parcel is a beast :) <3000 (tree shaking)

    useeffect is called after the body is render if you dont pass the empty object then the usestate will be callled after every time the bosy renders but if there is an empty dependenciy array then useeffect is called only in initial render

    if we pass something in the dependency array then when that variable is changed then only the usestate is called, hence the useState is caleed every time this dependency array object changes



    we will use react router dom library for routes

    outlet given to us by raect-router dom

    children concept when we want the navbar component to be always present and the body changes we use outlet

    oulet gets replaced by the component we want to render when the specific children routes is triggered

    never use a anchor tag while redirecting to some other page beacuse it refreshes the whole page  always use Link given to us by react

     link tag is same as the anchor tag synatx wise and we us to="..."  ...have the route where we want to go and it doest not re renders the page
       only the components refreses that why "WE CALL REACT SINGLE PAGE APPLICATION"
       behind the scene react use link as a anchor tag only because browsers dont unsertstabt it right so link is finally conver to a tag by ract router dom

       how to give dynamic path to a rouet "localhost:1234/:dynamic"

         here dynamic will be replace with the route we want to be here dynamically

         lect 7 teaches api call too learn it 

         learn about single responsiblity principle which react uses each component should have only single responsibility







