import React, { Component } from "react";
import { View } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    console.log("Calling component will mount");
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.reduce((jsx, album) => {
      jsx.push(<AlbumDetail key={album.title} album={album} />);
      return jsx;
    }, []);
  }

  render() {
    return <View>{this.renderAlbums()}</View>;
  }
}

export default AlbumList;
