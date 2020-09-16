import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import CardList from './CardList';

  export default class Home extends Component {
    render() {
        return(
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                    </Left>
                    <Body>
                        <Title>Home</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                        <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    <Image
                        style={styles.logo}
                        source={{
                        uri: 'https://i.pinimg.com/originals/c4/3e/5f/c43e5fe10d29ff5ff8ac97105f560ba4.jpg',
                        }}
                    />
                </Content>
            </Container>
        );
    }
}

styles = StyleSheet.create({
    container: {
        width: "100%",
        alignSelf: "stretch",
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
    },
    logo: {
        width: 300,
        height: 300,
        alignSelf: "center",
    },
    header: {
        width: "100%",
    }
});
