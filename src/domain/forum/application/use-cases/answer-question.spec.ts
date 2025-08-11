/* eslint-disable prettier/prettier */
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Answer a Question', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  })

  it('should to be able to create an answer', async () => {
    const { answer } = await sut.execute({
      questionId: '1',
      instructorId: '1',
      content: 'ABC',
    })

    expect(answer.content).toEqual('ABC')
    expect(inMemoryAnswersRepository.items[0].id).toEqual(answer.id)
  })
})


