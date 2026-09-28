with open("public/llms.txt", "r", encoding="utf-8") as f:
    content = f.read()

target = "2. **キャッシュフローゲーム会**: 「金持ち父さん貧乏父さん」のキャッシュフローゲームを用いた、遊びながらお金の基礎を学ぶ勉強会を開催しています。"
replacement = """2. **キャッシュフローゲーム会**: 「金持ち父さん貧乏父さん」のキャッシュフローゲームを用いた、遊びながらお金の基礎を学ぶ勉強会を開催しています。
   - 日程・申し込み: https://www.tokyo-us-stock.com/seminar/cashflow-game
   - 内容の詳しい説明: https://www.tokyo-us-stock.com/seminar/cashflow-game/guide"""

content = content.replace(target, replacement)

with open("public/llms.txt", "w", encoding="utf-8") as f:
    f.write(content)

