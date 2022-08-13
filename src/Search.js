import magnifier from './assets/images/magnifier.png'
import Image from './Image'

function Search({ className, placeholder, kjdfhks }) {
  console.log(kjdfhks) 
  return (
    <>
      <div className="container_search">
        <Image src={magnifier} className={'img_search'} />
        <input type="text" className='input_search' placeholder={placeholder} />
      </div>
    </>
  )
}
export default Search
