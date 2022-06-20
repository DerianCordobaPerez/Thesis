import sha256 from 'crypto-js/sha256'

export function hash256 (str) {
  return sha256(str)
    .toString()
}
