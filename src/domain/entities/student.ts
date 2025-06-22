import { Entity } from "../../core/entities/entity"

interface StudentInterface {
    name: string

    createdAt: Date
    updatedAt?: Date
}

export class Student extends Entity<StudentInterface> {

}
