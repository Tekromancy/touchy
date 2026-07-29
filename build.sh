#!/usr/bin/env bash
builder () {
  cmake .
  make
  sudo make install
}
time builder
