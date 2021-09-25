import firestore from '@react-native-firebase/firestore';
const storeBookMarks = async (uid, bookmarkData) => {
    
  try {
    await firestore()
      .collection('Users')
      .doc(uid)
      .collection('BookMarks')
      .doc(bookmarkData.id.toString())
      .set({
        ...bookmarkData,
      });
    return {};
  } catch (error) {
    return {error: error};
  }
};

const removeBookMarks = async (uid, bookmarkData) => {
  try {
    await firestore()
      .collection('Users')
      .doc(uid)
      .collection('BookMarks')
      .doc(bookmarkData.id.toString())
      .delete();
    return {};
  } catch (error) {
    return {error: error};
  }
};

const getBookMarks = async uid => {
  try {
    const bookmarks = await firestore()
      .collection('Users')
      .doc(uid)
      .collection('BookMarks')
      .get();

    return {data: bookmarks};
  } catch (error) {
    return {error: error};
  }
};
const userServices = {
  storeBookMarks,
  removeBookMarks,
  getBookMarks,
};
export default userServices;
