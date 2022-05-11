import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { ScrollView, Image, Text } from 'react-native';


export default function Dashboard({ navigation }) {
  return (
    <ScrollView>
    <Text style={{fontSize:46 , backgroundColor:'white',textAlign:"center"}}>Home</Text>
    <Background>
      <Logo />
      <Header>Socio-torcedor do Barça</Header>
      <Paragraph>
        Seja bem vindo , User
      </Paragraph>
      <Paragraph style={{ fontWeight: 'bold' }}>
      O clube foi oficialmente fundado no dia 29 de novembro de 1899. 
      Cresceu cada vez mais, ganhando títulos como a Copa Macaya em 1902, 
      a Copa Pirineus em 1910 - 1912. O Barcelona FC construiu seu primeiro 
      estádio em 1909, com capacidade para 6.000 pessoas.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
    </ScrollView>
  )
}



