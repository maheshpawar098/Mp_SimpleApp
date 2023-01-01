import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Button, Container, Input, Text, Watermark} from '../../components';
import {images} from '../../assets';
import Image from 'react-native-scalable-image';
import {colors} from '../../theme';
import api from '../../service';
import {Toast} from '../../utils';
import {actions, local} from '../../store';
import {useDispatch} from 'react-redux';
import { onLogin } from '../../utils/helper';


// ashwini+12@arkenea.com
// Qwerty@123

const Login = () => {
  const {width} = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSecureTextEntry, setSecureTextEntry] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onLoginPress = async () => {
    setIsLoading(true);
    const reqData = {
      email: email,
      password: password,
      dispatch: dispatch
    };

    await onLogin(reqData)
    
    setIsLoading(false);
  };



  const onToggleSecureText = () => {
    setSecureTextEntry(c => !c);
  };

  return (
    <View style={styles.container}>
      <Watermark />
      <View style={styles.subContainer}>
        <View>
          <Text isBold={true} style={styles.login}>
            Login to Your Account
          </Text>
          <Input
            placeholder="Enter email address"
            label="Email Address"
            maxLength={50}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            label="Password"
            placeholder="Enter password"
            onIconPress={onToggleSecureText}
            secureTextEntry={isSecureTextEntry}
            isPassword={true}
            value={password}
            onChangeText={setPassword}
            icon={isSecureTextEntry ? 'CloseEye' : 'EyeOpen'}
          />
          <TouchableOpacity style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Button
              isLoading={isLoading}
              onPress={onLoginPress}
              label="Login"
            />
          </View>
          <Text style={styles.signUpNote}>
            Don’t have an account?
            <Text style={styles.signUpNow}> Sign Up Now</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  login: {
    fontSize: 24,
    paddingBottom: 25,
  },
  forgotPassword: {
    color: colors.secoundry,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginTop: 5,
  },
  buttonContainer: {
    marginVertical: 30,
    alignItems: 'center',
  },
  waterMarkContainer: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  signUpNote: {
    fontSize: 16,
    textAlign: 'center',
  },
  signUpNow: {
    fontSize: 16,
    color: colors.secoundry,
  },
});
