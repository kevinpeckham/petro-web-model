<script lang="ts">

// css
import "../legacy-reset.css"
import "../legacy-theme.css"
import "../legacy-print.css"
import "../legacy-inline.css"
import "uno.css";

// components
import Nav from "$components/Nav.svelte"

// types
import type { Snippet } from "svelte";
// interface Props {
//   children?: Snippet | null;
// }

// props
let { children, data } = $props();

</script>

<!-- <Nav /> -->
<!-- <div class="u-bg-light u-min-h-screen u-w-full u-max-w-screen"> -->
 <div>
  {#if children}
    {@render children()}
  {/if}
</div>

<!-- a poop load of js -->

<!-- {@html `<script src="{prod}/static/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>`} -->
<!-- <script src="{prod}/static/vendor/simplebar/dist/simplebar.min.js"></script>
<script src="{prod}/static/vendor/tiny-slider/dist/min/tiny-slider.js"></script>
<script src="{prod}/static/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></script>
<script src="{prod}/static/vendor/drift-zoom/dist/Drift.min.js"></script>
<script src="{prod}/static/vendor/lightgallery.js/dist/js/lightgallery.min.js"></script> -->