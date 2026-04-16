## AWSのサービス間の通信フロー・仕組みをアニメーションで視覚的にわかりやすく表現する

- 問題と選択は著作権に触れるのであくまでもAWSのオリジナルの解説のみ
- AWSのサービスは文字でなくpublic/iconsのアイコンを出来る限り使用すること
  ないものは言ってくれれば追加する
- 1ページに内容を詰め込みすぎない

## 何回も使用するcssはtailwindではなく、Flocss scssで記述

## HTML+アイコン構成は維持しつつ、矢印の流れを元のSVGをなぞるように対角線・曲線パスで描画するSVGオーバーレイ方式に変更

## AWSの画面のスクショを入れたほうが良いところにはダミーを入れておく

## 残りの説明
- ELBのアクセスログを有効にすると、どのような情報が記録されるか。

---

## 図解設計ガイドライン（Diagram Design System）

### 基本方針
RouteTableDiagram.astro の設計パターンを全図解に適用する。

### 構成要素

#### 1. レイアウト: CSS Flexbox/Grid（SVG固定座標は使わない）
```html
<!-- Good: CSSベース -->
<div class="dia-diagram dia-relative">
  <div class="dia-row">
    <div class="dia-box dia-ec2">...</div>
  </div>
</div>

<!-- Bad: SVG固定座標 -->
<svg viewBox="0 0 680 400">
  <rect x="50" y="100" .../>  <!-- 座標ハードコード -->
</svg>
```

#### 2. アイコン: AWS公式アイコンを使用
```html
<img class="dia-box-icon"
     src="/AWS-icons/Architecture-Service-Icons_.../Arch_Amazon-EC2_48.svg"
     alt="EC2" />
```

#### 3. 矢印: SVGオーバーレイ + JavaScript動的計算
```html
<div class="dia-diagram dia-relative" id="my-diagram-wrap">
  <!-- HTML要素（CSSレイアウト） -->
  <div id="source-box" class="dia-box">...</div>
  <div id="target-box" class="dia-box">...</div>

  <!-- SVGオーバーレイ（矢印描画用） -->
  <svg class="dia-svg-overlay" id="my-diagram-svg">
    <defs>
      <!-- 矢印マーカー -->
      <marker id="arrow-green" viewBox="0 0 10 10" refX="9" refY="5"
              markerWidth="5" markerHeight="5" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/>
      </marker>
      <!-- グロー効果 -->
      <filter id="glow-filter">
        <feGaussianBlur stdDeviation="2" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <!-- 動的に描画されるパス -->
    <path id="arrow-line" fill="none" stroke="#10b981" stroke-width="2"/>
  </svg>
</div>

<script is:inline>
function drawArrows() {
  const wrap = document.getElementById('my-diagram-wrap');
  const svg = document.getElementById('my-diagram-svg');
  const source = document.getElementById('source-box');
  const target = document.getElementById('target-box');
  if (!wrap || !svg || !source || !target) return;

  const cr = wrap.getBoundingClientRect();
  const sR = source.getBoundingClientRect();
  const tR = target.getBoundingClientRect();

  // 要素の位置から矢印パスを計算
  const sx = sR.right - cr.left;
  const sy = sR.top + sR.height / 2 - cr.top;
  const ex = tR.left - cr.left;
  const ey = tR.top + tR.height / 2 - cr.top;

  // ベジェ曲線で描画
  const d = `M ${sx} ${sy} Q ${(sx+ex)/2} ${sy-30} ${ex} ${ey}`;
  document.getElementById('arrow-line').setAttribute('d', d);
}

window.addEventListener('load', () => setTimeout(drawArrows, 100));
window.addEventListener('resize', drawArrows);
new ResizeObserver(drawArrows).observe(
  document.getElementById('my-diagram-wrap') || document.body
);
</script>
```

#### 4. 電流エフェクト（アニメーション）
```html
<!-- ベースライン（暗い） -->
<path d="..." class="dia-flow-base dia-flow-base-green" fill="none"/>
<!-- 電流ライン（光る・動く） -->
<path d="..." class="dia-flow dia-flow-green dia-glow"
      stroke-width="2" fill="none" filter="url(#glow-filter)"
      marker-end="url(#arrow-green)"/>
```

CSSクラス（`_diagram.scss`に定義済み）:
- `.dia-flow` - 基本の電流アニメーション
- `.dia-flow-fast` / `.dia-flow-slow` - 速度調整
- `.dia-flow-reverse` - 逆方向
- `.dia-flow-green/blue/orange/purple` - カラー
- `.dia-glow` - グロー効果

### ファイル構成
```
src/
├── styles/component/_diagram.scss  # 共通スタイル（dia-* クラス）
├── components/diagrams/
│   ├── RouteTableDiagram.astro     # 参考実装
│   └── [ServiceName]Diagram.astro  # 各サービスの図解
```

### チェックリスト（新規図解作成時）
- [ ] CSSレイアウト使用（SVG固定座標ではない）
- [ ] AWS公式アイコン使用
- [ ] `dia-relative` + `dia-svg-overlay` で矢印描画
- [ ] JavaScript で要素位置から矢印を動的計算
- [ ] ResizeObserver で再描画対応
- [ ] 電流エフェクト適用（必要に応じて）
- [ ] ダークモード対応（`.dark` セレクタ）
