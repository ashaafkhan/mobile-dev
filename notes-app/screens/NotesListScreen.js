import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Switch,
  Pressable,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
  SafeAreaView,
} from 'react-native';

const NOTES = [
  {
    id: '1',
    title: 'React Native Notes App',
    content:
      'Building a simple and clean notes app using React Native with Expo. It includes...',
    date: 'May 18, 2025',
    time: '9:30 AM',
    iconColor: '#7c5cbf',
  },
  {
    id: '2',
    title: 'Shopping List',
    content: 'Milk, Bread, Eggs, Butter, Apples, Bananas, Chicken and more...',
    date: 'May 17, 2025',
    time: '6:15 PM',
    iconColor: '#3cb371',
  },
  {
    id: '3',
    title: 'Workout Plan',
    content: 'Monday: Chest & Triceps\nTuesday: Back & Biceps...',
    date: 'May 17, 2025',
    time: '7:45 AM',
    iconColor: '#e8a020',
  },
  {
    id: '4',
    title: 'Book Recommendations',
    content: '1. Atomic Habits by James Clear\n2. The Psychology of Money by Morgan...',
    date: 'May 16, 2025',
    time: '10:20 PM',
    iconColor: '#e05c5c',
  },
  {
    id: '5',
    title: 'Travel Ideas',
    content: 'Switzerland, Bali, Japan, Iceland...\nPlaces to visit in 2025.',
    date: 'May 16, 2025',
    time: '8:05 AM',
    iconColor: '#4a90d9',
  },
];

export default function NotesListScreen() {
  const systemScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemScheme === 'dark');
  const [search, setSearch] = useState('');
  const { width } = useWindowDimensions();

  const dark = isDark;

  const filtered = NOTES.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  const cardStyle = StyleSheet.compose(
    styles.cardBase,
    dark ? styles.cardDark : styles.cardLight
  );

  const renderItem = ({ item }) => (
    <Pressable style={cardStyle} android_ripple={{ color: '#ffffff22' }}>
      <View style={[styles.iconBox, { backgroundColor: item.iconColor }]}>
        <Text style={styles.iconText}>📄</Text>
      </View>

      <View style={styles.cardBody}>
        <Text style={[styles.cardTitle, dark && styles.textWhite]} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.cardPreview} numberOfLines={2}>
          {item.content}
        </Text>
        <View style={styles.cardMeta}>
          <Text style={styles.metaText}>📅 {item.date}</Text>
          <Text style={[styles.metaText, { marginLeft: 12 }]}>🕐 {item.time}</Text>
        </View>
      </View>

      <Text style={styles.chevron}>›</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={[styles.safeArea, dark ? styles.bgDark : styles.bgLight]}>
      <View style={[styles.header, { paddingHorizontal: width * 0.05 }]}>
        <Text style={[styles.heading, dark && styles.textWhite]}>My Notes</Text>
        <View style={styles.toggleRow}>
          <Text style={styles.moonIcon}>🌙</Text>
          <Text style={[styles.toggleLabel, dark && styles.textWhite]}>Dark Mode</Text>
          <Switch
            value={isDark}
            onValueChange={setIsDark}
            trackColor={{ false: '#ccc', true: '#7c5cbf' }}
            thumbColor="#fff"
          />
        </View>
      </View>

      <View style={{ marginHorizontal: width * 0.05, marginBottom: 16 }}>
        <TextInput
          style={[styles.searchInput, dark ? styles.searchDark : styles.searchLight]}
          placeholder="Search notes..."
          placeholderTextColor={dark ? '#888' : '#aaa'}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={[styles.list, { paddingHorizontal: width * 0.04 }]}
        showsVerticalScrollIndicator={false}
      />

      <Pressable style={styles.fab}>
        <Text style={styles.fabIcon}>＋</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  bgDark: { backgroundColor: '#0d0d1a' },
  bgLight: { backgroundColor: '#f2f2f7' },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 12,
  },
  heading: { fontSize: 28, fontWeight: '800', color: '#111' },
  textWhite: { color: '#ffffff' },
  toggleRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  moonIcon: { fontSize: 18 },
  toggleLabel: { fontSize: 14, color: '#888' },

  searchInput: {
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
  },
  searchDark: { backgroundColor: '#1e1e2e', color: '#fff' },
  searchLight: { backgroundColor: '#e8e8ee', color: '#111' },

  list: { paddingBottom: 100 },

  cardBase: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
  },
  cardDark: { backgroundColor: '#1a1a2e' },
  cardLight: { backgroundColor: '#ffffff' },

  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  iconText: { fontSize: 22 },

  cardBody: { flex: 1 },
  cardTitle: { fontSize: 16, fontWeight: '700', color: '#111', marginBottom: 4 },
  cardPreview: { fontSize: 13, color: '#888', marginBottom: 6, lineHeight: 18 },
  cardMeta: { flexDirection: 'row' },
  metaText: { fontSize: 12, color: '#666' },

  chevron: { fontSize: 24, color: '#555', marginLeft: 8 },

  fab: {
    position: 'absolute',
    bottom: 30,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#7c5cbf',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  fabIcon: { fontSize: 28, color: '#fff', lineHeight: 30 },
});
