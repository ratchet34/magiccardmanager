
import React, { Component } from 'react';
import { FlatList, DrawerLayoutAndroid, StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';

import Home from './Components/Home';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const DATA = [
  {
    id: '1',
    title: 'Home',
    itemname: 'home',
  },
  {
    id: '2',
    title: 'Load data',
    itemname: 'load',
  },
  {
    id: '3',
    title: 'Card list',
    itemname: 'cardlist',
  },
  {
    id: '4',
    title: 'Settings',
    itemname: 'settings',
  },
];

class Item extends Component {
  
  render() {
    return(
      <View>
        {/* <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : 'white'
            },
            styles.item
          ]}>
          {({ pressed }) => (
            <Text style={styles.text}>
              {title}
            </Text>
          )}
        </Pressable> */}
        <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.setMenu(this.props.item)}
          >
          <Text style={styles.item}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}



export default class App extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {
      isReady: false,
      menuitem: "home",
    };

    this.setMenu = this.setMenu.bind(this);
  }

  setMenu(item) {
    this.setState({menuitem: item});
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    navigationView = (
      <View style={styles.navigationContainer}>
        <Text style={styles.menuTitle}>Menu</Text>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} setMenu={this.setMenu} item={item.item}/>}
          keyExtractor={item => item.id}
        />
      </View>
    );

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition="left"
        renderNavigationView={() => navigationView}
      >
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Home></Home>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    width: "100%",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
    padding: 8
  },
  menuTitle: {
    fontSize: 20,
    marginLeft: 16,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 16,
  },
});