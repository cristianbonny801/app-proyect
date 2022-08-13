import './button.css'
function Button ({ nombre }) {
  function openTab () {
   window.open('https://mangatschool.com/topic/2-algoritmo-y-javascript-area-de-un-circulo-fundamentos-de-programacion/')
  }
  return <button style={{ color: 'red' }}  onClick={openTab}>{nombre}</button>
}

export default Button