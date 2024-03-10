
const apiUrl = "https://localhost:44397/api";
const token = localStorage.getItem('token');

const isTokenExpired = () => {
    try {
        const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );

        const payload = JSON.parse(jsonPayload);
        const currentTime = Math.floor(Date.now() / 1000);
        return payload.exp < currentTime;
    } catch (error) {
        return true;
    }
};

const logOut = () => {
    localStorage.removeItem('token');
    window.location.reload();
}

function generateBoundary() {
    return '---------------------------' + Math.floor(Math.random() * 1000000000000000);
}

export { apiUrl, isTokenExpired, logOut, token, generateBoundary }