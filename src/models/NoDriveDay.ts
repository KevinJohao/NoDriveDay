class NoDriveDay {
  
    // Restricted days with the last digits of the license plates that cannot circulate on those days
    private static restrictedDays: { [key: string]: number[] } = {
      "Monday": [1, 2],
      "Tuesday": [3, 4],
      "Wednesday": [5, 6],
      "Thursday": [7, 8],
      "Friday": [9, 0],
    };

    // Restricted hours during which you cannot drive
    private static restrictedHours: [string, string][] = [
      ["06:00", "09:30"],
      ["16:00", "21:00"],
    ];

    // Check if the day of the week is restricted for a vehicle based on its license plate
    private static isRestrictedDay(plate: string, date: string): boolean {
      const dayOfWeek = new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        timeZone: 'UTC',
      });
      const lastDigit = parseInt(plate[plate.length - 1], 10);
      return NoDriveDay.restrictedDays[dayOfWeek]?.includes(lastDigit) || false;
    }
  
    // Check if the time is within the restricted hours
    private static isRestrictedHour(time: string): boolean {
      return NoDriveDay.restrictedHours.some(([start, end]) => {
        const isRestricted = time >= start && time <= end;
        return isRestricted;
      });
    }

    // Analyzes whether the vehicle can circulate, based on the license plate, date and time
    public static canDrive(plate: string, date: string, time: string): string {
      const restrictedDay = this.isRestrictedDay(plate, date);
      const restrictedHour = this.isRestrictedHour(time);
      if (restrictedDay && restrictedHour) {
        return "Can't drive";
      }
      return "Can drive";
    }
  }
  
  export { NoDriveDay };
  