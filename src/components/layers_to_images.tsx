import React from 'react';
import PlusPng from '../images/plus-symbol-button.png';
import MinusPng from '../images/minus.png';

type LayersToImagesProps = {
  isEncrypting: boolean
  setIsEncrypting: React.Dispatch<React.SetStateAction<boolean>>
}

const LayersToImages: React.FC<LayersToImagesProps> = ({isEncrypting, setIsEncrypting}) => {
  const onPlusClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsEncrypting(true)
  }
    return <>
        {/* start Layers to Images */}
        <div className='flex flex-col h-1/3'>
                <span className='flex-none pl-2 hover:pointer-events-none'>
                  Encryption layers {'\u21E2'} images
                </span>
                <div className='flex-auto'>
                  {/* start inner overflow item */}
                  <div className="relative w-full h-full bg-stone-200">
                    <div className='absolute inset-0 overflow-auto'>
                      
                    </div>
                  </div>
                  {/* end inner overflow item */}
                </div>
                <div className='flex-none h-7'>
                  <button className='h-full w-7 hover:bg-stone-100 px-2' title='add new encrypted set' onClick={onPlusClick}>
                    <img width={20} height={20} src={PlusPng} alt="add new encrypted set" />
                  </button>
                  <button className='h-full w-7 hover:bg-stone-100 px-2' title='remove encrypted set'>
                    <img width={20} height={20} src={MinusPng} alt="remove encrypted set" />
                  </button>
                </div>
              </div>
              {/* end Layers to Images */}
    </>
}

export default LayersToImages