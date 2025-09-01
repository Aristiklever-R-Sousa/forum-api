/* eslint-disable prettier/prettier */
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { makeQuestion } from 'test/factories/make-question'
import { EditQuestionUseCase } from './edit-question'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { NotAllowedError } from './errors/not-allowed-error'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: EditQuestionUseCase

describe('Edit Question', () => {
    beforeEach(() => {
        inMemoryQuestionsRepository = new InMemoryQuestionsRepository
        sut = new EditQuestionUseCase(inMemoryQuestionsRepository)
    })

    it('should to be able to edit a question', async () => {
        const newQuestion = makeQuestion({
            authorId: new UniqueEntityId('author-1')
        }, new UniqueEntityId('question-1'))

        inMemoryQuestionsRepository.create(newQuestion)

        await sut.execute({
            questionId: newQuestion.id.toValue(),
            authorId: 'author-1',
            title: 'Perguta Teste',
            content: 'Content Test',
        })

        expect(inMemoryQuestionsRepository.items[0]).toMatchObject({
            title: 'Perguta Teste',
            content: 'Content Test',
        })
    })

    it('should not to be able to edit a question from another user', async () => {
        const newQuestion = makeQuestion({
            authorId: new UniqueEntityId('author-1')
        }, new UniqueEntityId('question-1'))

        inMemoryQuestionsRepository.create(newQuestion)

        const result = await sut.execute({
            questionId: newQuestion.id.toValue(),
            authorId: 'author-2',
            title: 'Perguta Teste',
            content: 'Content Test',
        })

        expect(result.isLeft()).toBe(true)
        expect(result.value).toBeInstanceOf(NotAllowedError)
    })
})

