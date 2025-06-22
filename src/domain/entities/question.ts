import { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/entity"
import { UniqueEntityId } from "../../core/entities/unique-entity-id"

interface QuestionInterface {
    authorId: UniqueEntityId
    bestAnswerId: UniqueEntityId
    title: string
    content: string
    slug: Slug

    createdAt: Date
    updatedAt?: Date
}

export class Question extends Entity<QuestionInterface> {
    static create(props: QuestionInterface, id?: UniqueEntityId) {
        const question = new Question(props, id)

        return question
    }
}
