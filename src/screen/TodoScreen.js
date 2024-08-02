import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IconButton } from 'react-native-paper'
import FallBack from '../components/FallBack'

const dummyData = [{
    id: "1",
    title: "Buy groceries",

},
{
    id: "2",
    title: "Clean the house",

},
]

console.log(Date.now().toString())

const TodoScreen = () => {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])
    const [editedTodo, setEditedTodo] = useState(null)

    const handleAddTodo = () => {
        /* structure of a single todo item 
        {
        id:
        title:
        }
        */

        if (todo === "") {
            return;
        }
        setTodoList([...todoList, { id: Date.now().toString(), title: todo }])
        setTodo("")
    }

    const handleDeleteTodo = (id) => {
        const updatedTodoList = todoList.filter((todo) => todo.id !== id)

        setTodoList(updatedTodoList)
    }

    const handleEditTodo = (todo) => {
        setEditedTodo(todo)
        setTodo(todo.title)
    }
    const handleUpdateTodo = () => {
        const updatedTodos = todoList.map((item) => {
            if (item.id === editedTodo.id) {
                return { ...item, title: todo }
            }
            return item
        })
        setTodoList(updatedTodos)
        setEditedTodo(null)
        setTodo("")
    }

    const renderTodos = ({ item, index }) => {
        return (
            <View style={{
                backgroundColor: "#f4a460",
                borderRadius: 6,
                paddingHorizontal: 6,
                paddingVertical: 8,
                marginBottom: 12,
                flexDirection: "row",
                alignItems: "center",
            }}>

                <Text style={{ color: "#fff", fontSize: 20, fontWeight: '700', flex: 1 }}>{item.title}</Text>
                <IconButton icon="pencil" iconColor="#fff" onPress={() => handleEditTodo(item)} />
                <IconButton icon="trash-can" iconColor="#fff" onPress={() => handleDeleteTodo(item.id)} />
            </View>)

    }

    return (
        <View style={{ marginHorizontal: 16, marginTop: 50 }}>
            <TextInput
                style={{
                    borderWidth: 2,
                    borderColor: "#f4a460",
                    borderRadius: 6,
                    paddingVertical: 10,
                    paddingHorizontal: 16,
                    justifyContent: "flex-end",
                }}
                placeholder='Görev ekle...'
                value={todo}
                onChangeText={(userText) => setTodo(userText)}
            />
            {editedTodo ? (<TouchableOpacity onPress={() => handleUpdateTodo()} style={{
                backgroundColor: "#f4a460",
                borderRadius: 6,
                paddingVertical: 12,
                marginVertical: 34,
                alignItems: "center",
            }} >
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>Kaydet</Text>
            </TouchableOpacity>) : (
                <TouchableOpacity onPress={() => handleAddTodo()} style={{
                    backgroundColor: "#f4a460",
                    borderRadius: 6,
                    paddingVertical: 12,
                    marginVertical: 34,
                    alignItems: "center",
                    justifyContent: "flex-end"
                }} >
                    <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>Ekle</Text>
                </TouchableOpacity>)}

            {/* Render todo list*/}

            <FlatList data={todoList} renderItem={renderTodos} />

            {todoList.length <= 0 && <FallBack />}



        </View>

    )
}


export default TodoScreen

