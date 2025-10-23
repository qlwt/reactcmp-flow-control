import * as r from "react"

export type CmpRepeat_Props = {
    readonly repeat: number
    readonly children: (index: number) => r.ReactNode

    readonly reverse?: boolean
}

export const CmpRepeat: r.FC<CmpRepeat_Props> = r.memo(props => {
    const element_children = r.useMemo(() => {
        const result = new Array<r.ReactNode>(props.repeat)

        if (props.reverse === true) {
            for (let i = props.repeat - 1, j = 0; i >= 0; --i, ++j) {
                result[j] = props.children(i)
            }
        } else {
            for (let i = 0; i < props.repeat; ++i) {
                result[i] = props.children(i)
            }
        }

        return result
    }, [props.repeat, props.reverse, props.children])

    return element_children
})

export default CmpRepeat
