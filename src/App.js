import React, {Component} from "react";
import './style.css';
import cronometro from './assets/cronometro.png';

class app extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'START'
    }
    this.timer = null;
    this.ligar = this.ligar.bind(this);
    this.limpar = this.limpar.bind(this);
  }
  ligar(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'START';
    }else {
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.01;
        this.setState(state);
      }, 1);
      state.botao = 'STOP';
    }
    this.setState(state);
  }

  limpar(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;

    }else{
      let state = this.state;
      state.numero = 0;
      state.botao = 'START';
      this.setState(state);

    }
  }

  render(){
    return(
      <div className='container'>
        <img src={cronometro} className="img"/>
        <a className='timer'>{this.state.numero.toFixed(2)}</a>
        <div className='areaBtn'>
          <a className="botao" onClick={this.ligar}>{this.state.botao}</a>
          <a className='botao' onClick={this.limpar}>CLEAR</a>
        </div>
      </div>
    );
  }


  
}
export default app;

