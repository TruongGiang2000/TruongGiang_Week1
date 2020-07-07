/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import MyImageView from './MyImageView';
export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <MyImageView
          size={200}
          uriImage="data:image/jpeg;base64,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"
          //defautSource="https://www.celeb.vn/news/wp-content/uploads/2019/09/4-day-SUPER-LARGE-SIZE-10_compressed.jpg"
        />
      </View>
    );
  }
}
