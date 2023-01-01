import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../../theme';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ActionSheet, Icon, Text} from '../../../components';
import { Toast } from '../../../utils';
import { actions } from '../../../store';

const PROFILE_SIZE = 170;

const options = {
  mediaType: 'photo',
  includeBase64: true
};

const CAMERA_ERRORS = {
  camera_unavailable : "Failed to open camera",
  permission : "Permission not satisfied",
  others : "Something wen't wrong",

} 

const ProfilePicture = () => {
  const user = useSelector(state => state.user.user);
  const [isActionSheet, setIsActionSheet] = useState(false);
  const dispatch = useDispatch()
  const image = useMemo(() => {
    return getProfileImage(user);
  }, [user]);

  const onProfilePress = () => {
    setIsActionSheet(true);
  };

  const onCloseActionSheet = () => {
    setIsActionSheet(false);

  }

  const onGalleryPress = async () => {
    const result = await launchImageLibrary(options);
    updateProfile(result)

  };

  const onCameraPress = async () => {
    const result = await launchCamera(options);
    updateProfile(result)
  };

  const updateProfile = async (data) => {
    if(data.didCancel){
      return
    }
    onCloseActionSheet()
    if(data.errorCode){
      Toast.show(CAMERA_ERRORS[data.errorCode])
    }

    const newImage = data.assets[0].uri
    dispatch(actions.user.updateProfilePicture(newImage))

  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onProfilePress} style={styles.imageContainer}>
        <Image source={image} resizeMode="stretch" style={styles.image} />
      </TouchableOpacity>
      <ActionSheet onClose={onCloseActionSheet} isVisible={isActionSheet}>
        <View style={styles.selectorPopupContainer}>
          <Text isBold={true} style={styles.profilePhoto}>
            Profile Photo
          </Text>
          <View style={styles.buttonContainer}>
            <View style={styles.iconTextContainer}>
              <Icon
                onPress={onCameraPress}
                name="Camera"
                height={40}
                style={styles.cameraIcon}
              />
              <Text>Camera</Text>
            </View>
            <View style={styles.iconTextContainer}>
              <Icon
                onPress={onGalleryPress}
                name="Gallery"
                height={47}
                style={styles.galleryIcon}
              />
              <Text>Gallery</Text>
            </View>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
};

const getProfileImage = data => {
  let uri = '';
  uri = data.performer.profile_visuals.photo.preview_url;
  return {uri};
};

// 8007016077

export default ProfilePicture;

const styles = StyleSheet.create({
  iconTextContainer: {
    paddingEnd: 30,
    alignItems: 'center',
  },
  cameraIcon: {
    padding: 14,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: colors.grayLight,
    marginBottom: 10,
  },
  galleryIcon: {
    padding: 10,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: colors.grayLight,
    marginBottom: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  profilePhoto: {
    fontSize: 20,
  },
  selectorPopupContainer: {
    paddingBottom: 50,
    padding: 20,
  },
  container: {
    position: 'absolute',
    alignSelf: 'center',
    top: 45,
  },
  image: {
    height: PROFILE_SIZE,
    width: PROFILE_SIZE,
    borderRadius: PROFILE_SIZE / 2,
    borderWidth: 3,
    borderColor: colors.white,
    backgroundColor: colors.white
  },
  imageContainer: {
    shadowColor: colors.charcoal,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
