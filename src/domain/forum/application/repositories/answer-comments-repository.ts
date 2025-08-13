/* eslint-disable prettier/prettier */
import { AnswerComment } from '../../enterprise/entities/answer-comment'

export interface AnswerCommentsRepository {
    // findById(id: string): Promise<Answer | null>
    // findBySlug(slug: string): Promise<Answer | null>
    // findManyRecent(params: PaginationParams): Promise<Answer[]>
    create(answerComment: AnswerComment): Promise<void>
    delete(answerComment: AnswerComment): Promise<void>
}
