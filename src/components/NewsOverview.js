import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {newsPosts} from '../action/newsAction';
import NewsDetailScreen from './NewsDetailScreen';

export default NewsOverview = props => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  // console.log(data);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   fetch(
  //     "https://newsapi.org/v2/sources?apiKey=d29d58aab88d4ea0b04ddb245a230068"
  //   )
  //     .then((response) => response.json())
  //     .then((json) => setData(json.sources))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);
  useEffect(() => {
    dispatch(newsPosts());
    setLoading(false);
  }, [dispatch]);
  const news = useSelector(state => state.news.news.sources);
  console.log(news, 'news');
  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View >
          <View style={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
         
          <Text style={{fontSize:20}}>Articles</Text>
</View>
          <FlatList
            data={news}
            keyExtractor={({id}, index) => id}
            renderItem={itemData => (
              //   <ScrollView>
              // <Text>{itemData.item.id + '. ' + itemData.item.name}</Text>
              // </ScrollView>
              <NewsDetailScreen
                category={itemData.item.category}
                country={itemData.item.country}
                description={itemData.item.description}
                name={itemData.item.name}
                url={itemData.item.url}
                onViewDetail={() => {
                  props.navigation.navigate('SinglenewsDetail', {
                    newsId: itemData.item.id,
                  });
                }}></NewsDetailScreen>
            )}
          />
        </View>
      )}
    </View>

    // <View>
    //   {news && news.map(news=>(<Text>{news.name}</Text>))}
    // </View>
  );
};
