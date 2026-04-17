import React, { useEffect, useRef, useState } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: props) {
  const editorRef: any = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(aiOutput);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button className='flex gap-2' onClick={handleCopy}>
          {copied ? (
            <>
              <Check className='w-4 h-4 text-green-400' />
              <span className='text-green-400'>Copied!</span>
            </>
          ) : (
            <>
              <Copy className='w-4 h-4' />
              Copy
            </>
          )}
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
  )
}

export default OutputSection