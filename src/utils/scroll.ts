/**
 * Smoothly scrolls to a section by element id.
 * Handles both tall scroll-pinned/sticky sections and standard flow sections
 * by computing the optimal scroll position and accounting for the floating navbar.
 */
export function scrollToSection(sectionId: string) {
  if (sectionId === "hero" || sectionId === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" })
    if (window.location.hash) {
      history.pushState(
        null,
        "",
        window.location.pathname + window.location.search,
      )
    }
    return
  }

  const element = document.getElementById(sectionId)
  if (!element) return

  const rect = element.getBoundingClientRect()
  const absoluteTop = window.scrollY + rect.top

  // Sticky sections (h-[...vh] with a sticky top-0 child) must be scrolled to absoluteTop
  // so the sticky child locks at top:0 with initial scroll progress 0.
  // Standard flow sections look best offset by ~70px to clear the floating navbar.
  const hasStickyChild = element.querySelector(".sticky") !== null
  const isTallContainer = element.offsetHeight > window.innerHeight * 1.5
  const isSticky = hasStickyChild || isTallContainer

  const targetY = isSticky ? absoluteTop : Math.max(0, absoluteTop - 70)

  window.scrollTo({
    top: targetY,
    behavior: "smooth",
  })

  if (window.location.hash !== `#${sectionId}`) {
    history.pushState(null, "", `#${sectionId}`)
  }
}
