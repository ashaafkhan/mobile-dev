import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';

const TITLE_MAX = 100;
const CONTENT_MAX = 2000;

export default function NoteEditorScreen() {
  const scheme = useColorScheme();
  const dark = scheme === 'dark';
  const { width } = useWindowDimensions();

  const [title, setTitle] = useState('React Native Notes App');
  const [content, setContent] = useState(
    'React Native is an excellent framework for building cross-platform mobile applications using JavaScript and React.\n\nWith Expo, we can set up projects quickly and focus on building amazing user experiences.\n\nThis notes app is a great example of using core components like FlatList, TextInput, Pressable, Switch, and more.'
  );
  const [tags, setTags] = useState('');

  const inputPadding = StyleSheet.flatten([
    styles.inputBase,
    { paddingHorizontal: width * 0.04 },
  ]);

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ImageBackground
        source={require('../assets/mountain.jpg')}
        style={styles.headerBg}
        imageStyle={styles.headerImg}
      >
        <Pressable style={styles.backBtn}>
          <Text style={styles.backIcon}>‹</Text>
        </Pressable>

        <Pressable style={styles.saveBtn}>
          <Text style={styles.saveBtnText}>Save</Text>
        </Pressable>

        <View style={styles.headerTitleBlock}>
          <Text style={styles.headerTitle}>Edit Note</Text>
          <Text style={styles.headerDate}>May 18, 2025  •  9:30 AM</Text>
        </View>
      </ImageBackground>

      <ScrollView
        style={[styles.form, dark ? styles.formDark : styles.formLight]}
        contentContainerStyle={{ paddingBottom: 40 }}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.label}>Title</Text>
        <View style={[styles.inputWrapper, dark ? styles.wrapperDark : styles.wrapperLight]}>
          <TextInput
            style={[inputPadding, dark ? styles.textDark : styles.textLight]}
            value={title}
            onChangeText={(t) => setTitle(t.slice(0, TITLE_MAX))}
            placeholder="Note title..."
            placeholderTextColor="#aaa"
            maxLength={TITLE_MAX}
          />
          <Text style={styles.counter}>
            {title.length}/{TITLE_MAX}
          </Text>
        </View>

        <Text style={[styles.label, { marginTop: 20 }]}>Content</Text>
        <View style={[styles.inputWrapper, dark ? styles.wrapperDark : styles.wrapperLight]}>
          <TextInput
            style={[inputPadding, styles.contentInput, dark ? styles.textDark : styles.textLight]}
            value={content}
            onChangeText={(t) => setContent(t.slice(0, CONTENT_MAX))}
            placeholder="Write your note..."
            placeholderTextColor="#aaa"
            multiline
            maxLength={CONTENT_MAX}
            textAlignVertical="top"
          />
          <Text style={styles.counter}>
            {content.length}/{CONTENT_MAX}
          </Text>
        </View>

        <Text style={[styles.label, { marginTop: 20 }]}>Tags (optional)</Text>
        <View
          style={[
            styles.inputWrapper,
            dark ? styles.wrapperDark : styles.wrapperLight,
            styles.tagsRow,
          ]}
        >
          <Text style={styles.tagIcon}>🏷</Text>
          <TextInput
            style={[inputPadding, styles.tagsInput, dark ? styles.textDark : styles.textLight]}
            value={tags}
            onChangeText={setTags}
            placeholder="Add tags separated by comma"
            placeholderTextColor="#aaa"
          />
        </View>

        <View style={styles.bottomRow}>
          <Pressable style={styles.backBtnBottom}>
            <Text style={styles.backBtnText}>← Back</Text>
          </Pressable>
          <Pressable style={styles.saveNoteBtn}>
            <Text style={styles.saveNoteText}>📋  Save Note</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },

  headerBg: {
    height: 200,
    justifyContent: 'flex-end',
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerImg: { borderRadius: 0 },
  backBtn: {
    position: 'absolute',
    top: 50,
    left: 16,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: { color: '#fff', fontSize: 24, lineHeight: 26 },
  saveBtn: {
    position: 'absolute',
    top: 46,
    right: 16,
    backgroundColor: '#7c5cbf',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  saveBtnText: { color: '#fff', fontWeight: '700', fontSize: 15 },
  headerTitleBlock: { alignItems: 'center' },
  headerTitle: { color: '#fff', fontSize: 26, fontWeight: '800' },
  headerDate: { color: '#ddd', fontSize: 13, marginTop: 4 },

  form: { flex: 1, paddingHorizontal: 18, paddingTop: 24 },
  formLight: { backgroundColor: '#f5f5f5' },
  formDark: { backgroundColor: '#0d0d1a' },

  label: { fontSize: 14, fontWeight: '700', color: '#7c5cbf', marginBottom: 8 },

  inputWrapper: {
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  wrapperLight: { backgroundColor: '#fff' },
  wrapperDark: { backgroundColor: '#1e1e2e', borderColor: '#333' },

  inputBase: { fontSize: 15, paddingVertical: 14 },
  textLight: { color: '#111' },
  textDark: { color: '#fff' },

  contentInput: { minHeight: 200, paddingTop: 14 },

  counter: {
    textAlign: 'right',
    fontSize: 12,
    color: '#aaa',
    paddingRight: 14,
    paddingBottom: 10,
  },

  tagsRow: { flexDirection: 'row', alignItems: 'center' },
  tagIcon: { paddingLeft: 14, fontSize: 18 },
  tagsInput: { flex: 1, paddingVertical: 14 },

  bottomRow: { flexDirection: 'row', gap: 12, marginTop: 32 },
  backBtnBottom: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtnText: { fontSize: 15, color: '#555', fontWeight: '600' },
  saveNoteBtn: {
    flex: 2,
    backgroundColor: '#7c5cbf',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveNoteText: { fontSize: 15, color: '#fff', fontWeight: '700' },
});
