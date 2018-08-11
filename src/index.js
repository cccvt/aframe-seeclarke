/**
 * Registeres `headtracking` component
 */
const UI = require('./ui.json')
const SeeClarke = require('seeclarke')

window.AFRAME.registerComponent('headtracking', {
  // SeeClarke reference
  seeclarke: null,
  // The pointer reference
  $pointer: null,

  init () {
    this.seeclarke = new SeeClarke({debug: false})
    this.addPointer()
    this.addSeeClarkeToggle()
    this.listen()
  },

  /**
   * Adds a mouse pointer
   * - [ ] Adds a #seeclarke-pointer to the page
   */
  addPointer () {
    this.$pointer = document.createElement('div')

    this.$pointer.id = '#seeclarke-pointer'
    this.$pointer.style.display = 'none'
    this.$pointer.style.height = this.$pointer.style.width = '20px'
    this.$pointer.style.background = 'rgba(0, 0, 0, 0.35)'
    this.$pointer.style.border = '2px solid rgba(0, 0, 0, 0.5)'
    this.$pointer.style.zIndex = 999999999999
    this.$pointer.style.position = 'absolute'
    this.$pointer.style.top = '50%'
    this.$pointer.style.left = '50%'
    this.$pointer.style.borderRadius = '20px'

    document.body.appendChild(this.$pointer)
  },

  /**
   * Adds the SeeClarke toggle button
   * - [ ] This button matches the existing a-enter-vr but with a different icon
   */
  addSeeClarkeToggle () {
    const $btnWrap = document.createElement('div')
    const $btn = document.createElement('button')

    $btnWrap.classList.add('a-enter-vr', 'a-seeclarke')
    $btn.classList.add('a-enter-vr-button')
    $btn.setAttribute('title', 'Start webcam and initiate headtracking')
    $btn.style.bottom = 60
    $btn.style.backgroundImage = UI.webcam

    this.el.appendChild($btnWrap)
    $btnWrap.appendChild($btn)

    $btn.addEventListener('click', () => this.toggleSeeClarke())
  },

  /**
   * Toggles SeeClarke
   * - [ ] Start/stops when the button is clicked
   */
  toggleSeeClarke () {
    if (this.seeclarke._isTracking) {
      this.seeclarke.stop()
      this.$pointer.style.display = 'none'
    } else {
      this.seeclarke.start()
      this.$pointer.style.display = 'block'
    }
  },

  /**
   * Adds the window listener
   */
  listen () {
    window.addEventListener('onSeeClarkePoseUpdates', ev => {
      // Grab the SeeClarke instance that called this
      const context = ev.detail.context

      // You can now access any of the properties, including the poses
      const poses = context.poses

      // Loop through poses to get their details
      poses.forEach((pose, index) => {
        let x = pose.pointedAt.x
        let y = pose.pointedAt.y

        // Then add the points to the cursor!
        this.$pointer.style.left = x + 'px'
        this.$pointer.style.top = y + 'px'
      })
    })
  }
})
