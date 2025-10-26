import * as r from "react"

export type CmpIf_Props = {
    readonly fallback?: () => r.ReactNode
    readonly value: null | undefined | false | any
    readonly children?: r.ReactNode | (() => r.ReactNode)
}

export const CmpIf: r.FC<CmpIf_Props> = r.memo(props => {
    if (props.value === null || props.value === undefined || props.value === false) {
        return props.fallback?.() || null
    }

    if (typeof props.children === "function") {
        return props.children()
    }

    return props.children
})

export default CmpIf
