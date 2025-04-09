import {Transition} from 'framer-motion'

const fastest: Transition = {
  duration: 0.08,
  ease: [.35,.44,.68,1],
}
const fast: Transition = {
  duration: 0.16,
  ease: [.35,.44,.68,1],
}
const normal: Transition = {
  duration: 0.24,
  ease: [.35,.44,.68,1],
}
const slow: Transition = {
  duration: 0.32,
  ease: [.35,.44,.68,1],
}

const transition = {
  fastest,
  fast,
  normal,
  slow,
}

export default transition
