<template>
  <footer>
    <div
      class="container flex flex-col items-center justify-end gap-4 py-10 md:h-24 md:flex-row md:py-0"
    >
      <div
        class="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0"
      >
        <SharedLogo />
        &copy; {{ new Date().getFullYear() }}
      </div>
    </div>
  </footer>
</template>
