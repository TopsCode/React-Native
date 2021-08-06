import React,{useState} from 'react'
import { View, Text, Button } from 'react-native'

const CountFuncComp = () => {
    // useState => hook => only inside function component
    // [variable, function]
    // destructuring 
    const [count, setCount] = useState(10)
    const increment=()=>{
        setCount(count+1)
    }

    return (
        <View>
            <Text>Count : {count}</Text>
            <Button title="Increment"
                    onPress={increment}></Button>
        </View>
    )
}

export default CountFuncComp
