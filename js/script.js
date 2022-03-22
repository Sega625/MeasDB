var Access_Level = 0; // уровень доступа: 0 - нет; 1 - user; 2 - admin
var Current_Mode = 0; // Текущий режим: 1,11 - измерения; 2,22 - аттестации; 3 - ЭТТ 
var Last_Col = true;  // Последняя отсортированная колонка
var Sort_Dir = 0;     // Последнее направление сортировки (чтобы при повторном нажатии менять направлении сортировки)

// document.oncontextmenu = function (e) {
//     return false;
// }

document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
    document.getElementById("contextMenu").style.display = "none"
}

function rightClick(e) {
    e.preventDefault();

    if (document.getElementById("contextMenu").style.display == "block") 
        hideMenu();

    var menu = document.getElementById("contextMenu")

    menu.style.display = 'block';
    menu.style.left = e.pageX+"px";
    menu.style.top  = e.pageY+"px";    
}

document.addEventListener("DOMContentLoaded", () => {
    Login_Btn_Click();
});

function GetDataFromBD(param1, param2) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "php/db.php", false); // Пока синхронный запрос
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send('param1="'+param1+'"&param2="'+param2+'"');
<<<<<<< HEAD
    var a1 = [[0],[0],[0],[0]]; // Для пароля    
    try {
        a1 = JSON.parse(xhttp.responseText);
    } catch (error) {
        a1[0][1] = 0;
    }
    // alert(a1[0][1]);
    return a1
=======
    return JSON.parse(xhttp.responseText);
>>>>>>> d5a2a306901126b210e5408ae71d964661490182
}

function Clear_All() {
    ///////////////// * Удалим меню названий ОКРов * ////////////////////

    var bt = document.getElementsByClassName("OKR_buttons");
    var N = bt.length;
    for (var i = 0; i < N; i++) { bt[0].parentNode.removeChild(bt[0]); }

    //////////////////////// * Удалим таблицу * /////////////////////////

    bt = document.getElementsByClassName("tbl");
    N = bt.length;
    for (i = 0; i < N; i++) { bt[0].parentNode.removeChild(bt[0]); }

    /////////////////////////////////////////////////////////////////////
}

function Add_Table(N, OKR_Data) {
    var table_html = "<table class='tbl' id='tbl'>";
    switch (N) {
        case 11:
            table_html += "<thead>";
            table_html += "<tr>";
            table_html += "<th onclick=sortTable(0)> Код          </th>";
            table_html += "<th onclick=sortTable(1)> Изделие      </th>";
            table_html += "<th onclick=sortTable(2)> Партия       </th>";
            table_html += "<th onclick=sortTable(3)> № пластин    </th>";
            table_html += "<th onclick=sortTable(4)> Условия      </th>";
            table_html += "<th onclick=sortTable(5)> Измерено     </th>";
            table_html += "<th onclick=sortTable(6)> Годных       </th>";
            table_html += "<th onclick=sortTable(7)> Изм. система </th>";
            table_html += "<th onclick=sortTable(8)> Дата         </th>";
            table_html += "<th onclick=sortTable(9)> Примечание   </th>";
            table_html += "</tr>";
            table_html += "</thead>";

            table_html += "<tbody>";
            for (let i = 0; i < OKR_Data.length; i++) {
                if (OKR_Data[i]["Type"] > 4) {
                    table_html += "<tr class='Cell_Chip' onclick=ClickString(11,"+i+")>";
                }
                else {
                    table_html += "<tr class='Cell_Wafer' onclick=ClickString(11,"+i+")>";
                }
                table_html += "<td align='center'>"+OKR_Data[i]["Code"]      +"</td>";
                table_html += "<td>"+OKR_Data[i]["DeviceName"]+"</td>";
                table_html += "<td>"+OKR_Data[i]["Lot"]       +"</td>";
                table_html += "<td align='center'>"+OKR_Data[i]["WafN"]      +"</td>";
                table_html += "<td align='center'>"+OKR_Data[i]["Conditions"]+"</td>";
                table_html += "<td align='center' class='Bold'>" +OKR_Data[i]["NChips"]    +"</td>";
                table_html += "<td align='center' class='Green'>"+OKR_Data[i]["NOKChips"]  +"</td>";
                table_html += "<td>"+OKR_Data[i]["MeasEqip"]  +"</td>";
                table_html += "<td>"+OKR_Data[i]["Date"]      +"</td>";
                table_html += "<td class='Blue'>"  +OKR_Data[i]["Notes"]     +"</td>";
                table_html += "</tr>";
            }
            table_html += "</tbody>";
            break;

        case 1:
            table_html += "<thead>";
            table_html += "<tr>";
            table_html += "<th onclick=sortTable(0)>  Код           </th>";
            table_html += "<th onclick=sortTable(1)>  MPW/SPW       </th>";
            table_html += "<th onclick=sortTable(2)>  Поз. в MPW </th>";
            table_html += "<th onclick=sortTable(3)>  Изделие       </th>";
            table_html += "<th onclick=sortTable(4)>  Описание      </th>";
            // table_html += "<th onclick=sortTable(0)>  Диаметр       </th>";
            table_html += "<th onclick=sortTable(5)>  Условия       </th>";
            table_html += "<th onclick=sortTable(6)>  Партия        </th>";
            table_html += "<th onclick=sortTable(7)>  № пластин     </th>";
            table_html += "<th onclick=sortTable(8)>  № раб. места  </th>";
            table_html += "<th onclick=sortTable(9)>  Изм. система  </th>";
            table_html += "<th onclick=sortTable(10)> Зонд          </th>";
            table_html += "<th onclick=sortTable(11)> Оператор      </th>";
            table_html += "<th onclick=sortTable(12)> Измерено      </th>";
            table_html += "<th onclick=sortTable(13)> Годных        </th>";
            table_html += "<th onclick=sortTable(14)> Дата          </th>";
            table_html += "<th onclick=sortTable(15)> Примечание    </th>";
            table_html += "</tr>";
            table_html += "</thead>";

            table_html += "<tbody>";
            for (let i = 0; i < OKR_Data.length; i++) {
                if (OKR_Data[i]["Type"] > 4) {
                    table_html += "<tr class='Cell_Chip' onclick=ClickString(1,"+i+")>";
                }
                else {
                    table_html += "<tr class='Cell_Wafer' onclick=ClickString(1,"+i+")>";
                }
                table_html += "<td align='center'>"+OKR_Data[i]["Code"]       +"</td>";
                table_html += "<td>"+OKR_Data[i]["MPW"]        +"</td>";
                table_html += "<td align='center'>"+OKR_Data[i]["MPWPosition"]+"</td>";
                table_html += "<td>"+OKR_Data[i]["DeviceName"] +"</td>";
                table_html += "<td>"+OKR_Data[i]["DeviceDescr"]+"</td>";
                // table_html += "<td>"+OKR_Data[i]["WDiameter"]  +"</td>";
                table_html += "<td align='center'>"+OKR_Data[i]["Conditions"] +"</td>";
                table_html += "<td>"+OKR_Data[i]["Lot"]        +"</td>";
                table_html += "<td align='center'>"+OKR_Data[i]["WafN"]       +"</td>";
                table_html += "<td align='center'>"+OKR_Data[i]["WorkPlaceN"] +"</td>";
                table_html += "<td>"+OKR_Data[i]["MeasEqip"]   +"</td>";
                table_html += "<td>"+OKR_Data[i]["Prober"]     +"</td>";
                table_html += "<td>"+OKR_Data[i]["Operator"]   +"</td>";
                table_html += "<td align='center' class='Bold'>" +OKR_Data[i]["NChips"]     +"</td>";
                table_html += "<td align='center' class='Green'>"+OKR_Data[i]["NOKChips"]   +"</td>";
                table_html += "<td>"+OKR_Data[i]["Date"]       +"</td>";
                table_html += "<td class='Blue'>"  +OKR_Data[i]["Notes"]      +"</td>";
                table_html += "</tr>";
            }
            table_html += "</tbody>";
            break;

        case 22:
            table_html += "<thead>";
            table_html += "<tr>";
            table_html += "<th onclick=sortTable(0)> Изделие         </th>";
            table_html += "<th onclick=sortTable(1)> Изм. система    </th>";
            table_html += "<th onclick=sortTable(2)> № свидетельства </th>";
            table_html += "<th onclick=sortTable(3)> Дата            </th>";
            table_html += "</tr>";
            table_html += "</thead>";

            table_html += "<tbody>";
            for (let i = 0; i < OKR_Data.length; i++) {
                if (OKR_Data[i]["Type"] > 4) {
                    table_html += "<tr class='Cell_Chip' onclick=ClickString(22,"+i+")>";
                }
                else {
                    table_html += "<tr class='Cell_Wafer' onclick=ClickString(22,"+i+")>";
                }
                table_html += "<td>"+OKR_Data[i]["DeviceName"] +"</td>";
                table_html += "<td>"+OKR_Data[i]["MeasEqip"]   +"</td>";
                table_html += "<td align='center'>"+OKR_Data[i]["DocNum"]+"</td>";
                table_html += "<td>"+OKR_Data[i]["Date"]       +"</td>";
                table_html += "</tr>";
            }
            table_html += "</tbody>";
            break;

        case 2:
            table_html += "<thead>";
            table_html += "<tr>";
            table_html += "<th onclick=sortTable(0)> Изделие         </th>";
            table_html += "<th onclick=sortTable(1)> Описание        </th>";
            table_html += "<th onclick=sortTable(2)> Изм. система    </th>";
            table_html += "<th onclick=sortTable(3)> Зонд            </th>";
            table_html += "<th onclick=sortTable(4)> № свидетельства </th>";
            table_html += "<th onclick=sortTable(5)> Программа       </th>";            
            table_html += "<th onclick=sortTable(6)> Размер          </th>";
            table_html += "<th onclick=sortTable(7)> Контр. сумма    </th>";
            table_html += "<th onclick=sortTable(8)> Дата            </th>";
            table_html += "<th onclick=sortTable(9)> Примечание      </th>";
            table_html += "</tr>";
            table_html += "</thead>";

            table_html += "<tbody>";
            for (let i = 0; i < OKR_Data.length; i++) {
                if (OKR_Data[i]["Type"] > 4) {
                    table_html += "<tr class='Cell_Chip' onclick=ClickString(2,"+i+")>";
                }
                else {
                    table_html += "<tr class='Cell_Wafer' onclick=ClickString(2,"+i+")>";
                }
                table_html += "<td>"+OKR_Data[i]["DeviceName"] +"</td>";
                table_html += "<td>"+OKR_Data[i]["DeviceDescr"]+"</td>";
                table_html += "<td>"+OKR_Data[i]["MeasEqip"]   +"</td>";
                table_html += "<td>"+OKR_Data[i]["Prober"]     +"</td>";
                table_html += "<td align='center'>"+OKR_Data[i]["DocNum"]+"</td>";
                table_html += "<td>"+OKR_Data[i]["ProgName"]   +"</td>";
                table_html += "<td>"+OKR_Data[i]["ProgSize"]   +"</td>";
                table_html += "<td>"+OKR_Data[i]["CRC32"]      +"</td>";
                table_html += "<td>"+OKR_Data[i]["Date"]       +"</td>";
                table_html += "<td class='Blue'>"  +OKR_Data[i]["Notes"]+"</td>";
                table_html += "</tr>";
            }
            table_html += "</tbody>";
            break;
            
        case 3:
            table_html += "<thead>";
            table_html += "<tr>";
            table_html += "<th onclick=sortTable(0)> Изделие                   </th>";
            table_html += "<th onclick=sortTable(1)> Кол-во выводов            </th>";
            table_html += "<th onclick=sortTable(2)> Кол-во микросхем          </th>";
            table_html += "<th onclick=sortTable(3)> Кол-во плат               </th>";
            table_html += "<th onclick=sortTable(4)> Кол-во микросхем на плате </th>";
            table_html += "<th onclick=sortTable(5)> Примечание                </th>";
            table_html += "</tr>";
            table_html += "<thead>";

            table_html += "<tbody>";
            for (let i = 0; i < OKR_Data.length; i++) {
                table_html += "<tr class='Cell_ETT' onclick=ClickString(3,"+i+")>";
                table_html += "<td>"+OKR_Data[i]["DeviceName"]+"</td>";
                table_html += "<td align='center'>"+OKR_Data[i]["NPins"]        +"</td>";
                table_html += "<td align='center'>"+OKR_Data[i]["NChips"]       +"</td>";
                table_html += "<td align='center'>"+OKR_Data[i]["NBoards"]      +"</td>";
                table_html += "<td align='center'>"+OKR_Data[i]["NChipsOnBoard"]+"</td>";
                table_html += "<td class='Blue'>"  +OKR_Data[i]["Note"]         +"</td>";
                table_html += "</tr>";
            }
            table_html += "</tbody>";
            break;
    }
    table_html += "</table>";
    document.getElementById('Table_div1').innerHTML = table_html;
}

/////////////// * Добавим меню с названиями ОКРов * ////////////////
function Add_Menu_Btns(prm1) {
    let Arr, OKR_Panel, btn;
    Arr = GetDataFromBD(prm1, "NONE"); // Получим результат из БД
    OKR_Panel = document.getElementById("OKR_Pan");
    for (let i = 0; i < Arr.length; i++) {
        btn = document.createElement("button");
        btn.className = "OKR_buttons";
        btn.style.top = i*30+"px";
        btn.textContent = Arr[i]["OKR_Name"];
        btn.addEventListener("click", OKR_Btn_Click);
        // btn.onclick = OKR_Btn_Click;
        OKR_Panel.appendChild(btn);
    }
}

function Menu_Btn_Click(event, id) {
    if (Access_Level == 0) return 0;

    let m_btn = document.getElementsByClassName("menu_buttons");
    for (let i = 0; i < m_btn.length; i++) { m_btn[i].className = m_btn[i].className.replace(" active", ""); }
    event.currentTarget.className += " active";

    switch (id) {
        case "Meas_Btn_m"  : Current_Mode = 11; break; // Измерения краткая информация
        case "Meas_Btn"    : Current_Mode = 1;  break; // Измерения полная информация
        case "Attest_Btn_m": Current_Mode = 22; break; // Аттестации краткая информация
        case "Attest_Btn"  : Current_Mode = 2;  break; // Аттестации полная информация
        case "ETT_Btn"     : Current_Mode = 3;  break; // Платы ЭТТ
    }
    
    Clear_All();

    switch (Current_Mode) {
        case 11:
        case 1 :
            Add_Menu_Btns("OKR_MEAS");
            break;
            
        case 22:
        case 2 :
            Add_Menu_Btns("OKR_ATTEST");
            break;

        case 3:
            Add_Menu_Btns("OKR_ETT");
            break;
    }
}

function OKR_Btn_Click(event) {
    if (Access_Level == 0) return 0;

    let m_btn = document.getElementsByClassName("OKR_buttons");
    for (let i = 0; i < m_btn.length; i++) { m_btn[i].className = m_btn[i].className.replace(" active", ""); }
    event.currentTarget.className += " active";

    let ReqStr;
    switch (Current_Mode) {
        case 11:
        case 1:
            ReqStr = "MEAS";
            break;

        case 22:
        case 2:
            ReqStr = "ATTEST";
            break;

        case 3:
            ReqStr = "ETT";
            break;

    }

    let Arr = GetDataFromBD(ReqStr, event.currentTarget.textContent); // Получим результат из БД

    Add_Table(Current_Mode, Arr); // Выведем в таблицу
}

function Update_Btn_Click() {
    window.location.reload();
}

function sortTable(Col) {
    if (Col == Last_Col) { Sort_Dir = !Sort_Dir; } // Если новый столбец -
    else { Sort_Dir = 1; }                         // сортируем по возрастанию
    Last_Col = Col;

    let tableData = document.getElementById('tbl').getElementsByTagName('tbody').item(0);
    let rowData = tableData.getElementsByTagName('tr');
    for(let i = 0; i < rowData.length-1; i++) {
        for(let j = 0; j < rowData.length-(i+1); j++) {
            let A1 = Number(rowData.item(j).getElementsByTagName('td').item(Col).innerHTML.replace(/[^0-9\.]+/g, ""));
            let A2 = Number(rowData.item(j+1).getElementsByTagName('td').item(Col).innerHTML.replace(/[^0-9\.]+/g, ""));
            let X = A1 < A2;
            if (Sort_Dir == 0) { X = A1 > A2; }
            if (X) { tableData.insertBefore(rowData.item(j+1), rowData.item(j)); }
        }
    }
}

function ClickString(Type, NStr) {
    // alert(Type+'  '+NStr);    
}

function Login_Btn_Click() {
    document.getElementById("Gray_background").style.visibility = "visible";
    document.getElementById("log_form").style.visibility = "visible";
    document.getElementById("password").value = "";
    document.getElementById("password").focus();
}

function Submit_Click() {
    const val = document.getElementById("password").value;
    if (val == "") { return }

    Access_Level = 0;
    if (val == 1404)   { Access_Level = 1 } // User pass
    if (val == 135351) { Access_Level = 2 } // Admin pass

    document.getElementById("Gray_background").style.visibility = "hidden";    
    document.getElementById("log_form").style.visibility = "hidden";
    Clear_All()

    if (Access_Level == 1) 
    {
        const m_btn1 = document.getElementsByClassName("menu_buttons");
        m_btn1[0].click(); // Нажмём 1-ю кнопку меню
    }
}

function Background_Click() {
    document.getElementById("Gray_background").style.visibility = "hidden";    
    document.getElementById("log_form").style.visibility = "hidden";
}

//////////////// * Для фиксирования заголовка таблицы * ////////////////

// var $th = $('.Table_div').find('thead th')
// $('.Table_div').on('scroll', function() {
//   $th.css('transform', 'translateY('+ this.scrollTop +'px)');
// });

document.querySelectorAll(".Table_div").forEach(el => el.addEventListener("scroll", tableFixHead));

function tableFixHead (e) {
    const el = e.target, sT = el.scrollTop;
    el.querySelectorAll("thead th").forEach(th => th.style.transform = `translateY(${sT}px)`);
}