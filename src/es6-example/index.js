import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const app = {
    title : 'Indecision App',
    subtitle : 'Office',
    options : []
}
const OnFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value
     if (option) {
         app.options.push(option)
         e.target.elements.option.value = ''
         render()
         
     }
     
     
}
const removeAll = () => {
    
    app.options = []
    render()

}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random()*app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

// const remove = () => {
    
//     const option = app.options.find((option, index)=> {
//         return option === option
//     })
//     app.options.splice(option,1)
//     render()
// }

const appRoot = document.getElementById('root')

const render = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle &&  <p>{app.subtitle}</p>}
            <button disabled = {app.options.length === 0} onClick = {onMakeDecision}>What should I do ?</button>
            <button onClick = {removeAll} >RemoveAll</button>
            <ol>
             
              {app.options.map((option,index) =>{
                  return (<li key={index}>{option}

                  </li>);
              })}
            </ol>
            {app.options.length > 0 ? <p>Here are your Options</p> : 'No Options'}
            <form onSubmit = {OnFormSubmit} >
            <input type="text" name = "option"/>
            <button>Add Option</button>
            </form>
        </div>
    )
    
    ReactDOM.render(template ,appRoot)
    
    
}
render()


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
