import { randomUUID } from "node:crypto"
import { Slug } from "@/domain/entities/value-objects/slug"

export class UniqueEntityId {

    private value: string

    constructor(value?: string) {
        this.value = value ?? randomUUID()
    }

    toString() {
        return this.value
    }

    toValue() {
        return this.value
    }

}
