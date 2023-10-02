import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { categoryData } from '../constants';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
//import CategoryBooks from './Categories'; // Import the CategoryBooks component

export default function Categories() {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <View style={{ paddingHorizontal: 20, marginTop: 6, marginBottom: 10 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categoryData}
        keyExtractor={(item) => item.id.toString()} // Convert id to string
        contentContainerStyle={{ overflow: 'visible' }}
        renderItem={({ item }) => {
          let isActive = item.id === selectedCategory;
          let activeTextStyles = isActive ? { color: 'white' } : { color: 'black' };
          let containerStyles = isActive
            ? { backgroundColor: themeColors.bgLight }
            : { backgroundColor: '#d4a574' };

          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Adventurous Books')} // Pass the category ID
              style={[containerStyles, { padding: 8, paddingHorizontal: 20, marginRight: 10, borderRadius: 999, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }]}
            >
              <Text style={[{ fontWeight: 'bold' }, activeTextStyles]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      {/* {selectedCategory && (
        <CategoryBooks category={selectedCategory} /> // Render CategoryBooks component with selected category
      )} */}
    </View>
  );
}
