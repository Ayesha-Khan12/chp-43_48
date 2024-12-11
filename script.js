// 1. Show an alert box on click on a link.

function showAlert(){
    alert("Welcome in my Assignment")
}
showAlert();

// 2. Display some Mobile images in browser. On click on an image Show the message in alert to user.

function showMxg(){
    alert("Thanks for purchase a phone from us")
}
showMxg();


// 3. Display 10 student records in table and each row should contain a delete button.
//  If you click on a button to delete a record, entire row should be deleted.

function deletRow(rowId){
    let rowData = document.getElementById(rowId);
    rowData.remove();
}

// 4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.


// 5. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button.
//  And show updated counter value in browser.

(function (){
    let counter = 0;
    const decrement = () => {
        counter--;
        updateCounter();
    }
    const increment = () => {
        counter++
        updateCounter();
    }
    const updateCounter = () => {
        document.getElementById("counter").innerHTML = counter;
    }

    document.getElementById("decrement").addEventListener('click', decrement);
    document.getElementById("increment").addEventListener('click', increment);

    const refresh = () => {
        counter = 0;
        updateCounter();
    }
    document.getElementById("refresh").addEventListener('click', refresh)
})();