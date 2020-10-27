import React,{Component, Fragment} from 'react'
import './style1.css';
import {CSSTransition} from 'react-transition-group'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      show:true
    }
    this.handleToggle=this.handleToggle.bind(this)
  }
  render(){
    // appear在首次刷新时也会产生动画
    return (
      <Fragment>
        <CSSTransition
        in={this.state.show}
        timeout={1000}
        classNames='fade'
        unmountOnExit
        onEntered={(el)=>{el.style.color='blue'}}
        appear={true}
        >
          <div>hello</div>
        </CSSTransition>
        
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    )
  }
  handleToggle(){
    this.setState({
      show:this.state.show?false:true
    })
  }
}
export default App