import { describe, expect, test } from 'vitest'
import { doDraw } from './doDraw'

describe('dado um sorteio de amigo secreto', () => {
  test('cada participante não sorteie o própio nome', () => {
    const participantes = [
      'Ana',
      'Catarina',
      'Juliana',
      'João',
      'Vinicios',
      'Nathália',
    ]

    const sorteio = doDraw(participantes)
    participantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante)
      expect(amigoSecreto).not.toEqual(participante)
    })
  })
})
