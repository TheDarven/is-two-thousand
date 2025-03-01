import { assertEquals } from "@std/assert";
import { isTwoThousand } from "./main.ts";

Deno.test('a positive number different from 2000 is not 2000', () => {
  assertEquals(isTwoThousand(1), false);
  assertEquals(isTwoThousand(1999), false);
  assertEquals(isTwoThousand(2001), false);
});

Deno.test('2000 is not a negative number', () => {
  assertEquals(isTwoThousand(-2000), false);
  assertEquals(isTwoThousand(-1), false);
});

Deno.test('2000 with decimals is not 2000', () => {
  assertEquals(isTwoThousand(2000.1), false);
  assertEquals(isTwoThousand(2000.01), false);
});

Deno.test('2000 is 2000', () => {
  assertEquals(isTwoThousand(2000), true);
});
