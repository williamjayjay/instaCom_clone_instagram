import React, { Component } from 'react'
import {
  View,
  // Text,
  // StyleSheet,
  // Platform,
  // Image
} from 'react-native'

import Header from './src/components/Header'
import Post from './src/components/Post'

export default class App extends Component {
  render(){

    const comments = [{
      nickname: 'Joana Stark',
      comment: 'Excelente Foto!'
    }, {
      nickname: 'Filipe Ret',
      comment: 'Não quero só metade, quero mais eu quero em dobro!'
    }

  
  ]

    return(
      <View style={{ flex: 1 }}>
        <Header/>
        <Post image={ require('./assets/imgs/fence.jpg') } 
              comments={comments} />
      </View>

    )
  }
} 
