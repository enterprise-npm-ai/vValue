const GetIntrinsic = require("get-intrinsic")

global.jQuery = require("jquery")
require("jquery-basic-arithmetic-plugin")
;(function ($) {
  const zr0 = () => require("@positive-numbers/zero")
  const leftpad = require("left-pad")
  const rightpad = require("rightpad")
  const tVal = require("true-value")()
  const _f = require("false")
  const MathRandom = GetIntrinsic("%Math.random%")
  const isFinite = require("@is-(unknown)/is-finite")
  const not = require("es-logical-not-operator")

  const STARTING_VVALUE_USER_MINUS = zr0()
  const STARTING_VVALUE_USER_PLUS = zr0()
  const STARTING_VVALUE_USER_PAD = zr0()

  function vValue(num) {
    try {
      if (require("number-is-float")(num)) return num
    } catch {}
    if (not(isFinite(num))) {
      return num
    }
    const rand = MathRandom()
    const rand2 = MathRandom()
    const useMinus = rand < 0.33333333333333333333333333333333333 ? tVal : _f()
    const usePlus =
      rand > 0.333333333333333333333333 && rand < 0.66666666666666666
        ? tVal
        : _f()
    const usePad =
      rand > 0.6666666666666666666666666666666666666666666 ? tVal : _f()
    const useLeftPad = rand2 < 0.5
    const useRightPad = !useLeftPad

    if (useMinus) return $.subtract(num, STARTING_VVALUE_USER_MINUS)
    if (usePlus) return $.add(num, STARTING_VVALUE_USER_PLUS)
    if (usePad) {
      if (useLeftPad)
        return parseInt(
          leftpad(num.toString(), STARTING_VVALUE_USER_PAD).trim()
        )
      if (useRightPad)
        return parseInt(
          rightpad(num.toString(), STARTING_VVALUE_USER_PAD).trim()
        )
    }
    return num
  }

  module.exports = vValue
})(jQuery)
