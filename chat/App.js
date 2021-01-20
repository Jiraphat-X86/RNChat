import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import { StyleSheet, ScrollView,  View, Text, StatusBar, Image } from 'react-native'

const init_state = {
  name: 'Jiraphat-X86 official store',
  messages: [
    {
      _id: 'sjnsdjnsdfndf,mdnf,',
      text: 'How are you?',
      createdAt: new Date(),
      user: {
          _id: 'fsnsllNSKksdfjds;KJ',
          name: 'Jiraphat-X86',
          avatar: 'https://placeimg.com/140/140/any',
      },
      // image: 'https://placeimg.com/140/140/any',
      // video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      sent: true,
    },
    {
      _id: 'sdfsdmfn,dfmn,dfmm,m,ss',
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
          _id: 'zlm;lfm',
          name: 'Jiraphat-X86 official store',
          avatar: 'https://placeimg.com/140/140/any',
      }
    },
    {
      _id: 'sdfkmsdf,sdmf,s',
      text: 'Hello admin',
      createdAt: new Date(),
      user: {
          _id: 'fsnsllNSKksdfjds;KJ',
          name: 'Jiraphat-X86',
          avatar: 'https://placeimg.com/140/140/any',
      }
    }
  ]
}
class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state=init_state
}
  render() {
    const { name, messages } = this.state
    return (
      <View style={{flex: 1, backgroundColor: 'whitesoke'}}>
        <Header>
          <Body style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Image style={{width: 50, height: 50, borderRadius: 25, borderWidth: 1, borderColor: 'black'}} source={{uri: 'https://placeimg.com/140/140/any'}}/>
            <Title>{name}</Title>
          </Body>
        </Header>
        <GiftedChat
          alwaysShowSend={true}
          messages={messages}
          placeholder='พิมพ์ข้อความ...'
          onSend={messages => this.onSendMessage(messages)}
          user={{ _id: 'fsnsllNSKksdfjds;KJ' }}
        />
      </View>
    )
  }

  onSendMessage = (value) => {
    console.log(value)
  }
}

const styles = StyleSheet.create({})

export default App
