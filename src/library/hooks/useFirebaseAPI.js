import {useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

export const useFirebaseGet = (
  userID,
  setData,
  collectionName,
  documentName,
) => {
  useEffect(() => {
    const unsubscribeListener = firestore()
      .collection(collectionName)
      .doc(userID)
      .onSnapshot(documentSnapshot => {
        if (documentSnapshot) {
          var DATA = documentSnapshot.data()[documentName];
          setData(DATA);
        }
      });
    return () => unsubscribeListener();
  }, []);
};
