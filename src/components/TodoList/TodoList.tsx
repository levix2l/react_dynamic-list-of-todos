import React from 'react';
import './TodoList.scss';
import classNames from 'classnames';

type Props = {
  todos: Todo[],
  selectUser: (userId: number) => void;
  selectedUserId: number;
};

type State = {
  query: string;
  filterBy: string;
};

export class TodoList extends React.Component<Props, State> {
  state: State = {
    query: '',
    filterBy: 'all',
  };

  onUserSelected = (userId: number) => {
    if (userId === this.props.selectedUserId) {
      return null;
    }

    return this.props.selectUser(userId);
  };

  handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.target.value.toLowerCase(),
    });
  };

  getFilteredTodos = () => (
    this.props.todos.filter(todo => todo.title.toLowerCase().includes(this.state.query))
  );

  handleSelectorInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      filterBy: event.target.value,
    });
  };

  render() {
    const { filterBy } = this.state;

    let visibleTodos = this.getFilteredTodos();

    visibleTodos = visibleTodos.filter(todo => {
      switch (filterBy) {
        case 'all':
          return todo;
        case 'active':
          return !todo.completed;
        case 'completed':
          return todo.completed;
        default:
          return 0;
      }
    });

    return (

      <div className="TodoList">
        <h2 className="subtitle pb-2">Todos:</h2>
        <div className="control pb-2">
          <input
            type="text"
            id="search-query"
            className="input"
            placeholder="Search by title"
            value={this.state.query}
            onChange={this.handleSearch}
          />
        </div>

        <section className="select is-info">
          <select
            value={filterBy}
            onChange={this.handleSelectorInput}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </section>

        <div className="TodoList__list-container pt-2">
          <ul className="TodoList__list">
            {visibleTodos.map((todo) => (
              <li
                key={todo.id}
                className={classNames('TodoList__item',
                  {
                    'TodoList__item--unchecked': !todo.completed,
                  },
                  {
                    'TodoList__item--checked': todo.completed,
                  })}
              >
                <input type="checkbox" checked={todo.completed} readOnly />
                <p>{todo.title}</p>

                <button
                  className="
                    TodoList__user-button
                    button
                  "
                  type="button"
                  onClick={() => this.onUserSelected(+todo.userId)}
                >
                  {`User #${todo.userId}`}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
