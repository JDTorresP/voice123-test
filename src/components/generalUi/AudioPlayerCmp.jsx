import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import AudioPlayer from 'material-ui-audio-player';


const muiTheme = createMuiTheme({});

const src = [
  'https://converter-audio-example-1.s3.eu-central-1.amazonaws.com/Russell%2C%2BMale%2B-%2BEnglish%2C%2BAustralian+(1)+(online-audio-converter.com).wav',
  'https://converter-audio-examples.s3.eu-central-1.amazonaws.com/Russell%2C+Male+-+English%2C+Australian.mp3'
];

export default class AudioPlayerCmp extends Component {
  
  render() {
    return (
      <div>
        <ThemeProvider theme={muiTheme}>
      <AudioPlayer
        width="300px"
        variation="primary"
        spacing={3}
        download={false}
        order="standart"
        preload="auto"
        src={src}
      />
    </ThemeProvider>
      </div>
    )
  }
}
