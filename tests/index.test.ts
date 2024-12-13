import { NoDriveDay } from '../src/models/NoDriveDay';

test('Should not allow driving if it is a restricted day and time', () => {
    expect(NoDriveDay.canDrive("PBC-1233", "2024-12-09", "08:00")).toBe("Cannot drive");
  });
  