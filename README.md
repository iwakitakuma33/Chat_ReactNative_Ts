## 概要

本レポジトリは、Typescript/React native/expo/firebase を使用した、チャットアプリです。
以下の機能を実現する。

- 基本機能

1. ユーザ新規登録機能/ログイン機能/ログアウト機能
2. チャット送信機能/チャット受信機能(チャットルームは１つのみ/すべてのチャットのデータが表示される)

## スクリーンショット
- ログイン画面
  ![login](https://github.com/iwakitakuma33/react_native_expo_sample/blob/main/readmeAssets/ios_simulator_account_login_sample.png?raw=true)
- ユーザー登録画面
  ![account new](https://github.com/iwakitakuma33/react_native_expo_sample/blob/main/readmeAssets/ios_simulator_account_new.png?raw=true)
- チャット画面
  ![chat](https://github.com/iwakitakuma33/react_native_expo_sample/blob/main/readmeAssets/ios_simulator_chat.png?raw=true)
- 入力画面
  ![input text](https://github.com/iwakitakuma33/react_native_expo_sample/blob/main/readmeAssets/ios_simulator_chat_text_input.png?raw=true)

## 使用技術

- React Native
- Typescript
- expo
- firebase
- node

## セットアップ方法
1. yarnとnodeとexpoのバージョンを合わせる(v14.19.0以上)
   ```bash
	$ yarn -v
		1.22.10
    $ nodenv local 14.19.0
    $ node -v
      v14.19.0
    $ yarn add global expo-cli
    $ npm show expo-cli
      expo-cli@5.3.0 
   ```
2. npm モジュールのインストール
   ```bash
    $ yarn install
   ```
3. firebaseにてプロジェクトを作成し、firebase.tsに必要な情報を記載。
   ```bash
		const firebaseConfig = {
			apiKey: "xxx",
			authDomain: "xxx",
			projectId: "xxx",
			storageBucket: "xxx",
			messagingSenderId: "xxx",
			appId: "xxx"
		};

   ```
4. アプリをスタート
   ```bash
    expo start
   ```
## 動作確認
- 以下の動作確認を実施した。

1. ios/androidシミュレータでの動作確認
2. ios/androidへのexpoを使用した実機確認
3. apk作成後にandoridへの実機確認

## 動作確認スクリーンショット
- android実機
  ![android](https://github.com/iwakitakuma33/react_native_expo_sample/blob/main/readmeAssets/android_chat.jpg?raw=true)
- ios実機
  ![ios](https://github.com/iwakitakuma33/react_native_expo_sample/blob/main/readmeAssets/ios_chat.jpg?raw=true)