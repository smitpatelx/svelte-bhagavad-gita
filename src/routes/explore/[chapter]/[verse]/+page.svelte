<script lang='ts'>
  import type { PageData } from './$types';
  import SpxTopBar from '$components/generic/SpxTopBar.svelte';
  import SpxLoading from '$components/generic/SpxLoading.svelte';

  import { page } from '$app/stores';
  const { chapter, verse } = $page.params;

  export let data: PageData;
</script>

<svelte:head>
  <title>GITA - CH: {chapter} / VERSE {verse}</title>
</svelte:head>
<div class="w-full h-full min-h-screen block container mx-auto">
  <div class="bg-slate-800/60 w-full h-full p-4 gap-y-4 flex flex-col min-h-screen">
    <SpxTopBar>
      <div class="flex flex-wrap gap-x-6 bg-gradient-to-br from-red-500 via-amber-500 to-amber-600
      bg-clip-text text-transparent text-lg">
        <h2 class="font-bold">
          Chapter :
          <span class="font-normal text-white">{chapter}</span>
        </h2>
        <h2 class="font-bold">
          Verse :
          <span class="font-normal text-white">{verse}</span>
        </h2>
      </div>
    </SpxTopBar>

    <h3 class="font-bold text-2xl text-slate-100">Slok :</h3>
    <div class="w-full bg-slate-900 text-slate-200 text-xl
      rounded-md py-2 px-4 flex flex-wrap items-center justify-between">
      {data.slok}
    </div>

    <hr class="border-amber-500/50 border-dashed"/>

    <h3 class="font-bold text-2xl text-slate-100">Transliteration :</h3>
    <div class="w-full bg-slate-900 text-slate-200 text-xl
      rounded-md py-2 px-4 flex flex-wrap items-center justify-between">
      {data.transliteration}
    </div>

    <hr class="border-amber-500/50 border-dashed"/>

    <h3 class="font-bold text-2xl text-slate-100">Translations :</h3>
    <div class="w-full bg-slate-900 text-slate-200 text-xl
    rounded-md p-2 flex flex-col gap-y-2">
      {#each data.translations as translation}
        <div class="w-full bg-slate-800 p-2 rounded-md">
          <h4 class="text-lg font-semibold text-amber-600">
            {translation.author}
          </h4>

          <ul class="mt-2 flex flex-col gap-y-1 list-disc pl-6">
            {#each translation.lines as line}  
              <li class="w-full text-base font-normal text-slate-200
                hover:bg-slate-100/20 rounded-md p-0.5 whitespace-pre-wrap break-words">
                {line}
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</div>
