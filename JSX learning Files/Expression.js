// js expression
const sum = ()=>{
    var a = 10 + 20;
    return a;
}

//jsx expression
const exp = <h1>hello from jsx expression</h1>

 // only jsx code will here
 const App = ()=>{
    // if we dont use () after return then it will not return anything because ,() makes single expression
 return(
    <div>
         {/*  NOTE : to use JS or JSX expression then the JS or JSX expression must 
          return some value otherwise it will not render anything   */}
         {/* to use js inside jsx use {}  */}
         {/* js expression */}
        <p>sum is : {sum()}</p>

        {/* jsx expression */}
        <p>{exp}</p>
    </div>
)
 }
ReactDOM.createRoot(document.getElementById('root')).render(<App />)