import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Pressable} from 'react-native';
import { useState } from 'react';

import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

function goalInputHandler(enteredText){
  setEnteredGoalText(enteredText)
};

function addGoalHandler(){
  setCourseGoals(currentCourseGoals => [...courseGoals, {text: enteredGoalText, key: Math.random().toString},
  ]);
};

function deleteGoalHandler(id){
  setCourseGoals(currentCourseGoals => {
    return currentCourseGoals.filter((goal) => goal.id !== id);
  });
}

  return (
    <View style = {styles.appContainer}>
      <View style = {styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder = "Your course goal." onChangeText={goalInputHandler}/>
        <Button title = "Add goal" onPress={addGoalHandler}/>
      </View>
      <View style = {styles.goalsContainer}>
      <FlatList data = {courseGoals} renderItem = {(itemData) => {
        return <GoalItem text = {itemData.item.text} id = {itemData.item.id} onDeleteItem = {deleteGoalHandler} />;
      }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8, 
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
});
