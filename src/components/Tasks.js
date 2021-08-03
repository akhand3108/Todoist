import React from 'react'
import { useTasks } from '../hooks';
import Checkbox from './Checkbox';

function Tasks() {
    const {tasks} = useTasks()

    const projectName="";

    return (
        <div className="tasks" data-testid>="tasks"
            <h2 data-testid="project-name">projectName</h2>

            <ul classNmae="tasks__list">
                {tasks.map(task=>(<li key={task.id}>
                    <Checkbox id={task.id}/>
                    <span>{task.task}</span>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Tasks
