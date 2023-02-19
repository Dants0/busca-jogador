export default function exportDataPlayer(param){
    const fileData = JSON.stringify(param);
    const blob = new Blob([fileData], { type: "application/vnd.openxmlformats-officedocument.spreadhsheetml.sheet;charset=UTF-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = 'player-info.xls';
    link.href = url;
    link.click();
  }