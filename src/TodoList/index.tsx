import React from 'react';
import { InputGroup, InputRow, LineSeparator, MainContainer, TaskInput, TaskListContainer, Title } from './styles';
import { BsFillPlusSquareFill } from "react-icons/bs";
import TodoItem from '../components/TodoItem';

const TodoList: React.FC<any> = ()=>{

    // Types
    interface TaskHash{
        [key: string]: {
            task: string;
            complete?: boolean;
        }
    }

    // States
    const [taskHash, setTaskHash] = React.useState<TaskHash>({});
    const [newTask, setNewTask] = React.useState<string>("");

    // Handlers
    const handleTaskInpueChange: React.ChangeEventHandler<HTMLInputElement> = (e)=>{
        setNewTask(e.target.value);
    }
    const handleAddTask = ()=>{

        // Generate ID
        let hashKeyArr = Object.keys(taskHash);
        let id = hashKeyArr[hashKeyArr.length - 1] + 1;

        // Insert new task
        taskHash[id] = { task: newTask };
        setTaskHash(taskHash);
        setNewTask(""); // Reset new task entruy
    }

    const handleUpdate = (id: any, value?: string)=>{
        if (value) {
            console.log(value); // Debug
            taskHash[id] = { task: value };
            setTaskHash({ ...taskHash });
        }
    }
    const handleDelete = (id: string)=>{
        console.log(id);
        delete taskHash[id];
        setTaskHash({ ...taskHash });
    }
    const handleCheck = (id: string)=>{
        taskHash[id] = { ...taskHash[id], complete: !taskHash[id].complete };
        setTaskHash({ ...taskHash });
    }

    return(
        <MainContainer>
            <Title>Todo List</Title>

            {/** Input Row */}
            <InputRow>
                <InputGroup>
                    <TaskInput
                        placeholder='ENTER TASK'
                        value={newTask}
                        onChange={handleTaskInpueChange}
                    />
                    <BsFillPlusSquareFill size={35} onClick={handleAddTask}/>
                </InputGroup>
            </InputRow>

            <LineSeparator/>

            {/** Item List */}
            <TaskListContainer>
                {
                    Object.keys(taskHash).map((k)=>(
                        <TodoItem
                            key={k}
                            id={k}
                            task={taskHash[k].task}
                            complete={taskHash[k].complete}
                            onUpdate={handleUpdate}
                            onDelete={handleDelete}
                            onCheck={handleCheck}
                        />
                    ))
                }
            </TaskListContainer>


        </MainContainer>
    )
}

export default TodoList;