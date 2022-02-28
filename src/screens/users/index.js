import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import {
  Box,
  Button,
  Center,
  Divider,
  FlatList,
  HStack,
  Pressable,
  Text,
  VStack
} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';

// Reducer
import {Creators as userActions} from 'store/reducers/user';
import {Creators as signOutActons} from 'store/reducers/sign-out';

// Components
import {InputText, AppButton} from 'components';

// Assets
import SelectedIcon from 'assets/images/selected.png';
import UnslectedIcon from 'assets/images/unselected.png';

const size = 50;
const radius = size / 2;

const UsersListScreen = () => {
  const username = useSelector(state => state.signIn.userInfo.username);
  const users = useSelector(state => state.user.users);

  const dispatch = useDispatch();

  // State
  const [searchText, setSerachText] = useState('');
  const [filterdUsers, setFilteredUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => dispatch(userActions.getUsers()), []);

  useEffect(() => setFilteredUsers(users), [users]);

  // Search functionlaity
  useEffect(() => {
    let tempUsers = [];
    if (searchText.length > 0) {
      tempUsers = selectedUsers.filter(user =>
        user.name
          .toString()
          .toLowerCase()
          .includes(searchText.toString().toLowerCase())
      );
    } else {
      tempUsers = [...users];
    }

    setFilteredUsers(tempUsers);
  }, [searchText]);

  const renderUserItem = ({item, index}) => {
    const {id, name, username} = item;
    return (
      <Pressable
        key={id + index}
        onPress={() => {
          setSelectedUsers([...selectedUsers, id]);
        }}
      >
        <HStack px={4} py={2} alignItems='center'>
          <Box
            w={size}
            h={size}
            borderRadius={radius}
            alignItems='center'
            justifyContent='center'
            bgColor='#EBEDF0'
          >
            <Text fontSize='lg' bold opacity={0.5}>
              {name.match(/\b\w/g).join('')}
            </Text>
          </Box>
          <VStack flex={1} mx={4}>
            <Text fontSize='md' bold>
              {name}
            </Text>
            <Text color='#808080'>{'@' + username}</Text>
          </VStack>

          <Image
            source={selectedUsers.includes(id) ? SelectedIcon : UnslectedIcon}
            style={{width: 30}}
            resizeMode='contain'
          />
        </HStack>
      </Pressable>
    );
  };

  const renderSeparatorView = () => <Divider thickness={10} bg='#0000' />;

  return (
    <Box h={'100%'} bgColor='white'>
      <InputText
        placeholder='Search People'
        onChangeText={setSerachText}
        value={searchText}
        autoCapitalize='none'
        m={3}
        py={2}
      />
      <FlatList
        p={3}
        flex={1}
        data={filterdUsers}
        renderItem={renderUserItem}
        keyExtractor={(item, index) => item.id + index}
        ItemSeparatorComponent={renderSeparatorView}
      />
      <Box height='20%' justifyContent='center' bgColor='white'>
        <AppButton>{'Send Gift >'}</AppButton>
        <AppButton
          mt={1}
          onPress={() => {
            dispatch(signOutActons.signOutUserFromApp());
            dispatch(signOutActons.signOutUserFromApp());
          }}
        >
          {'Hi, ' + username + '\nLog Out >'}
        </AppButton>
      </Box>
    </Box>
  );
};

export default UsersListScreen;
