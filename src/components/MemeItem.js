import React,{Component} from 'react';
import {newMeme} from '../actions';
import {connect} from 'react-redux';
class MemeItem extends Component {
  constructor(props){
    super(props);

    this.state = {hovered:false};
  }

  postMeme(){
    console.log(this.props)
    const {text0, text1} = this.props;
    const memeObj = {
      template_id:this.props.meme.id,
      text0,
      text1
    }
    this.props.newMeme(memeObj);
  }

  render(){
    return (
    <div className="meme-item" onClick={()=>this.postMeme()} onMouseEnter={() => this.setState({hovered:true})} onMouseLeave={() => this.setState({hovered:false})}>
      <img className={this.state.hovered ? "meme-img darken-img" : "meme-img"} src={this.props.meme.url} alt={this.props.meme.name}/>
      <p className={this.state.hovered ? "meme-txt" : "no-txt"}>{this.props.meme.name}</p>
    </div>
    );
  }
}

export default connect(null,{newMeme})(MemeItem);
