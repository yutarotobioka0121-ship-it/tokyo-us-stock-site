with open("src/app/seminar/cashflow-game/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace("      </section>\n    </div>\n  );\n}", "    </div>\n  );\n}")

with open("src/app/seminar/cashflow-game/page.tsx", "w", encoding="utf-8") as f:
    f.write(content)
