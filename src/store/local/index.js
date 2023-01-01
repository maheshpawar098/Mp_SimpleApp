import AsyncStorage from '@react-native-async-storage/async-storage';

const fetch = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // read error
  }
};

const store = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // save error
  }
};

const remove = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch(e) {
    // remove error
  }

  // console.log('Done.')
}

const keys = {
    AUTH: "AUTH"
}

const local = {
    store,
    fetch,
    remove,
    keys
}


export default local