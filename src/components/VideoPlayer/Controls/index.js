import React, { useContext, useMemo } from 'react';
import { Text, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

import PropTypes from 'prop-types';
import Orientation from 'react-native-orientation';
import Slider from '@react-native-community/slider';

import {
  Overlay,
  Overlayset,
  OverlayControl,
  Icon,
  SliderContainer,
  Timer,
  Time,
  IconWrapper,
} from './styles';

import formatSeconds from '~/utils/getTime';

import FullScreenContext from '~/store/FullScreenContext';

export default function Controls({
  overlay,
  backward,
  forward,
  paused,
  togglePause,
  currentTime,
  duration,
  onSlide,
  youtubeSeekLeft,
  youtubeSeekRight,
}) {
  const { fullscreen, setFullScreen } = useContext(FullScreenContext);

  const formattedCurrentTime = useMemo(() => formatSeconds(currentTime), [
    currentTime,
  ]);
  const formattedDuration = useMemo(() => formatSeconds(duration), [duration]);

  function handleFullscreen() {
    if (fullscreen) {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscape();
    }

    setFullScreen(!fullscreen);
  }

  return (
    <Overlay>
      {overlay ? (
        <Overlayset overlay>
          <Icon name="backward" onPress={backward} size={25} />
          <Icon
            name={paused ? 'play' : 'pause'}
            onPress={togglePause}
            size={25}
          />
          <Icon name="forward" onPress={forward} size={25} />

          <SliderContainer>
            <Timer>
              <Time>{formattedCurrentTime}</Time>
              <IconWrapper>
                <Time>{formattedDuration}</Time>
                <TouchableOpacity onPress={handleFullscreen}>
                  <Text style={{ marginLeft: 8 }}>
                    <Icon name={fullscreen ? 'compress' : 'expand'} size={15} />
                  </Text>
                </TouchableOpacity>
              </IconWrapper>
            </Timer>

            <Slider
              maximumTrackTintColor="#fff"
              minimumTrackTintColor="#7159c1"
              thumbTintColor="#7159c1"
              value={currentTime / duration}
              onValueChange={onSlide}
            />
          </SliderContainer>
        </Overlayset>
      ) : (
        <Overlayset>
          <TouchableNativeFeedback onPress={youtubeSeekLeft}>
            <OverlayControl />
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={youtubeSeekRight}>
            <OverlayControl />
          </TouchableNativeFeedback>
        </Overlayset>
      )}
    </Overlay>
  );
}

Controls.propTypes = {
  overlay: PropTypes.bool.isRequired,
  backward: PropTypes.func.isRequired,
  forward: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired,
  togglePause: PropTypes.func.isRequired,
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  youtubeSeekLeft: PropTypes.func.isRequired,
  youtubeSeekRight: PropTypes.func.isRequired,
  onSlide: PropTypes.func.isRequired,
};
