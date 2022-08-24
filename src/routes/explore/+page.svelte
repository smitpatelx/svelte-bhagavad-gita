<script lang='ts'>
  import type { PageData } from './$types';
  import SpxTopBar from '$components/generic/SpxTopBar.svelte';

  export let data: PageData;
</script>

<svelte:head>
  <title>GITA - All Chapters</title>
</svelte:head>
<div class="w-full h-full block container mx-auto">
  <div class="bg-slate-800/60 w-full h-full p-4 gap-y-4 flex flex-col min-h-screen">
    <SpxTopBar>
      <div class="flex flex-wrap gap-x-6 bg-gradient-to-br from-red-500 via-amber-500 to-amber-600
      bg-clip-text text-transparent text-lg">
        <h2 class="font-bold">
          Index
        </h2>
      </div>
    </SpxTopBar>

    <h3 class="font-bold text-2xl text-slate-100 text-center">
      All Chapters
    </h3>
    <div
      class="w-full p-2 grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-3 xl:grid-cols-4 gap-2"
    >
      {#each data.chapters as chapter}
        <a
          class="bg-slate-900 py-8 px-4 rounded-md
            flex flex-col gap-y-2
            focus:outline-none focus:ring focus:ring-orange-500
            focus:bg-orange-900 focus:text-opacity-80
            hover:bg-orange-900 hover:shadow-lg hover:shadow-orange-700/20
            transition-all duration-300 ease-in-out group"
          href={`/explore/${chapter.chapter_number}/`}
          sveltekit:prefetch
        >
          <div class="w-full flex flex-wrap items-center justify-between">
            <h4 class="text-2xl font-semibold text-slate-100">
              {chapter.name}
            </h4>
            <span class="text-2xl font-normal text-orange-600 group-hover:text-orange-200 pr-2">
              {chapter.chapter_number}
            </span>
          </div>
          <ul class="list-disc pl-4">
            <li class="text-slate-400 group-hover:text-amber-500 text-lg font-normal
              w-full whitespace-pre-wrap break-words">
              {chapter.meaning.en}
            </li>
            <li class="text-slate-400 group-hover:text-amber-500 text-lg font-normal
              w-full whitespace-pre-wrap break-words">
              {chapter.meaning.hi}
            </li>
          </ul>
        </a>
      {/each}
    </div>
  </div>
</div>