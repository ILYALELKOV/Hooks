import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const buttonRef = useRef();

    const handleChangeBclock = () => {
        buttonRef.current.style.height = "80px";
        buttonRef.current.style.width = "150px";
        buttonRef.current.textContent = "text";
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={buttonRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button
                onClick={handleChangeBclock}
                className="btn btn-danger mt-3"
            >
                Change block
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
