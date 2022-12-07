import styles from './CheckTask.module.css';

interface Check {
    taskCreate: string;
    taskConcluded: string;
}

export function CheckTask({taskCreate, taskConcluded}: Check) {
    return (
        <>
            <div className={styles.tasks}>
                <strong className={styles.create}>Tarefas criadas <span><p>{taskCreate}</p></span> </strong>

                <strong className={styles.concluded}>Concluídas <span><p>{taskConcluded} de {taskCreate} </p>  </span></strong>
            </div>
        </>
    )
}