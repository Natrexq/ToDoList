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
        todols.removeChild(newList);
      }

      if (todols.children.length > 9) {
        alert("aaaaaaaaaa");
        TdRemoveChild();
      } else {
        //
      }

      delbut.addEventListener("click", TdRemoveChild);
    }
    MakeDv();
  };

  const Check = () => {
    if (nameval.value == "") {
      alert("First Please type name of note!");
    }
    if (messageval.value == "") {
      alert("Please write something in text box for message!");
    } else {
      AddToDoEl();
    }
  };
  addit.addEventListener("click", Check);
})();
