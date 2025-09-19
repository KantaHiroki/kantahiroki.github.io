// Project data
const projects = {
    featured: {
        title: "Architectural Vision",
        category: "Featured Project",
        description: "この建築プロジェクトは、現代の都市生活における空間の在り方を再定義することを目指しました。機能性と美的価値を融合させ、住む人々にとって真に価値のある空間を創造。光と影、開放感と親密さのバランスを巧妙に調整し、時間の経過と共に深まる愛着を生む建築を実現しています。設計プロセスでは、クライアントとの深い対話を重視し、彼らのライフスタイルや価値観を建築言語として翻訳しました。",
        client: "Private Client",
        year: "2024",
        duration: "12 months",
        tools: "AutoCAD, 3ds Max, Photoshop, Physical Models",
        role: "Lead Architect, Design Director, Project Manager"
    },
    1: {
        title: "Modern Identity",
        category: "Branding",
        description: "現代のブランドアイデンティティデザインに対する包括的なアプローチを表現したプロジェクトです。タイポグラフィ、カラー理論、視覚的階層を慎重に考慮し、現代の聴衆に響く一方で時代を超えた魅力を維持する統一されたシステムを構築しました。ブランドの本質を深く理解し、それを視覚的に表現するためのあらゆる要素を精密に設計。ロゴマークから名刺、ウェブサイトまで、一貫したブランド体験を提供するトータルデザインを実現しています。",
        client: "Tech Startup",
        year: "2024",
        duration: "4 months",
        tools: "Adobe Illustrator, Figma, Brand Guidelines, Print Production",
        role: "Creative Director, Brand Strategist, Visual Designer"
    },
    2: {
        title: "Digital Interface",
        category: "UI/UX Design",
        description: "ユーザーの行動パターンと心理を深く分析し、直感的で使いやすいデジタルインターフェースを設計しました。情報アーキテクチャから視覚的詳細まで、すべての要素がユーザーの目標達成をサポートするよう設計されています。プロトタイピングとユーザーテストを繰り返し実施し、実際の使用場面で最適なパフォーマンスを発揮するインターフェースを実現。アクセシビリティにも十分配慮し、誰もが快適に利用できるデザインを追求しました。",
        client: "Financial Services",
        year: "2024",
        duration: "6 months",
        tools: "Figma, Principle, React, TypeScript, User Testing",
        role: "Lead UX Designer, Product Designer, Researcher"
    },
    3: {
        title: "Editorial Design",
        category: "Publication",
        description: "活字の美しさと読者との対話を重視した出版デザインプロジェクト。各記事の内容と特性に応じて個別にレイアウトを設計し、読者が自然にページを進められるような情報の流れを構築しました。タイポグラフィの選択から画像の配置まで、すべてが読み手の体験を豊かにするよう計算されています。印刷技術の可能性を最大限に活用し、手に取った瞬間から読了まで一貫した品質の高い体験を提供する雑誌デザインです。",
        client: "Art Museum",
        year: "2023",
        duration: "5 months",
        tools: "Adobe InDesign, Photoshop, Custom Typography, Print Management",
        role: "Editorial Designer, Art Director, Typography Specialist"
    },
    4: {
        title: "Motion Graphics",
        category: "Animation",
        description: "ブランドのストーリーを動きで表現するモーショングラフィックスプロジェクト。静的な要素では伝えきれない感情や メッセージを、時間軸を使った表現で魅力的に描写しました。音楽とのシンクロ、色彩の変化、オブジェクトの動きすべてが調和し、観る人の心に深く響く映像体験を創造。テクニカルな技術力と芸術的感性を融合させ、ブランドの価値観を美しく伝える作品に仕上げています。",
        client: "Global Brand",
        year: "2024",
        duration: "3 months",
        tools: "After Effects, Cinema 4D, Premiere Pro, Illustrator",
        role: "Motion Designer, Creative Director, Animation Director"
    },
    5: {
        title: "Web Experience",
        category: "Development",
        description: "最新のウェブ技術を駆使し、ユーザーにとって記憶に残るデジタル体験を構築しました。パフォーマンスの最適化から視覚的魅力まで、技術的実装とデザインが完璧に統合された成果物です。レスポンシブデザインはもちろん、アニメーション、インタラクション、データの可視化など、ウェブの可能性を最大限に活用。SEOやアクセシビリティにも十分配慮し、実用性と美しさを両立したウェブサイトを実現しました。",
        client: "Creative Agency",
        year: "2024",
        duration: "8 months",
        tools: "React, Next.js, GSAP, Three.js, Node.js, MongoDB",
        role: "Frontend Developer, Creative Technologist, UX Engineer"
    },
    6: {
        title: "Visual Identity",
        category: "Corporate",
        description: "企業の本質と未来のビジョンを視覚的に体現するアイデンティティシステムを開発しました。ロゴマークから応用展開まで、すべての要素が企業の価値観を一貫して表現するよう設計されています。市場分析から競合調査、ターゲット分析まで徹底的な戦略立案の上に構築されたデザインは、企業の長期的な成長をサポートする強固な視覚的基盤となっています。従業員から顧客まで、すべてのステークホルダーに愛されるアイデンティティです。",
        client: "Manufacturing Company",
        year: "2023",
        duration: "7 months",
        tools: "Adobe Creative Suite, Brand Guidelines, Implementation Support",
        role: "Brand Consultant, Creative Director, Implementation Manager"
    },
    7: {
        title: "Art Direction",
        category: "Photography",
        description: "ビジュアルストーリーテリングの力を最大限に活用したフォトディレクションプロジェクト。撮影コンセプトの立案からポストプロダクションまで、一貫した芸術的ビジョンのもとで制作されました。被写体の魅力を最大限に引き出す構図、光の使い方、色調整など、すべての要素が調和した美しい写真作品群を創造。商業的な目的と芸術的表現を両立させ、見る人の記憶に深く刻まれるビジュアルを実現しています。",
        client: "Fashion Brand",
        year: "2024",
        duration: "2 months",
        tools: "Professional Photography Equipment, Lightroom, Photoshop",
        role: "Art Director, Creative Strategist, Post-Production Supervisor"
    },
    8: {
        title: "Package Design",
        category: "Product",
        description: "製品の価値を高め、消費者との強い絆を築くパッケージデザインを開発しました。機能性と美的価値を融合させ、店頭での視認性から開封時の体験まで、すべての瞬間が特別なものとなるよう設計されています。持続可能性にも配慮した材料選択と構造設計により、環境への責任も果たしながら、ブランドの価値観を表現。購入から使用まで一貫したブランド体験を提供するトータルパッケージソリューションです。",
        client: "Consumer Goods",
        year: "2023",
        duration: "4 months",
        tools: "Adobe Illustrator, 3D Modeling, Prototyping, Production Management",
        role: "Package Designer, Structural Designer, Production Coordinator"
    }
};

// Gallery functionality
const galleryItems = document.querySelectorAll('.gallery-item, .featured-image');
const detailPage = document.getElementById('detailPage');
const backButton = document.getElementById('backButton');

// Elements to update
const detailTitle = document.getElementById('detailTitle');
const detailCategory = document.getElementById('detailCategory');
const detailDescription = document.getElementById('detailDescription');
const detailClient = document.getElementById('detailClient');
const detailYear = document.getElementById('detailYear');
const detailDuration = document.getElementById('detailDuration');
const detailTools = document.getElementById('detailTools');
const detailRole = document.getElementById('detailRole');

// Add click listeners to gallery items
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.dataset.project;
        const project = projects[projectId];
        
        if (project) {
            // Update detail page content
            detailTitle.textContent = project.title;
            detailCategory.textContent = project.category;
            detailDescription.textContent = project.description;
            detailClient.textContent = project.client;
            detailYear.textContent = project.year;
            detailDuration.textContent = project.duration;
            detailTools.innerHTML = project.tools.split(', ').join('<br>');
            detailRole.innerHTML = project.role.split(', ').join('<br>');
            
            // Show detail page
            detailPage.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Scroll to top
            detailPage.scrollTop = 0;
        }
    });
});

// Back button functionality
backButton.addEventListener('click', () => {
    detailPage.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && detailPage.classList.contains('active')) {
        detailPage.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});
