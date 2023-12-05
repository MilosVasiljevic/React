import AddTask from './test/AddTask.js';
import TaskList from './test/TaskList.js';
import { TasksProvider } from './test/TasksContext.js';

export default function TaskApp() {
  return ( // poziva f-ju tasks provider, sve unutar njega je children varijabla
    <TasksProvider> 
      <h1>Lista taskova</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}

