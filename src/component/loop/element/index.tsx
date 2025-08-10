import * as r from "react"

export type CmpLoop_Props<T> = {
    readonly data: readonly T[] | undefined
    readonly children: (value: T, i: number, data: readonly T[]) => r.ReactNode
}

type CmpLoop = {
    <T>(props: CmpLoop_Props<T>): r.ReactNode
}

export const CmpLoop: CmpLoop = r.memo(props => {
    const element = r.useMemo(() => {
        if (!props.data) {
            return null
        }

        return props.data.map(props.children)
    }, [props.data, props.children])

    return element
})

export default CmpLoop
