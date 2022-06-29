import React from "react";
import {
    View,
    Image,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Pressable,
    Linking,
} from 'react-native';

const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const ColorDarkFontGitHub = '#4F565E';
const ImageProfileGitHub = 'https://avatars.githubusercontent.com/u/88255036?v=4';
const urlToLinkGit = 'https://github.com/WesleiAlmeidaMuniz';


const App = ()=>{

    const handlePressGoToGitHub = async () => {
        console.log('Verificando Link');
        const res = await Linking.canOpenURL(urlToLinkGit);
        if(res){
            console.log('Aprovado');
            console.log('Abrindo Link');
           await Linking.openURL(urlToLinkGit);
        };
    };

    return (
        <SafeAreaView style={Style.container} >
            <StatusBar backgroundColor={colorGitHub} barStyle="ligth-content"/>
            <View style={Style.content}>
                <Image
                accessibilityLabel="Weslei Sorrindo em um quarto escuro" 
                style={Style.avatar} 
                source={{uri: ImageProfileGitHub}}/>
                <Text accessibilityLabel="Nome Weslei Almeida Muniz" style={[Style.defaultText, Style.name]}>Weslei Almeida Muniz
                </Text>
                <Text accessibilityLabel="NickName WesleiAlmeidaMuniz" style={[Style.defaultText, Style.nickname]}>WesleiAlmeidaMuniz
                </Text>
                <Text accessibilityLabel="Descrição: Front-end | JavaScript | CSS | HTML " style={[Style.defaultText, Style.description]}>Front-end | JavaScript | CSS | HTML
                </Text>
                <Pressable onPress={handlePressGoToGitHub}>
                    <View style={Style.button}>
                        <Text style={[Style.defaultText, Style.textbutton]}>Open in GitHub</Text>
                    </View>
                </Pressable>
            </View > 
        </SafeAreaView>
    );
};

export default App;

const Style = StyleSheet.create({
    container:{
        backgroundColor: colorGitHub,
        flex: 1, // Expandir para a tela inteira
        justifyContent: 'center',
    },
    content:{
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height:200,
        width:200,
        borderRadius:100,
        borderColor: 'white',
        borderWidth: 1,        
    },
    defaultText: {
        color:colorFontGitHub,
    },
    name:{
        marginTop:20,
        fontWeight:'bold',
        fontSize:24,
    },
    nickname: {
        color:ColorDarkFontGitHub,
        fontSize:18,
    },
    description:{
        fontWeight:'bold',
        fontSize:14,
    },
    button: {
        marginTop:20,
        backgroundColor: ColorDarkFontGitHub,
        borderRadius: 10,
        padding:20,
    },
    textbutton:{
        fontWeight:'bold',
        fontSize:16,
    },
})  