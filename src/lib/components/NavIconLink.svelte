<script lang="ts">
  import type { NavDatum} from '$data/nav';
  let { item }: {item: NavDatum} = $props();
</script>

{#if item.href && (item.text || item.heading)}
 <a
  class="
    u-gap-x-4
    u-grid
    u-grid-cols-[20px_1fr]
    u-items-center
    u-underline-offset-4
    u-text-[0.9em]
    u-w-full
    u-group/link
  "
  href="{item.href}"
  rel={item.rel ?? null}
  target={item.target ?? null}
  title={item.title ?? null}>

  <i class="text-20 {item.icon}"></i>
  <div class="
    font-500
    u-text-[.95em]
    {item?.heading?.startsWith('eLearning') ? "" : "u-capitalize"}
    u-opacity-90
    group-hover/link:(u-underline u-opacity-100)">{item.heading}</div>
</a>
{/if}