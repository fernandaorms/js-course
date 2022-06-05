function formatDate(date){
    return date.toLocaleString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hor12: false
    });
}

function returnHour(date) {
    if (date && !(date instanceof Date)) throw new TypeError('Not a Date instance');

    if(!date) date = new Date();

    return formatDate(date);
}

try{
    const date = new Date('04-26-2022 20:20:59');
    const hour = returnHour(date);
    console.log(hour);
} catch (e){
    // Tratar erro
    // console.log(e);
    console.log('Tratar erro');
} finally {
    console.log('Tenha um bom dia');
}
