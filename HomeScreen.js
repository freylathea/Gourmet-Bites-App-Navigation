import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { globalStyles } from './styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80' }}
        style={styles.heroImage}
        imageStyle={{ borderRadius: 16 }}
      >
        <View style={styles.overlay}>
          <Text style={styles.heroBadge}>👨‍🍳 Gourmet Edition</Text>
          <Text style={styles.heroTitle}>Masterclass Recipes at Your Fingertips</Text>
          <Text style={styles.heroSubtitle}>
            Explore chef-curated dishes, detailed step-by-step instructions, and exact nutritional details.
          </Text>

          <TouchableOpacity
            style={globalStyles.primaryButton}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Catalog')}
          >
            <Text style={globalStyles.primaryButtonText}>Explore Catalog ➔</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.quickStatsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>50+</Text>
          <Text style={styles.statLabel}>Recipes</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>4.9★</Text>
          <Text style={styles.statLabel}>Average Rating</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>15 min</Text>
          <Text style={styles.statLabel}>Avg Prep Time</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heroImage: {
    height: 380,
    justifyContent: 'flex-end',
    marginBottom: 20,
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.55)',
    padding: 24,
    borderRadius: 16,
  },
  heroBadge: {
    color: '#fef3c7',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  heroTitle: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 8,
    lineHeight: 32,
  },
  heroSubtitle: {
    color: '#e5e7eb',
    fontSize: 14,
    marginBottom: 20,
    lineHeight: 20,
  },
  quickStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '800',
    color: '#d97706',
  },
  statLabel: {
    fontSize: 11,
    color: '#6b7280',
    marginTop: 4,
  },
});