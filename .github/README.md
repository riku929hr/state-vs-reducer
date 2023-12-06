# state-vs-reducer

English is followed by Japanese.

## このリポジトリについて

React における useState と useReducer を理解するためのサンプルコードです。
主に、useReducer についての理解を深めることを目的としています。

簡単なフォームを例とし、同じ機能を4通りの方法で実装しています。

## コード

- `UseStateForm`
  - フォームの入力値を 1 つずつ useState で管理する例
- `UseReducerForm`
  - フォームの入力値を useReducer で管理する例
- `ReduxToolKitForm`
  - useReducer のコード量を Redux Tool Kit で削減した例
- `SingleStateForm`
  - useState でフォームの入力値を 1 つのオブジェクトとして管理する例

## What is this repository?

This is a sample code to understand useState and useReducer in React, especially useReducer.

## Code

- `UseStateForm`
  - A sample to manage form input values one by one with useState
- `UseReducerForm`
  - A sample to manage form input values with useReducer
- `ReduxToolKitForm`
  - A sample to reduce the amount of code of useReducer one with Redux Tool Kit
- `SingleStateForm`
  - A sample to manage form input values as one object with useState