import RootToast from 'react-native-root-toast';

const toastConfig = {
  duration: RootToast.durations.LONG,
  position: RootToast.positions.BOTTOM,
  shadow: true,
  animation: true,
  hideOnPress: true,
  delay: 0,
};

const show = (msg, isShort) => {
    if(isShort){
        toastConfig.duration = RootToast.durations.SHORT
    }
  return RootToast.show(msg, toastConfig);
};

const hide = instance => {
  return RootToast.hide(instance);
};

const Toast = {show, hide};

export default Toast;
