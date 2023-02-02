export const fillBgRandPxl = (canvas: HTMLCanvasElement, width: number, height: number) => {
    const ctx = canvas?.getContext('2d')
    const id = ctx?.getImageData(0, 0, width, height)
    for (let i = 0; i < id!.data!.length; i+=4) {
      id!.data[i] = Math.round(Math.random() * 255)
      id!.data[i+1] = Math.round(Math.random() * 255)
      id!.data[i+2] = Math.round(Math.random() * 255)
      id!.data[i+3] = 255
    }
    ctx?.putImageData(id!, 0, 0)
}