let count = 0
let flag = false
const addOne = () => {
    count ++
    
    render()
}
const minusOne = () => {
      
    
        count--
    
    render()
}
const reset = () => {
    count = 0
    
    render()
}
const render = () => {
    const templateTwo = (
        <div>
        <h1>Count : {count}</h1>
        <button onClick ={addOne}>+1</button>
        <button onClick = {minusOne}>-1</button>
        <button onClick = {reset}>reset</button>
       
        </div>
    )
    
    ReactDOM.render(templateTwo, document.getElementById('root'));
}
render()