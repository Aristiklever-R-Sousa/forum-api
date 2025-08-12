/* eslint-disable prettier/prettier */
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { makeAnswer } from 'test/factories/make-answer'
import { EditAnswerUseCase } from './edit-answer'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: EditAnswerUseCase

describe('Edit Answer', () => {
    beforeEach(() => {
        inMemoryAnswersRepository = new InMemoryAnswersRepository
        sut = new EditAnswerUseCase(inMemoryAnswersRepository)
    })

    it('should to be able to edit a answer', async () => {
        const newAnswer = makeAnswer({
            authorId: new UniqueEntityId('author-1')
        }, new UniqueEntityId('answer-1'))

        inMemoryAnswersRepository.create(newAnswer)

        await sut.execute({
            answerId: newAnswer.id.toValue(),
            authorId: 'author-1',
            content: 'Content Test',
        })

        expect(inMemoryAnswersRepository.items[0]).toMatchObject({
            content: 'Content Test',
        })
    })

    it('should not to be able to edit a answer from another user', async () => {
        const newAnswer = makeAnswer({
            authorId: new UniqueEntityId('author-1')
        }, new UniqueEntityId('answer-1'))

        inMemoryAnswersRepository.create(newAnswer)

        await expect(() => {
            return sut.execute({
                answerId: newAnswer.id.toValue(),
                authorId: 'author-2',
                content: 'Content Test',
            })
        }).rejects.toBeInstanceOf(Error)
    })
})

