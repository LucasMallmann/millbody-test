/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

import Video from 'react-native-video';

import {
  Container,
  Black,
  Overlay,
  Overlayset,
  OverlayControl,
} from './styles';

const mp4 = require('./sample.mp4');

export default function VideoPlayer() {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0.1);
  const [paused, setPaused] = useState(true);
  const [overlay, setOverlay] = useState(false);

  const player = useRef();

  function youtubeSeekLeft() {}

  function youtubeSeekRight() {}

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
            <Overlayset overlay />
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
