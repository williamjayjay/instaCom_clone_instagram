import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, 
    // Alert
 } from 'react-native'

class Comments extends Component {
    render() {
        let view = null
        if (this.props.comments) {
            view = this.props.comments.map((item, index) => {
                return (
                    <View style={styles.commentContainer} key={index} >
                        <Text style={styles.nickname} > {item.nickname}:</Text>
                        <Text style={styles.comment} > {item.comment}</Text>

                    </View>
                )
            })
        }

        return(
            <View style={styles.container} > 
                {view}
            </View>
        )

    }
}

const lateral = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    commentContainer: {
        flexDirection: 'row',
        marginTop: 5,

    },
    nickname: {
        marginHorizontal: 5,
        fontWeight: 'bold',
        color: '#444',
        // marginRight:3
    },
    comment: {
        color: '#555',
        width:320
    }
})

export default Comments