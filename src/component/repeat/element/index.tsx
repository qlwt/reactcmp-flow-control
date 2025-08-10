import * as r from "react"

export type CmpRepeat_Props = {
    readonly repeat: number
    readonly children: (index: number) => r.ReactNode
}

export const CmpRepeat: r.FC<CmpRepeat_Props> = r.memo(props => {
    const element_children = r.useMemo(() => {
        const result: r.ReactNode[] = []

        for (let i = 0; i < props.repeat; ++i) {
            result.push(props.children(i))
        }

        return result
    }, [props.repeat, props.children])

    return element_children
})

export default CmpRepeat
