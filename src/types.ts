export type CategoryTodo = {
    id: number,
    name: string,
    userId: number,
}

export type Todo = {
    id: number,
    name: string,
    createdDate: string,
    userId: number | null,
    category?: {
        id: null | number,
        name: string
    }
    categoryId?: number
}