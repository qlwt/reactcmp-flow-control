import * as r from "react"

export type CmpIf_Props = {
    readonly children?: r.ReactNode
    readonly fallback?: () => r.ReactNode
    readonly value: null | undefined | false | any
}

export const CmpIf: r.FC<CmpIf_Props> = r.memo(props => {
    if (props.value === null || props.value === undefined || props.value === false) {
        return props.fallback?.() || null
    }

    return props.children
})

export default CmpIf
