import { randomUUID } from "node:crypto"

interface StudentInterface {
    name: string
}

export class Student {
    public id: string
    public name: string

    constructor(props: StudentInterface, id?: string) {
        this.name = props.name
        this.id = id ?? randomUUID()
    }

}
