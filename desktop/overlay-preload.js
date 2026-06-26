const { contextBridge, ipcRenderer } = require('electron');

function bind(channel, callback) {
  if (typeof callback !== 'function') return () => {};
  const listener = (_event, payload) => callback(payload || {});
  ipcRenderer.on(channel, listener);
  return () => ipcRenderer.removeListener(channel, listener);
}

contextBridge.exposeInMainWorld('desktopOverlay', {
  onLyricsState: (callback) => bind('lanote-desktop-lyrics-state', callback),
  onWallpaperState: (callback) => bind('lanote-wallpaper-state', callback),
  setLyricsDrag: (dragging) => ipcRenderer.invoke('lanote-desktop-lyrics-set-dragging', !!dragging),
  setLyricsPointerCapture: (active) => ipcRenderer.invoke('lanote-desktop-lyrics-set-pointer-capture', !!active),
  setLyricsHotBounds: (bounds) => ipcRenderer.invoke('lanote-desktop-lyrics-set-hot-bounds', bounds || {}),
  setLyricsLockState: (locked) => ipcRenderer.invoke('lanote-desktop-lyrics-set-lock-state', !!locked),
  moveLyricsBy: (dx, dy) => ipcRenderer.invoke('lanote-desktop-lyrics-move-by', Number(dx) || 0, Number(dy) || 0),
  closeLyrics: () => ipcRenderer.invoke('lanote-desktop-lyrics-set-enabled', false, {}),
});
