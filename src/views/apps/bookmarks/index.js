import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import Header from '../../../common/Header';
import userServices from '../../../services/userServicess';
import ArticleItem from '../common/ArticleItem';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
export default function BookMarks() {
  const state = useSelector(state => state.userReducer);
  const [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const renderItem = ({item}) => {
    return <ArticleItem item={item} type="BookMark" />;
  };
  useEffect(() => {
    const mount = loadData();
    return () => mount;
  }, []);
  const loadData = async () => {
    firestore()
      .collection('Users')
      .doc(state.uid)
      .collection('BookMarks')
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);
        let queryData = [];
        querySnapshot.forEach(documentSnapshot => {
          queryData.push(documentSnapshot.data());
        });
        setDataList(queryData);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <Header title="BookMarks" />
      <View
        style={{
          height: '80%',
          backgroundColor: 'transparent',
          marginHorizontal: 20,
        }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={dataList}
            renderItem={renderItem}
            // keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </>
  );
}
