/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

import Video from 'react-native-video';
// import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  Black,
  Overlay,
  Overlayset,
  OverlayControl,
  Icon,
} from './styles';

const mp4 = require('./sample.mp4');

const styleShit = {
  color: '#fff',
  flex: 1,
  textAlign: 'center',
  textAlignVertical: 'center',
  fontSize: 25,
};

export default function VideoPlayer() {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0.1);
  const [paused, setPaused] = useState(true);
  const [overlay, setOverlay] = useState(false);

  const player = useRef();

  function youtubeSeekLeft() {}

  function youtubeSeekRight() {}

  function backward() {}

  function forward() {}

  return (
    <Container>
      <Black>
        <Video
          source={mp4}
          paused={paused}
          ref={ref => {
            player.current = ref;
          }}
          resizeMode="cover"
          onLoad={() => {}}
          onProgress={() => {}}
          style={{ ...StyleSheet.absoluteFill }}
        />

        <Overlay>
          {!overlay ? (
            <Overlayset overlay>
              <Icon name="backward" onPress={backward} />
              <Icon
                name={paused ? 'play' : 'pause'}
                onPress={() => setPaused(!paused)}
              />
              <Icon name="forward" onPress={forward} />
            </Overlayset>
          ) : (
            <Overlayset>
              <TouchableNativeFeedback>
                <OverlayControl />
              </TouchableNativeFeedback>
              <TouchableNativeFeedback>
                <OverlayControl />
              </TouchableNativeFeedback>
            </Overlayset>
          )}
        </Overlay>
      </Black>
    </Container>
  );
}
