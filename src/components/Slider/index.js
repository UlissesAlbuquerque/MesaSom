import React, { useState, useEffect,useLayoutEffect  } from 'react'

import { Container, Indicator, Trail } from './styles'
import { PanGestureHandler, State } from 'react-native-gesture-handler'

import PropTypes from 'prop-types'

import Animated, { Value } from 'react-native-reanimated'
import reactotron from 'reactotron-react-native'

const Slider = ({
  style,
  indicatorProps,
  initialValue,
  minValue,
  maxValue,
  onValueChange,
  trailProps,
}) => {

  
  const { size } = indicatorProps
  const panSize = size + 20
  const offset = panSize / 2
  const [currentValue, setCurrentValue] = useState(0)
  const [indicatorPosition, setIndicatorPosition] = useState(0)
  const [containerHeight, setContainerHeight] = useState(0)
  const [translateY, setTranslateY] = useState(new Value(0))

  const remap = (x,inMin, inMax, outMin, outMax) =>{
    return ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
  }

  const handleHeightChange = (event) => {
    const { height } = event.nativeEvent.layout
    if (height) {
      setContainerHeight(height)
    }
  }

  const handlePanGestureEvent = (event) => {
    if (event.nativeEvent.state == State.ACTIVE) {
      let { translationY } = event.nativeEvent

      let newPos = indicatorPosition + translationY * -1
      let clampedPosition = clamp(newPos + offset, 0, containerHeight)
      handleNewPosition(clampedPosition)
      let newTranslation = (clampedPosition - (indicatorPosition + offset)) / -1
      setTranslateY(newTranslation)
    }
  }

  const handlePanGestureState = ({ nativeEvent }) => {
    setTranslateY(0)
    if (nativeEvent.state == State.END) {
      setIndicatorPosition(indicatorPosition + translateY * -1)
    }
  }

  const handleNewPosition = (newPos) => {
    if (newPos !== null && newPos !== undefined) {
      let newValue = remap(newPos,0, containerHeight, minValue, maxValue)
      if (!Number.isNaN(newValue) && Number.isFinite(newValue)) {
        setCurrentValue(newValue)
      }
    }
  }

  useLayoutEffect(() => {
    if (initialValue !== null && initialValue !== undefined) {
      if (initialValue >= minValue && initialValue <= maxValue) {
        let newPosition = remap(initialValue, minValue, maxValue, 0, containerHeight)
        setTranslateY(0)
        setIndicatorPosition(newPosition - offset)
      }
    }
  }, [initialValue, containerHeight])

  useEffect(() => {
    handleNewPosition(indicatorPosition + offset)
  }, [indicatorPosition])

  useEffect(() => {
    onValueChange(currentValue)
  }, [currentValue])

  useEffect(() => {

  }, [])

  return (
    <Container style={style}>
      <Trail onLayout={handleHeightChange} {...trailProps}>
        <PanGestureHandler
          onGestureEvent={handlePanGestureEvent}
          onHandlerStateChange={handlePanGestureState}
        >
          <Animated.View
            style={{
              position: 'absolute',
              bottom: indicatorPosition,
              width: panSize,
              height: panSize,
              alignSelf: 'center',
              display: 'flex',
              justifyContent: 'center',
              transform: [{ translateY }],
            }}
          >
            <Indicator {...indicatorProps} />
          </Animated.View>
        </PanGestureHandler>
      </Trail>
    </Container>
  )
}

/**
 * Create a function that maps a value to a range
 * @param  {Number}   inMin    Input range minimum value
 * @param  {Number}   inMax    Input range maximum value
 * @param  {Number}   outMin   Output range minimum value
 * @param  {Number}   outMax   Output range maximum value
 * @return {function}          A function that converts a value to a range
 */
function createRemap(inMin, inMax, outMin, outMax) {
  return function remaper(x) {
    // return clamp(((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin,outMin, outMax)
    
  }
}

/**
 * Create a function that maps a value to a range
 * @param  {Number}   number    Input range minimum value
 * @param  {Number}   min    Input range maximum value
 * @param  {Number}   max   Output range minimum value
 * @return {function}  A function that clamps a value between a range
 */
function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max))
}

Slider.defaultProps = {
  indicatorProps: {
    size: 30,
  },
  minValue: 0,
  maxValue: 255,
  onValueChange: () => {},
}


export default Slider
