import { Entity } from "../../core/entities/entity"
import { UniqueEntityId } from "../../core/entities/unique-entity-id"
import { Optional } from "../../core/types/optional"

interface AnswerInterface {
    authorId: UniqueEntityId
    questionId: UniqueEntityId
    content: string

    createdAt: Date
    updatedAt?: Date
}

export class Answer extends Entity<AnswerInterface> {

    static create(props: Optional<AnswerInterface, 'createdAt'>, id?: UniqueEntityId) {
        const answer = new Answer({
            ...props,
            createdAt: new Date()
        }, id)

        return answer
    }

    get content() {
        return this.props.content
    }
}
