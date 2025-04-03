import {Transition} from 'framer-motion'

const fast: Transition = {
  duration: 0.16,
  ease: [.35,.44,.68,1],
}
const normal: Transition = {
  duration: 0.24,
  ease: [.35,.44,.68,1],
}

const transition = {
  normal,
  fast
}

export default transition
