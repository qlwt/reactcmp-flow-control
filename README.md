# @qyu/reactcmp-flow-control

General react flow control components

## Usage

### If

Render conditionally - fallback on undefined | false | null and children otherwise

```typescriptreact
function App() {
    return <CmpIf 
        value={Math.random() > 0.5 ? true : false}
        
        fallback={() => {
            return <>
                Fallback
            </>
        }}
    >
        Render
    </CmpIf>
}
```

### Require

Render conditionally depending on values - renders fallback if any value is undefined | false | null and children otherwise

```typescriptreact
function App() {
    declare const value: null | string

    return <CmpRequire
        value={[value] as const}
        // force fallback render
        state_empty={false}
        
        fallback={() => {
            return <>
                Fallback
            </>
        }}
    >
        {([value]) => {
            return <>
                Render {value}
            </>
        }}
    </CmpRequire>
}
```

### Loop

Basic array.map wrapper

```typescriptreact
function App() {
    return <CmpLoop data={["string"]}>
        {(value, i, data) => {
            return <div key={i}>
                {value}
            </div>
        }}
    </CmpLoop>
}
```

### Repeat

Repeats element number of times

```typescriptreact
function App() {
    return <CmpRepeat repeat={4}>
        {(i) => {
            return <div key={i}>
                Hello World
            </div>
        }}
    </CmpRepeat>
}
```
