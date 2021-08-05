import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

class CountClassComp extends Component {
        // initialize state 
    state={
        count : 10
    }

    increment=()=>{
            // setState => to change state value 
            this.setState({
                count : this.state.count+1
            })   
    }

    render() {
        return (
            <View>
                 <Text>Class Count : {this.state.count}</Text>
             <Button title="Increment"
                    onPress={this.increment}></Button>        
            </View>
        )
    }
}

export default CountClassComp
