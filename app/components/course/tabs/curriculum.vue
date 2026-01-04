<template>
  <div>
    <span class="flex items-center gap-1.5">
      <BookCheck class="size-4" /> 12 chapters
    </span>
    <span class="flex items-center gap-1.5">
      <Clock10 class="size-4" /> 50+ hours
    </span>
    <span class="flex items-center gap-1.5">
      <Radio class="size-4" /> 4 Live class
    </span>
  </div>

  <Accordion
    :default-value="['item-1', 'item-2', 'item-3']"
    type="multiple"
    collapsible
    class="w-full"
  >
    <AccordionItem value="item-1">
      <AccordionTrigger>Introduction</AccordionTrigger>
      <AccordionContent>
        <div
          class="mt-4 mb-6 flex flex-wrap items-center gap-x-5 text-sm text-gray-600"
        >
          <span class="flex items-center gap-1.5">
            <Video class="size-4" /> 12 lessons
          </span>
          <span class="flex items-center gap-1.5">
            <NotepadText class="size-4" /> 10 notes
          </span>
          <span class="flex items-center gap-1.5">
            <FileQuestion class="size-4" /> 10 quiz
          </span>
          <span class="flex items-center gap-1.5">
            <Radio class="size-4" /> 1 Live class
          </span>
        </div>
        <div class="space-y-3">
          <button
            :class="
              cn(
                'flex w-full items-center gap-x-2 text-sm font-medium text-slate-500 transition-all hover:text-slate-600',
              )
            "
          >
            <div class="flex items-center gap-x-2">
              <Tv :size="16" class="text-slate-500" />
              What is React?
            </div>
          </button>
          <button
            :class="
              cn(
                'flex w-full items-center gap-x-2 text-sm font-medium text-slate-500 transition-all hover:text-slate-600',
              )
            "
          >
            <div class="flex items-center gap-x-2">
              <Tv :size="16" class="text-slate-500" />
              Learn React basics
            </div>
          </button>
          <button
            :class="
              cn(
                'flex w-full items-center gap-x-2 text-sm font-medium text-slate-500 transition-all hover:text-slate-600',
              )
            "
          >
            <div class="flex items-center gap-x-2">
              <Tv :size="16" class="text-slate-500" />
              Build a simple React App
            </div>
          </button>
          <button
            :class="
              cn(
                'flex w-full items-center gap-x-2 text-sm font-medium text-slate-500 transition-all hover:text-slate-600',
              )
            "
          >
            <div class="flex items-center gap-x-2">
              <StickyNote :size="16" class="text-slate-500" />
              React basic note
            </div>
          </button>
          <button
            :class="
              cn(
                'flex w-full items-center gap-x-2 text-sm font-medium text-slate-500 transition-all hover:text-slate-600',
              )
            "
          >
            <div class="flex items-center gap-x-2">
              <StickyNote :size="16" class="text-slate-500" />
              Project requirement analysis
            </div>
          </button>
        </div>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Master NextJS</AccordionTrigger>
      <AccordionContent>
        <h1>Content 2</h1>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger> Built ecommerce using NextJS </AccordionTrigger>
      <AccordionContent>
        <h1>Content 3</h1>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>

<script setup lang="ts">
import {
  StickyNote,
  Tv,
  FileQuestion,
  NotepadText,
  Video,
  BookCheck,
  Clock10,
  Radio,
} from 'lucide-vue-next';
import { cn } from '@/lib/utils';
</script>
