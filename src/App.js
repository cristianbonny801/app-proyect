import './App.css'
import logo from '../src/assets/images/IFood_logo.svg.png'
import Image from './Image'
import Link from './Anchor';
import Search from './Search';
import SvgComponent from './assets/images/iconArrow';
import UserIcon from './Iconouser'
import IconBolsa from './IconBolsa';
import { useState } from 'react';
function App({ x }) {
  const [state, setState] = useState(false)
  const [array, setArray] = useState([
    {
      name: 'Cristian',
      lastName: 'Juvinao'
    },
    {
      name: 'Cristian',
      lastName: 'Juvinao',
      current: true
    },
  ])
  const Click = ({ name, lastName }) => {
    const obj = {
      name: name,
      lastName: lastName
    }
    // const ar = [obj, ...array]
    setState(true)
    setArray([
      ...array,
      obj,
    ])
  }
  // console.log()
  const filtrado = array?.find(((x) =>  x?.current === true))
  console.log(filtrado)
  return (
    <div className="App">
      <header>
        <nav className="navigation">
          {state && <div className="container_image">
            <Image src={logo} className={'img_logo'} />
          </div>}
          <li>
            <Link color='red' text="Restaurantes" href={''} className={''} />
            <Link color='black' text="Licores" href={''} className={'link1'} />
          </li>
          <div className='_image1'>
            <Search placeholder='hola' />
          </div>
          <div className='container-address' onClick={() => Click({ name: 'Esteban', lastName: 'Juvinao'   })}>
            <span>Cl 7 a # 47,</span>
            <SvgComponent color='red' width={'30px'} height={'30px'} />
          </div>
          <div className='container-button1'>
            <UserIcon color={'red'} />
          </div>
          <div className='container-button2'>
            <IconBolsa color='red' />
          </div>
        </nav>

      </header>


      <div>

        {array?.map((x) => {
          return (<div className="item">
            {x?.name}
            {x?.current === true ?  <span style={{ color: 'red' }}>Actual</span> :  <span>No Actual</span>}
          </div>)
        })
        }

      </div>
    </div>
  );
}

export default App;
