const imageDOM = document.querySelectorAll('.home__layer')
const homeDOM = document.getElementById('home')

function parallax(e) {
  if (e) {
    imageDOM.forEach(img => {
      const speed = img.getAttribute('data-speed')
      const x = (window.innerWidth - e.pageX * speed) / 50
      const y = (window.innerHeight - e.pageY * speed) / 50
      img.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
  }
}

homeDOM.addEventListener('mousemove', parallax)

export default parallax