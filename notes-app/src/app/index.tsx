import React from 'react';
import { ScrollView } from 'react-native';

import NoteEditorScreen from '../../screens/NoteEditorScreen';
import NotesListScreen from '../../screens/NotesListScreen';

export default function HomeScreen() {
  return (
    <ScrollView>
      <NotesListScreen />
      <NoteEditorScreen />
    </ScrollView>
  );
}
