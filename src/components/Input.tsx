import { useState, ChangeEvent } from 'react';
import { RxFilePlus, RxTarget } from 'react-icons/rx';
import { CheckTask } from './CheckTask';

import styles from './Input.module.css';
import { Tasks } from './Tasks';

export function Input() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [taskConcluded, setTaskConcluded] = useState(0);
    const [totalTasks, setTotalTasks] = useState(false);

    function handleCreateNewTask() {
        setTasks([...tasks, newTask]);
        setNewTask('');
        console.log(newTask)
    }

    function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity("");
        setNewTask(event.target.value)
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setTotalTasks(target.checked);

        if (value == true) {
            setTaskConcluded((state) => {
                return state + 1
            });
        } else if (value == false) {
            setTaskConcluded((state) => {
                return state - 1
            });
        }
    }

    function deleteTask(deleteTask: string) {
        const tasksWithoutDeleteOne= tasks.filter(task => {
            return task != deleteTask
        })
        setTasks(tasksWithoutDeleteOne);

    }

    const tasksTotal = tasks.length;

    return (
        <>
            <article>
                <div className={styles.search}>
                    <input
                        type="text"
                        value={newTask}
                        placeholder='Adicione uma nova tarefa'
                        onChange={handleNewTask}
                    />
                    <button
                        onClick={handleCreateNewTask}
                    >
                        Criar
                        <RxFilePlus />
                    </button>
                </div>
                <CheckTask taskCreate={tasksTotal} taskConcluded={taskConcluded} />
                <div className={styles.checkTask}>

                    {
                        tasks.map((task, index) => {
                            return (
                                <Tasks
                                    key={String(index)}
                                    tasks={task}
                                    type='checkbox'
                                    onChange={handleInputChange}
                                    hasLine={totalTasks}
                                    onDeleteTask={deleteTask}
                                />

                            )
                        })
                    }
                </div>
            </article>
        </>
    )
}