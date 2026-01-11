interface shape {
    height: number,
    weidth: number
}

interface sqaure extends shape {
    daigonal: number
}

interface cube extends shape {
    breath: number
}

interface user{
    name: string,
    id: string,
    getFullName(): string,
    getSalary(joiningyear: Date): string
}