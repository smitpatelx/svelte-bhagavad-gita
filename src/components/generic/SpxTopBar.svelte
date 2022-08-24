<script lang='ts'>
  import { ChevronLeftIcon } from 'svelte-feather-icons';
  import { page } from '$app/stores'
  import { goto } from '$app/navigation';

  const handleBackButton = () => {
    const cutBy = $page.url.pathname.lastIndexOf('/');
    if (cutBy === 0) {
      goto('/');
      return;
    }
    goto($page.url.pathname.substring(0, $page.url.pathname.lastIndexOf('/')));
  }
</script>

<div class="w-full rounded-md py-2 flex flex-wrap items-center justify-between">
  <button
    class="text-slate-200 font-semibold flex flex-wrap items-center"
    on:click={() => handleBackButton()}
  >
    <div class="mr-2 bg-slate-100/10 rounded-full flex flex-wrap 
      items-center justify-center p-1">
      <ChevronLeftIcon class='w-5 h-5 inline-block'/>
    </div>
    BACK
  </button>
  <slot />
</div>