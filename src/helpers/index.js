import {collatedTasks} from "../constants"

export const collatedTasksExists = selectedProject =>{
    return collatedTasks.find(task=>task.key ===selectedProject)
}