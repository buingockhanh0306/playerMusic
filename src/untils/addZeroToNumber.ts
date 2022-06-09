export function AddZeroToNumber(x: number): string{
    return String(x).length === 1 ? `0${x}` : `${x}`
}