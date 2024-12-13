import { useState } from 'react';
import { StyleSheet, View, TextInput, Text, ScrollView  } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function App() {

  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({});

  function handler(text){
    setTask({
      id: Math.floor(Math.random() * 900) + 100,
      title: text,
      completed: false
    });
  }
  
  function addToTaskListHandler(){
    setTaskList([...taskList,task]);
    setTask({});
  }
  
  function completeTaskHandler(id){
    const newTaskList = taskList.map(t=>{
      if(t.id === id){
        const temp = {...t};
        temp.completed = true;
        return temp;
      }
      return t;
    });
    setTaskList(newTaskList);
  }

  function deleteTaskHandler(id){
    const newTaskList = taskList.filter(t=>t.id !== id);
    setTaskList(newTaskList);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Todo List</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            onChangeText={handler}
            value={task.title ? task.title : ""}
          />
          <Icon 
            style={task.title?.length<=0 ? styles.disabledAddIcon :styles.addIcon} 
            name="pluscircle" 
            size={30} 
            onPress={task?.title?.length>0 ? addToTaskListHandler: null}
          />
        </View>
        <View style={styles.listContainer}>
          <ScrollView>
          {taskList.map((t,index)=>{
            return (
              <View key={t.id} style={styles.taskContainer}>
                <Text style={t.completed ? styles.taskCompletedStyle: styles.taskStyle}>{index+1}. {t.title}</Text>
                <View style={styles.iconContainer}>
                  <Icon name="delete" size={20} style={styles.deleteIcon} onPress={()=>deleteTaskHandler(t.id)}/>
                  <Icon name="check" size={20} style={styles.checkIcon} onPress={()=>completeTaskHandler(t.id)}/>
                </View>
              </View>
            );
          })}
          </ScrollView>
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
  body:{
    flexGrow: 1,
    padding: 20
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    flexGrow: 4
  },
  addIcon: {
    flexGrow: 0.25,
    padding: 0,
    textAlign: 'center',
    marginTop: 5,
    marginLeft: 10
  },
  disabledAddIcon: {
    flexGrow: 0.25,
    padding: 0,
    textAlign: 'center',
    marginTop: 5,
    marginLeft: 10,
    color: 'grey'
  },
  listContainer: {
    padding: 20
  },
  taskContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  taskStyle: {
    fontSize: 16,
    flexGrow: 0,
    width: 200,
    overflow: 'hidden'
  },
  taskCompletedStyle: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: 'grey',
    flexGrow: 0,
    width: 200,
    overflow: 'hidden'
  },
  iconContainer:{
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-between'
  },
  deleteIcon: {
    color: 'red'
  },
  checkIcon: {
    color: 'green',
    marginRight: 10
  }
});
