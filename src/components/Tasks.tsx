import { ChangeEvent, useState } from "react";

import { RxTrash } from "react-icons/rx";
import { Input } from "./Input";

import styles from './Tasks.module.css';

interface Task {
    tasks: (tasks: string) => void;
    onDeleteTask: (onDeleteTask: string) => void;
}

export function Tasks({tasks, onDeleteTask, ...props}: Task) {
    function deleteTask() {
        onDeleteTask(tasks);
    }
    
    return (
        <>
            <div className={styles.task}>
                <input 
                {...props}
                />
                <p>{tasks} </p>
                <button
                    onClick={deleteTask}
                > 
                    <RxTrash size={20}/>
                </button>
            </div>
        </>
    )
}