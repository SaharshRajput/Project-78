var images=["father.jpg","mother.jpg","brother.jpg","sister.jpg"];
var names=["Dr.R.K Verma","Dr.Nirmala Singh","Saharsh Rajput","Shreyanshi Rajput"];
var i=0;

function change_picture()
{
    i++;
    var no_of_family_members_in_array=3;
    if(i>no_of_family_members_in_array)
    {
i=0;
    }
    var updated_images =images[i];
    var updated_name=names[i];
    document.getElementById("my_family").src=updated_images;
    document.getElementById("Name").innerHTML=updated_name;
}