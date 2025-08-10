import * as r from "react"

type Filtered<T extends readonly any[]> = {
    [K in keyof T]: Exclude<T[K], undefined | null | false>
}

export type CmpRequire_Props<T extends readonly any[]> = {
    readonly value: T
    readonly state_empty?: boolean

    readonly fallback?: () => r.ReactNode
    readonly children?: r.ReactNode | ((value: Filtered<T>) => r.ReactNode)
}

type CmpRequire = {
    <T extends readonly any[]>(props: CmpRequire_Props<T>): r.ReactNode
}

export const CmpRequire: CmpRequire = r.memo(props => {
    if (props.state_empty) {
        return props.fallback?.() ?? null
    }

    for (const requirement of props.value) {
        if (requirement === undefined || requirement === null || requirement === false) {
            return props.fallback?.() ?? null
        }
    }

    if (typeof props.children === "function") {
        return props.children(props.value as Filtered<typeof props.value>)
    }

    return props.children
})

export default CmpRequire
