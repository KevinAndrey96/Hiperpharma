'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Route.on('/').render('index')
Route.get('/','IndexController.index')
Route.get('cart', ({ view }) => {
    return view.render('cart')
  })
Route.get('categories', ({ view }) => {
    return view.render('categories')
})
Route.get('checkout', ({ view }) => {
    return view.render('checkout')
})
/*Route.get('product_detail/:id', ({ view }) => {
    return view.render('product_detail')
})*/
Route.get('product_detail/:id','ProductController.index')
Route.get('products_lists', ({ view }) => {
    return view.render('products_lists')
})
Route.get('order_completed', ({ view }) => {
    return view.render('order_completed')
}) 