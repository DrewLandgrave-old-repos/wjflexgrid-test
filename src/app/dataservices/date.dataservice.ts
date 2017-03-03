export class DateDataservice {
    getDateRange(startDate: Date, endDate: Date | null): string[] {
        let dates = [];

        startDate = new Date(this.toString(startDate) || '');
        endDate = endDate || this.getDateAfter(startDate, 30);

        while (startDate < endDate) {
            let date = new Date(startDate)
            dates.push(this.toString(date));
            startDate.setDate(startDate.getDate() + 1);
        }

        return dates;
    }

    getDateBefore(date: Date, numBefore: number = 1) {
        return new Date(new Date().setDate(date.getDate() - numBefore));
    }

    getDateAfter(date: Date, numBefore: number = 1) {
        return new Date(new Date().setDate(date.getDate() + numBefore));
    }

    toString(date: Date) {
        return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    }

    getDateBetween(startDate: Date, endDate: Date) {
        let date = new Date(+startDate + Math.random() * (+endDate - +startDate)) 

        return date;
    }

    isDateBetween(startDate: Date, endDate: Date, dateCheck: Date) {
        return startDate < dateCheck && dateCheck < endDate;
    }

    getDaysBetween(startDate: Date, endDate: Date) {
        let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

        return Math.round(Math.abs((startDate.getTime() - endDate.getTime()) / (oneDay)));
    }
}