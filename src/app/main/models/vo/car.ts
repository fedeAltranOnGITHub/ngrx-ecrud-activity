export class Car {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: Car) => string = item => item.id;

  public brand:string = undefined;
  public model:string = undefined;
  public color:string = undefined;
}
