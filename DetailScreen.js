import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from './styles';

export default function DetailScreen({ route, navigation }) {
  // Extract passed route parameters
  const { recipe } = route.params || {};

  if (!recipe) {
    return (
      <View style={globalStyles.container}>
        <Text>No recipe parameters received.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f9fafb' }}>
      <Image source={{ uri: recipe.image }} style={styles.headerImage} />

      <View style={styles.contentContainer}>
        {/* Custom Back Button demonstrating navigation.goBack() */}
        <TouchableOpacity
          style={styles.customBackButton}
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Back to Catalog</Text>
        </TouchableOpacity>

        <View style={styles.headerRow}>
          <Text style={styles.title}>{recipe.title}</Text>
          <Text style={styles.price}>{recipe.price}</Text>
        </View>

        <Text style={styles.chefText}>Created by {recipe.chef}</Text>

        <View style={styles.metaBadgeRow}>
          <View style={styles.metaBadge}>
            <Text style={styles.metaLabel}>PREP TIME</Text>
            <Text style={styles.metaValue}>{recipe.prepTime}</Text>
          </View>
          <View style={styles.metaBadge}>
            <Text style={styles.metaLabel}>CALORIES</Text>
            <Text style={styles.metaValue}>{recipe.calories}</Text>
          </View>
          <View style={styles.metaBadge}>
            <Text style={styles.metaLabel}>RATING</Text>
            <Text style={styles.metaValue}>★ {recipe.rating}</Text>
          </View>
        </View>

        <Text style={styles.sectionHeader}>Description</Text>
        <Text style={styles.bodyText}>{recipe.description}</Text>

        <Text style={styles.sectionHeader}>Ingredients</Text>
        {recipe.ingredients.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listItemText}>{item}</Text>
          </View>
        ))}

        <Text style={styles.sectionHeader}>Preparation Steps</Text>
        {recipe.instructions.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            <View style={styles.stepNumberBadge}>
              <Text style={styles.stepNumberText}>{index + 1}</Text>
            </View>
            <Text style={styles.stepText}>{step}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 250,
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
  },
  customBackButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  backButtonText: {
    color: '#374151',
    fontSize: 13,
    fontWeight: '700',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
    flex: 1,
    marginRight: 12,
  },
  price: {
    fontSize: 22,
    fontWeight: '800',
    color: '#d97706',
  },
  chefText: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 16,
    fontStyle: 'italic',
  },
  metaBadgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fffbe3',
    padding: 12,
    borderRadius: 12,
    marginBottom: 20,
  },
  metaBadge: {
    alignItems: 'center',
  },
  metaLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#b45309',
  },
  metaValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#78350f',
    marginTop: 2,
  },
  sectionHeader: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1f2937',
    marginTop: 16,
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 22,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  bullet: {
    color: '#d97706',
    fontSize: 18,
    marginRight: 8,
  },
  listItemText: {
    fontSize: 14,
    color: '#374151',
  },
  stepContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  stepNumberBadge: {
    backgroundColor: '#d97706',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 2,
  },
  stepNumberText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  stepText: {
    flex: 1,
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
});