'use client';

import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';

export interface TbaItemProps {
  value: string;
  title: string;
  isSelected?: boolean;
}

export function TabItem({ value, title, isSelected = false }: TbaItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className='relative group px-1 pb-4 text-zinc-500 dark:text-zinc-400  data-[state=active]:text-violet-700 outline-none  dark:hover:text-violet-300 dark:data-[state=active]:text-violet-300'
    >
     
      <span className='whitespace-nowrap group-focus:ring-2 group-focus:ring-violet-400 rounded group-focus:ring-offset-4'
      >{title}</span>

      {isSelected && (
        <motion.div
          layoutId='activeTab'
          className='absolute -bottom-px  left-0 right-0 h-0.5 bg-violet-700 dark:bg-violet-300'
        />
      )}
    </Tabs.Trigger>
  );
}
