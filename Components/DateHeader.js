import React from 'react'
import { Text } from 'react-native'

//stateless functional component
//import this function on the AddEntry.js
export default function DateHeader ({ date }) {
  return (
    <Text>
      {date}
    </Text>
  )
}
