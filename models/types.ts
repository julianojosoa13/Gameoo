type Category = {
    name: string,
    slug: string,
    id: string
}

type Game = {
    id:string,
    name: string,
    description: string,
    url: string,
    cover: string,
    categories: Array<string>
}

export {Category, Game}
