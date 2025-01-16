<script lang="ts">
  import type { NavDatum} from '$data/nav';
  let { item }: {item: NavDatum} = $props();
</script>

{#if item.href && item.text}
 <a
  class="
    u-flex
    u-opacity-90
    u-underline-offset-4
    u-text-[.9em]
    u-w-full
    hover:(u-underline opacity-100)
  "
  href="{item.href}"
  rel={item.rel ?? null}
  target={item.target ?? null}
  title={item.title ?? null}>{item.text}</a>
  {:else if item.heading}
  <div>{item.heading}</div>

{/if}