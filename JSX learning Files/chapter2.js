const App = ()=>{
    //js code
    var myname = "ATUL"
  
    // only jsx code will here
    return(
        <div>
             {/* to use js inside jsx use {}  */}
            <p>hello my name is {myname}</p>
        </div>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)