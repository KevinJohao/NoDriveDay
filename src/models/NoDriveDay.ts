class NoDriveDay {
    private static restrictedDays: { [key: string]: number[] } = {
      "Monday": [1, 2],
      "Tuesday": [3, 4],
      "Wednesday": [5, 6],
      "Thursday": [7, 8],
      "Friday": [9, 0],
    };
  
    private static restrictedHours: [string, string][] = [
      ["06:00", "09:30"],
      ["16:00", "21:00"],
    ];
  
    private static isRestrictedDay(plate: string, date: string): boolean {
      const dayOfWeek = new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        timeZone: 'UTC',
      });
      const lastDigit = parseInt(plate[plate.length - 1], 10);
      return NoDriveDay.restrictedDays[dayOfWeek]?.includes(lastDigit) || false;
    }
  
    private static isRestrictedHour(time: string): boolean {
      return NoDriveDay.restrictedHours.some(([start, end]) => {
        const isRestricted = time >= start && time <= end;
        return isRestricted;
      });
    }
  
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
  