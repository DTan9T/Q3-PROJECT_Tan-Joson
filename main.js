OriginalFee = 18;
Multiplier = 1;

ModifiedFee = OriginalFee * Multiplier;
CanCalculate = false

function RegularFee(id){
    if (CanCalculate == true){
        console.log("Can run")
        ModifiedFee = OriginalFee * Multiplier;
       
        
        if (ModifiedFee == 0){
            document.getElementById(id).innerHTML = "<span class='text-danger'>Please choose different stations</span>";
            
        }else{
            document.getElementById(id).innerHTML = ModifiedFee + " Php";
            document.getElementById('fare-type').innerHTML = "<span class='text-success'>Regular Fare</span>"
        }
        
    } else{
        console.log("Can't run")
        document.getElementById(id).innerHTML = "<span class='text-danger'>Please select a station </span>"
    }

}

function DiscountedFee(id){
    console.log("Running Discounted");
 if (CanCalculate == true){
    console.log("Can run")
    ModifiedFee = OriginalFee * Multiplier;
    Discounted = ModifiedFee * 0.80; // Applying 20% discount
    if (Discounted == 0){
        document.getElementById(id).innerHTML = "<span class='text-danger'>Please choose different stations</span>";
    } else{
        document.getElementById(id).innerHTML = Discounted + " Php";
        document.getElementById('fare-type').innerHTML = "<span class='text-primary DF-text'>Discounted Fare</span>"
    }
 } else{
    console.log("Can't run")
    document.getElementById(id).innerHTML = "<span class='text-danger'>Please select a station </span>"
 }

}

function ChangeCost(){
    if (document.getElementById('start').value != "Default" && document.getElementById('end').value != "Default"){
     CanCalculate = true
     Start = Number(document.getElementById('start').value);
     End = Number(document.getElementById('end').value);

     if (Start > End){
         Multiplier = Start - End;
         document.getElementById("ticket-price").innerHTML = "<span class='text-danger'>Please select a ticket type </span>"
     } else if (End > Start){
         Multiplier = End - Start;
         document.getElementById("ticket-price").innerHTML = "<span class='text-danger'>Please select a ticket type </span>"
     } else if (End == Start){
         Multiplier = 0;
         document.getElementById("ticket-price").innerHTML = "<span class='text-danger'>Please choose different stations</span>";
     }

     console.log("New Multiplier:", Multiplier);
     

    
    } else{
        CanCalculate = false
    }
}


function SearchUp(search){

    searchbr = document.getElementById(search).value;
    window.location = "https://www.google.com/search?q="+  searchbr +"&sca_esv=37c250fced6630af&rlz=1C5CHFA_enPH1018PH1018&ei=Jq_FZ7j4IKzl2roP26rlwAs&ved=0ahUKEwi4o9fegu6LAxWsslYBHVtVGbgQ4dUDCBA&uact=5&oq=pie&gs_lp=Egxnd3Mtd2l6LXNlcnAiA3BpZTIKEAAYgAQYQxiKBTILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMhEQLhiABBixAxjRAxiDARjHATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMhEQLhiABBixAxjRAxiDARjHATILEAAYgAQYsQMYgwEyERAuGIAEGLEDGNEDGIMBGMcBMgUQLhiABEjjCVC4BFiKCHACeACQAQCYAagCoAGoAqoBAzItMbgBA8gBAPgBAZgCAqAC5AOoAgrCAhAQABgDGLQCGOoCGI8B2AEBwgIQEC4YAxi0AhjqAhiPAdgBAZgDnAHxBbP4v4WYfg_OiAYBugYECAEYCpIHBzAuMS4wLjGgB6wQ&sclient=gws-wiz-serp&safe=active&ssui=on"
}