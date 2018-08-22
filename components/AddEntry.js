import React, { Component } from 'react'
import { View } from 'react-native'
import { getMetricMetaInfo } from '../utils/helpers'

//metric for everything we are tracking.
export default class AddEntry extends Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0,
  }
  increment = (metric) => {
    const { max, step } = getMetricMetaInfo(metric)

//get current state;
    this.setState((state) => {
    //specific property of the metric
      const count = state[metric] + step
//merge with the current state;
      return {
      //all state properties are staying the same;
        ...state,
        [metric]: count > max ? max : count,
      }
    })
  }
  decrement = (metric) => {
    this.setState((state) => {
      const count = state[metric] - getMetricMetaInfo(metric).step

      return {
        ...state,
        //make sure we are not going below zero;
        [metric]: count < 0 ? 0 : count,
      }
    })
  }
  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value
    }))
  }
  render() {
    return (
      <View>

      </View>
    )
  }
}