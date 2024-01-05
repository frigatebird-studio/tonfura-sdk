import {IsBoolean, IsString, ValidateNested} from 'class-validator';
import {Expose, Type} from 'class-transformer';
class Bounceable {
  @Expose()
  @IsString()
  b64: string;

  @Expose()
  @IsString()
  b64url: string;
}

class NonBounceable {
  @Expose()
  @IsString()
  b64: string;

  @Expose()
  @IsString()
  b64url: string;
}

export class ReturnDetectAddress {
  @Expose()
  @IsString()
  raw_form: string;

  @Expose()
  @ValidateNested()
  @Type(() => Bounceable)
  bounceable: Bounceable;

  @Expose()
  @ValidateNested()
  @Type(() => NonBounceable)
  non_bounceable: NonBounceable;

  @Expose()
  @IsString()
  given_type: string;

  @Expose()
  @IsBoolean()
  test_only: boolean;
}
