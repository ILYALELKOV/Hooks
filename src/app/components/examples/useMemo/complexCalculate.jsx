import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factarial(n) {
    return n ? n * factarial(n - 1) : 1;
}

function runFactorial(n) {
    console.log("run factorial");
    return factarial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);

    const buttonColor = otherState ? "primary" : "secondary";

    const fact = useMemo(() => runFactorial(value), [value]);

    useEffect(() => {
        console.log("render");
    });

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value: {value}</p>
                <p>Result fact: {fact}</p>
                <button
                    onClick={() => setValue((prevState) => prevState + 10)}
                    className="btn btn-primary ms-2 md-2"
                >
                    Increment
                </button>
                <button
                    onClick={() => setValue((prevState) => prevState - 10)}
                    className="btn btn-primary ms-2 md-2"
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    onClick={() => setOtherState((prevState) => !prevState)}
                    className={"btn ms-2 md-2 btn-" + buttonColor}
                >
                    Change color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
