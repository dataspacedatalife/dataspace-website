# TODO — Catalog page

Pending improvements for `/[locale]/catalog`, grouped by page section.
Already done: text search, locale-aware section labels, restored Spanish content,
hidden empty metadata boxes, modal X button, accessible filter pills,
back/forward history sync.

## Filters & search

- [ ] Show dataset counts on the category pills (e.g. "Salud humana (28)") so
      users get a sense of scale before clicking.
- [ ] Show a results summary line ("Mostrando 1–4 de 43") next to the filters
      or above the list.
- [ ] Consider extending search to `descripcion_ampliada` and subset
      names/descriptions (currently matches name, use case, short description
      and promoting entity only).

## Dataset list (cards)

- [ ] Make the whole card clickable (open the modal), not just the
      "Ver detalles" button; keep the button as the visible affordance.
- [ ] Increase density: 4 items per page is low for cards this compact.
      Consider 8–10 per page or a 2-column grid on desktop.
- [ ] Define an explicit sort order (alphabetical by localized name, or
      category first); today the order is whatever `datasets.ts` lists.

## Pagination

- [ ] Scroll back to the top of the list when the page changes — clicking
      "Siguiente" currently leaves the viewport at the footer.
- [ ] Consider numbered page buttons (1 … 11) in addition to prev/next now
      that history entries work.

## Dataset modal

- [ ] Deep-linkable datasets: open the modal from a `?dataset=<id>` URL param
      (via `useSearchState`, push mode) so datasets can be shared and
      bookmarked, and Back closes the modal.
- [ ] Link the promoting entity to its website — every dataset in
      `datasets.ts` has a `link` field that is never rendered.
- [ ] Add a contact / request-access CTA (mailto `onehealth@cesga.es` with the
      dataset name pre-filled). The `catalog.contact` translation key already
      exists unused. Without this the modal is a dead end.
- [ ] Consider a non-scrolling modal header (title + close button stay visible
      while the body scrolls).

## Content & i18n (messages/*.json)

- [ ] Restructure `datos_descripcion` into separate keys (data type / source /
      intended use) instead of parsing prose with a label regex; would also fix
      the odd fragment bullets produced by splitting on ";".
- [ ] Fill in or remove per-dataset placeholder values ("-", empty strings) in
      `volumen`, `n_ficheros` and subset metadata so real values show instead
      of the boxes being hidden.
- [ ] Add a CI/lint check that the three locale files keep identical key sets
      (missing keys render as raw key paths; es.json has lost content in merges
      before).
