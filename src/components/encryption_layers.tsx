import React from 'react';
import PlusPng from '../images/plus-symbol-button.png';
import MinusPng from '../images/minus.png';
import { LayerAttr } from '../models/layer';


type LayerProps = {
    layerAttrs: LayerAttr[],
    setLayerAttrs: React.Dispatch<React.SetStateAction<LayerAttr[]>>
    isEncrypting: boolean
}

const EncryptionLayers: React.FC<LayerProps> = ({layerAttrs, setLayerAttrs, isEncrypting}) => {
    const onPlusClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const modal = document.getElementsByTagName('div').namedItem('encryption-layers-modal')
        modal!.style.display = "block"
    }
    const onModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const modal = document.getElementsByTagName('div').namedItem('encryption-layers-modal')
        if (e.target === modal) {
            modal!.style.display = "none"
        }
    }
    const onButtonClick = (e: React.MouseEvent) => {
        const layerInput = document.getElementsByTagName('input').namedItem('layer-count')
        console.table(layerInput?.validity)
        if (layerInput?.validity.badInput) {
            return
        }
        const modal = document.getElementsByTagName('div').namedItem('encryption-layers-modal')
        modal!.style.display = "none"

        const layerCount = parseInt(layerInput!.value)
        let layerAttrs: LayerAttr[] = []
        for (let i = 0; i < layerCount; i++) {
            const layerAttr: LayerAttr = {
                id: i,
                isSelected: false, 
                isSharedKey: false, 
                isStrictRandom: false, 
                isStrictGenerated: false
            }
            layerAttrs = [...layerAttrs, layerAttr]
        }
        setLayerAttrs(layerAttrs)
    }

    const onSelect = (e: React.MouseEvent<HTMLDivElement>) => {
        if(isEncrypting) {
            
        }
        
        if(e.currentTarget.style.outline === '') {
            e.currentTarget.style.outline = 'solid 1px blue'
        } else {
            e.currentTarget.style.outline = ''
        }
    }

    return (
    <>
        <div className='hidden fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-opacity-40 bg-black' id='encryption-layers-modal' onClick={onModalClick}>
            <div className='absolute bg-stone-300 inset-0 m-auto p-8 border border-solid w-96 h-40 text-center'>
                <span>Write the number of encryption layers</span>
                <input type="number" max={1000} min={2} defaultValue={2} pattern={'d'} className='invalid:bg-red-200 m-2' id='layer-count'></input><br />
                <span className='text-xs text-red-900'>min=2 max=1000</span><br />
                <button className='hover:bg-stone-100 p-1' onClick={onButtonClick}>Enter</button>
            </div>
        </div>
        {/* start Layers */}
        <div className='flex flex-col h-1/3'>
            <span className='flex-none pl-2 hover:pointer-events-none'>
            Encryption layers
            </span>
            <div className='flex-auto'>
            {/* start inner overflow item */}
            <div className="relative w-full h-full bg-stone-200">
                <div className='absolute inset-0 overflow-auto'>
                    <div className='ml-1 grid grid-cols-10 place-content-start gap-1'>
                        {layerAttrs.map((value) => {
                            return (
                                <div className=" my-1 text-center bg-stone-50 hover:cursor-pointer" onClick={onSelect} key={value.id}>
                                {value.id}
                            </div>
                            )}) 
                        }
                    </div>
                </div>
            </div>
            {/* end inner overflow item */}
            </div>
            <div className='flex-none h-7'>
            <button className='h-full w-7 hover:bg-stone-100 px-2' title='add new layer' onClick={onPlusClick}>
                <img width={20} height={20} src={PlusPng} alt="add new layer" />
            </button>
            <button className='h-full w-7 hover:bg-stone-100 px-2' title='remove layer'>
                <img width={20} height={20} src={MinusPng} alt="remove layer" />
            </button>
          </div>
        </div>
      {/* end Layers */}
    </>
    )
}

export default EncryptionLayers