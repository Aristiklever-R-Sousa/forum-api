/* eslint-disable prettier/prettier */
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { makeAnswer } from 'test/factories/make-answer'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { ChooseQuestionBestAnswerUseCase } from './choose-question-best-answer'
import { makeQuestion } from 'test/factories/make-question'
import { NotAllowedError } from './errors/not-allowed-error'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: ChooseQuestionBestAnswerUseCase

describe('Choose Question Best Answer', () => {
    beforeEach(() => {
        inMemoryAnswersRepository = new InMemoryAnswersRepository
        inMemoryQuestionsRepository = new InMemoryQuestionsRepository
        sut = new ChooseQuestionBestAnswerUseCase(inMemoryQuestionsRepository, inMemoryAnswersRepository)
    })

    it('should to be able to choose the question best answer', async () => {
        const newQuestion = makeQuestion()

        const newAnswer = makeAnswer({
            questionId: newQuestion.id
        }, new UniqueEntityId('answer-1'))

        inMemoryQuestionsRepository.create(newQuestion)
        inMemoryAnswersRepository.create(newAnswer)

        await sut.execute({
            answerId: newAnswer.id.toValue(),
            authorId: newQuestion.authorId.toValue()
        })

        expect(inMemoryQuestionsRepository.items[0].bestAnswerId).toEqual(newAnswer.id)
    })

    it('should not to be able to choose another user question best answer', async () => {
        const newQuestion = makeQuestion()

        const newAnswer = makeAnswer({
            questionId: newQuestion.id
        }, new UniqueEntityId('answer-1'))

        inMemoryQuestionsRepository.create(newQuestion)
        inMemoryAnswersRepository.create(newAnswer)

        const result = await sut.execute({
            answerId: newAnswer.id.toValue(),
            authorId: 'author-2'
        });

        expect(result.isLeft()).toBe(true)
        expect(result.value).toBeInstanceOf(NotAllowedError)
    })
})

