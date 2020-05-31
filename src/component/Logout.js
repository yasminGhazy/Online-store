import { http } from '../endpoints';
import user from './../component/User';

export default function Logout(history) {
    // logout from the server
    http.get('/logout');
    console.log(user.userData, user.isLoggedIn());

    setTimeout(() => {
        user.logout();
        history.push('/login')
    }, 0);
}