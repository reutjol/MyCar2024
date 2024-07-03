import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const ChoiceInput = ({option1, option2}) => {
  const options = [
    {
      id: '1',
      label: option1,
      value: option1,
    },
    {
      id: '2',
      label: option2,
      value: option2,
    },
  ];

  const [selectedId, setSelectedId] = useState(null);

  const onSelect = id => {
    setSelectedId(id);
  };

  return (
    <View style={styles.container}>
    {options.map((option) => (
        <TouchableOpacity
            key={option.id}
            style={[
                styles.button,
                selectedId === option.id && styles.selectedButton,
            ]}
            onPress={() => onSelect(option.id)}
        >
            <Text style={[styles.buttonText, {color: selectedId === option.id ? '#FFFFFF' : '#000000'}]}>{option.label}</Text>
        </TouchableOpacity>
    ))}
</View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    width: windowWidth,
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderColor: '#e7e7e9',
    borderWidth: 2,
    padding: 12,
    width: windowWidth * 0.45,
    borderRadius: 25,
    color: '#000000',
  },
  selectedButton: {
    backgroundColor: '#f15c62',
    borderWidth: 0,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ChoiceInput;
