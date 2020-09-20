import AsyncStorage from '@react-native-community/async-storage';

class Storage {
  static instance = new Storage();

  store = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.log('====================================');
      console.log('AsyncStorage[store] ', {key, value}, error);
      console.log('====================================');
      return false;
    }
  };

  get = async (key) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.log('====================================');
      console.log('AsyncStorage[get] ', {key}, error);
      console.log('====================================');
      throw Error(error);
    }
  };
  getAllKeys = async () => {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (error) {
      console.log('====================================');
      console.log('AsyncStorage[getAllKeys] ', error);
      console.log('====================================');
      throw Error(error);
    }
  };
  multiGet = async (keys) => {
    try {
      return await AsyncStorage.multiGet(keys);
    } catch (error) {
      console.log('====================================');
      console.log('AsyncStorage[multiGet] ', error);
      console.log('====================================');
      throw Error(error);
    }
  };
  remove = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.log('====================================');
      console.log('AsyncStorage[remove] ', {key}, error);
      console.log('====================================');
      return false;
    }
  };
}

export default Storage;
