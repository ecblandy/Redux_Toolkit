import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../App'
type CarrinhoState = {
  itens: Game[]
}

const initialState: CarrinhoState = {
  itens: []
}
const CarrinhoSlice = createSlice({
  name: 'Carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload
      if (state.itens.find((game) => game.id === jogo.id)) {
        alert('item adicionado')
      } else {
        state.itens.push(jogo)
      }
    }
  }
})

export const { adicionar } = CarrinhoSlice.actions
export default CarrinhoSlice.reducer
