export class Structure {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: Structure) => string = item => item.id;

    static baseType: string ;
    static sumSymbol: string ;
    static zero: string ;
}
