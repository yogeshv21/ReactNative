import { StyleSheet } from "react-native"

export const Styles = StyleSheet.create({

    container: {
        backgroundColor: 'black',
        // flex: 1,
        height: '85%',
        alignItems:'center',
        justifyContent: 'space-evenly',
    },

    nav:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: '10%',
        backgroundColor: 'black',
    },

    title:{
      paddingHorizontal: 25,
      paddingVertical: 10 ,
    //   height: 60,
      backgroundColor: 'white',
      elevation: 19,
      shadowColor: '#00000052',
      fontWeight: '500',
    },

    title_txt:{
        color: 'black',
        fontSize: 35,
        alignSelf: 'center',
    },
      
    slideWraper:{
        width: 300,
        height: 300,
        marginTop: 30
    },

    imageWraper:{
        height:'100%',
        width: '100%',
        borderRadius: 200,
    },

    title_artist_cont:{
       alignItems: 'center',
       marginVertical: 10 ,
    },

    slideBarCont:{
      width: '70%',
    },

    timing_cont:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    Time:{
        fontSize: 18,
        color: 'white'
    },

    btnCont:{
        width: '60%',
        // backgroundColor: 'yellow',
        // marginTop: 30,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom: 20
    },


})
    