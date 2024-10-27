'use client';

import { useFileInput } from './Root';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { FileItem } from './FileItem';

export function FileList() {
  const { files } = useFileInput();
  const [animationParent] = useAutoAnimate();

  return (
    <div ref={animationParent} className='mt-4 space-y-3'>
      {files.map((file) => {
        return <FileItem key={file.name} name={file.name} size={file.size} state='progress' />;
      })}
    </div>
  );
}

//   return <p key={file.name}>{file.name}</p>;
