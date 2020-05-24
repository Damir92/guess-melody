import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AudioPlayer from "./audio-player.jsx";

configure({adapter: new Adapter()});

const mock = {
  song: {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
};

const onClick = jest.fn();
const {song} = mock;

const mockEvent = {
  preventDefault() {}
};

const audioPlayer = mount(<AudioPlayer
  isPlaying={false}
  onPlayButtonClick={onClick}
  src={song.src}
/>);

const button = audioPlayer.find(`.track__button`);

window.HTMLMediaElement.prototype.pause = () => {};
audioPlayer.setState({isLoading: false});

it(`Change state to play after onClick`, () => {
  button.simulate(`click`, mockEvent);

  expect(audioPlayer.state(`isPlaying`)).toEqual(true);
});

it(`Change state to pause after onClick`, () => {
  button.simulate(`click`, mockEvent);

  expect(audioPlayer.state(`isPlaying`)).toEqual(false);
});
