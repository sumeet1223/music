import React from "react";
import { connect } from "react-redux";
import { render } from "react-dom";
import { MusicComponent } from "./MusicComponent";
import SearchComponent from "./SearchComponent";
import { getMusicData, setSearchItem } from "../actions";

class MusicFinder extends React.Component {
  constructor() {
    super();
    this.state = {
      musicList: []
    };
  }

  componentDidMount() {
    // this.props.getMusicList(); // uncomment this if you want to load results for a particular artist, have kept eminem as default
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.musicList !== this.props.musicList) {
      this.setState({ musicList: nextProps.musicList });
    }
  }
  renderMusicList() {
    let musicItem = this.state.musicList.map((musicItem, index) => {
      return <MusicComponent key={index} musicItem={musicItem} />;
    });
    return musicItem;
  }
  render() {
    return (
      <div>
        <SearchComponent handleChange={this.handleChange} setSearchItem={this.props.setSearchItem}/>
        <div className="music-items-wrapper">
          {this.props.musicList.length ? (
            <div>
              <div className="d-flex flex-wrap justify-content-between">
                {this.renderMusicList()}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMusicList: () => dispatch(getMusicData()),
    setSearchItem: searchItem => dispatch(setSearchItem(searchItem))
  };
}
function mapStateToProps(state) {
  return {
    musicList: state.musicList
  };
}

const MusicFinderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicFinder);

export default MusicFinderContainer;
