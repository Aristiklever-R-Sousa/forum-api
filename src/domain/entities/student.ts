import { Entity } from "../../core/entities/entity"

interface StudentInterface {
    name: string
}

export class Student extends Entity<StudentInterface> {

}
