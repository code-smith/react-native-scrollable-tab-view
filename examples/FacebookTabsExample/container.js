import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Container extends Component{
  componentDidMount(){
    console.warn(this.props.tabLabel+ " tab mounted...")
  }
  componentDidUpdate(){
    console.warn(this.props.tabLabel+ " tab updated...")
  }
  render(){
    return(
      this.props.children
    )
  }
}

export default Container
