import React , { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Rafafel Pereira Filho',
            email: 'rafaelaspdaps@gmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'John Ray Sheldon',
                comment: 'Stunning!!'
            }, {
                nickname: 'Ana Julia Bezerra',
                comment: 'Foto linda! Onde foi tirada?'
            }]

        }, {
            id: Math.random(),
            nickname: 'Francisco Leandro Lima',
            email: 'FNLIMA@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            comments: [{
                nickname: 'Jorje Jesus',
                comment: 'PensativoPensativoPensativoPensativoPensativoPensativoPensativoPensativoPensativoPensativoPensativo...'
            }]
        }, {
            id: Math.random(),
            nickname: 'Hvitsark Lothbrook',
            email: 'vikng@gmail.com',
            image: require('../../assets/imgs/gate.jpg'),
            comments: [{
                nickname: 'Ubbe Lothbrook',
                comment: 'vakkert dette mesterverket en veldig gammel portsdaa'
            }]
        }
    
    ]
    }

    render() {
        return(

            <View style={styles.container} >
            <Header /> 
            <FlatList data={this.state.posts}
                      keyExtractor={item => `${item.id}`}
                      renderItem={({ item }) => 
                      <Post key={item.id} {...item}  />
                    }  /> 
        </View>
            
            )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed