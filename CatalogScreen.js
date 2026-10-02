import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { RECIPES } from './recipesData';
import { globalStyles } from './styles';

export default function CatalogScreen({ navigation }) {
  const [search, setSearch] = useState('');

  const filteredRecipes = RECIPES.filter(r =>
    r.title.toLowerCase().includes(search.toLowerCase()) ||
    r.category.toLowerCase().includes(search.toLowerCase())
  );

  const renderRecipeItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={() => navigation.navigate('Detail', { recipe: item })}
    >
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardBody}>
        <View style={styles.tagRow}>
          <Text style={styles.categoryBadge}>{item.category}</Text>
          <Text style={styles.ratingText}>★ {item.rating}</Text>
        </View>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription} numberOfLines={2}>{item.description}</Text>
        
        <View style={styles.cardFooter}>
          <Text style={styles.priceText}>{item.price}</Text>
          <Text style={styles.viewButtonText}>View Recipe ➔</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={globalStyles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="🔍 Search recipes or categories..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredRecipes}
        keyExtractor={(item) => item.id}
        renderItem={renderRecipeItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 160,
  },
  cardBody: {
    padding: 16,
  },
  tagRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  categoryBadge: {
    backgroundColor: '#fef3c7',
    color: '#d97706',
    fontWeight: '700',
    fontSize: 11,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  ratingText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#f59e0b',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 13,
    color: '#6b7280',
    lineHeight: 18,
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
    paddingTop: 10,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#d97706',
  },
  viewButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2563eb',
  },
});