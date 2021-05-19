import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  isMongoId,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsArrayOfMongoIds', async: false })
export class IsArrayOfMongoIds implements ValidatorConstraintInterface {
  validate(value: string[], args: ValidationArguments) {
    const isValid =
      Array.isArray(value) && value.length > 0
        ? !value.some((val) => !isMongoId(val))
        : true;
    return isValid;
  }

  defaultMessage(args: ValidationArguments) {
    const { value } = args;
    const badElement = value.find((el) => !isMongoId(el));
    return `Element '${badElement}' is not a valid MongoId`;
  }
}
