const lockScroll: () => number = () => {
  const currentScroll = window.scrollY
  const bodyStyle = document.body.style
  bodyStyle.position = 'fixed'
  bodyStyle.width = '100%'
  bodyStyle.top = `-${currentScroll}px`
  bodyStyle.overflowY = 'scroll';
  return currentScroll
}
const unlockScroll = (prevScroll: number) => {
  const bodyStyle = document.body.style
  bodyStyle.position = ''
  bodyStyle.width = ''
  bodyStyle.top = ''
  bodyStyle.overflowY = ''
  window.scrollTo(0, prevScroll)
}

export { lockScroll, unlockScroll }