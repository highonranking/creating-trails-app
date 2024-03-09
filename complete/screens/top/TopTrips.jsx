import { FlatList, View } from 'react-native'
import React from 'react';
import ReusableTile from '../../components/Reusable/ReusableTile'


const TopTrips = ({navigation}) => {
  const places = [
    {
      _id: "64c631650298a05640539adc",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Rishikesh",
      location: "Uttrakhand, IN ",
      imageUrl:
        "https://i.ibb.co/kJ6wJxr/Feature-image-Rishikesh.webp",
      rating: 4.7,
      review: "1204 Reviews",
    },
    {
      _id: "64d062a3de20d7c932f1f70a",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Goa",
      location: "Goa, India",
      imageUrl:
        "https://i.ibb.co/YLWV6TQ/outlooktraveller-2024-01-9e21f909-0d2f-4cc8-87f3-250e660a79a2-shutterstock-541154869.webp",
      rating: 4.8,
      review: "1452 Reviews",
    },
    {
      _id: "64d09e3f364e1c37c8b4b13c",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Puducherry",
      location: "Puducherry, IN",
      imageUrl:
        "https://i.ibb.co/Z2MYZXh/puducherry-unionterritory-banner01.webp",
      rating: 4.6,
      review: "2145 Reviews",
    },
    
  ];
  return (
    <View style={{margin: 20}}>

      <FlatList 
      data={places}
      showVerticalScrollIndicator={false}
      keyExtractor={(item)=> item._id}
      renderItem={({item})=> (
        <View style={{marginBottom: 10}}>
          <ReusableTile item={item} onPress={()=> navigation.navigate('PlaceDetails', item._id)}/>
        </View>
      )}
      />
      
    </View>
  )
}

export default TopTrips