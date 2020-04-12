import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map(
      (todo: Todo): JSX.Element => {
        return (
          <li key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
            {todo.title}
          </li>
        );
      }
    );
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  render() {
    return (
      <div>
        <h4>{this.state.fetching ? 'LOADING' : null}</h4>
        <ul>{this.renderList()}</ul>
        <button onClick={this.onButtonClick}>Fetch todos</button>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
