import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
  useContext,
} from 'react';

import { StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
import PropTypes from 'prop-types';

import { Container, Black, BlackFullScreen } from './styles';

import FullScreenContext from '~/store/FullScreenContext';
import Controls from './Controls';

export default function VideoPlayer({ sample, uri }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(3600);
  const [paused, setPaused] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const { fullscreen } = useContext(FullScreenContext);

  const { addListener } = useNavigation();

  useEffect(() => {
    return addListener('blur', () => {
      setPaused(true);
    });
  }, [addListener]);

  const player = useRef();

  const overlayTimer = useCallback(() => {
    setTimeout(() => setOverlay(false), 3200);
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

  function handleLoad({ duration }) {
    setDuration(duration);
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

  function togglePause() {
    setPaused(!paused);
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
          source={sample || { uri }}
          paused={paused}
          ref={ref => {
            player.current = ref;
          }}
          resizeMode="cover"
          onLoad={handleLoad}
          onProgress={({ currentTime }) => setCurrentTime(currentTime)}
          style={{ ...StyleSheet.absoluteFill }}
        />

        <Controls
          overlay={overlay}
          backward={backward}
          forward={forward}
          paused={paused}
          togglePause={togglePause}
          currentTime={currentTime}
          duration={duration}
          onSlide={onSlide}
          youtubeSeekLeft={youtubeSeekLeft}
          youtubeSeekRight={youtubeSeekRight}
        />
      </VideoWrraper>
    </Container>
  );
}

VideoPlayer.defaultProps = {
  uri: '',
  sample: null,
};

VideoPlayer.propTypes = {
  uri: PropTypes.string,
  sample: PropTypes.number,
};
