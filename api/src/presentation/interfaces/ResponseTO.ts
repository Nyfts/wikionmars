import type ErrorResponseTO from './ErrorResponseTO';

interface ResponseTO<T> {
  data: T,
  errors: ErrorResponseTO[],
  timestamp: Date
}

export default ResponseTO;
