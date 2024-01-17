function promise() {
    return new Promise((resolve) => {
        setTimeout(() => {
        console.log('This is a promise.');
        resolve();
        }, 2000);
    });
}
  
export default async function() {
    await promise();
    console.log('Finished');
}
