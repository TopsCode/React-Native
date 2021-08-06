import React from 'react'
import { Text, Button } from 'react-native'

class Counter extends React.Component {
    state = {
        counter: 0
    }

    render() {
        
        return (
            <>
                <Text>{this.state.counter}</Text>
            </>
        )
    }
}