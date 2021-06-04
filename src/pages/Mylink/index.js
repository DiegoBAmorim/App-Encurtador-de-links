import React, {useState, useEffect} from 'react';
import {Modal, ActivityIndicator} from 'react-native'

import {useIsFocused} from '@react-navigation/native'

import StatusBarPage from '../../components/StatusBarPage'
import Menu from '../../components/Menu'
import List from '../../components/List'
import ModalLink from '../../components/ModalLink'
 
import {getLinksSave, deleteLink} from '../../utils/storeLinks'

import { Container, Title, ListLinks, ContainerEmpty, WarningText} from './styles'

export default function MyLink() {
   const isFocused = useIsFocused(); 

   const [links, setLinks] = useState([]);
   const [data, setData] = useState({});
   const [modalVisible, setModalVisible] = useState(false);
   const [loading, setLoading] = useState(true)

    
   useEffect(() => {
      async function getLink(){
         const result = await getLinksSave('sujeitolinks');
         setLinks(result);
         setLoading(false)
      }
      getLink();
   }, [isFocused]);

   function handleItem(item){
      setData(item);
      setModalVisible(true);
   }

   async function handleDelete(id){
      const result = await deleteLink(links, id);
      setLinks(result)
   }

 return (
    <Container>
     <StatusBarPage 
     barStyle="light-content"
     backgroundColor='#132742'
     />
     <Menu />
     <Title>Meus Links</Title>
      { loading && (
         <ContainerEmpty>
            <ActivityIndicator color="#fff" size={25} />
         </ContainerEmpty>
         )
      }


     {
        !loading && links.length === 0 && (
         <ContainerEmpty>
            <WarningText>Você ainda não possui nenhum link :(</WarningText>
         </ContainerEmpty>
        )
     }
     <ListLinks
     data={links}
     keyExtractor={(item) => String(item.id)}
     renderItem={ ({item}) => <List data={item} selectedItem={handleItem} deleteItem={handleDelete}/>}
     contentContainerStyle={{paddingBottom: 20}}
     showsVerticalScrollIndicator={false}
     />
      <Modal visible={modalVisible} transparent animationType="slide">
                    <ModalLink onClose={() => setModalVisible(false)} data={data}/>
      </Modal>
     </Container>
  );
}