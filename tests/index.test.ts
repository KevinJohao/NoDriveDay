import { PaekAndPlate } from '../src/index';

test('Should allow driving if it is a permitted day and time', () => {
  expect(PaekAndPlate.canDrive("PBC-1234", "2024-12-11", "10:00")).toBe("Can drive");
});

test('Should not allow driving if it is a restricted day and time', () => {
  expect(PaekAndPlate.canDrive("PBC-1234", "2024-12-09", "08:00")).toBe("Cannot drive");
});
