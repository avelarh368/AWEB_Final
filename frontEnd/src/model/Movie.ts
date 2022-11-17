/**
 * @fileoverview Sets Movie's fields.
 */

import React from "react";

export default interface IMovie {
  id: string,
  alt: string;
  src: number;
  fail: number;
  children?: React.ReactNode;
};
