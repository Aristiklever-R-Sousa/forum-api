import { Entity } from "../../core/entities/entity"

interface InstructorInterface {
    name: string

    createdAt: Date
    updatedAt?: Date
}

export class Instructor extends Entity<InstructorInterface> {

}
