import React, { Component } from 'react';
import AddOption from './Components/AddOption'
import Options from './Components/Options'
import Action from './Components/Action'
import Header from './Components/Header'
import OptionModal from './Components/OptionModal'
import './App.scss';




class App extends Component {
  state = {
    options: [],
    selectedOption : undefined
  }
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }

  handlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNumber]
    this.setState(() =>({selectedOption : option}))
    

  }
  handleAddOption = (option) => {
    if (!option) {
      return 'enter Something'
    } else if (this.state.options.includes(option)) {
      return `'${option}' already exists`
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }))


  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option
      })
    }))
  }
  handleSelectedOption = () => {
    this.setState(()=>({selectedOption : undefined}))
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
      }
    }
    catch (e) {

    }


  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }






  render() {

    const subtitle = 'Put Your life in the hands of Computer'



    return (
      <div>
        <Header subtitle={subtitle}/>
        <div className = 'container'>
        <Action hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick} />
          <div className = 'widget'>
        <Options options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        </div>
          </div>
        <OptionModal selectedOption = {this.state.selectedOption}
        handleSelectedOption = {this.handleSelectedOption} >
        
        </OptionModal>
      </div>
    );
  }
}




export default App;
