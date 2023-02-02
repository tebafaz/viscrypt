import React from 'react';
import PlusPng from '../images/plus-symbol-button.png';
import MinusPng from '../images/minus.png';
import { ImgAttr } from '../models/image';

type ImagesProps = {
  importImages: (e: React.MouseEvent) => void
  images: ImgAttr[]
  isEncrypting: boolean
}

const Images: React.FC<ImagesProps> = ({importImages, images, isEncrypting}) => {
    const onSelect = (e: React.MouseEvent<HTMLDivElement>) => {
      if(isEncrypting) {
        e.currentTarget.classList.toggle('bg-cyan-300')
      } else {
        e.currentTarget.classList.toggle('outline')
        e.currentTarget.classList.toggle('outline-1')
        e.currentTarget.classList.toggle('outline-cyan-500')
      }
      
    }

    return    <>
              <div className='flex flex-col h-1/3 border-y-2 border-stone-900'>
              <span className='flex-none pl-2 hover:pointer-events-none'>
                  Images
                </span>
                <div className='flex-auto'>
                  <div className="relative w-full h-full bg-stone-200">
                    <div className='absolute inset-0 overflow-auto'>
                      <div className='ml-2 grid grid-cols-4 place-content-start gap-2'>
                        {images.map((value) => {
                          return (
                            <div className="flex justify-center max-w-[5rem] max-h-32 my-1" key={value.hash}>
                              <div className="bg-white hover:cursor-pointer" onClick={onSelect}>
                                <div className=' h-16  grid place-content-center'>
                                <img className='max-h-16 max-w-[4rem] m-auto' alt="" id={`img-${value.hash}`} src={value.base64}/>
                                </div>
                                <div className="p-2 max-w-[5rem] max-h-12">
                                  <p className="text-gray-900 text-xs overflow-ellipsis overflow-hidden h-8 break-words">{value.filename}</p>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex-none h-7'>
                  <button className='h-full w-7 hover:bg-stone-100 px-2'  type="button" onClick={importImages} title='add images'>
                    <img width={20} height={20} src={PlusPng} alt="add images" />
                  </button>
                  <button className='h-full w-7 hover:bg-stone-100 px-2' title='remove image'>
                    <img width={20} height={20} src={MinusPng} alt="remove images" />
                  </button>
                </div>
              </div>
              </>
}

export default Images