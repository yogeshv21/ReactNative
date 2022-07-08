import React from 'react';
import { View, TextInput, Button, Text } from "react-native"
import { Styles } from "../style/Styles"

const TxtInput = (props) => {
    
    const [validation, setValidation] = React.useState(false);

    console.log(props);
    const [userInp, setuserInp] = React.useState('');

    function inputValue(inputValue) {
        setuserInp(inputValue)
    };

    function onbtnpress(){
        if(userInp=== ''){
           setValidation(true)
        }
        else{
            props.btnPress(userInp)
           setValidation(false)
        }
        setuserInp('')
    };

    return (
       <View style={{
        backgroundColor:'white',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10, 
        }}>
        <View style={Styles.inp_btn_cont}>
            <TextInput value={userInp} onChangeText={inputValue} placeholder='Add Todo Here' style={Styles.inp_txt} />
            <Button color={'#0AA1DD'} onPress={onbtnpress} title='Add Todo' style={Styles.add_btn}/>
        </View>
        <Text style={{color:'red', alignSelf:'center'}}>{validation ? 'Please Enter Some Value':''}</Text>
       </View>
    )
};

export default TxtInput;