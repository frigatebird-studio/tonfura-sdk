//@ts-nocheck
import { plainToInstance } from 'class-transformer';
import { isArray, validateOrReject } from 'class-validator';

export const typeTest = async (value, target) => {
  if (isArray(value)) {
    await Promise.all(
      value.map(async v => {
        await typeTest(v, target);
      })
    );
    return;
  }
  const obj = plainToInstance(target, value);
  try {
    if (typeof target === 'string') {
      if (typeof obj !== target) {
        throw new Error(`Type error: ${target}`);
      }
    } else if (!(obj instanceof target)) {
      throw new Error(`Instance error: ${target.name}`);
    }
    await validateOrReject(obj, {
      stopAtFirstError: true,
      forbidUnknownValues: false
    });
    expect(true).toBe(true);
  } catch (e) {
    console.log(e);
    expect(e).toBeUndefined();
  }
};
