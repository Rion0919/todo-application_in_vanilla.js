import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-txt").value;
  document.getElementById("add-txt").value = "";

  createIncompleteList(inputText);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIncompleteList = (text) => {
  // div要素
  const div = document.createElement("div");
  div.className = "list-row";

  // リスト要素
  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタン
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    deleteFromIncompleteList(completeBtn.parentNode);
    // 完了リストに追加
    const addTarget = completeBtn.parentNode;
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;

    // li要素
    const li = document.createElement("li");
    li.innerText = text;

    // 戻るボタン要素
    const backBtn = document.createElement("button");
    backBtn.innerText = "戻す";
    backBtn.addEventListener("click", () => {
      const addTarget = backBtn.parentNode;
      document.getElementById("complete-list").removeChild(addTarget);
      const text = addTarget.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backBtn);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタン
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    deleteFromIncompleteList(deleteBtn.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);

  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
