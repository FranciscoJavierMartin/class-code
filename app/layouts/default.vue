<template>
  <div class="flex min-h-screen flex-col">
    <div
      class="bg-background/50 fixed top-0 right-0 left-0 z-40 border-b backdrop-blur-md"
    >
      <div class="container flex h-20 items-center justify-between py-6">
        <SharedNavbar />
      </div>
    </div>
    <main>
      <slot />
    </main>
    <SharedFooter />
  </div>
</template>
