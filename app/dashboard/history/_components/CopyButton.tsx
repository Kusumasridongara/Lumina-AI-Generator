"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'

function CopyButton({ aiResponse }: any) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(aiResponse)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div>
      <Button
        variant='ghost'
        className='text-primary flex gap-2'
        onClick={handleCopy}
      >
        {copied ? (
          <>
            <Check className='w-4 h-4 text-green-500' />
            <span className='text-green-500 font-bold'>Copied!</span>
          </>
        ) : (
          <>
            <Copy className='w-4 h-4' />
            Copy
          </>
        )}
      </Button>
    </div>
  )
}

export default CopyButton