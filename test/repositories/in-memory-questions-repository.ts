/* eslint-disable prettier/prettier */
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-respository'
import { Question } from '@/domain/forum/enterprise/entities/question'

export class InMemoryQuestionsRepository implements QuestionsRepository {
    public items: Question[] = []

    async findBySlug(slug: string): Promise<Question | null> {
        const question = this.items.find((item) => item.slug.value === slug)

        if (question) return question

        return null
    }

    async create(answer: Question): Promise<void> {
        this.items.push(answer)
    }
}
