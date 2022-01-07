
export const setupAxios = (axios, store) => {
    axios.interceptors.request.use(req => {
        const { auth: { user } } = store.getState();

        if (user && user.authToken) {
            req.headers["X-Auth-Token"] = `${user.authToken}`;
        }

        return req;
    }, err => Promise.reject(err));

    axios.interceptors.response.use(null, (err) => {
        if (err.response) {
            if (err.response.status === 401) {
                // store.dispatch(doLogout())

                return Promise.reject(err);
            } else return Promise.reject(err);
        } else if (err.request) {
            return Promise.reject({
                response: {
                    data: {
                        message: "Something went wrong, Please try again later!!!"
                    }
                }
            });
        }
    });
}