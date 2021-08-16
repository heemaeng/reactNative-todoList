import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import TaskModal from './components/TaskModal';

export default class App extends React.Component {
  state = {
    todos: [
      {
        title: '일기쓰기',
        done: true,
      },
      {
        title: '스터디 준비하기',
        done: false,
      },
    ]
  }
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <FlatList
          data={this.state.todos}
          renderItem={({ item }) => {
            return (
              <TodoItem
                title={item.title}
                done={item.done}
                keyExtractor={(_, index) => {
                  return '${index}'
                }}
              />
            )
          }}
        />
        <TaskModal isVisible={false} />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
