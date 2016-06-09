import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Container extends Component{
  componentDidMount(){
    console.warn("component mounted...")
  }
  componentDidUpdate(){
    console.warn("component updated...")
  }
  render(){
    return(
      this.props.children
    )
  }
}

export default Container
