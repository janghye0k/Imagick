class CommonError extends Error {
  ok: boolean;
  reason: string;

  constructor(ok: boolean, reason: string) {
    super(reason);
    this.name = 'CommonError';
    this.ok = ok;
    this.reason = reason;
  }
}

export { CommonError };
