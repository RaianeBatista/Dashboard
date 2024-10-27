'use client';

import { UploadCloud } from 'lucide-react';
import { useFileInput } from './Root';

export function FileList() {
    const { files } = useFileInput();

    return (
        <div className='mt-4 space-y-3'>
            {files.map((file) => {
                return (
                    <div key={file.name} className='group flex items-start gap-4 rounded-lg border border-zinc-200 p-4'>
                        <div className='rounded-full border-4 border-violet-200 bg-violet-200 p-2 text-violet-600 '>
                            <UploadCloud className='h-4 w-4'/>
                        </div>

                        <div className='flex flex-1 flex-col items-start gap-1'>
                            <div className=''></div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


//   return <p key={file.name}>{file.name}</p>;
