export abstract class ParameterBag {
  public errors: string[];

  protected constructor() {
    this.errors = [];
  }

  public isValid(): boolean {
    return this.errors.length === 0;
  }

  public abstract validate(): void;
}
