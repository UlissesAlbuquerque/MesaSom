import React, { Component } from 'react'
import { Text, View, } from 'react-native'
import styles from '../style/index';

export default class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }

    componentDidMount() {
        return fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson.movies,
                    isLoading: false,
                })
            })
    }

    render() {

        if (this.state.isLoading) {
            return(
                <View style={styles.container}>
                    <Text> Loading </Text>
                </View>)}

            else {
            let movies = this.state.dataSource.map((val, key) => {
                    return <View key={key} style={styles.T1}>
                        <Text>{val.title}</Text>
                    </View>
                });

                return(
                    <View style={styles.container}>
                        {movies}
                    </View>
                );
            }
        }
  
    }





