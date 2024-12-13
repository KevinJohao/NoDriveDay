class NoDriveDay {
    private static restrictedDays: { [key: string]: number[] } = {
      "Monday": [1, 2],
      "Tuesday": [3, 4],
      "Wednesday": [5, 6],
      "Thursday": [7, 8],
      "Friday": [9, 0],
    };
  
    private static restrictedHours: [string, string][] = [
      ["07:00", "09:30"],
      ["16:00", "19:30"],
    ];
  
    private static isRestrictedDay(plate: string, date: string): boolean {
      const dayOfWeek = new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        timeZone: 'UTC',
      });
      const lastDigit = parseInt(plate[plate.length - 1], 10);
      console.log(`Checking day: ${dayOfWeek}, last digit: ${lastDigit}`);
      return NoDriveDay.restrictedDays[dayOfWeek]?.includes(lastDigit) || false;
    }
  
    private static isRestrictedHour(time: string): boolean {
      console.log(`Checking time: ${time}`);
      return NoDriveDay.restrictedHours.some(([start, end]) => {
        const isRestricted = time >= start && time <= end;
        console.log(`Time ${time} is restricted between ${start} and ${end}: ${isRestricted}`);
        return isRestricted;
      });
    }
  
    public static canDrive(plate: string, date: string, time: string): string {
      console.log(`Plate: ${plate}, Date: ${date}, Time: ${time}`);
      const restrictedDay = this.isRestrictedDay(plate, date);
      const restrictedHour = this.isRestrictedHour(time);
      console.log(`Restricted day: ${restrictedDay}, Restricted hour: ${restrictedHour}`);
      if (restrictedDay && restrictedHour) {
        return "Cannot drive";
      }
      return "Can drive";
    }
  }
  
  export { NoDriveDay };
  