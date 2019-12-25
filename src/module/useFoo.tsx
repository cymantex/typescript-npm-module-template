import {useState} from "react";

export interface FooOutput {
    foo: String,
    onFooChange: () => void
}

export const useFoo = (defaultValue: string = ""): FooOutput => {
    const [foo, setFoo] = useState(defaultValue);

    return {
        foo,
        onFooChange: () => setFoo(foo === "bar" ? "foo" : "bar")
    }
};