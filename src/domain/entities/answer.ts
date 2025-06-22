import { Entity } from "../../core/entities/entity"

interface AnswerInterface {
    content: string
    authorId: string
    questionId: string
}

export class Answer extends Entity<AnswerInterface> {

    get content() {
        return this.props.content
    }
}
