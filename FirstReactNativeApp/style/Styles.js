import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    cont: {
      flex: 1,
      backgroundColor: '#E8F9FD',
    },
    inp_btn_cont: {
      backgroundColor: 'white',
      paddingHorizontal: 20,
      paddingVertical: 10,
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems: 'center'
    },
  
    inp_txt: {
      padding: 10,
      width: '75%',
      borderColor: 'white',
      borderWidth :1,
      fontSize: 20,
      backgroundColor:'white',
      borderRadius: 5,
      fontWeight: '100',
    },
  
    add_btn:{
      flex: 1,
      fontSize: 2,
    },

    // card_cont:{
    //   flex: 1,
    //   borderStartColor:'red'
    // },
  
    todo_card:{
      flexDirection: 'row',
      height: 150,
      borderRadius: 10,
      width: '90%',
      backgroundColor: 'white',
      elevation: 20,
      shadowColor: '#00000040',
      alignSelf: 'center',
      margin: 10,
      overflow: 'hidden',
      padding: 15,
    },
  
    imgCont: {
      height: '100%',
      width: '40%',
      backgroundColor: '#79DAE8',
      borderRadius: 10,
    },
  
    txtCont:{
      width: '60%',
      alignItems: 'center',
      justifyContent: 'center'
    },

    todo_txt:{
      fontSize:22,
      letterSpacing: 1.5,
      color: "black",
      marginBottom: 30
    },

    nav:{
       height: 60,
       paddingHorizontal: 20,
       width: '100%',
       backgroundColor:'white',
       alignItems: 'flex-start',
       justifyContent:'center',
       elevation: 20,
       shadowColor: '#00000080',
    },

    logo:{
      fontSize: 30,
      color: '#79DAE8',
      fontWeight: '500',
    }
  });
  