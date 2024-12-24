async function changeColor() {
  let [tab] = await chrome.tabs.query({ active: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      document.body.style.backgroundColor = 'red';
    },
  });
}
document.getElementById('btn').addEventListener('click', changeColor);
