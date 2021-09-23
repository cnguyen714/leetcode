class Solution {
  public int reverse(int x) {
    int isNegative = 1;
    if(x < 0) {
      isNegative = -1;
      x = x * -1;
    }

    String s = String.valueOf(x);
    if(s.length() > 10) return 0;
    StringBuilder out = new StringBuilder();

    for (int i=0; i < s.length(); i++) {
      // System.out.print(s.charAt(i));
      out.append(s.charAt(s.length() - 1 - i));
    }

    if(s.length() == 10) {
      if (Integer.parseInt(Character.toString(s.charAt(s.length() - 1))) > 2) {
        return 0;
      }
      String check = out.toString().substring(1);
      if (isNegative == -1) {
        if (Integer.parseInt(check) > 147483648) {
          return 0;
        }
      } else {
        if (Integer.parseInt(check) > 147483647) {
          return 0;
        }
      }
    }

    x = Integer.parseInt(out.toString()) * isNegative;
    return x;
  }
}
