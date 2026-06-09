import * as React from "react";
import {clsx} from "clsx";


export function Input({className, type, ...props}: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={clsx("input-base", className)}
            {...props}
        />
    );
}
