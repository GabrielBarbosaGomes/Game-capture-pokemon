const initialState = {
    data: null,
    loading: false,
    error: false,
    done: false,
}

type requi= {
    type: string,
    payload: any,
}

export const pokemon = (state = initialState, { type, payload }: requi) => {
    switch (type) {
        case 'SET_POKEMON_DATA':
                console.log('payload', payload)
            return payload;

        default:
            console.log('SET_POKEMON_DATA',type)
            return state;
    }
}