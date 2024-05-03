export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Creating the buffer
  const buffer = new DataView(new ArrayBuffer(length), 0, length);

  // Write in data at a specific position
  buffer.setInt8(position, value);

  // Returns buffer
  return buffer;
}
