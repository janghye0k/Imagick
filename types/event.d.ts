declare namespace AppEvent {
  interface CustomEventMap {
    'global-file-drop': CustomEvent<{ files: File[] }>;
  }
}
