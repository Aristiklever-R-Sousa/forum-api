import { randomUUID } from "node:crypto"
import { Slug } from "./value-objects/slug"

interface QuestionInterface {
    title: string
    slug: Slug
    content: string
    authorId: string
}

export class Question {
    public id: string
    public title: string
    public slug: Slug
    public content: string
    public authorId: string

    constructor(props: QuestionInterface, id?: string) {
        this.title = props.title
        this.slug = props.slug
        this.content = props.content
        this.authorId = props.authorId
        this.id = id ?? randomUUID()
    }
}
