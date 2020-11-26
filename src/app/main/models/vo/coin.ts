export class Coin {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: Coin) => string = item => item.id;

    public name:string = undefined;
    public value:string = undefined;
    public description:string = undefined;
}
