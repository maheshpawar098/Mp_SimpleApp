import {
  ActivityIndicator,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Loading, Login} from '../../container';
import Tabs from '../tabs/Tabs';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../theme';
import {local} from '../../store';
import {onLogin} from '../../utils/helper';
import {images} from '../../assets';
import Image from 'react-native-scalable-image';

const PARENT_ROUTE = {
  AUTH: Login,
  APP: Tabs,
};


/**
 * This is Navigation Container Wrapper where tabs and login screen handled as per authentication 
 * 
 * @author Mahesh Pawar
 * @returns App Navigation 
 */
const AppContainer = () => {
  const isAuth = useSelector(state => state.user.isAuth);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const reqData = await local.fetch(local.keys.AUTH);

    if (reqData) {
      await onLogin({...reqData, dispatch});
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading />
  }

  return (
    <NavigationContainer>
      {isAuth ? <Tabs /> : <Login />}
    </NavigationContainer>
  );
};

export default AppContainer;

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pleaseWait: {
    paddingTop: 20,
  },
  waterMarkContainer: {
    position: 'absolute',
    bottom: 25,
    alignSelf: 'center',
  },
});
