const onAddClick = () => {
  addToInCompleateList(document.querySelector("#title").value);
};

document.querySelector("#addButton").addEventListener("click", onAddClick);

const deleteFromIncompleateList = (target) => {
  // 押された削除ボタンの親要素を未完了リストから削除
  document.querySelector("#incompleateList").removeChild(target);
};

const deleteFromCompleateList = (target) => {
  // 押された削除ボタンの親要素を未完了リストから削除
  document.querySelector("#compleateList").removeChild(target);
};

const addToInCompleateList = (title) => {
  // 未完了TODOのリストアイテム作成
  const incompleateRow = document.createElement("li");
  incompleateRow.className = "list-row";

  // 未完了TODOのタイトル作成
  const titleElement = document.createElement("p");
  document.querySelector("#title").value = "";
  titleElement.innerText = title;

  // 未完了タイトル要素をリストアイテムへ追加
  incompleateRow.appendChild(titleElement);

  // 完了ボタンの作成
  const compleateButton = document.createElement("button");
  compleateButton.innerText = "完了";
  compleateButton.addEventListener("click", function () {
    // リストから削除
    const target = compleateButton.parentNode;
    deleteFromIncompleateList(target);

    // 完了に移動するTODOのタイトル要素を取得
    const titleElement = target.firstChild;

    // liタグの初期化
    target.textContent = null;

    // タイトル要素をliタグへ追加
    target.appendChild(titleElement);

    // 戻すボタンの作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", function () {
      // 完了TODOを完了リストから削除
      const backTarget = backButton.parentNode;
      deleteFromCompleateList(backTarget);

      addToInCompleateList(backTarget.firstChild.innerText);
    });

    // 戻すボタンをliタグへ追加
    target.appendChild(backButton);

    // liタグを完了リストへ追加
    document.querySelector("#compleateList").appendChild(target);
  });

  // 完了ボタンをリストアイテムへ追加
  incompleateRow.appendChild(compleateButton);

  // 削除ボタンの作成
  const removeButton = document.createElement("button");
  removeButton.innerText = "削除";
  removeButton.addEventListener("click", function () {
    // リストから削除
    const target = removeButton.parentNode;
    deleteFromIncompleateList(target);
  });

  // 削除ボタンをリストアイテムへ追加
  incompleateRow.appendChild(removeButton);

  // リストアイテムを未完了リストへ追加
  const incompleateList = document.querySelector("#incompleateList");
  incompleateList.appendChild(incompleateRow);
};
