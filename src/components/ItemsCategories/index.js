import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ItemsCategories = ({item, isSelected}) => {
  return (
    <View style={styles.containerItems}>
      <Image
        source={{uri: item.images}}
        style={[styles.image, isSelected ? styles.selectedItem : null]}
      />

      <Text style={[styles.text, isSelected ? styles.selectedText : null]}>
        {item.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItems: {
    alignItems: 'center',
  },
  image: {
    width: 66,
    height: 66,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#A8A6A7',
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 8,
  },
  selectedItem: {
    borderColor: '#1877F2', // Màu nền khi được chọn
  },
  selectedText: {
    color: '#1877F2', // Màu nền khi được chọn
  },
});

export default ItemsCategories;
