function task1(){
    let name =prompt('Як вас звати?', '');
    let profession = prompt('Яка у вас професія?','');
    let phone = prompt('Ваш номер телефону?','');
    document.write('<table>');
    for (let i = 0; i<12;i++){
        document.write('<tr>');
        for (let i = 0; i<3;i++) {
            document.write('<td>');
            document.write('<TABLE width="200" border="1" align="CENTER">');
            document.write('<TR><TD align="CENTER">');
            document.write(' <TABLE width="100%" border="0">');
            document.write(' <TR>');
            document.write(' <TD align="CENTER" valign="CENTER">');
            document.write(' <IMG src="images/visit_card.gif">');
            document.write(' </TD>');
            document.write(' <TD align="CENTER">');
            document.write(' <B>'+name+'</B><BR>');
            document.write(' <I>'+profession+'</I><BR>');
            document.write(' <FONT color="blue">'+phone+'</FONT>');
            document.write(' </TD>');
            document.write(' </TR>');
            document.write(' </TABLE>');
            document.write('</TD></TR>');
            document.write('</TABLE>');
            document.write('</td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');

}

// Завдання 2
function autor1(){
    alert('Відчуваю й усвідомлюю, яка це красива й легка українська мова');
}
function autor2(){
    alert('Для всіх ти мертва і смішна, Для всіх ти бідна і нещасна, Моя Україно прекрасна, Пісень і волі сторона.');
}
function autor3(){
    alert('Л. Толстой Слово є вчинок.');
}
function autor4(){
    alert('Народна пісня-духовне обличчя наці');
}
function autor5(){
    alert('Українська пісня — це бездонна душа українського народу, це його слава.');
}
