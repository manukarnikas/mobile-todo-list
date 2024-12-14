import { StyleSheet, View, Text, ScrollView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function ListComponent(props) {
    const { taskList, completeTaskHandler, deleteTaskHandler } = props;
    return (
        <>
            <ScrollView>
                {taskList.map((t, index) => {
                    return (
                        <Pressable key={t.id} android_ripple={{ color: '#28a99e' }} onPress={() => completeTaskHandler(t.id)}>
                            <View style={styles.taskContainer}>
                                <Text style={t.completed ? styles.taskCompletedStyle : styles.taskStyle}>{index + 1}. {t.title}</Text>
                                <Icon name="delete" size={20} style={styles.deleteIcon} onPress={() => deleteTaskHandler(t.id)} />
                            </View>
                        </Pressable>
                    );
                })}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
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
  deleteIcon: {
    color: 'red'
  }
})