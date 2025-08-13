/* eslint-disable prettier/prettier */
import { PaginationParams } from '@/core/repositories/pagination-params'
import { QuestionCommentsRepository } from '@/domain/forum/application/repositories/question-comments-repository'
import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'

export class InMemoryQuestionCommentsRepository implements QuestionCommentsRepository {
    public items: QuestionComment[] = []

    // async findById(id: string): Promise<Question | null> {
    //     const question = this.items.find(item => item.id.toString() === id)

    //     if (!question) return null

    //     return question
    // }

    // async findBySlug(slug: string): Promise<Question | null> {
    //     const question = this.items.find((item) => item.slug.value === slug)

    //     if (question) return question

    //     return null
    // }

    // async findManyRecent({ page }: PaginationParams): Promise<Question[]> {
    //     const questions = this.items
    //         .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    //         .slice((page - 1) * 20, page * 20)

    //     return questions
    // }

    async create(questionComment: QuestionComment): Promise<void> {
        this.items.push(questionComment)
    }

    async delete(questionComment: QuestionComment): Promise<void> {
        const itemIndex = this.items.findIndex(item => item.id === questionComment.id)

        this.items.splice(itemIndex, 1)
    }
}
