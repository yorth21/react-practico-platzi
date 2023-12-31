import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

function Navbar () {
  const { cartProducts, openCheckoutSideMenu, categories, setSearchByCategory } = useContext(ShoppingCartContext)
  const activeNavLink = 'underline underline-offset-4'

  return (
    <nav className='w-full flex justify-between items-center sticky top-0 z-10 py-5 px-8 text-sm bg-white bg-opacity-80 backdrop-blur-md border-b border-neutral-300/20'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink
            to='/'
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => setSearchByCategory('')}
            className={({ isActive }) =>
              isActive ? activeNavLink : ''}
          >
            All
          </NavLink>
        </li>
        {/* Categories */}
        {categories?.map(category => (
          <li key={category}>
            <NavLink
              to={`/${category}`}
              onClick={() => setSearchByCategory(category)}
              className={({ isActive }) =>
                isActive ? activeNavLink : ''}
            >
              {category}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          yorrh21@gmail.com
        </li>
        <li>
          <NavLink to='/my-orders'>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account'>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-in'>
            Sign In
          </NavLink>
        </li>
        <li className='flex items-center'>
          <button
            className='flex gap-0.5 items-center'
            onClick={() => openCheckoutSideMenu()}
          >
            <ShoppingBagIcon className='h-6 w-6' />
            <span className='font-semibold'>
              {cartProducts.length}
            </span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export { Navbar }
