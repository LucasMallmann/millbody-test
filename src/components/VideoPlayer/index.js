import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import {
  StyleSheet,
  TouchableNativeFeedback,
  Text,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import Orientation from 'react-native-orientation';

import getTime from '~/utils/getTime';

import {
  Container,
  Black,
  Overlay,
  Overlayset,
  OverlayControl,
  Icon,
  SliderContainer,
  Timer,
  Time,
  IconWrapper,
  BlackFullScreen,
} from './styles';

// const mp4 = require('./sample.mp4');

export default function VideoPlayer() {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(3600);
  const [paused, setPaused] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const { addListener } = useNavigation();

  useEffect(() => {
    return addListener('blur', () => {
      setPaused(true);
    });
  }, [addListener]);

  const formattedDuration = useMemo(() => getTime(duration), [duration]);
  const formattedCurrentTime = useMemo(() => getTime(currentTime), [
    currentTime,
  ]);

  const player = useRef();

  const overlayTimer = useCallback(() => {
    setTimeout(() => setOverlay(false), 2000);
  }, [setOverlay]);

  const lastTap = useRef(null);

  const handleDoubleTap = ({ doubleTapCallback, singleTapCallback }) => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 200;

    if (lastTap.current && now - lastTap.current < DOUBLE_PRESS_DELAY) {
      doubleTapCallback();
    } else {
      lastTap.current = now;
      setTimeout(() => {
        singleTapCallback();
      }, DOUBLE_PRESS_DELAY);
    }
  };

  function handleFullscreen() {
    if (fullscreen) {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscape();
    }

    setFullscreen(!fullscreen);
  }

  function youtubeSeekLeft() {
    handleDoubleTap({
      doubleTapCallback: () => {
        player.current.seek(currentTime - 5);
      },
      singleTapCallback: () => {
        setOverlay(true);
        overlayTimer();
      },
    });
  }

  function youtubeSeekRight() {
    handleDoubleTap({
      doubleTapCallback: () => {
        player.current.seek(currentTime + 5);
      },
      singleTapCallback: () => {
        setOverlay(true);
        overlayTimer();
      },
    });
  }

  function onSlide(slide) {
    const value = slide * duration;
    player.current.seek(value);
    setCurrentTime(value);
    clearTimeout(overlayTimer);
    overlayTimer();
  }

  function backward() {
    player.current.seek(currentTime - 5);
    clearTimeout(overlayTimer);
    overlayTimer();
  }

  function forward() {
    player.current.seek(currentTime + 5);
    clearTimeout(overlayTimer);
    overlayTimer();
  }

  const VideoWrraper = useMemo(() => {
    if (!fullscreen) {
      return Black;
    }

    return BlackFullScreen;
  }, [fullscreen]);

  return (
    <Container>
      <VideoWrraper fullscreen={fullscreen} elevation={1}>
        <Video
          fullscreen={fullscreen}
          source={{
            uri:
              'https://d1rfq3h2na8ms8.cloudfront.net/editorial/2018/12-11/Rn8KKQBy-medium.mp4',
          }}
          paused={paused}
          ref={ref => {
            player.current = ref;
          }}
          resizeMode="cover"
          onLoad={({ duration }) => setDuration(duration)}
          onProgress={({ currentTime }) => setCurrentTime(currentTime)}
          style={{ ...StyleSheet.absoluteFill }}
        />

        <Overlay>
          {!overlay ? (
            <Overlayset overlay>
              <Icon name="backward" onPress={backward} size={25} />
              <Icon
                name={paused ? 'play' : 'pause'}
                onPress={() => setPaused(!paused)}
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
                        <Icon
                          name={fullscreen ? 'compress' : 'expand'}
                          size={15}
                        />
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
      </VideoWrraper>
    </Container>
  );
}
