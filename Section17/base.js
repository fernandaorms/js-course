const text = `
James brought beautiful flowers for his beloved girlfriend on March 15, 1985.
Emily was her name.


It was an extraordinary year in James's life. He had 3 children, all grown up now.
emily, today his wife, still makes that delicious coffee with croissants on Sunday mornings. 
Of course! Being the wonderful baker she is, she never forgets her famous croissants.
I never get tired of hearing Emily:
"Jaaaaaaaaaames, the coffee is ready here. Come on!"!
`;

const files = [
    'Attention.jpg',
    'PHOTO.jpeg',
    'My cat.jpg',
    'My cat.JPG',
    'My cat.JPEG',
    'My cat.JPeeEEEEeeeeeeeeeeeeeeeeeeeeeeeeEEEEEEEEEEG',
    'Husband.png',
    'shopping list.txt',
];

const html = '<p>Hello World</p> <p>Hello again</p> <div>I\'m the div</div>';

const html2 = `<p 
data-test='test' 
class="test test">
  Hello World
</p> <p>Hello World</p> <div>I\'m the div</div>`;

const alphabet =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz ®¡ 0123456789 ¡';

const cpfs = `
    The CPFs are:
    254.224.877-45 215.978.456-12 047.258.369-96 
  
  
    963.987.321-00
  
    963.987.32a.00 (NOT VALID)
    963.987.32-00 (NOT VALID)
`;

const cpfs2 = `254.224.877-45
  215.978.456-12
  047.258.369-96
  963.987.32a.00`;

const ips = `
  
    The IPs are:
     0.0.0.0
  
     192.168.0.25
  
          10.10.5.12
  
          10.01.10.20 (THIS IP IS NOT VALID)
          10.021.08.20 (THIS IP IS NOT VALID)
  
     255.255.255.255
  
`;

const lookahead = `
    ONLINE  192.168.0.1 ABCDEF inactive
    OFFLINE  192.168.0.2 ABCDEF active
    ONLINE  192.168.0.3 ABCDEF active
    ONLINE  192.168.0.4 ABCDEF active
    OFFLINE  192.168.0.5 ABCDEF active
    OFFLINE  192.168.0.6 ABCDEF inactive
`;

module.exports = { text, files, html, html2, alphabet, cpfs, cpfs2, ips, lookahead };