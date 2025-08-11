import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-respository'
import { Question } from '@/domain/forum/enterprise/entities/question'

export class InMemoryQuestionsRepository implements QuestionsRepository {
    public items: Question[] = []

    create(answer: Question): Promise<void> {
        this.items.push(answer)
    }
}
