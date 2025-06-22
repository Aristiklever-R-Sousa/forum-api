import { randomUUID } from "node:crypto"

interface InstructorInterface {
    name: string
}

export class Instructor {
    public id: string
    public name: string

    constructor(props: InstructorInterface, id?: string) {
        this.name = props.name
        this.id = id ?? randomUUID()
    }

}
