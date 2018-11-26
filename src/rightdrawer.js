import React,{Component} from 'react';
import {View,Text,ScrollView,TouchableOpacity} from 'react-native';
import {StackActions} from 'react-navigation';
import {DrawerActions} from 'react-navigation-drawer';

class RightDrawer extends Component
    {
        constructor(props)
            {
                super(props);
                this.state = 
                    {
                        categories:[]
                    }
            }
        componentDidMount()
            {
                this.getCategories(this);
            }
        navigateToScreen = (route,routeParams) =>
            {
                const navigateAction = StackActions.push({
                    routeName: route,
                    params: routeParams
                  });
                this.props.navigation.dispatch(navigateAction);
                this.props.navigation.dispatch(DrawerActions.closeDrawer());
            }
        getCategories(context)
            {
                context.setState({refreshing: false,categories: [{i:'c1',n:'name1'},{i:'c2',n:'name2'}]});
            }
        render()
            {
                if(this.state.categories.length === 0)
                    return (<View></View>);

                return(<View style={{backgroundColor: 'white',flex: 1}}>
                    <ScrollView style={{height: '100%',width:'100%',backgroundColor: '#333333'}}>
                        {this.state.categories.map((key,id) => 
                            {return(
                                <TouchableOpacity key={key.n} onPress={() => 
                                    {
                                        let nid = key.i;
                                        this.navigateToScreen('CategoryScreen',{id: nid,title: key.n});
                                    }}>
                                    <View style={{width: '100%',height: 60,justifyContent:'center'}}>
                                        <Text style={{color: 'white',height: 32.5,width: '100%',paddingRight: 20,fontSize: 20}}>{key.n}</Text>
                                    </View>
                                </TouchableOpacity>);
                            })}
                    </ScrollView>
                </View>);
            }
    }
export default RightDrawer;