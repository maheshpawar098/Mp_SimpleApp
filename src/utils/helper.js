import api from '../service';
import {actions, local} from '../store';
import Toast from './toast';

const onLogin = async ({email, password, dispatch}) => {
  if (!isEmailValid(email)) {
    showToast('Invalid email address');
    return;
  }

  if (!password) {
    showToast('Please enter the password');
    return;
  }

  const reqData = {
    email: email,
    password: password,
  };

  try {
    const {data, status} = await api.auth.login(reqData);
    showToast(data.message);
    local.store(local.keys.AUTH, reqData);
    dispatch(actions.user.setAuthenticated(data.result.id));
  } catch (error) {
    if (error.response) {
      showToast(error.response.data.message);
    } else {
      showToast('Login failed');
    }
  }
};

const showToast = msg => {
  Toast.show(msg, true);
};

const isEmailValid = email => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export {onLogin};
