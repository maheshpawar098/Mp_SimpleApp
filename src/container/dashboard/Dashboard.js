import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import {Container, Content, Header, Input, Search} from '../../components';
import {colors} from '../../theme';
import PeopleList from './mock';
import PeopleCard from './components/PeopleCard';

const Dashboard = () => {
  const [search, setSearch] = useState('');

  const data = useMemo(
    () =>
      PeopleList.filter(item =>
        item.name.toLowerCase().includes(search.trim().toLowerCase()),
      ),
    [search],
  );

  const renderItem = ({item}) => {
    return <PeopleCard item={item} />;
  };

  return (
    <Container title={'Dashboard'} icon={'PlusUser'}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Input
            placeholder="Search"
            icon={'Search'}
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<ListEmptyComponent />}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </Container>
  );
};

const ListEmptyComponent = () => {
  return (
    <View>
      <Text>No data found</Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  searchContainer: {
    paddingVertical: 15,
  },
  separator: {
    padding: 10,
  },
});
