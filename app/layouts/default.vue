<template>
  <div class="flex min-h-screen flex-col">
    <div
      class="bg-background/50 fixed top-0 right-0 left-0 z-40 border-b backdrop-blur-md"
    >
      <div class="container flex h-20 items-center justify-between py-6">
        <SharedNavbar />
      </div>
    </div>
    <main class="mt-20 flex flex-1 flex-col">
      <slot />
    </main>
    <SharedFooter />
  </div>
</template>
