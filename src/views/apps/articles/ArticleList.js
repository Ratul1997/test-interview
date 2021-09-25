import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import ArticleItem from '../common/ArticleItem';
import {API_URL} from '@env';

export default function ArticleList() {
  const [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    loadDataList();
  }, []);

  const loadDataList = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(API_URL);

      setDataList(res.data.data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  const renderItem = ({item}) => {
    return <ArticleItem item={item} type="ArticleList" />;
  };
  return (
    <View
      style={{
        height: '80%',
        backgroundColor: 'transparent',
        marginHorizontal: 20,
      }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList data={dataList} renderItem={renderItem} />
      )}
    </View>
  );
}
