import './app.scss'
import {RouterProvider} from "react-router";
import routes from "./app/routes";
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {useEffect} from "react";
import {loginSucceed} from "./features/auth/auth-slice";
import {getUserData} from "./app/func";

function App() {
  const localToken = localStorage.getItem('token') ?? sessionStorage.getItem('token')
  const loggedIn = useAppSelector(state => state.auth.loggedIn)
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localToken) {
      dispatch(loginSucceed({token: localToken}))
    }

    if (localToken && loggedIn) {
      getUserData(localToken, dispatch)
    }
  }, [localToken, loggedIn, dispatch])

  return (
    <RouterProvider router={routes} />
  )
}

export default App
