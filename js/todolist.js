var Todo = (function () {
  var todols = document.getElementById("tdlist");
  const nameval = document.getElementById("nameid");
  const messageval = document.getElementById("messageid");
  const addit = document.getElementById("add");

  const AddToDoEl = () => {
    function List(lname, lmessage) {
      this.name = lname;
      this.message = lmessage;
    }

    var nmof = nameval.value;
    nmof = new List(nameval.value, messageval.value);

    function MakeDv() {
      var newList = document.createElement("div");
      newList.className = "tdel";
      newList.style.transition = "opacity 300ms";
      setTimeout(() => {
        newList.style.opacity = "100%";
      }, 400);
      var h2name = document.createElement("h2");
      var h2msg = document.createElement("h2");
      var delbut = document.createElement("button");
      delbut.className = "delbut";
      h2msg.className = "tdtx";
      h2msg.textContent = nmof.message;
      h2name.className = "tdnm";
      h2name.textContent = nmof.name;
      newList.appendChild(h2name);
      newList.appendChild(h2msg);
      newList.appendChild(delbut);
      todols.appendChild(newList);

      function TdRemoveChild() {
        newList.style.transition = "opacity 400ms";
        setTimeout(() => {
          newList.style.opacity = "0%";
          setTimeout(() => {
            todols.removeChild(newList);
          }, 400);
        }, 300);
      }

      if (todols.children.length > 9) {
        alert("You can't add more notes to list!");
        TdRemoveChild();
      } else {
        //
      }

      delbut.addEventListener("click", TdRemoveChild);
    }
    MakeDv();
  };

  const Check = () => {
    const win = window.screen.width;
    if (win < 400) {
      if (nameval.value == "") {
        alert("First Please type name of note!");
      } else if (messageval.value == "") {
        alert("Please write something in text box for message!");
      } else {
        if (nameval.value.length > 8) {
          alert(
            "Sorry, but on the mobile you can't type more than 8 words in name"
          );
        } else if (messageval.value.length > 18) {
          alert(
            "Sorry, but on the mobile you can't type more than 17 words in message"
          );
        } else {
          AddToDoEl();
        }
      }
    } else {
      if (nameval.value == "") {
        alert("First Please type name of note!");
      } else if (messageval.value == "") {
        alert("Please write something in text box for message!");
      } else {
        AddToDoEl();
      }
    }
  };
  addit.addEventListener("click", Check);
})();
