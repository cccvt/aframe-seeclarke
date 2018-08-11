/**
 * Registeres `headtracking` component
 */
// const SeeClarke = require('seeclarke')

window.AFRAME.registerComponent('headtracking', {
  init () {
    this.addPointer()
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
  }
})
