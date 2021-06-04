import React from 'react';
import { View, Text } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler'

import { ContainerButton, Link, ActionContainer } from './styles'
import { Feather } from '@expo/vector-icons'


export default function List({ data, selectedItem, deleteItem}) {
  function RightActions(){
    return(
      <ActionContainer onPress={() => deleteItem(data.id)}>
      <Feather name="trash" color="#fff" size={24}/>
      </ActionContainer>
    )
  }
  return (
    <View>
      <Swipeable renderRightActions={RightActions}>
        <ContainerButton activeOpacity={0.9} onPress={() => { selectedItem(data) }}>
          <Feather
            name="link"
            color="#FFF"
            size={24}
          />
          <Link numberOfLines={1}>{data.long_url}</Link>
        </ContainerButton>
      </Swipeable>
    </View>
  );
}