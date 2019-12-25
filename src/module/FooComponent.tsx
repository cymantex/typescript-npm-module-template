import React from "react";
import {useFoo} from "./useFoo";
import "./foo.scss";

export interface Props {
    defaultValue: string
}

export const FooComponent: React.FC<Props> = ({defaultValue = "foo"}) => {
    const {foo, onFooChange} = useFoo(defaultValue);

    return (
        <button onClick={onFooChange}>
            {foo}
        </button>
    );
};