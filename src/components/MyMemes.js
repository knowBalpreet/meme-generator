import React,{Component} from 'react';
import {connect} from 'react-redux'

class MyMemes extends Component {
  render(){
    return (
    <div>
      {this.props.myMemes.map((meme,index) => {
        return (
          <img src={meme.data.url} key={index} alt='my-meme' className='my-meme-img'/>
        )
      })}
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {myMemes:state.myMemes}
}

export default connect(mapStateToProps,null)(MyMemes);
