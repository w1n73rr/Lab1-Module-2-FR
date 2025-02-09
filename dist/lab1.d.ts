declare const someArrowFunc: (p1: number, p2: number) => string;
declare const resArrowFunc: string;
declare const firstName: string;
declare let lastName: string;
declare const passport: any;
declare let age: number;
declare const allData: unknown;
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    name: string;
    surname?: string;
}
declare const data: ToJsonStringify;
declare const jsonStringify: string;
