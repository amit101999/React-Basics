const App = ()=>{
    //js code

    var arr = [1 , 2 , 3 , 4]
   var obj = {
    name :'amit',
    age : 23
   }
  
    // only jsx code will here
    return(
        <div>
             {/* to use js inside jsx use {}  */}
             {/* arr values will atuomatically be lopped over one by one  */}
            <p>arr values : {arr} </p>

            {/* prinitin arr values one by one */}
        {/* jsx only take expression which returns something some thats why we use map,forEach,filter */}
        {/* therefore we cant use foreach , while loops for rendering data */}
            {arr.map((item)=>(
                    <p>arr values is : {item}</p>
            ))}

            {/* obj */}
            <p>object name value : {obj.name}</p>
            <p>object age value : {obj.age}</p>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)