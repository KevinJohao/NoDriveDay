import { NoDriveDay } from '../src/models/NoDriveDay';

test('Cannot driving if it is a restricted day and time', () => {
    expect(NoDriveDay.canDrive("PBC-1231", "2024-12-9", "08:00")).toBe("Can't drive");
  });
  