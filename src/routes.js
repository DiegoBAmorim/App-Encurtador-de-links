import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './pages/Home'
import Mylink from './pages/Mylink'

import {Ionicons} from '@expo/vector-icons'


const Drawer = createDrawerNavigator();

export default function routes() {
 return (
     <Drawer.Navigator
     drawerContentOptions={{
         activeBackgroundColor: '#2ccbb9',
         activeTintColor: '#FFF',
         marginTop: 16,
         labelStyle:{
             fontSize: 18,
         }
     }}
     
     >
         <Drawer.Screen 
         name="Home"
         component={Home}
         options={{
             title: 'Encurtar Link',
             drawerIcon: ({focused, size, color}) => (
             <Ionicons 
             name={focused ? 'cube' : 'cube-outline'}
             color={color}
             size={size}
             />
             )
         }}/>
         <Drawer.Screen 
         name="Mylink"
         component={Mylink}
         options={{
            title: 'Meus Links',
            drawerIcon: ({focused, size, color}) => (
            <Ionicons 
            name={focused ? 'stats-chart' : 'stats-chart-outline'}
            color={color}
            size={size}
            />
            )
        }}
         />

        
     </Drawer.Navigator>
  );
}