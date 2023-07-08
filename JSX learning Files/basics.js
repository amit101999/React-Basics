
// js code using react -----
// const imageTag = React.createElement("img",{src:"https://files.codingninjas.in/coding-ninjas-24647.png"});

// react jsx code ------- this code is converted React.createElement() by bable
// const headingTag = <h1>hello</h1>

// const tagsUsingFragmnet = <React.Fragment>
//         <div>hello</div>
//         <p>my name is amit</p>
//             </React.Fragment>

// const EmptyFragmnet = <>
// <div>hello</div>
// <p>my name is amit</p>
//     </>


// rendering in the react virtual Dom
// ReactDOM.createRoot(document.getElementById('root')).render(tagsUsingFragmnet)



// react fuctional component-----

// always mention component  first letter in Captial so that browser can differentiate 
// react component and native code 
// if we dont mention capital letter it will not render on the page

// react component
// function App(){
//     return(
//     <>
//         <div>hello</div>
//         <p>my name is amit from react </p>
//      </>
//     )
// }

// using arrow function
// const App = ()=>{
//     return(
//     <>
//         <div>hello</div>
//         <p>my name is amit from react </p>
//      </>
//     )
// }

// using arrow function witout using retrun , arrow function automatically return if there is no curly braces
//  and return keyword mentioned
// const App2 = ()=>
//     (<>
//         <div>hello</div>
//         <p>my name is amit from react </p>
//      </>)

//rending using react component
// ReactDOM.createRoot(document.getElementById('root')).render(App()) // App() react consider it as a function
// ReactDOM.createRoot(document.getElementById('root')).render(<App2 />) 
// <App /> now react consider as component


// multiple components

const Heading = ()=>(<>
        <div>heading</div>
        <h1> Heading Tag</h1>
     </>)

const Paragraph = ()=>(<>
    <div>paragraph</div>
    <p>Paragraph Tag </p>
 </>)

ReactDOM.createRoot(document.getElementById('root')).render(<><Heading /><Paragraph /></>) 
