import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Accordion, Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
  ];

  export default class CardList extends Component {
    render() {
        return(
            <Container>
                <Accordion dataArray={dataArray} expanded={0}/>
            </Container>
        );
    }
}

styles = StyleSheet.create({
    
});
