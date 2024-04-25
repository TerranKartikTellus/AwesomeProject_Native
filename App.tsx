import React, {useState} from 'react';
import {Button, FlatList, ScrollView, ScrollViewBase, Text, TextInput, View} from 'react-native';

function App(): React.JSX.Element {
  const [name, setName] = useState([
    {name: 'Kartik'},
    {name: 'Soni'},
    {name: 'Raj'},
    {name: 'Raj'},
    {name: 'Raj'},
    {name: 'Raj'},
    {name: 'Raj'},
    {name: 'Kartik'},
    {name: 'Soni'},
    {name: 'Raj'},
    {name: 'Raj'},
    {name: 'Raj'},
    {name: 'Raj'},
    {name: 'Raj'},
    {name: 'Kartik'},
    {name: 'Soni'},
    {name: 'Raj'},
    {name: 'Raj'},
    {name: 'Raj'},
    {name: 'Raj'},
    {name: 'Raj'},
    {name: 'Kartik'},
    {name: 'Soni'},
    {name: 'Raj'},
    {name: 'Raj'},
    {name: 'Raj'},
    {name: 'Raj'},
    {name: 'Raj'},
  ]);

  return (
    <View style={{backgroundColor: '#0000', height: '100%'}}>
      <View
        style={{
          backgroundColor: 'green',
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <ScrollView>
          {name.map(i => {
            return (
              <Text
                style={{
                  backgroundColor: 'blue',
                  padding: 20,
                  margin: 20,
                  width: '30.33%',
                }}>
                {i.name}
              </Text>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

export default App;
