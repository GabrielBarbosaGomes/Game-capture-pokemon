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

export const pokemonEdit = (state = initialState, { type, payload }: requi) => {
    switch (type) {
        case 'SET_POKEMON_EDIT':
                console.log('pokemon_edit', payload)
            return payload;

        default:
            console.log('POKEMON_EDIT_DEFAULT',type)
            return state;
    }
}