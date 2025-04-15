import { Editor } from '@monaco-editor/react'
import React from 'react'
import { ElementType } from '../utils/utils'
type PropType = {
    btnData: ElementType
    setElement: React.Dispatch<any>
}
const CodeEditor: React.FC<PropType> = ({ btnData, setElement }) => {
    return (
        <Editor
            height="90%"
            language="html"
            theme="vs-dark"
            value={btnData?.preview}
            onChange={(value) => setElement((prev: ElementType) => ({ ...prev, preview: value }))}
            options={{
                fontSize: 16,
                minimap: { enabled: false },
                wordWrap: "on",
                tabSize: 2,
            }}
        />
    )
}

export default CodeEditor
