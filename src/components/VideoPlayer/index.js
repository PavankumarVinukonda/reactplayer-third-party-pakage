import {Component} from 'react'
import ReactPlayer from 'react-player'
import {AiFillPlayCircle} from 'react-icons/ai'
import {MdControlCamera} from 'react-icons/md'

import {TiArrowLoopOutline, TiMediaPause} from 'react-icons/ti'
import './index.css'

class VideoPlayer extends Component {
  state = {
    isplaying: true,
    isLooping: false,
    showControlles: false,
  }

  onClickingPlayAndPause = () => {
    this.setState(prvState => ({
      isplaying: !prvState.isplaying,
    }))
  }

  onclikingLoop = () => {
    this.setState(prvState => ({
      isLooping: !prvState.isLooping,
    }))
  }

  onclikingShowControlls = () => {
    this.setState(prvState => ({
      showControlles: !prvState.showControlles,
    }))
    console.log('showing controlls')
  }

  render() {
    const {isplaying, showControlles} = this.state

    return (
      <div className="video-container">
        <h1 className="heading">Video Player</h1>
        <div className="responsive-container">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=qFLhGq0060w"
            playing={isplaying}
            loop="true"
            controls={showControlles}
          />
          <button
            className="button"
            type="button"
            onClick={this.onClickingPlayAndPause}
          >
            {isplaying ? (
              <TiMediaPause className="icon" />
            ) : (
              <AiFillPlayCircle className="icon" />
            )}
          </button>

          <button className="button" type="button" onClick={this.onclikingLoop}>
            <TiArrowLoopOutline className="icon" />
          </button>

          <button
            className="button"
            type="button"
            onClick={this.onclikingShowControlls}
          >
            <MdControlCamera className="icon" />
          </button>
        </div>
      </div>
    )
  }
}

export default VideoPlayer
