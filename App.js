import React,{Component} from 'react';
import {header,Text,View,Dimensions,TouchableOpacity} from 'react-native';

import{createAppContainer,createDrawerNavigator,createStackNavigator,SafeAreaView} from 'react-navigation';
import RightDrawer from './src/rightdrawer';

const CategoryScreen = () => 
  {
    return(<View>
      <Text>CategoryScreen</Text>
    </View>);
  }

const AppNavigator = createStackNavigator(
{
  CategoryScreen:
    {
      screen: CategoryScreen,
    }
},
{
  defaultNavigationOptions:
    {
      headerStyle:
        {
          backgroundColor: '#0f5599'
        },
      headerTintColor: 'white',
      headerBackTitleStyle:
        {
          color: 'white'
        }
    }
});
const DrawerNavigator = createDrawerNavigator(
    {
    Item1:
      {
          screen: AppNavigator,
      }
    },
    {
        contentComponent: RightDrawer,
        drawerLockMode: "unlocked",
        drawerPosition: 'right',
        drawerWidth: () => 
          {
            return Dimensions.get('window').width - 150
          },
        drawerType: 'slide',
        drawerBackgroundColor: '#333333',
        backBehavior: "none"
    });

const AppStackNavigator = createStackNavigator(
    {
      AppNav: DrawerNavigator
    });

const AppContainer = createAppContainer(AppStackNavigator);
class App extends Component
    {
      render()
          {
            return(
                    <SafeAreaView style={{flex: 1}}>
                        <AppContainer />
                    </SafeAreaView>);
          }
    };
export default App;