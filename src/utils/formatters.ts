export function filterOnlyObjectProperties<T>(obj: T) {
    return Object.fromEntries(
        Object.entries(obj).filter(([k]) => isNaN(k as any))
    ) as T
}
