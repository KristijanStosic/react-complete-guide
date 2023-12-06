import { useRef, useState } from "react";
import Modal from "./Modal.jsx";
import Heading from "./Heading.jsx";
import Paragraph from "./Paragraph.jsx";

export default function NewTask({ onAdd }) {
    const modal = useRef();

    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {

        if (enteredTask.trim() === '') {
            modal.current.open();
            return;
        }

        onAdd(enteredTask);
        setEnteredTask('');
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Okay">
                <Heading modal>Invalid Input</Heading>
                <Paragraph modal>Oops ... looks like you forgot to enter a value.</Paragraph>
                <Paragraph modal>Please make sure you provide a valid value for every input field.</Paragraph>
            </Modal>
            <div className="flex items-center gap-4">
                <input
                    className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                    type='text'
                    onChange={handleChange}
                    value={enteredTask}
                />
                <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>
                    Add Task
                </button>
            </div>
        </>
    );
}