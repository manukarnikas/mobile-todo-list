import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ListComponent from './components/ListComponent';
import InputComponent from './components/InputComponent';

export default function App() {

  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({});

  function inputHandler(text) {
    setTask({
      id: Math.floor(Math.random() * 900) + 100,
      title: text,
      completed: false
    });
  }

  function addToTaskListHandler() {
    setTaskList([...taskList, task]);
    setTask({});
  }

  function completeTaskHandler(id) {
    const newTaskList = taskList.map(t => {
      if (t.id === id) {
        const temp = { ...t };
        temp.completed = true;
        return temp;
      }
      return t;
    });
    setTaskList(newTaskList);
  }

  function deleteTaskHandler(id) {
    const newTaskList = taskList.filter(t => t.id !== id);
    setTaskList(newTaskList);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Todo List</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <InputComponent task={task} inputHandler={inputHandler} addToTaskListHandler={addToTaskListHandler} />
        </View>
        <View style={styles.listContainer}>
          <ListComponent taskList={taskList} completeTaskHandler={completeTaskHandler} deleteTaskHandler={deleteTaskHandler} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  header: {
    backgroundColor: '#008080',
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 24,
    width: 100
  },
  body: {
    flexGrow: 1,
    padding: 20
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  listContainer: {
    padding: 20
  }
});
