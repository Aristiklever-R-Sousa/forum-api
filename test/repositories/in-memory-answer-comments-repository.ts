/* eslint-disable prettier/prettier */
import { PaginationParams } from '@/core/repositories/pagination-params'
import { AnswerCommentsRepository } from '@/domain/forum/application/repositories/answer-comments-repository'
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'

export class InMemoryAnswerCommentsRepository implements AnswerCommentsRepository {
    public items: AnswerComment[] = []

    async findById(id: string): Promise<AnswerComment | null> {
        const answerComment = this.items.find(item => item.id.toString() === id)

        if (!answerComment) return null

        return answerComment
    }

    // async findBySlug(slug: string): Promise<Answer | null> {
    //     const answer = this.items.find((item) => item.slug.value === slug)

    //     if (answer) return answer

    //     return null
    // }

    // async findManyRecent({ page }: PaginationParams): Promise<Answer[]> {
    //     const answers = this.items
    //         .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    //         .slice((page - 1) * 20, page * 20)

    //     return answers
    // }

    async create(answerComment: AnswerComment): Promise<void> {
        this.items.push(answerComment)
    }

    async delete(answerComment: AnswerComment): Promise<void> {
        const itemIndex = this.items.findIndex(item => item.id === answerComment.id)

        this.items.splice(itemIndex, 1)
    }
}
