<script>
  import { fly } from 'svelte/transition';

  export let classes = "";
  const classesToUse = "w-full h-full block container mx-auto " + classes;
</script>

<div
  in:fly="{{ y: -50, duration: 250, delay: 300 }}"
  out:fly="{{ y: -50, duration: 250 }}" 
  class={classesToUse}
>
  <slot/>
</div>