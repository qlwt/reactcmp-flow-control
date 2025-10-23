import * as r from "react"

export type CmpLoop_Props<T> = {
    readonly data: readonly T[] | undefined
    readonly children: (value: T, i: number, data: readonly T[]) => r.ReactNode

    readonly reverse?: boolean
}

type CmpLoop = {
    <T>(props: CmpLoop_Props<T>): r.ReactNode
}

export const CmpLoop: CmpLoop = r.memo(props => {
    const element = r.useMemo(() => {
        if (!props.data) {
            return null
        }

        const result = new Array<r.ReactNode>(props.data.length)

        if (props.reverse === true) {
            for (let i = props.data.length - 1, j = 0; i >= 0; --i, ++j) {
                result[j] = props.children(props.data[i]!, i, props.data)
            }
        } else {
            for (let i = 0; i < props.data.length; ++i) {
                result[i] = props.children(props.data[i]!, i, props.data)
            }
        }

        return result
    }, [props.data, props.children, props.reverse])

    return element
})

export default CmpLoop
