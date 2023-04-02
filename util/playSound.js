const playSound = (sound) => {
  const audio = new Audio(`./audio/${sound}.mp3`)
  audio.volume = 0.25
  audio.play()
}

export { playSound }

export default function ({ app }, inject) {
  inject('playSound', playSound)
}