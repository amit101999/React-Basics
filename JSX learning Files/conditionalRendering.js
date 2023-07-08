const App = ()=>{
    const loggedIn = true
    const loggedOut = false
 return(
    <div>
{/*we use turnary operator and && because thes two return value which is not case of if else  */}

        <p>user is loggedIn : {loggedIn ? "yes" : "No"}</p>
        {/* print yes  */}
        
        {/* && always returns last truth value  */}
        <p>{loggedIn && "yes"} user is loggedIn</p>
        {/* prints yse */}

        <p>{"yes" && "YES"} user is loggedIn</p>
        {/* this prints the YES */}

        <p>user is loggedOut : {loggedOut && "yes"}</p>


        {/* js code will not print because condition is false */}
    </div>
 )
 }
ReactDOM.createRoot(document.getElementById('root')).render(<App />)

