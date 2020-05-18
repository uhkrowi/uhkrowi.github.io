function introduction () {
  if (localStorage.getItem('isChatRendered')) return

  const messagesEl = document.querySelector('.messages')
  const typingSpeed = 30
  const loadingText = '<b>•</b><b>•</b><b>•</b>'
  let messageIndex = 0

  const messages = [
    'Hi! 👋😆',
    'Nice to see you',
    'My name\'s Arul',
    'I do code and design application 🚀',
    'Currently I\'m working as a freelancer <br>of full stack developer',
    'If you have anything to ask, just find me on <br> <a target="_blank" href="https://facebook.com/uhkrowi">facebook/uhkrowi</a> <br> <a target="_blank" href="http://www.linkedin.com/in/uhkrowi">linkedin/uhkrowi</a> <br> <a target="_blank" href="http://github.com/uhkrowi">github/uhkrowi</a> <br> <a target="_blank" href="mailto:uhkrowi@gmail.com">uhkrowi@gmail.com</a> <br> <a target="_blank" href="http://t.me/uhkrowi">telegram/uhkrowi</a> <br> <a target="_blank" href="https://api.whatsapp.com/send?phone=628977031387&text=Hello, I just visited your portfolio pages...">whatsapp</a>',
    'Anyway... there are some works I\'ve code <a target="_self" href="/showcase">here</a>',
    'Check \'em out! 😁'
  ]

  const getFontSize = function () {
    return parseInt(getComputedStyle(document.body).getPropertyValue('font-size'))
  }

  const pxToRem = function (px) {
    return px / getFontSize() + 'rem'
  }

  const createBubbleElements = function (message, position) {
    const bubbleEl = document.createElement('div')
    const messageEl = document.createElement('span')
    const loadingEl = document.createElement('span')
    bubbleEl.classList.add('bubble')
    bubbleEl.classList.add('is-loading')
    bubbleEl.classList.add('cornered')
    bubbleEl.classList.add(position === 'right' ? 'right' : 'left')
    messageEl.classList.add('message')
    loadingEl.classList.add('loading')
    messageEl.innerHTML = message
    loadingEl.innerHTML = loadingText
    bubbleEl.appendChild(loadingEl)
    bubbleEl.appendChild(messageEl)
    bubbleEl.style.opacity = 0
    return {
      bubble: bubbleEl,
      message: messageEl,
      loading: loadingEl
    }
  }

  const getDimentions = function (elements) {
    return dimensions = {
      loading: {
        w: '4rem',
        h: '2.25rem'
      },
      bubble: {
        w: pxToRem(elements.bubble.offsetWidth + 4),
        h: pxToRem(elements.bubble.offsetHeight)
      },
      message: {
        w: pxToRem(elements.message.offsetWidth + 4),
        h: pxToRem(elements.message.offsetHeight)
      }
    }
  }

  const sendMessage = function (message, position) {
    const loadingDuration = (message.replace(/<(?:.|\n)*?>/gm, '').length * typingSpeed) + 500
    const elements = createBubbleElements(message, position)
    messagesEl.appendChild(elements.bubble)
    messagesEl.appendChild(document.createElement('br'))
    const dimensions = getDimentions(elements)
    elements.bubble.style.width = '0rem'
    elements.bubble.style.height = dimensions.loading.h
    elements.message.style.width = dimensions.message.w
    elements.message.style.height = dimensions.message.h
    elements.bubble.style.opacity = 1
    const bubbleOffset = elements.bubble.offsetTop + elements.bubble.offsetHeight
    if (bubbleOffset > messagesEl.offsetHeight) {
      const scrollMessages = anime({
        targets: messagesEl,
        scrollTop: bubbleOffset,
        duration: 750
      })
    }
    const bubbleSize = anime({
      targets: elements.bubble,
      width: ['0rem', dimensions.loading.w],
      marginTop: ['2.5rem', 0],
      marginLeft: ['-2.5rem', 0],
      duration: 800,
      easing: 'easeOutElastic'
    })
    const loadingLoop = anime({
      targets: elements.bubble,
      scale: [1.05, 0.95],
      duration: 1100,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutQuad'
    })
    // const dotsStart = anime({
    //   targets: elements.loading,
    //   translateX: ['-2rem', '0rem'],
    //   scale: [0.5, 1],
    //   duration: 400,
    //   delay: 25,
    //   easing: 'easeOutElastic'
    // })
    const dotsPulse = anime({
      targets: elements.bubble.querySelectorAll('b'),
      scale: [1, 1.25],
      opacity: [0.5, 1],
      duration: 300,
      loop: true,
      direction: 'alternate',
      delay (i) { return (i * 100) + 50 }
    })
    setTimeout(function () {
      loadingLoop.pause()
      dotsPulse.restart({
        opacity: 0,
        scale: 0,
        loop: false,
        direction: 'forwards',
        update (a) {
          if (a.progress >= 65 && elements.bubble.classList.contains('is-loading')) {
            elements.bubble.classList.remove('is-loading')
            anime({
              targets: elements.message,
              opacity: [0, 1],
              duration: 300
            })
          }
        }
      })
      bubbleSize.restart({
        scale: 1,
        width: [dimensions.loading.w, dimensions.bubble.w],
        height: [dimensions.loading.h, dimensions.bubble.h],
        marginTop: 0,
        marginLeft: 0,
        begin () {
          if (messageIndex < messages.length) { elements.bubble.classList.remove('cornered') }
        }
      })
    }, loadingDuration - 50)
  }

  var sendMessages = function () {
    const message = messages[messageIndex]
    if (!message) { return }
    sendMessage(message)
    ++messageIndex
    setTimeout(sendMessages, (message.replace(/<(?:.|\n)*?>/gm, '').length * typingSpeed) + anime.random(900, 1200))
  }

  setTimeout(sendMessages(), 2500)

  localStorage.setItem("isChatRendered", true);
}
