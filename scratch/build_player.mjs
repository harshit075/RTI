import fs from 'fs';
import path from 'path';

const ARTIFACT_DIR = '/Users/sama/.gemini/antigravity-ide/brain/0dad01f9-763f-4050-b0f8-066805a1220a';
const FRAMES_SRC = path.join(ARTIFACT_DIR, 'frames');
const PUBLIC_DEMO = '/Users/sama/Desktop/The New era/Hackathon/RTI/public/demo';
const FRAMES_DEST = path.join(PUBLIC_DEMO, 'frames');

if (!fs.existsSync(FRAMES_DEST)) {
  fs.mkdirSync(FRAMES_DEST, { recursive: true });
}

// Copy frames to public/demo/frames
const files = fs.readdirSync(FRAMES_SRC).filter(f => f.endsWith('.jpg')).sort();
console.log(`Copying ${files.length} frames to ${FRAMES_DEST}...`);

for (const file of files) {
  fs.copyFileSync(path.join(FRAMES_SRC, file), path.join(FRAMES_DEST, file));
}

// Read manifest
const manifestPath = path.join(ARTIFACT_DIR, 'demo_manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

// Build HTML5 player
const playerHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RTI Saathi - 60-Second Product Walkthrough Demo Video</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background: radial-gradient(circle at top center, #111827 0%, #030712 100%);
      color: #f3f4f6;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px 16px;
    }
    .container {
      width: 100%;
      max-width: 1100px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4px 8px;
    }
    .title-group {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .badge {
      background: linear-gradient(135deg, #ea580c 0%, #d97706 100%);
      color: #fff;
      font-size: 11px;
      font-weight: 800;
      padding: 4px 10px;
      border-radius: 9999px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      box-shadow: 0 0 12px rgba(234, 88, 12, 0.4);
    }
    .video-wrapper {
      position: relative;
      width: 100%;
      aspect-ratio: 16 / 10;
      background: #000;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.1);
    }
    #screen-frame {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
      user-select: none;
    }
    .caption-overlay {
      position: absolute;
      bottom: 74px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(15, 23, 42, 0.88);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #fff;
      padding: 8px 20px;
      border-radius: 9999px;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.02em;
      text-shadow: 0 1px 2px rgba(0,0,0,0.5);
      pointer-events: none;
      transition: all 0.2s ease;
      white-space: nowrap;
      max-width: 90%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .controls {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 70%, transparent 100%);
      padding: 16px 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      transition: opacity 0.3s;
    }
    .progress-bar-container {
      width: 100%;
      height: 6px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 9999px;
      cursor: pointer;
      position: relative;
    }
    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #ea580c, #f59e0b);
      border-radius: 9999px;
      width: 0%;
      position: relative;
    }
    .progress-fill::after {
      content: '';
      position: absolute;
      right: -5px;
      top: 50%;
      transform: translateY(-50%);
      width: 12px;
      height: 12px;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0 0 8px rgba(0,0,0,0.5);
    }
    .btn-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .left-controls, .right-controls {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    button.control-btn {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #fff;
      padding: 6px 14px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
    }
    button.control-btn:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.3);
    }
    button.play-btn {
      background: #ea580c;
      border-color: #ea580c;
      padding: 6px 18px;
    }
    button.play-btn:hover {
      background: #c2410c;
      border-color: #c2410c;
    }
    .time-display {
      font-size: 12px;
      color: #9ca3af;
      font-variant-numeric: tabular-nums;
    }
    .chapters {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      padding: 8px 2px;
      scrollbar-width: thin;
    }
    .chapter-pill {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #d1d5db;
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 500;
      white-space: nowrap;
      cursor: pointer;
      transition: all 0.2s;
    }
    .chapter-pill:hover, .chapter-pill.active {
      background: rgba(234, 88, 12, 0.15);
      border-color: #ea580c;
      color: #fed7aa;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="title-group">
        <span class="badge">🇮🇳 Product Walkthrough Demo</span>
        <h1 style="font-size: 18px; font-weight: 700;">RTI Saathi (आरटीआई साथी)</h1>
      </div>
      <div style="font-size: 13px; color: #9ca3af;">60-Second Full Feature Tour</div>
    </div>

    <div class="video-wrapper">
      <img id="screen-frame" src="frames/${files[0]}" alt="RTI Saathi Demo Frame">
      <div class="caption-overlay" id="caption-box">${manifest.frames[0]?.caption || 'RTI Saathi Product Demo'}</div>

      <div class="controls">
        <div class="progress-bar-container" id="progress-bar">
          <div class="progress-fill" id="progress-fill"></div>
        </div>

        <div class="btn-row">
          <div class="left-controls">
            <button class="control-btn play-btn" id="play-btn">▶ Play</button>
            <button class="control-btn" id="prev-btn">⏮ Prev</button>
            <button class="control-btn" id="next-btn">⏭ Next</button>
            <span class="time-display" id="time-display">00:00 / 01:00</span>
          </div>

          <div class="right-controls">
            <button class="control-btn" id="speed-btn">1.0x</button>
            <button class="control-btn" id="fs-btn">⛶ Fullscreen</button>
          </div>
        </div>
      </div>
    </div>

    <div class="chapters">
      <div class="chapter-pill active" onclick="seekToFrame(0)">1. Landing & Hindi Toggle</div>
      <div class="chapter-pill" onclick="seekToFrame(16)">2. 770+ District Geo-Finder</div>
      <div class="chapter-pill" onclick="seekToFrame(22)">3. AI Legal Drafting Studio</div>
      <div class="chapter-pill" onclick="seekToFrame(34)">4. Section 8 Score & BPL Waiver</div>
      <div class="chapter-pill" onclick="seekToFrame(40)">5. Dashboard & 30-Day Timers</div>
      <div class="chapter-pill" onclick="seekToFrame(48)">6. Point-by-Point AI Audit</div>
      <div class="chapter-pill" onclick="seekToFrame(52)">7. 1-Click First Appeal</div>
      <div class="chapter-pill" onclick="seekToFrame(56)">8. Authorities & Knowledge Base</div>
    </div>
  </div>

  <script>
    const frames = ${JSON.stringify(manifest.frames)};
    let currentIndex = 0;
    let isPlaying = true;
    let playbackSpeed = 1.0;
    let timer = null;

    const img = document.getElementById('screen-frame');
    const captionBox = document.getElementById('caption-box');
    const progressFill = document.getElementById('progress-fill');
    const playBtn = document.getElementById('play-btn');
    const timeDisplay = document.getElementById('time-display');
    const speedBtn = document.getElementById('speed-btn');

    function updateFrame(index) {
      currentIndex = Math.max(0, Math.min(index, frames.length - 1));
      const frame = frames[currentIndex];
      img.src = 'frames/' + frame.file;
      captionBox.textContent = frame.caption || 'RTI Saathi Product Demo';
      
      const pct = (currentIndex / (frames.length - 1)) * 100;
      progressFill.style.width = pct + '%';

      const sec = Math.round((currentIndex / (frames.length - 1)) * 60);
      const minStr = String(Math.floor(sec / 60)).padStart(2, '0');
      const secStr = String(sec % 60).padStart(2, '0');
      timeDisplay.textContent = minStr + ':' + secStr + ' / 01:00';
    }

    function play() {
      if (timer) clearInterval(timer);
      isPlaying = true;
      playBtn.textContent = '⏸ Pause';
      timer = setInterval(() => {
        if (currentIndex >= frames.length - 1) {
          currentIndex = 0;
        } else {
          currentIndex++;
        }
        updateFrame(currentIndex);
      }, 1000 / (1.5 * playbackSpeed));
    }

    function pause() {
      if (timer) clearInterval(timer);
      isPlaying = false;
      playBtn.textContent = '▶ Play';
    }

    playBtn.addEventListener('click', () => {
      if (isPlaying) pause(); else play();
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
      pause();
      updateFrame(currentIndex - 1);
    });

    document.getElementById('next-btn').addEventListener('click', () => {
      pause();
      updateFrame(currentIndex + 1);
    });

    window.seekToFrame = (idx) => {
      updateFrame(idx);
      if (!isPlaying) play();
    };

    document.getElementById('progress-bar').addEventListener('click', (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = clickX / rect.width;
      const targetIdx = Math.round(pct * (frames.length - 1));
      updateFrame(targetIdx);
    });

    speedBtn.addEventListener('click', () => {
      if (playbackSpeed === 1.0) playbackSpeed = 1.5;
      else if (playbackSpeed === 1.5) playbackSpeed = 2.0;
      else if (playbackSpeed === 2.0) playbackSpeed = 0.5;
      else playbackSpeed = 1.0;
      speedBtn.textContent = playbackSpeed + 'x';
      if (isPlaying) play();
    });

    document.getElementById('fs-btn').addEventListener('click', () => {
      const wrapper = document.querySelector('.video-wrapper');
      if (!document.fullscreenElement) {
        wrapper.requestFullscreen().catch(err => alert(err.message));
      } else {
        document.exitFullscreen();
      }
    });

    // Spacebar to toggle
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        if (isPlaying) pause(); else play();
      }
    });

    // Start playback immediately
    play();
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(PUBLIC_DEMO, 'index.html'), playerHtml);
console.log('✅ HTML5 Video Player generated at public/demo/index.html');
