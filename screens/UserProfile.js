import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-rn'; // Import Tailwind CSS for React Native

export default function UserProfile() {
  // Placeholder user data
  const user = {
    name: 'John Snow',
    email: 'john@gmail.com',
    address: '123 Main St',
    nic: '1234567890',
  };

  return (
    <View style={tw('flex-1 p-4 bg-white')}>
      <View style={tw('mb-4')}>
        <Text style={tw('text-lg font-bold mb-1')}>Name:</Text>
        <Text style={tw('text-xl')}>{user.name}</Text>
      </View>
      <View style={tw('mb-4')}>
        <Text style={tw('text-lg font-bold mb-1')}>Email Address:</Text>
        <Text style={tw('text-xl')}>{user.email}</Text>
      </View>
      <View style={tw('mb-4')}>
        <Text style={tw('text-lg font-bold mb-1')}>Address:</Text>
        <Text style={tw('text-xl')}>{user.address}</Text>
      </View>
      <View>
        <Text style={tw('text-lg font-bold mb-1')}>NIC:</Text>
        <Text style={tw('text-xl')}>{user.nic}</Text>
      </View>
    </View>
  );
}
