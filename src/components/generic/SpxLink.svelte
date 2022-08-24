<script>
  import Ripple from 'ripplet.js';

  // type ButtonType = 'primary' | 'secondary' | 'white' | 'gray';

  let buttonClass = `py-4 px-8 rounded-md shadow
    inline-flex items-center justify-center
    text-lg font-semibold tracking-wide leading-none
    hover:bg-opacity-80 hover:text-opacity-80
    focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-yellow-800
    transition-all duration-400 ease-in-out`;
  
  export let label = 'Button';

  export let type = 'primary';

  export let href = '';

  export let target = '_self';

  if (type === 'primary') {
    buttonClass += ` bg-orange-500 text-white`;
  } else if (type === 'secondary') {
    buttonClass += ` bg-orange-500/30 text-orange-900`;
  } else if (type === 'white') {
    buttonClass += ` bg-slate-100 text-slate-900`;
  } else if (type === 'gray') {
    buttonClass += ` bg-slate-500 text-slate-100`;
  }
</script>

<a
  on:pointerdown={Ripple}
  class={buttonClass}
  href={href}
  target={target}
  sveltekit:prefetch
>
  {label}
  <slot/>
</a>