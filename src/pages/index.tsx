import Camera from "@/components/Camera";
import Key from "@/components/Key";
import { Model } from "@/components/Laptop";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
const typingStringDicts = [
    {
        answer: "cd",
        caption: "ディレクトリ移動",
    },
    {
        answer: "ls",
        caption: "ディレクトリ情報の一覧表示",
    },
    {
        answer: "pwd",
        caption: "現在ディレクトリパス表示",
    },
    {
        answer: "touch",
        caption: "ファイル作成",
    },
    {
        answer: "cp",
        caption: "ファイルコピー",
    },
    {
        answer: "mv",
        caption: "ファイルの移動",
    },
    {
        answer: "chmod",
        caption: "アクセス権限変更",
    },
    {
        answer: "useradd",
        caption: "ユーザーの新規作成",
    },
    {
        answer: "deluser",
        caption: "ユーザーの削除",
    },
    {
        answer: "groupadd",
        caption: "グループの新規作成",
    },
    {
        answer: "groupdel",
        caption: "グループの削除",
    },
    {
        answer: "chfn",
        caption: "ユーザー情報の変更",
    },
    {
        answer: "free",
        caption: "メモリの空き容量の表示",
    },
    {
        answer: "last",
        caption: "ログイン履歴の表示",
    },
    {
        answer: "finger",
        caption: "ユーザー情報を表示",
    },
    {
        answer: "route",
        caption: "ルーティングの設定",
    },
    {
        answer: "ftp",
        caption: "ファイルをftpで表示",
    },
    {
        answer: "ssh",
        caption: "sshでログイン",
    },
    {
        answer: "which",
        caption: "コマンドの保存先の調査",
    },
    {
        answer: "whatis",
        caption: "コマンドの説明を表示",
    },
    {
        answer: "apropos",
        caption: "コマンドをキーワードで検索",
    },
    {
        answer: "find",
        caption: "ファイル検索",
    },
    {
        answer: "cal",
        caption: "カレンダーの表示",
    },
    {
        answer: "date",
        caption: "日付の表示",
    },
];
export default function Home() {
    const router = useRouter();
    const [typing, setTyping] = useState({
        typed: "",
        ...typingStringDicts[
            Math.floor(Math.random() * typingStringDicts.length)
        ],
    });
    const keydownHandle = useCallback((event: { key: string }) => {
        if (event.key.length == 1) {
            router.replace({ query: { key: event.key } });
            setTyping((e) => {
                if (e.answer.slice(0, 1) == event.key) {
                    if (e.answer.slice(1, typing.answer.length).length == 0) {
                        return {
                            typed: "",
                            ...typingStringDicts[
                                Math.floor(
                                    Math.random() * typingStringDicts.length
                                )
                            ],
                        };
                    }
                    return {
                        answer: e.answer.slice(1, e.answer.length),
                        typed: e.typed + event.key,
                        caption: e.caption,
                    };
                } else {
                    return e;
                }
            });
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", keydownHandle, false);
    }, []);
    return (
        <>
            <Canvas style={{ width: "100vw", height: "100vh" }}>
                <Camera />
                <directionalLight position={[-2, 10, -1]} intensity={3} />
                <mesh rotation={[0, (-Math.PI / 2) * 1, 0]}>
                    <Model typing={typing} setString={setTyping} />
                    <Key />
                </mesh>
            </Canvas>
        </>
    );
}
