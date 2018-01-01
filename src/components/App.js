import React,{Component} from 'react';
import {connect} from 'react-redux';
import '../styles/index.css';
import MemeItem from './MemeItem';

import {Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {memeLimit:10,text0:'',text1:''};
  }
  render(){
    return (
    <div>
      <h2><u>Welcome to the MEME Generator!</u></h2>
      <h4><i>Write Some Text</i></h4>
      <Form inline>
        <FormGroup>
          <ControlLabel>Top</ControlLabel>
          {' '}
          <FormControl type='text' onChange={e=>this.setState({text0:e.target.value})}></FormControl>
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Bottom</ControlLabel>
          {' '}
          <FormControl type='text' onChange={e=>this.setState({text1:e.target.value})}></FormControl>
        </FormGroup>

      </Form>
      {this.props.memes.slice(0,this.state.memeLimit).map((meme,index)=>{
        return (
          <MemeItem key={index} meme={meme} />
        )
      })}
      <div className="meme-button" onClick={()=>this.setState({memeLimit:this.state.memeLimit+10})}>Load 10 more memes ... </div>
    </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps,null)(App);
