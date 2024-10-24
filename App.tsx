import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Yup from 'yup'


const passwordgenerator = Yup.object().shape({//here we are defining the shape of schema 
  passwordLength: Yup.number().min(4,'password must be atleast 4 characters')
  .max(16,'enter password less than 16 characters')
  .required('password  is required')
})                                           //in min and max we pass two params 1 condition and second when the condtion hits then what message should be displayedyup.number means i am validating for the number i can use string as well
export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})