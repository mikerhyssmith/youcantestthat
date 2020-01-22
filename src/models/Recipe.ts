export interface IRecipe {
    name: string,
    subtitle: string,
    description: string,
    tags: string[],
    example: IRecipeExample
}

export interface IRecipeExample {
    test: string,
    unitUnderTest: string,
}