import { useCallback, useState } from "react";
import Child from "./ChildExample";

export default function CallBack() {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("you, please sub to channel");

    const returnComment = useCallback(
        (name) => {
            return data + name;
        },
        [data]
    );

    return (
        <div className="App">
            <Child returnComment={returnComment} />
            <button
                onClick={() => {
                    setToggle(!toggle);

                }}
            >
                {" "}
                Toggle
            </button>

            <button
                onClick={() => {
                    setData('hi');
                }}
            >


                Click
            </button>

            {toggle &&  <h1>toggle</h1>}
        </div>
    )
}