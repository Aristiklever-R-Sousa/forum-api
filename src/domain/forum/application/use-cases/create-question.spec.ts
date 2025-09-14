/* eslint-disable prettier/prettier */
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { CreateQuestionUseCase } from './create-question'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCase

describe('Create Question', () => {
    beforeEach(() => {
        inMemoryQuestionsRepository = new InMemoryQuestionsRepository
        sut = new CreateQuestionUseCase(inMemoryQuestionsRepository)
    })

    it('should to be able to create a question', async () => {
        const result = await sut.execute({
            authorId: '1',
            title: 'Nova Pergunta',
            content: 'Conteúdo da Pergunta',
            attachmentsIds: ['1', '2']
        })

        expect(result.isRight()).toBeTruthy()
        expect(inMemoryQuestionsRepository.items[0]).toEqual(result.value?.question)
        expect(inMemoryQuestionsRepository.items[0].attachments).toHaveLength(2)
        expect(inMemoryQuestionsRepository.items[0].attachments).toEqual([
            expect.objectContaining({ attachmentId: new UniqueEntityId('1') }),
            expect.objectContaining({ attachmentId: new UniqueEntityId('2') }),
        ])
    })
})
