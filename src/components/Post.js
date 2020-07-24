import React, { Component } from 'react' 
import { StyleSheet, View, Image, Dimensions } from 'react-native'

import Autor from './Autor'
import Comments from './Comments'
import AddComment from './AddComment'

class Post extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image} />
                <Autor email={this.props.email} nickname={this.props.nickname} />
                <Comments comments={this.props.comments} />
                <AddComment />

            </View>
        )
    }
}

const lateral = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    image: {
        width: lateral,
        height: lateral * 3 / 4,
        resizeMode: 'contain' 
    }
})

export default Post