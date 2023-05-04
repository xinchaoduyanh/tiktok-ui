import * as request from '~/utils/request'

export const search = async (q,type='less') => {
    try {
        const res = await request.get(`users/search`, {
            params: {
                q,
                type,
            },
        })
        // setSearchResult(res.data);
        // setLoading(false);
        return res.data;
    } catch (error) {
        // setLoading(false)
        console.log(error);
    }
};
