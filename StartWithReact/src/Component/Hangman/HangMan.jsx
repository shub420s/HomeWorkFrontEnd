import Level0 from '../../assets/Images/Level0.svg'
import Level1 from '../../assets/Images/Level1.svg'
import Level2 from '../../assets/Images/Level2.svg'
import Level3 from '../../assets/Images/Level3.svg'
import Level4 from '../../assets/Images/Level4.svg'
import Level5 from '../../assets/Images/Level5.svg'
import Level6 from '../../assets/Images/Level6.svg'
import Level7 from '../../assets/Images/Level7.svg'
function HangMan({step}){
      const images = [Level0,Level1,Level2,Level3,Level4,Level5,Level6,Level7];
      return (
        <div className='w-[300px] h-[300px] '>
          <img src={step >= images.length ? images[images.length-1] : images[step]}  />
        </div>
      )
}

export default HangMan;