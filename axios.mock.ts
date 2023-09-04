import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const mock = new MockAdapter(axios)

mock.onPost('/api/login').reply(200, {
    user: {
        name: 'Juan'
    },
    jwt: '12342'
})

export const mockedAxios = axios


