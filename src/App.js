
import React from 'react'
import './App.css';
import Square from './components/Square';



 class App extends React.Component {
    // constructor (props){
    //   super(props)
    //   this.state = {
    //     colors: []
    //   }

    // }

    state = {
          colors: []
        };
  
   componentDidMount(){
     setInterval(() => {
      this.randomColor()
     }, 1000);
     
   } 

 randomColor = () => {
   const newColors = [];
   let color = "";
   for(let i = 0; i < 25; i++){
    color = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256)  + ',' + Math.floor(Math.random() * 256)  + ')';
    newColors.push(color);
   }
   this.setState({
    ...this.state, colors: newColors
  }) 
  }

render(){
  return (
    <main>
        <div className="main">
        {this.state.colors.map((color, index) => <Square key={index}  setColor = {color}/>) }
        </div>
    </main>
  )
}
  
}



export default App;









