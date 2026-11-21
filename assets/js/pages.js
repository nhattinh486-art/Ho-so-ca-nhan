window.SPA_PAGES = {
  home: {
    title: 'Nhật Tình',
    docTitle: 'Nhật Tình — Software Engineer • Systems Architect',
    render: () => `
      <!-- Hero Section -->
      <section class="flex flex-col items-center gap-y-5 text-center pt-2">
        <div class="relative w-32 h-32 flex items-center justify-center">
          <div class="w-28 h-28 rounded-full border border-sky-500/40 p-1 bg-gradient-to-tr from-sky-500/20 to-cyan-400/20 shadow-lg shadow-sky-500/20 overflow-hidden">
            <img
              src="./assets/img/avatar.jpg"
              alt="Nhật Tình Avatar"
              class="w-full h-full rounded-full object-cover"
            />
          </div>
          <!-- Decorative Dragon/Ocean Halo Frame -->
          <svg class="crown3" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="100" cy="100" r="88" stroke="url(#frameGrad)" stroke-width="2.5" stroke-dasharray="14 8 4 8" />
            <circle cx="100" cy="100" r="95" stroke="url(#frameGrad2)" stroke-width="1.2" opacity="0.6" />
            <path d="M100 4 L106 16 L100 13 L94 16 Z" fill="#38bdf8" />
            <path d="M100 196 L106 184 L100 187 L94 184 Z" fill="#22d3ee" />
            <defs>
              <linearGradient id="frameGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                <stop stop-color="#38bdf8" />
                <stop offset="0.5" stop-color="#22d3ee" />
                <stop offset="1" stop-color="#0284c7" />
              </linearGradient>
              <linearGradient id="frameGrad2" x1="200" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
                <stop stop-color="#f472b6" />
                <stop offset="1" stop-color="#38bdf8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div class="flex flex-col items-center gap-y-2">
          <div class="flex items-center gap-x-2">
            <h1 class="text-3xl font-bold tracking-tight">Nhật Tình</h1>
            <i class="ri-verified-badge-fill text-sky-400 text-xl" title="Verified"></i>
          </div>

          <p class="text-sky-400 font-medium text-[0.95rem]">
            Software Engineer • Systems Architect
          </p>

          <div class="flex flex-wrap items-center justify-center gap-3 mt-1 text-xs text-[hsl(var(--muted-foreground))]">
            <span class="inline-flex items-center gap-1">
              <i class="ri-map-pin-line text-sky-400"></i>
              Việt Nam
            </span>
          </div>
        </div>
      </section>

      <!-- Bio Section -->
      <section class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
        <div class="md:min-w-36">
          <h2 class="text-xl font-semibold">Bio</h2>
        </div>
        <div class="flex-1 flex flex-col gap-y-3 text-[0.92rem] leading-relaxed">
          <p class="font-semibold text-sky-400">Nhật Tình</p>
          <p class="text-[hsl(var(--muted-foreground))]">
            Mình là Nhật Tình — Lập trình viên Full-Stack. Chuyên môn chính tập trung vào phát triển hệ thống Back-end phân tán, thiết kế RESTful API hiệu năng cao và lập trình các giải pháp tự động hóa (Automation Bot, Cloudflare Serverless).
          </p>
          <p class="text-[hsl(var(--muted-foreground))]">
            Định hướng làm việc thực chiến: luôn đặt tính bảo mật, tốc độ xử lý và khả năng mở rộng ổn định của sản phẩm lên hàng đầu.
          </p>
          <div class="flex flex-wrap items-center justify-start gap-3 pt-2">
            <a href="/info" data-spa="info" class="spa-link inline-flex items-center gap-2 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--primary-foreground))] px-4 py-2 text-sm font-medium hover:border-sky-400 hover:text-sky-400 transition-all">
              <span>←</span> Mạng xã hội &amp; Hỗ trợ
            </a>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
        <div class="md:min-w-36">
          <h2 class="text-xl font-semibold">Projects</h2>
        </div>
        <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a href="https://facebook.com" target="_blank" rel="noopener" class="profile-card p-4 flex items-start gap-3.5 group">
            <i class="ri-facebook-circle-line text-[1.6rem] text-[#38bdf8] shrink-0 mt-0.5 group-hover:scale-110 transition-transform"></i>
            <div class="flex flex-col gap-1">
              <h3 class="font-semibold text-[0.95rem] group-hover:text-sky-400 transition-colors">Facebook</h3>
              <p class="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
                Trang cá nhân Facebook chính thức — kết nối, giao lưu và hỗ trợ trực tiếp.
              </p>
            </div>
          </a>

          <a href="https://github.com" target="_blank" rel="noopener" class="profile-card p-4 flex items-start gap-3.5 group">
            <i class="ri-github-line text-[1.6rem] text-[#38bdf8] shrink-0 mt-0.5 group-hover:scale-110 transition-transform"></i>
            <div class="flex flex-col gap-1">
              <h3 class="font-semibold text-[0.95rem] group-hover:text-sky-400 transition-colors">GitHub</h3>
              <p class="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
                Kho lưu trữ mã nguồn mở, công cụ tự động hóa và các dự án cá nhân.
              </p>
            </div>
          </a>

          <a href="/locketlam" data-spa="locketlam" class="spa-link profile-card p-4 flex items-start gap-3.5 group">
            <i class="ri-shield-flash-line text-[1.6rem] text-[#38bdf8] shrink-0 mt-0.5 group-hover:scale-110 transition-transform"></i>
            <div class="flex flex-col gap-1">
              <h3 class="font-semibold text-[0.95rem] group-hover:text-sky-400 transition-colors">LocketGold</h3>
              <p class="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
                Trung tâm máy chủ DoH &amp; tải cấu hình Locket Gold VIP vĩnh viễn.
              </p>
            </div>
          </a>

          <a href="/info" data-spa="info" class="spa-link profile-card p-4 flex items-start gap-3.5 group">
            <i class="ri-folder-3-line text-[1.6rem] text-[#38bdf8] shrink-0 mt-0.5 group-hover:scale-110 transition-transform"></i>
            <div class="flex flex-col gap-1">
              <h3 class="font-semibold text-[0.95rem] group-hover:text-sky-400 transition-colors">Dự án</h3>
              <p class="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
                Tổng hợp các sản phẩm phần mềm, website và giải pháp kỹ thuật đã triển khai.
              </p>
            </div>
          </a>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
        <div class="md:min-w-36">
          <h2 class="text-xl font-semibold">Skills</h2>
        </div>
        <div class="flex-1 flex flex-col gap-y-3.5">
          <div class="flex flex-col sm:flex-row sm:items-start gap-2">
            <h3 class="sm:w-1/4 text-sm font-medium text-[hsl(var(--muted-foreground))] pt-1">Languages</h3>
            <div class="flex-1 flex flex-wrap gap-2">
              <span class="skill-tag">PHP</span>
              <span class="skill-tag">JavaScript</span>
              <span class="skill-tag">TypeScript</span>
              <span class="skill-tag">Python</span>
              <span class="skill-tag">C / C++</span>
              <span class="skill-tag">HTML5</span>
              <span class="skill-tag">CSS3</span>
              <span class="skill-tag">SQL</span>
              <span class="skill-tag">Bash / Shell</span>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row sm:items-start gap-2">
            <h3 class="sm:w-1/4 text-sm font-medium text-[hsl(var(--muted-foreground))] pt-1">Frameworks</h3>
            <div class="flex-1 flex flex-wrap gap-2">
              <span class="skill-tag">Laravel</span>
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">Express.js</span>
              <span class="skill-tag">React.js</span>
              <span class="skill-tag">Vue.js</span>
              <span class="skill-tag">React Native</span>
              <span class="skill-tag">Flutter</span>
              <span class="skill-tag">Tailwind CSS</span>
              <span class="skill-tag">Bootstrap</span>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row sm:items-start gap-2">
            <h3 class="sm:w-1/4 text-sm font-medium text-[hsl(var(--muted-foreground))] pt-1">Database</h3>
            <div class="flex-1 flex flex-wrap gap-2">
              <span class="skill-tag">MySQL</span>
              <span class="skill-tag">PostgreSQL</span>
              <span class="skill-tag">MongoDB</span>
              <span class="skill-tag">SQL Server</span>
              <span class="skill-tag">Redis</span>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row sm:items-start gap-2">
            <h3 class="sm:w-1/4 text-sm font-medium text-[hsl(var(--muted-foreground))] pt-1">DevOps &amp; Cloud</h3>
            <div class="flex-1 flex flex-wrap gap-2">
              <span class="skill-tag">Docker</span>
              <span class="skill-tag">Linux</span>
              <span class="skill-tag">Nginx</span>
              <span class="skill-tag">Apache</span>
              <span class="skill-tag">Cloudflare Workers</span>
              <span class="skill-tag">cPanel</span>
              <span class="skill-tag">Git</span>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row sm:items-start gap-2">
            <h3 class="sm:w-1/4 text-sm font-medium text-[hsl(var(--muted-foreground))] pt-1">Tools</h3>
            <div class="flex-1 flex flex-wrap gap-2">
              <span class="skill-tag">RESTful API</span>
              <span class="skill-tag">Automation Bot</span>
              <span class="skill-tag">Reverse Engineering</span>
              <span class="skill-tag">Shadowrocket</span>
              <span class="skill-tag">Laragon</span>
              <span class="skill-tag">Postman</span>
              <span class="skill-tag">Figma</span>
              <span class="skill-tag">VSCode</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Rotating Quote Pill -->
      <div class="flex justify-center pt-2">
        <div class="inline-flex items-center gap-2.5 rounded-3xl border border-sky-500/30 bg-sky-500/5 px-4 py-2 text-xs sm:text-sm text-[hsl(var(--muted-foreground))] shadow-sm">
          <span class="relative flex h-2.5 w-2.5 shrink-0">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-400"></span>
          </span>
          <span id="cham-ngon" class="italic">Code không bug là code chưa từng được chạy.</span>
        </div>
      </div>
    `
  },

  info: {
    title: 'Nhật Tình',
    docTitle: 'Thông Tin & Mạng Xã Hội — Nhật Tình',
    render: () => `
      <section class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
        <div class="md:min-w-36">
          <h2 class="text-xl font-semibold">Menu</h2>
        </div>
        <div class="flex-1 flex flex-wrap items-center justify-start gap-3">
          <a href="/" data-spa="home" class="spa-link inline-flex items-center gap-2 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--primary-foreground))] px-4 py-2 text-sm font-medium hover:border-sky-400 hover:text-sky-400 transition-all">
            <span>←</span> Về Trang Chủ
          </a>
        </div>
      </section>

      <section class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
        <div class="md:min-w-36">
          <h2 class="text-xl font-semibold">Social</h2>
        </div>
        <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a href="https://tiktok.com" target="_blank" rel="noopener" class="profile-card p-3.5 flex items-center gap-3 group">
            <i class="ri-tiktok-line text-2xl text-sky-400"></i>
            <div>
              <h3 class="font-semibold text-sm group-hover:text-sky-400">TikTok</h3>
              <p class="text-xs text-[hsl(var(--muted-foreground))]">@nhattinh</p>
            </div>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener" class="profile-card p-3.5 flex items-center gap-3 group">
            <i class="ri-github-line text-2xl text-sky-400"></i>
            <div>
              <h3 class="font-semibold text-sm group-hover:text-sky-400">GitHub</h3>
              <p class="text-xs text-[hsl(var(--muted-foreground))]">nhattinh</p>
            </div>
          </a>
          <a href="https://zalo.me" target="_blank" rel="noopener" class="profile-card p-3.5 flex items-center gap-3 group">
            <i class="ri-chat-3-line text-2xl text-sky-400"></i>
            <div>
              <h3 class="font-semibold text-sm group-hover:text-sky-400">Zalo</h3>
              <p class="text-xs text-[hsl(var(--muted-foreground))]">Nhật Tình</p>
            </div>
          </a>
          <a href="https://www.wechat.com" target="_blank" rel="noopener" class="profile-card p-3.5 flex items-center gap-3 group">
            <i class="ri-wechat-line text-2xl text-sky-400"></i>
            <div>
              <h3 class="font-semibold text-sm group-hover:text-sky-400">WeChat</h3>
              <p class="text-xs text-[hsl(var(--muted-foreground))]">Nhật Tình</p>
            </div>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener" class="profile-card p-3.5 flex items-center gap-3 group sm:col-span-2">
            <i class="ri-facebook-circle-line text-2xl text-sky-400"></i>
            <div>
              <h3 class="font-semibold text-sm group-hover:text-sky-400">Facebook</h3>
              <p class="text-xs text-[hsl(var(--muted-foreground))]">Trang cá nhân Nhật Tình — Hỗ trợ &amp; kết nối</p>
            </div>
          </a>
        </div>
      </section>
    `
  },

  locketlam: {
    title: 'Nhật Tình',
    docTitle: 'LocketGold — Nhật Tình',
    render: () => `
      <section class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
        <div class="md:min-w-36">
          <h2 class="text-xl font-semibold">Menu</h2>
        </div>
        <div class="flex-1 flex flex-wrap items-center justify-between gap-3">
          <a href="/" data-spa="home" class="spa-link inline-flex items-center gap-2 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--primary-foreground))] px-4 py-2 text-sm font-medium hover:border-sky-400 hover:text-sky-400 transition-all">
            <span>←</span> Về Trang Chủ
          </a>
        </div>
      </section>

      <section class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
        <div class="md:min-w-36">
          <h2 class="text-xl font-semibold">Locket DNS</h2>
        </div>
        <div class="flex-1 flex flex-col gap-3">
          ${[
            { name: 'Máy Chủ 01', url: 'https://cloudflare-dns.com/dns-query' },
            { name: 'Máy Chủ 02', url: 'https://dns.google/dns-query' },
            { name: 'Máy Chủ 03', url: 'https://dns.quad9.net/dns-query' }
          ].map((srv) => `
            <div class="profile-card p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div class="flex items-center gap-3">
                <i class="ri-server-line text-2xl text-sky-400"></i>
                <div>
                  <div class="flex items-center gap-2">
                    <h3 class="font-semibold text-sm">${srv.name}</h3>
                    <span class="server-ping-badge text-[11px] px-2 py-0.5 rounded-full bg-sky-500/15 text-sky-400 font-mono" data-ping-url="${srv.url}">Checking...</span>
                  </div>
                  <p class="text-xs text-[hsl(var(--muted-foreground))] font-mono truncate max-w-[260px]">${srv.url}</p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <a
                  href="/tai-ho-so"
                  data-spa="tai-ho-so"
                  data-server-name="${srv.name}"
                  data-server-url="${srv.url}"
                  class="spa-link select-server-btn rounded-lg bg-sky-500/15 border border-sky-500/40 px-3.5 py-1.5 text-xs font-medium text-sky-400 hover:bg-sky-500/25 transition-colors"
                >
                  Tải Hồ Sơ
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
        <div class="md:min-w-36">
          <h2 class="text-xl font-semibold">Shadowrocket</h2>
        </div>
        <div class="flex-1 profile-card p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 class="font-semibold text-sm">Cấu hình Shadowrocket / Mobileconfig</h3>
            <p class="text-xs text-[hsl(var(--muted-foreground))] mt-0.5">Hỗ trợ iOS 15 – iOS 19, chặn thu hồi chứng chỉ &amp; mở khóa Locket Gold.</p>
          </div>
          <a href="/lay-url" data-spa="lay-url" class="spa-link rounded-lg bg-sky-500/15 border border-sky-500/40 px-3.5 py-2 text-xs font-semibold text-sky-400 hover:bg-sky-500/25 shrink-0 transition-colors">
            <i class="ri-links-line mr-1"></i>Lấy URL
          </a>
        </div>
      </section>

      <section id="huong-dan" class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
        <div class="md:min-w-36">
          <h2 class="text-xl font-semibold">Hướng Dẫn</h2>
        </div>
        <div class="flex-1 profile-card p-4 flex flex-col gap-2 text-xs sm:text-sm text-[hsl(var(--muted-foreground))]">
          <p><strong class="text-[hsl(var(--foreground))]">Bước 1:</strong> Tải ứng dụng Shadowrocket hoặc cài đặt hồ sơ DNS DoH.</p>
          <p><strong class="text-[hsl(var(--foreground))]">Bước 2:</strong> Chọn 1 trong 3 máy chủ có độ trễ thấp nhất (ping xanh).</p>
          <p><strong class="text-[hsl(var(--foreground))]">Bước 3:</strong> Vào Cài đặt iPhone → Cài đặt chung → VPN &amp; Quản lý thiết bị → Tin cậy hồ sơ.</p>
          <p><strong class="text-[hsl(var(--foreground))]">Bước 4:</strong> Khởi động lại Locket và tận hưởng Gold VIP!</p>
        </div>
      </section>
    `
  },

  'tai-ho-so': {
    title: 'Nhật Tình',
    docTitle: 'Tải Hồ Sơ LocketGold — Nhật Tình',
    render: () => `
      <section class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
        <div class="md:min-w-36">
          <h2 class="text-xl font-semibold">Menu</h2>
        </div>
        <div class="flex-1 flex flex-wrap items-center justify-between gap-3">
          <a href="/locketlam" data-spa="locketlam" class="spa-link inline-flex items-center gap-2 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--primary-foreground))] px-4 py-2 text-sm font-medium hover:border-sky-400 hover:text-sky-400 transition-all">
            <span>←</span> Quay lại LocketGold
          </a>
        </div>
      </section>

      <section class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
        <div class="md:min-w-36">
          <h2 class="text-xl font-semibold">Xác Thực</h2>
        </div>
        <div class="flex-1 profile-card p-5 flex flex-col gap-4">
          <div class="flex items-center justify-between border-b border-[hsl(var(--border))] pb-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center text-xl">
                <i class="ri-shield-keyhole-line"></i>
              </div>
              <div>
                <h3 id="selected-server-name" class="font-semibold text-sm">Máy Chủ 01</h3>
                <p id="selected-server-url" class="text-xs text-[hsl(var(--muted-foreground))] font-mono">https://cloudflare-dns.com/dns-query</p>
              </div>
            </div>
            <span class="rounded-full bg-sky-500/15 px-2.5 py-1 text-[11px] font-medium text-sky-400">
              Yêu cầu xác nhận
            </span>
          </div>

          <div class="flex flex-col gap-3.5">
            <div class="flex flex-col gap-1.5">
              <label for="input-locket-link" class="text-xs font-semibold text-[hsl(var(--foreground))]">
                1. Nhập Link Locket của bạn
              </label>
              <input
                id="input-locket-link"
                type="url"
                placeholder="https://locket.camera/links/..."
                class="w-full rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))/0.7] px-3.5 py-2.5 text-sm outline-none focus:border-sky-400 transition-colors"
              />
            </div>

            <div class="flex flex-col gap-1.5">
              <label for="input-admin-code" class="text-xs font-semibold text-[hsl(var(--foreground))]">
                2. Nhập mã do Admin cung cấp
              </label>
              <input
                id="input-admin-code"
                type="text"
                placeholder="Nhập mã xác thực từ Admin..."
                class="w-full rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))/0.7] px-3.5 py-2.5 text-sm outline-none focus:border-sky-400 transition-colors font-mono"
              />
            </div>

            <p id="verify-status" class="text-xs text-[hsl(var(--muted-foreground))]">
              Vui lòng nhập đầy đủ Link Locket và đúng mã từ Admin để mở khóa nút tải xuống.
            </p>

            <button
              type="button"
              id="btn-download-profile"
              disabled
              class="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white transition-all disabled:opacity-45 disabled:cursor-not-allowed hover:bg-sky-400 shadow-md shadow-sky-500/20"
            >
              <i class="ri-download-cloud-2-line text-lg"></i>
              <span>Tải Xuống File Hồ Sơ (.mobileconfig)</span>
            </button>
          </div>
        </div>
      </section>
    `
  },

  'lay-url': {
    title: 'Nhật Tình',
    docTitle: 'Lấy URL Cấu Hình — Nhật Tình',
    render: () => `
      <section class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
        <div class="md:min-w-36">
          <h2 class="text-xl font-semibold">Menu</h2>
        </div>
        <div class="flex-1 flex flex-wrap items-center justify-start gap-3">
          <a href="/locketlam" data-spa="locketlam" class="spa-link inline-flex items-center gap-2 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--primary-foreground))] px-4 py-2 text-sm font-medium hover:border-sky-400 hover:text-sky-400 transition-all">
            <span>←</span> Quay lại LocketGold
          </a>
        </div>
      </section>

      <section class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
        <div class="md:min-w-36">
          <h2 class="text-xl font-semibold">Xác Thực</h2>
        </div>
        <div class="flex-1 profile-card p-5 flex flex-col gap-4">
          <div class="flex items-center gap-3 border-b border-[hsl(var(--border))] pb-3">
            <div class="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center text-xl">
              <i class="ri-key-2-line"></i>
            </div>
            <div>
              <h3 class="font-semibold text-sm">Lấy URL Shadowrocket &amp; DNS</h3>
              <p class="text-xs text-[hsl(var(--muted-foreground))]">Nhập mã xác nhận do Admin cung cấp để xem liên kết</p>
            </div>
          </div>

          <div class="flex flex-col gap-3">
            <label for="input-url-admin-code" class="text-xs font-semibold text-[hsl(var(--foreground))]">
              Mã do Admin cung cấp
            </label>
            <input
              id="input-url-admin-code"
              type="text"
              placeholder="Nhập mã Admin tại đây..."
              class="w-full rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))/0.7] px-3.5 py-2.5 text-sm outline-none focus:border-sky-400 transition-colors font-mono"
            />
            <p id="url-verify-status" class="text-xs text-[hsl(var(--muted-foreground))]">
              Vui lòng nhập đúng mã do Admin cung cấp để tiếp tục.
            </p>
            <button
              type="button"
              id="btn-verify-url-code"
              class="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-400 transition-all shadow-md shadow-sky-500/20"
            >
              <i class="ri-shield-check-line text-lg"></i>
              <span>Xác Nhận &amp; Mở URL</span>
            </button>
          </div>
        </div>
      </section>
    `
  },

  'danh-sach-url': {
    title: 'Nhật Tình',
    docTitle: 'Danh Sách URL — Nhật Tình',
    render: () => `
      <section class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
        <div class="md:min-w-36">
          <h2 class="text-xl font-semibold">Menu</h2>
        </div>
        <div class="flex-1 flex flex-wrap items-center justify-between gap-3">
          <a href="/locketlam" data-spa="locketlam" class="spa-link inline-flex items-center gap-2 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--primary-foreground))] px-4 py-2 text-sm font-medium hover:border-sky-400 hover:text-sky-400 transition-all">
            <span>←</span> Quay lại LocketGold
          </a>
          <span class="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-400">
            <i class="ri-checkbox-circle-line"></i> Đã xác thực
          </span>
        </div>
      </section>

      <section class="flex flex-col gap-y-5 md:flex-row md:gap-x-6 md:gap-y-0">
        <div class="md:min-w-40 shrink-0">
          <h2 class="text-xl font-semibold">Danh Sách URL</h2>
        </div>
        <div class="flex-1 flex flex-col gap-3">
          ${[
            {
              label: '1. Link .conf (Shadowrocket)',
              icon: 'ri-file-code-line',
              url: 'https://raw.githubusercontent.com/nhattinh/locketgold/main/LocketGold.conf'
            },
            {
              label: '2. Link .sgmodule (Module)',
              icon: 'ri-puzzle-line',
              url: 'https://raw.githubusercontent.com/nhattinh/locketgold/main/LocketGold.sgmodule'
            },
            {
              label: '3. Link DNS (DoH)',
              icon: 'ri-global-line',
              url: 'https://cloudflare-dns.com/dns-query'
            }
          ].map((item) => `
            <div class="profile-card p-4 flex flex-col gap-2.5">
              <div class="flex items-center gap-2 text-sm font-semibold text-sky-400">
                <i class="${item.icon} text-lg"></i>
                <span>${item.label}</span>
              </div>
              <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <input
                  type="text"
                  readonly
                  value="${item.url}"
                  class="flex-1 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))/0.7] px-3 py-2 text-xs font-mono text-[hsl(var(--foreground))] outline-none"
                />
                <button
                  type="button"
                  data-ws-copy="${item.url}"
                  class="rounded-xl bg-sky-500/15 border border-sky-500/40 px-4 py-2 text-xs font-semibold text-sky-400 hover:bg-sky-500/25 transition-colors shrink-0"
                >
                  <i class="ri-file-copy-line mr-1"></i>Copy Link
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `
  }
};
