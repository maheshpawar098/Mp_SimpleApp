import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Card, Container, Header, IconInfo, Text} from '../../components';
import {colors} from '../../theme';
import {useDispatch, useSelector} from 'react-redux';
import api from '../../service';
import {actions} from '../../store';
import ProfilePicture from './components/ProfilePicture';

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogoutLoading, setIsLogoutLoading] = useState(false);

  const [isFailed, setIsFailed] = useState(false);
  const userid = useSelector(state => state.user.userid);
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    const reqData = {userid};
    try {
      const {data, status} = await api.user.profile(reqData);
      dispatch(actions.user.setUserProfile(data.userInfo));
      setIsFailed(false);
    } catch (error) {
      console.log("eeror");
      setIsFailed(true);
    }
    setIsLoading(false);
  };

  const onLogoutPress = () => {
    setIsLogoutLoading(true);
    dispatch(actions.user.logout());
    setIsLogoutLoading(false);
  };

  return (
    <Container isFailed={isFailed} isLoading={isLoading} title="Profile">
      <View style={styles.profileHalfBack} />
      <ProfilePicture />
      <View style={styles.infoContainer}>
        <Text isBold={true} style={styles.displayName}>{user?.chat_display_name}</Text>
        <IconInfo icon={"Mail"} label={user?.email} />
        <IconInfo icon={"Location"} label={user?.physicalAddress} />
        {/** phone is not present in user info object so i used it from performer.us_format_phone_number  */}
        <IconInfo icon={"Phone"} label={user?.performer?.us_format_phone_number} />

      </View>
      <Card 
      label={"About Me"}
      info={user?.biography.description}
      />
      <View style={styles.logoutContainer}>
        <Button
          onPress={onLogoutPress}
          isLoading={isLogoutLoading}
          isOutlined={true}
          label={'Logout'}
        />
      </View>
    </Container>
  );
};

export default Profile;

const user = {
  about: {
    created_at: '2022-10-10 09:58:22',
    description: 'My name is V. And I am a good boy.',
    id: 1,
    updated_at: '2022-10-10 09:58:22',
    user_id: '81a1446c-d760-4853-8710-77c0777b52c4',
  },
  aboutMeExperiance: [],
  message: 'Successfully executed.',
  organizations: [],
  physicalAddress: {
    address: '123 East Washington Street',
    area_nickname: null,
    city: 'Sequim',
    coordinates: {latitude: -56.8984281, longitude: 48.0795306},
    county: 'Clallam County',
    created_at: '2022-11-10 04:16:18',
    details: null,
    extra_details: null,
    for_humans: 'Sequim, WA 98382',
    for_mortals: '123 East Washington Street, Sequim, WA 98382, Clallam County',
    google_maps_query: 'Sequim,+WA,+98382',
    id: 2514,
    place_id: 'ChIJnc6khFm_j1QRbtWnIZLAg0Q',
    remarks: null,
    room: null,
    state: 'WA',
    time_zone: 'PST',
    updated_at: '2022-11-10 04:16:18',
    zip: '98382',
  },
  skills: {
    catSoftware: [],
    certificateNotaries: [
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
    ],
    linkedIn: null,
    realtimeTools: [],
    serviceOfferings: [],
    website: null,
  },
  stats: {
    number_of_job_assigned: 0,
    number_of_job_completed: 0,
    time_cancel_a_job: 0,
    time_late_for_jobs: 0,
    time_requested_by_attorney: 0,
  },
  userInfo: {
    accept_terms: true,
    active: true,
    approved: true,
    biography: {
      created_at: '2022-10-10 09:58:22',
      description: 'My name is V. And I am a good boy.',
      id: 1,
      updated_at: '2022-10-10 09:58:22',
      user_id: '81a1446c-d760-4853-8710-77c0777b52c4',
    },
    canceled_at: null,
    card_brand: null,
    card_last_four: null,
    chat_display_name: 'Kim Taehyung',
    court_reporter: null,
    created_at: '2022-10-10 09:39:21',
    deleted_at: null,
    email: 'ashwini+12@arkenea.com',
    email_verified_at: '2022-11-11 12:35:18',
    first_name: 'Kim',
    has_been_invited: false,
    id: '81a1446c-d760-4853-8710-77c0777b52c4',
    is_draft: false,
    is_social_signup: false,
    is_subscription_view: false,
    is_super_admin: false,
    is_suspended: false,
    is_wizard_finish: false,
    last_logged_at: '2022-12-30 21:34:18',
    last_name: 'Taehyung',
    middle_name: null,
    organizations: [],
    performer: {
      application: [Object],
      application_id: '8ddee0c5-746d-4d46-960e-21bbcd56665d',
      birthday: null,
      cat_software: [Array],
      ccr_number: '454545',
      chat_avatar:
        'https://dev-covercrow.s3.amazonaws.com/storage/uploads/profile-visual/thumb/d8d02036-439f-40a9-8f78-967784d8cbf6.jpeg',
      corporation: null,
      court_reporter_type_id: 1,
      created_at: '2022-10-10 09:39:41',
      csr_number: null,
      ein: null,
      experience: null,
      experiences: [Array],
      facebook_id: null,
      id: '9cf5b23d-57a6-4017-93b5-e67b2cf460b4',
      initials: null,
      is_app_promo_enabled: true,
      is_imported: true,
      license_number: null,
      linked_in: null,
      machine_support: false,
      ncra_number: '3434',
      ncra_type: 'rsr',
      notary_state: null,
      nvra_number: '78657554343223',
      nvra_type: 'mvr',
      phone: '+14342443422',
      prefers_contracting_agencies: false,
      prefers_digital_reporting_agencies: false,
      prefers_not_supporting_the_so_cal_stip_movement: false,
      profile_visuals: [Object],
      proofreader_availability: false,
      realtime_tools: [Array],
      scopist_availability: false,
      service_offerings: [Array],
      setup: null,
      social_number: null,
      sole_proprietor: '',
      steno_type: null,
      type_id: 1,
      updated_at: '2022-11-10 13:26:40',
      us_format_phone_number: '(434) 244-3422',
      user_id: '81a1446c-d760-4853-8710-77c0777b52c4',
      website: null,
      year_reporting: 'select',
    },
    phone_verified_at: '2022-11-11 12:35:18',
    photo_url: null,
    physicalAddress: 'Sequim, WA 98382',
    reviews: [],
    roles: [[Object]],
    slug: 'kim-taehyung',
    stars: 0,
    stripe_card: null,
    stripe_id: null,
    subscription_level: 'Basic',
    subscription_type: null,
    temp_phone: null,
    time_zone: 'America/Adak',
    trial_ends_at: null,
    typeName: {
      active: true,
      created_at: '2022-10-10 09:22:40',
      id: 1,
      key: 'court_reporter',
      name: 'Court Reporter',
      updated_at: '2022-10-10 09:22:40',
    },
    type_id: 5,
    updated_at: '2022-12-30 21:34:18',
  },
  userPhotos: [],
};

const styles = StyleSheet.create({
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20

  },
  displayName: {
    fontSize: 24,
    paddingBottom: 8
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logoutContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileHalfBack: {
    backgroundColor: colors.primary,
    height: 150,
    marginBottom: 90,
    borderTopWidth: 0.2,
    borderTopColor: colors.white
  }
});
