export interface ServiceType<T> {
    create: (resouce: T) => Promise<T>;
    update: (resouce: Partial<T>) => Promise<T | null>;
    delete: (id: string) => Promise<T | null>;
    getAll: () => Promise<T[]>;
    getById: (id: string) => Promise<T | null>;
    getByEmail: (email: string) => Promise<T | null>;
}
