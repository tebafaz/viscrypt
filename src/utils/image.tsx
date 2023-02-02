import { ImgAttr } from "../models/image";


export const getMaxWH = (images: ImgAttr[]) => {
    var maxH = 0, maxW = 0
    images.map((value) => {
        if(value.height > maxH) {
            maxH = value.height
        }
        if(value.width > maxW) {
            maxW = value.width
        }
    })
    //default canvas size
    if(images.length < 1) {
        maxH = 150
        maxW = 300
    }
    return {maxH, maxW}
}

export const imageExists = (images: ImgAttr[], hash: string) => {
    var exists = false
    images.map((value) => {
        if (value.hash == hash) {
            exists = true
        }
    })
    return exists
}

export const isOverflown = (smaller: CSSStyleDeclaration, larger: CSSStyleDeclaration) => {
    const smallerHeight = parseInt(smaller.height.replaceAll('px', ''))
    const smallerWidth = parseInt(smaller.width.replaceAll('px', ''))
    const largerHeight = parseInt(larger.height.replaceAll('px', ''))
    const largerWidth = parseInt(larger.width.replaceAll('px', ''))
    return smallerHeight > largerHeight || smallerWidth > largerWidth;
}

export const getHeightWidth = (dataURL: string) => new Promise<{width: number, height: number}>(resolve => {
    const img = new Image()
    img.onload = () => {
      resolve({
        height: img.height,
        width: img.width
      })
    }
    img.src = dataURL
  })