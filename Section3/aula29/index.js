function getWeekDayText(weekDay) {
    const weekDayText = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    
    switch(weekDay) {
        case 0:
            return weekDayText[0];
        case 1:
            return weekDayText[1];
        case 2:
            return weekDayText[2];
        case 3:
            return weekDayText[3];
        case 4:
            return weekDayText[4];
        case 5:
            return weekDayText[5];
        case 6:
            return weekDayText[6];
        default:
            return `''`;
    }
}

const date = new Date('2022-07-13 00:00:00')
const weekDay = date.getDay();
const weekDayText = getWeekDayText(weekDay);

console.log(weekDay, weekDayText);