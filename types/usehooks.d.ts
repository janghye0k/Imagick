import 'usehooks-ts';

declare module 'usehooks-ts' {
  declare function useEventListener<K extends keyof AppEvent.CustomEventMap>(
    eventName: K,
    handler: (event: AppEvent.CustomEventMap[K]) => void
  ): void;
}
