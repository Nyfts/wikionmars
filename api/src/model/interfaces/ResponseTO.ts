import ErrorResponseTO from "./ErrorResponseTO";

export default interface ResponseTO<T> {
  data: T,
  errors: ErrorResponseTO[],
  timestamp: Date
}
