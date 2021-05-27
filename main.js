var name_of_students=[];

function submit(){
    var display_students=[];
    for(var j=1; j<=4; j++){
        var name=document.getElementById("name_of_the_student_"+j).value;
        console.log(name);
        name_of_students.push(name);
    }
    console.log(name_of_students);

    var lenght=name_of_students.length;
    console.log(lenght);
    
    for(var k=0; k<lenght; k++){
        display_students.push("<h4>Name - "+ name_of_students[k]+"</h4>");
        console.log(display_students);
    }
    console.log(display_students);
    document.getElementById("display_name_with_commas").innerHTML=display_students;

    var remove_commas=display_students.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";    
}
function sorting(){
    name_of_students.sort();
    console.log(name_of_students);

    var display_sort= [];
    var lenght2=name_of_students.length;
    console.log(lenght2);
    for(var s=0; s<lenght2; s++){
        display_sort.push("<h4>Name - "+ name_of_students[s]+"</h4>");
        console.log(display_sort);
    }
    var remove_commas2=display_sort.join(" ");
    console.log(remove_commas2);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas2;
    document.getElementById("display_name_with_commas").innerHTML=display_sort;
}