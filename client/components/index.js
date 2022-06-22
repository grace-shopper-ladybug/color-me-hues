/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as NavigationBar} from './NavigationBar'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as Storefront} from './Storefront'
export {default as SingleHue} from './SingleHue'
export {default as Admin} from './Admin'
export {default as EditHue} from './EditHue'
export {default as Order} from './Order'
export {default as Orders} from './Orders'
export {default as Checkout} from './Checkout'
