import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  Button,
  Linking,
} from 'react-native';
import {useSelector} from 'react-redux';


export default function SinglenewsDetail(props) {
  const newsId = props.route.params.newsId;
  const [modalVisible, setModalVisible] = useState(false);
  // const myIcon = <Icon name="share" size={20} color="black" />
  // const facebook = <Icon name="facebook" size={20} color="black" />;
  // const whatsapp = <Icon name="whatsapp" size={20} color="black" />;
  // const linkedin = <Icon name="linkedin" size={20} color="black" />;
  // const twitter = <Icon name="twitter" size={20} color="black" />;;
  const selectedNews = useSelector(state =>
    state.news.news.sources.find(news => news.id === newsId),
  );

  return (
    <TouchableOpacity>
      <View style={{padding:30}}>
        <Text style={{fontSize:15,color:'gray'}}>{selectedNews.description}</Text>
        
      </View>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Share to your friends</Text>
              <View style={styles.share}>
                <Text style={{padding:5}}
                  onPress={() =>
                    Linking.openURL(
                      `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        `${selectedNews.url}`,
                      )}&quote=${encodeURIComponent(
                        'hello world by sush',
                      )}&hashtag=${encodeURIComponent('#test')}`,
                    )
                  }>
              F
                </Text>

                <Text style={{padding:5}}
                  onPress={() =>
                    Linking.openURL(
                      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        `${selectedNews.url}`,
                      )}&text=${encodeURIComponent(
                        'hello world by sush',
                      )}&hashtags=${encodeURIComponent('test')}`,
                    )
                  }>
                 W
                </Text>

                <Text style={{padding:5}}
                  onPress={() =>
                    Linking.openURL(
                      `https://linkedin.com/shareArticle?mini=true 
                      &url=${encodeURIComponent(
                        `${selectedNews.url}`,
                      )}&title=${encodeURIComponent(
                        'hello world by sush',
                      )}&summary=${encodeURIComponent('test')}`,
                    )
                  }>
                L
                </Text>

                <Text style={{padding:5}}
                  onPress={() =>
                    Linking.openURL(
                      `https://api.whatsapp.com/send? ${selectedNews.url}`,
                    )
                  }>
                  W
                </Text>

                {/* `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        "https://www.udemy.com"
                      )}&quote=${encodeURIComponent(
                        "hello world by sush"
                      )}&hashtag=${encodeURIComponent("#test")}`
                      target="_blank" */}
                {/* `https://api.whatsapp.com/send?text=hello world https://www.udemy.com */}
              </View>
              <Button
                title="close"
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Button>
            </View>
          </View>
        </Modal>
        <View style={{display:'flex',flexDirection:'row' ,justifyContent:'space-between',paddingRight:50,paddingLeft:50}}>
       
       
        <Text>{selectedNews.language}</Text>
        
        <Pressable
          
          onPress={() => setModalVisible(true)}>
          <Text>Share</Text>
         
        </Pressable>
        
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  share: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
   
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
