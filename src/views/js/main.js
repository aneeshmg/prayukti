let pattern = Trianglify({
    width: window.innerWidth,
    height: window.innerHeight,
    variance: Math.random(),
    cell_size: Math.floor(Math.random() * (200 - 50 + 1) + 50)
})

document.body.background = pattern.png()