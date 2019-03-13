import React from "react";
import "./controller.css";
import {playMode } from '../actions'
import {connect} from 'react-redux'
import Keyboard from "./keyboard"
import Envelope from "./envelope"
import Volume from "./volume"

import Tone from 'tone'
console.log(Tone.Transport.seconds.toFixed(2))


export class Controller extends React.Component {
  playMode(mode) {
    console.log('hi')
    if (this.props.mode === "creation") {
    this.props.dispatch(playMode(mode))
    console.log(Tone.Transport.seconds.toFixed(2))
    Tone.Transport.toggle()
  } else if (this.props.mode === "play") {
    this.props.dispatch(playMode("creation"))
    console.log(Tone.Transport.seconds.toFixed(2))
    Tone.Transport.toggle()
  }
  

  }
  render(){
    return (
      <div className="controller">
        <Envelope />
        <Keyboard />
        <Volume />
        <input id="play" type="button" onClick={e => {this.playMode("play")}} />
      </div>
    )
  }
}


Controller.defaultProps = {
  mode: "creation"
};

const mapStateToProps = state => ({
  mode: state.sequencer.mode
});

export default connect(mapStateToProps)(Controller);
