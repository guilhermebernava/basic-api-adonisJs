import Route from '@ioc:Adonis/Core/Route'

//#region USER
Route.post('/user', 'UsersController.post')
//#endregion

//#region AUTH
Route.post('/auth', 'AuthController.login')
Route.delete('/auth', 'AuthController.logout')
//#endregion

//#region UBUNTU
//ROTA com middleware de validar user LOGADO
Route.post('/ubuntu', 'UbuntusController.post').middleware('auth').middleware('roleAuth:ADMIN')
//#endregion

//#region  ACL
Route.post('/acl/role', 'ACLController.postRole').middleware('auth')
Route.post('/acl/userRole', 'ACLController.postUserRole').middleware('auth')
//#endregion
