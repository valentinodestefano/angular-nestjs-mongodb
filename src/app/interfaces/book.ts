export interface Book {

    _id?: string;
    name: string;
    description: string;
    imageURL: string;
    status: string;
    createAt?: Date;
    yearOfPublication: number;

}