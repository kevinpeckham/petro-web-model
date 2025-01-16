<script lang="ts">
  // components
  import NavLink from '$components/NavLink.svelte';
  import NavIconLink from '$components/NavIconLink.svelte';
  import Self from '$components/NavMenu.svelte';

  // types
  import type { NavDatum } from '$data/nav';

  // props
  let { menu }: { menu?: NavDatum | null } = $props();
</script>

{#if menu && menu.heading && menu?.items}
  <li
    class="u-block u-group u-overflow-visible u-relative">
    {#if menu.menuType === "dropdown"}
      <button
      class="
        u-bg-transparent
        u-border-none
        u-font-500
        u-leading-none
        u-opacity-90
        u-px-3
        u-py-2
        u-relative
        u-rounded-md
        u-text-primary
        u-underline-offset-4
        group-focus-within:(u-opacity-100 u-underline)
        group-hover:(u-opacity-100 u-underline)"
        role="menuitem">{menu.heading}</button>
        <div
          class="
          block
          lg:(
            u-absolute
            u-bg-transparent
            u-hidden
            -u-translate-x-1/2
            u-left-1/2
            u-min-w-56
            u-pt-1
            u-top-full
            u-transition-discrete
            u-transition-display
            u-z-10
            group-hover:u-block
            group-focus-within-u-block)
          ">
      <ul
      class="
        u-bg-transparent
        u-gap-y-3
        u-grid
        u-grid-cols-1
        u-list-none
        u-m-0
        u-outline
        u-outline-blue-900/5
        u-px-0
        u-place-items-start
        u-relative
        u-rounded-lg
        lg:(
          u-absolute
          u-bg-aliceBlueLight
          u-pb-5
          u-pt-3
          u-rounded-lg
          u-shadow-lg
          u-w-full)
        "
      >
        {#each menu?.items ?? [] as item , index}
          <li
            class="
              u-px-4
              u-w-full
              ">
              {#if menu.listType === "link" && !item?.items?.[0]}
                <NavLink {item} />
                {#if index < menu.items.length - 1}
                  <hr class="u-border-primary u-mt-3 u-mb-0" />
                {/if}
              {:else if menu.listType === "icon" && !item?.items?.[0]}
                <NavIconLink {item} />
                {#if index < menu.items.length - 1}
                  <hr class="u-border-primary u-mt-3 u-mb-0" />
                {/if}
              {:else if item?.items?.[0]}
                <Self menu={item} />
              {/if}
            </li>
        {/each}
      </ul>
      </div>
    {:else}
      <div class="u-font-500 u-mb-2 u-text-[0.95em] u-text-primary">{menu.heading}</div>
      <ul
      class="
        u-bg-transparent
        u-gap-y-3
        u-grid
        u-grid-cols-1
        u-place-content-start
        u-list-none
        u-m-0
        u-px-0
        u-place-items-start
        "
      >
        {#each menu?.items ?? [] as item, index}
          <li><NavLink {item} /></li>
          {#if index < menu.items.length - 1}
            <hr class="u-border-primary u-mt-3 u-mb-0" />
          {/if}
        {/each}
      </ul>
    {/if}

  </li>
{/if}