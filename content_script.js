function replaceTextClass() {
  const smallTextMutedElements = document.querySelectorAll('small.text-muted')
  smallTextMutedElements.forEach((element) => {
    element.classList.remove('text-muted')
    element.classList.add('text-danger')
  })
}

window.onload = replaceTextClass
