/* eslint-disable prettier/prettier */
import { QuestionComment } from '../../enterprise/entities/question-comment'

export interface QuestionCommentsRepository {
    findById(id: string): Promise<QuestionComment | null>
    // findBySlug(slug: string): Promise<Question | null>
    // findManyRecent(params: PaginationParams): Promise<Question[]>
    create(questionComment: QuestionComment): Promise<void>
    delete(questionComment: QuestionComment): Promise<void>
}
