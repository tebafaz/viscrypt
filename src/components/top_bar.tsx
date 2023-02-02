import React from 'react'
import ImportPng from '../images/import.png';
import ExportPng from '../images/export.png';
import GithubPng from '../images/github.png';
import ImageSettingPng from '../images/image-setting.png';
import BWNSelPng from '../images/radio_bw_ns.png';
import BWSelPng from '../images/radio_bw_s.png';
import ClrNSelPng from '../images/radio_clr_ns.png';
import ClrSelPng from '../images/radio_clr_s.png';

type TopBarProps = {
    importImages: (e: React.MouseEvent) => void
    setColoredMode :React.Dispatch<React.SetStateAction<boolean>>
}

const TopBar: React.FC<TopBarProps> = ({importImages, setColoredMode}) => {
    const changeMode = (e: React.MouseEvent<HTMLImageElement>) => {
        const clrImg = document.getElementsByTagName('img').namedItem('clr-mode');
        const bwImg = document.getElementsByTagName('img').namedItem('bw-mode');
        if(e.currentTarget.src == window.location.origin + ClrNSelPng) {
            clrImg!.src = ClrSelPng
            bwImg!.src = BWNSelPng
            setColoredMode(true); 
        }
        if(e.currentTarget.src == window.location.origin + BWNSelPng) {
            clrImg!.src = ClrNSelPng
            bwImg!.src = BWSelPng
            setColoredMode(false); 
        }
    }
    return (
        <>
        {/* start top menu panel */}
        <div className='flex h-10 bg-stone-300'>
          <div className='h-full w-full flow-root flex-none'>
            <button  type="button" className='float-left px-2 hover:bg-stone-100 h-full' title='import images' onClick={importImages}>
              <img width={32} height={32} src={ImportPng} alt="import" />
            </button>
            <button className='float-left px-2 hover:bg-stone-100 h-full' title='export images'>
              <img width={32} height={32} src={ExportPng} alt="export" />
            </button>
            <button className='float-left px-2 hover:bg-stone-100 h-full' title='canvas settings'>
              <img width={32} height={32} src={ImageSettingPng} alt="canvas-settings" />
            </button>
            <div className='float-right h-full grid content-center'>
              <a className='mx-2' href="https://github.com/Tebafaz" title='github page'>
                <img width={32} height={32} src={GithubPng} alt="github" />
              </a>
            </div>
            <div className='float-right h-full grid content-center mr-7'>
              <select className='inline-block' name="image-processing-method" id="image-processing-method">
                <option value="volvo">Encryption</option>
                <option value="saab">Decryption</option>
              </select>
              </div>
            <div className='float-right h-full mr-7'>
              <button className='px h-full' title='colored mode'>
                <img className='mode-button' width={32} height={32} src={ClrSelPng} alt="colored mode" onMouseDown={changeMode} id='clr-mode'/>
              </button>
              <button className='px h-full' title='black and white mode'>
                <img className='mode-button' width={32} height={32} src={BWNSelPng} alt="black and white mode" onMouseDown={changeMode} id='bw-mode'/>
              </button>
            </div>
          </div>
        </div>
        {/* end top menu panel */}
        </>
    )
}

export default TopBar