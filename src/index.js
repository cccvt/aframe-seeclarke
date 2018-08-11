/**
 * Registeres `headtracking` component
 */
// const SeeClarke = require('seeclarke')

window.AFRAME.registerComponent('headtracking', {
  init () {
    this.addPointer()
    this.addSeeClarkeToggle()
  },

  /**
   * Adds a mouse pointer
   * - [ ] Adds a #seeclarke-pointer to the page
   */
  addPointer () {
    // Add the pointer
    const $pointer = document.createElement('div')

    $pointer.id = '#seeclarke-pointer'
    $pointer.style.height = $pointer.style.width = '20px'
    $pointer.style.background = 'rgba(0, 0, 0, 0.35)'
    $pointer.style.border = '2px solid rgba(0, 0, 0, 0.5)'
    $pointer.style.zIndex = 999999999999
    $pointer.style.position = 'absolute'
    $pointer.style.top = '50%'
    $pointer.style.left = '50%'
    $pointer.style.borderRadius = '20px'

    document.body.appendChild($pointer)
  },

  /**
   * Adds SeeClarke
   */
  addSeeClarkeToggle () {
    const $btnWrap = document.createElement('div')
    const $btn = document.createElement('button')

    $btnWrap.classList.add('a-enter-vr', 'a-seeclarke')
    $btn.classList.add('a-enter-vr-button')
    $btn.setAttribute('title', 'Start webcam and initiate headtracking')
    $btn.style.bottom = 60
    $btn.style.backgroundImage = 'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYxMiA2MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxMiA2MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zMDYsNDk5LjQ4MWMxMzcuOTI4LDAsMjQ5Ljc0MS0xMTEuODE1LDI0OS43NDEtMjQ5Ljc0MUM1NTUuNzQyLDExMS44MTMsNDQzLjkyOCwwLDMwNiwwICAgIEMxNjguMDc4LDAsNTYuMjU5LDExMS44MTMsNTYuMjU5LDI0OS43NDFDNTYuMjU5LDM4Ny42NjYsMTY4LjA3OCw0OTkuNDgxLDMwNiw0OTkuNDgxeiBNMzA2LDEzOC41NzYgICAgYzYxLjM5NSwwLDExMS4xNjUsNDkuNzcxLDExMS4xNjUsMTExLjE2NVMzNjcuMzk1LDM2MC45MDcsMzA2LDM2MC45MDdzLTExMS4xNjUtNDkuNzczLTExMS4xNjUtMTExLjE2NyAgICBDMTk0LjgzNywxODguMzQ3LDI0NC42MDUsMTM4LjU3NiwzMDYsMTM4LjU3NnoiIGZpbGw9IiNGRkZGRkYiLz4KCQk8cGF0aCBkPSJNMzA2LDMyMS45NDljMzkuODc5LDAsNzIuMjA1LTMyLjMzMSw3Mi4yMDUtNzIuMjA4YzAtMzkuODc5LTMyLjMyNy03Mi4yMS03Mi4yMDUtNzIuMjFzLTcyLjIwOCwzMi4zMzEtNzIuMjA4LDcyLjIxICAgIEMyMzMuNzkyLDI4OS42MiwyNjYuMTIzLDMyMS45NDksMzA2LDMyMS45NDl6IE0yNjAuNDM1LDIzMy4zMzljMCwwLDUuNjE1LDE3Ljk3NSwyNC4yMjQsMzYuNTg0ICAgIGMxOC42MSwxOC42MSwzNi41OCwyNC4yMjgsMzYuNTgsMjQuMjI4QzI4Ni40MSwzMDkuMTc4LDI0NC44NDIsMjY4LjQxOSwyNjAuNDM1LDIzMy4zMzl6IiBmaWxsPSIjRkZGRkZGIi8+CgkJPHBhdGggZD0iTTQ0Ny4wNjYsNDg5LjQ4NGMtNDEuMzg4LDI0LjQ0NS04OS42MTEsMzguNTAxLTE0MS4wNjQsMzguNTAxYy01MS40NTEsMC05OS42NjgtMTQuMDU2LTE0MS4wNi0zOC41MDEgICAgYy0zNC40MTQsMTMuMDAyLTU1LjYxNCwzMC43NDctNTUuNjE0LDUwLjMwOWMwLDM5Ljg4Myw4OC4wNTQsNzIuMjA2LDE5Ni42NzQsNzIuMjA2czE5Ni42NzQtMzIuMzI1LDE5Ni42NzQtNzIuMjA2ICAgIEM1MDIuNjc2LDUyMC4yMzEsNDgxLjQ3OSw1MDIuNDg3LDQ0Ny4wNjYsNDg5LjQ4NHoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K)'

    this.el.appendChild($btnWrap)
    $btnWrap.appendChild($btn)
  }
})
