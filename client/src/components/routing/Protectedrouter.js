import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'
import {AuthContext } from '../../contexts/AuthContext'
import Spinner from 'react-bootstrap/Spinner'
import Navbar from '../layout/Navbar'


const ProtectedRoute = ({ component: Component, ...rest }) => {
	const {
		authState: { authLoading, isAuthenticated }
			
	} = useContext(AuthContext)
	console.log(isAuthenticated);

	if (authLoading)
		return (
			<div className='spinner-container'>
				<Spinner animation='border' variant='info' />
			</div>
		)

	return (
		<Route
			{...rest}
			render={props =>
				
				isAuthenticated ? (
					<>
						<Navbar/>
						<Component {...rest} {...props} />
					</>
				) : (
						<Redirect to='/login' />
					
				)
			}
		/>
	)
}

export default ProtectedRoute