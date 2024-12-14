import { StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function InputComponent(props) {
    const { task, inputHandler, addToTaskListHandler } = props;
    return (
        <>
            <TextInput
                style={styles.input}
                placeholder="Type here"
                onChangeText={inputHandler}
                value={task.title ? task.title : ""}
            />
            <Icon
                style={task.title?.length <= 0 ? styles.disabledAddIcon : styles.addIcon}
                name="pluscircle"
                size={30}
                onPress={task?.title?.length > 0 ? addToTaskListHandler : null}
            />
        </>
    );
}

const styles = StyleSheet.create({
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
    }
});