import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { receiveEntries, addEntry } from '../actions'
import { timeToString, getDailyReminderValue } from '../utils/helpers'
import { fetchCalendarResults } from '../utils/api'

class History extends Component {
//step1
  componentDidMount () {
    const { dispatch } = this.props

//step2
    fetchCalendarResults()
    //take all the entries and add them to the current state;
      .then((entries) => dispatch(receiveEntries(entries)))
      .then(({ entries }) => {
        if (!entries[timeToString()]) {
          dispatch(addEntry({
          //key value pair
            [timeToString()]: getDailyReminderValue()
          }))
        }
      })
      .then(() => this.setState(() => ({ready: true})))
  }
  //step3 re-render
  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.props)}</Text>
      </View>
    )
  }
}

//step4
//since the calendar state is living inside of the redux, map state to props, receive state
function mapStateToProps (entries) {
  return {
    entries
  }
}
//so we get the access to this.props.dispatch
export default connect(
  mapStateToProps,
)(History)