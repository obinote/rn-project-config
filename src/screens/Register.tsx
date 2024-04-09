import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from 'routes/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <Text>Register Screen</Text>
      <Button title="navigasi ke login" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default RegisterScreen;
