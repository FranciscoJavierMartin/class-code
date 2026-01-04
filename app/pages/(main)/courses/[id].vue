<template>
  <div>
    <div class="overflow-x-hidden">
      <header class="pt-12 sm:pt-16">
        <div class="container">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
              <h1 class="font-inter px-6 text-lg text-gray-600">
                Master Javascript
              </h1>
              <p
                class="mt-5 text-4xl leading-tight font-bold text-gray-900 sm:text-5xl lg:text-6xl"
              >
                <span class="relative inline-flex sm:inline">
                  <span
                    class="absolute inset-0 size-full bg-linear-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-30 blur-lg filter"
                  />
                  <span class="relative">Other text</span>
                </span>
              </p>
              <div
                class="mt-6 flex flex-wrap items-center justify-center gap-3"
              >
                <NuxtLink :class="cn(buttonVariants({ size: 'lg' }))">
                  Enroll now
                </NuxtLink>
                <NuxtLink
                  :class="
                    cn(buttonVariants({ variant: 'outline', size: 'lg' }))
                  "
                >
                  See intro
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="mt-6 pb-12">
            <div class="relative">
              <div class="absolute inset-0 h-2/3" />
              <div class="relative mx-auto">
                <div class="lg:mx-auto lg:max-w-3xl">
                  <img
                    :src="courseImg"
                    alt="Course image"
                    width="768px"
                    height="463px"
                    class="h-115.75 w-3xl rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>

    <section class="py-8 md:py-12 lg:py-24">
      <div class="container">
        <span
          class="inline-block rounded-full bg-green-500 px-4 py-0.5 text-xs font-medium text-white"
        >
          Development
        </span>
        <h3
          class="mt-3 text-2xl font-bold md:text-3xl lg:text-4xl 2xl:text-5xl"
        >
          My super text
        </h3>
        <p class="mt-3 text-sm text-gray-600">Master Javascript</p>
        <div
          class="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6 md:gap-20"
        >
          <div class="flex items-center gap-2">
            <img
              className="size-10 rounded-full"
              src="https://i.pravatar.cc"
              alt="John"
            />
            <p class="font-bold">John Doe</p>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <span class="font-semibold">Last updated:</span>
            <span>Jan 06, 2026</span>
          </div>
        </div>
        <div class="my-6">
          <Tabs default-value="instructor" class="w-full">
            <TabsList class="my-6 grid w-full max-w-3xl grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <h3 class="text-2xl">Course description</h3>
              <p class="mt-4">
                This tutorial will help you learn quickly and thoroughly. Lorem
                ipsum, or lipsum as it sometimes known, is dummy text used in
                laying out print, graphic or web designs. Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat
                mattis eros. <br />
                <br />
                You’ll be exposed to principles and strategies, but, more
                importantly, you’ll learn how actually apply these abstract
                concepts by coding three different websites for three very
                different the audiences. Lorem ipsum is dummy text used in
                laying out print, graphic or web designs Lorem ipsum blinding
                shot chinwag knees.
              </p>
              <div class="mt-8 space-y-6 rounded-md bg-gray-50 p-8">
                <h4 class="text-2xl">What you will learn?</h4>
                <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <li class="flex space-x-3">
                    <div class="relative top-1 flex-none">
                      <CheckCheck />
                    </div>
                    <div class="flex-1">
                      Learn how perspective works and how to incorporate your
                      art
                    </div>
                  </li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="curriculum">
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
                  <AccordionTrigger>
                    Built ecommerce using NextJS
                  </AccordionTrigger>
                  <AccordionContent>
                    <h1>Content 3</h1>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="instructor">
              <div class="rounded-md bg-gray-50 p-8">
                <div class="mb-8 md:flex md:gap-x-5">
                  <div
                    class="mb-5 h-77.5 w-67.5 max-w-full flex-none rounded md:mb-0"
                  >
                    <img
                      className="size-full object-cover rounded"
                      src="https://i.pravatar.cc"
                      alt="John"
                    />
                  </div>
                  <div class="flex-1">
                    <div class="max-w-75">
                      <h4 class="text-[34px] leading-12.75 font-bold">
                        John Doe
                      </h4>
                      <div class="mb-6 font-medium text-gray-600">
                        Web developer
                      </div>
                      <ul class="space-y-4">
                        <li class="flex space-x-3">
                          <Presentation class="text-gray-600" />
                          <div>10+ courses</div>
                        </li>
                        <li class="flex space-x-3">
                          <Presentation class="text-gray-600" />
                          <div>10+ courses</div>
                        </li>
                        <li class="flex space-x-3">
                          <Presentation class="text-gray-600" />
                          <div>10+ courses</div>
                        </li>
                        <li class="flex space-x-3">
                          <Presentation class="text-gray-600" />
                          <div>10+ courses</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p class="text-gray-600">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which do not
                  look even slightly believable. If you are going to use a
                  passage of Lorem Ipsum, you need to be sure there is not
                  anything embarrassing hidden in the middle of text. All the
                  Lorem Ipsum generators on the Internet tend.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>

    <section class="pb-8 md:pb-12 lg:pb-24">
      <div class="container">
        <TitleSection>Testimonials</TitleSection>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  BookCheck,
  CheckCheck,
  Clock10,
  FileQuestion,
  NotepadText,
  Presentation,
  Radio,
  StickyNote,
  Tv,
  Video,
} from 'lucide-vue-next';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import courseImg from '@/assets/images/courses/course_1.png';
</script>
