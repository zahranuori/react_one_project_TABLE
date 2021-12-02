function edit_row(no)
{
    document.getElementById("edit_button"+no).style.display="none";
    document.getElementById("save_button"+no).style.display="block";

    let name=document.getElementById("name_row"+no);
    let email=document.getElementById("email_row"+no);
    let job=document.getElementById("job_row"+no);

    let name_data=name.innerHTML;
    let email_data=email.innerHTML;
    let job_data=job.innerHTML;

    name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
    email.innerHTML="<input type='text' id='email_text"+no+"' value='"+email_data+"'>";
    job.innerHTML="<input type='text' id='job_text"+no+"' value='"+job_data+"'>";
}

function save_row(no)
{
    let name_val=document.getElementById("name_text"+no).value;
    let email_val=document.getElementById("email_text"+no).value;
    let job_val=document.getElementById("job_text"+no).value;

    document.getElementById("name_row"+no).innerHTML=name_val;
    document.getElementById("email_row"+no).innerHTML=email_val;
    document.getElementById("job_row"+no).innerHTML=job_val;

    document.getElementById("edit_button"+no).style.display="block";
    document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
    document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
    let new_name=document.getElementById("new_name").value;
    let new_email=document.getElementById("new_email").value;
    let new_job=document.getElementById("new_job").value;

    let table=document.getElementById("data_table");
    let table_len=(table.rows.length)-1;
    let row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='email_row"+table_len+"'>"+new_email+"</td><td id='job_row"+table_len+"'>"+new_job+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

    document.getElementById("new_name").value="";
    document.getElementById("new_email").value="";
    document.getElementById("new_job").value="";
}