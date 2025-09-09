const inputAsset = [
  {
      "slug": "sony-console-playstation-5-pro",
      "text": "Sony PlayStation 5 Pro Console, HDR - Yes, Type - PlayStation 5 Pro, WiFi - Built-in WiFi 7, Color - White & black, Memory - 16 GB GDDR6, Weight - 2.6 kg, 3D audio - Puts you in the thick of the action, whether you're using a headset or TV speakers, Ethernet - Yes, Graphics - 4K, Bluetooth - 5.1, Dimensions - 390 x 104 x 260 mm (H x W x D), Connectivity - HDMI x 1, USB Type-C x 2, USB Type-A x 2, Refresh Rate - 60Hz or 120Hz, Native Resolution - 1440p, Scope of Delivery - Console, DualSense wireless controller, 2 TB SSD (internal storage), 2 Horizontal stand feet, HDMI cable, AC power cord, Optical Disc Drive - No, Hard Drive Capacity - 2 TB SSD, Backwards Compatibility - Compatible with PlayStation 4 games, "
  },
  {
      "slug": "apple-tablet-ipad-2025-wifi-6gb-128gb",
      "text": "Apple iPad (2025) - WIFI - iOS - 128GB, Memory - 6GB, Battery - 28.93 Wh, Display - 11-inch Liquid Retina IPS LCD (2360 x 1640), Storage - 128GB, Processor - Apple A16 Bionic, Dimensions - 19.2 x 26.2 x 3.3 cm (0.773kg), Rear Camera - 12MP, Connectivity - WIFI, Front Camera - 12MP, Operating System - iOS, "
  },
  {
      "slug": "samsung-smartphone-galaxy-s25-ultra-12gb-256-gb",
      "text": "Samsung Galaxy S25 Ultra Smartphone  - 256 GB - Dual SIM, Memory - 12GB, Battery - 4855 mAh, Display - 6.9-inch Dynamic AMOLED 2X (3120 x 1440), Storage - 256 GB, Processor - , Dimensions - , Rear Camera - 200 MP + 50 MP + 50 MP + 10 MP, Connectivity - 5G, Front Camera - 12 MP, Operating System - Android 15, "
  },
  {
      "slug": "apple-smartphone-iphone-16-pro-max-8gb-256gb",
      "text": "Apple iPhone 16 Pro Max - 256GB - Dual SIM, Memory - 8GB, Battery - 4676 mAh, Display - 6.9-inch OLED Super Retina XDR (2868 x 1320), Storage - 256GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP + 48MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 18, "
  },
  {
      "slug": "apple-smartphone-iphone-16-pro-8gb-128gb",
      "text": "Apple iPhone 16 Pro - 128GB - Dual SIM, Memory - 8GB, Battery - 3577 mAh, Display - 6.3-inch OLED Super Retina XDR (2622 x 1206), Storage - 128GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP + 48MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 18, "
  },
  {
      "slug": "apple-macbook-air-13-m4-10cpu-16gb-512gb-10gpu",
      "text": "MacBook Air 13\" - Apple M4 Chip 16GB Memory  512GB SSD Integrated 10-core GPU, Model - MW133D/A, Memory - 16GB, Display - 13.6 inches (2560 x 1664), Storage - 512GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M4, Dimensions - 30.41 x 21.5 x 1.13 cm • 1.24 kg, Operating System - macOS, Keyboard Language - German, "
  },
  {
      "slug": "meta-mixed-reality-meta-quest-3-512gb",
      "text": "Meta Quest 3 512 GB VR Headset, DRAM - 8 GB (33% more than Quest 2), Audio - Integrated stereo speakers with 3D spatial audio, enhanced bass, Power - Snapdragon XR2 Gen 2 chipset (double GPU processing power), Wi-Fi - Wi-Fi 6E enabled (region permitting), Weight - 515g, Display - 4K+ Infinite Display (25PPD, 1218 PPI), Privacy - External LED signal for camera usage notification, Storage - 512 GB, Ergonomics - Soft adjustable strap, depth adjustment, Resolution - 2064x2208 pixels per eye (30% better than Quest 2), Charge time - Approximately 2.3 hours with 18 W power adapter, Battery life - Up to 2.4 hours for gaming, Eye Tracking - Not featured, Refresh rate - 90 Hz, 120 Hz, Field of view - 110 degrees horizontal, 96 degrees vertical, pancake lens, Mixed Reality - Two RGB cameras (18 PPD), 10X Quest 2 resolution in Pass-through, depth projection, and room mapping, Lens Adjustment - Inter Pupillary Distance (IPD) ranges from 58 mm-71 mm, Scope of Delivery - Headset, headset insert, 2 x Meta Quest Touch Plus Controllers (AA batteries included), Power supply, Charging cable, Xbox Cloud Gaming - Stream hundreds of Xbox games on Meta Quest with Game Pass Ultimate, Backwards compatibility - PC support with Meta Quest Link cable and Air Link, Officially Supported Controller - Xbox Wireless Controller, Xbox Elite Wireless Controller Series 2, Xbox Adaptive Controller, Sony DualShock 4 Wireless Controller, Nintendo Switch Pro Controller, Meta Quest Touch Plus Controllers - Streamlined, ring-free design, TruTouch variable haptics, mixed-reality pass-through, Direct Touch hand tracking, "
  },
  {
      "slug": "sony-console-sony-playstation-5-slim",
      "text": "Sony PlayStation 5 Slim Console, CPU - x86-64-AMD Ryzen “Zen 2”, 8 Cores / 16 Threads, Variable frequency, up to 3.5 GHz, GPU - AMD Radeon RDNA 2-based graphics engine, Ray Tracing Acceleration, Variable frequency, up to 2.23 GHz, Memory - 16GB, 448GB/s Bandwidth, Weight - 3.2kg, USB Ports - USB Type-C (Super-Speed USB 10Gbps), USB Type-C (Hi-Speed USB), USB Type-A port (Super-Speed USB 10Gbps) x2, Dimensions - 96mm x 358mm x 216mm, Performance - 4K @ 60 FPS, Up to 120 FPS and 8K, Storage Type - 1TB Custom NVME SSD, Optical Drive - 4K UHD Blu-ray Player, Vertical Stand - Not included, Scope of Delivery - PlayStation®5 console, DualSense™ Wireless Controller, 1TB SSD, 2 Horizontal stand feet, HDMI® cable, AC power cord, USB cable, Printed materials, Expandable Storage - NVMe SSD Slot, Number of USB Ports - 4, "
  },
  {
      "slug": "sony-console-sony-playstation-5-slim-digital",
      "text": "Sony PlayStation 5 Slim Digital Console, CPU - x86-64-AMD Ryzen “Zen 2”, 8 Cores / 16 Threads, Variable frequency, up to 3.5 GHz, GPU - AMD Radeon RDNA 2-based graphics engine, Ray Tracing Acceleration, Variable frequency, up to 2.23 GHz, Memory - 16GB, 448GB/s Bandwidth, Weight - 2.6kg, USB Ports - USB Type-C (Super-Speed USB 10Gbps), USB Type-C (Hi-Speed USB), USB Type-A port (Super-Speed USB 10Gbps) x2, Dimensions - 80mm x 358mm x 216mm, Performance - 4K @ 60 FPS, Up to 120 FPS and 8K, Storage Type - 1TB Custom NVME SSD, Optical Drive - all-digital version without a disc drive, Vertical Stand - Not included, Scope of Delivery - PlayStation®5 console, DualSense™ Wireless Controller, 1TB SSD, 2 Horizontal stand feet, HDMI® cable, AC power cord, USB cable, Printed materials, Expandable Storage - NVMe SSD Slot, Number of USB Ports - 4, "
  },
  {
      "slug": "canon-eos-r50-rf-s-18-45mm-rf-s-55-210mm-camera-kit",
      "text": "Canon EOS R50 Camera Kit with RF-S 18-45mm f/4.5-6.3 IS STM + RF-S 55-210mm f/5-7.1 IS STM Lens, ISO - 100 - 32,000, Video - Uncropped 4K 30fps, Storage - Single-slot SD card, Auto-Focus - 651-point Phase Detect Dual Pixel CMOS AF II, Mount Type - Canon RF, Viewfinder - 3.69 million dots OLED, Screen Type - 3\" 1.62 Million-dot clear View LCD ii Variable Angle Touchscreen, Connectivity - WLAN, Bluetooth, Fast shooting - Up to 12FPS continuous shooting, Scope of delivery - Canon EOS R50, RF-S 18-45mm, RF-S 55-210mm, Lens cover, camera cover, Battery LP-E17, Power cable, Dimensions & Weight - 116.3 x 85.5 x 68.8 mm • 375g, "
  },
  {
      "slug": "sony-alpha-ilce-7-iv-body",
      "text": "Sony Alpha 7 IV Mirrorless Camera Body, ISO - 100 to 51,200, Video - 4K60p in 10-bit, S-Cinetone Photo: JPEG, RAW, HEIF, Storage - Slot 1 CFexpress type A / SD (UHS-II), Slot 2 SD UHS-II, Mount Type - Sony E, Screen Type - 3” 1,036800 Dot Free-Angle Tilting Touchscreen LCD, View Finder - 3,680,000 Dot OLED EVF, Connectivity - 1x HDMI output / 2 x 3.5mm TRS Stereo headphone Input + output / USB micro-B / USB Type-C / Bluetooth / Wi-Fi, Image Sensor - 33mp Full Frame CMOS sensor, Shutter Speed - 1/8000 to 30s, Stabilisation - 5-Axis Sensor-Shift, Max Resolution - 7008 x 4672, Auto-Focus Points - 759-point Phase Detection / 425-point Contrast Detection, Scope of delivery - Sony A7 IV camera, Sony NP-FZ100 Lithium Ion Battery (2280mAh), Ac Adapter and Power cord, Shoulder Strap, USB Type-C to Type-A cable, "
  },
  {
      "slug": "sony-alpha-7-iv-sel-fe-28-70mm",
      "text": "Sony Alpha 7 IV Camera Kit with FE 28-70 mm f/3.5–5.6 OSS Lens, ISO - 100 to 51,200, Lens - Sony FE 28-70mm f/3.5-5.6 OSS, Video - 4K60p in 10-bit, S-Cinetone Photo: JPEG, RAW, HEIF, Storage - Slot 1 CFexpress type A / SD (UHS-II), Slot 2 SD UHS-II, Mount Type - Sony E, Screen Type - 3” 1,036800 Dot Free-Angle Tilting Touchscreen LCD, View Finder - 3,680,000 Dot OLED EVF, Connectivity - 1x HDMI output / 2 x 3.5mm TRS Stereo headphone Input + output / USB micro-B / USB Type-C / Bluetooth / Wi-Fi, Image Sensor - 33mp Full Frame CMOS sensor, Shutter Speed - 1/8000 to 30s, Stabilisation - 5-Axis Sensor-Shift, Max Resolution - 7008 x 4672, Auto-Focus Points - 759-point Phase Detection / 425-point Contrast Detection, Scope of delivery - Sony A7 IV camera, Sony NP-FZ100 Lithium Ion Battery (2280mAh), Ac Adapter and Power cord, Shoulder Strap, USB Type-C to Type-A cable, "
  },
  {
      "slug": "apple-tablet-ipad-2025-wi-fi-cellular-6gb-128gb",
      "text": "Apple iPad (2025) - Wi-Fi + Cellular - iOS - 128GB, Memory - 6GB, Battery - 28.93 Wh, Display - 11-inch Liquid Retina IPS LCD (2360 x 1640), Storage - 128GB, Processor - Apple A16 Bionic, Dimensions - 19.2 x 26.2 x 3.3 cm (0.773kg), Rear Camera - 12MP, Connectivity - Wi-Fi + Cellular, Front Camera - 12MP, Operating System - iOS, "
  },
  {
      "slug": "apple-smartphone-galaxy-s25-12gb-128-gb",
      "text": "Samsung Galaxy S25 Smartphone  - 128 GB - Dual SIM, Memory - 12GB, Battery - 3885 mAh, Display - 6.2-inch Dynamic AMOLED 2X (1080 x 2340), Storage - 128 GB, Processor - , Dimensions - , Rear Camera - 12 MP + 50 MP + 10 MP, Connectivity - 5G, Front Camera - 12 MP, Operating System - Android 15, "
  },
  {
      "slug": "apple-smartphone-iphone-16-8gb-128gb",
      "text": "Apple iPhone 16 - 128GB - Dual SIM, Memory - 8GB, Battery - 3561 mAh, Display - 6.1-inch OLED Super Retina XDR (2556 x 1179), Storage - 128GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 18, "
  },
  {
      "slug": "apple-macbook-pro-16-m4-pro-14cpu-24gb-512gb-20gpu",
      "text": "MacBook Pro 16\" - Apple M4 Pro Chip 24GB Memory 512GB SSD - Integrated 20-core GPU, Model - MX2X3D/A, Memory - 24GB, Display - 16.2 inches (3024 x 1964), Storage - 512GB SSD, Graphics - Apple Integrated 20-core GPU, Processor - Apple M4 Pro, Dimensions - 35.57 x 35.57 x 1.68 cm • 2.14 kg, Operating System - macOS, Keyboard Language - German, "
  },
  {
      "slug": "apple-airpods-4-with-active-noise-cancellation-in-ear-bluetooth-headphones",
      "text": "Apple Airpods 4 with Active Noise Cancellation In-ear Bluetooth Headphones, Type - In-ear Bluetooth Headphones, Battery - Up to 20h battery with ANC enabled, Sensors - Two beamforming microphones, Inward-facing microphone, Optical in-ear sensor, Accelerometer with motion detection, Accelerometer with speech recognition, Pressure sensor, Connections - USB-C, Key features - Bluetooth 5.3, H2 headphone chip, Personalized 3D audio with dynamic head tracking, Adaptive EQ automatically tunes music to your ears, Voice isolation, special high-excursion Apple woofer and amplifier with dynamic range, Ventilation for pressure equalization, Active Noise Cancellation, Transparency mode, Conversation Recognition,, Noise canceling - ANC, Scope of Delivery - Airpods 4 with ANC , Charging case (USB-C), Wireless charging - Qi-certified chargers or Apple watch charger, Integrated microphone - Yes, Water/splash resistant - IP54, "
  },
  {
      "slug": "apple-airpods-max-with-usb-c-over-ear-bluetooth-headphones",
      "text": "Apple Airpods Max with USB-C Over-ear Bluetooth Headphones, Type - Over-ear headphones, Battery - Up to 20h with ANC & 3D audio, Sensors - Optical sensor (in each earpiece), Position sensor (in each earpiece), Case detection sensor (in each earpiece), Accelerometer (in each earcup), Gyro sensor (left earcup), Connections - USB-C, Key features - Dynamic driver developed by Apple provides rich, deep bass, accurate mid-ranges, and crisp, clean high-frequency extension so every note can be heard. Transparency mode, Adaptive EQ, 3D audio with dynamic head tracking, digital crown control, Storage in the smart case extends the battery life through extremely low energy consumption, multi-connect allows automatic device switching., Noise canceling - ANC, Scope of Delivery - Airpods Max, Smartcase, USB-C charging cable, Wireless charging - No, Integrated microphone - 9x microphones for noise cancellation and voice capture, Intelligent functions - Voice control with Siri, smart case, wear detection, "
  },
  {
      "slug": "dji-mini-3-pro-dji-rc",
      "text": "DJI Mini 3 Pro with DJI RC Smart Controller, Drone, Video - 4K60fps , 1080p 120fps, Camera - 48MP  1/1.3’- type CMOS sensor, Gimbal - 3 axis with vertical framing, Storage - microSD, Aperture - F/1.7, Performance - 16 m/s (S-mode), 10 m/s (N-mode), 6 m/s (C-mode), Flight Ceiling - 4000 m, Wind resistance - 10.7 m/s, Remote Controller - DJI RC smart controller, Scope of Delivery - 1x Battery, 1x Drone, Gimbal protector, DJI RC smart controller, Spare propellers, propeller screws & screwdriver, USB-C cable (for charging), Maximum Flight time - 34 minutes, Still image support - DNG / JPEG / RAW, Maximum Ascent speed - 5 m/s, Maximum Descent Speed - 5 m/s, "
  },
  {
      "slug": "valve-console-valve-steam-deck-512gb-oled",
      "text": "Valve Steam Deck OLED 512GB Console, CPU - Zen 2 4c/8t, 2.4-3.5GHz (up to 448 GFlops FP32), GPU - 8 RDNA 2 CUs, 1.6GHz (1.6 TFlops FP32), RAM - 16 GB LPDDR5 on-board RAM (6400 MT/s quad 32-bit channels), Gyro - 6-Axis IMU, Size - 298mm x 117mm x 49mm, Input - PD3.0 Type C power supply, Wi-Fi - Tri-band Wi-Fi 6E, Weight - Approx. 640 grams, Battery - 50Whr battery 3-12 hours of gameplay, Desktop - KDE Plasma, Display - 1280 x 800 HDR OLED, Haptics - HD haptics, Sensors - Light: Dual ambient light sensor ALS, Storage - Steam Deck 512GB NVMe SSD with high-speed microSD card slot, microSD - UHS-I supports SD, SDXC and SDHC, Channels - Stereo with embedded DSP for an immersive listening experience, APU power - 4-15W, Expansion - , Processor - 6nm AMD APU, Microphones - Dual microphone array, Screen Size - 7.4” diagonal, Connectivity - Bluetooth 5.3, Refresh Rate - 90Hz, Operating System - SteamOS 3 (Arch-based), Maximum brightness - 1,000 nits peak brightness (HDR), 600 nits (SDR), Headphone / mic jack - 3.5mm stereo headphone jack, "
  },
  {
      "slug": "soundboks-gen-4-party-bluetooth-speaker",
      "text": "SOUNDBOKS Gen 4, Type - Bluetooth Speaker, Model - Soundboks 4, Output - 126 dB (A), Battery - Up to 40h battery, Frequency - 40-20 KHz, Durability - IP65 water resistant, Connections - 2 × combined microphone / instrument inputs (XLR, 1/4 ”), 1 × 3.5mm stereo input, 1 × 3.5mm stereo output, Connectivity - Bluetooth 5.0, No of Speakers - 2 x 10” 96 dB woofers and 1 x 1” 104 dB compression driver tweeter (CD), Special Features - Experience unparalleled audio clarity, depth, and detail with the Adaptive EQ Technology of the Soundboks Gen 4, whether you're blasting music at a lively outdoor event or enjoying quieter tunes indoors. Bid farewell to manual adjustments and revel in pristine sound quality wherever your adventures take you, courtesy of this innovative feature. Additionally, the Soundboks Gen 4 boasts an integrated LED lighting system that syncs with your music, creating a dynamic visual accompaniment to enhance your listening experience. Control the energy-efficient LED lights via the Soundboks app, allowing you to customize the lighting effects to suit any occasion. With 20% longer battery life, a quick-fit detachable grill, robust construction, and enhanced audio immersion, the Soundboks Gen 4 offers a comprehensive audiovisual solution. Experience wireless control over multiple speakers, enabling you to build a complete stereo system with precise frequency control and selectable modes for optimized bass, power, and indoor settings., "
  },
  {
      "slug": "samsung-galaxy-watch-ultra-lte-2025-47mm",
      "text": "Samsung Galaxy Watch Ultra (2025) LTE Smartwatch, Titanium Case, 47mm, Type - Smartwatch, Features - Designed for tough environments and outdoor use, Powered by Galaxy AI, Integrated Google Gemini on the watch, Dual-GPS for high-precision tracking, SOS and Track Back functions for outdoor safety, Intelligent fitness features and goal tracking, Battery Life - Up to 100h, Connectivity - LTE, Bluetooth® 5.3, WLAN 2,4 GHz & 5 GHz, NFC, Dual-GPS (L1+L5), Compatibility - Android, Build Material - Titanium Case and Marine Band, Music playback - Yes, Water/Dust proof - IP6816, 10 ATM17, MIL-STD-810H18, Activity Tracking - ECG measurement, Blood pressure monitoring, Heart rate monitoring, Blood oxygen (SpO2) measurement, Sleep apnea monitoring, Bioelectrical Impedance Analysis (body composition), Global Positioning - Glonass, Beidou, Galileo, "
  },
  {
      "slug": "apple-ultra-2-gps-cellular-titanium-case-and-ocean-band",
      "text": "Apple Watch Ultra 2 GPS + Cellular, Titanium Case, 49mm, Type - Apple Watch, Features - Powered by new S9 SiP, Double Tap Gesture (answer a call, open a notification, play and pause music and more), LTPO2 OLED Always-On Retina display (Up to 3000 nits), Faster on-device Siri with health data access, Precision Finding for iPhone, Sleep Tracking, Sleep apnea notifications, Fall Detection and Crash detection, Siren, Customizable Action Button, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Blood Oxygen app, ECG app, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Precision dual-frequency GPS, Durable from -20° C to 55° C, Emergency SOS, International Emergency Calling, Strong Battery Performance, Pair Multiple Watches with Family Setup, Battery Life - Up to 36h / 72h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Titanium Case and Ocean Band, Music playback - Yes, Water/Dust proof - Up to 100m / IP6X, Activity Tracking - Blood oxygen, Electrocardiography (ECG), Hours slept, Resting heart rate, Target heart rate, Skin temperature, Running (Stride Length, Ground Contact Time, Vertical Oscillation), Depth/Pressure/Location Tracking for Divers, Multisport Workouts, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "apple-mac-mini-m4-10cpu-16gb-256gb-10gpu",
      "text": "Mac Mini - Apple M4 Chip 16GB Memory 256GB SSD - Integrated 10-core GPU, Model - MU9D3D/A, Memory - 16GB, Storage - 256GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M4, Dimensions - 14.01 x 14.01 x 1.26 cm • 1.16 kg, Operating System - macOS, Keyboard Language - , "
  },
  {
      "slug": "sony-virtual-reality-sony-playstation-vr2",
      "text": "Sony PSVR2 VR Headset, Model - Playstation VR2, Display - OLED display, Tracking - 4 embedded cameras for headset and controller tracking​. IR camera for eye tracking per eye, Controller - Bluetooth® Ver. 5.1​ , USB-C charging, Resolution - 2000x2040 per eye, Audio Input - Built-in microphone, Connections - USB-C, Controllers - 2x controllers, Audio Output - Stereo headphone jack, Refresh rate - 90Hz - 120Hz, Field of View - 110° field of view and foveated rendering, More Features - No games included, Motion sensor - Six-axis motion sensor system (3-axis gyroscope, 3-axis acceleration), Picture Quality - 4K HDR, Connection sensor - IR proximity sensor, Space Requirements - 1m x 1m of clear space, roomscale mode requires 2m x 2m of free space., Supported platforms - PS5, "
  },
  {
      "slug": "dreame-vacuum-cleaner-dreame-l20-ultra",
      "text": "Dreame L20 Ultra Robot Vacuum Cleaner , Filter - HEPA, Control - Controllable via smartphone & voice assistants (Amazon Alexa, Google Assistant), Runtime - 260 min (4.3 hours), Dimensions - 35 x 10.4 x 35 cm / 4.3 kg, Suitable for - Tiles, hardwood floors, laminates, parquet floors, carpets, Special Features - Extendable mops, 4.5 liter fresh water container, 4 liter dirty water container, obstacle detection, wet mopping function, with combination brush for carpets and hard floors, liftable brush and intelligent carpet detection, and an impressive suction power of 7000 Pa, Scope of Delivery - Robot vacuum cleaner, base station, cleaning tool, power cable, 1x main brush, 2x mopping pad, 2x mop holder, 1x side brush, Water tank Volume - 0.08 L, Dust container volume - 0.3 L, "
  },
  {
      "slug": "dji-mini-3-fly-more-combo-dji-rc",
      "text": "DJI Mini 3 Fly More Combo & DJI RC, Drone, Camera - Vertical rotating camera gimbal, 1/1.3\" CMOS sensor, Flight time - 38 minutes x 3 Batteries, Drone Weight - 249g, Video recording - Up to 4K30p, Special features - Includes DJI RC smart controller, Smart recording features, Scope of delivery - DJI Mini 3 with DJI RC Remote (Fly More Combo), RC Remote Controller, 3 x Intelligent Flight Battery, 3 x Propeller Set, 18 x Screw, Screwdriver, Gimbal Protector, USB-C PD Cable, USB-C 3.0 Cable, Shoulder Bag, Obstacle avoidance - Downward, Dimensions (folded) - 148.0 x 90.0 x 62.0 mm, "
  },
  {
      "slug": "optoma-uhd38x-projector",
      "text": "Optoma UHD38x Projector - 4K UHD, Brightness - 4000 ANSI lumens, Connections - 2 x HDMI 2.0, 1 x Audio 3.5mm, 1 x S/PDIF, 1 x USB-A power 1.5A, 1 x RS232, 1 x 12V trigger, Aspect ratio - 16:9, Picture quality - 4K UHD, Projection size - 0.84m - 7.62m, 3D functionality - Full 3D, Special features - True 4K UHD resolution, Lightning fast gaming projector, Full 3D compatible, Screen resolution - 3840 x 2160 pixels, Projection distance - 1.21m - 9.9m, "
  },
  {
      "slug": "roborock-vacuum-cleaner-roborock-s8-pro-ultra",
      "text": "Roborock S8 Pro Ultra Vacuum Cleaner, Battery - 5.2Ah, Li-Ion, Capacity - 0.55l (0.20l wet, 0.35l dry), Features - Automatic dust discharge, washable EPA filter (E11), programmable cleaning times, floor brush, side brush, app control, voice control (Amazon Alexa, Apple HomeKit, Google Assistant), DuoRoller riser brush, VibraRise 2.0 mopping system: 5mm mop lift, Carpet Boost+ system, Reactive 3D obstacle avoidance system, Dimensions - 96 x 350 mm / 14.4 kg, Navigation - Laser sensors, obstacle detection, overcoming obstacles (up to 22mm), virtual walls, Accessories - Suction station, dust filter, wipes, power cord, Noise level - 67dB(A), Charging time - 6h, Cleaning modes - Automatic, carpet, wipe function, Operating time - 180min, Charging system - Automatic, RockDock™ Ultra - Self-washing: automatically washes the robot mop during and after cleaning, Self-drying: with warm air, Self-emptying: no need to change the dust bag for up to 7 weeks, Self-refilling: During cleaning, the RockDock™ Ultra fills the water tank of the vacuum robot , Self-cleaning: cleans the RockDock™ Ultra wash station, simplifying maintenance, Scope of delivery - Robot vacuum cleaner, suction station, dust filter, wipes, power cable, Recommended room size - Max. 300m², "
  },
  {
      "slug": "apple-macbook-pro-14-m4-10cpu-16gb-512gb-10gpu",
      "text": "MacBook Pro 14\" - Apple M4 Chip 16GB Memory 512GB SSD - Integrated 10-core GPU, Model - MW2U3D/A, Memory - 16GB, Display - 14.2 inches (3024 x 1964), Storage - 512GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M4, Dimensions - 22.12 x 31.26 x 1.55 cm • 1.61 kg, Operating System - macOS, Keyboard Language - German, "
  },
  {
      "slug": "apple-macbook-air-13-m4-10cpu-16gb-256gb-8gpu",
      "text": "MacBook Air 13\" - Apple M4 Chip 16GB Memory 256GB SSD Integrated 8-core GPU, Model - MW123D/A, Memory - 16GB, Display - 13.6 inches (2560 x 1664), Storage - 256GB SSD, Graphics - Apple Integrated 8-core GPU, Processor - Apple M4, Dimensions - 30.41 x 21.5 x 1.13 cm • 1.24 kg, Operating System - macOS, Keyboard Language - German, "
  },
  {
      "slug": "apple-tablet-11-ipad-air-2025-wifi-8gb-128gb",
      "text": "Apple 11\" iPad Air (2025) - WIFI - iOS - 128GB, Memory - 8GB, Battery - 28,93 Wh, Display - 11-inch Liquid Retina (2360 x 1640), Storage - 128GB, Processor - Apple M3, Dimensions - 19.2 x 26.1 x 3.3 cm (0.46kg), Rear Camera - 12MP, Connectivity - WIFI, Front Camera - 12MP, Operating System - iOS, "
  },
  {
      "slug": "samsung-smartphone-galaxy-z-fold7-12-gb-512-gb",
      "text": "Samsung Galaxy Z Fold7 Smartphone  - 512 GB - Dual SIM, Memory - 12 GB, Battery - 4400mAh, Display - 8.0(6.5)-inch Foldable Dynamic LTPO AMOLED 2X (1969 x 2184), Storage - 512 GB, Processor - Samsung Snapdragon 8 Elite (3 nm), Dimensions - 14.32 x 15.84 x 0.42 cm (0.215kg), Rear Camera - 200MP + 12MP +10MP, Connectivity - 5G, Front Camera - 10MP, Operating System - Android 16, "
  },
  {
      "slug": "apple-series-10-gps-cellular-aluminium-case-and-sport-band-46mm",
      "text": "Apple Watch Series 10 GPS + Cellular, Aluminium Case, 46mm, Type - Apple Watch, Features - Powered by new S10 SiP, LTPO3 OLED Always-On Retina display (Wide-angle OLED, 40% brighter), Sleep Tracking, Sleep apnea notifications, Double Tap Gesture (answer a call, open a notification, play and pause music and more), Faster on-device Siri with health data access, Precision Finding for iPhone, Crash detection, Fall Detection, Heart arrhythmia, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Pair Multiple Watches with Family Setup, Apple Pay, Listen Music, Podcast, Audiobooks, Band Size - M/L, Battery Life - Up to 18h / 36h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 50m, Activity Tracking - Continuous Heart Rate Tracking, Steps taken, Hours slept, Resting heart rate, Target heart rate, Skin temperature, Multisport workouts; Strength training, HIIT, Pilates, Meditation, Swimming, Running, Yoga, Cycling and Other Sports, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "apple-macbook-pro-14-m4-pro-12cpu-24gb-512gb-16gpu",
      "text": "MacBook Pro 14\" - Apple M4 Pro Chip 24GB Memory 512GB SSD - Integrated 16-core GPU, Model - MX2H3D/A, Memory - 24GB, Display - 14.2 inches (3024 x 1964), Storage - 512GB SSD, Graphics - Apple Integrated 16-core GPU, Processor - Apple M4 Pro, Dimensions - 22.12 x 31.26 x 1.55 cm • 1.61 kg, Operating System - macOS, Keyboard Language - German, "
  },
  {
      "slug": "samsung-tablet-galaxy-tab-s10-fe-wifi-8gb-128gb",
      "text": "Samsung Tablet, Galaxy Tab S10 FE - WIFI - Android - 128GB, Memory - 8GB, Battery - 8000 mAh, Display - 10.9-inch (2304 x 1440), Storage - 128GB, Processor - Samsung Exynos 1580, Dimensions - 16.58 x 25.43 x 0.6 cm (0.5kg), Rear Camera - 13MP, Connectivity - WIFI, Front Camera - 12MP, Operating System - Android, "
  },
  {
      "slug": "samsung-smartphone-galaxy-z-fold7-12-gb-256-gb",
      "text": "Samsung Galaxy Z Fold7 Smartphone  - 256 GB - Dual SIM, Memory - 12 GB, Battery - 4400mAh, Display - 8.0(6.5)-inch Foldable Dynamic LTPO AMOLED 2X (1968 x 2184), Storage - 256 GB, Processor - Samsung Snapdragon 8 Elite (3 nm), Dimensions - 14.32 x 15.84 x 0.42 cm (0.215kg), Rear Camera - 200MP + 12MP +10MP, Connectivity - 5G, Front Camera - 10MP, Operating System - Android 16, "
  },
  {
      "slug": "samsung-tablet-tab-s11-ultra-wi-fi-cellular-12gb-256gb",
      "text": "Samsung Tablet, Galaxy Tab S11 Ultra - 5G - Android - 256GB, Memory - 12GB, Battery - 11600 mAh, Display - 14.6-inch Dynamic AMOLED 2X (2960 x 1848), Storage - 256GB, Processor - MediaTek Dimensity 9400+ Octa-core, Dimensions - 20 x 32 x 5.1 cm (0.69kg), Rear Camera - 13MP, Connectivity - Wi-Fi + Cellular, Front Camera - 12MP, Operating System - Android, "
  },
  {
      "slug": "canon-eos-r6-mark-ii-rf-24-105mm-f4-7-1-is-stm",
      "text": "Canon EOS R6 II Camera Kit with RF 24-105 mm f/4.0-7.1 IS STM Kit Lens, ISO - 100 to 102,400 (Extended 50 to 204,800), HDMI - RAW 6144 x 4032 up to 59.94 fps, Lens - Canon RF 24-105mm F/4-7.1 IS STM, Photo - C-RAW, HEIF, JPEG, Video - H.264/H.265/MPEG-4 4:2:2 10-Bit; UHD 4K (3840 x 2160) at 23.98/25/29.97/50/59.94 fps [60 to 340 Mb/s], Storage - Dual UHS-II SD Card slot, Mount Type - Canon RF, Screen Type - 3\" 1,620,000-Dot Articulating Touchscreen LCD, View Finder - 3,690,000 Dot OLED EVF, Connectivity - 1x Micro-HDMI, 1x 3.5mm TRS input, 1x 3.5mm TRS Output, USB-C interface, 2.4/5GHz Wi-Fi, Bluetooth, Image Sensor - 24.2 Megapixel Full Frame CMOS sensor, Shutter Speed - 1/8000 to 30s, Stabilisation - 5-Axis Sensor-Shift, Max Resolution - 6144 x 4032, Auto-Focus Points - 1053-point Phase Detection / 1053-point Contrast Detection, Scope of delivery - EOS R6 mkii, Canon RF 24-105mm F/4-7.1 IS ST, LP-E6NH battery LC-E6 battery charger, Camera cover, Camera strap, "
  },
  {
      "slug": "apple-smartphone-galaxy-s25-12gb-128-gb-0b9ce761-799b-4c23-8d1e-6dc9c6b4cb62",
      "text": "Samsung Galaxy S25+ Smartphone  - 256 GB - Dual SIM, Memory - 12GB, Battery - 4775 mAh, Display - 6.7-inch Dynamic AMOLED 2X (1440 x 3120), Storage - 256 GB, Processor - Qualcomm Snapdragon Snapdragon 8 Elite for Galaxy (SM8750), Dimensions - 7.58 x 15.84 x 0.73 cm (0.19kg), Rear Camera - 12 MP + 50 MP + 10 MP, Connectivity - 5G, Front Camera - 12 MP, Operating System - Android 15, "
  },
  {
      "slug": "apple-13-ipad-pro-2024-wi-fi-cellular-8gb-256gb",
      "text": "Apple 13\" iPad Pro (2024) - Wi-Fi + Cellular - M4 - 256GB, Memory - 8GB, Battery - 38,99 Wh, Display - 13-inch Ultra Retina XDR display (2752 x 2064), Storage - 256GB, Processor - Apple M4, Dimensions - 22.75 x 29.55 x 3.15 cm (0.96kg), Rear Camera - 12MP, Connectivity - Wi-Fi + Cellular, Front Camera - 12MP, Operating System - iOS, "
  },
  {
      "slug": "roborock-s8-maxv-ultra-robot-cleaner",
      "text": "Roborock S8 MaxV Ultra Robot Cleaner, Dimensions - 409 x 419 x 470 mm / 14,6 kg, Charging time - Approx. 4 hours, Suction power - 10,000 Pa, Dust container - 2.5 l (station), 270 ml (robot), Operation area - Tiles, hardwood floors, laminates, parquet floors, stone floors, carpets, Special features - 10,000Pa suction power, FlexiArm side brush, additional edge wiping system, DuoRoller Riser solid rubber brush, VibraRise 3.0 wiping system, CarpetBoost+ system, real-time video call, 60°C hot water mop wash, 60°C hot air drying, intelligent dirt detection, automatic dosage for cleaning solutions, integrated intelligent voice assistant, Cleaning along the floor direction, Wet mopping function - Yes, Maximum operating time - 180 mins, Maximum volume of the water tank - 4 L (station), 100 ml (robot), System or compatible with system - Amazon Alexa, Apple Siri, Google Home, "
  },
  {
      "slug": "apple-series-10-gps-aluminium-case-and-sport-band-42mm",
      "text": "Apple Watch Series 10 GPS, Aluminium Case, 42mm, Type - Apple Watch, Features - Powered by new S10 SiP, LTPO3 OLED Always-On Retina display (Wide-angle OLED, 40% brighter), Sleep Tracking, Sleep apnea notifications, Double Tap Gesture (answer a call, open a notification, play and pause music and more), Faster on-device Siri with health data access, Precision Finding for iPhone, Crash detection, Fall Detection, Heart arrhythmia, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Pair Multiple Watches with Family Setup, Apple Pay, Listen Music, Podcast, Audiobooks, Band Size - S/M, Battery Life - Up to 18h / 36h inLow Power Mode, Connectivity - GPS, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 50m, Activity Tracking - Continuous Heart Rate Tracking, Steps taken, Hours slept, Resting heart rate, Target heart rate, Skin temperature, Multisport workouts; Strength training, HIIT, Pilates, Meditation, Swimming, Running, Yoga, Cycling and Other Sports, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "gopro-hero-13-black",
      "text": "GoPro HERO 13 Black, GPS - Tracks information about speed, altitude, G-force and more, Video - Up to 5.3K60p / 4K120p, Storage - MicroSD, Photography - 27MP photos, Slow Motion - 13x (720p400fps) for 15 seconds / 12x (900p360fps) for 15 seconds / 4x (5.3K120fps) for 5 seconds, Stabilisation - Hypersmooth, Waterproofing - up to 10 meters, Special features - GPS, ultra-slow-motion, HLG-HDR Video recording, WLAN-6, Scope of delivery - Gopro Hero 13 Black, Enduro Battery, Mounting kit, USB-C cable, "
  },
  {
      "slug": "samsung-smartphone-galaxy-z-flip7-12-gb-512-gb",
      "text": "Samsung Galaxy Z Flip7 Smartphone  - 512 GB - Dual SIM, Memory - 12 GB, Battery - 4300mAh, Display - 6.9(4.1)-inch Foldable Dynamic LTPO AMOLED 2X (1081 x 2520), Storage - 512 GB, Processor - Samsung Exynos 2500 (3 nm), Dimensions - 7.52 x 16.67 x 0.65 cm (0.188kg), Rear Camera - 50MP + 12MP, Connectivity - 5G, Front Camera - 10MP, Operating System - Android 16, "
  },
  {
      "slug": "dyson-airwrap-i-d-multistyler",
      "text": "Dyson Airwrap i.d. Multistyler, Dimensions - 41 x 48 x 272 mm / 0.55 kg, Box contents - DYSON Airwrap id multi-styler, drying attachment, conical airwrap curling attachment, long airwrap curling attachment 40 mm, round volume brush, soft smoothing brush, filter cleaning brush, attachment for quick drying, Maximum power - 1300 watts, Special features - Intelligent multi-styler enabled with a bluetooth which can be connected to the MyDyson app to adjust heat, airflow and time setting at the touch of a button, new conical curling attachment which curls closer to the roots., Temperature levels - 3 temperature levels (max. 90°C) and button for the cold setting (28 °C), "
  },
  {
      "slug": "canon-eos-r6-mark-ii-body",
      "text": "Canon EOS R6 II Mirrorless Camera Body, ISO - 100 to 102,400 (Extended 50 to 204,800), HDMI - RAW 6144 x 4032 up to 59.94 fps, Photo - C-RAW, HEIF, JPEG, Video - H.264/H.265/MPEG-4 4:2:2 10-Bit; UHD 4K (3840 x 2160) at 23.98/25/29.97/50/59.94 fps [60 to 340 Mb/s], Storage - Dual UHS-II SD Card slot, Mount Type - Canon RF, Screen Type - 3\" 1,620,000-Dot Articulating Touchscreen LCD, View Finder - 3,690,000 Dot OLED EVF, Connectivity - 1x Micro-HDMI, 1x 3.5mm TRS input, 1x 3.5mm TRS Output, USB-C interface, 2.4/5GHz Wi-Fi, Bluetooth, Image Sensor - 24.2 Megapixel Full Frame CMOS sensor, Shutter Speed - 1/8000 to 30s, Stabilisation - 5-Axis Sensor-Shift, Max Resolution - 6144 x 4032, Auto-Focus Points - 1053-point Phase Detection / 1053-point Contrast Detection, Scope of delivery - EOS R6 mkii, LP-E6NH battery LC-E6 battery charger, Camera cover, Camera strap, "
  },
  {
      "slug": "hisense-tv-hisense-65e77nq-pro",
      "text": "Hisense 65E77NQ PRO - TV 65\" QLED 4K, HDR - Yes (HDR10 / HDR10+ / HLG / Dolby Vision IQ), USB - 2 x (1x 2.0; 1x 3.0), HDMI - 4x HDMI (2x HDMI 2.1 ALLM, VRR); (1x eARC), Tuner - DVB-T2 / T / C / S2 / S, VIDAA - (Mobile App) (Android / iOS), Game Bar - Yes, Smart TV - VIDAA U7.6, Airplay 2 - Yes, Processor - Quad Core, Anti Glare - Yes, Quantum Dot - Yes, Aspect ratio - 16:9, Refresh rate - 120 Hz (native) / 144Hz (VRR), Game Mode Pro - (ALLM, VRR, 4K@144 Hz, Freesync), Alexa Built-In - Yes, VESA Wall Mount - 400 x 300 mm, Headphone Output - 1x, Sound Technology - Dolby Atmos, Dolby Audio, Display technology - QLED, Ethernet RJ45 Port - 1x, S/PDIF Audio Output - 1x, Composite (AV) Input - 1x, Screen diagonal in cm - 164, Common Interface (CI+) - 1.4 (EPC), Screen diagonal in inches - 65, Screen resolution in pixels - Ultra HD 3840 × 2160, Size with Stand (WxHxD) in cm - 145.1×89.4×30, Size without Stand (WxHxD) in cm - 145.1×83.6×7.5, Weight with / without Stand in kg - 19.2 / 18.6, "
  },
  {
      "slug": "hp-15-fc0079ng-r7-5825u-16gb-512gb-copilot-pc",
      "text": "HP 15-fc0079ng Laptop - AMD Ryzen™ 7 5825U - 16GB - 512GB SSD - AMD AMD Radeon Graphics, Model - BV8D6EA#ABD, Memory - 16GB, Display - 15.6 inches (1920 x 1080 ), Storage - 512GB SSD, Graphics - AMD AMD Radeon Graphics, Processor - AMD Ryzen™ 7 5825U, Dimensions - 35.9 x 23.6 x 1.8 cm • 1.59 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "msi-katana-15-b13vfk",
      "text": "MSI Katana 15 B13VFK Gaming Laptop - Intel® Core™ i7-13620H - 16GB - 512GB SSD - NVIDIA® GeForce® RTX™ 4060, Model - 001585, Memory - 16GB, Display - 15.6 inches (1920 x 1080), 144Hz, Storage - 512GB SSD, Graphics - NVIDIA® GeForce® RTX™ 4060, Processor - Intel® Core™ i7-13620H, Dimensions - 36 x 27.9 x 2.8 cm • 2.6 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "dji-mini-2-se-fly-more-combo",
      "text": "DJI Mini 2 SE Fly More Combo, Drone, GPS - GPS and GLONASS satellite positioning systems, Camera - 12 MP sensor capable of recording 2.7K video at 30 frames per second, Gimbal - 3-axis motorized gimbal for stable and smooth footage, Weight - 249 grams, Flight time - Up to 31 minutes of flight time, Maximum range - Up to 10 kilometers of transmission range, Maximum speed - Up to 57.6 km/h in Sport mode, Obstacle sensing - downward obstacle sensing, Special Features - One-tap takeoff, Auto Return home, QuickShots & Panorama Modes, Remote controller - Dedicated remote controller included with a range of up to 4 kilometers, "
  },
  {
      "slug": "apple-macbook-air-15-m4-10cpu-16gb-256gb-10gpu",
      "text": "MacBook Air 15\" - Apple M4 Chip 16GB Memory 256GB SSD - Integrated 10-core GPU, Model - MW1L3D/A, Memory - 16GB, Display - 15.3 inches (2880 x 1864), Storage - 256GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M4, Dimensions - 34.04 x 23.76 x 1.15 cm • 1.51 kg, Operating System - macOS, Keyboard Language - German, "
  },
  {
      "slug": "apple-smartphone-iphone-15-pro-max-8gb-256gb",
      "text": "Apple iPhone 15 Pro Max - 256GB, Memory - 8GB, Battery - 4852 mAh, Display - 6.7-inch OLED Super Retina XDR (2796 x 1290), Storage - 256GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 17, "
  },
  {
      "slug": "roborock-vacuum-cleaner-roborock-s7-maxv-ultra",
      "text": "Roborock S7 MaxV Ultra Vacuum Cleaner , Control - Controllable via smartphone & voice assistants (Alexa, Google Assistant), Runtime - 3 hours, Dimensions - 35 x 35.3 x 9.7 cm / 4.65 kg, Suitable For - Tiles, hardwood floors, laminates, parquet floors, carpets, stone floors, Suction power - 5100Pa, Wipe function - yes, Special features - Ultrasonic wiping function with room-specific control of the amount of wiping water for up to 200m², laser distance sensors (LDS) & AI dual camera for 360° coverage and obstacle avoidance from 5 x 3.0 cm (W x H), intelligent path planning with real-time room maps & selective individual room planning with virtual vacuum & wipe no-go zones, overcoming obstacles of up to 20 mm (e.g. strips, carpets), movable solid rubber brush for better floor contact, suction station with automatic emptying, refilling of water and automatic cleaning of the wipe, Scope of delivery - Vacuum robot, suction station, dust filter, wipes, power cable, operating instructions, Water tank volume - 0.2 L, Dust container volume - 0.4 L, "
  },
  {
      "slug": "apple-smartphone-iphone-16e-8gb-128gb",
      "text": "Apple iPhone 16e  - 128GB - Dual SIM, Memory - 8GB, Battery - 4005 mAh, Display - 6.1-inch OLED (2532 x 1170), Storage - 128GB, Processor - Apple A18, Dimensions - 7.15 x 14.67 x 0.78 cm (0.167kg), Rear Camera - 48MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 18, "
  },
  {
      "slug": "sony-alpha-7r-v-body",
      "text": "Sony Alpha 7R V Mirrorless Camera Body, ISO - 100 to 32,000 in Manual, Auto Mode (Extended: 50 to 102,400), Photo - 3:2 JPEG / Raw - 60 MP (9504 x 6336), Video - H.265/XAVC HS 4:2:2 10-Bit UHD 4K (3840 x 2160) at 23.98/50/59.94 fps [50 to 200 Mb/s],  8K 24p, 4K 60p, FHD 120p 10-Bit Video, Storage - Dual slot CFexpress Type A / SD (UHS-II), Mount Type - Sony E, Screen Type - 3.2” 2,095,000 Dot 4-axis Tilting Touchscreen LCD, View Finder - 9,437,184 Dot OLED EVF, Connectivity - 1x HDMI output / 2 x 3.5mm TRS Stereo headphone Input + output / USB micro-B / USB Type-C / Bluetooth / Wi-Fi / 1 x PC Sync Socket Output /, Image Sensor - 61 Megapixel Full Frame EXMOR R BSI sensor, Shutter Speed - 1/8000 to 30s, Size & Weight - 131.3 x 96.9 x 82.4 mm / 723g, Stabilisation - 5-Axis Sensor-Shift, Max Resolution - 9504 x 6336, Auto-Focus Points - AI-Based Real-Time Tracking AF System - 693-point Phase Detection, Scope of delivery - Sony a7RV camera, Sony NP-FZ100 battery, Sony BC-QZ1 Battery Charger, Body cap, camera strap, USB-C Cable, "
  },
  {
      "slug": "sony-camera-alpha-7-iii-body-ilce7m3",
      "text": "Sony Alpha 7 III Mirrorless Camera Body, ISO - 50 - 204,800, Video - UHD 4K30p Video, Storage - Dual SD Card slot, USH-II & UHS-I, Mount Type - Sony E, Screen Type - 3\" Tilting 921,600-Dot Touchscreen LCD, View Finder - 2,359,00-Dot OLED EVF, Connectivity - 1x Micro-HDMI output / 1x3.5mm TRS Stereo microphone input, 1x3.5mm TRS headphone output / Type-C interface / Micro-B interface / WiFi / Bluetooth, Image Sensor - 24.2MP Full-Frame CMOS Sensor, Shutter Speed - 30' -  1/8000, Stabilisation - 5-Axis Sensor-Shift, Max Resolution - 6000 x 4000, Auto-Focus Points - 693-Point Phase-Detection AF System, Scope of delivery - Sony A7III, NP FZ100 battery, AC adapter, Micro USB cable, Body cap, Shoulder strap., "
  },
  {
      "slug": "canon-rf-24-70mm-f-2-8-l-is-usm-lens",
      "text": "Canon RF 24-70mm f/2.8 L IS USM Lens, Focus - Autofocus (Nano USM), Mount - Canon RF mount, Length - 125.7mm, Weight - 900g, Aperture - F/2.8 to F/22, 9 blades, Lens type - Full Frame, Filter size - 82mm, Focal length - 24mm to 70mm, Image stabiliser - Yes (up to 5 stops), Scope of delivery - Canon RF 24-70mm F/2.8L IS USM lens, Front & Rear lens cap, Lens Hood (EW-88E), Minimum Focus Distance - 21cm, "
  },
  {
      "slug": "msi-graphics-card-geforce-rtx-5090-32g-ventus-3x-oc",
      "text": "Graphics Card MSI GeForce RTX 5090 32G VENTUS 3X OC, EAN - 4711377301633, GPU - NVIDIA GeForce RTX 5090, Slot - PCIe x16 Version 5.0, Cooling - Fan cooling, Capacity - 32 GB (GDDR7), Dimensions - 1.39 x 6.7 x 3.25 cm and 2.5 kg, Connections - 1x HDMI Version 2.1b, 3x Displayport Version 2.1a, Clock frequency - 2010 MHz, GPU boost clock - 2437 MHz, Operating systems - Windows 11, Windows 10, Manufacturer number - V530-060R, "
  },
  {
      "slug": "google-smartphone-pixel-9a-8gb-128gb",
      "text": "Google Pixel 9a Smartphone - 128GB - Dual SIM, Memory - 8GB, Battery - 5100 mAh, Display - 6.3-inch P-OLED (1080 x 2424), Storage - 128GB, Processor - Google Tensor G4, Dimensions - 7.33 x 15.47 x 0.89 cm (0.186kg), Rear Camera - 48MP + 13MP, Connectivity - 5G, Front Camera - 13MP, Operating System - Android 15, "
  },
  {
      "slug": "apple-series-10-gps-cellular-aluminium-case-and-sport-band-42mm",
      "text": "Apple Watch Series 10 GPS + Cellular, Aluminium Case, 42mm, Type - Apple Watch, Features - Powered by new S10 SiP, LTPO3 OLED Always-On Retina display (Wide-angle OLED, 40% brighter), Sleep Tracking, Sleep apnea notifications, Double Tap Gesture (answer a call, open a notification, play and pause music and more), Faster on-device Siri with health data access, Precision Finding for iPhone, Crash detection, Fall Detection, Heart arrhythmia, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Pair Multiple Watches with Family Setup, Apple Pay, Listen Music, Podcast, Audiobooks, Band Size - S/M, Battery Life - Up to 18h / 36h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 50m, Activity Tracking - Continuous Heart Rate Tracking, Steps taken, Hours slept, Resting heart rate, Target heart rate, Skin temperature, Multisport workouts; Strength training, HIIT, Pilates, Meditation, Swimming, Running, Yoga, Cycling and Other Sports, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "sony-playstation-5",
      "text": "Sony PlayStation 5, GPU - AMD Radeon™ RDNA 2, Ray Tracing Acceleration, variable frequency, up to 2.23 GHz (10.3 TFLOPS), Size - Approx. 390mm x 104mm x 260mm (width x height x depth)(excludes largest projection, excludes Base). 4.5kg, Type - Gaming Console, Model - PlayStation 5, Storage - GDDR6 16GB/448GB/s Bandwidth, Connection - 1x USB Type-A port (Hi-Speed USB), 1x USB Type-A port (Super-Speed USB 10Gbps), 2x USB Type-C port (Super-Speed USB 10Gbps), Video Output - HDMI OUT port, support of 4K 120Hz TVs, 8K TVs, VRR (specified by HDMI ver.2.1), Optical Drive - Ultra HD Blu-ray (66G/100G) ~10xCAVBD-ROM (25G/50G) ~8xCAVBD-R/RE (25G/50G) ~8xCAVDVD ~3.2xCLV, Main processor - x86-64-AMD Ryzen Zen 2, 8 Cores / 16 Threads, variable frequency, up to 3.5 GHz, Other features - 4K & 8K ready, 825GB custom SSD, up to 120fps, External Storage - Support for external USB 3.2 hard drives, Storage capacity - 825GB NVMe SSD, 5.5GB/s Read Bandwidth (Raw), Expandable Storage - internal expandable storage slot (requires a PCIe 4.0 M2 NVMe SSD), Target performance - 4K resolution, Up to 120fps with 120Hz output, 8K support, Additional Information - No games included, "
  },
  {
      "slug": "apple-smartphone-iphone-14-pro-max-6gb-128gb",
      "text": "Apple iPhone 14 Pro Max - 128GB - Dual SIM, Memory - 6GB, Battery - 4323 mAh, Display - 6.7-inch OLED (2796 x 1290), Storage - 128GB, Processor - Apple A16 Bionic, Dimensions - 9.62 x 17.93 x 2.91 cm (0.43kg), Rear Camera - 48MP + 12MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 16, "
  },
  {
      "slug": "msi-graphics-card-msi-geforce-rtx-5090-vanguard-32gb-gddr7",
      "text": "Graphics Card MSI GeForce RTX 5090 Vanguard 32GB GDDR7, EAN - 4711377302500, GPU - NVIDIA GeForce RTX 5090, Memory - 32 GB (GDDR7), Supports - Windows 11, Windows 10, Dimensions - 28.1 x 45.2 x 11.9 cm • 3.4 kg, Modell-Nr. - V530-018R, Connections - DisplayPort (3x), HDMI 2.1b, Memory Interface - 512-bit, Power Connectors - 1x 16-pin (12V-2x6), adapter included for 4x 8-pin PCIe, Boost Clock Speed - 2512 MHz, Maximum Resolution (pixels) - 7680 x 4320, "
  },
  {
      "slug": "canon-eos-r5-mark-ii",
      "text": "Canon EOS R5 Mark II, ISO - 100-102400 (expandable to 50-409600), Mount Type - Canon RF mount, Resolution - Approx. 45 Megapixels, Screen Type - 3.0-inch TFT color liquid-crystal monitor with approx. 2.1 million dots, Connectivity - Wi-Fi, Bluetooth, USB Type-C, HDMI (Type A),, Image Sensor - 36.0 x 24.0 mm back-illuminated stacked CMOS sensor, Camera Format - Digital interchangeable lens mirrorless camera, Shutter Speed - 30 - 1/8000 sec (Mechanical), up to 1/64,000 sec (Electronic), Auto-Focus Points - Max. 1053 zones (Stills), Max. 5850 selectable positions (Stills), Scope of delivery - Canon EOS R5 Mark II body, Battery Pack LP-E6P, Dimensions & Weight - 138.4 x 98.4 x 88.4 mm • 670g, "
  },
  {
      "slug": "samsung-tv-samsung-gq65q7faauxzg",
      "text": "Samsung GQ65Q7FAAUXZG - TV 65\" QLED 4K, HD type - 4K Ultra HD, Processor - Quantum 4K AI, Video apps - Samsung TV Plus, Audio decoders - Dolby Digital, Wi-Fi standards - Wi-Fi 5 (802.11ac), Display diagonal - 165.1 cm (65\"), Bluetooth version - 5.3, Display resolution - 3840 x 2160 pixels, Display technology - QLED, Number of speakers - 2, HDMI ports quantity - 3, Native aspect ratio - 16:9, Native refresh rate - 50 Hz, Audio output channels - 2.0 channels, Weight (without stand) - 16 kg, Dimensions (without stand) - 60.6 x 1452.9 x 834mm, Multiroom audio technology - Samsung Multiroom Link, Operating system installed - Tizen, Backlight dimming technology - Supreme UHD Dimming, Digital signal format system - DVB-C, DVB-S2, DVB-T2, Energy efficiency class (HDR) - G, Motion interpolation technology - Motion Xcelerator, High Dynamic Range (HDR) technology - Filmmaker Mode, High Dynamic Range 10+ (HDR10 Plus), Hybrid Log-Gamma (HLG), Quantum HDR, "
  },
  {
      "slug": "dji-drone-dji-mini-2-fly-more-combo",
      "text": "DJI Mini 2 Fly More Combo Drone, Drone, Zoom - up to 4x, Weight - 249 g, Max. Speed - 16 m/s, Photography - 1 / 2.3 '' CMOS • 12 megapixels • JPEG & RAW, Product Type - Drone and Fly More Kit, Transmission - OcuSync 2.0, Control Modes - Remote Control, Max. Flight Time - 31 min, Video Resolution - 4K: 3840 × 2160 with 24/25/30 fps • 2.7K: 2720 × 1530 with 24/25/30 fps • Full HD: 1920 × 1080 with 24/25/30/48/50/60 fps, Folded Dimensions - 138 × 81 × 58 mm, Scope of Delivery - 1x Mini 2, 1x remote control, 3x intelligent flight battery, 3x replacement propellers (pair), 1x USB-C cable, 1x gimbal protection, 1x RC cable (Micro-USB), 1x RC cable (USB-C), 1x RC -Cable (Lightning), 1x additional control sticks (pair), 18x spare screws, 1x screwdriver, 1x propeller holder, 1x two-way charging station, 1x DJI USB charger 18 W, 1x shoulder bag, Obstacle Detection - No, Transmission Range - 10 km (FCC), Unfolded Dimensions - 159 × 203 × 56 mm • With propellers: 245 × 289 × 56 mm, Intelligent Functions - QuickShots: Dronie, Circles, Helix, Rocket and Boomerang • 4K hyperlapse • Panorama: Spherical, 180° and wide-angle • \"Enhanced Photos\": automatically download enhanced photos directly into the DJI Fly app • File download: QuickTransfer, Shortened Video Clips, "
  },
  {
      "slug": "sony-wh-1000xm6-noise-cancelling-over-ear-bluetooth-headphones",
      "text": "Sony WH-1000 XM6 Noise-cancelling Over-ear Bluetooth Headphones, Type - Over-ear Bluetooth headphones, Codecs - SBC,AAC, LDAC,LC3, Battery - Up to 30h battery, Connections - USB-C, Key features - Foldable design, Adaptive NC Optimizer, Spatial udio upmix, Hi-Res audio compatible, Noise cancelling - ANC, Integrated microphone - Yes, Frequency response, Sound pressure level & Impedance - 4Hz - 40kHz, 48 ohms, 103 dB/mW, "
  },
  {
      "slug": "apple-13-ipad-pro-2024-wi-fi-8gb-256gb",
      "text": "Apple 13\" iPad Pro (2024) - Wi-Fi - M4 - 256GB, Memory - 8GB, Battery - 38,99 Wh, Display - 13-inch Ultra Retina XDR display (2752 x 2064), Storage - 256GB, Processor - Apple M4, Dimensions - 22.75 x 29.55 x 3.15 cm (0.96kg), Rear Camera - 12MP, Connectivity - Wi-Fi, Front Camera - 12MP, Operating System - iOS, "
  },
  {
      "slug": "sony-zv-1-mk-ii-vlog-kamera",
      "text": "Sony ZV-1 Mark II Vlogging Camera, Lens - Equivalent 18-50mm F1.8-4 lens, Sensor - 20.1MP 1\" Exmor RS BSI CMOS Sensor, Display - 3\" Flip-out Touchscreen LCD, Autofocus - Real-time Tracking & Eye AF, Resolution - UHD 4K30P / HLG & S-Log2/3 Gammas, Dimmensions - 10cm x 6cm x 4.6cm / 292g, Special modes - Cinematic Vlogging settings, S&Q, Product Showcase setting, Bokeh Switch, Iso Sensitivity - 125 to 12,800, Metering Method - Artificial Intelligence AE, Scope of delivery - Sony ZV-1 II Digital camera, NP-BX1 battery, Microphone wind-screen, Windscreen adapter, Continuous Shooting - up to 24FPS, Image Stabilization - Digital, "
  },
  {
      "slug": "samsung-tablet-tab-s11-ultra-wifi-12gb-256gb",
      "text": "Samsung Tablet, Galaxy Tab S11 Ultra - WIFI - Android - 256GB, Memory - 12GB, Battery - 11600 mAh, Display - 14.6-inch Dynamic AMOLED 2X (2960 x 1848), Storage - 256GB, Processor - MediaTek Dimensity 9400+ Octa-core, Dimensions - 20 x 32 x 5.1 cm (0.69kg), Rear Camera - 13MP, Connectivity - WIFI, Front Camera - 12MP, Operating System - Android, "
  },
  {
      "slug": "soundboks-go-bluetooth-speaker",
      "text": "SOUNDBOKS Go , Type - Bluetooth Speaker, Model - Go, Power - 2 × 72 W Class D Amplifiers, Battery - Up to 40h battery, Chassis - 1 × 10” woofer, 1 × 1” silk dome tweeter, Frequency - 40Hz - 20kHz, Connections - 1 × 3.5mm stereo input, Connectivity - Bluetooth 5.0, Operating mode - Battery-powered, Special features - Powerful, durable and portable with our swappable battery and sound beyond its size. Connect with other SOUNDBOKS (Gen. 3) speakers in TeamUp mode for an incredible wireless music experience. Connect to the SOUNDBOKS app to access a world of features—plus performance upgrades for new sound settings, controls, security, and more, Scope of delivery - Soundbox Go, Battery Boxes, charger, manual, "
  },
  {
      "slug": "dji-mini-3-pro",
      "text": "DJI Mini 3 Pro with RC-N1 Controller, Drone, Video - 4K60fps , 1080p 120fps, Camera - 48MP  1/1.3’- type CMOS sensor, Gimbal - 3 axis with vertical framing, Storage - microSD, Aperture - F/1.7, Performance - 16 m/s (S-mode), 10 m/s (N-mode), 6 m/s (C-mode), Flight Ceiling - 4000 m, Wind resistance - 10.7 m/s, Remote Controller - DJI RC-N1 controller, Maximum Flight time - 34 minutes, Still image support - DNG / JPEG / RAW, Maximum Ascent speed - 5 m/s, Maximum Descent Speed - 5 m/s, "
  },
  {
      "slug": "dreame-x50-ultra-complete-robot-cleaner",
      "text": "Dreame X50 Ultra Complete Robot Cleaner, Dimensions - Base Station 590 x 457 x 340 mm / 9.09 kg; Robot vacuum 350 x 350 x 111 mm, Accessories - Base station, 1 x main brush (pre-installed), 1x brush guard (pre-installed), 1x anti-scale filter (pre-installed), 1x dustbin (pre-installed with filter), 2x mop pad holders, 2x dust bags, 1x cleaning tool,1x power cable, 1x base station ramp extension, Suction power - 20.000 Pa, Stair detection - Yes, Carpet detection - Yes, Special features - New ProLeap system enabling overcome high dual-layer obstacles upto 6cm, Fully automatic suction station with self-cleaning for long lifespan, ultra-powerful suction system with up to 20,000 Pa, Mop extend technology and versa lift navigation, automatic mop pad cleaning with 80° hot water, Obstacle detection - Yes, Wet mopping function - Yes, Maximum operating time - 200 mins(vaccum)/ 150 mins (vacuum + mop), Pre-programmed cleaning - Yes, Charging time according to the manufacturer - 4.5 hours, "
  },
  {
      "slug": "apple-series-10-gps-aluminium-case-and-sport-band-46mm",
      "text": "Apple Watch Series 10 GPS, Aluminium Case, 46mm, Type - Apple Watch, Features - Powered by new S10 SiP, LTPO3 OLED Always-On Retina display (Wide-angle OLED, 40% brighter), Sleep Tracking, Sleep apnea notifications, Double Tap Gesture (answer a call, open a notification, play and pause music and more), Faster on-device Siri with health data access, Precision Finding for iPhone, Crash detection, Fall Detection, Heart arrhythmia, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Pair Multiple Watches with Family Setup, Apple Pay, Listen Music, Podcast, Audiobooks, Band Size - M/L, Battery Life - Up to 18h / 36h in Low Power Mode, Connectivity - GPS, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 50m, Activity Tracking - Continuous Heart Rate Tracking, Steps taken, Hours slept, Resting heart rate, Target heart rate, Skin temperature, Multisport workouts; Strength training, HIIT, Pilates, Meditation, Swimming, Running, Yoga, Cycling and Other Sports, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "apple-tv-128gb-4k-wifi-ethernet-gen-3",
      "text": "Apple TV 128GB 4K WiFi + Ethernet (Gen. 3), Weight - 214 g, HD type - 4K Ultra HD, Ethernet - Yes, Frame rate - 60 fps, HDMI version - 2.1, Wi-Fi standards - Wi-Fi 6 (802.11ax), Scope of Delivery - Apple TV 4K, Siri Remote, power cord, Supported video modes - 2160p, Remote control included - Yes, Video formats supported - AVC, H.264, HEVC, M4V, MP4, MPEG4, Internal storage capacity - 128 GB, "
  },
  {
      "slug": "apple-smartphone-iphone-15-pro-8gb-128gb",
      "text": "Apple iPhone 15 Pro - 128GB, Memory - 8GB, Battery - 3650 mAh, Display - 6.1-inch OLED Super Retina XDR (1179 x 2556), Storage - 128GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 17, "
  },
  {
      "slug": "garmin-fenix-8-smartwatch-stainless-steel-51mm",
      "text": "Garmin Fēnix® 8 Smartwatch, Stainless Steel, 51mm, Type - GPS-Multisport-Smartwatches, Features - Scratch-resistant Corning® Gorilla® Glass, AMOLED Display, Microphone and Speaker, Sport-Specific Training Plans, Supports Recreational Diving and Freediving Up to 40 Meters, Dynamic Roundtrip Routing for Staying on Track, Easily Share Routes, Workouts, and Locations with Garmin-Compatible Products, Get Slope Information and Cross-Country Ski Trails, Training Readiness Score with recommendations, Track your uphill running progress with Hillscore, Train with Animated workours and Garmin coach, Sleep monitoring with insights into sleep quality and HRV status, Morning report (sleep summary, HRV status along with daily training recommendations), Minimize Jetlag effects with Jetlag advisor, Pay contactless with Garmin Pay™, Emergency assistance and automatic incident notifications during activities, Send message from your smartwatch, Smart Features (receive calls, messages, weather updates, save and play songs from compatible services (Garmin Music, Spotify, Youtube Music, Deezer Amazon Music), View your health and fitness data in one place with Garmin Connect, Communicate without mobile signal with Inreach Compatability share your location, or send SOS alerts via the Iridium satellite network, Band Size - L, Battery Life - Up to 84h in GPS mode / 29 days in Smartwatch mode, Connectivity - GPS, NFC, Bluetooth®, WiFi, Compatibility - Android / iOS, Build Material - Stainless Steel and Silicone Band, Music playback - Yes, Water/Dust proof - Up to 10 ATM / 40 m, Activity Tracking - 80+ Sports/Outdoor apps (Running, Mountain biking, Team sports), Activity vs. inactivity, Altitude changes, Blood oxygen, Heart Rate, Breathing patterns, Cadence, Calories burned, Cycling speed, Distance swam, Distance traveled, Duration of exercise, Heart rate, Laps swam, Pace, Speed, Stairs climbed, Steps taken, Global Positioning - GPS, NFC, GLONASS, "
  },
  {
      "slug": "gopro-hero12-black",
      "text": "Gopro HERO 12 Black, Video - 5312 x 2988 at 60 fps // 1920 x 1080p at 200/240 fps, Sensor - 27 megapixel, Storage - MicroSD (U3/V30 recommended), Photography - RAW 27mp, IP Streaming - H.265 1920x1080p, Waterproofing - Up to 10 meters, Special features - 8x slow-motion video, Scope of delivery - Gopro Hero 12 black, Battery, Adhesive mount, Mounting buckle, Thumbscrew, USB-C cable, Image stabilization - Hypersmooth 6.0, "
  },
  {
      "slug": "samsung-freestyle-2023-projector",
      "text": "Samsung Freestyle 2nd Gen. Projector - Full HD, WiFi - WiFi5, Model - SP-LFF3CLAXXXE, Weight - 0.83 kg, Dimensions - (W x H x D): 102.4 x 172.8 x 95.2 mm (with lens cap)., Contrast Ratio - 100,000:1, HDMI Resolution - 1920x1080i 60, Projection Ratio - 1.2, Special Features - Connect 2 Freestyle Speakers together for Smart EDGE Blending, allowing for 21:9 configuration, Scope of Delivery - Solar Smart Remote, instructions, Power Cable USB-C, Screen Resolution - 1920 x 1080, Full HD, Projection Distance - for 100\" Screen Diagonal - 265.4 cm, Image Diagonal (Max.) - 30\"-160\", "
  },
  {
      "slug": "canon-eos-r50-rf-s-18-45mm-f4-5-6-3-is-stm-camera-kit",
      "text": "Canon EOS R50 Camera Kit with RF-S 18-45mm f/4.5-6.3 IS STM Lens, ISO - 100 - 32,000, Video - Uncropped 4K 30fps, Storage - Single-slot SD card, Auto-Focus - 651-point Phase Detect Dual Pixel CMOS AF II, Mount Type - Canon RF, Viewfinder - 3.69 million dots OLED, Screen Type - 3\" 1.62 Million-dot clear View LCD ii Variable Angle Touchscreen, Connectivity - WLAN, Bluetooth, Fast shooting - Up to 12FPS continuous shooting, Scope of delivery - Canon EOS R50, RF-S 18-45mm, Lens cover, camera cover, Battery LP-E17, Power cable, Dimensions & Weight - 116.3 x 85.5 x 68.8 mm • 375g, "
  },
  {
      "slug": "apple-smartphone-iphone-16-plus-8gb-128gb",
      "text": "Apple iPhone 16 Plus - 128GB - Dual SIM, Memory - 8GB, Battery - 4006 mAh, Display - 6.7-inch OLED Super Retina XDR (2796 x 1290), Storage - 128GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 18, "
  },
  {
      "slug": "apple-smartphone-iphone-14-pro-6gb-128gb",
      "text": "Apple iPhone 14 Pro - 128GB - Dual SIM, Memory - 6GB, Battery - 3200 mAh, Display - 6.1-inch OLED (2556 x 1179), Storage - 128GB, Processor - Apple A16 Bionic, Dimensions - 8.96 x 16.57 x 2.92 cm (0.37kg), Rear Camera - 48MP + 12MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 16, "
  },
  {
      "slug": "sonos-arc-ultra",
      "text": "Sonos Arc Ultra, WiFi - Yes, Bluetooth - Yes, Dimensions - 75 x 1178 x 110.6 mm - 5.9 kg, Connections - HDMI eARC, Lan, Scope of delivery - Sonos arc ultra, power cable, HDMI cable, Speaker components - 15 class-D digital amplifiers, 8 elliptical woofers, 7 dome tweeters, 6 mid-woofers, "
  },
  {
      "slug": "hp-hp-reverb-g2",
      "text": "HP Reverb G2 VR Headset, Audio - Integrated valve audio, Model - HP Reverb G2, Weight - 0.49kg, Sensors - HP Reverb G2 Inside-Out, 6DoF motion tracking, gyroscope, accelerometer and magnetometer, Connections - DisplayPort ™ 1.3, USB 3.0 Type C, power supply, Controllers - 2x motion controllers, Refresh rate - 90Hz, Field of View - 114°, Operating mode - Tethered, PC requirements - Graphics card - NVIDIA GeForce GTX 1080 and above, NVIDIA GeForce RTX 2060 SUPER and above, GeForce RTX 2080 and above, AMD Radeon RX 5700 and above. Processor - Intel Core i5, i7, Intel Xeon E3-1240 v5, equivalent or better. AMD Ryzen 5 equivalent and above. Memory - 8 GB RAM or more, Ports - DisplayPort 1.3, 1x USB 3.0 Type C,, Operating system - Windows 10 May 2019 to Windows 11, not including version 24H2 and newer. New Windows 11 does not support the VR., Supported platforms - Cross-platform, Display type, lens & resolution - Dual 2.89-inch LCD, 4320x2160 (combined), 2160x2160 (per eye), "
  },
  {
      "slug": "samsung-tv-samsung-gq55q7faauxzg",
      "text": "Samsung GQ55Q7FAAUXZG - TV 55\" QLED 4K, HD type - 4K Ultra HD, Processor - Quantum 4K AI, Audio decoders - Dolby Digital, Wi-Fi standards - Wi-Fi 5 (802.11ac), Display diagonal - 139.7 cm (55\"), Bluetooth version - 5.3, Display resolution - 3840 x 2160 pixels, Display technology - QLED, Number of speakers - 2, HDMI ports quantity - 3, Native refresh rate - 50 Hz, Weight (without stand) - 11.3 kg, Dimensions (without stand) - 60.3 x 1234.1 x 710.8mm, Multiroom audio technology - Samsung Multiroom Link, Operating system installed - Tizen, Backlight dimming technology - Supreme UHD Dimming, Digital signal format system - DVB-C, DVB-S2, DVB-T2, Energy efficiency class (HDR) - G, Motion interpolation technology - Motion Xcelerator, High Dynamic Range (HDR) technology - Filmmaker Mode, High Dynamic Range 10+ (HDR10 Plus), Hybrid Log-Gamma (HLG), Quantum HDR, "
  },
  {
      "slug": "apple-smartphone-iphone-14-pro-6gb-256gb",
      "text": "Apple iPhone 14 Pro - 256GB - Dual SIM, Memory - 6GB, Battery - 3200 mAh, Display - 6.1-inch OLED (2556 x 1179), Storage - 256GB, Processor - Apple A16 Bionic, Dimensions - 8.96 x 16.57 x 2.92 cm (0.37kg), Rear Camera - 48MP + 12MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 16, "
  },
  {
      "slug": "apple-apple-watch-series-9-gps-aluminium-case-and-sport-band-45mm",
      "text": "Apple Watch Series 9 GPS, Aluminium Case, 45mm, Type - Smartwatch, Features - Powered by new S9 SiP, New Double Tap Gesture (answer a call, open a notification, play and pause music and more), 2x Brighter Display, Always-On Retina display, Faster on-device Siri with health data access, Precision Finding for iPhone, Crash detection, Fall Detection, Heart arrhythmia, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Pair Multiple Watches with Family Setup, Sleep Stages, Apple Pay, Listen Music, Podcast, Audiobooks, Band Size - M/L, Battery Life - Up to 18h / 36h in Low Power Mode, Connectivity - GPS, Wi-Fi, Bluetooth 5.0, NFC, Compatibility - iOS, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 5ATM, Activity Tracking - Continuous Heart Rate Tracking, Steps taken, Hours slept, Resting heart rate, Target heart rate, Skin temperature, Multisport workouts; Strength training, HIIT, Pilates, Meditation, Swimming, Running, Yoga, Cycling and Other Sports, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "dji-osmo-pocket-3",
      "text": "DJI Osmo Pocket 3, Camera - 20mm f/2 / 1\"-Type CMOS / 9.4MP, Battery - Max runtime 2.6h / charging 0.5h, Display - 2\" Rotating touchscreen LCD, Wireless - 2.4/5GHz Wi-Fi App controlled, Dimensions - 139.7 x 42.2 x 33.5 mm - 179g, Video resolution - Up to 3840 x 2160 @ 120FPS / D-LOG M & 10-bit support, Scope of delivery - Osmo pocket 3, USB-C cable, Protective cover, Wrist strap, Handle with 1/4\"20 thread, "
  },
  {
      "slug": "alpha-6400-kit-16-50-mm",
      "text": "Sony Alpha 6400 Camera Kit with E PZ 16-50 mm f/3.5-5.6 OSS Lens, ISO - 100 - 32000, Megapixels - 24MP, Mount type - Sony E, Connectivity - Wi-Fi, NFC, Bluetooth, Image sensor - APS-C CMOS Sensor, Release date - Feb 2019, Shutter speed - 1/4000 - 30 s, Number of autofocus points - 425, "
  },
  {
      "slug": "delonghi-la-specialista-opera-ec9555-coffee-machine",
      "text": "Delonghi La Specialista Opera EC9555 Coffee Machine, Grinder - Conical grinder with 15 adjustable grinding levels and SensorGRINDING technology, Programs - 5 recipes to pre-select: 5 predefined recipes: Espresso, Coffee, Americano, Cold Brew and Espresso Cool, Dimensions - 380 x 445 x 370 mm / 13.2 kg, Pump pressure - 19 bars, 2 cup function - Yes, Special features - Cold Extraction Technology for cold brew, easy dosing with X1 and X2 buttons, smart tamping station, full stainless steel housing, integrated grinder (15 grind settings), powerful My LatteArt steam nozzle that quickly produces creamy micro foam with a rich, silky texture, 3 coffee temperature settings via dedicated button, advanced thermoblock for faster readiness for use, active temperature control with PID keeps the water temperature constant during brewing, for more precision and consistency in taste, single wall filter: coffee quantity up to 18 g, 5 predefined recipes: espresso, coffee and Americano, cold brew and espresso cool, dedicated hot water spout for tea, pressure indicator for full extraction control, Scope of delivery - Espresso machine, stainless steel milk jug (350 ml), X1 and X2 single and double wall filters, nozzle cleaning needle, tube brush, Water tank capacity - 2 litres, Bean container contents - 250 g, "
  },
  {
      "slug": "gopro-hero-11-black",
      "text": "Gopro HERO 11 Black, Sensor - 27MP CMOS sensor, Weight - 4.5 oz / 127 g, Battery - Rechargeable 1720 mAh Battery pack, Display - 2.27\" Touch screen LCD / front live-view monitor, Storage - Single slot microSD, Dimension - 2.8 x 2 x 1.3\" / 71.8 x 50.8 x 33.6 mm, Recording - 5.3K60/2.7K240 Video, 27MP Photos, Connectivity - 1x USB-C / Headphone jack, Focal length - 24.4mm, Special Features - HyperSmooth 5.0 Image Stabilization, 8x Slow-Motion Video, Scope of Delivery - Gopro Hero 11, Adhesive Mount, Mounting Buckle, THumbscrew, Gopro battery, USB Type-C cable, Carry Case, Weather resistance - 33' Waterproof without Housing, Image Stabilization - Digital, Supported languages - English, French, German, Italian, Japanese, Korean, Portuguese, Simplified Chinese, "
  },
  {
      "slug": "samsung-galaxy-watch-ultra-lte-titanium-case-and-marine-band-47-mm",
      "text": "Samsung Galaxy Watch Ultra LTE Smartwatch, Titanium Case, 47 mm, Type - Smartwatch, Features - Durable design thanks to Titanium casing (Grade 4), Navigate outdoor trails with dual GPS, SOS, and Track Back functions, Long-lasting battery for up to 100h with fast charging capability, Personalized user experience with AI features like energy value, wellness tips, and quick replies, Focus on your goals with intelligent health and fitness functions, Extensive app ecosystem through Google Wear OS, Sporty-modern design, Quickly access important functions with Quick button, Analyzes and assesses your daily energy value based on activity, sleep, and resting heart rate, Advanced sleep analysis, See your body composition with Bioelectrical Impedance Analysis (BIA), Supports 90 different training programs and recognizes key disciplines like running, walking, or cycling, and can start recording automatically, Pursue your fitness goals in a controlled manner with intensity levels based on your personalized heart rate zones, Irregular heart rhythm monitoring to alert you to possible arrhythmias such as atrial fibrillation, Band Size - 20mm, Battery Life - Up to 100 hours, Connectivity - LTE, GPS, NFC, Bluetooth 5.0, WiFi, Compatibility - Android 11.0 or higher with at least 1.5 GB of RAM, Build Material - Titanium Case and Marine Band, Music playback - Yes, Water/Dust proof - Yes, 10 ATM/ IP68 / MIL-STD-810H, Activity Tracking - Heart Rate Monitor, ECG, Continuous Sp02, Blood Pressure, Bioelictrical impedance analysis (Body composition), Global Positioning - GPS, Glonass, Beidou, Galileo, "
  },
  {
      "slug": "apple-smartphone-iphone-14-6gb-128gb",
      "text": "Apple iPhone 14 - 128GB - Dual SIM, Memory - 6GB, Battery - 3279 mAh, Display - 6.1-inch OLED (2532 x 1170), Storage - 128GB, Processor - Apple A15 Bionic, Dimensions - 8.96 x 16.57 x 2.8 cm (0.33kg), Rear Camera - 12MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 16, "
  },
  {
      "slug": "sony-console-playstation-portal-remote-player",
      "text": "Sony PlayStation Portal Remote Player, Type - Remote player, Weight - 540 g, Display - LCD, Platform - PlayStation 5, Multiplayer - Only one PlayStation Portal™ Remote player can be connected to a PS5® console at a time, connections - USB, Requirements - For use with PS5® consoles only, to use PlayStation Portal™, a PS5™ system (sold separately) is required, Cables included - USB, Display diagonal - 20.3 cm (8\"), Storage capacity - 0GB, Scope of delivery - PlayStation Portal™ remote player, USB cable, printed matter, (PLAYSTATION NOT INCLUDED), Screen resolution - 1080p, 60fps, Wi-Fi requirements - Remote player requires broadband Wi-Fi of at least 5 Mbps. For a better gaming experience, a high-speed connection of at least 15 Mbps is recommended, "
  },
  {
      "slug": "nintendo-console-nintendo-switch-oled-model",
      "text": "Nintendo Switch (OLED-Model), GPU - 1GHz Cortex-A57 CPU and 4GB of LPDDR4-1600 RAM, Size - 1.55 kg, Type - Gaming Console, Model - Switch (OLED-Model), Storage - 4GB RAM, 64 GB Storage, Connection - 1x USB Type-C, 1x 3.5 mm jack, LAN connections switch station: 1x HDMI, 1x power supply connection, 3x USB2.0, Battery Life - 4.5 - 9 hours, Video Output - 1x HDMI, Main processor - NVIDIA Tegra, External Storage - Micro-SD, micro-SDHC, micro-SDXC, Storage capacity - 64 GB with slots for expandable storage, Target performance - OLED, 720p, 60Hz, "
  },
  {
      "slug": "sony-headphones-sony-wh-1000xm5-over-ear-bluetooth-headphones",
      "text": "Sony WH-1000 XM5 Noise-cancelling Over-ear Bluetooth headphones, Type - Over-ear Bluetooth headphones, Codecs - AAC, LDAC, sbc, Battery - Up to 30h battery, Connections - USB-C, Key features - Detachable cable, Microphone, Multipoint connection, Voice assistant, Noise cancelling - ANC, Integrated microphone - Yes, Frequency response, Sound pressure level & Impedance - 4Hz - 40kHz, 48 ohms, 102 dB/mW, "
  },
  {
      "slug": "meta-mixed-reality-meta-quest-3-128gb",
      "text": "Meta Quest 3 128 GB VR Headset, DRAM - 8 GB (33% more than Quest 2), Audio - Integrated stereo speakers with 3D spatial audio, enhanced bass, Power - Snapdragon XR2 Gen 2 chipset (double GPU processing power), Wi-Fi - Wi-Fi 6E enabled (region permitting), Weight - 515g, Display - 4K+ Infinite Display (25PPD, 1218 PPI), Privacy - External LED signal for camera usage notification, Storage - 128 GB, Ergonomics - Soft adjustable strap, depth adjustment, Resolution - 2064x2208 pixels per eye (30% better than Quest 2), Charge time - Approximately 2.3 hours with 18 W power adapter, Battery life - Up to 2.4 hours for gaming, Eye Tracking - Not featured, Refresh rate - 90 Hz, 120 Hz, Field of view - 110 degrees horizontal, 96 degrees vertical, pancake lens, Mixed Reality - Two RGB cameras (18 PPD), 10X Quest 2 resolution in Pass-through, depth projection, and room mapping, Lens Adjustment - Inter Pupillary Distance (IPD) ranges from 58 mm-71 mm, Scope of Delivery - Headset, headset insert, 2 x Meta Quest Touch Plus Controllers (AA batteries included), Power supply, Charging cable, Backwards compatibility - PC support with Meta Quest Link cable and Air Link, Officially Supported Controller - Xbox Wireless Controller, Xbox Elite Wireless Controller Series 2, Xbox Adaptive Controller, Sony DualShock 4 Wireless Controller, Nintendo Switch Pro Controller, Meta Quest Touch Plus Controllers - Streamlined, ring-free design, TruTouch variable haptics, mixed-reality pass-through, Direct Touch hand tracking, "
  },
  {
      "slug": "canon-eos-r8-body",
      "text": "Canon EOS R8 Mirrorless Camera Body, ISO - 100 to 25.600 ( expandable to 102,400), Photo - JPEG, C-RAW, HEIF, RAW @ 14-bit, Video - 4K60p / 4:2:2 10-bit, Storage - Single slot SD UHS-II, Mount Type - Canon RF Full Frame, Screen Type - 3” 1 620 000 Dot Articulating Touchscreen, View Finder - 3 360000-dot OLED EVF, Connectivity - Micro HDMI, 2x 3.5mm audio Input & output, USB-C multiport, WLAN, Bluetooth, Image Sensor - 24MP Full Frame CMOS sensor, Shutter Speed - 1/8000 to 30s, Stabilization - Digital, Max Resolution - 6000 x 4000 pixels, Auto-Focus Points - Photo 4897-phase detect points / Video 4067-phase detect points, Scope of delivery - EOS R8, LP-E17 Battery, Camera neck strap, LC-E17E battery charger, Camera cover, Continuous shooting - Up to 40FPS, "
  },
  {
      "slug": "hp-omen-16-16-ap0091ng-r9-8940hx-16gb-1tb-rtx-5060",
      "text": "HP Omen 16 16-ap0091ng Gaming Laptop - AMD Ryzen™ 7 8940HX - 16GB - 1TB SSD - NVIDIA® GeForce® RTX™ 5060, Model - BV8E4EA#ABD, Memory - 16GB, Display - 16 inches (1920 × 1200), 144Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5060, Processor - AMD Ryzen™ 7 8940HX, Dimensions - 35.8 x 26.9 x 2.8 cm • 2.5 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "apple-ultra-2-gps-cellular-titanium-case-and-milanese-band-m",
      "text": "Apple Watch Ultra 2 GPS + Cellular, Titanium Case, 49mm, Type - Apple Watch, Features - Powered by new S9 SiP, Double Tap Gesture (answer a call, open a notification, play and pause music and more), LTPO2 OLED Always-On Retina display (Up to 3000 nits), Faster on-device Siri with health data access, Precision Finding for iPhone, Sleep Tracking, Sleep apnea notifications, Fall Detection and Crash detection, Siren, Customizable Action Button, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Blood Oxygen app, ECG app, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Precision dual-frequency GPS, Durable from -20° C to 55° C, Emergency SOS, International Emergency Calling, Strong Battery Performance, Pair Multiple Watches with Family Setup, Band Size - M, Battery Life - Up to 36h / 72h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Titanium Case and Milanese Band, Music playback - Yes, Water/Dust proof - Up to 100m / IP6X, Activity Tracking - Blood oxygen, Electrocardiography (ECG), Hours slept, Resting heart rate, Target heart rate, Skin temperature, Running (Stride Length, Ground Contact Time, Vertical Oscillation), Depth/Pressure/Location Tracking for Divers, Multisport Workouts, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "samsung-smartphone-s24-ultra-12gb-256gb",
      "text": "Samsung S24 Ultra Smartphone - 256GB - Dual SIM, Memory - 12GB, Battery - 5000 mAh, Display - 6.8-inch Dynamic AMOLED 2X (1440 x 3120), Storage - 256GB, Processor - , Dimensions - , Rear Camera - 200MP+12MP+50MP, Connectivity - 5G, Front Camera - 12MP, Operating System - Android 14, "
  },
  {
      "slug": "apple-mac-mini-m2-8cpu-8gb-256gb-10gpu",
      "text": "Mac Mini - Apple M2 Chip 8GB Memory 256GB SSD Integrated 10-core GPU (Latest Model), Model - MMFJ3D/A, Memory - 8GB, Storage - 256GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M2, Dimensions - 19.7 x 19.7 x 3.58 cm • 1.18 kg, Operating System - macOS, Keyboard Language - , "
  },
  {
      "slug": "apple-ultra-2-gps-cellular-titanium-case-and-trail-loop-m-l",
      "text": "Apple Watch Ultra 2 GPS + Cellular, Titanium Case, 49mm, Type - Apple Watch, Features - Powered by new S9 SiP, Double Tap Gesture (answer a call, open a notification, play and pause music and more), LTPO2 OLED Always-On Retina display (Up to 3000 nits), Faster on-device Siri with health data access, Precision Finding for iPhone, Sleep Tracking, Sleep apnea notifications, Fall Detection and Crash detection, Siren, Customizable Action Button, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Blood Oxygen app, ECG app, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Precision dual-frequency GPS, Durable from -20° C to 55° C, Emergency SOS, International Emergency Calling, Strong Battery Performance, Pair Multiple Watches with Family Setup, Band Size - M/L, Battery Life - Up to 36h / 72h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Titanium Case and Trail Loop, Music playback - Yes, Water/Dust proof - Up to 100m / IP6X, Activity Tracking - Blood oxygen, Electrocardiography (ECG), Hours slept, Resting heart rate, Target heart rate, Skin temperature, Running (Stride Length, Ground Contact Time, Vertical Oscillation), Depth/Pressure/Location Tracking for Divers, Multisport Workouts, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "samsung-smartphone-samsung-s23-ultra-8gb-256gb",
      "text": "Samsung Galaxy S23 Ultra Smartphone - 256GB - Dual SIM, Memory - 8GB, Battery - 5000mAh, Display - 6.8-inch Dynamic AMOLED 2X (1440 x 3088), Storage - 256GB, Processor - Qualcomm® Snapdragon 8 Gen 2, Dimensions - 7.81 x 16.34 x 0.89 cm (0.233kg), Rear Camera - 200MP (Wide) + 12MP (Ultra Wide) + 10MP (Periscope Telephoto) +10MP (Telephoto), Connectivity - 5G, Front Camera - 12MP, Operating System - Android 13, "
  },
  {
      "slug": "apple-smartphone-iphone-15-plus-6gb-128gb",
      "text": "Apple iPhone 15 Plus - 128GB, Memory - 6GB, Battery - 4330 mAh, Display - 6.7-inch OLED Super Retina XDR (2796 x 1290), Storage - 128GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 17, "
  },
  {
      "slug": "apple-tablet-ipad-2022-wi-fi-64gb",
      "text": "Apple iPad (2022) - Wi-Fi - 64GB, Memory - 4GB, Battery - 28.6 Wh, Display - 10.9-inch Liquid Retina IPS (2360 x 1640), Storage - 64GB, Processor - Apple A14 Bionic, Dimensions - 19.08 x 26.13 x 0.53 cm (0.9kg), Rear Camera - 12MP Wide, Connectivity - Wi-Fi, Front Camera - 12MP, Operating System - iPadOS 16, "
  },
  {
      "slug": "apple-11-ipad-pro-2024-wi-fi-8gb-256gb",
      "text": "Apple 11\" iPad Pro (2024) - Wi-Fi - M4 - 256GB, Memory - 8GB, Battery - 31,29 Wh, Display - 11-inch Ultra Retina XDR display (2420 x 1668), Storage - 256GB, Processor - Apple M4, Dimensions - 18.9 x 26.45 x 3.3 cm (0.76kg), Rear Camera - 12MP, Connectivity - Wi-Fi, Front Camera - 12MP, Operating System - iOS, "
  },
  {
      "slug": "hp-omen-16l-tg03-0277ng-r8-8700f-32gb-1tb-rtx-5060-ti-8gb-gddr7",
      "text": "HP OMEN 16L TG03-0277ng Gaming Desktop - AMD Ryzen™ 8 8700F - 32GB - 1TB SSD - NVIDIA® GeForce® RTX™ 5060 Ti, EAN - 199251604263, Model - BU8L4EA#ABD, Memory - 32GB, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5060 Ti (8GB GDDR7), Processor - AMD Ryzen™ 8 8700F, Dimensions - 15.5 x 33.7 x 30.8 cm • 5.61 kg, Operating System - Windows® 11 Home, Keyboard Language - , "
  },
  {
      "slug": "pico-all-in-one-virtual-reality-headset-pico-4-128-gb",
      "text": "Pico 4 128 GB VR Headset, Audio - Dual stereo speakers, Dual microphones, Wi-Fi - Wi-Fi 6, dual-band 2×2 MIMO (2.4GHz/5GHz), Optics - Pancake lenses, 105° FOV, 20.6 PPD, 62–72mm seamless interpupillary distance (IPD) adjustment, Battery - 5300 mAh battery, 20W fast charger, Supports QC 3.0 / PD 3.0, Display - Display: 2.56'' ×2, Storage - GB RAM + 128 GB storage, Tracking - 6DoF Tracking System, Bluetooth - 5.1, Processor - Qualcomm® XR2, 8 cores, 64-bit, 2.84 GHz, 7nm process, Controller - AA battery ×2, In the Box - VR headset ×1, Controller ×2, 1.5V AA alkaline battery ×4, Glasses spacer ×1, Nose pad ×1, Wrist strap ×2, USB-C power adapter ×1, USB-C to USB-C 2.0 cable ×1, Resolution - 4320 × 2160 (2160 × 2160 per eye), 1200 PPI, Refresh rate - 72Hz/90Hz, Operating System (OS) - PICO OS 5.0, "
  },
  {
      "slug": "apple-smartphone-iphone-15-6gb-128gb",
      "text": "Apple iPhone 15 - 128GB, Memory - 6GB, Battery - 3300 mAh, Display - 6.1-inch OLED Super Retina XDR (2556 x 1179), Storage - 128GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 17, "
  },
  {
      "slug": "apple-smartphone-iphone-15-pro-8gb-256gb",
      "text": "Apple iPhone 15 Pro - 256GB, Memory - 8GB, Battery - 3650 mAh, Display - 6.1-inch OLED Super Retina XDR (1179 x 2556), Storage - 256GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 17, "
  },
  {
      "slug": "samsung-tv-samsung-gu43u7079fuxzg",
      "text": "Samsung GU43U7079FUXZG - TV 43\" UHD 4K, "
  },
  {
      "slug": "dyson-ph04-purifier-humidify-cool",
      "text": "Dyson PH04 Purifier Humidify + Cool, Dimensions - 210 x 923 x 155 mm / 8.29 kg, Product type - Air purifier, humidifier and fan, Filter system - HEPA-13 filter and activated carbon filter, Max. room size - 81 m³, App-controllable - Yes, Special features - Complete sealing. Detects and decomposes formaldehyde. Removes gases and ultrafine particles. Kills potentially harmful bacteria. Hygienic humidification for more than 36 hours. distribution mode; breeze mode; Jet Axis™ Control Technology; Voice control; Auto mode; Deep Clean Cycle Number of Airflow Speeds: 1 to 10, Rotary Motion/Angle: Off, 45˚, 90° & Natural Breeze, Sleep Timer Intervals: Off, 30min, 1h, 2h, 4h, 8h; Standby energy consumption (Wifi on/off): 1 W / 0.25 W; Power device fan mode (level 1/10): 6 W / 40 W; Airflow at max setting: 350 l/s; Measured sound level at min./max. Airflow: Ø 36dB / Ø 61 dB; Filter life: 1 year (12 h use/day), Functional levels - 10, scope of delivery - Dyson Purifier Humidify+Cool Formaldehyde, remote control, Water tank capacity - 5 litres, Type of humidification - Evaporator (cold steam), compatible with voice assistant - Amazon Alexa, Apple HomeKit, "
  },
  {
      "slug": "sony-fe-70-200mm-f-2-8-gm-ii",
      "text": "Sony FE 70-200mm F/2.8 GM II, Focus - Autofocus, Mount - Sony E mount, Length - 200mm, Weight - 1045g, Aperture - F/2.8 to F/22,  11 blades, Lens type - Full Frame, Filter size - 77mm, Focal length - 70mm to 200mm, Focus Distance - 40cm, Image stabiliser - Yes, Scope of delivery - Sony FE 70-200mm f/2.8 OSS GM II lens, Front & Rear lens cap, lens Hood, Lens Case, "
  },
  {
      "slug": "hp-omen-max-16-ah0073ng-u7-255hx-32gb-2tb-rtx-5070-ti",
      "text": "HP OMEN MAX 16-ah0073ng Gaming Laptop - Intel® Core™ Ultra 7-255HX - 32GB - 2TB SSD - NVIDIA® GeForce® RTX™ 5070 Ti, EAN - 198990977300, Model - BE6U2EA#ABD, Memory - 32GB, Display - 16 inches (2560 × 1600), 240Hz, Storage - 2TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5070 Ti, Processor - Intel® Core™ Ultra 7-255HX, Dimensions - 35.6 x 2.3 x 26.9 cm • 2.7 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "apple-apple-watch-ultra-2-gps-cellular-titanium-case-and-ocean-band",
      "text": "Apple Watch Ultra 2 GPS + Cellular, Titanium Case, 49mm, Type - Smartwatch, Features - Powered by new S9 SiP, New Double Tap Gesture (answer a call, open a notification, play and pause music and more), Biggest and brightest Apple Watch display, Always-On Retina display, Faster on-device Siri with health data access, Precision Finding for iPhone, Fall Detection and Crash detection, Siren, Customizable Action Button, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Blood Oxygen app, ECG app, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Precision dual-frequency GPS, Durable from -20° C to 55° C, Emergency SOS, International Emergency Calling, Strong Battery Performance, Pair Multiple Watches with Family Setup, Band Size - One Size (130–200mm), Battery Life - Up to 36h / 72h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Titanium Case and Ocean Band, Music playback - Yes, Water/Dust proof - Up to 10 ATM / MIL-STD-810H, Activity Tracking - Blood oxygen, Electrocardiography (ECG), Hours slept, Resting heart rate, Target heart rate, Skin temperature, Running (Stride Length, Ground Contact Time, Vertical Oscillation), Depth/Pressure/Location Tracking for Divers, Multisport Workouts, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "sony-vlog-camera-zv-e10l-inkl-selp1650-aps-c-24mp-lens",
      "text": "Sony ZV-E10 Camera Kit with E PZ 16-50 mm f/3.5-5.6 OSS Lens, Zoom - Digital zoom up to 8x, Video - 4K: 30p, 24p, Full HD: 120p, 60p, 30p, 24p, Sensor - 25 MP • Exmor CMOS • APS-C • ISO 100-6400 (AUTO), ISO 100-32000 (photo), ISO 100-32000 (video), Display - TFT Xtra Fine selfie touch display • Can be swiveled and tilted, Aperture - f / 3.5-5.6, Dimensions - 115.2 mm x 64.2 mm x 44.8 mm / 343 g including battery, 459 g (including battery and lens), Connections - 1x Micro-HDMI, 1x USB Type-C® (charging function / continuous current solution), 1x microphone input (3.5 mm stereo jack), 1x headphone output (35 mm stereo jack) • Bluetooth • WLAN, Focal length - 16-50 mm, Shutter speed - 1/4000 - 30 sec, Integrated flash - No, Special features - Real-time tracking (photo) eye autofocus for humans / animals (in video mode only for humans) • Peaking function • Automatic exposure • Bokeh switch • Product showcase mode • Soft Skin Effect • S-Log2 / S-Log3-Gamma • Image profiles • Marker display time code • Controllable sound recording level • Wind noise reduction • Camera shake protection through intelligent active mode (video) • Directional 3-capsule microphone • Wind protection and microphone input for external microphones • Internal Battery charging via the USB Type-C® connection, Scope of delivery - Camera, SELP1650 lens, rechargeable battery (NP-FW50), shoulder strap, USB-A to USB-C cable (USB 2.0), windshield, windshield adapter, housing cap, power supply unit, power cord, "
  },
  {
      "slug": "soundboks-3-bluetooth-speaker",
      "text": "SOUNDBOKS Gen 3, Type - Bluetooth Speaker, Model - Soundboks 3, Output - 122 dB (A), Battery - Up to 40h battery, Frequency - 40-20000 Hz, Durability - IP65 water resistant, Connections - 2 × combined microphone / instrument inputs (XLR, 1/4 ”), 1 × 3.5mm stereo input, 1 × 3.5mm stereo output, Connectivity - Bluetooth 5.0, No of Speakers - 2 x 10” 96 dB woofers + 1 x 1” 104 dB compression driver tweeter (CD), Special Features - Lightweight, high volume and bass levels, strong battery performance. Good for concerts and festivals, Interchangeable grill and battery, real stereo, Merus Audio eximo® amp circuit, 3 x 72W RMS class D amplifier, Extended bass DSP. Using SKAA technology, the revolutionary SOUNDBOKS (Gen. 3) is changing the game with a wireless SKAA network, which allows up to five SOUNDBOKS (Gen. 3) speakers to connect. You can also connect a SOUNDBOKS (Gen. 1 or 2) to the SOUNDBOKS (Gen. 3) by running an AUX cable from the AUX out of the SOUNDBOKS (Gen. 3) to the AUX Input of your SOUNDBOKS (Gen. 1 or 2)., "
  },
  {
      "slug": "acer-predator-helios-16-ai-oled-u9-275hx-32gb-1tb-rtx-5090",
      "text": "Acer Predator Helios 16 AI OLED Gaming Laptop - Intel® Core™ Ultra 9-275HX - 32GB - 1TB SSD - NVIDIA® GeForce® RTX™ 5090, EAN - 4711474425287, Audio - DTS® X: Ultra Audio, Acer Purified, Acer TrueHarmony, Intel® Bluetooth® LE Audio | compatible with Cortana with Voice, Model - NH.QW0EG.001, Memory - 32GB DDR5 RAM, Webcam - FHD webcam, Battery - Li-ion battery (4 cells / 90 Wh), Display - 16-inch WQXGA OLED (2560 × 1600), 240Hz display with 100% DCI-P3 / Adobe RGB color gamut coverage, Graphics - NVIDIA® GeForce® RTX™ 5090 (24 GB GDDR7 VRAM), Speakers - Two built-in stereo speakers, Processor - Intel® Core™ Ultra 9-275HX, Dimensions - 35.7 x 27.7 x 2.9 cm • 2.7 kg, Microphone - Three built-in microphones, Battery life - Up to 5 hours, Mass storage - 1TB SSD M.2 PCIe Gen5 SSD, Power adapter - 330W power adapter (50% PCR plastic), Operating system - Windows® 11 Home, Special features - FHD webcam, OLED display, aluminum cover, Thunderbolt™ 5, 6th generation Aeroblade 3D cooling, liquid metal, vector heat pipe, Keyboard language - German (QWERTZ), Acer FineTip RGB mini-LED per-key keyboard (100% anti-ghosting), per-key RGB lighting keyboard backlighting, multi-gesture Corning® Gorilla® Glass touchpad, "
  },
  {
      "slug": "huawei-watch-5-smartwatch-stainless-steel-case-46mm",
      "text": "Huawei Watch 5 Smartwatch, Stainless Steel Case, 46mm, Type - Smartwatch, Features - Multi-sensor X-TAP technology for accurate activity and health tracking, High-quality materials for enhanced durability and comfort, eSIM support for independent calling and messaging, NFC functionality for contactless payments, Ultra-long battery life mode for extended usage without frequent charging, Compatible with Android™ and iOS for broad device integration, Auto-adjusting watch face brightness for optimal visibility in all lighting conditions, Gesture-based display control (including swipe, tap, and hold) for intuitive navigation, Battery Life - Up to 11 days, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS / Android, Build Material - Stainless Steel Case and Fluoroelastomer Band, Music playback - Yes, Water/Dust proof - 5 ATM, Activity Tracking - Intelligent heart rate monitoring, ECG, Sleep breathing monitoring, Automatic SpO2 measurement, Skin temperature measurement, TruSleep™, Stress monitoring, Breathing exercises, Cycle calendar, Altimeter, Health clovers, Health overview, Summary of health data, Global Positioning - GPS, Beidou, GLONASS, Galileo, QZSS, "
  },
  {
      "slug": "samsung-odyssey-gaming-monitor-oled-g85sd-34",
      "text": "Samsung - 34\" Samsung Odyssey Gaming Monitor OLED G85SD (34\") LS34DG850SUXEN, Model - LS34DG850SUXEN, Display - QD‑OLED 34 inches (3440 x 1440), 175Hz, Dimensions - 81.36 x 19.28 x 52.23 cm • 7.5 kg, Connectivity - 2x HDMI, 1x DisplayPort, 2x USB-A,USB-Hub 3.0, Wi-Fi, Bluetooth, Response Time - 0.03ms, High Dynamic Range (HDR) - Yes, "
  },
  {
      "slug": "sony-playstation-5-digital-edition",
      "text": "Sony PlayStation 5 Digital Edition, GPU - AMD Radeon™ RDNA 2, Ray Tracing Acceleration, variable frequency, up to 2.23 GHz (10.3 TFLOPS), Size - Approx. 390mm x 92mm x 260mm (W x H x D, excludes largest projection, excludes Base) 3.9Kg, Type - Gaming Console, Model - PlayStation 5 Digital Edition, Storage - GDDR6 16GB/448GB/s Bandwidth, Connection - 1x USB Type-A port (Hi-Speed USB), 1x USB Type-A port (Super-Speed USB 10Gbps), 2x USB Type-C port (Super-Speed USB 10Gbps), Video Output - HDMI OUT port, support of 4K 120Hz TVs, 8K TVs, VRR (specified by HDMI ver.2.1), Main processor - x86-64-AMD Ryzen Zen 2, 8 Cores / 16 Threads, variable frequency, up to 3.5 GHz, Other features - 4K & 8K ready, 825GB custom SSD, up to 120fps, External Storage - Support for external USB 3.2 hard drives, Storage capacity - 825GB NVMe SSD, 5.5GB/s Read Bandwidth (Raw), Scope of Delivery - PlayStation 5 Digital Edition, DualSense wireless controller, stand, HDMI cable, power cord, USB cable, user manual, Expandable Storage - internal expandable storage slot (requires a PCIe 4.0 M2 NVMe SSD), Target performance - 4K resolution, Up to 120fps with 120Hz output, 8K support, Additional Information - No games included, "
  },
  {
      "slug": "canon-eos-r8-rf-24-50mm-f-4-5-6-3-is-stm-camera-kit",
      "text": "Canon EOS R8 Camera Kit with RF 24-50mm f/4.5-6.3 IS STM Lens, ISO - 100 to 25.600 ( expandable to 102,400), Lens - Canon RF 24-50mm F/4.5-6.3 IS STM Lens, Photo - JPEG, C-RAW, HEIF, RAW @ 14-bit, Video - 4K60p / 4:2:2 10-bit, Storage - Single slot SD UHS-II, Mount Type - Canon RF Full Frame, Screen Type - 3” 1 620 000 Dot Articulating Touchscreen, View Finder - 3 360000-dot OLED EVF, Connectivity - Micro HDMI, 2x 3.5mm audio Input & output, USB-C multiport, WLAN, Bluetooth, Image Sensor - 24MP Full Frame CMOS sensor, Shutter Speed - 1/8000 to 30s, Stabilization - Digital, Max Resolution - 6000 x 4000 pixels, Auto-Focus Points - Photo 4897-phase detect points / Video 4067-phase detect points, Scope of delivery - EOS R8, LP-E17 Battery, Camera neck strap, LC-E17E battery charger, Camera & lens cover, Continuous shooting - Up to 40FPS, "
  },
  {
      "slug": "hp-17-cn3075ng-i7-1355u-16gb-512gb",
      "text": "HP 17-cn3075ng Laptop - Intel® Core™ i7-1355U - 16GB - 512GB SSD - Intel® Iris® Xe Graphics, Model - BV8F1EA#ABD, Memory - 16GB, Display - 17.3 inches (1920 x 1080 ), Storage - 512GB SSD, Graphics - Intel® Iris® Xe Graphics, Processor - Intel® Core™ i7-1355U, Dimensions - 40 x 25.7 x 2 cm • 2 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "philips-tv-philips-55oled759-12",
      "text": "Philips 55OLED759/12 - TV 55\" OLED 4K, HD type - 4K Ultra HD, Video apps - Amazon Prime Video, HBO, Netflix, YouTube, Sound modes - AI Sound, Dialog, HDMI version - 2.1, Audio decoders - DTS:X, Dolby Atmos, Dolby Digital, Wi-Fi standards - Wi-Fi 5 (802.11ac), Display diagonal - 139.7 cm (55\"), Bluetooth version - 5.2, Depth (with stand) - 240 mm, Display resolution - 3840 x 2160 pixels, Display technology - OLED, Width (with stand) - 1228 mm, HDMI ports quantity - 4, Height (with stand) - 724 mm, Native aspect ratio - 16:9, Native refresh rate - 120 Hz, Weight (with stand) - 17.5 kg, USB 2.0 ports quantity - 2, Panel mounting interface - 300 x 300 mm, Operating system installed - Titan OS, Digital signal format system - DVB-C, DVB-S, DVB-S2, DVB-T, DVB-T2, DVB-T2 HD, Philips technologies (AV/TV) - 3 Sided Ambilight, Ambilight, High Dynamic Range (HDR) technology - Dolby Vision, High Dynamic Range 10 (HDR10), High Dynamic Range 10+ (HDR10 Plus), High Dynamic Range 10+ Adaptive (HDR10 Plus Adaptive), Hybrid Log-Gamma (HLG), "
  },
  {
      "slug": "siemens-eq700-integral-tq715r03-coffee-machine",
      "text": "Siemens EQ700 Integral TQ715R03 Coffee Machine, Coffee - Caffè crema, cappuccino, cold brew, double espresso, espresso, espresso macchiato, flat white, latte macchiato, lungo, Dimensions - 467 x 352 x 380 mm / 11 kg, milk system - Integrated milk container, Coffee system - Coffee beans, Pump pressure - 19 bar, Special features - automatic switch-off (adjustable), hot water function, integrated water filter, touchscreen, Auto-milk clean, intelligent power control, integrated milk container, descaling program, Power consumption - 1500 W, Water tank capacity - 2.40 L, Capacity bean container - 350 g, "
  },
  {
      "slug": "sonos-beam-gen2",
      "text": "Sonos Beam (Gen2) Soundbar, WiFi - Yes, Delivery - 1x Beam2, 1x HDMI cable (1.5m), 1x HDMI ARC to adapter (optical), Bluetooth - Yes, Components - Soundbar, Connections - HDMI, Lan, Total Power - -, Product type - Soundbar, Special features - Control everything very easily via the Sonos app, your TV remote control, numerous voice assistants, Apple AirPlay 2, the apps of music services and more. 3D sound with Dolby Atmos, Number of channels - -, Signal transmission - Wireless, Wired, "
  },
  {
      "slug": "sonos-soundbar-sonos-arc",
      "text": "Sonos Arc, Control - TV Remote Sync, Google Assistant, Alexa, SonosApp or Apple AirPlay 2, Dimensions - 87 x 1141.7 x 115.7 mm - 6.25 kg, Connections - HDMI eARC, Lan, Speaker components - 11 digital amplifiers, 8 elliptical woofers, 3 dome tweeters, "
  },
  {
      "slug": "apple-apple-watch-series-9-gps-cellular-stainless-steel-case-and-milanese-band-45mm",
      "text": "Apple Watch Series 9 GPS + Cellular, Stainless Steel Case, 45mm, Type - Smartwatch, Features - Powered by new S9 SiP, New Double Tap Gesture (answer a call, open a notification, play and pause music and more), 2x Brighter Display, Always-On Retina display, Faster on-device Siri with health data access, Precision Finding for iPhone, Crash detection, Fall Detection, Heart arrhythmia, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Pair Multiple Watches with Family Setup, Sleep Stages, Apple Pay, Listen Music, Podcast, Audiobooks, Band Size - M/L, Battery Life - Up to 18h / 36h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Stainless Steel Case and Milanese Band, Music playback - Yes, Water/Dust proof - Up to 5ATM, Activity Tracking - Continuous Heart Rate Tracking, Steps taken, Hours slept, Resting heart rate, Target heart rate, Skin temperature, Multisport workouts; Strength training, HIIT, Pilates, Meditation, Swimming, Running, Yoga, Cycling and Other Sports, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "msi-mpg-271qrxde-qd-oled",
      "text": "MSI - 27\" MPG 271QRXDE QD-OLED 9S6-3CD79A-006, Model - 9S6-3CD79A-006, Display - QD OLED 26.5 inches (2560x1440), 360Hz, Dimensions - 61 x 42.2 x 24.2 cm • 8.3 kg, Connectivity - 2x HDMI 2.1 (360Hz@2560x1440), 1x DisplayPort 1.4a (360Hz@2560x1440), 1x USB-C 2.0 with DisplayPort 1.4a (480Mb/​s, PD 90W, 360Hz@2560x1440), 1x USB-B 2.0 (upstream, 480Mb/​s), 2x USB-A 2.0 (downstream, 480Mb/​s), 1x 3.5mm jack (line out), 1x AC-In C13 (power connection), Response Time - 0.03ms, High Dynamic Range (HDR) - Yes, "
  },
  {
      "slug": "acer-graphics-card-acer-nitro-amd-rx9070-xt-oc",
      "text": "Acer NITRO AMD RX 9070 XT OC Graphics Card, Memory - 16GB (GDDR6), Dimensions - 7.5 x 37 x 18 cm • 1.1 kg, Boost Clock Speed - 2570 MHz, "
  },
  {
      "slug": "microsoft-xbox-series-s",
      "text": "Microsoft Xbox Series S, GPU - Custom RDNA 2, 20 CUs at 1.565 GHz 4 TFLOPS, Size - 275 mm × 151 mm × 63.5 mm, Storage - 10 GB GDDR6, 8 GB at 224 GB / s, 2 GB at 56 GB / s, Connections - 1x power connection port, 1x HDMI output, 2x USB ports, and 1x Ethernet port, Optical drive - None, Main Processor - Custom Zen 2 processor with 8 cores at 3.6 GHz (3.4 GHz with SMT), External storage - Support for external USB 3.2 hard drives, Storage Capacity - 512 GB PCIe Gen 4 custom NVME SSD, 2.4 GB / s raw, 4.8 GB / s compressed, Scope of Delivery - Console, Wireless Xbox Controller, High-Speed HDMI Cable, Power Cable, Documentation, Expandable Storage - 1 TB expansion card, Target Performance - 1440p at 60 FPS, up to 120 FPS, "
  },
  {
      "slug": "apple-macbook-air-15-m2-8cpu-8gb-256gb-10gpu",
      "text": "MacBook Air 15\" - Apple M2 Chip 8GB Memory 256GB SSD Integrated 10-core GPU, Model - MQKP3D/A, Memory - 8GB, Display - 15.3 inches (2880 x 1864), Storage - 256GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M2, Dimensions - 34.04 x 9.35 x 1.51 cm • 1.51 kg, Operating System - macOS, Keyboard Language - German, "
  },
  {
      "slug": "philips-tv-55oled760-12",
      "text": "Philips 55OLED760/12 - TV 55\" OLED 4K, HDCP 2.3 - Yes (on all HDMI), TV color - Metal frame, USB ports - 2, HDMI ports - 4, HDR formats - HDR10+ Adaptive, Dolby Vision, HLG, HGIG, Audio codecs - Dolby Digital MS12 V2.6.2, Dolby Atmos, DTS:X, Display type - 4K Ultra HD OLED, Apple AirPlay - Compatible, HDMI features - 4K, eARC on HDMI 2, HDMI-CEC (EasyLink), Auto Game, ALLM, VRR, Micro Dimming - Perfect, Smart TV apps - Disney+, HBO, Netflix, YouTube, Amazon Prime Video, BBC iPlayer, NFT app, Interactive TV - HbbTV, Picture engine - P5 Intelligent Picture Engine with AI, Remote control - With microphone, Operating system - TITAN OS, Panel technology - OLED, Voice assistants - Google Home, Amazon Alexa (built-in), Apple Home, Ambilight version - 3-sided, HDMI 2.1 features - eARC to HDMI 2, Headphone support - Dolby Atmos for headphones, Weight with stand - 17.55 kg, Display resolution - 3,840 x 2,160, Output power (RMS) - 20 W, Motion optimization - Perfect Natural Motion, Native refresh rate - 120 Hz, Digital TV reception - DVB-T/T2/C/S/S2, Included accessories - 2 AAA batteries, Power cable, Quick guide, Safety & legal brochure, Remote control, Stand, Smart home standards - MATTER, Control4, Weight without stand - 17.28 kg, Speaker configuration - 2 x 10 W full-range speakers, Wireless connectivity - WLAN 802.11ac (2x2 dual-band), Bluetooth 5.2, Storage capacity (flash) - 8 GB, Wall mount compatibility - 300 x 300 mm, Screen size diagonally (cm) - 139 cm, Screen size diagonally (inches) - 55 inches, TV dimensions with stand (W x H x D) - 1,228 x 728 x 240 mm, TV dimensions without stand (W x H x D) - 1,228 x 708 x 58 mm, "
  },
  {
      "slug": "philips-tv-philips-65oled760-12",
      "text": "Philips 65OLED760/12 - TV 65\" OLED 4K, HDCP 2.3 - Yes (on all HDMI), TV color - Metal frame, USB ports - 2, HDMI ports - 4, HDR formats - HDR10+ Adaptive, Dolby Vision, HLG, HGIG, Audio codecs - Dolby Digital MS12 V2.6.2, Dolby Atmos, DTS:X, Display type - 4K Ultra HD OLED, Apple AirPlay - Compatible, HDMI features - 4K, eARC on HDMI 2, HDMI-CEC (EasyLink), Auto Game, ALLM, VRR, Micro Dimming - Perfect, Smart TV apps - Disney+, HBO, Netflix, YouTube, Amazon Prime Video, BBC iPlayer, NFT app, Interactive TV - HbbTV, Picture engine - P5 Intelligent Picture Engine with AI, Remote control - With microphone, Operating system - TITAN OS, Panel technology - OLED, Voice assistants - Google Home, Amazon Alexa (built-in), Apple Home, Ambilight version - 3-sided, HDMI 2.1 features - eARC to HDMI 2, Headphone support - Dolby Atmos for headphones, Weight with stand - 23.515 kg, Display resolution - 3,840 x 2,160, Output power (RMS) - 20 W, Motion optimization - Perfect Natural Motion, Native refresh rate - 120 Hz, Digital TV reception - DVB-T/T2/C/S/S2, Included accessories - 2 AAA batteries, Power cable, Quick guide, Safety & legal brochure, Remote control, Stand, Smart home standards - MATTER, Control4, Weight without stand - 23.22 kg, Distance between feet - 793 mm, Speaker configuration - 2 x 10 W full-range speakers, Wireless connectivity - WLAN 802.11ac (2x2 dual-band), Bluetooth 5.2, Storage capacity (flash) - 8 GB, Wall mount compatibility - 300 x 300 mm, Screen size diagonally (cm) - 164 cm, Screen size diagonally (inches) - 65 inches, TV dimensions with stand (W x H x D) - 1,449 x 852 x 248 mm, TV dimensions without stand (W x H x D) - 1,449 x 832 x 58 mm, "
  },
  {
      "slug": "hisense-tv-55e77nq",
      "text": "Hisense 55E77NQ - TV 55\" QLED 4K, Type - QLED Smart TV, Wi-Fi - IEEE 802.11 a/b/g/n/ac-2.4G, 5G, Series - E7N, Contrast - 4000:1, Backlight - DLED, Bluetooth - Yes, Frequency - 60 Hz, HDMI port - HDMI 2.1/eARC, ALLM, VRR (60Hz) x 1, RF Tuners - 2, Brightness - 330 nits, Panel ratio - 16:9, Light sensor - Yes, Viewing angle - 178°, HDR technology - Immersive 4K HDR, HDR10+ decoding, HDR10, HDR, HLG technology - Yes, S/PDIF outputs - 1, Screen sharing - Yes, User interface - VIDAA Smart OS, Content sharing - DMP/DMR, Headphone jacks - 1, Max. resolution - 4K Ultra HD 3840x2160, USB ports (2.0) - 2, Dolby Technology - Dolby Vision, Sound Technology - Dolby Atmos, DTS Virtual X decoding, Airplay 2 support - Yes, Audio inputs (L/R) - 1, Dolby Atmos system - Yes, Sound output level - 2x10 W, Upscaling Ultra HD - Yes, Ethernet RJ45 ports - 1, Panel response time - 8 ms, Screen diagonal (cm) - 139 cm, Composite inputs (AV) - 1, Digital & Analog Tuner - DVB-T2/T/C/S2/S, Quantum Dot Technology - Yes, Input delay in game mode - ≤ 10 ms, Screen diagonal (inches) - 55 in, Standard interface (CI+) - V2.0, Energy efficiency class SDR - E, "
  },
  {
      "slug": "hp-omen-16l-tg03-0279ng-r8-8700f-32gb-1tb-rtx-5060-ti-16gb-gddr7",
      "text": "HP OMEN 16L TG03-0279ng Gaming Desktop - AMD Ryzen™ 8 8700F - 32GB - 1TB SSD - NVIDIA® GeForce® RTX™ 5060 Ti, EAN - 199251604232, Model - BU8L0EA#ABD, Memory - 32GB, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5060 Ti (16GB GDDR7), Processor - AMD Ryzen™ 8 8700F, Dimensions - 15.5 x 33.7 x 30.8 cm • 5.61 kg, Operating System - Windows® 11 Home, Keyboard Language - , "
  },
  {
      "slug": "hp-17-cp3072ng-r7-7730u-16gb-512gb",
      "text": "HP 17-cp3072ng Laptop - AMD Ryzen™ 7 7730U - 16GB - 512GB SSD - AMD AMD Radeon Graphics, Model - BV8F4EA#ABD, Memory - 16GB, Display - 17.3 inches (1920 x 1080 ), Storage - 512GB SSD, Graphics - AMD AMD Radeon Graphics, Processor - AMD Ryzen™ 7 7730U, Dimensions - 40 x 25.7 x 2 cm • 2 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "samsung-tablet-galaxy-tab-s10-ultra-wifi-12gb-256gb",
      "text": "Samsung Tablet, Galaxy Tab S10 Ultra - WIFI - Android - 256GB, Memory - 12GB, Battery - 11,200mAh, Display - 14.6-inch Dynamic AMOLED 2X (2960 x 1848), Storage - 256GB, Processor - MediaTek Dimensity 9300+, Dimensions - 20.8 x 32.6 x 0.54 cm (0.723kg), Rear Camera - 13MP Primary +8MP Ultrawide, Connectivity - WIFI, Front Camera - 12MP + 12MP, Operating System - Android, "
  },
  {
      "slug": "garmin-fenix-8-smartwatch-stainless-steel-47mm",
      "text": "Garmin Fēnix® 8 Smartwatch, Stainless Steel, 47mm, Type - GPS-Multisport-Smartwatches, Features - Scratch-resistant Corning® Gorilla® Glass, AMOLED Display, Microphone and Speaker, Sport-Specific Training Plans, Supports Recreational Diving and Freediving Up to 40 Meters, Dynamic Roundtrip Routing for Staying on Track, Easily Share Routes, Workouts, and Locations with Garmin-Compatible Products, Get Slope Information and Cross-Country Ski Trails, Training Readiness Score with recommendations, Track your uphill running progress with Hillscore, Train with Animated workours and Garmin coach, Sleep monitoring with insights into sleep quality and HRV status, Morning report (sleep summary, HRV status along with daily training recommendations), Minimize Jetlag effects with Jetlag advisor, Pay contactless with Garmin Pay™, Emergency assistance and automatic incident notifications during activities, Send message from your smartwatch, Smart Features (receive calls, messages, weather updates, save and play songs from compatible services (Garmin Music, Spotify, Youtube Music, Deezer Amazon Music), View your health and fitness data in one place with Garmin Connect, Communicate without mobile signal with Inreach Compatability share your location, or send SOS alerts via the Iridium satellite network, Band Size - L, Battery Life - Up to 47h in GPS mode / 16 days in Smartwatch mode, Connectivity - GPS, NFC, Bluetooth®, WiFi, Compatibility - Android / iOS, Build Material - Stainless Steel and Silicone Band, Music playback - Yes, Water/Dust proof - Up to 10 ATM / 40 m, Activity Tracking - 80+ Sports/Outdoor apps (Running, Mountain biking, Team sports), Activity vs. inactivity, Altitude changes, Blood oxygen, Heart Rate, Breathing patterns, Cadence, Calories burned, Cycling speed, Distance swam, Distance traveled, Duration of exercise, Heart rate, Laps swam, Pace, Speed, Stairs climbed, Steps taken, Global Positioning - GPS, NFC, GLONASS, "
  },
  {
      "slug": "apple-tablet-ipad-air-2022-wifi-8gb-64gb",
      "text": "Apple iPad Air (2022) - WiFi - 64GB, Memory - 8GB, Battery - Up to 10h, Display - , Storage - 64GB, Processor - Apple M1, Dimensions - 17.9 x 24.7 x 0.6 cm (0.46kg), Rear Camera - 12MP Wide, Connectivity - WiFi, Front Camera - 12MP Ultra wide, Operating System - iPadOS 15, "
  },
  {
      "slug": "hp-omnibook-5-16-af1055ng-u5-225z-16gb-512gb-copilot-pc",
      "text": "HP OmniBook 5 16-af1055ng Laptop - Intel® Core™ Ultra 5-225U - 16GB - 512GB SSD - Intel® Intel Graphics, Model - BU9T3EA#ABD, Memory - 16GB, Display - 16 inches (1920 × 1200), Storage - 512GB SSD, Graphics - Intel® Intel Graphics, Processor - Intel® Core™ Ultra 5-225U, Dimensions - 35.6 x 15.3 x 24.5 cm • 1.89 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "apple-watch-series-8-gps-aluminium-case-and-sport-band-45mm",
      "text": "Apple Watch Series 8 GPS, Aluminium Case, 45mm, Type - Smartwatch, Features - Apple Pay, Always-On Retina Display, Customize your Watch Face, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Temperature Sensing, Cycle Tracking, Emergency SOS, Fall Detection, Crash Detection, Pair Multiple Watches with Family Setup, Medications App, AFib History, Audio-Guided Walks, Runs, and Meditations, Customize your Workouts, Swim-proof, International Roaming, Wireless Fast Charging, Crack/Dust/Water Resistant, Sleep Stages, Battery Life - Up to 18h, Connectivity - Wi-Fi, Bluetooth 5.0, NFC, Compatibility - iOS, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 5ATM, Activity Tracking - Continuous Heart Rate Tracking, Sleep Tracking, Track 11 Different Workout Types, Swimming (Breaststroke, Backstroke) , Running (Stride Length Tracking), Yoga, Cycling and several other sport and gym profiles, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "sony-zv-1-digital-camera-zv1bdi-eu",
      "text": "Sony ZV-1 Vlog-Camera , Zoom - Optical: 2.7x • Digital: 11x, Video - 4K: 30p, 24p • Full HD: 120p / 60p / 30p / 24p, Sensor - 20.1 Megapixel • ISO125 - 12.800 • Exmor RS CMOS • 1 ”, Display - Xtra Fine selfie touch display • Can be swiveled and tilted, Aperture - f / 1.8-2.8, Dimensions - 10.55 cm x 6 cm x 4.35 cm / 294 g (including battery and memory card), Connections - 1x multi / micro USB, 1x micro HDMI, 1x microphone input (3.5 mm jack) • Bluetooth • WLAN, Focal length - 9.4 - 25.7mm, Shutter speed - 4 - 1 / 32,000 sec, Special features - Eye autofocus for humans and animals (also in video mode for humans) • ZEISS Vario-Sonnar T * lens • Soft Skin Effect • Bokeh button for adjusting the background blur • Super Slow Motion: Max. 1000 images / s in XAVC S format • Double camera shake protection (Optical SteadyShot + ISO) including intelligent active mode (video) / vertical video recording function • S-Log2 / S-Log3-Gamma • Directional 3-capsule microphone • Wind protection and microphone input for external microphones, "
  },
  {
      "slug": "msi-katana-17-b12vgk-rtx-4070-gddr6-8gb-rgb-keyboard-w-mux",
      "text": "MSI Katana 17 Gaming Laptop - Intel® Core™ i7-12650H - 16GB - 512GB SSD - NVIDIA® GeForce® RTX 4070, Model - 0017L5-408, Memory - 16GB, Display - 17.3 inches (1920 x 1080), 144Hz, Storage - 512GB SSD, Graphics - NVIDIA® GeForce® RTX 4070 , Processor - Intel® Core™ i7-12650H, Dimensions - 39.8 x 27.3 x 2.52 cm • 2.6 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "philips-tv-55pus8209-12",
      "text": "Philips 55PUS8209/12 - TV 55\" QLED 4K, HD type - 4K Ultra HD, Ethernet - 1 x RJ45, Ambilight - 3-sided, Bluetooth - Yes, Brightness - 250 nits, Screen size - 55 inches (139 cm), Audio decoders - Dolby Atmos, Dolby Digital, DTS:X, Picture engine - Pixel Precise Ultra HD, Smart features - Works with Amazon Alexa, Google Assistant, Matter, Control4, Wi-Fi standards - Wi-Fi 4 (802.11n), single band, Audio output power - 20 W (2 x 10 W full-range speakers), Display resolution - 3840 x 2160 pixels, Display technology - QLED with Quantum Dot, Sound enhancements - Dolby Bass Enhancement, Clear Dialogue, A.I. Sound, A.I. EQ, Dolby Volume Leveller, Night Mode, Sound Personalisation, HDMI ports quantity - 3 (supports ARC/eARC, HDMI 2.1), Native aspect ratio - 16:9, Native refresh rate - 60 Hz, Weight (with stand) - 10.1 kg, Dimensions (W x H x D) - 1226 x 715 x 88 mm, USB 2.0 ports quantity - 2, Operating system installed - Titan OS, Digital signal format system - DVB-T/T2/T2-HD, DVB-C, DVB-S/S2, VESA panel mounting interface - 200 x 100 mm, High Dynamic Range (HDR) technology - HDR10, HLG, "
  },
  {
      "slug": "msi-mpg-321urxde-qd-oled",
      "text": "MSI - 32\" MPG 321URXDE QD-OLED 9S6-3DD29A-006, Model - 9S6-3DD29A-006, Display - QD OLED 31.5 inches (3840 x 2160), 240Hz, Dimensions - 71.8 x 41.8 x 24.2 cm • 8.3 kg, Connectivity - 2x HDMI 2.1 (240Hz@3840x2160), 1x DisplayPort 1.4a (240Hz@3840x2160), 1x USB-C 2.0 with DisplayPort 1.4a (Upstream, 480Mb/​s, PD 90W, 240Hz@3840x2160), 1x USB-B 2.0 ( Upstream, 480Mb/​s), 2x USB-A 2.0 (downstream, 480Mb/​s), 1x 3.5mm jack (line out), 1x AC-In C13 (power connection), Response Time - 0.03ms, High Dynamic Range (HDR) - Yes, "
  },
  {
      "slug": "sony-sel-100-400mm-f-4-5-5-6-g-master",
      "text": "Sony FE 100-400mm f/4.5-5.6 G-Master, Focus - Autofocus, Mount - Sony FE mount, Weight - 3.1 lb / 1395 g, Lens Type - Full Frame, Dimensions - 3.7 x 8.07\" / 93.9 x 205 mm, Filter size - 77mm, Focal Length - 100 to 400mm, Image Stabilizer - Yes, Scope of Delivery - Sony 100-400 lens, Front and rear cover,  Lens hood, Tripod Mount, Minimum focus distance - 3.2' / 98 cm, "
  },
  {
      "slug": "lg-tv-lg-oled55b59la-aeud",
      "text": "LG OLED55B59LA.AEUD - TV 55\" OLED 4K, Wi-Fi - Yes (Wi-Fi 6 / 802.11ax), CI slot - 1 (except UK and Ireland), AI Sound - α8 AI Sound Pro (Virtual 9.1.2 Up-Mix), USB ports - 2 (USB 2.0), Audio codec - AC4, AC3 (Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, WMA, apt-X (see manual for further information), Dolby Atmos - Yes, HDMI inputs - 4 (supports 4K@120Hz, eARC, VRR, ALLM, QMS on all 4 ports), Performance - 20 watts, AI Upscaling - α8 4K AI Super Upscaling, Display type - 4K OLED, Refresh rate - 100/120 Hz (native), AI Picture Pro - Yes, LAN (Ethernet) - 1, Image processor - α8 Gen2 4K AI Processor, Wide Color Gamut - OLED Color, Bluetooth support - Yes (v5.3), FILMMAKER MODE™ - Yes, Screen resolution - 4K Ultra HD (3,840 x 2,160 pixels), AI genre selection - Yes (SDR/HDR), Dimming technology - Pixel Dimming, Pixel response time - Less than 0.1 ms, Smart Functionality - AI Chatbot, Google Cast, Google Home / Hub, Home Hub, Apple Airplay, Apple Home, Digital TV reception - DVB-T2/T (terrestrial), DVB-C (cable), DVB-S2/S (satellite), Dynamic Tone Mapping - Yes (Dynamic Tone Mapping Pro), AI Brightness Control - Yes, HFR (High Frame Rate) - 4K 120 fps (HDMI), Operating system (OS) - webOS 25, Weight of TV with stand - 14.5 kg, HDR (High Dynamic Range) - Dolby Vision / HDR10 / HLG, G-Sync compatible (Nvidia) - Yes, Weight of TV without stand - 14.3 kg, Antenna connections (tuner) - 2, Compatible with USB webcams - Yes, Packaging dimensions (WxHxD) - 1,360 x 810 x 172 mm, Supported VESA standard (WxH) - 300 x 200 mm, Intelligent speech recognition - Yes, Dolby Vision Gaming (4K@120 Hz) - Yes, HDMI ARC (Audio Return Channel) - eARC (on HDMI 3), Dimensions TV with stand (WxHxD) - 1,228 x 772 x 235 mm, TV dimensions without stand (WxHxD) - 1,228 x 708 x 45.9 mm, Supports VRR (Variable Refresh Rate) - Yes (up to 120 Hz), "
  },
  {
      "slug": "apple-apple-watch-series-9-gps-cellular-aluminium-case-and-sport-band-45mm",
      "text": "Apple Watch Series 9 GPS + Cellular, Aluminium Case, 45mm, Type - Smartwatch, Features - Powered by new S9 SiP, New Double Tap Gesture (answer a call, open a notification, play and pause music and more), 2x Brighter Display, Always-On Retina display, Faster on-device Siri with health data access, Precision Finding for iPhone, Crash detection, Fall Detection, Heart arrhythmia, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Pair Multiple Watches with Family Setup, Sleep Stages, Apple Pay, Listen Music, Podcast, Audiobooks, Band Size - M/L, Battery Life - Up to 18h / 36h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 5ATM, Activity Tracking - Continuous Heart Rate Tracking, Steps taken, Hours slept, Resting heart rate, Target heart rate, Skin temperature, Multisport workouts; Strength training, HIIT, Pilates, Meditation, Swimming, Running, Yoga, Cycling and Other Sports, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "insta360-one-x3",
      "text": "Insta360 X3, Photo - DNG 72 MP, Sensor - 1/2\" 48MP, Weight - 6.3 oz / 180 g, Battery - 1800 mAh Internal Battey (Max 1.4H battery life), Display - 2.29\" Touchscreen LCD, Storage - MicroSD up to 1TB ( U3/V30 or faster recommended), Dimension - 4.5 x 1.8 x 1.3\" / 114 x 46 x 33.1 mm, Recording - 5760 x 2880 at 24, 25, 30 fps / 4096 x 2160 at 30, 60 fps, Connectivity - Wi-Fi 5, USB-C, Special Features - IPX8, 1/4\"-20 Female mounting thread, Waterproof up to 10m, I\tInternal Stitching, Scope of Delivery - Insta360 X3, Battery, USB-Cable, "
  },
  {
      "slug": "sony-zv-1f-vlogging-camera",
      "text": "Sony ZV-1F Vlogging Camera, ISO - 125 to 12,800 in Auto Mode (Extended: 80 to 12,800), Lens - 20mm f/2, Sensor - 20.1 Megapixel 1\"-type (5472 x 3648), Monitor - 3\" 921,600 dot Articulating Touchscreen LCD, Connectivity - 1x Micro HDMI / 1x 3.5mm TRS stereo Input / USB-C Input/Output, Digital Zoom - 4x zoom, Size & Weight - 105.5 x 60.0 x 46.4 mm / 256 g, Video Capture - XAVC UHD 4K (3840 x 2160) at 24.00/25/29.97 fps [60 to 100 MB/s], Scope of delivery - Sony ZV-1F, NP-BX1 Battery, Microphone Windscreen, USB-C cable, Continuous shooting - Up to 16fps, Image stabilization - Digital, "
  },
  {
      "slug": "hp-omnibook-ultra-14-fd0097ng-r-ai-9-hx375-32gb-1tb",
      "text": "HP OmniBook Ultra 14-fd0097ng Laptop - AMD Ryzen™ 9 AI HX 375 - 32GB - 1TB SSD - AMD AMD Radeon 890M, EAN - 0198701610359, Model - AU1K2EA#ABD, Memory - 32GB, Display - 14 inches (2240 x 1400), Storage - 1TB SSD, Graphics - AMD AMD Radeon 890M, Processor - AMD Ryzen™ 9 AI HX 375, Dimensions - 31.5 x 22.7 x 16.4 cm • 1.57 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "samsung-smartphone-s24-ultra-12gb-512gb",
      "text": "Samsung S24 Ultra Smartphone - 512GB - Dual SIM, Memory - 12GB, Battery - 5000 mAh, Display - 6.8-inch Dynamic AMOLED 2X (1440 x 3120), Storage - 512GB, Processor - , Dimensions - , Rear Camera - 200MP+12MP+50MP, Connectivity - 5G, Front Camera - 12MP, Operating System - Android 14, "
  },
  {
      "slug": "nikon-z-24-70mm-f-2-8-s",
      "text": "Nikon Z 24-70mm f/2.8 S, Focus - Autofocus, Mount - Nikon Z mount, Weight - 28.4 oz / 805 g, Aperture - F/2.8 to F/22,  9 blades, Dimensions - 3.5 x 4.96\" / 89 x 126 mm (ø x L), Filter size - 82mm, Lens format - Full Frame, Focal length - 24mm to 70mm, Image stabilizer - No, Scope of delivery - Nikon Z 24-70mm f/2.8 S, Front and rear lens caps, "
  },
  {
      "slug": "optoma-uhd35stx-projctor",
      "text": "Optoma UHD35STx Projector - 4K UHD, Brightness - 3600 ANSI lumens, Resolution - 1920x1080, Connections - 2 x HDMI 2.0, 1 x Audio 3.5mm, 1 x S/PDIF, 1 x USB-A Power 1.5A1 x Audio 3.5mm, 1 x S/PDIF, 1 x USB-A Power 1.5A, 1 x RS232, 1 x 12V trigger, Aspect ratio - 16:9, Remote Control - Illuminated remote control, Picture quality - 4K UHD, Projection size - 0.93m - 7.63m, 3D functionality - Full 3D, Special features - Incredible cinematic experience in True 4K UHD resolution, Projections with the lights on, Supports 1080p 240Hz for smooth gaming, Watt per speaker - 10W, Screen resolution - 3840 x 2160 pixels, Display technology - DLP, Keystone correction - +/-40°, Projection distance - 0.4m - 3.3m, "
  },
  {
      "slug": "apple-tablet-13-ipad-air-2025-wifi-8gb-128gb",
      "text": "Apple 13\" iPad Air (2025) - WIFI - iOS - 128GB, Memory - 8GB, Battery - 36,59 Wh, Display - 13-inch Liquid Retina (2732 x 2048), Storage - 128GB, Processor - Apple M3, Dimensions - 22.7 x 29.5 x 3.3 cm (0.616kg), Rear Camera - 12MP, Connectivity - WIFI, Front Camera - 12MP, Operating System - iOS, "
  },
  {
      "slug": "sonos-era-300-bluetooth-speaker",
      "text": "Sonos ERA 300 , Type - Premium Smart Speaker, Model - Era 300, Woofer - 2 woofers, Tweeter - 4 tweeters, Amplifier - 6 Class D amplifiers, Connectivity - Wi-Fi, Bluetooth5.3, Operating mode - Plug-in, Special Features - Dolby Atmos, AirPlay 2, Voice assistant, touch control, moisture resistant, Scope of delivery - Sonos Era 300, power cable, "
  },
  {
      "slug": "acer-projector-acer-h6542-abdi",
      "text": "Acer H6542 ABDI Projector - Full HD, Brightness - 4000 ANSI lumens, Connections - 2x HDMI with HDCP, 1x VGA, 1x composite video, 1x audio in, 2x USB type A (1x in for wireless adapter, 1x 5V DC out), 1x audio out, 1x RS232, Aspect ratio - 16:9 (native) / 4:3 (supported), Picture quality - Full HD, Projection size - 0.90 - 7.65 m, 3D functionality - No, Special features - Eco mode, Integrated speakers, keystone correction, Scope of Delivery - Power cable, HDMI cable, IR remote control including batteries, lens flap, printed quick start guide, 1x wireless adapter (UWA5), Screen resolution - 1920 x 1080 pixels, Projection distance - 1.00 - 10.00 m, "
  },
  {
      "slug": "apple-laptop-macbook-air-m2-8gb-256gb-ssd-10-core-gpu",
      "text": "MacBook Air 13\" Apple M2 Chip 8GB Memory 256GB SSD Integrated 8-core GPU, Model - MLXW3D/A, Memory - 8GB, Display - 13.6 inches (2560 x 1600), 60Hz, Storage - 256GB SSD, Graphics - Apple 8-core GPU, Processor - Apple M2, Dimensions - 30.41 x 21.24 x 1.56 cm • 1.4 kg, Operating System - MacOS, Keyboard Language - German, "
  },
  {
      "slug": "insta360-x4",
      "text": "INSTA360 X4, Photo - 72MP (11904 x 5952 px) DNG/Jpeg, Video - up to 8K30fps / 5.7K30 / 4K100fps, Sensor - 1/2\" F1.9 (35mm equivalent 6.7mm), Battery - up to 135min run time - charge 80% in 38 min, 100% in 55min, Storage - Micro SD (UHS-I V30 speed class, exFAT format SD cards with a max storage of 1TB are recommended), Waterproof - up to 10m, Photo Modes - Photo, HDR Photo, Interval, Starlapse, Burst, Video Modes - Video, Active HDR, Timelapse, TimeShift, Bullet Time, Loop Recording, Pre-recording, Connectivity - Wi-fi 2.4/GHz & Bluetooth 5.2 / USB-C, ISO & Shutter - 100-6400 ISO / 120s to 1/8000s SHutter, Scope of delivery - Battery, 2x Lens guards, protective pouch, lens cloth, USB-C charging cable, Dimensions (W x H x D) - 46x123.6x37.6mm - 203g, "
  },
  {
      "slug": "sony-35mm-gm-lens-fixed-focal",
      "text": "Sony FE 35mm f/1.4 GM Lens, Lens type - Wide angle, Auto focus - Yes, Sensor type - Full frame, Focal length - 35 mm, Special features - For full format and APS-C E-mount cameras • High light intensity: F1.4 • Two XD linear motors - ideal for photo and video recordings • Dust and moisture-proof • Intuitive aperture ring with optional click mechanism, Bayonet connection - Sony E, Max. light intensity - f1.4, "
  },
  {
      "slug": "sony-fe-lens-200-600-mm-f5-6-6-3",
      "text": "Sony 200-600mm f/5.6-6.3 G OSS Sony FE-Mount, Focus - Autofocus, Mount - Sony FE mount, Weight - 2115g, Aperture - F/5.6 to F/36,  11 blades, Lens type - Full Frame, Dimmensions - 111.5 x 318 mm, Filter size - 95mm, Focal length - 200 to 600mm, Focus Distance - 2.4m, Image stabiliser - Yes, Scope of delivery - Sony FE 200-600mm Lenss, Front & Rear lens cap, lens Hood, Lens Case, Scope of application - Sports, nature, landscape, animals, "
  },
  {
      "slug": "hp-omnibook-7-14-fr0076ng-u7-255h-32gb-1tb-copilot-pc",
      "text": "HP OmniBook 7 14-fr0076ng Laptop - Intel® Core™ Ultra 7-255H - 32GB - 1TB SSD - Intel® Intel Arc Graphics, Model - BN5P6EA#ABD, Memory - 32GB, Display - 14 inches (2560 × 1600), 120Hz, Storage - 1TB SSD, Graphics - Intel® Intel Arc Graphics, Processor - Intel® Core™ Ultra 7-255H, Dimensions - 31.5 x 22.7 x 16.4 cm • 1.57 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "canon-rf-50mm-f-1-4-l-vcm",
      "text": "Canon RF 50mm f/1.4 L VCM, Weight - 580 g, Coating - Air Sphere (ASC) Coating, Focus Type - Autofocus (VCM, Nano USM), Manual Focus (Full-Time Focus Rings), Lens Mount - Canon RF, Focal Length - 50 mm, Angle of View - 46°, Optical Design - 14 Elements in 11 Groups (includes Two Aspherical Elements, One UD Element), Weather Sealing - Yes, Diaphragm Blades - 11 (Rounded), Maximum Aperture - f/1.4, Minimum Aperture - f/16, Dimensions (ø x L) - 76.2 mm x 99.1 mm, Filter Size (Front) - 67 mm, Image Stabilization - No, Lens Format Coverage - Full-Frame, Maximum Magnification - 0.15x, Minimum Focus Distance - 39.9 cm, "
  },
  {
      "slug": "acer-projector-acer-h6815bd",
      "text": "Acer H6815BD Projector - 4K UHD, HDR - HDR10 compatible, Weight - 2.88 kg, 3D Blu-rays - Yes, Connections - 2x HDMI with HDCP, 1x USB type A DC Out 5V, 1x audio out, 1x RS232, Power source - AC, Product type - Standard throw projector, Refresh Rate - 240Hz, Picture quality - 4K UHD, 3D functionality - 3D Ready, Special Features - Sports Mode, Responsive controls and extremely low latency when playing games, Image shift, 4-corner correction, HDMI ports quantity - 2, Projection distance - 1 - 10 m, Projector brightness - 4000 ANSI lumens, Projection technology - DLP, Supported aspect ratios - 4:3, 16:9, Projector native resolution - 2160p (3840x2160), Keystone correction, vertical - -40 - 40°, Keystone correction, horizontal - -40 - 40°, "
  },
  {
      "slug": "google-smartphone-pixel-10-12gb-128gb",
      "text": "Google Pixel 10 Smartphone - 128GB - Dual SIM, Memory - 12GB, Battery - 4970 mAh, Display - 6.3-inch OLED (1080 x 2424), Storage - 128GB, Processor - Google Tensor G5, Dimensions - 7.2 x 15.28 x 0.86 cm (0.204kg), Rear Camera - 48MP+13MP+10.8MP, Connectivity - 5G, Front Camera - 10.5MP, Operating System - Android 16, "
  },
  {
      "slug": "dyson-am09-hot-cool-fan-heater",
      "text": "Dyson AM09 Hot + Cool (Fan + Heater), Dimensions - 595 x 113 x 153 mm / 3 kg, Type of product - Fan + Heater, Number of speeds - 10, Special features - The Dyson Hot+Cool™ fan heater provides both effective heating and a cooling airflow throughout the year. It offers a Diffusion mode for even room heating, eliminating cold spots, and a Focus mode for powerful airflow. Additionally, its bladeless design ensures both safety and ease of cleaning. A curved, magnetic remote control is included for convenient operation., "
  },
  {
      "slug": "acer-h5386bdki",
      "text": "Acer H5386BDKi Projector - HD, Brightness - 5000 ANSI lumens, (Standard), 4000 (ECO), Connections - 1x HDMI with HDCP, 1x VGA analog D-Sub, 1x Composite Video RCA, 1x audio in jack (3.5mm), 2x USB Type A (1x in for wireless adapter, 1x 5V DC out), 1x audio out jack (3.5mm ), 1x RS232, Aspect ratio - 16:9, Picture quality - HD, Projection size - 0.75 - 7.62 m, 3D functionality - 3D ready, Special features - 3D ready, 1x 1:1 factor optical zoom, ceiling mounting possible, Screen resolution - 1280x720px, Projection distance - 1.00 - 10.00 m, "
  },
  {
      "slug": "apple-watch-ultra-gps-cellular-titanium-case-and-green-alpine-loop-49mm-l",
      "text": "Apple Watch Ultra GPS + Cellular, Titanium Case, 49mm, Type - Smartwatch, Features - Apple Pay, Always-On Retina Display, Big and Bright Display, Customizable New Action Button, 86-decibel Siren, Durable from -20° C to 55° C, Dual-frequency GPS, Wayfinder Watch Face, Temperature Sensing, Sleep Tracking, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Crash Detection, Fall Detection, Emergency SOS, Stay Connected with Cellular, International Emergency Calling, Blood Oxygen App, ECG App, Pair Multiple Watches with Family Setup, Pro Running Features, Strong Battery Performance, Oceanic+ App for Scuba Divers, Band Size - L (165–210mm), Case Size - 49mm, Battery Life - Up to 36h, Connectivity - GPS, Wi-Fi, Bluetooth 5.0, NFC, Compatibility - iOS, Build Material - Titanium Case and Alpine Loop, Music playback - Yes, Water/Dust proof - Up to 10 ATM / MIL-STD-810H, Activity Tracking - Heart Rate, Running (Stride Length, Ground Contact Time, Vertical Oscillation), Blood Oxygen Tracking, Depth/Pressure/Location Tracking for Divers, Multisport Workouts, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "xgimi-elfin-projector",
      "text": "XGIMI Elfin Projector - Full HD, Brightness - 800 ANSI lumens, Connections - Input: 1x DC, 1x HDMI 2.0, 1x USB 2.0. Output: 1x 3.5mm headphone. WiFi: Dual-band 2.4/5GHz, 802.11a/b/g/b/ac. Bluetooth: Bluetooth 5.0/BLE, Aspect ratio - 16:9, Picture quality - Full HD, compatible resolution 2K/4K, Projection size - < 200 inches, 3D functionality - Full 3D, Special features - Android TV 10.0, Chromecast, Google Assistant, Game Mode, WiFi, Bluetooth 5.0, HDR10+, Dolby Audio, 2x 3W Harman Kardon internal speakers, Intelligence auto-focus, screen alignment, obstacle avoidance, and keystone correction., Screen resolution - 1920 x 1080 pixels, Projection distance - aspect ratio 1.2:1, "
  },
  {
      "slug": "xgimi-mogo-2-pro-projector",
      "text": "Xgimi MoGo 2 Pro Projector, Lamp - LED, Smart TV - Android TV 11.0, Bluetooth - 5.0, Brightness - 400 cd/m², Dimensions - 161 x 119 x 108 mm, Fan output - Rear, WiFi ready - Yes, Connections - USB Type-C, USB Type-A, HDMI 2.0, AUX 3.5mm, Screen Size - 40” - 200”, Power speakers - 2 x 8W, Control buttons - On/Off button, Picture quality - Full HD, Projection size - Up to 200 inches, Screen Mirroring - Chromecast built-in, Special features - ISA 2.0 uninterrupted autofocus, HDR10, 2 x 8W speakers, Screen resolution - 1920×1080 pixels, Colour reproduction - 90%, Integrated speakers - Yes, Projection distance - Variable, Projection technology - LED, Supported resolutions - Full HD (1920 x 1080 pixels), Wireless internet access - Yes, Vertical keystone correction - Yes, Horizontal keystone correction - Yes, "
  },
  {
      "slug": "apple-tablet-13-ipad-air-2025-wi-fi-cellular-8gb-128gb",
      "text": "Apple 13\" iPad Air (2025) - Wi-Fi + Cellular - iOS - 128GB, Memory - 8GB, Battery - 36,59 Wh, Display - 13-inch Liquid Retina (2732 x 2048), Storage - 128GB, Processor - Apple M3, Dimensions - 22.7 x 29.5 x 3.3 cm (0.617kg), Rear Camera - 12MP, Connectivity - Wi-Fi + Cellular, Front Camera - 12MP, Operating System - iOS, "
  },
  {
      "slug": "acer-nitro-50-n50-656-i7-14700f-16gb-1tb-rtx4060",
      "text": "Acer Nitro 50 (N50-656) Gaming Desktop | Gaming PC - Intel® Core™ i7-14700F - 16GB - 512GB - NVIDIA® GeForce® RTX 4060, EAN - 4711121885068, Model - DG.E3UEG.003, Memory - 16 GB DDR5 RAM (2 x 8 GB), up to 32 GB Dual-Channel DDR5 5600 MHz, Storage - 512GB PCIe SSD, Graphics - NVIDIA® GeForce® RTX 4060, Processor - Intel® Core™ i7-14700F, Dimensions - 17.5 x 38.6 x 39.2 cm • 9.3 kg, Operating System - Windows® 11 Home, "
  },
  {
      "slug": "optoma-uhd35x-projector",
      "text": "Optoma UHD35x Projector - 4K UHD, Brightness - 3600 ANSI lumens, Connections - 2 x HDMI 2.0, Outputs 1 x Audio 3.5mm, 1 x S/PDIF, 1 x USB-A Power 1.5A, Aspect ratio - 16:9, Picture quality - 4K UHD, Projection size - 0.84m ~ 7.62m, 3D functionality - 3D ready, Special features - 4.2ms input lag, 4K cinema-quality images and 240Hz refresh rate for smooth gameplay., Screen resolution - 3840 x 2160 pixels, Projection distance - 1.21m - 9.9m, "
  },
  {
      "slug": "acer-nitro-v17-ai-anv17-41-r8pp-r7-260-32gb-1tb-rtx-5060",
      "text": "Acer Nitro V17 AI ANV17-41-R8PP Gaming Laptop - AMD Ryzen™ 7 260 - 32GB - 1TB SSD - NVIDIA® GeForce® RTX™ 5060, EAN - 4711474552105, Model - NH.QYUEG.002, Memory - 32GB, Display - 17.3 inches (2560 x 1440), 165Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5060, Processor - AMD Ryzen™ 7 260, Dimensions - 52.8 x 31.6 x 7 cm • 4 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "apple-smartphone-iphone-13-pro-6gb-256gb",
      "text": "Apple iPhone 13 Pro - 256GB - Dual Sim, Sim - Dual SIM (Nano Sim + eSim), Memory - 6GB, Battery - 3125 mAh, Display - 6.1-inch Super Retina XDR display with ProMotion (2532 x 1170), Storage - 256GB, Processor - Apple A15 Bionic, Dimensions - 7.15 x 14.67 x 0.765 cm (0.204kg), Rear Camera - 12mp + 12mp + 12mp, Connectivity - 5G, Front Camera - 12mp, Operating System - iOS 15, "
  },
  {
      "slug": "hp-omnibook-x-flip-16-as0054ng-u5-226v-16gb-512gb-copilot-pc",
      "text": "HP OmniBook X Flip 16-as0054ng Laptop - Intel® Core™ Ultra 5-226V - 16GB - 512GB SSD - Intel® Intel Arc Graphics, Model - BV0D7EA#ABD, Memory - 16GB, Display - 16 inches (2880 x 1800), Storage - 512GB SSD, Graphics - Intel® Intel Arc Graphics, Processor - Intel® Core™ Ultra 5-226V, Dimensions - 35.6 x 15.3 x 24.5 cm • 1.89 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "acer-h6816abd-projector",
      "text": "Acer H6816ABD Projector - 4K UHD, Brightness - 4000 ANSI lumens, Connections - 2x HDMI with HDCP, 1x VGA analog D-sub, 1x Audio out Klinke (3,5 mm), 1 x USB type A (DC out 5V), 1x Audio in Klinke (3,5 mm), 1x SPDIF Audio out, Aspect ratio - 16:9, Picture quality - 4K UHD, Projection size -  0.75 - 7.62 m, 3D functionality - 3D ready, Special features - 4K UHD resolution, Bluetooth audio, HDR, SmartTV, Wall Color Compensation, Acer Football Mode, Auto Shutdown, Screen resolution - 3840 × 2160 pixels, Projection distance - 1.00 - 10.00 m, "
  },
  {
      "slug": "jbl-partybox-710-party-bluetooth-speaker",
      "text": "JBL PartyBox 710 Party Speaker, Type - Party Bluetooth Speaker, Model - PartyBox 710, Power - 800W RMS, Battery - Plug-in, Chassis - 2 x 8-inch woofers, 2 x 2.75-inch tweeters, Frequency - 35 Hz - 20 kHz (-6dB), Durability - IPX4 water rating, Connections - 1x Aux-In: (3.5 mm jack), 1x Mic-In, 1x Guitar-In, 1x USB, Connectivity - Bluetooth, Operating mode - Plug-in, Special features - JBL PartyBox 710, the ultimate companion for your gatherings, events, and parties. Engineered to bring your music to life , this party speaker is designed to elevate your entertainment experience to the next level with dynamic & colourful customizable light show poweered by the powerful JBL Original Pro sound with extra deep bass, "
  },
  {
      "slug": "apple-ultra-2-gps-cellular-titanium-case-and-milanese-band-l",
      "text": "Apple Watch Ultra 2 GPS + Cellular, Titanium Case, 49mm, Type - Apple Watch, Features - Powered by new S9 SiP, Double Tap Gesture (answer a call, open a notification, play and pause music and more), LTPO2 OLED Always-On Retina display (Up to 3000 nits), Faster on-device Siri with health data access, Precision Finding for iPhone, Sleep Tracking, Sleep apnea notifications, Fall Detection and Crash detection, Siren, Customizable Action Button, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Blood Oxygen app, ECG app, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Precision dual-frequency GPS, Durable from -20° C to 55° C, Emergency SOS, International Emergency Calling, Strong Battery Performance, Pair Multiple Watches with Family Setup, Band Size - L, Battery Life - Up to 36h / 72h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Titanium Case and Milanese Band, Music playback - Yes, Water/Dust proof - Up to 100m / IP6X, Activity Tracking - Blood oxygen, Electrocardiography (ECG), Hours slept, Resting heart rate, Target heart rate, Skin temperature, Running (Stride Length, Ground Contact Time, Vertical Oscillation), Depth/Pressure/Location Tracking for Divers, Multisport Workouts, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "lg-tv-lg-65ua75006la-aeud",
      "text": "LG 65UA75006LA.AEUD - TV 65\" 4K, Wi-Fi - Yes (Wi-Fi 5 / 802.11ac), CI slot - 1 (except UK and Ireland), AI Sound - α7 AI Sound Pro (Virtual 9.1.2 Up-Mix), HDMI ARC - eARC (on HDMI 2), USB ports - 1 (USB 2.0), HDMI inputs - 3 (supports eARC, ALLM), HDR support - HDR10 / HLG, AI Upscaling - 4K Super Upscaling, Display type - 4K UHD, HGIG support - Yes, Backlight type - Direct LED, Game Optimizer - Yes (Game Dashboard), LAN (Ethernet) - 1 port, Speaker system - 2.0 channel, downward radiating, Image processor - α7 Gen8 4K AI Processor, Operating system - webOS 25, Bluetooth version - v5.0, Screen resolution - 3,840 x 2,160 pixels (4K Ultra HD), Weight with stand - 16.7 kg, Audio output power - 20 watts, Native refresh rate - 50/60 Hz, Smart Functionality - Apple AirPlay2, AI Chatbot, Google Cast, Google Home, Dynamic Tone Mapping - Yes, Weight without stand - 16.5 kg, Audio codecs supported - AC4, AC3 (Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (see manual for details), Stand dimensions (WxD) - 1,217 x 269 mm, Antenna inputs (tuners) - 2, VESA mount compatibility - 300 x 200 mm, Optical digital audio out - 1 (Toslink), Packaging dimensions (WxHxD) - 1,580 x 950 x 162 mm, TV dimensions with stand (WxHxD) - 1,455 x 904 x 269 mm, TV dimensions without stand (WxHxD) - 1,455 x 841 x 67.9 mm, "
  },
  {
      "slug": "sony-alpha-fx30-cinema-camera-with-xlr-grip",
      "text": "Sony Alpha FX30 Cinema Camera + XLR grip, ISO - 100 to 32,000 (Extended: 50 to 102,400), Audio - 4-Channel 24-Bit LPCM Audio, Sensor - 26 Megapixel APS-C CMOS sensor, Display - 3\" 2,360,000 Dot Dot articulating Touchscreen LCD, storage - Dual Slot: CFexpress Type A / SD, Autofocus - 495 Phase Detection Autofocus points, Lens mount - Sony E-mount, Resolution - UHD 4K (3840 x 2160) up to 120fps, Gamma Curve - HDR-HLG, S Cinetone, Sony S-Log 3, HDMI output - ProResRAW 16-Bit via HDMI 4672 x 2628 at 23.98/25/29.97/50/59.94 fps, Dynamic Range - 14 Stops of Dynamic range, Shutter speed - 1/8000 to 1/4 Second, Size & Weight - 129.7 x 77.8 x 84.5 mm / 562g, Input & Output - 1 x HDMI 2.0 Output, 2 x XLR / 1/4\" TRS Combo Microphone (+48 V Phantom Power) Input on Included Handle, 1 x 1/8\" / 3.5 mm TRS Stereo Microphone Input on Camera Body, 1 x 1/8\" / 3.5 mm TRS Stereo Headphone Output on Camera Body, 1 x USB-C Input, 1 x Sony Multi/Micro-USB (Camera Interface, Timecode), 1 x USB-C, WiFi, Bluetooth, Image Stabilizer - 5-axis sensor Stabilization, Recording Formats - XAVC HS 4:2:2 10-Bit UHD 4K (3840 x 2160) from 1 to 119.88 fps, XAVC S-I 4:2:2 10-Bit UHD 4K (3840 x 2160) from 1 to 119.88 fps, 1920 x 1080p from 1 to 239.76 fps, Scope of Delivery - Sony FX30, XLR handle, BC-QZ1 Battery Charger, body cap, power cord, Sony NP-FZ100 battery, USB-C cable, Fast & Slow Motion - 4K 120p, External Recording modes - Raw 16-Bit via HDMI, "
  },
  {
      "slug": "canon-rf-24-105mm-f-4-0-l-is-usm-lens",
      "text": "Canon RF 24-105mm f/4.0 L IS USM Lens, "
  },
  {
      "slug": "apple-apple-watch-series-9-gps-cellular-aluminium-case-and-sport-band-41mm",
      "text": "Apple Watch Series 9 GPS + Cellular, Aluminium Case, 41mm, Type - Smartwatch, Features - Powered by new S9 SiP, New Double Tap Gesture (answer a call, open a notification, play and pause music and more), 2x Brighter Display, Always-On Retina display, Faster on-device Siri with health data access, Precision Finding for iPhone, Crash detection, Fall Detection, Heart arrhythmia, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Pair Multiple Watches with Family Setup, Sleep Stages, Apple Pay, Listen Music, Podcast, Audiobooks, Band Size - S/M, Battery Life - Up to 18h / 36h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 5ATM, Activity Tracking - Continuous Heart Rate Tracking, Steps taken, Hours slept, Resting heart rate, Target heart rate, Skin temperature, Multisport workouts; Strength training, HIIT, Pilates, Meditation, Swimming, Running, Yoga, Cycling and Other Sports, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "microsoft-surface-pro-12-copilot-pc-12-lcd-x-plus-16gb-512gb-ssd-no-p-a",
      "text": "Surface Pro 12\", Copilot+ PC, 12” LCD | X Plus - 16GB Memory 512GB SSD (Device only), Ports - 2 x USB-C®, Wi-Fi - Yes, Weight - 685 g, Variant - 16 GB RAM | 512 GB SSD | Snapdragon X Plus, RAM size - 16 GB, Speakers - Yes, Bluetooth - 5.4, SSD Cache - 512 GB, Screen type - LCD, Touchscreen - Yes, AI assistant - Microsoft Copilot+, Aspect ratio - 3:2, Battery type - Lithium Ion, Front camera - Yes, Product type - Tablet Convertible, Graphics card - Adreno™ Onboard Graphics, Clock frequency - 3.2 GHz, Processor brand - Qualcomm, Processor model - Snapdragon® X Plus, Screen diagonal - 30.48 cm / 12 inches, Screen features - PixelSense, Wi-Fi standards - IEEE 802.11 a/b/g/n/ac/ax/be (802.11be), Battery capacity - 37.45 Wh, Operating system - Windows 11 Home, Processor number - X1P-42-100, Storage capacity - 512 GB, Integrated webcam - Yes, Scope of delivery - Tablet, USB-C Cable, Quick start guide (Keyboard, Pen and Power Adaptor not included), Screen resolution - 2,196 x 1,464 pixels, Charging via USB port - Yes, Integrated microphone - Yes, Dimensions (W x H x D) - 274.4 mm x 7.8 mm x 189.8 mm, Graphics chipset manufacturer - Qualcomm, "
  },
  {
      "slug": "samsung-tablet-galaxy-tab-s7-fe-wifi-4gb-64gb",
      "text": "Samsung Tablet, Galaxy Tab S7 FE - WiFi - Android - 64GB, Memory - 4GB, Battery - 10090mAh, Display - 12.4-inch TFT (2560 x 1600), Storage - 64GB, Processor - Qualcomm SM7325-2-AB, Dimensions - 18.5 x 28.4 x 0.6 cm (0.61kg), Rear Camera - 8MP, Connectivity - WiFi, Front Camera - 5MP, Operating System - Android™ 11, "
  },
  {
      "slug": "lg-tv-lg-43ua75006la-aeud",
      "text": "LG 43UA75006LA.AEUD - TV 43\" 4K, Wi-Fi - Yes (Wi-Fi 5 / 802.11ac), CI slot - 1 (except UK and Ireland), AI Sound - α7 AI Sound Pro (Virtual 9.1.2 Up-Mix), HDMI ARC - eARC (on HDMI 2), USB ports - 1 (USB 2.0), HDMI inputs - 3 (supports eARC, ALLM), HDR support - HDR10 / HLG, AI Upscaling - 4K Super Upscaling, Display type - 4K UHD, HGIG support - Yes, Backlight type - Direct LED, Game Optimizer - Yes (Game Dashboard), LAN (Ethernet) - 1 port, Speaker system - 2.0 channel, downward radiating, Image processor - α7 Gen8 4K AI Processor, Operating system - webOS 25, Bluetooth version - v5.0, Screen resolution - 3,840 x 2,160 pixels (4K Ultra HD), Weight with stand - 7.4 kg, Audio output power - 20 watts, Native refresh rate - 50/60 Hz, Smart Functionality - Apple AirPlay2, AI Chatbot, Google Cast, Google Home, Dynamic Tone Mapping - Yes, Weight without stand - 7.3 kg, Audio codecs supported - AC4, AC3 (Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (see manual for details), Stand dimensions (WxD) - 892 x 200 mm, Antenna inputs (tuners) - 2, VESA mount compatibility - 200 x 200 mm, Optical digital audio out - 1 (Toslink), Packaging dimensions (WxHxD) - 1,055 x 660 x 142 mm, TV dimensions with stand (WxHxD) - 968 x 621 x 200 mm, TV dimensions without stand (WxHxD) - 968 x 567 x 67.9 mm, "
  },
  {
      "slug": "apple-tablet-11-ipad-pro-2022-wi-fi-8gb-128gb",
      "text": "Apple 11\" iPad Pro (2022) - Wi-Fi - 128GB, Memory - 8GB, Battery - 28.65 Wh, Display - 11-inch Liquid Retina IPS (2388 x 1668), Storage - 128GB, Processor - Apple M2, Dimensions - 19.1 x 26.1 x 0.51 cm (0.91kg), Rear Camera - 12MP Wide + 10MP Ultra-wide + LiDAR, Connectivity - Wi-Fi, Front Camera - 12MP, Operating System - iPadOS 16, "
  },
  {
      "slug": "optoma-projector-optoma-photon-go",
      "text": "Optoma Photon Go Projector - Full HD, Control - 1 × RJ45, Outputs - 1 × USB-A Power (1A), 1 × S/PDIF, Speakers - 2, IP rating - IP2X, Zoom type - Fixed, Brightness - 650 lumens, Net weight - 1.72 kg, Resolution - 1080p Full HD (1920 x 1080), Canvas size - 60\" to 100\" diagonal (1.52m to 2.54m), Connections - 1 × HDMI 2.0, 1 × USB-C Power, Input delay - 27.10 ms, Aspect ratio - 16:9, Battery life - Up to 1.5 hours, Gross weight - 2.73 kg, Light source - DuraCore MultiColor Laser, Power supply - Universal AC 100-240V ±10%, 50/60 Hz, Speaker info - Dolby Audio, Contrast ratio - 800, Laser lifespan - 20,000 hours, Remote control - Yes, Projection ratio - 0.18:1, Watts per speaker - 10W, Display technology - DLP®, Projection distance - 0.26m - 0.4m, Wireless technology - WiFi 5GHz, Bluetooth (2-way), Brightness (HK/ANSI) - 1,200, Operating conditions - 0°C to 40°C, Max humidity 10–85%, Standard accessories - Power adapter (100W), Power cable (Type C), Remote control, Basic user manual, 2 × AAA batteries, Computer compatibility - VGA, SVGA, XGA, 720p, 1080p, UHD, Compatible image formats - 4:3, 16:9, Contrast ratio - dynamic - 2,500,000:1, Dimensions (W × D × H) - 252 × 157 × 62 mm, Keystone correction - vertical - ±5°, Keystone correction - horizontal - ±10°, Vertical auto keystone correction - Yes, "
  },
  {
      "slug": "ecovacs-deebot-x2-omni-vacuum-cleaner",
      "text": "Ecovacs Deebot X2 Omni Robot Vacuum Cleaner, Dimensions - 394 x 443 x 528 mm / 16 kg, App-controllable - Yes, Special features - 8000 Pa suction power, Filter bag volume - 3 L, Scope of delivery - DEEBOT 1x (with filter 1x), OMNI Station 1x (with dust bag 1x), wiping sets for mop 1 pair, mop 1 pair, charging cable 1x, side brush 1x, Field of application - Tiles, hardwood floors, parquet floors, carpets, laminates, Maximum operating time - 143 min, Capacity of the water tank - 0.18 L, Maximum Volume of the dust container - 420 ml, Maximum volume of the water container - 4 L, Charging time according to the manufacturer - 5.5 hours, "
  },
  {
      "slug": "canon-rf-s-55-210mm-f-5-7-1-is-stm",
      "text": "Canon RF-S 55-210mm f/5-7.1 IS STM, Focus - Autofocus, Mount - Canon R mount, Weight - 270g, Aperture - Max F5-7.1, Lens type - RF APS-C lens, Dimensions - 6.9 x 9.4 cm (ø x L), Filter size - 55mm, Focal length - 55mm to 210mm, Image stabilizer - Yes, Scope of delivery - Canon RF-S 55-210mm f/5-7.1 IS STM Lens, Front and Rear lens cover, "
  },
  {
      "slug": "hp-omnibook-7-17-dc0054ng-u5-226v-16gb-512gb-copilot-pc",
      "text": "HP OmniBook 7 17-dc0054ng Laptop - Intel® Core™ Ultra 5-226V - 16GB - 512GB SSD - Intel® Intel Arc Graphics, Model - BV8G2EA#ABD, Memory - 16GB, Display - 17.3 inches (1920 x 1080), Storage - 512GB SSD, Graphics - Intel® Intel Arc Graphics, Processor - Intel® Core™ Ultra 5-226V, Dimensions - 35.6 x 15.3 x 24.5 cm • 1.89 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "apple-tablet-12-9-ipad-pro-2022-wi-fi-8gb-128gb",
      "text": "Apple 12.9\" iPad Pro (2022) - Wi-Fi - 128GB, Memory - 8GB, Battery - 40.88 Wh, Display - 12.9-inch Liquid Retina XDR (2732 x 2048), Storage - 128GB, Processor - Apple M2, Dimensions - 22.7 x 29.3 x 0.51 cm (1.3kg), Rear Camera - 12MP Wide + 10MP Ultra-wide + LiDAR, Connectivity - Wi-Fi, Front Camera - 12MP, Operating System - iPadOS 16, "
  },
  {
      "slug": "lenovo-thinkpad-e14-g5-i5-1335u-8gb-256gb-14",
      "text": "Lenovo ThinkPad E14 G5 Laptop - Intel® Core™ i5-1335U - 8GB - 256GB SSD - Intel® Iris® Xe Graphics, Model - 21JK0057GE, Memory - 8GB, Display - 14 inches (1920 x 1080), Storage - 256GB SSD, Graphics - Intel® Iris® Xe Graphics, Processor - Intel® Core™ i5-1335U, Dimensions - 31.3 x 21.9 x 1.79 cm • 1.43 kg, Operating System - Windows® 11 Pro, Keyboard Language - German, "
  },
  {
      "slug": "sony-ps-vr-starter-pack-vr-glasses-ps-camera-ps-camera-adapter",
      "text": "Sony PSVR Headset Starter Pack (VR Glasses / PS Camera / PS Camera Adapter for PS5), Depth - 277 mm, Width - 187 mm, Height - 185 mm, Weight - 610 g, Gyroscope - Yes, Display type - OLED, Accelerometer - Yes, Headphone out - Yes, Viewing angle - 100°, Cables included - AC, HDMI, USB, Magnetic sensor - Yes, Adjustable straps - Yes, Display resolution - 1920 x 1080 pixels, USB connector type - USB Type-A, Built-in microphone - Yes, Maximum refresh rate - 120 Hz, Motion to photon latency - 20 ms, Field of view (FOV) angle - 100°, "
  },
  {
      "slug": "lenovo-console-lenovo-legion-go",
      "text": "Lenovo Legion Go Console, Weight - 854 g, Dimensions - 131 x 300 x 40.7 mm, Aspect ratio - 16:10, Processor cores - 8, Processor model - AMD Ryzen Z1 Extreme, SSD form factor - M.2, Wi-Fi standards - Wi-Fi 6E (802.11ax), Display diagonal - 22.4 cm (8.8\"), Bluetooth version - 5.3, Battery life (max) - 7.1 h, Display brightness - 500 cd/m², Display resolution - 2560 x 1600 pixels, Graphics processor - AMD Radeon 780M, Storage media type - SSD, USB connector type - USB Type-C, Maximum refresh rate - 144 Hz, Compatible memory cards - MicroSD (TransFlash), Built-in memory capacity - 512 GB, Operating system version - Windows 11 Home, "
  },
  {
      "slug": "xgimi-aura-projector",
      "text": "XGIMI AURA Ultra-Short Throw Laser Projector - 4K UHD, WiFi - Dual-band 2.4/5GHz, 802.11a/b/g/n, Output - 1x miniUSB, 1x Headphone, 1x Optical, Smart TV - Android TV, Chromecast, Bluetooth - Bluetooth 5.0, Brightness - 2400 ANSI lumens, Connections - Input: 1x DC, 3x HDMI 2.0, 3x USB 2.0, 1x LAN., Aspect ratio - 16:9, Picture quality - 4K UHD, Projection size - 150 inches, 3D functionality - Full 3D, Special features - WiFi, Bluetooth, 2x 30W Harman Kardon internal speakers, 8-points keystone correction, DTS-HD, DTS Studio Sound, Dolby Audio, Screen resolution - 3840 x 2160 pixels, Projection distance - > 0.44 m, "
  },
  {
      "slug": "yamaha-dtx432k-e-drum-set",
      "text": "Yamaha DTX432K E-drum set, Type - E-drum set, Model - DTX432K, Connections - 6.3 mm stereo jack headphone and line output, 3.5 mm stereo jack Aux In, USB port for connection via MIDI, Input on the bass drum pad for an additional mono pad, Connectivity - App-controllable, Key features - DTX402 drum module, 287 sounds, 10 user kits, metronome, 10 coaching programs, Operating mode - Plug-in, "
  },
  {
      "slug": "canon-rf-5-2mm-f2-8-l-dual-fisheye",
      "text": "Canon RF 5.2mm F2.8 L DUAL FISHEYE, "
  },
  {
      "slug": "apple-tablet-11-ipad-air-2025-wi-fi-cellular-8gb-128gb",
      "text": "Apple 11\" iPad Air (2025) - Wi-Fi + Cellular - iOS - 128GB, Memory - 8GB, Battery - 28,93 Wh, Display - 11-inch Liquid Retina (2360 x 1640), Storage - 128GB, Processor - Apple M3, Dimensions - 19.2 x 26.1 x 3.3 cm (0.46kg), Rear Camera - 12MP, Connectivity - Wi-Fi + Cellular, Front Camera - 12MP, Operating System - iOS, "
  },
  {
      "slug": "pico-all-in-one-virtual-reality-headset-pico-4-256-gb",
      "text": "Pico 4 256 GB VR Headset, Audio - Dual stereo speakers, Dual microphones, Wi-Fi - Wi-Fi 6, dual-band 2×2 MIMO (2.4GHz/5GHz), Optics - Pancake lenses, 105° FOV, 20.6 PPD, 62–72mm seamless interpupillary distance (IPD) adjustment, Battery - 5300 mAh battery, 20W fast charger, Supports QC 3.0 / PD 3.0, Display - Display: 2.56'' ×2, Storage - GB RAM + 256 GB storage, Tracking - 6DoF Tracking System, Bluetooth - 5.1, Processor - Qualcomm® XR2, 8 cores, 64-bit, 2.84 GHz, 7nm process, Controller - AA battery ×2, In the Box - VR headset ×1, Controller ×2, 1.5V AA alkaline battery ×4, Glasses spacer ×1, Nose pad ×1, Wrist strap ×2, USB-C power adapter ×1, USB-C to USB-C 2.0 cable ×1, Resolution - 4320 × 2160 (2160 × 2160 per eye), 1200 PPI, Refresh rate - 72Hz/90Hz, Operating System (OS) - PICO OS 5.0, "
  },
  {
      "slug": "canon-rf-35mm-f-1-8-is-stm-lens",
      "text": "Canon RF 35mm f/1.8 IS STM Lens, Focus - Autofocus, Mount - Canon RF mount, Weight - 10.76 oz / 305 g, Lens Type - Full Frame, Filter size - 62mm, Image Stabilizer - Yes, Scope of Delivery - RF 35mm F1.8 lens, front and rear cover, Dimensions (ø x L) - 2.93 x 2.47\" / 74.4 x 62.8 mm, Minimum focus distance - 6.69\" / 17 cm, "
  },
  {
      "slug": "apple-watch-series-8-gps-aluminium-case-and-sport-band-41mm",
      "text": "Apple Watch Series 8 GPS, Aluminium Case, 41mm, Type - Smartwatch, Features - Apple Pay, Always-On Retina Display, Customize your Watch Face, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Temperature Sensing, Cycle Tracking, Emergency SOS, Fall Detection, Crash Detection, Pair Multiple Watches with Family Setup, Medications App, AFib History, Audio-Guided Walks, Runs, and Meditations, Customize your Workouts, Swim-proof, International Roaming, Wireless Fast Charging, Crack/Dust/Water Resistant, Sleep Stages, Battery Life - Up to 18h, Connectivity - Wi-Fi, Bluetooth 5.0, NFC, Compatibility - iOS, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 5ATM, Activity Tracking - Continuous Heart Rate Tracking, Sleep Tracking, Track 11 Different Workout Types, Swimming (Breaststroke, Backstroke) , Running (Stride Length Tracking), Yoga, Cycling and several other sport and gym profiles, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "asus-rog-zephyrus-g16-u9-285h-32-1-5080-gu605cw-qr185w",
      "text": "ASUS ROG Zephyrus GU605CW-QR185W G16 Gaming Laptop - Intel® Core™ Ultra 9-285H - 32GB - 1TB SSD - NVIDIA® GeForce® RTX™ 5080, Model - 90NR0LX5-M00AP0, Memory - 32GB, Display - 16 inches (2560 × 1600), 240Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5080, Processor - Intel® Core™ Ultra 9-285H, Dimensions - 3.54 x 24.6 x 1.5 cm • 1.95 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "denon-dj-sc-live-2-dj-studio-equipment",
      "text": "Denon Dj SC Live 2 DJ Controller, Type - DJ Controller, Model - SC Live 2, Connections - 2 x 6.3mm jack / 3.5mm mini jack headphones outputs, 2 RCA main out, 2 XLR male Main Out, 6.3 mono jack Mic input, SD Card input, USB-B input, 2 USB-A inputs, No of channels - 2-channel, Operating mode - built-in WiFi, What's included - Power supply unit, USB cable, display cleaning cloth, Special features - The SC LIVE 2's groundbreaking integration with Amazon Music and other popular streaming services gives DJs instant access to over 100 million CD quality songs across all musical genres. With built-in Wi-Fi and lightning-fast onboard song analysis, you can now perform a full DJ set without owning or preparing any music ahead of time. The SC LIVE 2 fuses the power of a club-standard modular setup into a compact & intuitive 2-deck standalone DJ controller. The powerful, built-in speakers offer the perfect sound solution for livestreaming, practicing, content creation, and personal monitoring during live shows. The dedicated volume knob and on/off switch offers full control to meet the needs of any gig, "
  },
  {
      "slug": "apple-apple-watch-series-9-gps-cellular-stainless-steel-case-and-sport-band-45mm",
      "text": "Apple Watch Series 9 GPS + Cellular, Stainless Steel Case, 45mm, Type - Smartwatch, Features - Powered by new S9 SiP, New Double Tap Gesture (answer a call, open a notification, play and pause music and more), 2x Brighter Display, Always-On Retina display, Faster on-device Siri with health data access, Precision Finding for iPhone, Crash detection, Fall Detection, Heart arrhythmia, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Pair Multiple Watches with Family Setup, Sleep Stages, Apple Pay, Listen Music, Podcast, Audiobooks, Band Size - M/L, Battery Life - Up to 18h / 36h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Stainless Steel Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 5ATM, Activity Tracking - Continuous Heart Rate Tracking, Steps taken, Hours slept, Resting heart rate, Target heart rate, Skin temperature, Multisport workouts; Strength training, HIIT, Pilates, Meditation, Swimming, Running, Yoga, Cycling and Other Sports, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "epson-projector-epson-eh-ls300",
      "text": "Epson Ultra-Short Throw EH-LS300W Projector - Full HD, Smart TV - Android TV ™, Google Assistant, Google Chromecast, Brightness - 3600 ANSI lumens, Connections - USB 2.0 Type A, USB 2.0 Type Mini-B, HDMI input (2x), coaxial digital audio output, Wireless LAN IEEE 802.11a / b / g / n / ac (WiFi 5), HDMI ARC, HDMI (HDCP 2.3), Aspect ratio - 16:9, Picture quality - Full HD, Projection Type - 3LCD technology, Projection size - 61 - 120 inches, 3D functionality - No, Special features - YAMAHA 3D surround sound • Easy setup • Exceptionally brilliant results even in bright rooms, Screen resolution - 1920 x 1080 pixels, Projection Distance - 0,4 m (70 inch screen), "
  },
  {
      "slug": "msi-katana-15-b12vgk-089-i7-12650h-16gb-1tb-rtx-4070",
      "text": "MSI Katana 15 B12VGK-089 Gaming Laptop - Intel® Core™ i7-12650H - 16GB - 512GB SSD - NVIDIA® GeForce® RTX 4070, Model - 15 B12VGK-089, Memory - 16GB, Display - 15.6 inches (1920 x 1080), 144Hz, Storage - 512GB SSD, Graphics - NVIDIA® GeForce® RTX 4070, Processor - Intel® Core™ i7-12650H, Dimensions - 35.9 x 25.9 x 2.49 cm • 2.25 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "epson-eh-ls800b-projector",
      "text": "Epson EH-LS800B Laser Projector - 4K UHD, Brightness - 4000 ANSI lumens, Connections - USB 2.0-A (3x), USB 2.0 Type B (Service Only), Wireless LAN IEEE 802.11a/b/g/n/ac, Jack plug out, Bluetooth, HDMI ARC, HDMI (HDCP 2.3) (3x), Aspect ratio - 16:9, Picture quality - 4K UHD, Projection size - 80 inches - 150 inches, 3D functionality - , Special features - 4K enhancement, Android TV, Auto Power On, Auto source search, Built-in speaker, Chromecast, Digital zoom, Frame interpolation, Long light source life, Quick Corner, Sound by Yamaha, Screen resolution - 3840 x 2160 pixels, Projection distance - 0,3 m - 0,5 m ( 60 inch screen), "
  },
  {
      "slug": "samsung-tv-samsung-gq65q60cauxzg",
      "text": "Samsung GQ65Q60CAUXZG - TV 65\" QLED 4K, Screen - Flat, Delivery - Premium Solar Smart Remote, stand, power cable, instructions, Processor - Quantum Processor Lite 4K, Model Name - GQ65Q60CAUXZG, Connections - 3x HDMI, 2x Antenna input, 1x LAN, 2x USB, 1x CI+ Slot, WiFi, Bluetooth, Aynet+ (HDMI-CEC), Product type - QLED TV 4K, VESA standard - 400 x 300, Receptions Types - DVB-C/S2/T2 HD, Special Features - Up to 100% color volume for rich colors in different brightness ranges thanks to Quantum Dot technology. Enjoy high contrast and cinematic images with QuantumHDR. AirSlimDesign captivates with its filigree shape, which makes the TV almost blend in with the wall. Samsung Smart Hub & Gaming Hub bring all your favorite smart TV and gaming apps together in one place., Dimensions with stand - 1450.9 x 872.2x 274.0 mm, Dimensions without stand - 1450.9 x 831.4 x 25.7 mm, HDR (High Dynamic Range) - HDR10+ Certification: HDR10+ Adaptive, "
  },
  {
      "slug": "sony-tv-sony-xr55a80laep",
      "text": "Sony XR-55A80L - TV 55\" BRAVIA XR OLED, Screen - Flat, Delivery - TVs, remote controls (RMF-TX810U, RMT-TX450E), Processor - Cognitive Processor XR, Model Name - XR55A80LAEP, Connections - 4x HDMI, 2x USB, center speaker in, digital audio output, Wi-Fi Direct, W-LAN, Ethernet, Product type - OLED TV 4K, VESA standard - 300 x 300, Receptions Types - DVB-T2 HD, DVB-C, DVB-S, DVB-S2, Special Features - Google TV, ECO PACK, BRAVIA CORE, Perfect for PlayStation 5, Metal Flush Surface Design, Dimensions with stand - 1227mm / 738mm / 327mm, Dimensions without stand - 1227mm / 712mm / 53mm, HDR (High Dynamic Range) - Dolby Vision, HDR10, Hybrid Log Gamma (HLG), "
  },
  {
      "slug": "apple-watch-ultra-gps-cellular-titanium-case-and-midnight-ocean-band-49mm",
      "text": "Apple Watch Ultra GPS + Cellular, Titanium Case, 49mm, Type - Smartwatch, Features - Apple Pay, Always-On Retina Display, Big and Bright Display, Customizable New Action Button, 86-decibel Siren, Durable from -20° C to 55° C, Dual-frequency GPS, Wayfinder Watch Face, Temperature Sensing, Sleep Tracking, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Crash Detection, Fall Detection, Emergency SOS, Stay Connected with Cellular, International Emergency Calling, Blood Oxygen App, ECG App, Pair Multiple Watches with Family Setup, Pro Running Features, Strong Battery Performance, Oceanic+ App for Scuba Divers, Band Size - One Size (130–200mm), Case Size - 49mm, Battery Life - Up to 36h, Connectivity - GPS, Wi-Fi, Bluetooth 5.0, NFC, Compatibility - iOS, Build Material - Titanium Case and Ocean Band, Music playback - Yes, Water/Dust proof - Up to 10 ATM / MIL-STD-810H, Activity Tracking - Heart Rate, Running (Stride Length, Ground Contact Time, Vertical Oscillation), Blood Oxygen Tracking, Depth/Pressure/Location Tracking for Divers, Multisport Workouts, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "sony-tv-xr48a90kaep",
      "text": "Sony TV 48\" XR-48A90KAEP OLED 4K, Screen - Flat, Delivery - OLED TV, remote control with voice control and backlight (RMF-TX621E) incl. batteries, table stand, power cable, quick configuration, user manual, Processor - Cognitive Processor XR, Model Name - XR48A90KAEP, Connections - 4x HDMI, 2x USB, digital audio output (optical), LAN, CI+, Product type - OLED TV 4K, VESA standard - 300 x 300, Receptions Types - DVB-T2 HD, DVB-C, DVB-S, DVB-S2, Special Features - Dolby Atmos, S-Force Front Surround, S-Master Digital Amplifier, DTS Digital Surround, Acoustic Auto Calibration, Dimensions with stand - 1069mm / 629mm / 225mm, Dimensions without stand - 1069mm / 624mm / 59mm, HDR (High Dynamic Range) - HDR10, Hybrid Log Gamma (HLG), Dolby Vision, "
  },
  {
      "slug": "philips-tv-philips-55oled708-12",
      "text": "Philips 55OLED708/12 - TV 55\" OLED 4K, HD type - 4K Ultra HD, Sound modes - AI Sound, Custom, Dialog, Dolby Audio, Screen shape - Flat, Audio decoders - Dolby Atmos, RMS rated power - 40 W, Wi-Fi standards - Wi-Fi 5 (802.11ac), Display diagonal - 139.7 cm (55\"), Bluetooth version - 5.0, Depth (with stand) - 240 mm, Display resolution - 3840 x 2160 pixels, Display technology - OLED, Number of speakers - 4, Width (with stand) - 1228 mm, HDMI ports quantity - 4, Height (with stand) - 723 mm, Native aspect ratio - 16:9, Native refresh rate - 120 Hz, Weight (with stand) - 18.2 kg, Height (without stand) - 708 mm, Panel mounting interface - 300 x 300 mm, Operating system installed - Google TV, Digital signal format system - DVB-C, DVB-S, DVB-S2, DVB-T, DVB-T2, DVB-T2 HD, High Dynamic Range (HDR) technology - Dolby Vision, High Dynamic Range 10 (HDR10), High Dynamic Range 10+ (HDR10 Plus), Hybrid Log-Gamma (HLG), "
  },
  {
      "slug": "hisense-tv-hisense-75e77kq",
      "text": "Hisense 75E77KQ - TV 75\" UHD 4K, HDR - Yes (HDR10 / HDR10+ decoding / HLG / Dolby Vision), USB - 2x (2.0), HDMI - 3x HDMI 2.0 ALLM, 1x eARC VRR (48-60Hz), AirPlay2 - Yes, Bluetooth - Yes, Processor - Quad Core/MT9602, VIDAA Voice - Yes, Aspect ratio - 16:9, Output power - 2x15W, Refresh rate - 60 Hz, Alexa Built-In - Yes, Headphone Output - Yes, Sound Technology - Dolby Atmos, Display technology - Hisense QLED, Ethernet RJ45 Port - Yes (100M), VIDAA (Mobile App) - Android / iOS, S/PDIF Audio Output - Yes, Composite (AV) Input - Yes, Screen diagonal in cm - 189, Common Interface (CI+) - Yes, VESA Wall Mounting in mm - 400×300mm, Screen resolution in pixels - Ultra HD 3840×2160, Size with Stand (WxHxD) in cm - 167.6×104.4×37, Size without Stand (WxHxD) in cm - 167.6×96.6×8.7, Weight with Stand / without Stand in kg - 22.5 / 22.2, "
  },
  {
      "slug": "lg-tv-lg-oled65b36la",
      "text": "LG OLED65B36LA - TV 65\" OLED 4K, HD type - 4K Ultra HD, Tuner type - Analog & digital, Video apps - Amazon Prime Video, Apple TV, Disney+, Netflix, YouTube, Smart modes - Cinema, Custom, Filmmaker, Game, Personal, Sports, Vivid, Sound modes - AI Sound Pro, HDMI version - 2.1, Audio decoders - Dolby Atmos, Wi-Fi standards - 802.11a, 802.11b, 802.11g, Wi-Fi 4 (802.11n), Wi-Fi 5 (802.11ac), Display diagonal - 165.1 cm (65\"), Bluetooth version - 5.0, Display resolution - 3840 x 2160 pixels, Display technology - OLED, HDMI ports quantity - 4, Native aspect ratio - 16:9, Native refresh rate - 100 Hz, USB 2.0 ports quantity - 2, Weight (without stand) - 24 kg, Panel mounting interface - 300 x 200 mm, Dimensions with stand (cm) - 55.9 x 24.6 x 1677, Operating system installed - Web OS, Picture processing technology - LG AI Picture Pro, High Dynamic Range (HDR) technology - Dolby Vision, High Dynamic Range 10 (HDR10), Hybrid Log-Gamma (HLG), "
  },
  {
      "slug": "samsung-tv-samsung-gq49ls01tauxzg",
      "text": "Samsung TV 49\" The Serif, Screen - Flat, Delivery - QLED TV, remote control incl. batteries, power cable, instructions, Processor - Quantum Processor 4K, Model Name - GQ49LS01TAUXZG 2020, Connections - 4x HDMI, 2x USB, 1x digital audio output (optical), 1x antenna input, CI +, Product type - QLED TV 4K, VESA standard - NA, Receptions Types - DVB-T2 HD, DVB-C, DVB-S2, Special Features - Minimalist design, removable feet, NFC on TV enables fast connection from smartphone to TV, 100% color volume with Quantum Dot, Dimensions with stand - 1119.6 mm / 1161.4 mm / 474.6 mm, Dimensions without stand - 1119.6 mm / 671.9 mm / 206.5 mm, HDR (High Dynamic Range) - Quantum HDR, HDR10+, "
  },
  {
      "slug": "philips-tv-philips-50pus7607-12",
      "text": "Philips TV 50\" PUS7607/12, Screen - Flat, Delivery - Legal and Safety Information Brochure, power cord, start guide, remote control, 2x AAA batteries, stand with sound solution, Processor - Dual Core, Model Name - 50PUS7607/12, Connections - 3x HDMI, 2x USB ports, WiFi 802.11n, 2x2, single band, satellite connection, common Interface Plus (CI+), Digital audio output (optical), Ethernet LAN RJ-45, service port, Product type - LED TV UHD 4K, VESA standard - 100 x 200, Receptions Types - DVB-T/T2/T2-HD/C/S/S2, Special Features - Dolby Vision, Dolby Atmos, Pixel Precise Ultra HD, Dimensions with stand - 1111.3 x 673.9 x 246.8 mm, Dimensions without stand - 1111.3 x 654.4 x 85.3 mm, HDR (High Dynamic Range) - HDR10+ compatible, "
  },
  {
      "slug": "philips-tv-philips-50pus8508-12",
      "text": "Philips 50PUS8508/12 - TV 50\" The One 4K, HD type - 4K Ultra HD, Tuner type - Analog & digital, Video apps - Amazon Prime Video, Apple TV, BBC iPlayer, Disney+, Netflix, YouTube, Ambient mode - Yes, Screen shape - Flat, Audio decoders - DTS, Dolby Atmos, Dolby Digital, Wi-Fi standards - Wi-Fi 5 (802.11ac), Depth (with stand) - 256 mm, Display resolution - 3840 x 2160 pixels, Display technology - LED, Number of speakers - 2, Width (with stand) - 1116 mm, Height (with stand) - 715 mm, Native refresh rate - 60 Hz, Weight (with stand) - 13.1 kg, Depth (without stand) - 81 mm, Width (without stand) - 1116 mm, Height (without stand) - 655 mm, Weight (without stand) - 12.7 kg, Panel mounting interface - 200 x 300 mm, Operating system installed - Google TV, Digital signal format system - DVB-C, DVB-S, DVB-S2, DVB-T, DVB-T2, DVB-T2 HD, High Dynamic Range (HDR) technology - Dolby Vision, High Dynamic Range 10+ (HDR10 Plus), Hybrid Log-Gamma (HLG), "
  },
  {
      "slug": "samsung-tv-samsung-gu43du7179uxzg",
      "text": "Samsung GU43DU7179UXZG - TV 43\" Crystal UHD 4K, HD type - 4K Ultra HD, Wi-Fi standards - Wi-Fi 5 (802.11ac), Display diagonal - 109.2 cm (43\"), Bluetooth version - 5.2, Depth (with stand) - 191 mm, Display resolution - 3840 x 2160 pixels, Width (with stand) - 967.5 mm, HDMI ports quantity - 3, Height (with stand) - 609.7 mm, Native aspect ratio - 16:9, Native refresh rate - 50 Hz, Weight (with stand) - 7.4 kg, LED backlighting type - Dual LED, USB 2.0 ports quantity - 1, Panel mounting interface - 200 x 200 mm, Ethernet LAN (RJ-45) ports - 1, Multiroom audio technology - Samsung Multiroom Link, Operating system installed - Tizen, Digital signal format system - DVB-C, DVB-S2, DVB-T2, Samsung technologies (AV/TV) - Buds Auto Switch, Object Tracking Sound Lite, Q-Symphony, Motion interpolation technology - Motion Xcelerator, High Dynamic Range (HDR) technology - Filmmaker Mode, High Dynamic Range 10+ (HDR10 Plus), Hybrid Log-Gamma (HLG), "
  },
  {
      "slug": "samsung-freestyle-projector-sp-lsp3blaxxe",
      "text": "Samsung Freestyle SP-LSP3BLAXXE Projector - Full HD, Brightness - 550 ANSI lumens, Connections - 1x Micro HDMI (eARC), USB-C, Aspect ratio - 16:9, Picture quality - Full HD, Projection size - 30 - 100 inches, 3D functionality - No, Special features - WiFi, Auto Keystone, auto focus, auto leveling, 360 degree speaker (5W), Mobile mirroring, Screen resolution - 1920 x 1080 pixels, Projection distance - 2.654 m (100 inches), "
  },
  {
      "slug": "sony-tv-sony-kd75x75wlpaep",
      "text": "Sony KD-75X75WL - TV 75\" BRAVIA LED, Screen - Flat, Delivery - TVs, remote controls (RMF-TX810U, RMT-TX450E), Processor - 4K HDR Processor X1, Model Name - KD75X75WLPAEP, Connections - 4x HDMI, 2x USB, digital audio output, Wi-Fi Direct, W-LAN, Ethernet, Product type - LED TV UHD 4K, VESA standard - 300 x 300, Receptions Types - DVB-T2 HD, DVB-C, DVB-S, DVB-S6, Special Features - Google TV, ECO PACK, BRAVIA CORE, Narrow Bezel Design, Dimensions with stand - 1686 mm / 1045 mm / 415 mm, Dimensions without stand - 1686 mm / 969 mm / 72 mm, HDR (High Dynamic Range) - Dolby Vision, HDR10, Hybrid Log-Gamma (HLG), "
  },
  {
      "slug": "sony-tv-sony-kd65x75wlpaep",
      "text": "Sony KD-65X75WL - TV 65\" BRAVIA LED, Screen - Flat, Delivery - TVs, remote controls (RMF-TX810U, RMT-TX450E), Processor - 4K HDR Processor X1, Model Name - KD65X75WLPAEP, Connections - 4x HDMI, 2x USB, digital audio output, Wi-Fi Direct, W-LAN, Ethernet, Product type - LED TV UHD 4K, VESA standard - 300 x 300, Receptions Types - DVB-T2 HD, DVB-C, DVB-S, DVB-S5, Special Features - Google TV, ECO PACK, BRAVIA CORE, Narrow Bezel Design, Dimensions with stand - 1462 mm / 912 mm / 334 mm, Dimensions without stand - 1462 mm / 842 mm / 71 mm, HDR (High Dynamic Range) - Dolby Vision, HDR10, Hybrid Log-Gamma (HLG), "
  },
  {
      "slug": "sony-tv-sony-kd55x75wlpaep",
      "text": "Sony KD-55X75WL - TV 55\" BRAVIA LED, Screen - Flat, Delivery - TVs, remote controls (RMF-TX810U, RMT-TX450E), Processor - 4K HDR Processor X1, Model Name - KD55X75WLPAEP, Connections - 4x HDMI, 2x USB, digital audio output, Wi-Fi Direct, W-LAN, Ethernet, Product type - LED TV UHD 4K, VESA standard - 300 x 300, Receptions Types - DVB-T2 HD, DVB-C, DVB-S, DVB-S4, Special Features - Google TV, ECO PACK, BRAVIA CORE, Narrow Bezel Design, Dimensions with stand - 1243 mm / 789 mm / 334 mm, Dimensions without stand - 1243 mm / 721 mm / 71 mm, HDR (High Dynamic Range) - Dolby Vision, HDR10, Hybrid Log-Gamma (HLG), "
  },
  {
      "slug": "samsung-tv-samsung-gu55cu8079uxzg",
      "text": "Samsung GU55CU8079UXZG - TV 55\" Crystal UHD 4K, Screen - Flat, Delivery - Remote control, power cable, instructions, Processor - Crystal Processor 4K, Model Name - GU55CU8079UXZG, Connections - 3x HDMI, 2x USB, 2x Antenna input, 1x CI+ Slot, 1x Digital Audio Output, LAN, WiFi, Bluetooth, Aynet+ (HDMI-CEC), HDMI-eARC (HDMI 2), Product type - LED TV UHD 4K, VESA standard - 200 x 200, Receptions Types - DVB-C/S2/T2 HD, Special Features - Thanks to Dynamic Crystal Color, you can see realistic color spectra and enjoy a multitude of details. AirSlimDesign which makes the TV almost blend into the wall. The Crystal Processor 4K shows color nuances almost as they really are through powerful 4K upscaling. Samsung Smart Hub & Gaming Hub bring all your favorite smart TV and gaming apps together in one place., Dimensions with stand - 1232.1 x 748.8 x 226.3 mm, Dimensions without stand - 1232.1 x 708.8 x 25.7 mm, HDR (High Dynamic Range) - HDR10+, "
  },
  {
      "slug": "acer-h6543ki-projector",
      "text": "Acer H6543Ki Projector - Full HD, Color - White, Input - 2 x HDMI with HDCP, Audio in (3.5mm), Output - 2 x (1x in for Wireless Adapter, 1x DC Out 5V), Audio out (3.5mm), Speaker - 1x 10 watt, Version - DMD, Contrast - 10,000:1, DLP Chip - 0.48'', Brightness - 4,800 (standard), 3,840 (eco) ANSI lumens, Life (hr.) - 4,000 (standard), 10,000 (eco), 20,000 (ecoPro) hours, Resolution - 1080p Full HD (1,920 x 1,080 px), Noise level - 34 (standard), 29 (eco) dBA, Throw ratio - 1.50 ~ 1.65:1, Image Offset - 110%, Display Format - 16:9 (native) / 4:3 (supported), Light technology - 240 watt Philips UHP, Projection Modes - Front- / Rear- & Front-Ceiling- / Rear-Ceiling-Projection, Power Consumption - 309 (standard), 215 (eco), < 0.5 watt (standby), Displayable Colours - 1.07 Billion Colors, Keystone Correction - +/- 40° (vertical) manual & automatic, Projection distance - 1.00 ~ 10.00 m, Zoom / Digital-Zoom - 1:1.1x / 2x, Projection technology - DLP 3D Ready & HDMI 3D, Focus / Focal distance - F = 2.00 ~ 2.05 / f = 15.85 ~ 17.44 mm, Projection size (diagonal) - 0.69 ~ 7.62 m, Weight / incl. packaging (kg) - 2.90 kg / 4.30 kg, Horizontal / Vertical frequency - 15 ~ 100 kHz / 24 ~ 120 Hz, Dimensions / Shipping dimensions (mm) - 322 x 225 x 91 / 433 x 162 x 297, "
  },
  {
      "slug": "optoma-uhd55-projector",
      "text": "Optoma UHD55 Smart Projector - 4K UHD, 3D - Yes, Depth - 270 mm, Width - 315 mm, Height - 118 mm, Weight - 3.72 kg, Full HD - Yes, Focal length range - 12.81 - 16.74 mm, Built-in speaker(s) - Yes, HDMI ports quantity - 2, Native aspect ratio - 16:9, Projection technology - DLP, USB 2.0 ports quantity - 3, Light source brightness - 3600 Lumens, Contrast ratio (typical) - 1200000:1, Screen size compatibility - 866.1 - 7681 mm (34.1 - 302.4\"), VGA (D-Sub) ports quantity - 1, Projector native resolution - 2160p (3840x2160), High Dynamic Range (HDR) technology - High Dynamic Range 10 (HDR10), Hybrid Log-Gamma (HLG), "
  },
  {
      "slug": "hp-omen-max-16-ah0095ng-ultra-9-275hx-32gb-2tb-rtx-5080",
      "text": "HP OMEN Max 16-ah0095ng Gaming Laptop - Intel® Core™ Ultra 9-275HX - 32GB - 1TB SSD - NVIDIA® GeForce® RTX™ 5080, Model - B9QA1EA#ABD, Memory - 32GB, Display - 16 inches (2560 × 1600), 240Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5080, Processor - Intel® Core™ Ultra 9-275HX, Dimensions - 35.6 x 26.9 x 2.48 cm • 2.68 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "delonghi-air-conditioner-delonghi-pinguino-pac-ex130-cst-wifi",
      "text": "De'Longhi Pinguino PAC EX 130 CST WiFi Portable Air Conditioner, DIMENSIONS - 44.5 x 80.5 x 39 • 32 kg, Hose length - 1.1 m, NOISE LEVEL - 65 dB (A), REFRIGERANT - R290, DELIVERY SCOPE - Klimagerät, Abluftschlauch, Fernbedienung, Bedienungsanleitung, MAX. ROOM SIZE - 120 m³, COOLING CAPACITY - 3.3 kW, 13000 BTU/h, Special Features - Wi-Fi Care4Me series • De'Longhi Comfort App • Amazon Alexa, Google Assistant • Silent technology • DeLonghi Cool Surround™ technology • MyEcoRealFeel technology • Geofencing function: allows the device to be switched on automatically as soon as you approach your home so that you can stay in a perfectly air-conditioned home, ENERGY CONSUMPTION - 1.3 kWh, AIR FLOW (MAX SPEED) - 310 m³/h, ENERGY EFFICIENCY CLASS (SCALE) - A (A+++ - D), "
  },
  {
      "slug": "sony-ax43-handycam",
      "text": "Sony AX43 HandyCam, Zoom - Optical: 20x optical (250x digital zoom), Sensor - 8.29 Megapixel - 1/2.5\"-Type CMOS, Battery - Rechargeable lithium-ion Battery pack, 6.8VDC, 1960mAh., Speaker - Built-in, Wireless - 2.4GHz Wi-Fi (802.11b/g), Microphone - built-in, Audio In/out - 1x 1/8\" / 3.5 mm TS Mono Microphone Input , 1x 1/8\" / 3.5 mm TRS Stereo Headphone Output, Image stabilizer - Optical, Scope of Delivery - Sony FDR AX43 Handycam, V-series battery back, AC Adapter/charger, power cord, Micro HDMI Cable, Micro USB cable, "
  },
  {
      "slug": "apple-macbook-air-13-m3-8cpu-8gb-256gb-8gpu",
      "text": "MacBook Air 13\" - Apple M3 Chip 8GB Memory 256GB SSD - Integrated 8-core GPU, Model - MRXN3D/A, Memory - 8GB, Display - 13.6 inches (2560 x 1664), Storage - 256GB SSD, Graphics - Apple Integrated 8-core GPU, Processor - Apple M3, Dimensions - 30.41 x 21.5 x 1.13 cm • 1.24 kg, Operating System - macOS, Keyboard Language - German, "
  },
  {
      "slug": "sigma-16mm-1-4-dc-dn-micro-four-thirds",
      "text": "Sigma 16mm /1,4 DC DN Micro Four Thirds, "
  },
  {
      "slug": "apple-smartwatch-apple-watch-series-7-gps-aluminium-case-and-sport-band-41mm",
      "text": "Apple Watch Series 7 GPS, Aluminium Case, 41mm, Type - Smartwatch, Features - 2nd generation optical heart sensor; VO2max analysis; Fall detection; Always active altimeter; Sleep tracking; Apple Pay; Notification of irregular + high or low heart rate; Wireless charging, Band Size - 130-200mm, Battery Life - up to 18h, Connectivity - GPS, Bluetooth 5.0, WLAN, NFC, Compatibility - iOS, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 5 ATM + Dust resistant (IP6X), Activity Tracking - 24/7 heart rate tracking; Sleep tracking; Notification of irregular + high or low heart rate; Can track swimming, running, yoga, cycling and several other sport and gym profiles; Blood oxygen app; ECG app, Global Positioning - GPS, GLONASS, "
  },
  {
      "slug": "nintendo-switch-new-edition",
      "text": "NINTENDO Switch V2, Size - 102mm x 239mm x 28.4mm, Screen - Capacitive touch screen / 6.2 inch LCD / 1280x720 resolution, Weight - 398g, CPU/GPU - NVIDIA customised Tegra processor, Sensors - Accelerometer / gyroscope / brightness sensor, Battery life - Battery life can last for more than six hours, USB terminal - USB Type-C terminal, Video output - Maximum resolution 1920x1080, 60 fps, Charging time - 3 hours, System memory - 32 GB Please note approximately 6.2 GB of internal memory is reserved for use by the system., Product Edition - 2019 Edition, v2, Internal battery - Lithium ion battery / battery capacity 4310mAh, Scope of Delivery - Nintendo Switch Console, Nintendo Switch Dock, Two Joy-Con Controllers (Left and Right), Joy-Con Grip, Two Joy-Con Wrist Straps, Power Adapter, HDMI Cable, microSD card slot - Compatible with microSD, microSDHC and microSDXC memory cards., Communication features - Wireless LAN, Bluetooth 4.1, "
  },
  {
      "slug": "optoma-projector-optoma-uhz66",
      "text": "Optoma UHZ66 Laser Projector - 4K, Zoom - 1.6x (Manual), Inputs - 2 x HDMI 2.0 (1 with eARC), Outputs - 1 x Audio Out (3.5mm), 1 x USB-A (Power 1.5A), Speaker - 1, IP Rating - IP6X, Input Lag - 4.40 ms, Brightness - 4,000 lumens, Net Weight - 3 kg, Resolution - UHD (3840 × 2160), Canvas Size - 0.66m ~ 7.7m (26\" ~ 303\") diagonal, Aspect Ratio - 16:9, Focal Length - 20.91 mm ~ 32.62 mm, Gross Weight - 4.2 kg, Light Source - Laser, Power Supply - External, 100V ~ 240V, 50-60Hz, Control Ports - 1 x RJ45, 1 x RS232, Contrast Ratio - 500,000:1, Laser Lifespan - 30,000 hours, Remote Control - Card-style, Speaker Output - 15W, Projection Ratio - 1.4:1 ~ 2.24:1, Security Features - Security mount, Kensington Lock, Password-protected interface, Display Technology - DLP®, Displayable Colors - 1.073 billion (1073.4 million), Vertical Scan Rate - 24 ~ 240 Hz, Projection Distance - 1.3m - 9.4m, Horizontal Scan Rate - 15 ~ 140 kHz, Included Accessories - AC Power Cable, Remote Control (with 1x CR2025 battery), Basic User Manual, Operating Conditions - 0°C ~ 40°C, Max. Humidity 80%, Max. Altitude 10,000 ft, Computer Compatibility - UHD, FHD, UXGA, SXGA, WXGA, HD, XGA, SVGA, VGA, Mac, Dimensions (W x D x H) - 274 x 216 x 114 mm, Optional Wireless Model - UHDCast Pro, Compatible Image Formats - 4:3, 16:9, 16:10, Keystone Correction (Horizontal / Vertical) - ±30° / ±30°, "
  },
  {
      "slug": "apple-tablet-ipad-2022-wi-fi-256gb",
      "text": "Apple iPad (2022) - Wi-Fi - 256GB, Memory - 4GB, Battery - 28.6 Wh, Display - 10.9-inch Liquid Retina IPS (2360 x 1640), Storage - 256GB, Processor - Apple A14 Bionic, Dimensions - 19.08 x 26.13 x 0.53 cm (0.9kg), Rear Camera - 12MP Wide, Connectivity - Wi-Fi, Front Camera - 12 MP, Operating System - iPadOS 16, "
  },
  {
      "slug": "apple-macbook-pro-14-m3-8cpu-8gb-512gb-10gpu",
      "text": "MacBook Pro 14\" - Apple M3 Chip 8GB Memory 512GB SSD - Integrated 10-core GPU, Model - MR7J3D/A, Memory - 8GB, Display - 14.2 inches (3024 x 1964), Storage - 512GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M3, Dimensions - 22.12 x 31.26 x 1.55 cm • 1.55 kg, Operating System - macOS, Keyboard Language - German, "
  },
  {
      "slug": "apple-mac-mini-m2-8cpu-8gb-512gb-10gpu",
      "text": "Mac Mini - Apple M2 Chip 8GB Memory 512GB SSD Integrated 10-core GPU (Latest Model), Model - MMFK3D/A, Memory - 8GB, Storage - 512GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M2, Dimensions - 19.7 x 19.7 x 3.58 cm • 1.18 kg, Operating System - macOS, Keyboard Language - , "
  },
  {
      "slug": "fujifilm-x100vi",
      "text": "Fujifilm X100VI, EVF - Hybrid 0.66x OVF With 3.69m-dot OLED EVF, Lens - 23mm F2 Lens (Filter size 49mm), Screen - 3-inch 1.62m-dot Tilting Touchscreen, Sensor - 40MP APS-C X-Trans CMOS 5 HR Sensor, Storage - Single-slot SD card, Autofocus - 425-point intelligent Hybrid AF system, Interface - Micro-HDMI, USB-C PD/Data, Microphone input, Processor - X-Trans V, Connectivity - Wi-Fi & Bluetooth, Photo capture - 7728 x 5152p, Up to 20FPS Electronic shutter, 11FPS Mechanical Shutter, Stabilization - 6-stop in-body image Stabilisation, Video capture - 6.2K30p / 4K60p, Special Features - Built-in Flash,, Scope of delivery - Fujifilm X100VI camera, Fujifilm NP-W126S battery, Shoulder strap, Lens cap, "
  },
  {
      "slug": "nikon-z-50mm-f-1-8-s",
      "text": "Nikon Z 50mm f/1.8 S, Focus - Autofocus, Mount - Nikon Z mount, Weight - 14.64 oz / 415 g, Aperture - F/1.8 to F/16,  12 blades, Dimensions - 2.99 x 3.41\" / 76 x 86.5 mm (ø x L), Filter size - 62mm, Lens format - Full Frame, Focal length - 50mm, Image stabilizer - No, Scope of delivery - Nikon Z 50mmm f/1.8 S, Front and rear lens caps, "
  },
  {
      "slug": "insta360-x5-essentials-bundle",
      "text": "Insta360 X5 - Essentials Bundle, Photo - 72MP (11904 x 5952 px) DNG/JPEG, Video - Up to 8K30fps / 5.7K60fps / 4K120fps, Sensor - 1/1.28\" F2.0 (35mm equivalent 6mm), Battery - Up to 135 min run time (5.7K30fps) - Charge 80% in 20 min, 100% in 35 min (9V 2A), Storage - Micro SD (UHS-I V30 speed class or higher recommended), Waterproof - Up to 15m, Photo Modes - Photo (optional HDR), Interval, Starlapse, Burst, Video Modes - Video (built-in Active HDR), PureVideo, InstaFrame, Timelapse, TimeShift, Bullet Time, Loop Recording, Road Mode, Single-Lens Video, FreeFrame Video, Me Mode, Connectivity - Wi-Fi 802.11a/n/ac & Bluetooth BLE 5.2 / USB-C 3.0, ISO & Shutter - 100-6400 ISO / Photo: 1/8000 - 120s, Video: 1/8000 - to the limit of frames per second, Special Features - Active HDR, PureVideo, InstaFrame, Timelapse & TimeShift, Bullet Time, Me Mode, Voice Enhancement, 360° Audio, Built-in Wi-Fi, Waterproof to 15m, Scope of delivery - Battery, USB-C Charging Cable, Dimensions (W x H x D) - 46 x 124.5 x 38.2 mm - 200g, "
  },
  {
      "slug": "laptop-apple-macbook-air-late-2020-13-3-apple-m1-8gb-256gb-ssd",
      "text": "MacBook Air 13\" Apple M1 Chip 8GB Memory 256GB SSD Integrated 7-core GPU, Memory - 8GB, Display - 13.3 inches (2560 x 1600), Storage - 256GB SSD, Graphics - Apple Integrated 7-core GPU, Processor - Apple M1, Dimensions - 30.41 x 21.24 x 1.61 cm • 1.29 kg, Operating System - macOS Big Sur, Keyboard Language - German, "
  },
  {
      "slug": "sonos-move",
      "text": "Sonos Move, Type - Portable Speakers, Battery - 10h, Connectivity - Multiroom, Bluetooth, Wi-Fi, USB Type-C, Dimensions and weight - 16 cm x 12.6 cm x 24 cm, 3 kg, "
  },
  {
      "slug": "epson-projector-epson-eb-fh06",
      "text": "Epson EB-FH06 Projector - Full HD, Zoom - Manual, 1.2x, Weight - 2.7 kg, Features - Horizontal and vertical keystone correction, Split-Screen function, Built-in 2W speaker, Optional Wi-Fi connectivity, Lamp Life - Up to 6,000 hours (standard mode), up to 12,000 hours (economy mode), Lamp Type - UHE, 210 W, Brightness - 3,500 lumens (standard), 2,300 lumens (economy mode), Dimensions - 302 x 252 x 92 mm, Interfaces - USB 2.0 Type A, USB 2.0 Type B, HDMI inputs (2x), VGA input, Composite input, Optional Wireless LAN IEEE 802.11b/g/n, Resolution - Full HD 1080p (1920 x 1080), 16:9 aspect ratio, Noise Level - Normal mode: 37 dB(A), Economy mode: 28 dB(A), Throw Ratio - 1.22 – 1.47:1, Focal Length - 16.9 mm – 20.28 mm, Contrast Ratio - 16,000:1, Projection Size - 34 inches to 332 inches, Color Reproduction - Up to 1.07 billion colors, Display Technology - 3LCD Technology, RGB liquid crystal shutter, Keystone Correction - Vertical ±30° (automatic), Horizontal ±30° (manual), Projection Distance - 1.62 m – 1.95 m for a 60-inch screen, "
  },
  {
      "slug": "camera-alpha-7-iii-kit-28-70mm-lens",
      "text": "Sony Alpha 7 III Camera Kit with FE 28-70 mm f/3.5–5.6 OSS Lens, ISO - 50 - 204,800, Video - UHD 4K30p Video, Storage - Dual SD Card slot, USH-II & UHS-I, Mount Type - Sony E, Screen Type - 3\" Tilting 921,600-Dot Touchscreen LCD, View Finder - 2,359,00-Dot OLED EVF, Connectivity - 1x Micro-HDMI output / 1x3.5mm TRS Stereo microphone input, 1x3.5mm TRS headphone output / Type-C interface / Micro-B interface / WiFi / Bluetooth, Image Sensor - 24.2MP Full-Frame CMOS Sensor, Shutter Speed - 30' -  1/8000, Stabilisation - 5-Axis Sensor-Shift, Max Resolution - 6000 x 4000, Auto-Focus Points - 693-Point Phase-Detection AF System, Scope of delivery - Sony A7III, Sony FE 28-70mm f/3.5-5.6 OSS Lens, NP FZ100 battery, AC adapter, Micro USB cable, Body cap, Shoulder strap., "
  },
  {
      "slug": "yamaha-musical-instrument-yamaha-p-225-88-key-digital-piano",
      "text": "Yamaha P-225 88-Key Digital Piano, TYPE - Digital Piano, MODEL - P-225, CONNECTIONS - DC IN 12V,Headphones Standard stereo phone javk, Sustain pedal connection, USB to host, pedal unit, AUX OUT, CONNECTIVITY - , KEY FEATURES - Yamaha's P-225 digital piano with 88-key Graded Hammer Compact (GHC) keyboard is built to precise standards.The P-225 features the sound of Yamaha's premier concert grand piano, the CFX. It uses Virtual Resonance Modeling (VRM) Lite technology to reproduce the expressive, nuanced tonal changes of a real grand piano., OPERATING MODE - PA-150B or an equivalent recommended by Yamaha (Output: DC 12 V, 1.5 A), INCLUDED ACCESSORIES - Music rest, AMPLIFIERS & SPEAKERS - 2 x 7 W, 2 x 12 cm drivers, "
  },
  {
      "slug": "sony-camera-sony-alpha-7s-mark-iii-2020",
      "text": "Sony Alpha 7S III Mirrorless Camera Body, ISO - 80 - 409600, Mount Type - Sony E, Resolution - 12MP, Screen Type - LCD - SWIVELING SCREEN, Connectivity - WLAN, BLUETOOTH, Image Sensor - BSI-CMOS, Camera Format - MIRRORLESS, Shutter Speed - 30 - 1/8000 sec, Auto-Focus Points - 759 PHASE-DETECT AF POINTS, Dimensions & Weight - 12.9 x 8.1 x 9.7 cm • 0.7 kg, "
  },
  {
      "slug": "canon-camera-canon-eos-r5-body-2020",
      "text": "Canon EOS R5 Mirrorless Camera Body, ISO - 100-25600, Mount Type - Canon RF, Resolution - 45MP, Screen Type - LCD - MOVEABLE TOUCH SCREEN, Connectivity - WLAN, BLUETOOTH, Image Sensor - CMOS 35mm, Camera Format - MIRRORLESS, Shutter Speed - 30 - 1/8000 sec, Auto-Focus Points - 1053, Scope of delivery - Canon EOS R5, Camera strap, battery, Dimensions & Weight - 13.6 x 0.88 x 9.8 cm • 0.65 kg, "
  },
  {
      "slug": "sony-fe-16-35-mm-f2-8-gm-ii",
      "text": "Sony FE 16–35 mm F2.8 GM II, Focus - Autofocus (XD Linear Motors), Mount - Sony E mount, Length - 111.5mm, Weight - 547g, Aperture - F/2.8 to F/22, 11 blades, Lens type - Full Frame, Filter size - 82mm, Focal length - 16mm to 35mm, Image stabiliser - No (relies on in-body stabilization), Scope of delivery - Sony FE 16-35mm F/2.8 GM II lens, Front & Rear lens cap, Lens Hood (ALC-SH176), Minimum Focus Distance - 22cm, "
  },
  {
      "slug": "hp-victus-15-fa2073ng-i7-13260h-16gb-1tb-rtx-5060",
      "text": "HP Victus 15-fa2073ng Gaming Laptop - Intel® Core™ i7-13620H - 16GB - 1TB SSD - NVIDIA® GeForce® RTX™ 5060, Model - BV8D2EA#ABD, Memory - 16GB, Display - 15.6 inches (1920 x 1080 ), 144Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5060, Processor - Intel® Core™ i7-13620H, Dimensions - 35.8 x 25.5 x 2.4 cm • 2.29 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "sonos-roam-portable-bluetooth-speaker",
      "text": "Sonos Roam Portable Bluetooth Speaker, Type - Portable Bluetooth Speaker, Model - Roam, Power - Two class H digital amplifiers are perfectly matched to the unique acoustic architecture of the drivers and speakers., Battery - Up to 10h battery, Chassis - 1x Tweeter + 1x Midrange, Frequency - , Durability - IP67 Water rating, Fall-proof, Connections - USB-C, Connectivity - Bluetooth 5.0, WiFi, Airplay 2, Technologies - Voice control with Alexa, Google Assistant, Airplay 2, app controllable, Operating mode - Battery-powered, Special features - Smart design. Thanks to Trueplay ™ Tuning, the Roam automatically adapts to your surroundings and the content being played, and delivers amazingly clear, perfectly balanced sound. Precisely developed acoustics, unique Sonos sound via WiFi and Bluetooth., "
  },
  {
      "slug": "lenovo-thinkpad-e16-g3-ultra-7-255h-16gb-512gb",
      "text": "Lenovo ThinkPad E16 G3 Laptop - Intel® Core™ Ultra 7-255H - 16GB - 512GB SSD - Intel® Intel Arc Graphics, Model - 21SR000NGE, Memory - 16GB, Display - 16 inches (1920 × 1200), 60Hz, Storage - 512GB SSD, Graphics - Intel® Intel Arc Graphics, Processor - Intel® Core™ Ultra 7-255H, Dimensions - 35.6 x 24.9 x 1.7 cm • 1.63 kg, Operating System - Windows® 11 Pro, Keyboard Language - German, "
  },
  {
      "slug": "hp-omen-17-db1073ng-r-ai-7-350-32gb-1tb-rtx-5060",
      "text": "HP Omen 17-db1073ng Gaming Laptop - AMD Ryzen™ 7 AI 350 - 32GB - 1TB SSD - NVIDIA® GeForce® RTX™ 5060, EAN - 199251652219, Note - Does not come with Game Pass., Model - BV8F7EA#ABD, Memory - 32GB, Display - 17.3 inches (2560 x 1440), 240Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5060, Processor - AMD Ryzen™ 7 AI 350, Dimensions - 39.5 x 27.8 x 2.7 cm • 4.6 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "projector-eh-tw-610",
      "text": "Epson EH-TW 610 Projector - Full HD, Brightness - 3000 ANSI lumens, Connections - 1x USB 2.0 (Type A), 1x USB 2.0 (Type B), 1x VGA IN, 2x HDMI IN, 1x Composite IN, 1x MHL, 1x Cinch OUT, Aspect ratio - 16:9, Picture quality - Full HD, Projection size - < 3.00 m, 3D functionality - No, Special features - Automatic keystone correction, integrated loudspeaker, horizontal and vertical keystone correction, MHL audio / video interface, quick corner, split screen function, video processing: 10 bits, Screen resolution - 1920 x 1080 pixels, Projection distance - 1.35 - 1.64 m, "
  },
  {
      "slug": "sony-dualsense-edge-wireless-controller",
      "text": "Sony DualSense Edge Wireless Controller , Type - Wireless Controller, Model - DualSense Edge, Connections - USB-C, Key features - Engineered with a focus on high performance and customization, the DualSense Edge™ wireless controller allows you to create your own unique gaming experience so you can play your way., Button layout - Interchangeable back buttons can be configured for any button input, giving you game-changing actions and essential control options at your fingertips. Adjust the length of your left and right triggers manually - for an optimal gaming experience in every game., Compatibility - PS5, Operating mode - USB-C, Scope of delivery - DualSense Edge Wireless Controller, Braided USB Cable, 2 Stick Caps - Standard (attached to the controller), 2 Stick Caps - High Round Cap Type, 2 Stick Caps - Low Round Cap Type, 2 Back Buttons - Lever Type, 2 Back Buttons - Half Round Type , connector housing, protective bag, operating instructions, "
  },
  {
      "slug": "microsoft-xbox-series-x",
      "text": "Microsoft Xbox Series X, GPU - Custom RDNA 2, 52 CUs at 1.825 GHz 12.15 TFLOPS, Sizes - 301 mm × 151 mm × 151 mm, Storage - 16 GB GDDR6 with 320-bit bus connection, 10 GB at 560 GB / s, 6 GB at 336 GB / s, Connections - 1x power connection port, 1x HDMI 2.1 output, 1x storage expansion slot, 3x USB 3.1 ports, and 1x Ethernet port, Optical drive - 4K UHD Blu-Ray drive, Main Processor - Custom Zen 2 processor with, 8 cores at 3.8 GHz (3.66 GHz with SMT), External storage - Support for external USB 3.2 hard drives, Storage Capacity - 1 TB PCIe Gen 4 custom NVME SSD, 2.4 GB / s raw, 4.8 GB / s compressed, Expandable Storage - 1 TB expansion card, Target Performance - 4K resolution at 60 FPS, up to 120 FPS, "
  },
  {
      "slug": "acer-h6542bdk-projector",
      "text": "Acer H6542BDK Projector - Full HD, 3D - No, Depth - 225 mm, Width - 322 mm, Height - 91 mm, Weight - 2.6 kg, Smart TV - No, Lamp power - 245 W, Digital zoom - 2x, Ethernet LAN - No, Optical zoom - 1.1x, Audio (L/R) in - 1, Audio (L/R) out - 1, Zoom capability - No, HDMI ports quantity - 2, Projection distance - 1 - 10 m, Projector brightness - 4000 ANSI lumens, Projection technology - DLP, Supported video modes - 1080p, Supported aspect ratios - 4:3, 16:9, Contrast ratio (typical) - 10000:1, Screen size compatibility - 685.8 - 7620 mm (27 - 300\"), Number of built-in speakers - 1, Projector native resolution - 1080p (1920x1080), Compatible operating systems - Google Chrome PC, Mac PC, Windows PC, Service life of light source - 20000 h, Keystone correction, vertical - -40 - 40°, USB 2.0 Type-A ports quantity - 1, "
  },
  {
      "slug": "hp-victus-16-r1000ng-i7-14650hx-16gb-1tb-rtx-4060",
      "text": "HP Victus 16-r1000ng Gaming Laptop - Intel® Core™ i7-14650HX - 16GB - 1TB SSD - NVIDIA® GeForce® RTX 4060, * - Does not come with GamePass, EAN - 198828529596, Model - B26X4EA#ABD, Memory - 16GB, Display - 6.1 inches (1920 x 1080), FHD & IPS, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX 4060, Processor - Intel® Core™ i7-14650HX, Dimensions - 3.69 x 25.5 x 2.4 cm • 2.33 kg, Operating System - Windows® 11 Home, Keyboard Language - German, Maximum refresh rate - 144 Hz, "
  },
  {
      "slug": "htc-virtual-reality-htc-vive-xr-elite-business-edition",
      "text": "HTC Vive XR Elite - Business Edition VR Headset, Audio - Dual microphones for echo cancellation, Embedded speakers, Inputs - Dual integrated microphones, Volume button, Headset button, Battery - 24.32Wh Battery Cradle – removable & hot-swappable, Lightweight and quickly rechargeable with Lithium-Polymer Gel chemistry, Sensors - 4x Tracking cameras, 16 MP RGB camera, Depth sensor, G-sensor, Gyroscope, Proximity sensor, Tracking - VIVE Inside-out Tracking, Up to a 10x10m play space recommended, Processor - Qualcomm Snapdragon XR2, Microphone - Dual integrated microphones, Resolution - 1920x1920 pixels per eye (3840x1920 pixels combined), Connections - 1x USB 3.2 Gen-1 Type-C peripheral port, 1x USB 3.2 Gen-1 Type-C power port, Bluetooth 5.2 + BLE, Wi-Fi 6 + 6E (Wi-Fi 6E support is country-dependent), Refresh Rate - 90 Hz, Field of View - Up to 110 degrees, Business Edition - Access to VIVE Business+ software and services, Headset Tracking - 6 Degrees of Freedom (6 DoF) Inside-out Tracking, Storage & Memory - 128 GB storage, 12 GB RAM, Scope of Delivery - VIVE XR headset, Battery cradle, Controller  x2, Top Strap, Type-C to Type-C Cable, Type-A to Type-C Cable x 2, Lens Protection Card, Documentation (QSG / Safety Guide), IPD (Interpupillary Distance) - Accommodates 54-73mm, "
  },
  {
      "slug": "manali-graphics-card-manali-geforce-rtx-4090-gallardo",
      "text": "Manli GeForce RTX 4090 Gallardo Graphics Card, Memory - 24GB (GDDR6X), Dimensions - 7.83 x 19.9 x 10.3 cm • 2.29 kg, "
  },
  {
      "slug": "dreame-l40-ultra-robot-cleaner",
      "text": "Dreame L40 Ultra Robot Cleaner, Dimensions - 457 x 340 x 591 mm / 14 kg, Filter type - HEPA, Suction Power - 11,000 Pa, Special features - Powerful suction power of 11,000Pa, automatic maintenance of the 7-in-1 base station, five adjustable suction levels, control via voice command, liftable side brush, Scope of delivery - 1x vacuum robot, 1x base station1x TriCut brush, 2x wiper pad holders, 1x extension for base station ramp, 1x main brush (pre-assembled), 1x side brush (pre-assembled), 1x dust container (pre-assembled), 1x wiper pad (pre-assembled), 1x dust bag (pre-assembled), Maximum operating time - 260 mins, Area of ​​application - Tiles, hardwood floors, pets, laminates, furniture, parquet floors, cracks, carpets, allergies, Maximum volume of the water tank - 0.08 L, Charging time according to manufacturer - 3.5 hrs., "
  },
  {
      "slug": "dreame-x40-ultra-complete-robot-cleaner",
      "text": "Dreame X40 Ultra Robot Cleaner, Dimensions - 590 x 457 x 340 mm / 13 kg, Suction power - 12.000 Pa, operation area - Tiles, hardwood floors, laminates, parquet floors, fabric, carpets, Carpet detection - Yes, Special features - Independent cleaning of the mops with 70° hot water, ultra-strong 12,000 Pa suction power, with Mop Extend technology and extendable side brush, automatic dirt detection, fully automatic suction station, Wet mopping function - Yes, Maximum operating time - 260 mins, Pre-programmed cleaning - Yes, Charging time according to the manufacturer - 4.5 hours, "
  },
  {
      "slug": "roborock-vacuum-cleaner-roborock-roborock-s7plus",
      "text": "Roborock S7+ Vacuum & Mop Robot Cleaner with Automatic Dirt Disposal, FEATURES - Sonic Mopping technology • intelligent mop lifting • ultrasonic carpet recognition • new all-ruber brush • upgraded floating brush • compatible with Amazon Alexa • Google Assistant • LiDAR navigation creates detailed maps and identifies the rooms across up to four levels, Dimensions - 35 x 35 x 9.7 cm • 4.7 kg, APPLICATION - Allergies, hardwood floors, pets, parquet floors, carpets, SUCTION POWER - 2500 Pa, APP-CONTROLLED - Yes, MAX. RUNNING TIME - 180 min, Auto-emptying station - Six weeks without emptying • Certified constant suction power • Certified allergy tolerance • Suitable for dust bags • Intelligent dust collection • Dust container detection, MAX. VOLUME OF THE WATER TANK - 0.3L (up to 200 sqm), MAX. VOLUME OF THE DUST CONTAINER - 0.47L, "
  },
  {
      "slug": "adam-audio-t7v-studio-monitors",
      "text": "Adam Audio T7V Studio Monitor, "
  },
  {
      "slug": "shark-flexstyle-hair-styler-hair-dryer",
      "text": "Shark FlexStyle Hair Styler & Hair Dryer, Cold stage - Yes, Dimensions - 457 x 457 x 343 mm / 0.7 kg, Cable length - 2.5 m, Special features - 5 styling attachments, Shark FlexStyle measures temperature 1000 times per second, ensuring consistent air temperatures without heat damage. With just one twist, the Shark FlexStyle transforms from a powerful, fast hair dryer into a versatile multi-styler, Scope of delivery - Flex Style hairdryer, oval brush, paddle brush, 2x curling attachments, concentrator, diffuser, storage box, Temperature levels - 3 (Low, Medium, High), Maximum performance - 1400 watts, For more information - https://www.sharkclean.de/produkte/shark-flexstyle-haarstyler-und-trockner-hd440sleu-zidHD440SLEU, Can be used on damp hair - Yes, "
  },
  {
      "slug": "sony-fe-50mm-f-1-4-gm",
      "text": "Sony FE 50mm F1.4 GM, Focus - Autofocus, Mount - Sony E-mount, Weight - 516g, Aperture - F1.4 to F16, Lens type - Full Frame Lens, Dimensions - 80.6 x 96 mm  (ø x L), Filter size - 67mm, Focal length - 50mm, Image stabilizer - no, Scope of delivery - Sony FE 50mm f/1.4 GM Lens (Sony E), Front and rear lens cover, Lens Hood, Minimum Focus Distance - 41 cm, "
  },
  {
      "slug": "epson-eh-ls650-projector",
      "text": "Epson EH-LS650 Projector - 4K UHD, Zoom - Digital, factor: 1 - 2.5, Offset - 5:1, Weight - 7.4kg, Speaker - Yamaha 20W, Security - Kensington protection, Dimensions - 467 x 400 x 153 mm (width x depth x height), Resolution - 4K PRO-UHD, Connections - USB 2.0-A (3x), USB 2.0 Type B (service only), Wireless LAN IEEE 802.11a/b/g/n/ac, Bluetooth (optional), HDMI ARC, HDMI (HDCP 2.3) (2x), Remote, HDR Support - HDR10, HLG, Focal Length - 3.7mm, Image Format - 16:9, Contrast Ratio - 2,500,000:1, Color Brightness - 3,600 lumens (1,800 lumens in economy mode) according to IDMS15.4, Heat Dissipation - 897.6 BTU/hour (max), Projection Ratio - 0.25 - 0.62:1, White Brightness - 3,600 lumens (1,800 lumens in economy mode) in accordance with ISO 21118:2020, Operating Voltage - AC 100V - 240V, 50Hz - 60Hz, Power Consumption - 234W (On mode power consumption - Normal), 264W (Peak), 178W (Eco), Projection Lens F - 1.6, Scope of Delivery - Batteries for remote control, power cable, remote control without batteries, user guide, warranty document, Color Reproduction - Up to 1.07 billion colors, Projection Surface - 60 inches - 120 inches, Room Type/Application - 4K gaming, 4K streaming, games, home theater, sports, streaming, TV and box sets, Smartphone Connection - Not specified, Vertical 2D Refresh Rate - 192Hz - 240Hz, Compatible Operating Systems - Android, Projection Distance (Wide Angle) - 0.4 m (77-inch canvas), "
  },
  {
      "slug": "camera-dsc-rx-10iv",
      "text": "Sony DSC-RX 10IV, "
  },
  {
      "slug": "razer-blade-16-2024-i9-14900hx-16gb-2tb-rtx-4070",
      "text": "Razer Blade 16 Gaming Laptop - Intel® Core™ i9-14900HX - 16GB - 1TB SSD - NVIDIA® GeForce® RTX 4070, Model - RZ09-0510SGN3-R3G1, Memory - 16GB, Display - 16 inches (2560 x 1600), 240, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX 4070, Processor - Intel® Core™ i9-14900HX, Dimensions - 24.4 x 22 x 35.5 cm • 2.45 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "acer-h6523abdp-dlp-projector",
      "text": "Acer H6523ABDP DLP Projector - Full HD, Brightness - 3500 ANSI lumens, Connections - USB, Composite Video input (Cinch), HDMI x2, MHL, VGA input (D-Sub), Mini Jack input, Mini Jack output, RS232C, Aspect ratio - 16:9, Picture quality - Full HD, Projection size - 29 (0.74m) - 300 (7.62m) inches, 3D functionality - 3D ready, Special features - WiFi ready (WiFi dongle optionally available), HDCP support, ColorBoost 3D, ColorSafe II, Sport mode, BlueLightShield, Front projection, rear projection, ceiling projection, Screen resolution - 1920 x 1080, Projection distance - 1.00 - 9.76m, "
  },
  {
      "slug": "samsung-galaxy-watch-5-pro-45mm",
      "text": "Samsung Galaxy Watch5 Pro Smartwatch, Titanium Case, 45mm, Type - Smartwatch, Sensors - Accelerometer, Barometer, Ambient Light Sensor, Compass, Pulse oximeter (Sp02), Samsung BioActive Sensor (Herzfrequenz, ECG und BIA), Features - Premium Titanium design with Sapphire Crystal, Samsung + Google Pay, Advanced Sleep Monitoring, Continuous Blood Pressure and ECG Measurement, Training Recommendations based on Data, Smart Fall Detection, Special Functions for Outdoor Athletes (Route Target Workout, Track Back, Turn by Turn Navigation), Advanced Body Composition Analysis, Women's Health (Track Fertility Windows, Ovulation Cycles and Periods), Google Apps + OS, Strong Battery Performance & Fast Wireless Charging, Band Size - M/L, Battery Life - Up to 80 hours, Connectivity - Bluetooth® 5.2, WLAN 2.4 GHz & 5 GHz, NFC, GPS, Compatibility - Android 8.0 and higher, Build Material - Titanium Case and Sport Band, Music playback - On-board music storage, Operating System - Wear OS, Water/Dust proof - 5ATM / IP68 / MIL-STD-810H, Activity Tracking - Blood oxygen, Blood pressure, Heart rate, Bioelectrical impedance analysis (BIA), Global Positioning - GPS, Glonass, Beidou, Galileo, "
  },
  {
      "slug": "asus-rog-fa507ui-hq010w-r9-8945h-16gb-1tb-rtx-4070",
      "text": "Asus TUF FA507UI-HQ010W Gaming Laptop - AMD Ryzen™ 7 8945HS - 16GB - 1TB SSD - NVIDIA® GeForce® RTX 4070, Model - 90NR0I65-M001R0, Memory - 16GB, Display - 15.5 inches (2560 x 1440), 165Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX 4070, Processor - AMD Ryzen™ 7 8945HS, Dimensions - 1 x 1 x 1 cm • 1 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "roborock-vacuum-cleaner-roborock-s7-maxv-plus",
      "text": "Roborock S7 MaxV Plus Vacuum & Mop Robot Cleaner with Automatic Dirt Disposal, Control - App controlled, Runtime - 180 minutes, Dimensions - 35.3 x 35 x 9.7 cm / 4.65 kg, Suitable For - Tiles, hardwood floors, laminates, parquet floors, carpets, stone floors, Suction power - 5100Pa, Wipe function - yes, Special features - Ultrasonic wiping function; Laser Distance Sensors (LDS) & AI Dual Camera for 360° Coverage; Intelligent path planning with real-time space maps and selective single space planning; Obstacle overcome up to 20 mm (e.g. strips, carpets); Suction station with or without dust bag, Scope of delivery - User manual, Roborock S7 MaxV Plus with Extraction Station, Charging station with power supply, Dust filter, Wipes, Instruction manual, Water tank volume - 0.2 L, Dust container volume - 0.4 L, "
  },
  {
      "slug": "nintendo-console-switch-2-mario-kart-world-bundle",
      "text": "Nintendo Switch 2 + Mario Kart World Bundle, Weight - 534 g, Display - LCD, Platform - Nintendo Switch 2, Dimensions - 13.9 x 272 x 166mm, Charging time - 3 h, Cables included - HDMI, USB Type-C, Wi-Fi standards - Wi-Fi 6 (802.11ax), Battery capacity - 5220 mAh, Display diagonal - 20.1 cm (7.9\"), Scope of Delivery - Console, Joy-Con 2 (L&R), 2 x Joy-Con 2 wrist straps, Nintendo Switch 2 Dock, Joy-Con 2 holder, power adapter, Ultra High Speed ​​HDMI™ Cable, Documents, Battery life (max) - 6.5 h, Display resolution - 1920 x 1080 pixels, USB connector type - USB Type-C, Maximum refresh rate - 120 Hz, Headphone connectivity - 3.5 mm, Compatible memory cards - MicroSD (TransFlash), MicroSDXC, Built-in memory capacity - 256 GB, Maximum memory card size - 2 TB, External display resolution - 3840 x 2160 pixels, High Dynamic Range (HDR) technology - High Dynamic Range 10 (HDR10), "
  },
  {
      "slug": "dyson-hair-care-dyson-airwrap-complete-long",
      "text": "Dyson Airwrap Complete Long, Dimensions - 167 x 384 x 188 mm / 0.58 kg, Box contents - DYSON Airwrap™ Complete Long hair styler, drying attachment for a smooth finish, long AirwrapTM curling attachment 30 mm, long AirwrapTM curling attachment 40 mm, round volume brush, firm smoothing brush, soft smoothing brush, filter cleaning brush, Maximum power - 1300 watts, Special features - Can be used on damp hair, measures the temperature up to 40 times per second; Removable filter sleeve; LED display; 3 airflow levels, primary flow 13 litres/minute; drying time 3.74 g/min; Volume: 82 dB (A), Temperature levels - 3 temperature levels (max. 90°C) and button for the cold setting (28 °C), "
  },
  {
      "slug": "apple-apple-watch-series-9-gps-aluminium-case-and-sport-band-41mm",
      "text": "Apple Watch Series 9 GPS, Aluminium Case, 41mm, Type - Smartwatch, Features - Powered by new S9 SiP, New Double Tap Gesture (answer a call, open a notification, play and pause music and more), 2x Brighter Display, Always-On Retina display, Faster on-device Siri with health data access, Precision Finding for iPhone, Crash detection, Fall Detection, Heart arrhythmia, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Pair Multiple Watches with Family Setup, Sleep Stages, Apple Pay, Listen Music, Podcast, Audiobooks, Band Size - S/M, Battery Life - Up to 18h / 36h in Low Power Mode, Connectivity - GPS, Wi-Fi, Bluetooth 5.0, NFC, Compatibility - iOS, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 5ATM, Activity Tracking - Continuous Heart Rate Tracking, Steps taken, Hours slept, Resting heart rate, Target heart rate, Skin temperature, Multisport workouts; Strength training, HIIT, Pilates, Meditation, Swimming, Running, Yoga, Cycling and Other Sports, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "lg-monitor-lg-ultragear-32gr93u-32-32gr93u-b-aeu",
      "text": "LG - 32\" UltraGear 32GR93U 32GR93U-B.AEU, Model - 32GR93U-B.AEU, Display - IPS 31.5 inches (3840 x 2160), 144Hz, Dimensions - 71.3 x 61.12 x 27.8 cm • 8.3 kg, Connectivity - 2x HDMI 2.1, 1x DisplayPort 1.4, 2x USB-A 3.0, 1x USB-B 3.0, Response Time - 1ms, High Dynamic Range (HDR) - Yes, "
  },
  {
      "slug": "canon-eos-rp-rf-4-0-7-1-24-105-mm-is-stm-kit",
      "text": "Canon EOS RP Camera Kit with RF 24-105 mm f/4.0-7.1 IS STM Kit Lens, Sensor - CMOS, Full frame, Display - 3 inch, Clear View LCD II can be rotated and swiveled, Aperture - f./4-7.1, Lens type - Travel zoom, standard zoom, Focal length - 24-105 mm, Special features - Eye autofocus, silent mode, focus bracketing for impressive macro photos, Light sensitivity - 100-40000 (ISO expandable: 50-102400), Scope of delivery - EOS RP housing, camera housing cover RF-5, carrying strap ER-EOS RP, battery charger LC-E17E, battery LP-E17 (OT), cover for battery compartment, AC power cord (EU / SK), RF 24-105mm F4 -7.1 IS STM, lens cap E-67 II, lens rear cap RF, instructions, Bayonet connection - Canon R-Mount, Optical / digital zoom - - / No, Effective photo resolution - 26.2 MP, "
  },
  {
      "slug": "samsung-tablet-galaxy-tab-s9-fe-wifi-8gb-128gb-c8fb29ca-79c6-4a4b-a68e-5d9736c9c5a0",
      "text": "Samsung Tablet, Galaxy Tab S9 FE + - WiFi - Android - 128GB, Memory - 8GB, Battery - 10090 mAh, Display - 12.4-inch LCD (2560x1600), Storage - 128GB, Processor - Samsung Exynos 1380, Dimensions - 18.5 x 28.5 x 0.6 cm (0.5kg), Rear Camera - 8MP, Connectivity - WiFi, Front Camera - 12MP, Operating System - Android, "
  },
  {
      "slug": "canon-rf-85mm-f1-2-l-usm",
      "text": "Canon RF 85mm F1.2 L USM, Focus - Autofocus, Mount - Canon RF mount, Weight - 2.63 lb / 1195 g, Aperture - F1.2 to F16,  9 blades, Dimensions - 4.06 x 4.62\" / 103.2 x 117.3 mm (ø x L), Filter size - 82mm, Lens format - Full Frame, Focal length - 85mm, Image stabilizer - No, Scope of delivery - Canon RF 85mm F1.2 L USM lens, front and Rear lens cap, "
  },
  {
      "slug": "apple-macbook-air-15-m3-8cpu-8gb-256gb-10gpu",
      "text": "MacBook Air 15\" - Apple M3 - 8GB Memory 256GB SSD - Integrated 10-core GPU, Model - MRYM3D/A, Memory - 8GB, Display - 15.3 inches (2880 x 1864), Storage - 256GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M3, Dimensions - 34.04 x 23.76 x 1.15 cm • 1.51 kg, Operating System - macOS, Keyboard Language - German, "
  },
  {
      "slug": "xgimi-horizon-pro-4k-projector",
      "text": "XGIMI HORIZON Pro Projector - 4K, Brightness - 2200 ANSI lumens, Connections - 1x DC, 2x HDMI 2.0, 2x USB 2.0, 1x LAN, Loop Through (Audio), 1x Headphone, 1x Optical, Dual-band 2.4/5GHz, 802.11a/b/g/n, Wifi, Bluetooth, Aspect ratio - 16:9, Picture quality - 4K, Projection size - 30 - 300 inches, 3D functionality - No, Special features - 4K crystal-clear picture with X-Vue 2.0, Android TV, Game mode, Intelligent screen alignment and auto-focus, Screen resolution - 3840 x 2160 pixels, "
  },
  {
      "slug": "canon-rf-50mm-f1-2-l-usm",
      "text": "Canon RF 50mm F1.2 L USM, Focus - Autofocus, Mount - Canon RF mount, Weight - 2.09 lb / 950 g, Lens Type - Full Frame, Dimensions - 3.54 x 4.25\" / 89.8 x 108 mm, Filter size - 77mm, Image Stabilizer - No, Scope of Delivery - RF 50mm F1.2 L USM lens, front and rear cover, Minimum focus distance - 1.31' / 40 cm, "
  },
  {
      "slug": "google-smartphone-google-pixel-9-pro-xl-16gb-256gb",
      "text": "Google Pixel 9 Pro XL Smartphone - 256GB - Dual SIM, Memory - 16GB, Battery - 5060 mAh, Display - 6.8-inch LTPO - OLED (1344 × 2992), Storage - 256GB, Processor - , Dimensions - , Rear Camera - 50MP+48MP+48MP, Connectivity - 5G, Front Camera - 42MP, Operating System - Android 14, "
  },
  {
      "slug": "acer-h6518sti-projector",
      "text": "Acer H6518STi Projector - Full HD, Feature - 100\" image in full 1080p Full HD, Contrast - 10,000:1, Brightness - 3500 ANSI lumens, WLAN ready - Yes, Connections - 2x HDMI with HDCP, VGA, Composite Video, Audio In, 2x USB Type A (1x In for wireless adapter, 1x DC Out 5V), Audio Out, RS232, Aspect ratio - 16:9, Picture quality - Full HD, Projection size - 1.15 - 7.70 m, 3D functionality - 3D ready, Screen resolution - 1920 x 1080 pixels, Keystone Correction - Yes, Projection distance - 0.50 - 3.40 m, Wireless Projection - Easy wireless projection options as a dongle/stick, "
  },
  {
      "slug": "samsung-tablet-galaxy-tab-s8-5g-256gb",
      "text": "Samsung Tablet, Galaxy Tab S8+ (2022) - 5G - Android - 256GB, Memory - 8GB, Battery - 10090 mAh, Display - 12.4-inch sAMOLED (120Hz) (2800 x 1752), Storage - 256GB, Processor - Qualcomm Snapdragon 8 Gen 1, Dimensions - 18.5 x 28.5 x 0.6 cm (0.5kg), Rear Camera - 13MP + 6MP Ultrawide, Connectivity - 5G, Front Camera - 12MP Ultrawide, Operating System - Android 12, "
  },
  {
      "slug": "apple-accessories-apple-usb-c-power-adapter",
      "text": "Apple USB-C Power Adapter, "
  },
  {
      "slug": "optoma-uhz65lv-projector",
      "text": "Optoma UHZ65LV Laser Projector - 4K UHD, Zoom - x1.6, USB Power - Use USB power to power an HDMI dongle, such as Google Chromecast, Brightness - 5000 ANSI lumens, Frame Rate - 24fps, Lens Shift - Vertical +15%, Connections - 1 x HDMI 2.0, 1 x HDMI 1.4a 3D Support + MHL, 1 x VGA (YPbPr/RGB), 1 x audio 3.5mm, 1 x USB-A service, Aspect ratio - 16:9, Light Source - Laser, Picture quality - 4K UHD, Projection size - 0.67m - 7.68m, 3D functionality - Full 3D, Special features - Laser 4K UHD resolution, HDR and HLG compatible, Bright images even in daylight, Screen resolution - 3840 x 2160 pixels, Projection distance - 1.3m - 9.3m, "
  },
  {
      "slug": "google-smartphone-google-pixel-9-pro-fold-16gb-256gb",
      "text": "Google Pixel 9 Pro Fold Smartphone - 256GB - Dual SIM, Memory - 16GB, Battery - 4650 mAh, Display - 6.3 (8.0)-inch OLED (2076 x 2152), Storage - 256GB, Processor - , Dimensions - , Rear Camera - 48MP+10.5MP+10.8MP, Connectivity - 5G, Front Camera - 10MP, Operating System - Android 14, "
  },
  {
      "slug": "apple-watch-ultra-gps-cellular-titanium-case-and-green-alpine-loop-49mm-m",
      "text": "Apple Watch Ultra GPS + Cellular, Titanium Case, 49mm, Type - Smartwatch, Features - Apple Pay, Always-On Retina Display, Big and Bright Display, Customizable New Action Button, 86-decibel Siren, Durable from -20° C to 55° C, Dual-frequency GPS, Wayfinder Watch Face, Temperature Sensing, Sleep Tracking, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Crash Detection, Fall Detection, Emergency SOS, Stay Connected with Cellular, International Emergency Calling, Blood Oxygen App, ECG App, Pair Multiple Watches with Family Setup, Pro Running Features, Strong Battery Performance, Oceanic+ App for Scuba Divers, Band Size - M (145–190mm), Case Size - 49mm, Battery Life - Up to 36h, Connectivity - GPS, Wi-Fi, Bluetooth 5.0, NFC, Compatibility - iOS, Build Material - Titanium Case and Alpine Loop, Music playback - Yes, Water/Dust proof - Up to 10 ATM / MIL-STD-810H, Activity Tracking - Heart Rate, Running (Stride Length, Ground Contact Time, Vertical Oscillation), Blood Oxygen Tracking, Depth/Pressure/Location Tracking for Divers, Multisport Workouts, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "sony-tv-xr42a90kaep",
      "text": "Sony TV 42\" XR-42A90KAEP OLED 4K, Screen - Flat, Delivery - OLED TV, remote control with voice control and backlight (RMF-TX621E) incl. batteries, table stand, power cable, quick configuration, user manual, Processor - Cognitive Processor XR, Model Name - XR42A90KAEP, Connections - 4x HDMI, 2x USB, digital audio output (optical), LAN, CI+, Product type - OLED TV 4K, VESA standard - 200 x 200, Receptions Types - DVB-T2 HD, DVB-C, DVB-S, DVB-S2, Special Features - Dolby Atmos, S-Force Front Surround, S-Master Digital Amplifier, DTS Digital Surround, Acoustic Auto Calibration, Dimensions with stand - 933mm / 551mm / 225mm, Dimensions without stand - 933mm / 546mm / 57mm, HDR (High Dynamic Range) - HDR10, Hybrid Log Gamma (HLG), Dolby Vision, "
  },
  {
      "slug": "xgimi-mogo-pro-portable-projector",
      "text": "XGIMI MoGo Pro+ Portable Projector - Full HD, Brightness - 300 ANSI lumens, Connections - 1x DC, 2x HDMI, 1x USB 2.0, 1x Headphone, Dual-band 2.4/5GHz, 802.11a/b/g/n, Wifi, Bluetooth 4.2/5.0, Aspect ratio - 16:9, Picture quality - Full HD, Projection size - 76 inches at 2 m, 3D functionality - Full 3D, Special features - True cinematic projection with 100+ inches display, Premium sound by Harman-Kardon, Official Android TV system with 5000+ apps, Voice control with Google Assistant, Mirroring from your phone via Chromecast, Built-in Battery, Screen resolution - 1920 x 1080 pixels, "
  },
  {
      "slug": "asus-accessory-asus-rog-ally-gaming-charger-dock",
      "text": "ASUS ROG Ally Gaming Charger Dock, Ports - USB-C x 1, USB A x 1, HDMI 2.0 x1, Weight - 145 g, Features - Recharge console, connect an external display, and plug in your peripherals via USB Type-A, all in one device, Dimensions - 33 x 68 x 49 mm, Cable length - 0.2 m, Input current - 1.5 A, Input voltage - 100 - 240 V, Maximum power - 65 W, Power plug type - Type G, Power source type - AC, USB-C Compatibility - Phones, Laptops, Game Console, Tablet, Maximum output voltage - 21 V, Minimum output voltage - 5 V, USB 2.0 ports quantity - 1, Fast charging technology - Power Delivery 3.0, USB Power Delivery up to - 65 W, USB Type-C ports quantity - 1, "
  },
  {
      "slug": "acer-projector-acer-h6523bd",
      "text": "Acer H6523BD Projector - Full HD, Brightness - 3500 ANSI lumens, Connections - 2x HDMI 1.4a, 1x VGA, 1x composite video, 1x audio in, 1x audio out, Aspect ratio - 16:9 (native) / 4:3 (supported), Picture quality - Full HD, Projection size - 0.71 - 7.62 m, 3D functionality - Full 3D, Special features - The perfect choice for the best home entertainment. LumiSense, ColorBoost3D and ColorSafe II ensure vivid, lifelike colors, while the exclusive soccer mode realistically reproduces soccer games., Screen resolution - 1920 x 1080 pixels, Projection distance - 1.00 - 9.76 m, "
  },
  {
      "slug": "apple-tablet-ipad-2022-5g-256gb",
      "text": "Apple iPad (2022) - Wi-Fi + Cellular - 256GB, Memory - 4GB, Battery - 28.6 Wh, Display - 10.9-inch Liquid Retina IPS (2360 x 1640), Storage - 256GB, Processor - Apple A14 Bionic, Dimensions - 19.08 x 26.13 x 0.53 cm (0.9kg), Rear Camera - 12MP Wide, Connectivity - 5G, Front Camera - 12MP, Operating System - iPadOS 16, "
  },
  {
      "slug": "sony-fe-24-105mm-f4-g-oss",
      "text": "Sony FE 24-105mm f/4 G OSS, Focus - Autofocus, Mount - Sony E mount, Weight - 1.46 lb / 663 g, Aperture - F/4 to F/22,  7 blades, Lens type - Full Frame, Dimensions - 3.28 x 4.46\" / 83.4 x 113.3 mm (ø x L), Filter size - 77mm, Focal length - 24mm to 105mm, Image stabilizer - Yes, Scope of delivery - Sony FE 24-105 F/4 G OSS lens, Front and Rear lens cap, Lens Hood, Minimum Focus Distance - 1.25' / 38 cm, "
  },
  {
      "slug": "benq-tk850",
      "text": "Benq TK850 Projector - 4K UHD, Brightness - 3000 ANSI lumens, Connections - 2x HDMI,USB Type A, Mini-USB, Aspect ratio - 16:9, Picture quality - 4K UHD, Projection size - 30 - 300 inches, 3D functionality - Full 3D, Special features - True 4k UHD with 8.3 million distinctive pixels, HDR-PRO™ w/ Dynamic Iris for deeper black and more detail, Vertical lens shift for hassle-free installation, Screen resolution - 3840 x 2160 pixels, Projection distance - , "
  },
  {
      "slug": "acer-h6523abd-projector",
      "text": "Acer H6523ABD Projector - Full HD, Brightness - 3500 ANSI lumens, Connections - 2x HDMI with HDCP, VGA analog D-Sub, composite video RCA, audio in jack (3.5mm), USB type A - DC out 5V, audio out jack (3.5mm), Aspect ratio - 16:9 (native) / 4:3 (supported), Picture quality - Full HD, Projection size - 0.71 - 7.62 m, 3D functionality - Full 3D, Special features - Equipped with first-class picture quality in Full HD resolution and a brightness of 3,500 ANSI lumens, the Acer H6523BD is the perfect choice for the best home entertainment. LumiSense, ColorBoost3D and ColorSafe II ensure vivid, lifelike colors, while the exclusive soccer mode realistically reproduces soccer games., Screen resolution - 1920 x 1080 pixels, Projection distance - 1.00 - 9.76 m, "
  },
  {
      "slug": "acer-h6523bdx-projector",
      "text": "Acer H6523BDX Projector - Full HD, Brightness - 3500 ANSI lumens, Connections - 2 x HDMI, 1 x VGA, 1 x video cinch, 1 x 3.5 mm jack, 1 x RS-232C, 1 x USB-A, Aspect ratio - 16:9, Picture quality - Full HD, Projection size - 0.71 - 7.62 m, 3D functionality - 3D Ready, Special features - Keystone correction, Sports Mode, LumiSense, ColorBoost3D and ColorSafe II for vivid life-like colours., Screen resolution - 1920 x 1080 pixels, Projection distance - 1.00 - 9.76 m, "
  },
  {
      "slug": "apple-macbook-air-15-m3-8cpu-8gb-512gb-10gpu",
      "text": "MacBook Air 15\" - Apple M3 Chip 8GB Memory 512GB SSD - Integrated 10-core GPU, Model - MRYN3D/A, Memory - 8GB, Display - 15.3 inches (2880 x 1864), Storage - 512GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M3, Dimensions - 34.04 x 23.76 x 1.15 cm • 1.51 kg, Operating System - macOS, Keyboard Language - German, "
  },
  {
      "slug": "optoma-cinemax-d2-smart-laser-projector",
      "text": "Optoma CinemaX D2 Smart Laser Projector - 4K UHD, Brightness - 3000 ANSI lumens, Connections - 3 x HDMI 2.0, 1 x RS232, 1 x S/PDIF, 1 x USB-A power 1.5A, 1 x Audio 3.5mm, Aspect ratio - 16:9, Picture quality - 4K UHD, Projection size - 2.16m - 3.05m, 3D functionality - 3D ready, Special features - True 4K UHD resolution with 8.3 million on-screen pixels, Screen resolution - 3840 x 2160 pixels, Projection distance - 0.47m - 0.66m, "
  },
  {
      "slug": "razer-blade-18-i9-13950hx-32gb-2tb-rtx-4090",
      "text": "Razer Blade 18 Gaming Laptop - Intel® Core™ i9-13950HX - 32GB - 2TB SSD - NVIDIA® GeForce® RTX 4090, Model - RZ09-0484UGM4-R3G1, Memory - 32GB, Display - 18 inches (2560 x 1600), 240Hz, Storage - 2TB SSD, Graphics - NVIDIA® GeForce® RTX 4090, Processor - Intel® Core™ i9-13950HX, Dimensions - 39.9 x 27.5 x 2.19 cm • 3.2 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "acer-h-6521-abd",
      "text": "Acer H6521ABD Projector - Full HD+, Brightness - 3500 ANSI lumens, Connections - 1x HDMI IN 1.4a, 1x 15-pin D-Sub, 1x RCA IN, 1x 3.5 mm jack, 1x DC OUT, 1x USB A, Aspect ratio - 16:10 (native) / 16:9 & 4:3 (supported), Picture quality - Full HD+, Projection size - 0.73 - 7.62 m, 3D functionality - 3D Ready, Special features - NA, Screen resolution - 1920 x 1200 pixels, Projection distance - 1 - 9.5 m, "
  },
  {
      "slug": "acer-projector-acer-x138whp",
      "text": "Acer X138WHP Projector - WXGA, Brightness - 4000 ANSI lumens, Connections - 1x HDMI (HDCP), 1x VGA IN, 1x PC Audio IN, 1x Composite Video (RCA), 1x PC Audio OUT, 1x VGA OUT, 1x RS232, 1x USB Type A, Aspect ratio - 16:10, Picture quality - WXGA, Projection size - 0.75 - 7.62 m, 3D functionality - Full 3D, Special features - , Screen resolution - 1280 x 800 pixels, Projection distance - 1.0 - 10 m, "
  },
  {
      "slug": "acer-h6800a-projector",
      "text": "Acer H6800a Projector - 4K UHD, Brightness - 3600 ANSI lumens, Connections - Input: 2x HDMI, 1x VGA, 1x 3.5 mm jack / Outputs: 1x optical, 1x 3.5 mm jack / Others: 1x RS-232C, 1x USB-A, Aspect ratio - 16:9, Picture quality - 4K UHD, Projection size - 0.76 - 7.62 m, 3D functionality - 3D Ready, Special features - The H6800a is equipped with a SmartTV functionality. So you can easily connect the projector to the Internet and download apps via a user interface. 3,600 ANSI lumens: the living room does not have to be completely darkened., Screen resolution - 3840 x 2160 pixels, Projection distance - 1.00 - 10.00 m, "
  },
  {
      "slug": "samsung-tablet-galaxy-tab-s9-5g-128gb-8gb",
      "text": "Samsung Tablet, Galaxy Tab S9 - 5G - Android - 128GB, Memory - 8GB, Battery - 8400 mAh, Display - 11-inch Dynamic AMOLED 2X (2560x1600), Storage - 128GB, Processor - Qualcomm Snapdragon® 8 Gen 2, Dimensions - 16.5 x 25.4 x 0.6 cm (0.5kg), Rear Camera - 13MP, Connectivity - 5G, Front Camera - 12MP, Operating System - Android, "
  },
  {
      "slug": "xgimi-halo-portable-projector-089c9a83-b4fd-4322-9b97-ecce881af997",
      "text": "XGIMI Halo+ Portable Projector - Full HD, Brightness - 900 ANSI lumens, Connections - Input: 1x DC, 1x HDMI 2.0, 1x USB 2.0. Output: 1x 3.5mm headphone. WiFi: Dual-band 2.4/5GHz, 802.11a/b/g/b/ac. Bluetooth: Bluetooth 5.0/BLE, Aspect ratio - 16:9, Picture quality - Full HD, Projection size - < 300 inches, 3D functionality - Full 3D, Special features - WiFi, Bluetooth, Chromecast built-in, Sound by Harman Kardon / Dolby Audio, 16GB RAM, Keystone correction, Androidtv 10.0, Game Mode, Auto-focus, Intelligent screen alignment, Screen resolution - 1920 x 1080 pixels, Projection distance - -, "
  },
  {
      "slug": "thrustmaster-th8a-add-on-gear-shifter",
      "text": "Thrustmaster TH8A Add-On Gear Shifter, Connections - Bus Powered, On Xbox One - works with the TMX, the TX Racing Wheel and TS-XW., Key Features - H.E.A.R.T HallEffect AccuRate Technology, adjustable mounting clamps. Realistic and authentic, versatile, stable and precise, adaptability and comfort upgradable., Compatibility - On PC: works with all racing wheels on the market, Device interface - USB, On PS3™ and PS4™ - works with the T500RS, Ferrari F1 Wheel Integral T500, T300RS, T300 Ferrari GTE, T150 and T-GT racing wheels., Connectivity technology - Wired, Gaming platforms supported - PC, PlayStation 4, PlayStation 5, Playstation 3, Xbox, "
  },
  {
      "slug": "yamaha-musical-instrument-yamaha-p-125a-b-digital-piano",
      "text": "Yamaha P-125a B Digital Piano, Type - Digital Piano, Model - P-125a B, Connections - USB to host connections, Key features - The P-125 has the sound of Yamaha's famous CFIII 9-foot concert grand piano, giving it incredible dynamics and expressiveness. In addition, the P-125 has drum loops that let you keep the beat at all times. The P-125 offers a new 2-way loudspeaker system and the latest acoustic technology and an authentic sound experience that is probably unique in this price range, Other features - 24 tones, Pure CF Sound Engine, 192-note polyphony (max). Dual, split, and duo function. 20 rythms (drums + bass), Amplifier Power - 2x7Watts, "
  },
  {
      "slug": "optoma-projector-optoma-uhd30",
      "text": "Optoma UHD30 Projector - 4K, Brightness - 3400 ANSI lumens, Connections - 2x HDMI, 1x USB, VGA, Audio In, Audio Out, Aspect ratio - 16:9, Picture quality - 4K, Projection size - 0.87 - 7.68 m, 3D functionality - Full 3D, Special features - All-rounder projector, impressive pictures in 4K cinema quality with a lightning-fast refresh rate of 240Hz for smooth game play. Excellent color depth, crystal clear details and brilliant contrast. High Dynamic Range (HDR) and HLG compatibility, Full 3D and HDMI 2.0, Screen resolution - 3840 x 2160 pixels, Projection distance - 1.22 m - 14.9 m, "
  },
  {
      "slug": "apple-11-ipad-air-2024-wi-fi-8gb-128gb",
      "text": "Apple 11\" iPad Air (2024) - Wi-Fi - M2 - 128GB, Memory - 8GB, Battery - 28,93 Wh, Display - 11-inch Liquid Retina (2360 x 1640), Storage - 128GB, Processor - Apple M2, Dimensions - 19.1 x 26.5 x 3.3 cm (0.75kg), Rear Camera - 12MP, Connectivity - Wi-Fi, Front Camera - 12MP, Operating System - iOS, "
  },
  {
      "slug": "apple-smartphone-iphone-13-pro-max-6gb-256gb",
      "text": "Apple iPhone 13 Pro Max - 256GB - Dual Sim, Sim - Dual SIM (Nano Sim + eSim), Memory - 6GB, Battery - 4373 mAh, Display - 6.7-inch Super Retina XDR display with ProMotion (2778 x 1284), Storage - 256GB, Processor - Apple A15 Bionic, Dimensions - 7.81 x 16.08 x 0.765 cm (0.24kg), Rear Camera - 12mp + 12mp + 12mp, Connectivity - 5G, Front Camera - 12mp, Operating System - iOS 15, "
  },
  {
      "slug": "optoma-uhd35-projector",
      "text": "Optoma UHD35 Projector - 4K UHD, Brightness - 3600 ANSI lumens, Connections - 2x HDMI, 1x USB, VGA, Audio Out, Aspect ratio - 16:9, Picture quality - 4K UHD, Projection size - 0.80 - 7.60 m, 3D functionality - Full 3D, Special features - All-rounder projector with impressive images in 4K cinema quality and a lightning-fast refresh rate of 240Hz for smooth game play. Excellent color depth, crystal clear details and brilliant contrast. High Dynamic Range (HDR) and HLG compatibility, Full 3D and HDMI 2.0, Screen resolution - 3840 x 2160 pixels, Projection distance - 1.20 - 9.90m, "
  },
  {
      "slug": "apple-apple-watch-ultra-2-gps-cellular-titanium-case-and-alpine-loop-l",
      "text": "Apple Watch Ultra 2 GPS + Cellular, Titanium Case, 49mm, Type - Smartwatch, Features - Powered by new S9 SiP, New Double Tap Gesture (answer a call, open a notification, play and pause music and more), Biggest and brightest Apple Watch display, Always-On Retina display, Faster on-device Siri with health data access, Precision Finding for iPhone, Fall Detection and Crash detection, Siren, Customizable Action Button, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Blood Oxygen app, ECG app, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Precision dual-frequency GPS, Durable from -20° C to 55° C, Emergency SOS, International Emergency Calling, Strong Battery Performance, Pair Multiple Watches with Family Setup, Band Size - L (165–210mm), Battery Life - Up to 36h / 72h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Titanium Case and Alpine Loop, Music playback - Yes, Water/Dust proof - Up to 10 ATM / MIL-STD-810H, Activity Tracking - Blood oxygen, Electrocardiography (ECG), Hours slept, Resting heart rate, Target heart rate, Skin temperature, Running (Stride Length, Ground Contact Time, Vertical Oscillation), Depth/Pressure/Location Tracking for Divers, Multisport Workouts, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "meta-all-in-one-virtual-reality-headset-meta-quest-pro",
      "text": "Meta Quest Pro VR Headset, Depth - 196mm, Width - 265mm, Height - 127mm, Weight - 722g, Display - 2 LCD panels with local dimming backlighting (1,800 x 1,920 pixels per eye), Connections - 1x USB Type-C, Battery Life - Up to 2 hours, Cable Length - 2 meters, Power Supply - Battery/Rechargeable Battery Type: Li polymer, Special Features - 10 advanced VR/MR sensors to support inside-out SLAM tracking with 6 degrees of freedom, mixed reality in color, and eye/face tracking, WiFi, Bluetooth: 5.2, Total Resolution - 3,600 x 1,920 pixels, Resolution Per Eye - 1,800 x 1,920 pixels, Supported Platforms - Android, iOS, PC, "
  },
  {
      "slug": "optoma-uhz50-projector",
      "text": "Optoma UHZ50 Projector - 4K UHD, Brightness - 3000 ANSI lumens, Connections - 2 x HDMI 2.0, 3 x USB-A, 1 x HDMI 2.0 (eARC), Aspect ratio - 16:9, Picture quality - 4K UHD, Projection size - 0.87m - 7.68m, 3D functionality - Full 3D, Special features - Smart Projector, Laser 4K UHD resolution, Supports 1080p 240Hz for smooth gameplay and 4ms input lag, Screen resolution - 3840 x 2160 pixels, Projection distance - 1.2m - 8.1m, "
  },
  {
      "slug": "canon-eos-r10-rf-s-18-45mm-f4-5-6-3-is-stm-camera-kit",
      "text": "Canon EOS R10 Camera Kit with RF-S 18-45mm f/4.5-6.3 IS STM Lens, "
  },
  {
      "slug": "epson-eh-tw6250-projector",
      "text": "Epson EH-TW6250 Projector - 4K UHD, Brightness - 2800 ANSI lumens, Connections - USB 2.0 type B (service only), Wireless LAN IEEE 802.11a/b/g/n/ac, jack plug, HDMI (HDCP 2.3), Aspect ratio - 16:9, Picture quality - 4K UHD, Projection size - 40 inches - 500 inches, 3D functionality - , Special features - Android TV, Auto keystone correction, Built-in speaker, Game mode, Horizontal and vertical keystone correction, Long lamp life, Quick Corner, Screen resolution - 3840 x 2160 pixels, Projection distance - 2.34 m - 3.81 m ( 80 inch screen), "
  },
  {
      "slug": "apple-smart-speaker-apple-homepod-2nd-generation",
      "text": "Apple HomePod (2nd generation), Audio - High-excursion woofer, Beamforming array of five tweeters, Spatial Audio, Room sensing, Stereo pair capable, Multiroom audio, Connect one HomePod speaker or a stereo pair with Apple TV for rich home theater audio, Works with - Apple HomeKit, Siri, voice recognition, Description - The all-new HomePod delivers groundbreaking, premium sound, from clear, detailed highs to deep, rich bass. Advanced computational audio pushes acoustics further. Spatial Audio provides even more immersive sound. Works seamlessly with all your Apple devices. Connect and control your smart home, privately and securely, Power Source - Plug-in, Smart home hub - Sound Recognition, Temperature and humidity sensor, Private and secure, Control Button(s) - Play/Pause, Volume, "
  },
  {
      "slug": "philips-tv-philips-43pus7608-12",
      "text": "Philips 43PUS7608/12 - TV 43\" LED, Screen - Flat, Delivery - TV, Remote Control, 2 x AAA Batteries, Table top stand, Power cord, Quick start guide, Legal and safety brochure, Processor - Dual Core, Model Name - 43PUS7608, Connections - 3x HDMI, 2x USB, Wi-Fi 802.11n, 2x2,Single band, Common Interface Plus (CI+), Ethernet-LAN RJ-45, Digital audio out (optical), Service connector, Satellite Connector, HDMI 2.3 on all HDMI, HDMI ARC on HDMI1, eARC on HDMI1, eARC/VRR/ALLM supported, HDMI-CEC for Philips TV/SB, Product type - LED TV UHD 4K, VESA standard - 200 x 100, Receptions Types - DVB-T/T2/T2-HD/C/S/S2, Special Features - Ultra-sharp picture. Vibrant viewing. Cinematic vision and sound. Dolby Vision and Dolby Atmos. Great TV. No fuss. Philips Smart TV. Voice control. Works with Google Assistant and Alexa., Dimensions with stand - 958.0 x 587.0 x 223.0 mm, Dimensions without stand - 958.0 x 567.0 x 87.0 mm, HDR (High Dynamic Range) - HDR10, HDR10+ compatible, Dolby Vision, HLG (Hybrid Log Gamma), "
  },
  {
      "slug": "apple-11-ipad-pro-2024-wi-fi-cellular-8gb-256gb",
      "text": "Apple 11\" iPad Pro (2024) - Wi-Fi + Cellular - M4 - 256GB, Memory - 8GB, Battery - 31,29 Wh, Display - 11-inch Ultra Retina XDR display (2420 x 1668), Storage - 256GB, Processor - Apple M4, Dimensions - 18.9 x 26.45 x 3.3 cm (0.76kg), Rear Camera - 12MP, Connectivity - Wi-Fi + Cellular, Front Camera - 12MP, Operating System - iOS, "
  },
  {
      "slug": "sigma-af-16mm-f-1-4-dc-dn-c-fujifilm-x-mount",
      "text": "Sigma 16mm f/1,4 DC DN C Fujifilm X-mount, "
  },
  {
      "slug": "optoma-hz146x-w-projector",
      "text": "Optoma HZ146X-W Projector - Full HD, 3D - Full 3D, Zoom - 1.1, Outputs - 1 x Audio 3.5mm, 1 x USB-A Power 1.5A, Speaker - 1, 15W, IP rating - IP6X, Zoom type - Manually, Brightness - 3,800 lumens, Net weight - 3kg, Resolution - 1080p Full HD (1920x1080), Canvas size - 0.51m ~ 7.62m (20\" ~ 300\") diagonal, Connections - 2 x HDMI 2.0, Input delay - 8.60ms, Gross weight - 4.2kg, Light source - Laser, LASER lifespan - 30,000 hours, Remote control - Card style, 3D compatibility - Yes (DLP 3D; PC frame sequential 120Hz 3D, Blu-ray DVD 3D), Image page format - 16:9, Display technology - DLP, Standard accessories - AC Power Cord, Remote Control, 1x CR2025 Battery, Basic User Guide, Computer compatibility - FHD, UXGA, SXGA, WXGA, HD, XGA, SVGA, VGA, Mac, Projection distance (m) - 0.8m - 10m, Compatible image formats - 4:3, 16:9, 16:10, Contrast ratio - dynamic - 2,000,000, Optional wireless models - UHDCast Pro, Dimensions (W x D x H) (mm) - 274x216x114, Displayable colors (millions) - 1073.4, Keystone correction - vertical - +/-30°, Keystone correction - horizontal - +/-30°, "
  },
  {
      "slug": "siemens-eq900-tq903r09-coffee-machine",
      "text": "Siemens EQ900 TQ903R09 Coffee Machine, Coffee - Americano, Caffè crema, Caffé grande, Caffè latte, Cappuccino, Espresso, Espresso Macchiato, Flat white, Coffee pot, Latte Macchiato, Ristretto, Black coffee XL, Dimensions - 470 x 315 x 392 mm / 12 kg, milk system - Integrated milk container, Coffee system - Ground coffee, Coffee beans, Pump pressure - 19 bar, Special features - automatic switch-off (adjustable), hot water function, removable water tank, integrated water filter, automatic cleaning program, Automatic cleaning program for the milk foam line, automatic rinsing, automatic descaling program, Power consumption - 1500 W, Water tank capacity - 2.30 L, Capacity bean container - 375 g, "
  },
  {
      "slug": "mackie-thump-go",
      "text": "Mackie Thump Go Portable Battery Powered Speaker, Type - Portable Battery Powered Speaker, Model - Thump Go, Connectivity - Bluetooth, No of channels - 2-Channel Digital Mixer with XLR Output (connects any combination of audio sources, including guitar, microphone, keyboard, or DJ mixer), Operating mode - Battery-powered, Special features - Bring professional live sound reinforcement to small concerts, corporate events, assemblies, weddings, parties and more. Mackie Thump GO puts powerful sound processing and wireless control in your hands, whether you’re holding a guitar, wired or wireless microphone or DJ controller. With a single charge, Thump GO can deliver signature “thump” and clarity for 12 hours. DJs will especially love this one. Thump GO has an integrated Music Ducking Mode that attenuates the volume level of channel 2 whenever a signal is received on channel 1. Now you can make big announcements like, “Hear how great I sound” without messing with your gain levels on the mixer or your equipment., Intelligent features - Wireless streaming and control (Easily stream music directly to your Thump GO via Bluetooth. Using the Thump Connect 2 app, you can adjust anything from EQ and Voicing Modes to channel levels and custom presets—all from the center of the dancefloor), "
  },
  {
      "slug": "asus-monitor-asus-zenscreen-mb16ahg-39-6cm-16-9-fhd-hdmi-16-90lm08u0-b01170",
      "text": "Asus - 16\" ZenScreen MB16AHG 39.6cm (16:9) FHD HDMI (SOLD) 90LM08U0-B01170, Model - 90LM08U0-B01170, Display - IPS 15.6 inches (1920 x 1080), Dimensions - 35.9 x 22.6 x 1.19 cm • 0.92 kg, Connectivity - 1x Mini HDMI 1.4, 2x USB-C with DisplayPort (144Hz@1920x1080), Response Time - 3ms, High Dynamic Range (HDR) - No, "
  },
  {
      "slug": "acer-predator-helios-neo-16s-ai-oled-ultra-9-275hx-32gb-1tb-rtx-5070-ti",
      "text": "Acer Predator Helios Neo 16S AI OLED Gaming Notebook PHN16S-71-94CW - Intel® Core™ Ultra 9-275HX - 32GB - 1TB SSD - NVIDIA® GeForce® RTX™ 5070 Ti, EAN - 4711474402479, NPU - Intel® AI Boost (Up to 13 TOPS), Model - NH.QX7EG.006, Memory - 32 GB DDR5 RAM, Display - 16\" Acer CineCrystal™ WQXGA OLED 240Hz, Processor - Intel® Core™ Ultra 9 Processor 275HX, Model name - PHN16S-71-94CW, Mass storage - 1.000 GB M.2 PCIe Gen4 SSD, Graphics card - NVIDIA® GeForce RTX™ 5070 Ti, Operating system - Windows® 11 Home, Special features - Copilot+ capable, OLED display, FHD webcam, aluminium A and D cover, 5th generation Aeroblade 3D cooling, Liquid Metal, Keyboard language - German (QWERTZ), 4 zones RGB, Dimensions and weight - 356.78 x 275.50 x 19.90 mm (W x D x H) - 2.3 kg, "
  },
  {
      "slug": "acer-h6800bda-projector",
      "text": "Acer H6800BDa Projector - 4K UHD, Brightness - 3600 ANSI lumens, Connections - HDMI x2, VGA in (D-Sub), Mini Jack in, USB, Mini Jack out, SPDIF digital optical, RS232C, Aspect ratio - 16:9, Picture quality - 4K UHD, Projection size - < 300 inches, 3D functionality - 3D ready, Special features - , Screen resolution - 3840 x 2160 pixels, Projection distance - 1.00 - 10.00 m, "
  },
  {
      "slug": "acer-pd2527i-vero-projector",
      "text": "Acer PD2527i Vero Projector - Full HD, Weight - 2.60 kg, Dimensions - 107.5 x 299.4 x 223.8mm, Throw Ratio - 1.49 to 1.64 (1549.40 mm@2000 mm), Digital Zoom - 2x, Optical Zoom - 1.1x, Output Power - 10 W, Contrast Ratio - 2,000,000:1, Interfaces/Ports - USB, Audio Line Out, HDMI x 2, Native Resolution - 1920 x 1080 Full HD, Scope of Delivery - Projector, AC Power Cord, Lens Cap, Quick Start Guide, Remote Control, Carrying Case, Number of Speakers - 1, Low Mode Brightness - 1620 lm, Native Aspect Ratio - 16:9, Speaker Output Mode - Stereo, Video Compatibility - EDTV, HDTV, SECAM, SDTV, NTSC, PAL, Normal Mode Lamp Life - 20,000 Hours, Platform Compatibility - Mac, Windows, PC, Compatible Aspect Ratio - 4:3, Standard Mode Brightness - 2700 lumens, Maximum Diagonal Image Size - 7.62 m (300\"), Maximum Projection Distance - 9.90 m, Minimum Diagonal Image Size - 711.20 mm, Minimum Projection Distance - 1 m, Vertical Keystone Correction - -40°/+40°, "
  },
  {
      "slug": "canon-eos-r100-rf-s-18-45mm-is-stm",
      "text": "Canon EOS R100 Camera Kit with RF-S 18-45mm f/4.5-6.3 IS STM Lens, Video - 4K 4K (3840 x 2160 pixels), Sensor - 24MP APS-C CMOS sensor, Weight - 356g body, Storage - Single SD card Slot, Viewfinder - Electronic EVF 2.36m-dot resolution, Connectivity - WLAN, Bluetooth, App control, Scope of Delivery - Canon R100 Camera, Canon LP-E17 Battery, Canon RF-S 18-45mm lens, Canon Neck strap, Camera and lens cover, "
  },
  {
      "slug": "apple-13-ipad-air-2024-wi-fi-8gb-128gb",
      "text": "Apple 13\" iPad Air (2024) - Wi-Fi - M2 - 128GB, Memory - 8GB, Battery - 36,59 Wh, Display - 13-inch Liquid Retina (2732 x 2048), Storage - 128GB, Processor - Apple M2, Dimensions - 22.8 x 29.6 x 3.4 cm (0.998kg), Rear Camera - 12MP, Connectivity - Wi-Fi, Front Camera - 12MP, Operating System - iOS, "
  },
  {
      "slug": "acer-mr-jv111-001-projector",
      "text": "Acer HD5385BD Projector - HD, 3D - Yes, Depth - 223.8 mm, Width - 299.4 mm, Height - 107.5 mm, Weight - 2.6 kg, Full HD - Yes, DVI port - Yes, Zoom ratio - 1:1, Power source - AC, Microphone in - Yes, Light source type - LED, Market positioning - Home cinema, Built-in speaker(s) - Yes, HDMI ports quantity - 1, Native aspect ratio - 16:9, Projection distance - 1 - 10.3 m, Projector brightness - 2300 ANSI lumens, Projection technology - LED, USB 2.0 ports quantity - 1, Supported aspect ratios - 4:3, Contrast ratio (typical) - 2000000:1, Projection size (diagonal) - 0.69m - 7.62m, Projector native resolution - 720p (1280x720), "
  },
  {
      "slug": "canon-rf-35mm-f-1-4-l-vcm-canon-rf",
      "text": "Canon RF 35mm f/1,4 L VCM Canon RF, "
  },
  {
      "slug": "valve-console-valve-steam-deck-1tb-oled",
      "text": "Valve Steam Deck 1TB OLED Console, CPU - Zen 2 4c/8t, 2.4-3.5GHz (up to 448 GFlops FP32), GPU - 8 RDNA 2 CUs, 1.6GHz (1.6 TFlops FP32), RAM - 16 GB LPDDR5 on-board RAM (6400 MT/s quad 32-bit channels), Gyro - 6-Axis IMU, Size - 298mm x 117mm x 49mm, Input - PD3.0 Type C power supply, Wi-Fi - Tri-band Wi-Fi 6E, Weight - Approx. 640 grams, Battery - 50Whr battery 3-12 hours of gameplay, Desktop - KDE Plasma, Display - 1280 x 800 HDR OLED, Haptics - HD haptics, Sensors - Light: Dual ambient light sensor ALS, Storage - Steam Deck 1TB NVMe SSD with high-speed microSD card slot, microSD - UHS-I supports SD, SDXC and SDHC, Channels - Stereo with embedded DSP for an immersive listening experience, APU power - 4-15W, Expansion - , Processor - 6nm AMD APU, Microphones - Dual microphone array, Screen Size - 7.4” diagonal, Connectivity - Bluetooth 5.3, Refresh Rate - 90Hz, Operating System - SteamOS 3 (Arch-based), Maximum brightness - 1,000 nits peak brightness (HDR), 600 nits (SDR), Headphone / mic jack - 3.5mm stereo headphone jack, "
  },
  {
      "slug": "acer-h6541bdi-projector",
      "text": "Acer H6541BDi Projector - Full HD, Brightness - 4000 ANSI lumens, Connections - 2 x HDMI, 1 x DC out, 1 x USB Type-A, 2 x 3.5 mm audio female, 1 x composite video, 1 x VGA, 1 x RS-232, Aspect ratio - 16:9, Picture quality - Full HD, Projection size - 0.90 - 7.65 m, 3D functionality - 3D ready, Special features - , Screen resolution - 1920 x 1080 pixels, Projection distance - 1.00 - 10.00 m, "
  },
  {
      "slug": "optoma-projector-optoma-uhz55",
      "text": "Optoma UHZ55 Projector - 4K Laser, Zoom - 1.3 (Manually), Inputs - 2 x HDMI 2.0, 3 x USB-A, 1 x HDMI 2.0 (eARC), Control - 1 x RS232, 1 x RJ45, 1 x 12V trigger, 1 x 3D sync, Outputs - 1 x Audio 3.5mm, 1 x S/PDIF, Security - Security Fastening, Kensington Lock, Password Protected Interface, Brightness - 3,000 lumens, Net Weight - 4.8kg, Resolution - UHD (3840x2160), Canvas Size - 0.87m ~ 7.68m (34.1\" ~ 302.4\") diagonal, Light Source - Laser, Contrast Ratio - 2,500,000, Laser Lifespan - 30,000 hours, Projection Ratio - 1.21:1 ~ 1.59:1, Image Page Format - 16:9, Power Consumption - 100V240V, 50-60Hz, Display Technology - DLP, Operating Frequency - 2.4GHz, 5GHz, Projection Distance (m) - 1.2m - 8.1m, Compatible Image Formats - 4:3, Dimensions (W x D x H) (mm) - 337x265x119.3, Displayable Colors (Millions) - 1073.4, Keystone Correction - Vertical - +/-30°, Keystone Correction - Horizontal - +/-30°, "
  },
  {
      "slug": "sonos-sub-mini",
      "text": "Sonos Sub Mini, "
  },
  {
      "slug": "asus-accessory-asus-rog-ally-travel-case",
      "text": "ASUS ROG Ally Travel Case, Weight - 189 g, Material - Polyester, Polyurethane (PU), Case type - Cover, Dimensions - 43 x 143 x 305 mm, Closure type - Zipper, Compatibility - for various handheld consoles, Scope of Delivery - Bag (console is not included), Protection features - Water repellent, Scratch resistant, Spill resistant, "
  },
  {
      "slug": "sonos-sub-4",
      "text": "Sonos Sub 4, WiFi - Yes, Delivery - Sonos Sub 4, 1x power cable, brief instructions, Bluetooth - Yes, Components - Subwoofer, Connections - LAN, Product type - Subwoofer, Special features - Dual Force-Cancelling woofers pulse-punding bass and eliminate distotion, Signal transmission - Wireless, "
  },
  {
      "slug": "apple-tablet-11-ipad-pro-2022-5g-8gb-256gb",
      "text": "Apple 11\" iPad Pro (2022) - Wi-Fi + Cellular - 256GB, Memory - 8GB, Battery - 28.65 Wh, Display - 11-inch Liquid Retina IPS (2388 x 1668), Storage - 256GB, Processor - Apple M2, Dimensions - 19.1 x 26.1 x 0.51 cm (0.91kg), Rear Camera - 12MP Wide + 10MP Ultra-wide + LiDAR, Connectivity - 5G, Front Camera - 12MP, Operating System - iPadOS 16, "
  },
  {
      "slug": "acer-h5386bdi-projector",
      "text": "Acer H5386BDi Projector - HD ready, Brightness - 4500 ANSI lumens, Connections - 1x HDMI with HDCP, 1xVGA, 1x Composite Video, 1x Audio In, 2x USB Type A (1x in for wireless adapter, 1x 5V DC out), 1x Audio Out, 1x RS232, Aspect ratio - 16:9, Picture quality - HD ready, Projection size - 0.75 - 7.62 m, 3D functionality - No, Special features - , Screen resolution - 1280 x 720 pixels, Projection distance - 1.00 - 10.00 m, "
  },
  {
      "slug": "apple-mouse-apple-mouse-apple-magic-mouse-3",
      "text": "Apple Magic Mouse 3 , Feature - Wireless, Dimensions - 5.71 x 11.35 x 2.16 cm • 0.09 kg, "
  },
  {
      "slug": "apple-accessory-apple-magsafe-charger-2020",
      "text": "Apple MagSafe Charger (2020), "
  },
  {
      "slug": "elgato-hd60-x-external-game-capture",
      "text": "Elgato HD60 X External Game Capture, Type - External Game Capture, Model - HD60 X, Weight - 115 g / 4.06 oz, Encoding - H.264 (AVC) for efficient compression and high quality, Interface - USB 3.0 (USB-C), Platforms - Xbox, PlayStation, PC, Mac, Dimensions - 112 x 75 x 19 mm / 4.41 x 2.95 x 0.75 inches, Audio Input - HDMI (2-Channel, 48 kHz), Connections - USB 3.0 C-to-A, Device Type - External Capture Card, Passthrough - HDMI 2.0 (supports up to 4K60 HDR passthrough), Instant Gameview - Low-latency technology for real-time streaming with minimal delay, Audio Passthrough - Supports up to 8-Channel surround sound, HDR10 Passthrough - Allows for high dynamic range content passthrough while capturing in SDR, Operating Systems - Windows 10 (64-bit) and macOS 10.13 or later, Ultra-Low Latency - Provides a near-zero lag experience for streamers and gamers, Streaming Software - Compatible with popular streaming software such as OBS Studio, XSplit, and Elgato’s own 4K Capture Utility, Supported Resolutions - 1080p at 60 fps, 1440p at 60 fps, 4K at 30 fps, Variable Refresh Rate (VRR) Passthrough - Ensures smooth gameplay without screen tearing, "
  },
  {
      "slug": "lenovo-thinkpad-e14-g7-u7-155h-16gb-512gb",
      "text": "Lenovo ThinkPad E14 G7 Laptop - Intel® Core™ Ultra 7-255H - 16GB - 512GB SSD - Intel® Intel Arc Graphics, Model - 21SX000VGE, Memory - 16GB, Display - 14 inches (1920 × 1200), 60Hz, Storage - 512GB SSD, Graphics - Intel® Intel Arc Graphics, Processor - Intel® Core™ Ultra 7-255H, Dimensions - 31.3 x 22 x 1.5 cm • 1.34 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "msi-bravo-15-c7vfk-230-r7-7735hs-16gb-512gb-rtx-4060",
      "text": "MSI Bravo 15 C7VFK-230 Gaming Laptop - AMD Ryzen™ 7 7735HS - 16GB - 512GB SSD - NVIDIA® GeForce® RTX 4060, Model - 00158N-230, Memory - 16GB, Display - 15.6 inches (1920 x 1080), 144Hz, Storage - 512GB SSD, Graphics - NVIDIA® GeForce® RTX 4060, Processor - AMD Ryzen™ 7 7735HS, Dimensions - 35.9 x 25.9 x 2.45 cm • 2.25 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "acer-predator-gd711",
      "text": "Acer Predator GD711 Projector - 4K UHD, Brightness - 4000 ANSI lumens, Connections - HDMI x2, mini jack output, USB 2.0 x3, Aspect ratio - 16:9, Picture quality - 4K UHD, Projection size - 0.69 - 7.62 m, 3D functionality - 3D ready, Special features - Variable refresh rate up to 240Hz, Game Mode, Football mode, HDR10, Smart Apps integrated, Screen resolution - 3840 x 2160 pixels, Projection distance - up to 300 inches, "
  },
  {
      "slug": "acer-nitro-n50-650-i5-13400f-16gb-512gb-rtx-4060",
      "text": "Acer Nitro N50-650 Gaming Desktop - Intel® Core™ i5-13400F - 16GB - 512GB - NVIDIA® GeForce® RTX 4060, Model - DG.E3GEG.00F, Memory - 16GB, Storage - 512GB, Graphics - NVIDIA® GeForce® RTX 4060, Processor - Intel® Core™ i5-13400F, Dimensions - 17.5 x 39.2 x 38.6 cm • 8.25 kg, Operating System - Windows® 11 Home, Keyboard Language - , "
  },
  {
      "slug": "apple-tablet-ipad-air-2022-wifi-8gb-256gb",
      "text": "Apple iPad Air (2022) - WiFi - 256GB, Memory - 8GB, Battery - Up to 10h, Display - 10.9-inch IPS Liquid Retina (2360 x 1640), Storage - 256GB, Processor - Apple M1, Dimensions - 17.9 x 24.7 x 0.6 cm (0.46kg), Rear Camera - 12MP Wide, Connectivity - WiFi, Front Camera - 12MP Ultra wide, Operating System - iPadOS 15, "
  },
  {
      "slug": "sony-srs-xp500-portable-wireless-speaker",
      "text": "Sony SRS-XP500, Type - Portable Wireless Speaker, Model - SRS-XP500, Power - -, Battery - Up to 20h battery, Chassis - 2x 5 cm Tweeters, 2x 14 cm Woofers, Frequency - -, Durability - IPX4 Water-repellent, Connections - 1x Stereo mini jack (IN), 2x USB A, 1x microphone input, 1x guitar input, Connectivity - Bluetooth, Technologies - -, Operating mode - Battery-powered, Special features - The versatile XP500 offers great sound and entertaining party functions. The powerful party sound, which is generated by the X-Balanced Speaker Unit and the powerful front tweeter, creates a rich, clear sound quality. The speaker is perfect for parties - whether indoors or outdoors -, offers a long battery life, is water-repellent according to IPX4 and has a practical handle so that it can be easily transported from party to party., "
  },
  {
      "slug": "jabra-headphones-jabra-evolve2-40-uc-stereo-usb-a-office-headphones",
      "text": "Jabra Evolve2 40 UC Stereo (USB-A) Office Headphones, "
  },
  {
      "slug": "301-00059-01-oculus-rift-touch-4951",
      "text": "Oculus Rift Touch Controller, Device type - Motion controller, Connectivity technology - Wireless, Gaming control technology - Digital, "
  },
  {
      "slug": "hp-omen-17-db0083ng-r7-8845hs-32gb-1tb-rtx-4070",
      "text": "HP Omen 17-db0083ng Gaming Laptop - AMD Ryzen™ 7 8845HS - 32GB - 1TB SSD - NVIDIA® GeForce® RTX™ 4070, Model - B22N9EA#ABD, Memory - 32GB, Display - 17.3 inches (1920 x 1080), 144Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX™ 4070, Processor - AMD Ryzen™ 7 8845HS, Dimensions - 39.7 x 27.8 x 3 cm • 2.9 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "devialet-cocoon-carrying-case-for-phantom-ii",
      "text": "Devialet Cocoon (Phantom II) High-End Carrying case, "
  },
  {
      "slug": "vr-cover-for-oculus-quest-2-vr-cover-facial-interface-foam-set-for-quest-2",
      "text": "VR Cover Facial Interface & Foam Set for Quest 2, Compatibility - Meta/Oculus Quest 2, Pressure Relief - The soft foam paddings relieve pressure around the face, Package Contents - 1 X Facial Interface,1 X Standard PU Leather Foam Replacement, 1 X Comfort PU Leather Foam Replacement, 1 X Silicone Nose Guard, 1 X Lens Cove, Easy Installation - The soft foam replacements come in two versions – Standard and Comfort. They can be easily installed on the facial interface and adjusted to achieve the best fit, Hygienic Solution - The product includes a facial interface with passive air vents, promoting airflow and reducing the build-up of hot and humid air from exhalation inside the headset, Sweat-Free Design - The wipeable foams for a more comfortable and hygienic experience, Compatibility Note - Not compatible with the original Quest 2 glasses spacer. For additional room before the lens, use the thicker Comfort foam in the set or the VR Cover Facial Interface Spacer, Cushier Experience - The Comfort foam is thicker and provides a cushier pad for increased comfort, "
  },
  {
      "slug": "apple-smartwatch-apple-watch-series-7-gps-aluminium-case-and-sport-band-45mm",
      "text": "Apple Watch Series 7 GPS, Aluminium Case, 45mm, Type - Smartwatch, Features - 2nd generation optical heart sensor; VO2max analysis; Fall detection; Always active altimeter; Sleep tracking; Apple Pay; Notification of irregular + high or low heart rate; Wireless charging, Band Size - 140-220mm, Battery Life - up to 18h, Connectivity - GPS, Bluetooth 5.0, WLAN, NFC, Compatibility - iOS, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 5 ATM + Dust resistant (IP6X), Activity Tracking - 24/7 heart rate tracking; Sleep tracking; Notification of irregular + high or low heart rate; Can track swimming, running, yoga, cycling and several other sport and gym profiles; Blood oxygen app; ECG app, Global Positioning - GPS, GLONASS, "
  },
  {
      "slug": "msi-console-claw-8-ai-a2vm-015",
      "text": "MSI Claw 8 AI+ A2VM-015 Console, Audio - Microphone, headphone (Hi-Res Audio, combo jack for CTIA & OMTP headsets), Ports - 2x Thunderbolt™ 4 (USB 4.0 Type-C, DisplayPort, USB-PD 3.0 up to 65 W), Wi-Fi - Wi-Fi 7, Weight - 795 g (with battery), Battery - 6-cell Li-Polymer, 80 Wh (integrated), Cooling - Cooler Boost HyperFlow, Display - 20.3 cm (8.0\"), 16:10, Multi-touch screen, Sensors - 6-axis IMU (gyroscope and accelerometer), Variant - Intel® Core™ Ultra 7 Processor 258V (8-core, up to 4.80 GHz, 12 MB SmartCache), up to 47 NPU TOPS (total 115 AI TOPS), Graphics - Intel® Arc™ Graphics 140V, Security - Fingerprint scanner authentication, Bluetooth - Bluetooth® 5.4 with LE Audio, Memory (RAM) - 32 GB LPDDR5-8533 (Dual Channel), Power Supply - 65 W (external, USB Type-C, 90–264 V), Sound System - Stereo speakers, Storage (SSD) - 1 TB (M.2 PCIe NVMe), Monitor Output - 2x DisplayPort via Thunderbolt™ 4, Expansion Slots - 1x M.2 2230 PCIe 4.0 x4, Operating System - Windows 11 Home, Panel Technology - 120 Hz VRR, Wide Viewing Angle (IPS-Level), ~100% sRGB, Native Resolution - Full HD+ (1920 x 1200 pixels), Storage Expansion - microSD card reader, Sound Optimization - DTS® Audio Processing, Dimensions (W x D x H) - 299 x 126 x 24.0 mm (without grips), "
  },
  {
      "slug": "braun-hi-fi-audio-braun-le01-premium-hifi-speaker",
      "text": "Braun LE01 Premium HiFI Speaker, Type - Premium HiFI Speaker, Model - LE01, Battery - Plug-in, Chassis - 2 x specially developed 5.25-inch aluminum cone high-performance woofers with NdFe motors, 3 x 2.5-inch balanced mode radiator units with full bandwidth, 2 x 8-inch x 4.5-inch specially manufactured square passive radiators, Amplifier - 3 x monolithic HD-Class-D power amplifiers, Frequency - 62 Hz - 21500 Hz (-6dB) 96kHz, Durability - -, Connections - 3.5mm Aux-In, Connectivity - Apple Airplay 2, Chromecast built-in, Bluetooth 4.2 with AAC, WLAN dual band, Operating mode - Plug-in, Special features - Voice control with the Google Assistant. Room placement equalizer for audio optimization. Over 300 music streaming services via WiFi. Software updates ensure that you are always up to date. Private mode button to physically disconnect the microphones. In-app control of bass and treble. Multiroom and stereo coupling., Intelligent functions - Google assistant, "
  },
  {
      "slug": "htc-virtual-reality-htc-vive-replaceable-battery",
      "text": "HTC Vive Focus 3 Replaceable battery Virtual Reality, Recharge - 50% of battery life in just 30 minutes, Full charge - 2 hours of battery life, Battery size - 26.6Wh, Compatibility - HTC Vive Focus 3, Thermo-optimized - maintain device temperature, "
  },
  {
      "slug": "insta360-go-3-128gb",
      "text": "INSTA360 GO 3 - 128GB, Sound - Dual built-in microphones, Storage - 128Gb, Waterproof - Up to 5m // IPX4 (with Action pod), Battery life - over 2h with action pod, Stabilization - Flow-state image stabilization, Special Features - Time-lapse, Time-shift, Loop Recording, Video Resolution - up to 2.7K // 1080p120fps, Scope of delivery - Action Pod, Lens guard, Insta360 Go 3S 128GB, "
  },
  {
      "slug": "dyson-300912-01-am-07-tower",
      "text": "Dyson Cool Tower Fan AM07, Dimensions - 1007 x 230 x 190 mm • 2.9 kg, Device Type - Tower, App-Controlled - No, Special Features - Remote Control, Quiet Mark Excellent, Sleep Timer, Air Multiplier Technology, Scope of delivery - 1x tower fan, 1x remote control, "
  },
  {
      "slug": "lens-sel-55210-84efb1de-9004-41fa-bbd5-d8f2f8ba9071",
      "text": "Sony SEL 55-210mm F/4,5-6.3, "
  },
  {
      "slug": "apple-smartphone-iphone-14-plus-6gb-128gb",
      "text": "Apple iPhone 14 Plus - 128GB - Dual SIM, Memory - 6GB, Battery - 4325 mAh, Display - 6.7-inch OLED (2778 x 1284), Storage - 128GB, Processor - Apple A15 Bionic, Dimensions - 9.62 x 17.93 x 2.84 cm (0.395kg), Rear Camera - 12MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 16, "
  },
  {
      "slug": "fujifilm-x-m5-xc15-45mmf3-5-5-6-ois-pz",
      "text": "Fujifilm X-M5 Camera Kit with XC15-45mm f/3.5-5.6 OIS PZ Lens, ISO - 160 to 12,800 (Extended 80 to 51,200), Lens - FUJIFILM XC 15-45mm f/3.5-5.6 OIS PZ Lens (Black), Video - 6240 x 4160 29.97 fps / DCI 4K (4096 x 2160), Storage - Single Slot SD/SDHC/SDXC, Mount type - Fujifilm X Bayonet mount, Screen Type - 3.0\" 1.04m-Dot Tilting Touchscreen LCD, Connectivity - Wi-Fi 4 (802.11n), Bluetooth 5.2, Image Sensor - 226.1MP APS-C X-Trans 4 CMOS Sensor, Photo format - HEIF, JPEG, Raw, TIFF, Shutter Speed - 1/4000 to 900 Seconds in Manual Mode, Stabilization - Digital Stabilisation, Max Resolution - 6240 x 4160px, Special features - Dedicated Film simulation dial, Auto-Focus Points - 425-Phase Detect, AI-based Subject detection, Scope of delivery - Fujifilm X-M5, FUJIFILM XC 15-45mm f/3.5-5.6 OIS PZ Lens (Black), NP-W126S, Shoulder Strap, Body and lens caps,, Continuous Shooting - 20fps for up to 23 frames (RAW) / 127 frames (JPEG), "
  },
  {
      "slug": "samsung-smartphone-galaxy-s25-ultra-12gb-512-gb",
      "text": "Samsung Galaxy S25 Ultra Smartphone  - 512 GB - Dual SIM, Memory - 12GB, Battery - 4855 mAh, Display - 6.9-inch Dynamic AMOLED 2X (3120 x 1440), Storage - 512 GB, Processor - , Dimensions - , Rear Camera - 200 MP + 50 MP + 50 MP + 10 MP, Connectivity - 5G, Front Camera - 12 MP, Operating System - Android 15, "
  },
  {
      "slug": "nintendo-switch-lite",
      "text": "Nintendo Switch Lite, Size - 92 mm x 210 mm x 14 mm, Screen - Capacitive touchscreen / 5.5-inch LCD / Resolution: 1280 x 720, Weight - 275 g, CPU/GPU - NVIDIA customised Tegra processor, Sensors - Accelerometer / gyrosensor, Battery life - Battery life can last for more than six hours, USB terminal - USB Type-C connector, Charging time - 3 hours, System memory - 32 GB Please note approximately 6.2 GB of internal memory is reserved for use by the system., Internal battery - Lithium-ion battery / battery capacity: 3570 mAh, microSD card slot - Compatible with microSD, microSDHC and microSDXC memory cards., Communication features - Wireless LAN, Bluetooth 4.1, "
  },
  {
      "slug": "bose-headphones-bose-quietcomfort-45-noise-cancelling-over-ear-bluetooth-headphones",
      "text": "Bose Quietcomfort 45 Noise-cancelling Over-ear Bluetooth headphones, Type - Over-ear Bluetooth headphones, Battery - Up to 24h battery, Connections - 1x USB-C, 1x 3.5mm, Key features - Innovations for a lifelike sound reproduction, Long battery life with quick charge function, Maximum wearing comfort and convincing design, Crystal clear and lifelike top sound, Technologies - Voice control, Noise cancelling - ANC, "
  },
  {
      "slug": "sonos-one-sl",
      "text": "Sonos One SL, Type - Portable Speakers, Connectivity - Wireless, Wired, Dimensions and weight - 11.9 cm x 11.9 cm x 16.1 cm, 1.85 kg, "
  },
  {
      "slug": "samsung-odyssey-gaming-monitor-oled-g60sd-27",
      "text": "Samsung - 27\" Samsung Odyssey Gaming Monitor OLED G60SD (27\") LS27DG600SUXEN, Model - LS27DG600SUXEN, Display - QD OLED 27 inches (2560 x 1440), 360Hz, Dimensions - 61.17 x 26.35 x 55.42 cm • 6.9 kg, Connectivity - 2x HDMI, 1x DisplayPort, 1x Headphone Out, 2x USB-A, Response Time - 0.03ms, High Dynamic Range (HDR) - Yes, "
  },
  {
      "slug": "gopro-camera-gopro-hero-9-2020",
      "text": "GoPro HERO 9 Black, Durability - Rugged and Waterproof (up to 10m), Special features - HyperSmooth 3.0 Stabilization, Slo-Mo 8x, 1080p Live Streaming, Voice Control, Touchscreen, Video Resolution - 5K 30fps, 4K 60fps, slow motion 8x, Scope of Delivery - Hero 9, Rechargeable Battery, Curved Adhesive Mount, Mounting Buckle + Thumb Screw, USB-C cable, Camera Case, Effective photo resolution - 20MP, SuperPhoto+ improved HDR, Continuous Photo, "
  },
  {
      "slug": "sonos-smart-speaker-sonos-five",
      "text": "Sonos Five, "
  },
  {
      "slug": "sonos-era-100-bluetooth-speaker",
      "text": "Sonos ERA 100 , Type - Smart Speaker, Model - Era 100, Woofer - one mid range woofer, Tweeter - 2 tweeters, Amplifier - 3 Class D amplifiers, Connectivity - Wi-Fi, Bluetooth 5.3, Operating mode - Plug-in, Special Features - Dolby Atmos, AirPlay 2, Voice assistant, touch control, moisture resistant, Scope of delivery - Sonos Era 100, power cable, "
  },
  {
      "slug": "sony-gm-lens-e-mount-16-35mm-f2-8",
      "text": "Sony FE 16-35mm f/2.8 GM lens, Series - G Master, Aperture - f / 2.8, Lens type - standard zoom, wide angle, Auto focus - yes, Focal length - Lowest 16mm / Highest 35mm, Sensor format - full format, Image stabilizer - yes, Bayonet connection - Sony E-Mount, Scope of application - landscape, architecture and indoor photography, low-light, "
  },
  {
      "slug": "hp-monitor-hp-omen-32c-32-780k6e9",
      "text": "HP - 32\" Omen 32c 780K6E9, Model - 780K6E9, Display - VA 31.5 inches (2560 x 1440), 165Hz, Dimensions - 70.86 x 42.38 x 9.82 cm • 10.38 kg, Connectivity - 1x DisplayPort 1.4, 2x HDMI 2.0, 1x 3.5mm, Response Time - 1ms, High Dynamic Range (HDR) - Yes, "
  },
  {
      "slug": "boox-e-reader-note-air-3-c-4gb-64gb",
      "text": "Boox Note Air 3 C E-Reader - 4GB - 64GB, Memory - 4GB, Battery - 3700 mAh, Display - 10.3-inch E Ink (2480 x 1860 (300ppi)), Storage - 64GB, Processor - Qualcomm 8-core, 2,4 GHz, Dimensions - 18.1 x 16 x 7.6 cm (0.23kg), Operating System - Android, "
  },
  {
      "slug": "lenovo-thinkpad-e14-g7-u5-225u-16gb-512gb",
      "text": "Lenovo ThinkPad E14 G7 Laptop - Intel® Core™ Ultra 5-225U - 16GB - 512GB SSD - Intel® Intel Arc Graphics, EAN - 198156941367, Model - 21SX000RGE, Memory - 16GB, Display - 14 inches (1920 × 1200), 60Hz, Storage - 512GB SSD, Graphics - Intel® Intel Arc Graphics, Processor - Intel® Core™ Ultra 5-225U, Dimensions - 31.3 x 22 x 1.5 cm • 1.34 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "stylus-apple-pencil-2",
      "text": "Apple Pencil (2nd Generation), Features - Note-taking, writing, and drawing better than ever. It magnetically attaches to iPad Pro, charges wirelessly, and lets you change tools with a simple double tap., Compatibility - iPad Pro 12.9-inch (3rd, 4th, 5th, and 6th generation); iPad Pro 11-inch (1st, 2nd, 3rd, and 4th generation); iPad Air (4th and 5th generation); iPad mini (6th generation), "
  },
  {
      "slug": "dyson-hp10-purifier-hot-cool-gen1",
      "text": "Dyson HP10 Purifier Hot + Cool Gen1, Dimensions - 205 x 765 x 131 mm / 5.29 kg, Filter system - HEPA and activated carbon filters, Max. room size - 35 m³, Type of product - Air purifier + fan heater, Special features - Automatically detects particles and gases in the air and analyzes and reports them in real time, removes gases and up to 99.95% of pollutants from the air, Air Multiplier™ technology ensures that purified air is distributed throughout the room, the air is distributed over a wide range so that the entire room is heated quickly and evenly (heating temperature 1 - 37° C), at higher temperatures a strong airflow of purified air provides a pleasantly cooling effect, the adjustable rotary movement distributes the purified air throughout the room, monitors air quality and purifies the air at reduced volume and with a dimmed display, filter life depends on the level of air pollution, Functional levels - 10, Scope of delivery - Air purifier, remote control, "
  },
  {
      "slug": "philips-tv-philips-55pus7609-12",
      "text": "Philips 55PUS7609/12 - TV 55\" UHD 4K, HD type - 4K Ultra HD, Video apps - Amazon Prime Video, HBO, Netflix, YouTube, HDMI version - 2.1, Audio decoders - DTS:X, Dolby Atmos, Dolby Digital, Wi-Fi standards - Wi-Fi 4 (802.11n), Display diagonal - 139.7 cm (55\"), Display resolution - 3840 x 2160 pixels, Display technology - LED, Number of speakers - 2, HDMI ports quantity - 3, Native aspect ratio - 16:9, Native refresh rate - 60 Hz, USB 2.0 ports quantity - 2, Panel mounting interface - 200 x 300 mm, Display diagonal (metric) - 139 cm, Ethernet LAN (RJ-45) ports - 1, Operating system installed - Titan OS, Digital signal format system - DVB-C, DVB-S, DVB-S2, DVB-T, DVB-T2, DVB-T2 HD, Energy efficiency class (HDR) - F, High Dynamic Range (HDR) technology - High Dynamic Range 10 (HDR10), High Dynamic Range 10+ (HDR10 Plus), Hybrid Log-Gamma (HLG), "
  },
  {
      "slug": "oculus-quest-2-link-cable",
      "text": "Meta Quest Link Cable, Connector 1 - USB C, Connector 2 - USB C, Cable length - 5 m, Compatible products - Meta Quest 2, Meta Quest 3, Meta Quest Pro, "
  },
  {
      "slug": "microsoft-surface-pro-signature-keyboard",
      "text": "Microsoft Surface Pro Signature Keyboard, Layout - QWERTZ, Feature - Backlit, Dimensions - 28.9 x 22.1 x 0.5 cm • 0.4 kg, Connectivity - Large multi-touch trackpad, "
  },
  {
      "slug": "microsoft-surface-pro-keyboard-with-pen-storage-copilot-key",
      "text": "Microsoft Surface Pro Keyboard with pen storage & Copilot key, Depth - 226mm, Width - 289mm, Height - 4.89mm, Weight - 281g, Material - Alcantara, Model year - 2024, Product type - Keyboard with pen storage, Suitable for - Surface Pro Copilot+ PC (11th Edition), Surface Pro 9, Surface Pro 8 and Surface Pro 10 for Business, Scope of delivery - Keyboard, "
  },
  {
      "slug": "lens-jaa832da-af-p-10-20mm-f-4-5-5-6-ac5e22f2-023c-491c-b9b9-5809779d458b",
      "text": "Nikon AF-P DX NIKKOR 10-20mm f/4,5-5,6 G VR, "
  },
  {
      "slug": "thrustmaster-t300-rs-gaming-wheel-gt-edition",
      "text": "Thrustmaster T300 Rs GT Edition, Depth - 45 mm, Width - 35 mm, Height - 32 mm, Weight - 12 kg, Wheel Size - 11-inch GT-style detachable wheel, Device type - Steering wheel + Pedals, Wheel Controls - 13 action buttons, including a D-pad and +/− buttons, Dual-Belt System - Reduces noise and friction for precise feedback, T3PA GT Pedal Set - Gas, brake (load cell), and clutch pedals with adjustable resistance, Wheel Base Rotation - 270° to 1080°, adjustable, Wheel Quick Release - Secure attachment system, Connectivity technology - Wired, Gaming control technology - Analogue / Digital, Gaming platforms supported - PC, Playstation 5, PlayStation 4, Playstation 3, Gaming control function buttons - D-pad, "
  },
  {
      "slug": "canon-rf-24mm-f-1-4-l-vcm",
      "text": "Canon RF 24mm f/1.4 L VCM, Weight - 515 g, Durability - L-series, weather-resistant design (protects against dust and moisture), Focus Type - Autofocus (Voice Coil Motor - VCM, Nano USM), Manual Focus (AF/MF switch, manual iris ring), Lens Mount - Canon RF, Filter Size - 67 mm (Front), Product Name - RF 24mm f/1.4 L VCM Lens, Angle of View - 84°, Optical Design - 15 Elements in 11 Groups, Diaphragm Blades - 11 (contributes to \"dreamy, complementary bokeh\"), Maximum Aperture - f/1.4, Minimum Aperture - f/16, Dimensions (ø x L) - 76.2 x 99.1 mm, Image Stabilization - No, Lens Format Coverage - Full-Frame, Maximum Magnification - 0.17x, Minimum Focus Distance - 23.9 cm, "
  },
  {
      "slug": "milo-1-action-communicator-black-eu",
      "text": "Milo 1 Action Communicator , Battery - Integrated all-day use battery, Network - MiloNetTM ad-hoc mesh network, Speakers - 93db, Dimensions - 7.4 x 2.1 x 6.5 cm / 72g, Weatherproof - IP 67, Special Features - Milo App (IOS/Android), "
  },
  {
      "slug": "lg-tv-lg-55ua75006la-aeud",
      "text": "LG 55UA75006LA.AEUD - TV 55\" 4K, Wi-Fi - Yes (Wi-Fi 5 / 802.11ac), CI slot - 1 (except UK and Ireland), AI Sound - α7 AI Sound Pro (Virtual 9.1.2 Up-Mix), HDMI ARC - eARC (on HDMI 2), USB ports - 1 (USB 2.0), HDMI inputs - 3 (supports eARC, ALLM), HDR support - HDR10 / HLG, AI Upscaling - 4K Super Upscaling, Display type - 4K UHD, HGIG support - Yes, Backlight type - Direct LED, Game Optimizer - Yes (Game Dashboard), LAN (Ethernet) - 1 port, Speaker system - 2.0 channel, downward radiating, Image processor - α7 Gen8 4K AI Processor, Operating system - webOS 25, Bluetooth version - v5.0, Screen resolution - 3,840 x 2,160 pixels (4K Ultra HD), Weight with stand - 11.6 kg, Audio output power - 20 watts, Native refresh rate - 50/60 Hz, Smart Functionality - Apple AirPlay2, AI Chatbot, Google Cast, Google Home, Dynamic Tone Mapping - Yes, Weight without stand - 11.5 kg, Audio codecs supported - AC4, AC3 (Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (see manual for details), Stand dimensions (WxD) - 1,086 x 230 mm, Antenna inputs (tuners) - 2, VESA mount compatibility - 300 x 200 mm, Optical digital audio out - 1 (Toslink), Packaging dimensions (WxHxD) - 1,360 x 845 x 142 mm, TV dimensions with stand (WxHxD) - 1,236 x 780 x 230 mm, TV dimensions without stand (WxHxD) - 1,236 x 718 x 67.9 mm, "
  },
  {
      "slug": "sony-dualsense-wireless-controller",
      "text": "Sony Dualsense Wireless Controller, Accelerometer - Yes, LED backlight - Yes, Force feedback - Yes, Number of axis - 6, Device interface - Bluetooth/USB, Reflex vibration - Yes, Bluetooth version - 5.1, Analog thumbsticks - Yes, USB connector type - USB Type-C, Gaming control technology - Analogue / Digital, Gaming platforms supported - PlayStation 5, Gaming control function buttons - Options button, Share button, "
  },
  {
      "slug": "godox-led1000bi-ii-bi-color-video-led-light-panel",
      "text": "Godox LED1000Bi II Bi-Color Video LED Light Panel, Output - 2600 lux at 1m, Cooling - passive, Dimming - Built-in / DMX, Color modes - Daylight, Power source - AC power / V-mount battery (not included), Color accuracy - CRI 96 / TLCI 98, Color temperature - 3300K to 5600K, Power consumption - 70W, "
  },
  {
      "slug": "godox-knowled-rgbww-pixel-tube-light-tp4r",
      "text": "Godox KNOWLED RGBWW Pixel Tube Light TP4R (120cm), Dimensions - 120 x 4.7 x 4.7 cm - 1500g, Color modes - RGB, Daylight, Tungsten, Power source - AC-DC adapter, Built-in Battery, Product type - LED Light tube/wand, Color accuracy - CRI 96 / TLCI 96, Wireless control - Bluetooth, Wireless DMX, Wireless CRMX, Color temperature - 2000K to 10 000K, Power consumption - 64W, "
  },
  {
      "slug": "delonghi-coffee-machine-delonghi-eletta-explore-ecam-450-55-g",
      "text": "De'Longhi Eletta Explore ECAM 450.55 Coffee Machine, Power - 1450W, Display - LCD touch screen (TFT), Grinder - Adjustable grinder, Cleaning - Rinsing function, descaling program, removable brew group, adjustable water hardness, Features - 4 user profiles for individual storage of preferences, 42 pre-installed recipes, suitable for coffee beans and coffee powder, touch control, hot water function, adjustable hot water temperature, jug function, American coffee function, cold brew function, double height-adjustable coffee spout max. 170mm, 2-cup function, programmable switch-off time, auto-clean function for automatic and hygienic cleaning of the milk pipes with hot water and steam, LatteCrema and LatteCrema Cool milk foam system for preparing hot or cold milk foam, Dimensions - 260 x 385 x 450 mm / 11.4 kg, Milk system - Yes, with a removable milk container, Water amount - Adjustable, Coffee amount - Adjustable, Pump pressure - 19bar, Scope of delivery - milk container LatteCrema Hot, milk container LatteCrema Cool, silicone ice cube mold (\"cube\"), separate hot water outlet, cleaning brush, coffee measure, Coffee temperature - Adjustable, Water tank capacity - 1.8l, detachable with integrated water filter, Fixed water connection - No, Capacity bean container - 300g, Coffee grounds container capacity - 14 portions, "
  },
  {
      "slug": "dji-avata-2-fly-more-combo-three-batteries",
      "text": "DJI Avata 2 Fly More Combo, Drone, Video - Up to 4K60p (3840 x 2880 px) / 2.7K120fps (2688 x 1512 px), Goggles - DJI Goggles 3, Camera sensor - 1/1.3-inch 12MP sensor 2 - 12mm F2.8 lens @ 155° FOV, Maximum speed - 97km/h (manual mode), 28km/h (Normal mode), 57km/h (Sports mode), Max Flight time - up tp 21 minutes flight time per Battery, Scope of delivery - 3x Intelligent flight battery, DJI Avata 2, RC Motion 3, DJI Goggles 3, Sling bag, USB OTG cable, Charging hub, 2x propellers, 8x propeller screws, Gimbal protector, USB-PD Cable, Video transmission - DJI O4 (1080p/100fps), Image stabilization - Rocksteady 3.0, Maximum wind resistance - 10.7m/s (Manual Mode), "
  },
  {
      "slug": "msi-katana-17-hx-b14wgk-065-i7-14650hx-16gb-1tb-5070",
      "text": "MSI Katana 17 HX B14WGK-065 Gaming Laptop - Intel® Core™ i7-14650HX - 16GB - 1TB SSD - NVIDIA® GeForce® RTX™ 5070, EAN - 4711377350037, Model - 0017L7-065, Memory - 16GB, Display - 17.3 inches (1920 x 1080 ), 144Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5070, Processor - Intel® Core™ i7-14650HX, Dimensions - 39.8 x 27.6 x 2.78 cm • 2.7 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "nintendo-console-switch-2",
      "text": "Nintendo Switch 2 Console, Weight - 534 g, Display - LCD, Platform - Nintendo Switch 2, Dimensions - 13.9 x 272 x 166mm, Charging time - 3 h, Cables included - HDMI, USB Type-C, Wi-Fi standards - Wi-Fi 6 (802.11ax), Battery capacity - 5220 mAh, Display diagonal - 20.1 cm (7.9\"), Scope of Delivery - Console, Joy-Con 2 (L&R), 2 x Joy-Con 2 wrist straps, Nintendo Switch 2 Dock, Joy-Con 2 holder, power adapter, Ultra High Speed ​​HDMI™ Cable, Documents, Battery life (max) - 6.5 h, Display resolution - 1920 x 1080 pixels, USB connector type - USB Type-C, Maximum refresh rate - 120 Hz, Headphone connectivity - 3.5 mm, Compatible memory cards - MicroSD (TransFlash), MicroSDXC, Built-in memory capacity - 256 GB, Maximum memory card size - 2 TB, External display resolution - 3840 x 2160 pixels, High Dynamic Range (HDR) technology - High Dynamic Range 10 (HDR10), "
  },
  {
      "slug": "delonghi-coffee-machine-delonghi-magnifica-evo-ecam-290-81-tb",
      "text": "De'Longhi Magnifica Evo ECAM 290.81.TB Coffee Machine, Screen - Yes, Grinder - Adjustable grinder, Cleaning - Rinsing function, descaling program, removable brew group, adjustable water hardness, Features - Suitable for coffee beans and coffee powder, touch control operation, hot water function, cup height max. 140mm, double coffee spout, 2-cup function, automatic switch-off (energy-saving mode), programmable switch-off time, Programs - 7 pre-installed drinks - espresso, coffee, long, cappuccino, latte macchiato, hot water, MyLatte milk foam, Dimensions - 440 x 240 x 360 mm / 9.6 kg, Milk system - Yes, with a removable milk container, Water amount - Adjustable, Pump pressure - 15 bar, Amount of coffee - Adjustable in 3 levels, Special features - LatteCrema milk system with adjustable milk foam consistency and automatic cleaning, MyLatte function – Decide how much milk you want to use to prepare your coffee milk drink, conical grinder with adjustable grinding level (13 levels), Scope of delivery - milk container, water filter, cleaning brush, coffee measure, Coffee temperature - Adjustable, Water tank capacity - 1.8l, detachable with integrated water filter, Capacity bean container - 250g, Coffee grounds container capacity - 14 portions, "
  },
  {
      "slug": "dreame-vacuum-cleaner-dreame-dreame-l10s-ultra",
      "text": "Dreame L10s Ultra Vacuum Cleaner, Control - Controllable via smartphone & voice assistants (Alexa, Google Assistant), Runtime - 3 hours, Dimensions - 35 x 35 x 9.7 cm / 3.7 kg, Suitable For - Tiles, hardwood floors, laminates, parquet floors, carpets, stone floors, Suction power - 5300Pa, Wipe function - yes, Special features - High precision sensors, Wet/dry, Spotless cleaning, 3D navigation, up to 60 days of automatic cleaning, Scope of delivery - Vacuum robot, suction station, dust filter, wipes, power cable, operating instructions, Water tank volume - 0.08 L, Dust container volume - 0.35 L, "
  },
  {
      "slug": "apple-macbook-air-15-m4-10cpu-16gb-512gb-10gpu",
      "text": "MacBook Air 15\" - Apple M4 Chip 16GB Memory 512GB SSD - Apple Integrated 10-core GPU, Model - MW1M3D/A, Memory - 16GB, Display - 15.3 inches (2880 x 1864), Storage - 512GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M4, Dimensions - 34.04 x 23.76 x 1.15 cm • 1.51 kg, Operating System - macOS, Keyboard Language - German, "
  },
  {
      "slug": "samsung-smartphone-galaxy-z-flip7-12-gb-256-gb",
      "text": "Samsung Galaxy Z Flip7 Smartphone  - 256 GB - Dual SIM, Memory - 12 GB, Battery - 4300mAh, Display - 6.9(4.1)-inch Foldable Dynamic LTPO AMOLED 2X (1080 x 2520), Storage - 256 GB, Processor - Samsung Exynos 2500 (3 nm), Dimensions - 7.52 x 16.67 x 0.65 cm (0.188kg), Rear Camera - 50MP + 12MP, Connectivity - 5G, Front Camera - 10MP, Operating System - Android 16, "
  },
  {
      "slug": "canon-lens-canon-rf-70-200mm-f2-8l-is-usm",
      "text": "Canon RF 70-200mm f/2.8 L US USM lens, Focus - Autofocus, Mount - Canon RF mount, Weight - 2.35 lb / 1070 g, Lens Type - Full Frame, Dimensions - 3.54 x 5.75\" / 89.9 x 146 mm, Filter size - 77mm, Image Stabilizer - Yes, Scope of Delivery - RF 70-200mm F2.8 lens, front and rear cover, Lens hood, Tripod ring, Minimum focus distance - 2.3' / 70 cm, "
  },
  {
      "slug": "canon-eos-r7-rf-s-18-150mm-f3-5-6-3-is-stm-kit",
      "text": "Canon EOS R7 Camera Kit with RF-S 18-150mm f/3.5-6.3 IS STM Lens, "
  },
  {
      "slug": "samsung-galaxy-watch8-bt-44-mm",
      "text": "Samsung Galaxy Watch8 Smartwatch, Aluminium Case, 44mm, Type - Smartwatch, Features - Slimmer than ever with a modern, sleek design, Integrated Google Gemini AI on the watch, Personal sleep coach with smart health insights, AI-powered running coach, New health monitoring features: Vascular load measurement and Antioxidant index tracking, Battery Life - Up to 40h, Connectivity - Bluetooth® 5.3, WLAN 2,4 GHz & 5 GHz, NFC, Dual-GPS (L1+L5), Compatibility - Android, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - IP6816, 5 ATM17, MIL-STD-810H18, Activity Tracking - ECG measurement, Blood pressure monitoring, Heart rate monitoring, Blood oxygen (SpO2) measurement, Sleep apnea monitoring, Bioelectrical Impedance Analysis (body composition), Global Positioning - Glonass, Beidou, Galileo, "
  },
  {
      "slug": "roborock-vacuum-cleaner-roborock-s8plus",
      "text": "Roborock S8+ Vacuum & Mop Robot Cleaner, Battery - 5.2Ah, Li-Ion, Capacity - 0.65l (0.30l wet, 0.35l dry), Dimension - 96 x 350 mm / 9.2 kg, Equipment - Automatic dust discharge, filter, programmable cleaning times, 2x floor brush, 1x side brush, app control, voice control (Amazon Alexa, Google Assistant), DuoRoller riser brush, VibraRise 2.0 mopping system: 5mm mop lift, Carpet Boost+ system, Reactive 3D obstacle avoidance system, Navigation - Laser sensors, obstacle detection, overcoming obstacles, virtual walls, Accessories - Charging station, dust filter, power cord, mopping module, mop head, Noise level - 67dB(A), Charging time - 6h, Cleaning modes - Automatic, carpet, wipe function, Operating time - 180min, Charging system - Automatic, Recommended room size - Max. 300m², "
  },
  {
      "slug": "canon-camera-canon-eos-250d-ef-s-18-55-is-stm-2019",
      "text": "Canon EOS 250D Camera Kit with EF-S 18-55mm F3.5-5.6 IS STM Lens, ISO - 100 - 25600, Mount Type - EF-S, EF, Resolution - 24.1MP, Screen Type - LCD - MOVEABLE TOUCH SCREEN, Connectivity - WLAN, BLUETOOTH, Image Sensor - APS-C (CMOS), Camera Format - MIRRORLESS, Shutter Speed - 30 - 1/4000 sec, Auto-Focus Points - 9, Scope of delivery - Canon EOS 250D, Canon EF-S 18-55mm lens, LP-E17 battery, LC-E17 Battery charger, Body and lens Cap, Camera neck strap, Dimensions & Weight - 12.2 x 6.9 x 9.2 cm • 0.45 kg, "
  },
  {
      "slug": "dreame-l50-pro-ultra-robot-cleaner",
      "text": "Dreame L50 Pro Ultra Robot Cleaner, Accessories - Base station, 1 x main brush (pre-installed), 1x brush guard (pre-installed), 1x anti-scale filter (pre-installed), 1x dustbin (pre-installed with filter), 2x mop pad holders, 2x dust bags, 1x cleaning tool,1x power cable, 1x base station ramp extension, Filter type - HEPA, Suction power - 19.500 Pa, Stair detection - Yes, Special features - EasyLeap system enabling dual-layer obstacles upto 4cm, Fully automatic docking station, powerful suction system with up to 19,500 Pa, Mop extend technology and versa lift navigation, automatic mop pad cleaning with 75° hot water, Obstacle detection - Yes, Wet mopping function - Yes, Maximum operating time - 200 mins(vaccum)/ 150 mins (vacuum + mop), Pre-programmed cleaning - Yes, Device dimension including bas station - 350 x 570 x 457 mm / 15.6 kg, Charging time according to the manufacturer - 4.5 hours, "
  },
  {
      "slug": "sony-alpha-fx3-cinema-camera-fe-mount",
      "text": "Sony Alpha FX3 Cinema Camera - FE mount, ISO - 80 to 102,400 in Manual Mode (Extended: 80 to 409,600), Audio - 4-Channel 24-Bit LPCM Audio, Sensor - 10.2 Megapixel Full Frame CMOS sensor, Display - 3\" 2,360,000 Dot articulating Touchscreen LCD, storage - Dual Slot - CFexpress Type A / Dual Slot - SD/SDHC/SDXC, Autofocus - 627 Phase Detection Autofocus points, Lens mount - Sony E-mount, Resolution - UHD 4K (3840 x 2160) up to 120fps, Gamma Curve - HDR-HLG, S Cinetone, Sony S-Log 2, Sony S-Log 3, Standard, HDMI output - Raw 16-Bit via HDMI 4264 x 2408 at 23.98/25/50/59.94 fps, Dynamic Range - 15+ Stops of Dynamic range in S-log3, Shutter speed - 1/8000 to 1/4 Second, Size & Weight - 15.29 x 11.61 x 11.4 cmm / 890g, Input & Output - 1 x HDMI Output, 2 x XLR / 1/4\" TRS Combo Mic/Line Input on Included Handle, 1 x 1/8\" / 3.5 mm TRS Stereo Microphone Input on Camera Body, 1 x 1/8\" / 3.5 mm TRS Stereo Headphone Output on Camera Body, Image Stabilizer - 5-axis sensor Stabilization, Recording Formats - H.265 Long GOP/XAVC HS 4:2:2 10-Bit, H.265 Long GOP/XAVC HS 4:2:0 10-Bit, MPEG-4 AVC/XAVC S 4:2:2 10-Bit,, Scope of Delivery - Sony FX3, XLR handle, BC-QZ1 Battery Charger, body cap, power cord, Sony NP-FZ100 battery, USB-C cable, Fast & Slow Motion - 4K 120p, External Recording modes - Raw 16-Bit via HDMI, "
  },
  {
      "slug": "samsung-viewfinity-s6-s34c650tau-curved-34",
      "text": "Samsung - 34\" ViewFinity S6 S34C650TAU CURVED (34\") LS34C650TAUXEN, EAN - 8806095207834, Model - LS34C650TAUXEN, Display - VA 34 inches (3440 x 1440), Dimensions - 80.6 x 12.5 x 36.9 cm • 5.3 kg, Connectivity - 1xHDMI 2.0, 1x DisplayPort 1.2, 2x USB 3.0, Thunderbolt 4, Netzwerk (LAN), Response Time - 5ms, High Dynamic Range (HDR) - Yes, "
  },
  {
      "slug": "apple-smartphone-iphone-14-pro-max-6gb-256gb",
      "text": "Apple iPhone 14 Pro Max - 256GB - Dual SIM, Memory - 6GB, Battery - 4323 mAh, Display - 6.7-inch OLED (2796 x 1290), Storage - 256GB, Processor - Apple A16 Bionic, Dimensions - 9.62 x 17.93 x 2.91 cm (0.43kg), Rear Camera - 48MP + 12MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 16, "
  },
  {
      "slug": "canon-rf-200-800mm-f6-3-9-is-usm",
      "text": "Canon RF 200-800mm F6.3-9 IS USM, Length - 314.1 mm, Weight - 2.05 kg, Diameter - 10.2 cm, Lens type - Telephoto zoom lens, AF actuator - USM, Filter size - 9.5 cm, Lens hood model - ET-101, Focus adjustment - Auto/Manual, Image stabilizer - No, Focal length range - 200 - 800 mm, Image sensor format - Full frame, Lens mount interface - Canon RF, Image stabilizer type - Optical Image Stabilization (OIS), Maximum aperture number - 6.3, Image stabilizer number of stops - , Image stabilizer number of stops (OIS) - 5.5, "
  },
  {
      "slug": "philips-tv-philips-43pus8209-12",
      "text": "Philips 43PUS8209/12 - TV 43\" QLED 4K, HD type - 4K Ultra HD, Dimensions - 222 x 957 x 586 mm, Video apps - Amazon Prime Video, Netflix, YouTube, Audio decoders - DTS:X, Dolby Atmos, Dolby Digital, Wi-Fi standards - Wi-Fi 4 (802.11n), Display diagonal - 109.2 cm (43\"), Display resolution - 3840 x 2160 pixels, Display technology - QLED, HDMI ports quantity - 3, Native aspect ratio - 16:9, Native refresh rate - 60 Hz, Weight (with stand) - 6.6 kg, USB 2.0 ports quantity - 2, Weight (without stand) - 6.5 kg, Panel mounting interface - 200 x 100 mm, Operating system installed - Titan OS, Digital signal format system - DVB-C, DVB-S, DVB-S2, DVB-T, DVB-T2, DVB-T2 HD, High Dynamic Range (HDR) technology - High Dynamic Range 10 (HDR10), High Dynamic Range 10+ (HDR10 Plus), Hybrid Log-Gamma (HLG), "
  },
  {
      "slug": "msi-mpg-infinite-x3-ai-2nvz9-032at-ultra-9-285k-64gb-1tb-rtx-5090",
      "text": "MSI MPG Infinite X3 AI 2NVZ9-032AT Gaming PC |  Intel® Core™ Ultra 9-285K - 64GB - 1TB SSD - NVIDIA® GeForce® RTX™ 5090, EAN - 4711377290821, Model - 00B94211-032, Memory - 64GB, Cooling - Liquid cooling, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5090, Processor - Intel® Core™ Ultra 9-285K, Dimensions - 23.5 x 48 x 48.5 cm • 13.5 kg, Operating System - Windows® 11 Home, "
  },
  {
      "slug": "apple-apple-watch-ultra-2-gps-cellular-titanium-case-and-trail-loop-m-l",
      "text": "Apple Watch Ultra 2 GPS + Cellular, Titanium Case, 49mm, Type - Smartwatch, Features - Powered by new S9 SiP, New Double Tap Gesture (answer a call, open a notification, play and pause music and more), Biggest and brightest Apple Watch display, Always-On Retina display, Faster on-device Siri with health data access, Precision Finding for iPhone, Fall Detection and Crash detection, Siren, Customizable Action Button, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Blood Oxygen app, ECG app, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Precision dual-frequency GPS, Durable from -20° C to 55° C, Emergency SOS, International Emergency Calling, Strong Battery Performance, Pair Multiple Watches with Family Setup, Band Size - M/L (145–220mm), Battery Life - Up to 36h / 72h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Titanium Case and Trail Loop, Music playback - Yes, Water/Dust proof - Up to 10 ATM / MIL-STD-810H, Activity Tracking - Blood oxygen, Electrocardiography (ECG), Hours slept, Resting heart rate, Target heart rate, Skin temperature, Running (Stride Length, Ground Contact Time, Vertical Oscillation), Depth/Pressure/Location Tracking for Divers, Multisport Workouts, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "msi-cyborg-15-a13ve",
      "text": "MSI Cyborg 15 A13VE Gaming Laptop - Intel® Core™ i5-13420H - 16GB - 512GB SSD - NVIDIA® GeForce® RTX™ 4050, Model - 0015K1, Memory - 16GB, Display - 15.6 inches (1920 x 1080), 144Hz, Storage - 512GB SSD, Graphics - NVIDIA® GeForce® RTX™ 4050, Processor - Intel® Core™ i5-13420H, Dimensions - 36 x 27.9 x 2.8 cm • 2.6 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "samsung-tablet-galaxy-tab-s10-ultra-5g-12gb-256gb",
      "text": "Samsung Tablet, Galaxy Tab S10 Ultra - 5G - Android - 256GB, Memory - 12GB, Battery - 11,200mAh, Display - 14.6-inch Dynamic AMOLED 2X (2960 x 1848), Storage - 256GB, Processor - MediaTek Dimensity 9300+, Dimensions - 20.8 x 32.6 x 0.54 cm (0.723kg), Rear Camera - 13MP Primary +8MP Ultrawide, Connectivity - 5G, Front Camera - 12MP + 12MP, Operating System - Android, "
  },
  {
      "slug": "hp-15-fd0033ng",
      "text": "HP 15-fd0033ng Laptop - Intel® Core™ i3-1315U - 8GB - 256GB SSD - Intel® UHD Graphics, Model - 800H2EA#ABD, Memory - 8GB, Display - 15.6 inches (1920 x 1080), Storage - 256GB SSD, Graphics - Intel® UHD Graphics, Processor - Intel® Core™ i3-1315U, Dimensions - 35.98 x 23.6 x 1.86 cm • 1.6 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "jbl-partybox-stage-320-party-bluetooth-speaker",
      "text": "JBL Partybox Stage 320 Party Bluetooth Speaker, Type - Party Bluetooth Speaker, Model - Partybox Stage 320, Power - 240 W, Battery - Up to 18h battery, Frequency - 45-20,000 Hz, Durability - IPX4 splashproof, Connections - Dual microphone and guitar inputs, Connectivity - Bluetooth 5.4, Operating mode - Battery-powered, Special features - The JBL PartyBox Stage 320 offers robust JBL Pro Sound with strong bass, an adaptive light show, microphone and guitar inputs with effects, easy transport with a handle and wheels, splash-proofing, 18 hours of playtime with a replaceable battery, and wireless connectivity with other Auracast-enabled JBL speakers., "
  },
  {
      "slug": "fujifilm-x-hf1",
      "text": "Fujifilm X-HF1, ISO - Native 200 to 12,800, Lens - 10.8mm (32mm equivalent) f/2.8-11 prime lens, Photo - 3:4 Aspect Ratio, Storage - Single SD/SDHC/SDXC card slot (UHS-I), Screen Type - 2.4\" 920k-dot Fixed Touchscreen LCD, View Finder - Optical viewfinder with approx. 0.38x magnification, Connectivity - Wi-Fi 5, Bluetooth 5.2, USB-C, Image Sensor - 17.74 MP 1\"-Type CMOS Sensor, Shutter Speed - 1/2000 to 15 Minutes (Mechanical Shutter), Video capture - Up to 2160 x 1440 vertical video at 23.98 fps, Max Resolution - 17.74 Megapixels, Auto-Focus Points - Not specified in the provided data, Scope of delivery - Camera Body, NP-W126S Rechargeable Lithium-Ion Battery, "
  },
  {
      "slug": "fujifilm-x-e5-xf23mmf2-8-r-wr",
      "text": "FUJIFILM X-E5 + XF23mmF2.8 R WR, Lens - FUJIFILM XF 23mm f/2.8 R WR Lens, Sensor - 40.2 Megapixel APS-C X-Trans CMOS 5 HR sensor, Display - 3\" 1.040M-dot 3-way LCD touchscreen, Storage - Single slot SD Card (UHS-II) (V90 or faster recommended), Interface - Micro HDMI port, Microphone 3.5mm TRS input, USB-C port, WLAN 5, Bluetooth 4.2, Processor - X-Processor 5 Image Processor, Dimensions - 124.9 x 72.9 x 39.1 mm - 445 g, Viewfinder - 2.36m-Dot 0.62x OLED EVF, Photo capture - 7728 x 5152 px (4:3) RAW/JPEG, ISO Sensitivity - Photo 125 to 12,800 (Extended: 64 to 51,200) // Video 125 to 12,800 (Extended 25,000), Special features - Film simulation dial, External recording - RAW 12-bit via HDMI 6240 x 3510 at 23.98/24.00/25/29.97 fps - Raw 12-Bit via HDMI6240 x 3512 at 23.98/24.00/25/29.97 fps, Continuous shooting - Up to 13 FPS RAW, Image Stabilisation - Sensor-shift 5-Axis, External Video recording - 4:2:2 10-Bit via HDMI or, Internal video Recording - 6240 x 3150 at 23.98/24.00/25/29.97fps - DCI 4K (4096 x 2160) at 23.98/24.00/25/29.97/50/59.94fps - UHD 4K (3840 x 2160) at 23.98/24.00/25/29.97/50/59.94fps, "
  },
  {
      "slug": "huawei-gt5-pro-titanium-case-and-fluoroelastomer-band-46mm",
      "text": "Huawei Watch GT5 Pro Smartwatch, Titanium Case, 46mm, Type - Smartwatch, Features - Premium design, Heart Rate Monitoring, Blood oxygen detection, Sleep monitoring, Automatic stress test, Breathing exercises, Health clovers, Menstrual cycle, Sleep apnea detection, Bluetooth calling, message viewing&notification, Battery Life - Up to 14 days, Connectivity - GPS, Bluetooth, Wi-Fi, NFC, Compatibility - iOS / Android, Build Material - Titanium Case and Fluoroelastomer Band, Music playback - Yes, Water/Dust proof - 5 ATM / IP68, Activity Tracking - 24/7 heart rate tracking; Skin temperature; Stress level; Calories burned; Can track swimming, running, hiking and general workouts, Global Positioning - GPS, Beidou, GLONASS, Galileo, QZSS, "
  },
  {
      "slug": "msi-geforce-rtx-5090-suprim-soc-32gb-gddr7",
      "text": "MSI GeForce RTX 5090 SUPRIM SOC 32GB GDDR7 Graphics Card, Memory - 32GB (GDDR7), Dimensions - 7.6 x 35.9 x 1.5 cm • 2.84 kg, Boost Clock Speed - 2565 MHz, "
  },
  {
      "slug": "hp-17-cn3061ng-i5-1334u-16gb-1tb",
      "text": "HP 17-cn3061ng Laptop - Intel® Core™ i5-1335U - 16GB - 1TB SSD - Intel® Intel Integrated Graphics, EAN - 198701941804, Model - B04R7EA#ABD, Memory - 16GB, Display - 17.3 inches (1920 x 1080 pixels), Storage - 1TB SSD, Processor - Intel® Core™ i5-1335U, Graphics card - Intel® Intel Integrated Graphics, Operating system - Windows® 11 Home, Keyboard language - German, Dimensions and weight - 40 x 25.7 x 1.9 cm - 2.08 kg, Sustainable technologies and materials - Plastic that would otherwise potentially end up in the sea in the base, frame and speaker housing(s); keyboard keycaps made from post-consumer recycled plastic, "
  },
  {
      "slug": "roborock-q8-max-white-robot-cleaner-5f49c634-841f-450f-9595-50a8cb788a79",
      "text": "Roborock Q8 Max+ Vacuum & Mop Robot Cleaner, Control - Controllable via smartphone & voice assistant (e.g. Alexa), Runtime - 240 min, Dimensions - 353 x 350 x 965 mm / 3.6 kg, SUITABLE FOR - Tiles, carpet, Charging time - 360 min, Suction power - 59 W, Special features - Suction function with a high suction power of 5500Pa, equipped with an electronic pump and 30 different water quantity settings, PreciSense™ LiDAR sensor, includes suction station, overcomes obstacles up to 20 mm (e.g. ledges, carpets), automatic return to the suction station when the battery level is low with subsequent continuation of the cleaning process, Scope of delivery - Robot vacuum cleaner, suction station, dust filter, water tank, mop module, mop attachment, charging station, power cable, disposable bag, screwdriver, Volume of the dust tank - 2.5 L, Volume of the water tank - 0.35 L, VOLUME OF THE DUST CONTAINER - 0.47 L, "
  },
  {
      "slug": "sapphire-graphic-cards-sapphire-radeon-rx-7800-xt-nitro-gaming-oc",
      "text": "Sapphire Radeon RX 7800 XT Nitro+ Gaming OC 16GB Graphics Card, Memory - 16GB (GDDR6X), Dimensions - 32 x 13.48 x 6.15 cm • 3.6 kg, Boost Clock Speed - 2566MHz, "
  },
  {
      "slug": "fujifilm-x-t5-xf16-50mmf2-8-4-r-lm-ois",
      "text": "FUJIFILM X-T5 + XF16-50mmF2.8-4.8 R LM WR, KIT, ISO - 80 to 51,200, Lens - FUJIFILM XF 16-50mm f/2.8-4.8 R LM WR, Video - H.264/H.265/MP4/MPEG-4 4:2:2 10-Bit, 6240 x 3140 at 23.98/24.00/25/29.97 fps [50 to 360 Mb/s], DCI 4K (4096 x 2160) at 23.98/24.00/25/29.97/50/59.94 fps [50 to 360 Mb/s], Storage - Dual SD Card slot, USH-II (V90 or faster recommended), Mount type - Fujifilm X-mount, Screen Type - 3\" Tilting 1,084,000-Dot Touchscreen LCD, View Finder - 3,690,00-Dot OLED EVF, Connectivity - 1x Micro-HDMI output / 1x3.5mm TRS Stereo microphone input, 1x3.5mm TRS headphone output / USB-C interface / WiFi / Bluetooth, Image Sensor - 40MP APS-C X-Trans CMOS 5 HR BSI sensor, Photo format - HEIF, JPEG, Raw, TIFF, Shutter Speed - 30' -  1/8000, Stabilization - 5-Axis Sensor-Shift, Max Resolution - 7728 x 5152, Auto-Focus Points - 425-point Phase detect AF / Face/eye detect, Subject selection (Animal, bird, automobile, motorcycle&bike, airplane, train), Scope of delivery - Fujifilm X-T5 Mirrorless Camera, FUJIFILM XF 16-50mm f/2.8-4.8 R LM WR lens, NP-W235S Battery, AC-4VJ power Adapter, Shoulder strap, Body cap, Electronic Shutter - Up to 20 fps at 40.2 MP for up to 168 Frames (JPEG) / 37 Frames (Raw), Mechanical Shutter - Up to 15 fps at 40.2 MP for up to 119 Frames (JPEG) / 19 Frames (Raw), "
  },
  {
      "slug": "apple-smartphone-iphone-15-pro-max-8gb-512gb",
      "text": "Apple iPhone 15 Pro Max - 512GB, Memory - 8GB, Battery - 4852 mAh, Display - 6.7-inch OLED Super Retina XDR (2796 x 1290), Storage - 512GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 17, "
  },
  {
      "slug": "sony-6700-body",
      "text": "Sony Alpha 6700 Mirrorless Camera Body, ISO - 50 to 102,400, Screen - Articulating 1,030,000-dot LCD, Sensor - 27MP CMOS APS-C, Storage - Single slot SD card (UHS-II), Features - S-Log3, S-Gamut3, S-Cinetone, User LUTs, Autofocus - 759 Phase-detect points, Viewfinder - 100% Coverage, 1.07x magnification 2,359,296-dot OLED EVF, Bayonet mount - Sony E, Input & Output - 1x Micro-HDMI / 2x 3.5mm TRS Headphone & Microphone) / USB-C PD + Data, Scope of delivery - A6700 body, Battery, shoulder strap, USB-C cable, External recording - up to UHD 4K (3840 x 2160) 10-bit at 59.94 FPS, Internal recording - up to UHD 4K (3840 x 2160) 120FPS (XAVC HS 4:2:2 10-Bit), Continuous shooting - Up to 11FPS for up to 59 frames RAW / up to 1000 Frames JEPG, Image stabilization - 5-axis sensor-shift, Wireless connectivity - Bluetooth 4.2 / WLAN 2.4GHz & 5GHz, "
  },
  {
      "slug": "msi-meg-vision-x-ai-2nvv7-009at-ultra-7-265k-32gb-2tb-rtx-5080",
      "text": "MSI MEG Vision X AI 2NVV7-009AT Gaming PC - Intel® Core™ Ultra 7-265K - 32GB - 2TB SSD - NVIDIA® GeForce® RTX™ 5080, EAN - 4711377290791, Model - 00B92111-009, Storage - 2TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5080, Processor - Intel® Core™ Ultra 7-265K, CPU Cooler - Liquid cooling, Dimensions - 50 x 30 x 42 cm • 18 kg, Memory Size - 32GB, Operating System - Windows® 11 Home, "
  },
  {
      "slug": "dreame-l10s-pro-ultra-heat-robot-cleaner",
      "text": "Dreame L10s Pro Ultra Heat Robot Cleaner, Dimensions - 355 x 97 x 355 mm / 4.1 kg (13.3 kg including the station), Filter type - HEPA filter, Suction Power - 7000 Pa, Operation area - Carpets, tiles, hardwood floors, pets, laminates, parquet floors, stone floors, Special features - Automatic dust extraction, self-cleaning of the mops and drying with hot air, liftable mops, extendable mops, Scope of delivery - Robot vacuum cleaner, base station, 2 mops, 2 wiper pad holders, side brush, 1 dust bag, power cable, base station ramp, Product description - By cleaning the mops independently with hot water at 58°C, it offers an hygienic and efficient solution. Thanks to the Mop Extend technology, the vacuum cleaner can reach almost every corner and cleans thoroughly, even along the baseboard or table or chair legs. The automatic dirt detection ensures that no stain is overlooked. The device automatically detects dirt and adapts its cleaning pattern specifically. You can also experience maximum comfort with the fully automatic suction station. No more annoying bending over or manual emptying - the device picks up the dirt and stores it safely., Maximum operating time - 150 mins, Maximum volume of the water tank - 0.08 liters, Charging time according to the manufacturer - 3.5 hours, "
  },
  {
      "slug": "samsung-tv-samsung-gu43cu7179uxzg",
      "text": "Samsung GU43CU7179UXZG - TV 43\" Crystal UHD 4K, Screen - Flat, Delivery - Remote control, power cable, instructions, Processor - Crystal Processor 4K, Model Name - GU43CU7179UXZG, Connections - 3x HDMI, 2x Antenna input, LAN, 1x USB, 1x Digital Audio Output, 1x CI+ Slot, WiFi, Bluetooth, Anynet+ (HDMI-CEC), Product type - LED TV UHD 4K, VESA standard - 200 x 200, Receptions Types - DVB-C/S2/T2 HD, Special Features - PurColor technology enables true-to-life colors that captivate. Crystal 4K processor shows color nuances almost as they are with powerful 4K upscaling. Samsung Smart Hub & Gaming Hub bring all your favorite smart TV and gaming apps together in one place., Dimensions with stand - 963.9 x 627.8 x 192.5 mm, Dimensions without stand - 963.9 x 558.9 x 59.6 mm, HDR (High Dynamic Range) - HDR10+, "
  },
  {
      "slug": "roborock-vacuum-cleaner-roborock-s7-maxv",
      "text": "Roborock S7 MaxV Vacuum & Mop Robot Cleaner, Control - App, Amazon Alexa, Google Assistant, Runtime - 180 min, Dimensions - 35 x 35.3 x 9.7 cm / 4.7 kg, Suitable For - Tiles, hardwood floors, laminates, parquet floors, carpets, stone floors, Suction Power - 5100Pa, Delivery Scope - Vacuum robot, charging station, dust filter, wipes, power cord, user manual, Special Features - Ultrasonic wiping function with room-specific control of the amount of wiping water for up to 200m² • Laser distance sensors (LDS) & AI dual camera for 360° coverage and avoidance of obstacles • Intelligent route planning with real-time room maps & selective individual room planning with virtual vacuum & wiping exclusion zones, Volume of the Water Tank - 0.2 L, Volume of the Dust Container - 0.4 L, "
  },
  {
      "slug": "samsung-tv-samsung-gu65du8579uxzg",
      "text": "Samsung GU65DU8579UXZG - TV 65\" Crystal UHD 4K, HDR 10+ - Yes, Contrast - Mega Contrast, Smart TV - Yes, Gaming Hub - Yes, Connections - HDMI x3, USB x2, Digital audio output (optical) x1, Antenna input x3, CI+ slot x1, Network connection (LAN) x1, Screen Type - Crystal UHD, SmartThings - Yes, Ambient Mode - Ambient Mode, Analog Tuner - Yes, Power Supply - 220‑240V, Speaker Type - 2-Channel, Picture Engine - Crystal Processor 4K, Remote Control - TM2360E, Adjustable Stand - No, Screen Mirroring - Yes, Bluetooth Version - BT5.2, Contrast Enhancer - Yes, Motion Technology - Motion Xcelerator, Refresh Rate (Hz) - 50, Screen Resolution - 3,840x2,160, Screen Size in cm - 163, Weight with stand - 21.7 kg, Weight without stand - 20.9 kg, HDR (High Dynamic Range) - HDR, VESA Wall Mount Standard - 400x300mm, Output Power (RMS) in Watts - 20W, Dimensions with stand (HxWxD) - 897 x 1451 x 290mm, Digital Television Reception (DVB) - DVB-T2;DVB-C, HDMI-eARC (enhanced Audio Return Channel) - eARC/ARC, "
  },
  {
      "slug": "google-smartphone-pixel-8-pro-12gb-128gb",
      "text": "Google Pixel 8 Pro Smartphone - 128GB - Dual SIM, Memory - 12GB, Battery - 5050 mAh, Display - 6.7-inch OLED (1344 x 2992), Storage - 128GB, Processor - , Dimensions - , Rear Camera - 50MP+48MP+48MP, Connectivity - 5G, Front Camera - 10.5MP, Operating System - Android 14, "
  },
  {
      "slug": "sony-fe-14mm-f-1-8-gm",
      "text": "Sony FE 14mm F/1.8 GM, "
  },
  {
      "slug": "google-smartphone-pixel-10-pro-16gb-128gb",
      "text": "Google Pixel 10 Pro Smartphone - 128GB - Dual SIM, Memory - 16GB, Battery - 4870 mAh, Display - 6.3-inch LTPO - OLED (1280 x 2856), Storage - 128GB, Processor - Google Tensor G5, Dimensions - 0.72 x 15.28 x 0.85 cm (0.207kg), Rear Camera - 50MP+48MP+48MP, Connectivity - 5G, Front Camera - 42MP, Operating System - Android 16, "
  },
  {
      "slug": "de-longhi-primadonna-soul-ecam610-75-mb-coffee-machine",
      "text": "De'Longhi PrimaDonna Soul ECAM610.75.MB Coffee Machine, Grinder - Steel disc grinder with 13 adjustable grinding levels, Programs - Espresso, Coffee, Long Coffee, Doppio+, Coffee Pot, Brew-Over-Ice, Long Black, Americano, Cappuccino, Latte Macchiato, Cappuccino+, CappuccinoMix, Hot Milk, Caffe Latte, Flat White, Cortado, Espresso Macchiato, To-Go function , tea function, hot water, Dimensions - 458 x 262 x 390 mm / 13 kg, Heating time - 40-45 seconds, Pump pressure - 19 bars, Special features - Bean Adapt Technology: optimal setting of the grinding level and brewing parameters via smartphone, 21 pre-installed coffee and milk specialties, 5 user profiles for saving personal preferences, easy operation thanks to the 4.3 inch TFT touch display, coffee pot function for up to 6 cups, Scope of delivery - Fully automatic coffee machine, 1L glass coffee pot (DLSC021), milk container LatteCrema Hot, separate hot water spout, water filter, cleaning brush, coffee measure, Water tank volume - 2.20 L, Bean container volume - 500 g, Milk container capacity - 0.5 L, "
  },
  {
      "slug": "apple-imac-24-m4-8cpu-16gb-256gb-8gpu",
      "text": "iMac 24\" - Apple M4 Chip 16GB Memory 256GB SSD - Integrated 8-core GPU, Model - MWUC3D/A, Memory - 16GB, Display - 23.5 inches (4480 x 2520), Storage - 256GB SSD, Graphics - Apple Integrated 8-core GPU, Processor - Apple M4, Dimensions - 54.7 x 14.7 x 46.1 cm • 4.48 kg, Operating System - macOS, Keyboard Language - German, "
  },
  {
      "slug": "apple-macbook-pro-14-m4-pro-12cpu-24gb-512gb-16gpu-eng",
      "text": "MacBook Pro 14\" - Apple M4 Pro Chip 24GB Memory 512GB SSD - Integrated 16-core GPU, Model - MX2H3N/A, Memory - 24GB, Display - 14.2 inches (3024 x 1964), Storage - 512GB SSD, Graphics - Apple Integrated 16-core GPU, Processor - Apple M4 Pro, Dimensions - 22.12 x 31.26 x 1.55 cm • 1.61 kg, Operating System - macOS, Keyboard Language - English, "
  },
  {
      "slug": "asus-graphics-card-geforce-rtx-5090-tuf-gaming-oc-32gb-gddr7",
      "text": "Graphics Card ASUS GeForce RTX 5090 TUF GAMING OC 32GB GDDR7, Depth - 72 mm, Height - 146 mm, Length - 348 mm, Weight - 2.37 kg, Memory bus - 512 bit, Cooling type - Active, HDMI version - 2.1b, Interface type - PCI Express 5.0, Number of fans - 3 fan(s), Data transfer rate - 28 Gbit/s, Graphics processor - GeForce RTX 5090, Maximum resolution - 7680 x 4320 pixels, HDMI ports quantity - 2, DisplayPorts quantity - 3, Graphics card memory type - GDDR7, Graphics processor family - NVIDIA, Processor boost clock speed - 2550 MHz, Discrete graphics card memory - 32 GB, Maximum displays per videocard - 4, "
  },
  {
      "slug": "samsung-tablet-galaxy-tab-s9-wifi-128gb-8gb",
      "text": "Samsung Tablet, Galaxy Tab S9 - WIFI - Android - 128GB, Memory - 8GB, Battery - 8400 mAh, Display - 11-inch Dynamic AMOLED 2X (2560x1600), Storage - 128GB, Processor - Qualcomm Snapdragon® 8 Gen 2, Dimensions - 16.5 x 25.4 x 0.6 cm (0.5kg), Rear Camera - 13MP, Connectivity - WIFI, Front Camera - 12MP, Operating System - Android, "
  },
  {
      "slug": "samsung-smartphone-s22-ultra-8gb-128gb",
      "text": "Samsung Galaxy S22 Ultra Smartphone - 128GB - Dual SIM, Memory - 8GB, Battery - 5000 mAh, Display - 6.8-inch Dynamic AMOLED 2X, HDR10+ (1440 x 3088), Storage - 128GB, Processor -  Exynos 2200 (4 nm), Dimensions - 7.79 x 16.33 x 0.89 cm (0.228kg), Rear Camera - 108MP+10MP+10MP+12MP, Connectivity - 5G, Front Camera - 40MP, Operating System - Android 12, One UI 4, "
  },
  {
      "slug": "google-smartphone-pixel-10-pro-xl-16gb-256gb",
      "text": "Google Pixel 10 Pro XL Smartphone - 256GB - Dual SIM, Memory - 16GB, Battery - 5200 mAh, Display - 6.8-inch LTPO - OLED (1344 x 2992), Storage - 256GB, Processor - Google Tensor G5, Dimensions - 0.76 x 16.28 x 0.85 cm (0.232kg), Rear Camera - 50MP+48MP+48MP, Connectivity - 5G, Front Camera - 42MP, Operating System - Android 16, "
  },
  {
      "slug": "samsung-smartphone-s22-8gb-128gb",
      "text": "Samsung Galaxy S22 Smartphone - 128GB - Dual SIM, Memory - 8GB, Battery - 3700 mAh, Display - , Storage - 128GB, Processor -  Exynos 2200 (4 nm), Dimensions - 7.06 x 14.6 x 0.76 cm (0.167kg), Rear Camera - 50MP+10MP+12MP, Connectivity - 5G, Front Camera - 10MP, Operating System - Android 12, One UI 4, "
  },
  {
      "slug": "apple-smartphone-iphone-15-pro-8gb-512gb",
      "text": "Apple iPhone 15 Pro - 512GB, Memory - 8GB, Battery - 3650 mAh, Display - 6.1-inch OLED Super Retina XDR (1179 x 2556), Storage - 512GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 17, "
  },
  {
      "slug": "fujifilm-x-t5-body-black",
      "text": "Fujifilm X-T5 Mirrorless Camera Body, ISO - 80 to 51,200, Video - H.264/H.265/MP4/MPEG-4 4:2:2 10-Bit, 6240 x 3140 at 23.98/24.00/25/29.97 fps [50 to 360 Mb/s], DCI 4K (4096 x 2160) at 23.98/24.00/25/29.97/50/59.94 fps [50 to 360 Mb/s], Storage - Dual SD Card slot, USH-II (V90 or faster recommended), Mount type - Fujifilm X-mount, Screen Type - 3\" Tilting 1,084,000-Dot Touchscreen LCD, View Finder - 3,690,00-Dot OLED EVF, Connectivity - 1x Micro-HDMI output / 1x3.5mm TRS Stereo microphone input, 1x3.5mm TRS headphone output / USB-C interface / WiFi / Bluetooth, Image Sensor - 40MP APS-C X-Trans CMOS 5 HR BSI sensor, Photo format - HEIF, JPEG, Raw, TIFF, Shutter Speed - 30' -  1/8000, Stabilization - 5-Axis Sensor-Shift, Max Resolution - 7728 x 5152, Auto-Focus Points - 425-point Phase detect AF / Face/eye detect, Subject selection (Animal, bird, automobile, motorcycle&bike, airplane, train), Scope of delivery - Fujifilm X-T5 Mirrorless Camera, NP-W235S Battery, AC-4VJ power Adapter, Shoulder strap, Body cap, Electronic Shutter - Up to 20 fps at 40.2 MP for up to 168 Frames (JPEG) / 37 Frames (Raw), Mechanical Shutter - Up to 15 fps at 40.2 MP for up to 119 Frames (JPEG) / 19 Frames (Raw), "
  },
  {
      "slug": "apple-smartphone-iphone-13-4gb-128gb",
      "text": "Apple iPhone 13 - 128GB - Dual SIM, Sim - Dual SIM (Nano Sim + eSim), Memory - 4GB, Battery - 3240 mAh, Display - 6.1-inch Super Retina XDR display (2532 x 1170), Storage - 128GB, Processor - Apple A15 Bionic, Dimensions - 7.15 x 14.67 x 0.765 cm (0.174kg), Rear Camera - 12mp + 12mp, Connectivity - 5G, Front Camera - 12mp, Operating System - iOS 15, "
  },
  {
      "slug": "samsung-galaxy-watch-5-pro-lte-45mm",
      "text": "Samsung Galaxy Watch5 Pro LTE Smartwatch, Titanium Case, 45mm, Type - Smartwatch, Sensors - Accelerometer, Barometer, Ambient Light Sensor, Compass, Pulse oximeter (Sp02), Samsung BioActive Sensor (Herzfrequenz, ECG und BIA), Features - Premium Titanium design with Sapphire Crystal, Samsung + Google Pay, Advanced Sleep Monitoring, Continuous Blood Pressure and ECG Measurement, Training Recommendations based on Data, Smart Fall Detection, Special Functions for Outdoor Athletes (Route Target Workout, Track Back, Turn by Turn Navigation), Advanced Body Composition Analysis, Women's Health (Track Fertility Windows, Ovulation Cycles and Periods), Google Apps + OS, Strong Battery Performance & Fast Wireless Charging, Band Size - M/L, Battery Life - Up to 80 hours, Connectivity - Bluetooth® 5.2, WLAN 2,4 GHz & 5 GHz, NFC, GPS, Compatibility - Android 8.0 and higher, Build Material - Titanium Case and Sport Band, Music playback - On-board music storage, Operating System - Wear OS, Water/Dust proof - 5ATM / IP68 / MIL-STD-810H, Activity Tracking - Blood oxygen, Blood pressure, Heart rate, Bioelectrical impedance analysis (BIA), Global Positioning - GPS, Glonass, Beidou, Galileo, "
  },
  {
      "slug": "apple-airpods-max-over-ear-headphones",
      "text": "Apple AirPods Max Noise-cancelling Over-ear Bluetooth Headphones, Type - Over-ear headphones, Codecs - N/A, Battery - Up to 20h with ANC & 3D audio, Sensors - Optical sensor (in each earpiece), Position sensor (in each earpiece), Case detection sensor (in each earpiece), Accelerometer (in each earcup), Gyro sensor (left earcup), Connections - Lightning cable, Key features - Dynamic driver developed by Apple provides rich, deep bass, accurate mid-ranges, and crisp, clean high-frequency extension so every note can be heard. Transparency mode, Adaptive EQ, 3D audio with dynamic head tracking, digital crown control, Storage in the smart case extends the battery life through extremely low energy consumption, multi-connect allows automatic device switching., Noise canceling - ANC, Wireless charging - No, Integrated microphone - 9x microphones for noise cancellation and voice capture, Intelligent functions - Voice control with Siri, smart case, wear detection, Water/splash resistant - N/A, Frequency response, Sound pressure level & Impedance - N/A, "
  },
  {
      "slug": "samsung-tv-samsung-gu43bu8079uxzg",
      "text": "Samsung TV 43\" GU43BU8079UXZG Crystal UHD 4K, Screen - Flat, Delivery - Remote control, stand, power cable, instructions, Processor - Crystal Processor 4K, Model Name - TV Samsung GU43BU8079UXZG, Connections - 3x HDMI, 2x USB, 1x digital audio output (optical), 2x antenna input, CI+, Wifi, Bluetooth, Product type - LED TV UHD 4K, VESA standard - 200 x 200, Receptions Types - DVB-C/T2 HD, Special Features - Dynamic Crystal Color, UHD Dimming, 4K Resolution (3840 x 2160), AirSlim Design, Premium Solar Smart Remote, Dimensions with stand - 96,5 x 59,9 x 20,5 cm, Dimensions without stand - 96,5 x 55,9 x 2,5 cm, HDR (High Dynamic Range) - HDR, "
  },
  {
      "slug": "msi-katana-17-b13vgk",
      "text": "MSI Katana 17 B13VGK-1212 Gaming Laptop - Intel® Core™ i7-13620H - 16GB - 1TB SSD - NVIDIA® GeForce® RTX 4070, Model - 0017L5-1212, Memory - 16GB, Display - 17 inches (1920 x 1080), 144Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX 4070, Processor - Intel® Core™ i7-13620H, Dimensions - 36 x 27.9 x 2.8 cm • 2.6 kg, Operating System - Windows® 11 Home, Keyboard Language - German, 20 years of MSI laptops - YOUR GIFT - Scan the QR code or find out more at msi.gm/geschenk., "
  },
  {
      "slug": "samsung-monitor-samsung-samsung-27-odyssey-g7-uhd-monitor-27-ls32bg700euxen",
      "text": "Samsung - 32\" Odyssey G7 UHD LS32BG700EUXEN, Model - LS32BG700EUXEN, Display - IPS 32 inches (3840 x 2160), 144Hz, Dimensions - 17.6 x 79.8 x 54.5 cm • 11 kg, Connectivity - 2x HDMI, 1x Display Port, 1x Ethernet (LAN), 1x Audio Output, Response Time - 1ms, High Dynamic Range (HDR) - Yes, "
  },
  {
      "slug": "google-smartphone-google-pixel-9-pro-xl-16gb-128gb",
      "text": "Google Pixel 9 Pro XL Smartphone - 128GB - Dual SIM, Memory - 16GB, Battery - 5060 mAh, Display - 6.8-inch LTPO - OLED (1344 × 2992 ), Storage - 128GB, Processor - , Dimensions - , Rear Camera - 50MP+48MP+48MP, Connectivity - 5G, Front Camera - 42MP, Operating System - Android 14, "
  },
  {
      "slug": "asus-tuf-a15-r7-7735hs-16gb-1tb-rtx-4060",
      "text": "Asus TUF A15 Gaming Laptop - AMD Ryzen™ 7 7735HS - 16GB - 1TB SSD - NVIDIA® GeForce® RTX 4060, Model - FA507NV-LP002W, Memory - 16GB, Display - 15.6 inches (1920 x 1080), 144Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX 4060, Processor - AMD Ryzen™ 7 7735HS, Dimensions - 35.4 x 25.1 x 2.49 cm • 2.2 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "roborock-q8-max-white-robot-cleaner",
      "text": "Roborock Q8 Max Vacuum & Mop Robot Cleaner, Dimensions - 353 x 350 x 96 mm / 4 kg, Battery Life - 240 min, Charging Time - 360 min, Suction power - 59 W, Special Features - Suction function with a high suction power of 5500Pa, equipped with an electronic pump and 30 different water quantity settings, PreciSense™ LiDAR Sensors, intelligent path planning with real-time room maps & selective individual room planning with virtual vacuum & wipe exclusion zones, controllable via smartphone & voice assistant (e.g. Alexa), overcoming obstacles up to 20 mm (e.g. ledges, carpets), Scope of delivery - operation manual, charging station, mop pad, mop attachment, power cable, robot, power cable, water tank, Suitable surfaces - tiles, carpet, Water tank capacity - 0.35 L, Dust container capacity - 0.47 L, "
  },
  {
      "slug": "gopro-hero-11-creator-edition",
      "text": "Gopro HERO 11 Creator Edition, Sensor - 27MP CMOS sensor, Weight - 4.5 oz / 127 g, Battery - Rechargeable 1720 mAh Battery pack, Display - 2.27\" Touch screen LCD / front live-view monitor, Storage - Single slot microSD, Dimension - 2.8 x 2 x 1.3\" / 71.8 x 50.8 x 33.6 mm, Recording - 5.3K60/2.7K240 Video, 27MP Photos, Connectivity - 1x USB-C / Headphone jack, Focal length - 24.4mm, Special Features - HyperSmooth 5.0 Image Stabilization, 8x Slow-Motion Video, Scope of Delivery - Gopro Hero 11,, Gopro Media Pod, Gopro Light mod, Gopro Battery Grip, Removable Windscreen, Adhesive Mount, Mounting Buckle, THumbscrew, Gopro battery, USB Type-C cable, Carry Case, Weather resistance - 33' Waterproof without Housing, Image Stabilization - Digital, "
  },
  {
      "slug": "apple-tablet-ipad-mini-wifi-wifi-4gb-64gb",
      "text": "Apple iPad mini (2021) - WiFi - 64GB, Memory - 4GB, Battery - 19.3 Wh, Display - 8.3-inch Liquid Retina IPS (2266 x 1488), Storage - 64GB, Processor - Apple A15 Bionic, Dimensions - 13.4 x 19.5 x 0.63 cm (0.29kg), Rear Camera - 12MP, Connectivity - WiFi, Front Camera - 12MP, Operating System - iOS 15, "
  },
  {
      "slug": "microsoft-surface-pro-11th-copilot-pc-oled-x-elite-16gb-512gb-ssd-w-o-pa",
      "text": "Microsoft Surface Pro, Copilot+ PC, 13” OLED Touchscreen, Snapdragon® X Elite, 16GB RAM, 512GB SSD, 11. Edition (Device Only), Model - EP2-08363, Memory - 16GB, Display - 13 inches (2880 x 1920), 120Hz, Storage - 512GB SSD, Graphics - Qualcomm® Adreno™ GPU, Processor - Snapdragon® X Elite, Dimensions - 20.9 x 28.7 x 0.93 cm • 0.9 kg, Power Adaptor - not included, Operating System - Windows® 11 Home, Keyboard Language - N/A, "
  },
  {
      "slug": "nikon-lens-nikon-nikkor-z-70-200mm-f2-8-vr-s",
      "text": "Nikkor Z 70-200mm f/2.8 S VR, Overview - The Lens is suitable for various areas of application; whether for events, news reporting or sports coverage. It is perfect for daily professional use with its compact design and smooth autofocus, Scope of delivery - Nikon Nikkor Z 70-200mm f2.8 S, lens cap (front cap), lens cap (rear cap), lens hood, lens pouch, Dimensions & Weight - 8.9 x x 1.14 cm • 22 kg, "
  },
  {
      "slug": "eos-2000d-kit-18-55mm-is-ii",
      "text": "Canon EOS 2000D Camera Kit with EF-S 18-55mm f/3.5-5.6 IS II Lens, "
  },
  {
      "slug": "samsung-smartphone-samsung-s23-8gb-128gb",
      "text": "Samsung Galaxy S23 Smartphone - 128GB - Dual SIM, Memory - 8GB, Battery - 3900mAh, Display - 6.1-inch Dynamic AMOLED 2X (1080 x 2340), Storage - 128GB, Processor - Qualcomm® Snapdragon 8 Gen 2, Dimensions - 7.09 x 14.63 x 0.76 cm (0.168kg), Rear Camera - 50MP (Wide) + 12MP (Ultra Wide) + 10MP (Telephoto), Connectivity - 5G, Front Camera - 12MP, Operating System - Android 13, "
  },
  {
      "slug": "lenovo-thinkpad-e16-g2-ultra7-155h-16gb-512gb",
      "text": "Lenovo ThinkPad E16 G2 Laptop - Intel® Core™ Ultra 7-155H - 16GB - 512GB - Intel® Integrated Intel® Graphics, Model - 21MA002NGE, Memory - 16GB, Display - 16 inches (1920 x 1080), Storage - 512GB, Graphics - Intel® Integrated Intel® Graphics, Processor - Intel® Core™ Ultra 7-155H, Dimensions - 35.6 x 24.7 x 20 cm • 1.81 kg, Operating System - Windows® 11 Pro, Keyboard Language - German, "
  },
  {
      "slug": "sonos-subwoofer-sonos-sub-2020",
      "text": "Sonos Sub (Gen. 3), WiFi - Yes, Delivery - 1x Sub (Gen.3), 1x power cable, brief instructions, Bluetooth - Yes, Components - Subwoofer, Connections - LAN, Total Power - -, Product type - Subwoofer, Special features - WiFi subwoofer for powerful bass, Two Force-Cancelling drivers ensure pure bass without vibrations or rattling, Number of channels - -, Signal transmission - Wireless , "
  },
  {
      "slug": "apple-smartphone-iphone-13-pro-6gb-128gb",
      "text": "Apple iPhone 13 Pro - 128GB - Dual Sim, Sim - Dual SIM (Nano Sim + eSim), Memory - 6GB, Battery - 3125 mAh, Display - 6.1-inch Super Retina XDR display with ProMotion (2532 x 1170), Storage - 128GB, Processor - Apple A15 Bionic, Dimensions - 7.15 x 14.67 x 0.765 cm (0.204kg), Rear Camera - 12mp + 12mp + 12mp, Connectivity - 5G, Front Camera - 12mp, Operating System - iOS 15, "
  },
  {
      "slug": "sigma-35mm-f-1-4-dg-dn-art-sony-fe-mount",
      "text": "Sigma 35mm f/1.4 DG DN ART Sony FE-Mount, "
  },
  {
      "slug": "shure-microphone-shure-sm7b",
      "text": "Shure SM7B Microphone, "
  },
  {
      "slug": "sony-alpha-6100-kit-16-50mm",
      "text": "Sony Apha 6100 Camera Kit with E PZ 16-50 mm f/3.5-5.6 OSS Lens, ISO - 100-32000, Lens - Sony E PZ 16-50mm f/3.5-5.6 OSS Lens, Photo - 6000 x 4000 Raw, JPEG / RAW, Video - UHD 4K30p Video, Weight - 4.09 oz / 116 g, Storage - Single Slot SD card, Dimensions - 2.55 x 1.18\" / 64.77 x 29.97 mm, Mount Type - Sony E, HDMI Output - 4:2:2 8-Bit via HDMI, Screen Type - 921,600 Dot, 180° Tilting Touchscreen LCD, Slow Motion - Internally (S&Q mode) or 1080px at 120fps, View Finder - 1.44m-Dot OLED EVF, Connectivity - Micro-HDMI output, Micro-USB multi port, 3.5mm audio input, Image Sensor - 24.2MP APS-C, Shutter Speed - 30' -  1/4000, Stabilisation - none, Auto-Focus Points - 425-Point Phase-Detection AF System, Scope of delivery - Sony A6100 camera, Sony 16-50mm lens, NP-FW50 Battery, AC adapter, Body & lens cap, shoulder strap, Micro USB cable, "
  },
  {
      "slug": "jbl-bar-1300-soundbar-system",
      "text": "JBL Bar 1300 Soundbar System, WiFi - Yes, Delivery - 1x soundbar, 2x detachable wireless surround speakers, 1x wireless subwoofer, remote control (incl. 2x batteries), power cable (up to 8 pieces, depending on region), 1x HDMI cable, 2x L-shaped wall bracket (soundbar) + 2x U- shaped wall bracket (for surround speakers) with screws, 2x side caps, quick start guide, safety instructions, wall mounting template, Bluetooth - Yes, Components - 1x soundbar, 1x subwoofer, 2x detachable wireless surround speakers, Connections - 3x HDMI video input, 1x HDMI video output with eARC, 1x audio input optical, 1x USB-A port, Total Power - 1170 watts, Product type - Sound System, Special features - Bluetooth, Wifi, Compatible with Amazon Alexa, Google Assistant, Apple HomeKit, Number of channels - 11.1.4, Signal transmission - Wireless, Wired, "
  },
  {
      "slug": "apple-smartphone-iphone-13-pro-max-6gb-128gb",
      "text": "Apple iPhone 13 Pro Max - 128GB - Dual Sim, Sim - Dual SIM (Nano Sim + eSim), Memory - 6GB, Battery - 4373 mAh, Display - 6.7-inch Super Retina XDR display with ProMotion (2778 x 1284), Storage - 128GB, Processor - Apple A15 Bionic, Dimensions - 7.81 x 16.08 x 0.765 cm (0.24kg), Rear Camera - 12mp + 12mp + 12mp, Connectivity - 5G, Front Camera - 12mp, Operating System - iOS 15, "
  },
  {
      "slug": "dreame-vacuum-cleaner-dreame-r20",
      "text": "Dreame R20 Vacuum Cleaner, Dimensions - 256 x 1294 x 215 mm / weight: 4600g, Filter type - HEPA, Special features - The lithium-ion battery ensures reliable and long-lasting performance, while the three different suction levels allow you to stay in control of the suction power., Scope of delivery - Cordless vacuum cleaner, roller brush, LED multi-brush, carbon fiber rod, mini electric brush, wide crevice tool, flexible crevice brush, flexible adapter, 2-in-1 charging and storage holder, user manual, Type of power setting - 3 suction levels, Maximum operating time - 60 mins, Maximum volume of the dust container - 0.6L, Charging time according to the manufacturer - 4 hours, "
  },
  {
      "slug": "insta360-ace-pro",
      "text": "Insta360 Ace Pro, Video - 8K (16:9) 7680 x 4320 @ 24 fps // K (4:3) : 4032 x 3024 @ 60, Sensor - 1/1.3” 48MP Sensor, Battery - 90-minute Runtime, fast charging, Storage - MicroSD card ports of up to 1TB., Dimensions - 71.9 x 52.15 x 38.5mm / 179.8g, Slow motion - 4K (16:9) : 3840 x 2160 @ 120, Photo format - JPEG, DNG RAW, Video format - MP4, Field of view - 151° Wide-Angle Leica f/2.6 Lens, Stabilization - 6-axis FlowState Stabilization, Horizon Lock, Photo resolution - 48MP (8064 x 6048), Special features - Active HDR, FreeFrame Video, PureVideo, Slow Motion, Starlapse, Time Lapse, TimeShift, Pre-Recording, Loop Recording, "
  },
  {
      "slug": "microsoft-surface-laptop-13-copilot-pc-13-lcd-x-plus-16gb-256gb-ssd-no-p-a",
      "text": "Microsoft Surface Laptop 13\", Copilot+ PC, 13” LCD | X Plus/16GB/256GB SSD, Cache - 30 MB, Depth - 1.56 cm, Wi-Fi - WiFi 7 (802.11be), Width - 28.56 cm, Height - 21.41 cm, Weight - 1.247 kg, Feature - PixelSense™ Flow Display, RAM size - 16 GB, RAM type - LPDDR5x, Bluetooth - 5.4, Resolution - 1920 x 1080 pixels (Full HD), Form factor - Notebook, Display size - 33 cm (13\"), EPEAT rating - EPEAT Bronze, SSD capacity - 256 GB, Storage type - UFS 2.1, Headphone out - Yes, Microphone in - Yes, USB 3.0 ports - 2x, Audio features - Combo audio/mic jack (3.5mm), Clock frequency - 3.40 GHz, Cores / Threads - 8-Core, Processor model - Snapdragon X Plus, Battery capacity - 50 Wh, Operating system - Windows 11 Home, Processor number - X1P-42-100, Touchscreen type - Finger and pen input (capacitive touchscreen), Power adapter included - No, Processor manufacturer - Qualcomm, Total storage capacity - 256 GB, Number of storage drives - 1, "
  },
  {
      "slug": "apple-macbook-air-13-m4-10cpu-16gb-256gb-8gpu-eng",
      "text": "MacBook Air 13\" - Apple M4 Chip 16GB Memory 256GB SSD - Integrated 8-core GPU, Model - MW123N/A, Memory - 16GB, Display - 13.6 inches (2560 x 1664), Storage - 256GB SSD, Graphics - Apple Integrated 8-core GPU, Processor - Apple M4, Dimensions - 30.41 x 21.5 x 1.13 cm • 1.24 kg, Operating System - macOS, Keyboard Language - English, "
  },
  {
      "slug": "sony-tv-sony-kd65x81kaep",
      "text": "Sony KD-65X81K - TV 65\" BRAVIA LED, Screen - Flat, Delivery - Batteries, operation manual, remote control,remote control with voice control, power cord, quick configuration, table stand, Processor - 4K HDR Processor X1™, Model Name - KD65X81KAEP, Connections - 4x HDMI, 2x USB ports, Ethernet, 1x Digital Audio Output, USB Disk Recording (!Rec), HDCP 2.3, Wi-Fi, Bluetooth, Product type - LCD TV UHD 4K, VESA standard - 300 x 300, Receptions Types - DVB-T/T2, DVB-C, DVB S/S4, Special Features - Dolby™ Audio, Dolby™ Atmos, Chromecast built in, Apple Airplay, Live Color™ technology TRILUMINOS PRO™, Dynamic Contrast Enhancer, Dimensions with stand - 145.2 x 90.6 x 33.9 cm, Dimensions without stand - 145.2 x 83.6 x 7.2 cm, HDR (High Dynamic Range) - HDR10, HLG, Dolby Vision, "
  },
  {
      "slug": "samsung-tablet-galaxy-tab-s9-fe-wifi-6gb-128gb",
      "text": "Samsung Tablet, Galaxy Tab S9 FE - WiFi - Android - 128GB, Memory - 6GB, Battery - 8000 mAh, Display - 10.9-inch LCD (2304x1440), Storage - 128GB, Processor - Samsung Exynos 1380, Dimensions - 16.5 x 25.4 x 0.6 cm (0.5kg), Rear Camera - 8MP, Connectivity - WiFi, Front Camera - 12MP, Operating System - Android, "
  },
  {
      "slug": "apple-laptop-apple-macbook-air-late-2020-english-qwerty-13-3-apple-m1-8gb-256gb-ssd-apple-integrated-7-core-gpu",
      "text": "MacBook Air 13\" Apple M1 Chip 8GB Memory 256GB SSD Integrated 7-core GPU, Model - MGN63D/A-410240, Memory - 8GB, Display - 13.3 inches (2560 x 1600), Storage - 256GB SSD, Graphics - Apple Integrated 7-core GPU, Processor - Apple M1, Dimensions - 30.41 x 21.24 x 1.61 cm • 1.29 kg, Operating System - macOS Big Sur, Keyboard Language - English, "
  },
  {
      "slug": "razer-blade-16-2025-r-ai9-365-32gb-1tb-rtx-5080",
      "text": "Razer Blade 16 (2025) Gaming Laptop - AMD Ryzen™ 9 AI 365 - 32GB - 1TB SSD - NVIDIA® GeForce® RTX™ 5080, Model - RZ09-05288GN3-R3G1, Memory - 32GB, Display - 16 inches (2560 × 1600), 240Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5080, Processor - AMD Ryzen™ 9 AI 365, Dimensions - 35.5 x 24.4 x 0.2 cm • 2.45 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "fe-90mm-f2-8-macro-g-oss",
      "text": "Sony FE 90mm F2.8 Macro G OSS, "
  },
  {
      "slug": "msi-katana-15-hx-b14wgk-058-i7-14650hx-16gb-512gb-5060",
      "text": "MSI Katana 15 HX B14WGK-058 Gaming Laptop - Intel® Core™ i7-14650HX - 16GB - 512GB SSD - NVIDIA® GeForce® RTX™ 5060, Model - 001587-058, Memory - 16GB, Display - 15.6 inches (1920 x 1080 ), 144Hz, Storage - 512GB SSD, Graphics - NVIDIA® GeForce® RTX™ 5060, Processor - Intel® Core™ i7-14650HX, Dimensions - 35.9 x 26.2 x 2.52 cm • 2.4 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "apple-watch-series-8-gps-cellular-stainless-steel-case-and-milanese-band-45mm",
      "text": "Apple Watch Series 8 GPS + Cellular, Stainless Steel Case, 45mm, Type - Smartwatch, Features - Apple Pay, Always-On Retina Display, Customize your Watch Face, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Temperature Sensing, Cycle Tracking, Emergency SOS, Fall Detection, Crash Detection, Pair Multiple Watches with Family Setup, Medications App, AFib History, Audio-Guided Walks, Runs, and Meditations, Customize your Workouts, Swim-proof, International Roaming, Wireless Fast Charging, Crack/Dust/Water Resistant, Sleep Stages, Battery Life - Up to 18h, Connectivity - GPS, Wi-Fi, Bluetooth 5.0, NFC, Compatibility - iOS, Build Material - Stainless Steel Case and Milanese Band, Music playback - Yes, Water/Dust proof - Up to 5ATM, Activity Tracking - Continuous Heart Rate Tracking, Sleep Tracking, Track 11 Different Workout Types, Swimming (Breaststroke, Backstroke) , Running (Stride Length Tracking), Yoga, Cycling and several other sport and gym profiles, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "samsung-business-monitor-s4u-27-ls27a400ujuxen",
      "text": "Samsung - 27\" Business Monitor S4U LS27A400UJUXEN, Model - LS27A400UJUXEN, Display - IPS 27 inches (1920 x 1080), Dimensions - 61.55 x 19.29 x 53.29 cm • 6.6 kg, Connectivity - 1x HDMI, 1x DisplayPort, 1x USB-C with DisplayPort, Response Time - 5ms, High Dynamic Range (HDR) - No, "
  },
  {
      "slug": "oculus-virtual-reality-headset-oculus-quest-2-128gb",
      "text": "Meta Quest 2 128 GB VR Headset, Audio - Integrated audio, in-strap, Model - Meta Quest 2 128GB, Weight - 0.5kg, Battery - Up to 2-3h, Sensors - Meta Insight tracking system, 6DoF motion tracking, Connections - 1x USB-C, Controllers - 2x Meta touch controllers, Refresh rate - 72Hz at launch, 90Hz to come, Field of View - 104°, Operating mode - Standalone/Tethered, Processor & Storage - Qualcomm Snapdragon XR2, 6GB RAM, 128GB storage, Supported platforms - Cross-platform, Display type, lens & resolution - Single Fast-Switch LCD, 1832×1920px per eye, adjustable - 3 preset IPD adjustments, Controller Batteries included (AA) - No, "
  },
  {
      "slug": "jbl-partybox310-party-bluetooth-speaker",
      "text": "JBL Partybox 310 Party Speaker, Type - Party Bluetooth Speaker, Model - Partybox 310, Power - 240 W, Battery - Up to 12h battery, Frequency - 45-20,000 Hz, Durability - IPX4 splashproof, Connections - Dual microphone and guitar inputs, Connectivity - Bluetooth 5.1, Operating mode - Battery-powered, Special features - Introducing the JBL PartyBox 310, your go-to portable speaker for electrifying gatherings and spontaneous jam sessions. With its powerful audio performance and vibrant light show, the PartyBox 310 sets the stage for unforgettable moments wherever you go., "
  },
  {
      "slug": "canon-camera-canon-powershot-g5x-mark-ii",
      "text": "Canon PowerShot G5X Mark II, Compact Camera, ISO - 125-12800, Mount Type - EF-M, Resolution - 20.1MP, Screen Type - LCD - TOUCH SCREEN, Connectivity - WLAN, BLUETOOTH, Image Sensor - CMOS, Camera Format - MIRRORLESS, Shutter Speed - 30 - 1 / 25600 sec, Auto-Focus Points - 31, Dimensions & Weight - 11 x 4.6 x 6 cm • 0.34 kg, "
  },
  {
      "slug": "lenovo-thinkpad-x1-carbon-g13-ultra-7-258v-32gb-1tb-copilot-pc-7fe1be09-d61a-43a8-8676-eb61bafa2f94",
      "text": "Lenovo Thinkpad X1 Carbon G13 Laptop - Intel® Core™ Ultra 7-258V - 32GB - 1TB SSD - Intel® Intel Arc Graphics, Model - 21NS00MMGE, Memory - 32GB, Display - 14 inches (2880 x 1800), 120Hz, Storage - 1TB SSD, Graphics - Intel® Intel Arc Graphics, Processor - Intel® Core™ Ultra 7-258V, Dimensions - 31.3 x 22 x 1.4 cm • 0.98 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "apple-laptop-apple-macbook-air-late-2020-13-3-apple-m1-16gb-512gb-ssd-apple-integrated-8-core-gpu",
      "text": "MacBook Air 13 - Apple M1 Chip 16GB Memory 512GB SSD Integrated 8-core GPU, Model - Z125-0100, Memory - 16GB, Display - 13.3 inches (2560 x 1600), Storage - 512GB SSD, Graphics - Apple Integrated 8-core GPU, Processor - Apple M1, Dimensions - 30.41 x 21.24 x 1.61 cm • 1.29 kg, Operating System - macOS Big Sur, Keyboard Language - German, "
  },
  {
      "slug": "huawei-huawei-watch-4-pro-elite-stainless-steel-and-titanium-band-48mm",
      "text": "Huawei Watch 4 Pro Elite Smartwatch, Stainless Steel, 48mm, Type - Smartwatch, Features - Rugged and Durable Design, Track your health with Health Glance, 100+ workout modes, Set yourself daily goals with Activity Ring, Stress monitoring, Sleep Tracker, Breathing exercises, Cycle Monitoring, Fall detection & SOS,  Notifications (incoming calls, instant and SMS messages, emails, calendar, social media apps and AI tips), Achieving goals, Health notifications, Take care of your loved ones with Family Care., Battery Life - Up to 4.5d in Standard mode / 21d in Ultra Long Battery Mode, Connectivity - Bluetooth®, Wi-Fi, NFC, LTE, Compatibility - iOS / Android, Build Material - Stainless Steel Case and Titanium Band, Music playback - Yes, Water/Dust proof - Up to 5 ATM / IP6X, Activity Tracking - 100+ Sports modes (Including niche outdoor activities like free dives and hikes), Global Positioning - GPS, GLONASS, GALILEO, BeiDou, QZSS, "
  },
  {
      "slug": "microsoft-laptop-microsoft-surface-pro-9-touchscreen-13-intel-core-i5-1235u-8gb-256gb-ssd-intel-iris-xe-graphics",
      "text": "Microsoft Surface Pro 9 13\" - Intel® Core™ i5-1235U - 8GB - 256GB SSD - Intel® Iris® Xe Graphics (Device only), Model - QEZ-0004 - QEZ-0021 - QEZ-0038, Memory - 8GB, Display - 13 inches (2880 x 1920), Storage - 256GB SSD, Graphics - Intel® Iris® Xe Graphics, Processor - Intel® Core™ i5-1235U, Dimensions - 20.9 x 28.7 x 0.93 cm • 0.879 kg, Operating System - Windows® 11 Home (64 Bit), Keyboard Language - Not Included, "
  },
  {
      "slug": "acer-h6546ki-projector",
      "text": "Acer H6546Ki Projector - Full HD, Speaker - 1x 3 watt, Version - DarkChip™ 3 DMD, Contrast - 10,000:1, DLP Chip - 0.65\" BrilliantColor™, Brightness - 5,200 (standard), 4,160 (eco) ANSI lumens, Life (hr.) - 5,000 (standard), 10,000 (eco), 12,000 (ExtremeEco) hours, Resolution - 1080p Full HD (1,920 x 1,080 px), Throw ratio - 1.48 ~ 1.62:1, Image Offset - 132%, Display Format - 16:9 (native) / 4:3 (supported), Light technology - 245 watt Philips UHP, Projection Modes - Front- / Rear- & Front-Ceiling- / Rear-Ceiling-Projection, Displayable Colours - 1.07 Billion Colors, Keystone Correction - +/- 40° (vertical) manual & automatic, Projection distance - 1.00 ~ 10.00 m, Zoom / Digital-Zoom - 1:1.1x / 2x, Projection Technology - DLP 3D Ready & HDMI 3D, Focus / Focal distance - F = 2.50 ~ 2.67 / f = 21.80 ~ 24.00 mm, Integrated Battery Model - 4713147532261 / Part Number: MC.JFZ11.00B, Weight (incl. packaging) - 2.90 kg, Projection size (diagonal) - 0.71 ~ 7.75 m, Horizontal / Vertical frequency - 15 ~ 100 kHz / 24 ~ 120 Hz, Dimensions / Shipping dimensions (mm) - 313 x 240 x 114, "
  },
  {
      "slug": "philips-tv-philips-65oled708-12",
      "text": "Philips 65OLED708/12 - TV 65\" OLED 4K, HD type - 4K Ultra HD, Video apps - Amazon Prime Video, Apple TV, BBC iPlayer, Disney+, Netflix, YouTube, Smart modes - Dolby Vision, HDMI version - 2.1, Screen shape - Flat, Processor cores - 4, Wi-Fi standards - Wi-Fi 5 (802.11ac), Display diagonal - 165.1 cm (65\"), Bluetooth version - 5.0, Display resolution - 3840 x 2160 pixels, Display technology - OLED, HDMI ports quantity - 4, Native aspect ratio - 16:9, Native refresh rate - 120 Hz, Weight (with stand) - 24.3 kg, USB 2.0 ports quantity - 3, Panel mounting interface - 300 x 300 mm, Operating system installed - Google TV, Digital signal format system - DVB-C, DVB-S, DVB-S2, DVB-T, DVB-T2, DVB-T2 HD, Philips technologies (AV/TV) - Micro Dimming, Perfect Natural Motion, Supported graphics resolutions - 640 x 480 (VGA), 1920 x 1080 (HD 1080), 2560 x 1440, 3840 x 2160, Dimensions (W x D x H) with stand - 1450 x 280 x 847 mm, High Dynamic Range (HDR) technology - High Dynamic Range 10+ Adaptive (HDR10 Plus Adaptive), Hybrid Log-Gamma (HLG), "
  },
  {
      "slug": "ecovacs-vacuum-cleaner-ecovacs-deebot-x1-omni-saug-wischroboter",
      "text": "Ecovacs Deebot X1 Omni Vacuum & Mop Robot Cleaner with Automatic Dirt Disposal, Control - App controlled, Runtime - 140 minutes, Dimensions - 36.2 x 36.2 x 10.4 cm / 18.7 kg, Suitable For - Tiles, hardwood floors, laminates, parquet floors, carpets, stone floors, Suction power - 5000Pa, Wipe function - yes, Special features - Fully automatic, multifunctional OMNI-Clean station (suction station and dirty water cleaning); Jacob Jensen Design, designed by award winning agency; State-of-the-art 3D obstacle detection with artificial intelligence; Up to 5000 PA suction power; True Mapping 2.0 mapping technology (3-dimensional in the app); Space photography RGB camera for cleaning even in the dark; + 260 minutes battery life / battery life; Smart home device compatibility and fully controllable via app; Automatic drying of the wiper plates by hot air, Water tank volume - 0.08 L, Dust container volume - 0.4 L, "
  },
  {
      "slug": "samsung-galaxy-watch-5-40mm",
      "text": "Samsung Galaxy Watch5 Smartwatch, Aluminium Case, 40mm, Type - Smartwatch, Sensors - Accelerometer, Barometer, Ambient Light Sensor, Compass, Pulse oximeter (Sp02), Samsung BioActive Sensor (Herzfrequenz, ECG und BIA), Features - Modern Aluminium design with Sapphire Crystal, Samsung + Google Pay, Sleep Coach & Analysis, Blood Oxygen Saturation and Heart Rate Analysis, Performance Tracking, Smart Fall Detection, Advanced Body Composition Analysis, Women's Health (Track Fertility Windows, Ovulation Cycles and Periods), Google Apps + OS, Strong Battery Performance & Fast Wireless Charging, Band Size - S/M, Battery Life - Up to 40 hours, Connectivity - Bluetooth® 5.2, WLAN 2,4 GHz & 5 GHz, Compatibility - Android 8.0 and higher, Build Material - Aluminium Case and Sport Band, Music playback - On-board music storage, Operating System - Wear OS, Water/Dust proof - 5ATM / IP68 / MIL-STD-810H, Activity Tracking - Blood oxygen, Blood pressure, Heart rate, Bioelectrical impedance analysis (BIA), Steps Taken, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "apple-macbook-air-15-m4-10cpu-16gb-256gb-10gpu-eng",
      "text": "MacBook Air 15\" - Apple M4 Chip 16GB Memory 256GB SSD - Integrated 10-core GPU, Model - MW1L3N/A, Memory - 16GB, Display - 15.3 inches (2880 x 1864), Storage - 256GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M4, Dimensions - 34.04 x 23.76 x 1.15 cm • 1.51 kg, Operating System - macOS, Keyboard Language - English, "
  },
  {
      "slug": "roborock-vacuum-cleaner-roborock-s7",
      "text": "Roborock S7 Vacuum & Mop Robot Cleaner, FEATURES - Sonic Mopping technology • intelligent mop lifting • ultrasonic carpet recognition • new all-ruber brush • upgraded floating brush • compatible with Amazon Alexa • Google Assistant • LiDAR navigation creates detailed maps and identifies the rooms across up to four levels, Dimensions - 35 x 35 x 9.7 cm • 4.7 kg, APPLICATION - Allergies, hardwood floors, pets, parquet floors, carpets, SUCTION POWER - 2500 Pa, APP-CONTROLLED - Yes, MAX. RUNNING TIME - 180 min, MAX. VOLUME OF THE WATER TANK - 0.3L (up to 200 sqm), MAX. VOLUME OF THE DUST CONTAINER - 0.47L, "
  },
  {
      "slug": "samsung-monitor-samsung-s24a600ucu-24-ls24a600ucuxen",
      "text": "Samsung - 24\" S24A600UCU LS24A600UCUXEN, Model - LS24A600UCUXEN, Display - IPS 24 inches (2560 x 1440), Dimensions - 54.2 x 19.6 x 53.1 cm • 5 kg, Connectivity - HDMI, DisplayPort, USB-C, Response Time - 5ms, High Dynamic Range (HDR) - Yes, "
  },
  {
      "slug": "shure-sm7db-microphone",
      "text": "Shure SM7dB Microphone, "
  },
  {
      "slug": "dreame-vacuum-cleaner-dreame-dreame-l10-prime",
      "text": "Dreame L10 Prime Vacuum & Mop Robot Cleaner, Dimensions - 350 x 103.8mm / 3.7kg, Navigation - dirt sensor, laser sensor, zones, obstacle detection, obstacle overcoming (up to 7mm), virtual wall, Smart Home - App control (Wi-Fi (WLAN)), Suction Power - 4000 pa, Cleaning modes - carpet, mopping, Operating time - 250min, Special features - Lifting the mops, 2.7 liter fresh water tank, 2.5 liter dirty water tank, Station capacity - 2.7l (fresh water), 2.5l (dirty water), Noise development - 59dB(A), Scope of delivery - Robot vacuum cleaner, base station, cleaning tool, power cable, 2x mopping pad, 1x side brush, 1x dust bag, Recommended room size - up to 250m², "
  },
  {
      "slug": "rode-nt1-5th-generation",
      "text": "Rode NT1 5th Generation Microphone, Audio - 32-bit Floating Point, Weight - 311 g, Capsule - Gold-plated 1\", Housing - Black Coated Aluminium, Sensitivity - 25mV/Pa, Power Supply - Phantom Power (48V) or USB (5V), Polar Pattern - Cardioid, A/D Conversion - Up to 192kHz Sampling Rate, Inherent Noise - 4dBA, Dimensions (H x D) - 190 x 50 mm, Frequency Response - 20 - 20,000 Hz, Dual Connect Connector - XLR3-M (analogue) and USB-C (digital), Limiting Sound Pressure Level - 142dB SPL, "
  },
  {
      "slug": "lg-tv-lg-oled42c37la-aeud",
      "text": "LG OLED42C37LA - TV 42\" OLED evo 4K, Screen - Flat, Delivery - Remote control, batteries for the remote control (2x AA for Magic Remote-FB or 2x AAA for Standard-FB), quick start guide, power cable, stand/feet (depending on the design type of the respective TV model), Processor - α9 Gen6 4K AI-Processor, Model Name - OLED42C37LA.AEUD, Connections - 4x HDMI (4K 120Hz, eARC, VRR, ALLM, QMS (4 ports)), 3x USB 2.0, 1x LAN (Ethernet), WiFi 6 (802.11ax), 1x LAN (Ethernet), Optical output. CI+ slot, Product type - OLED TV UHD 4K, VESA standard - 300 x 200, Receptions Types - Twin Triple Tuner (DVB-T2/-C2/-S2), Special Features - The powerful α9 Gen6 4K AI processor and Dolby Vision™ for outstanding images, as well as the intense Dolby Atmos® sound, will completely captivate you. Gamers will also benefit from the OLED evo C3 with Nvidia G-Sync™, AMD FreeSync and HGiG support, whichwill enable you to get the most intense HDR gaming experience., Dimensions with stand - 932 x 577 x 170 mm, Dimensions without stand - 932 x 540 x 41.1 mm, HDR (High Dynamic Range) - Dolby Vision / HDR10 / HLG, "
  },
  {
      "slug": "sony-sel-24mm-f1-4-gm",
      "text": "Sony SEL 24mm F1.4 GM, "
  },
  {
      "slug": "acer-nitro-50-n50-660-u5-225f-16gb-512gb-rtx-5060",
      "text": "Acer Nitro 50 (N50-660) Gaming Desktop - Intel® Core™ Ultra 5-225F - 16GB - 512GB SSD - NVIDIA® GeForce® RTX™ 5060, EAN - 4711474548054, NPU - Intel® AI Boost, Model - DG.E4FEG.008, Memory - 16GB, Storage - 512GB SSD, Graphics - NVIDIA® GeForce® RTX™ 5060 (8 GB GDDR7), Processor - Intel® Core™ Ultra 5-225F, Dimensions - 17.5 x 39.2 x 38.6 cm • 9.3 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "meta-virtual-reality-quest-3s-128gb",
      "text": "Meta Quest 3S 128 GB VR Headset, Gaming - Powerful technology for smooth gameplay, Weight - 515g, VR Type - Mixed reality experiences and immersive VR, Controller - Touch Plus Controller Hands-free control, Resolution - HD resolution 1832 × 1920 pixels per eye, Connections - 1x USB Type-C, Social Apps - WhatsApp, Instagram and Facebook Messenger, Wired/Wireless - Wireless design for freedom of movement, Internal Storage - 128GB, Scope of delivery - All-in-One Quest Headset, Standard Immersion Headset Insert (pre-installed), 2 Meta Quest Touch Plus Controllers, 2 Wrist Straps, Power Adapter, Charging Cable, Supported Platforms - Android, iOS, PC, "
  },
  {
      "slug": "acer-nitro-i5-14400f-16gb-512gb-rtx4060",
      "text": "Acer Nitro (N50-656) Gaming Desktop - Intel® Core™ i5-14400F - 16GB - 512GB - NVIDIA® GeForce® RTX 4060, Model - DG.E3UEB.001, Memory - 16GB, Storage - 512GB, Graphics - NVIDIA® GeForce® RTX 4060, Processor - Intel® Core™ i5-14400F, Dimensions - 17.5 x 38.6 x 2.86 cm • 3 kg, Operating System - Windows® 11 Home, Keyboard Language - , "
  },
  {
      "slug": "sony-srs-xv800-party-bluetooth-speaker",
      "text": "Sony SRS-XV800 Party Speaker, Depth - 375 mm, Width - 317 mm, Height - 720 mm, Weight - 18.5 kg, Speaker type - 2-way, Castor wheels - Yes, Headphone out - Yes, Microphone in - Yes, Cables included - AC, Optical, Illumination LED - Yes, USB connectivity - Yes, Bluetooth version - 5.2, Power source type - AC, Battery, Speaker placement - Floor, Battery life (max) - 25 h, Carrying handle(s) - Yes, Battery recharge time - 3 h, Audio formats supported - AAC, MP3, SBC, WAV, WMA, Number of woofer drivers - 2, Suitable for outdoor use - Yes, Number of tweeter drivers - 5, International Protection (IP) code - IPX4, "
  },
  {
      "slug": "msi-geforce-rtx-5070-ti-16g-gaming-trio-oc",
      "text": "MSI GeForce RTX 5070 Ti 16G GAMING TRIO OC Graphics Card, Memory - 16GB (GDDR7), Dimensions - 5 x 33.8 x 1.4 cm • 1.3 kg, Boost Clock Speed - 2572 Mhz, "
  },
  {
      "slug": "philips-65oled759-12",
      "text": "Philips 65OLED759/12 - TV 65\" OLED 4K, HD type - 4K Ultra HD, Video apps - Amazon Prime Video, HBO, Netflix, YouTube, Sound modes - AI Sound, Dialog, HDMI version - 2.1, Audio decoders - DTS:X, Dolby Atmos, Dolby Digital, Wi-Fi standards - Wi-Fi 5 (802.11ac), Display diagonal - 165.1 cm (65\"), Bluetooth version - 5.2, Depth (with stand) - 280 mm, Display resolution - 3840 x 2160 pixels, Display technology - OLED, Width (with stand) - 1450 mm, HDMI ports quantity - 4, Height (with stand) - 850 mm, Native aspect ratio - 16:9, Native refresh rate - 120 Hz, Weight (with stand) - 24.4 kg, USB 2.0 ports quantity - 2, Panel mounting interface - 300 x 300 mm, Display diagonal (metric) - 164 cm, Operating system installed - Titan OS, Digital signal format system - DVB-C, DVB-S, DVB-S2, DVB-T, DVB-T2, DVB-T2 HD, Philips technologies (AV/TV) - 3 Sided Ambilight, Ambilight, High Dynamic Range (HDR) technology - Dolby Vision, High Dynamic Range 10 (HDR10), High Dynamic Range 10+ (HDR10 Plus), High Dynamic Range 10+ Adaptive (HDR10 Plus Adaptive), Hybrid Log-Gamma (HLG), "
  },
  {
      "slug": "irobot-vacuum-cleaner-irobot-roomba-combo-j7-e134b901-085a-4d61-a8f2-17371799fe36",
      "text": "iRobot Roomba Combo j7+ Vacuum & Mop Robot Cleaner, Battery - 2210mAh, Control - App Controlled, Runtime - 75 min, Features - Automatic dust discharge, programmable cleaning times, 2x floor brush, side brush, app control, voice assistant (Amazon Alexa, Google Assistant), Chip Logo - iRobot Manufacturer of the Year 2023 - Readers' Choice March 2023 vacuum cleaner - chip.de/CD164400, Dimensions - 33.8L x 33W x 8.7H cm, Suitable for - Tiles, hardwood floors, laminates, parquet floors, carpets, stone floors, Volume of the dust container - 0.4L, "
  },
  {
      "slug": "apple-apple-watch-ultra-2-gps-cellular-titanium-case-and-alpine-loop-s",
      "text": "Apple Watch Ultra 2 GPS + Cellular, Titanium Case, 49mm, Type - Smartwatch, Features - Powered by new S9 SiP, New Double Tap Gesture (answer a call, open a notification, play and pause music and more), Biggest and brightest Apple Watch display, Always-On Retina display, Faster on-device Siri with health data access, Precision Finding for iPhone, Fall Detection and Crash detection, Siren, Customizable Action Button, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Blood Oxygen app, ECG app, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Precision dual-frequency GPS, Durable from -20° C to 55° C, Emergency SOS, International Emergency Calling, Strong Battery Performance, Pair Multiple Watches with Family Setup, Band Size - S (130–160mm), Battery Life - Up to 36h / 72h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Titanium Case and Alpine Loop, Music playback - Yes, Water/Dust proof - Up to 10 ATM / MIL-STD-810H, Activity Tracking - Blood oxygen, Electrocardiography (ECG), Hours slept, Resting heart rate, Target heart rate, Skin temperature, Running (Stride Length, Ground Contact Time, Vertical Oscillation), Depth/Pressure/Location Tracking for Divers, Multisport Workouts, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "acer-mr-jv611-001-projector",
      "text": "Acer X1526HK Projector - Full HD, Brightness - 4000 ANSI lumens, Connections - 2x HDMI with HDCP (1.4a), 1x audio in jack (3.5mm), Aspect ratio - 16:9, Picture quality - Full HD, Projection size - 0.69 - 7.62 m, 3D functionality - 3D Ready, Special features - Wall Color Compensation, PIN security, Auto Shutdown, ECO Projection, Bluelight Shield, HDMI Power On, Screen resolution - 1920 x 1080 pixels, Projection distance - 1.00 - 10.00 m, "
  },
  {
      "slug": "samsung-galaxy-watch7-aluminium-case-and-sport-band-40-mm",
      "text": "Samsung Galaxy Watch7 Smartwatch, Aluminium Case, 40 mm, Type - Smartwatch, Features - Personalized user experience with AI features like energy value, wellness tips, and quick replies, Sporty design, Set goals and stay motivated with intelligent health and fitness functions for your personal goals, Extensive app ecosystem through Google Wear OS, Analyzes and assesses your daily energy value based on activity, sleep, and resting heart rate, Advanced sleep analysis, See your body composition with Bioelectrical Impedance Analysis BIA8, Supports 90 different training programs and recognizes key disciplines like running, walking, or cycling, and can start recording automatically, Pursue your fitness goals in a controlled manner with intensity levels based on your personalized heart rate zones, Long-lasting battery with fast charging capability, Irregular heart rhythm monitoring to alert you to possible arrhythmias such as atrial fibrillation, Battery Life - Up to 40 hours, Connectivity - GPS, NFC, Bluetooth 5.0, WiFi, Compatibility - Android 11.0 or higher with at least 1.5 GB of RAM, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - Yes, 5 ATM/ IP68 / MIL-STD-810H, Activity Tracking - Heart Rate Monitor, ECG, Continuous Sp02, Blood Pressure, Bioelictrical impedance analysis (Body composition), Global Positioning - GPS, Glonass, Beidou, Galileo, "
  },
  {
      "slug": "yamaha-musical-instrument-yamaha-p-145-88-key-digital-piano",
      "text": "Yamaha P-145 88-key Digital Piano, TYPE - Digital Piano, MODEL - P-145, CONNECTIONS - DC IN 12V,Headphones Standard stereo phone javk, Sustain pedal connectoon, USB to host, CONNECTIVITY - , KEY FEATURES - Yamaha's P-145 digital piano with 88-key Graded Hammer Compact (GHC) keyboard is built to precise standards.It has  a significantly shorter and flatter body design with a simple but modern and compact style. The model is highly valued by piano players around the world who seek the comfortable feel of an acoustic piano in an instrument with a compact size and weight., OPERATING MODE - PA-150B or an equivalent recommended by Yamaha (Output: DC 12 V, 1.5 A), INCLUDED ACCESSORIES - Music rest, AMPLIFIERS & SPEAKERS - 2 x 7 W, 2 x 12 cm drivers, "
  },
  {
      "slug": "sony-e-11mm-f-1-8",
      "text": "Sony E 11mm F/1.8, "
  },
  {
      "slug": "samsung-tablet-galaxy-tab-a8-2021-lte",
      "text": "Samsung Tablet, Galaxy Tab A8 (2021) - LTE - Android - 32GB, Memory - 3GB, Battery - 7040 mAh, Display - 10.5-inch TFT (1920 x 1200), Storage - 32GB, Processor - UNISOC Tiger T618, Dimensions - 16.2 x 24.6 x 0.7 cm (0.5kg), Rear Camera - 8MP, Connectivity - LTE, Front Camera - 8MP, Operating System - Android 11, "
  },
  {
      "slug": "samsung-monitor-samsung-business-monitor-s6u-27-ls27a600uuuxen",
      "text": "Samsung - 27\" Business Monitor S6U LS27A600UUUXEN, Model - LS27A600UUUXEN, Display - IPS 27 inches (2560 x 1440), Dimensions - 61.55 x 19.64 x 55.2 cm • 6.7 kg, Connectivity - 1x HDMI 1.4, 1x DisplayPort 1.2, 1x USB-C 3.0 with DisplayPort 1.2, 1x DisplayPort-Out 1.2 (Daisy Chain), Response Time - 5ms, High Dynamic Range (HDR) - Yes, "
  },
  {
      "slug": "asus-monitor-asus-essential-va24ehe-24-90lm0569-b01170",
      "text": "Asus - 24\" Essential VA24EHE  90LM0569-B01170, Model - 90LM0569-B01170, Display - IPS 24 inches (1920 x 1080), Dimensions - 54 x 40.4 x 20.4 cm • 3.57 kg, Connectivity - 1x HDMI 1.4, 1x VGA, 1x DVI, Response Time - 5ms, High Dynamic Range (HDR) - No, "
  },
  {
      "slug": "ddj400-dj-controller",
      "text": "Pioneer DJ DDJ400 Controller, Type - DJ controller, Model - DDJ-400, Bluetooth - No, Frequency - 20-20000 Hz, Connections - 1x microphone IN (6.3 mm jack), 1x USB B, 1x RCA OUT, 1x headphones / monitor OUT, Special Features - 2-channel DJ controller DDJ-400 for rekordbox dj, custom cue buttons, Beat FX, CDJ-style loop controls, and more., "
  },
  {
      "slug": "nikon-z-35mmm-f-1-8-s",
      "text": "Nikon Z 35mmm f/1.8 S, Focus - Autofocus, Mount - Nikon Z mount, Weight - 13.05 oz / 370 g, Aperture - F/1.8 to F/16,  9 blades, Dimensions - 2.87 x 3.39\" / 73 x 86 mm (ø x L), Filter size - 62mm, Lens format - Full Frame, Focal length - 35mm, Image stabilizer - No, Scope of delivery - Nikon Z 35mmm f/1.8 S, Front and rear lens caps, "
  },
  {
      "slug": "optoma-projector-optoma-hd29he",
      "text": "Optoma HD29He Projector - Full HD, Brightness - 3600 ANSI lumens, Connections - 1x HDMI 2.0, 1x HDMI 1.4a, 1x 3.5 mm audio, 1x USB Type-A power, Aspect ratio - 16:9, Picture quality - Full HD, Projection size - 0.71 - 7.65 m, 3D functionality - Full 3D, Special features - DLP projection technology. Eco mode., Screen resolution - 1920 x 1080 pixels, Projection distance - 1.00 - 9.80 m, "
  },
  {
      "slug": "htc-vive-cosmos-vr",
      "text": "HTC Vive Cosmos VR Headset, Sensors - Built-in gyroscope and acceleration, sensor, hall sensor, capacitive sensors, Resolution - 1440 x 1700 Pixel per eye, Connections - USB-C 3.0, DisplayPort (DP) 1.2, proprietary connector for modifications, Controllers - 2 touch controllers, Display type - LCD 3.4\", Refresh rate - 90 Hz, Horizontal view point - 110 degrees, Recommended PC minimum requirments - Intel® Core ™ i5-4590 or AMD FX ™ 8350 (comparable or better), NVIDIA® GeForce® GTX1060 or AMD Radeon ™ RX480 (comparable or better), 8 GB of RAM, DisplayPort 1.2, 1x USB 3.0, Windows® 10, "
  },
  {
      "slug": "jbl-charge-5-portable-bluetooth-speaker",
      "text": "JBL Charge 5 , Type - Portable Bluetooth Speaker, Model - Charge 5, Battery - Up to 20h battery, Chassis - 52 mm x 90 mm woofer, 20 mm tweeter, Amplifier - 30W RMS woofer, 10W RMS tweeter, Frequency - 65-20,000 Hz, Durability - IP67 Waterproof & Dustproof, Connections - 1x USB-C, Connectivity - Bluetooth 5.1, Operating mode - Battery-powered, Special features - Equipped with two pumping JBL bass radiators, a separate tweeter and a long-throw driver, thus ensuring enormous sound quality. Thanks to the powerful battery, there are no limits to the enjoyment of music and the location does not matter at all; Whether by the pool, in the garden or on the beach - you can enjoy music both inside and outside., Intelligent functions - , "
  },
  {
      "slug": "samsung-smartphone-galaxy-a55-8gb-128gb",
      "text": "Samsung Galaxy A55 Smartphone - 128GB - Dual SIM, Memory - 8GB, Battery - 5000mAh, Display - 6.4-inch Super AMOLED (1080 x 2340), Storage - 128GB, Processor - , Dimensions - , Rear Camera - 50MP + 12MP +5MP, Connectivity - 5G, Front Camera - 32MP, Operating System - Android 14, "
  },
  {
      "slug": "apple-mac-mini-m2-pro-10cpu-16gb-512gb-16gpu",
      "text": "Apple Mac Mini Desktop - Apple M2 Pro - 16GB - 512GB SSD - Apple Integrated 16-core GPU, Model - MNH73D/A, Memory - 16GB, Storage - 512GB SSD, Graphics - Apple Integrated 16-core GPU, Processor - Apple M2 Pro, Dimensions - 19.7 x 19.7 x 3.58 cm • 1.28 kg, Operating System - macOS, Keyboard Language - , "
  },
  {
      "slug": "apple-laptop-apple-13-macbook-pro-late-2020-13-3-apple-m1-16gb-512gb-ssd-apple-integrated-8-core-gpu",
      "text": "MacBook Pro 13\" Apple M1 Chip 16GB Memory 512GB SSD Integrated 8-core GPU (Late 2020), Model - Z11C-0100/Z11B-0110, Memory - 16GB, Display - 13.3 inches (2560 x 1600), Storage - 512GB SSD, Graphics - Apple Integrated 8-core GPU, Processor - Apple M1, Dimensions - 30.41 x 21.24 x 1.56 cm • 1.4 kg, Operating System - macOS Big Sur, Keyboard Language - German, "
  },
  {
      "slug": "ecovacs-vacuum-cleaner-ecovacs-deebot-x1-plus-saug-wischroboter",
      "text": "Ecovacs Deebot X1 PLUS Vacuum & Mop Robot Cleaner with Automatic Dirt Disposal, Control - App controlled, Runtime - 180 minutes, Dimensions - 35.3 x 35.3 x 10.3 cm / 4.3 kg, Suitable For - Tiles, hardwood floors, laminates, parquet floors, carpets, stone floors, Suction power - 5000Pa, Wipe function - yes, Special features - , Scope of delivery - 1 Robot vacuum and mop, 1 automatic vacuum station, 1 OZMO Pro 3.0 Mopping system, 2 side brushes, 1 washable wipe, 2 disposable wipes, 2 dust bags, 1 user manual, 1 cleaning tool, Water tank volume - 0.24 L, Dust container volume - 0.4 L, "
  },
  {
      "slug": "asus-monitor-asus-zenscreen-ink-mb14ahd-35-6cm-16-9-fhd-hdmi-14-90lm063v-b01170",
      "text": "ASUS ZenScreen Ink MB14AHD - 14 Inch Portable USB Touch Monitor, Type-C, Micro HDMI, Auto Rotation, Lightweight , Kickstand, Tripod Base - IPS Panel, Model - 90LM063V-B01170, Display - IPS 14 inches (1920 x 1080), Dimensions - 32.4 x 20.1 x 1.25 cm • 0.87 kg, Connectivity - 1x Micro HDMI 1.4, 2x USB-C 3.0 with DisplayPort 1,2, Response Time - 5ms, High Dynamic Range (HDR) - No, "
  },
  {
      "slug": "samsung-tablet-galaxy-tab-a9-wifi-4gb-64gb-8f364f86-0e9e-4490-8b4c-0969a54e4040",
      "text": "Samsung Tablet, Galaxy Tab A9 - WiFi - 4GB - 64GB, Depth - 8 mm, Width - 211 mm, Height - 124.7 mm, Weight - 329 g, Platform - Android, Pixel density - 179 ppi, Cables included - USB Type-C, Internal memory - 4 GB, Display diagonal - 22.1 cm (8.7\"), Display brightness - 570 cd/m², Display resolution - 800 x 1340 pixels, Display technology - LCD, Headphone connectivity - 3.5mm / Bluetooth, Processor manufacturer - MediaTek, Internal storage capacity - 64 GB, Rear camera resolution (numeric) - 8 MP, Front camera resolution (numeric) - 2 MP, "
  },
  {
      "slug": "roland-fp-10-digital-piano",
      "text": "Roland FP-10 Digital Piano, Type - Digital Piano, Model - FP-10, Connections - 3.5 mm stereo mini-jack headphone jack, USB-A, USB-B, input for damper pedal, Connectivity - Bluetooth 4.0, Key features - Portable, space-saving design, PHA4 standard keyboard, 88 keys with hammer action, SuperNATURAL sound generation, Integrated speakers, Bluetooth and MIDI / USB interface, Roland Piano Partner 2 app for convenient selection of sounds, Twin piano mode, Maximum 96-voice polyphony, built-in speaker system, 15 sounds., Operating mode - Plug-in, "
  },
  {
      "slug": "vr-headset-oculus-go-32gb",
      "text": "Oculus Go 32 GB VR Headset, Remote - AA battery, Battery - 2 hours gaming, 2.5 hours video and to charge, you need a 10 W USB power adapter, Sensors - Accelerometer, gyroscope, magnetometer, 3 degrees of freedom (3DOF), Speicher - 32 GB, Resolution - 1280 x 1440 pixel per eye, Connections - WLAN, Bluetooth and App, Launch Year - 2018, Display type - LCD 5.5\", Refresh rate - 60-72 Hz, Functionality - Discontinued Meta support for Oculus Go., App Functionality - Limited due to App stores updates not compatible with older devices., "
  },
  {
      "slug": "rowenta-air-conditioner-rowenta-turbo-cool-au5020",
      "text": "Rowenta Turbo Cool+ AU5020 Air Conditioner, Depth - 336 mm, Width - 272 mm, Height - 678 mm, Weight - 24.4 kg, Air filter - Yes, Hose length - 1.25 m, Noise level - 65 dB, Display type - LED, Castor wheels - Yes, Number of speeds - 3, Remotely operated - Yes, Airflow (high speed) - 285 m³/h, Refrigerating medium - R290, Dehumidifying capacity - 45 l/h, Remote control included - Yes, Timer duration (maximum) - 24 h, Air conditioner functions - Cooling, Dehumidifying, Fan, Cooling temperature range - 16 - 35 °C, Suitable for room volume up to - 83 m³, Cooling capacity in watts (max) - 2500 W, Energy efficiency class (cooling) - A, Cooling energy efficiency (EER, W/W) - 2.6, "
  },
  {
      "slug": "canon-eos-r6-mark-ii-rf-24-105mm-f4-l-is-usm",
      "text": "Canon EOS R6 II Camera Kit with RF 24-105 mm f/4 L IS USM Lens, ISO - 100 to 102,400 (Extended 50 to 204,800), HDMI - RAW 6144 x 4032 up to 59.94 fps, Lens - Canon RF 24-105mm F/4 L IS USM, Photo - C-RAW, HEIF, JPEG, Video - H.264/H.265/MPEG-4 4:2:2 10-Bit; UHD 4K (3840 x 2160) at 23.98/25/29.97/50/59.94 fps [60 to 340 Mb/s], Storage - Dual UHS-II SD Card slot, Mount Type - Canon RF, Screen Type - 3\" 1,620,000-Dot Articulating Touchscreen LCD, View Finder - 3,690,000 Dot OLED EVF, Connectivity - 1x Micro-HDMI, 1x 3.5mm TRS input, 1x 3.5mm TRS Output, USB-C interface, 2.4/5GHz Wi-Fi, Bluetooth, Image Sensor - 24.2 Megapixel Full Frame CMOS sensor, Shutter Speed - 1/8000 to 30s, Stabilisation - 5-Axis Sensor-Shift, Max Resolution - 6144 x 4032, Auto-Focus Points - 1053-point Phase Detection / 1053-point Contrast Detection, Scope of delivery - EOS R6 mkii, Canon RF 24-105mm F/4 L IS USM, LP-E6NH battery LC-E6 battery charger, Camera cover, Camera strap, "
  },
  {
      "slug": "apple-macbook-air-13-6-m2-8cpu-8gb-512gb-10gpu-67w-english-qwerty",
      "text": "MacBook Air 13.6\" - Apple M2 Chip 8GB Memory 512GB SSD - Integrated 10-core GPU, Model - , Memory - 8GB, Display - 13.6 inches (2560 x 1600), 60Hz, Storage - 512GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M2, Dimensions - 30.41 x 21.5 x 1.13 cm • 1.24 kg, Operating System - macOS Monterey, Keyboard Language - English, "
  },
  {
      "slug": "apple-laptop-apple-apple-macbook-air-13-m2-spacegrau-cto-8c-cpu-8c-gpu-int",
      "text": "MacBook Air 13\" - Apple M2 Chip 8GB Memory 256GB SSD Integrated 8-core GPU, Model - MLXW3D/A, Memory - 8GB, Display - 13.6 inches (2560 x 1664), Storage - 256GB SSD, Graphics - Apple Integrated 8-core GPU, Processor - Apple M2, Dimensions - 30.41 x 21.24 x 1.56 cm • 1.4 kg, Operating System - macOS, Keyboard Language - English, "
  },
  {
      "slug": "ninja-es601eu-luxe-cafe-premier",
      "text": "Ninja ES601EU Luxe Cafe Premier, Screen - Yes, Grinder - Integrated grinder with 25 grind settings, Features - 3 in 1 espresso, cold brew and drip coffee maker: 3 espresso types, 4 types of coffee, 7 beverage sizes, 4 foam presets, 25 grinding settings, Dimensions - 372 x 336 x 344 mm / 10.97 kg, Special features - Barista Assist Technoloy , Automated dual froth system, user friendly control panel, Water tank capacity - 2l, Capacity bean container - 250g, "
  },
  {
      "slug": "lenovo-console-legion-go-s-steam-os-1td-32gb",
      "text": "Lenovo Legion Go S Steam OS 1TD 32GB Console, WLAN - Yes, Color - Black, Depth - 128 mm, Width - 299 mm, Height - 43 mm, Weight - 740 g, Display - 8\" WUXGA (1920x1200) IPS 500 nits glossy / anti-fingerprint, 100% sRGB, 48-120Hz VRR, Panda King Glass, low blue light, touch, Graphics - AMD Radeon™, AMD SoC platform, Bluetooth - Yes, Plays MP3 - No, Processor - AMD Ryzen™ Z2 Go (4 cores / 8 threads, 3.0 / 4.3GHz, 2MB L2 / 8MB L3), Resolution - 1920 x 1200, Card reader - Yes, Connections - 1x 3.5 mm jack, 2x USB (4®), 1x USB Type-C, Memory size - 32 GB, Screen size - 20.32 cm / 8 inches, Touchscreen - Yes, AI functions - None, Battery type - Lithium-ion, Plays videos - No, Color display - Yes, Control buttons - Yes, Age rating (USK) - Not required, Handheld console - System type handheld, Operating system - SteamOS, Storage capacity - 1000 GB, Batteries included - Yes, Memory card format - microSD, Controller included - Yes, Integrated speakers - Yes, USB-C charger included - No, Artificial intelligence - No, USB-C charging supported - Yes, "
  },
  {
      "slug": "lenovo-thinkpad-e14-g6-ultra7-155h-32gb-1tb-eng",
      "text": "Lenovo ThinkPad E14 G6 Laptop - Intel® Core™ Ultra 7-155H - 32GB - 1TB SSD - Intel® Intel Arc Graphics, Model - 21M7007JMH, Memory - 32GB, Display - 14 inches (1920 × 1200), Storage - 1TB SSD, Graphics - Intel® Intel Arc Graphics, Processor - Intel® Core™ Ultra 7-155H, Dimensions - 31.3 x 21.9 x 1.79 cm • 1.44 kg, Operating System - Windows® 11 Pro, Keyboard Language - English, "
  },
  {
      "slug": "sony-camera-sony-alpha-1",
      "text": "Sony Alpha 1 Mirrorless Camera Body, ISO - 50 - 102400 extended ISO range, Mount Type - Sony E-Mount, Resolution - 50MP, Screen Type - 3 inch TFT Touch Screen, Connectivity - WLAN, Image Sensor - Exmor RS CMOS 35mm full frame sensor, Camera Format - Mirrorless, Delivery Scope - Sony A1, housing cover, NP-FZ100 battery, Charger BC-QZ1, USB Type-C cable, Auto-Focus Points - 759 (AF phase detection), Dimensions & Weight - 12.9 x 8 x 9.7 cm • 0.73 kg, "
  },
  {
      "slug": "nikon-z-fc-nikkor-z-dx-16-50mm-f-3-5-6-3-vr-nikkor-z-dx-50-250mm-f-4-5-6-3-vr-dual-zoom-kit",
      "text": "Nikon Z fc Camera Kit with Nikkor Z DX 16-50mm f/3.5-6.3 VR + Nikkor Z DX 50-250mm f/4.5-6.3 VR Lens, ISO - 100-51000, Lens - Nikon NIKKOR Z DX 16-50mm F/3.5-6.3 VR Lens + Nikon NIKKOR Z DX 50-250mm F/4.5-6.3 VR Lens, Photo - 5568x3712 JPEG / RAW, Video - UHD 4K30p Video, Weight - 13.8 oz / 390 g (Body Only), Storage - Single Slot SD card, Dimensions - 5.3 x 3.7 x 1.8\" / 13.5 x 9.4 x 4.6 cm, Mount Type - Nikon Z mount, HDMI Output - 4k30P, Screen Type - 1,040.000 Dot, 3\" free-angle Tilting Touchscreen LCD, Slow Motion - 1080px at 120fps, View Finder - 2,360.000-Dot OLED EVF, Connectivity - Micro-HDMI output, USB-C multi port, 3.5mm audio input, Image Sensor - 20.0 Megapixel, Shutter Speed - 30' -  1/4000, Stabilisation - none, Auto-Focus Points - 209-Point Phase-Detection AF System, Scope of delivery - Nikon ZFc Camera, Nikon 16-50mm lens, Nikon 50-250mm lens, Battery, Charger, Body and lens cap, Camera Strap, Continuous Shooting - Up to 11fps, "
  },
  {
      "slug": "apple-macbook-pro-14-m4-10cpu-16gb-512gb-10gpu-eng",
      "text": "MacBook Pro 14\" - Apple M4 Chip 16GB Memory 512GB SSD - Integrated 10-core GPU, Model - Z1DS-000060, Memory - 16GB, Display - 14.2 inches (3024 x 1964), Storage - 512GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M4, Dimensions - 22.12 x 31.26 x 1.55 cm • 1.61 kg, Operating System - macOS, Keyboard Language - English, "
  },
  {
      "slug": "htc-vive-focus-3-standalone-virtual-reality-headset",
      "text": "HTC Vive Focus 3 - Business Edition VR Headset, RAM - 8GB, Links - 2x USB 3.2 Gen-1 Type-C peripheral ports, Bluetooth 5.2 + BLE, Memory - 128 GB / 8 GB with support for up to 2TB microSD, Processor - Qualcomm® Snapdragon™ XR2 processor, no cables or PC required., WiFi type - Wi-Fi 6 + 6E 1, Passthrough - Yes, Refresh rate - 90Hz, Suitable for - Standalone, Field of view - 120 degree lens design with 57mm to 72mm IPD adjustment, Hand tracking - Yes, Tracking type - Inside-out tracking, Display (inch) - 28.8 inches LCD displays, Particularities - including motion sensors with integrated sound system, Bluetooth version - 5.2, Position tracking - 6 DoF inside-out via 4 integrated cameras, Overall resolution - 2448 x 2448 pixels per eye (4896 x 2448 combined pixels), Weight (with headstrap) - 785 grams, "
  },
  {
      "slug": "apple-laptop-apple-apple-macbook-air-13-m2-spacegrau-cto-8c-cpu-10c-gpu-16gb-int",
      "text": "MacBook Air 13.6\" - Apple M2 Chip 16GB Memory 512GB SSD Integrated 10-core GPU, Model - MLXX3D/A, Memory - 16GB, Display - 13.6 inches (2560 x 1664), Storage - 512GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M2, Dimensions - 30.41 x 21.24 x 1.56 cm • 1.4 kg, Operating System - macOS, Keyboard Language - English, "
  },
  {
      "slug": "soundboks-go-carrier-strap",
      "text": "Soundboks Go Carrier Strap , Type - Speaker Accessory, Model - Go Carrier Strap, Technologies - MOLLE stands for modular lightweight load-carrying equipment, Special features - You put the 'Go' in SOUNDBOKS Go with this custom, adjustable, ultra-comfortable padded carrier strap. Clip it to any of the MOLLE system-inspired loops on your speaker, throw it over your shoulder, and take your music anywhere with hands-free ease., Scope of delivery - Carrier Strap, "
  },
  {
      "slug": "babymoov-swoon-evolution-connect-mocca",
      "text": "Babymoov Swoon Evolution Connect Mocca, Safety - 5-point seat belt, Features - 8 swing movements, 5 swing speeds, 12 integrated tones (melodies, white noise and nature sounds), removable play arch with 3 toy figures (crackling foil, bells, mirror), programmable swing duration (10, 20 or 30 minutes), L 81(L) x 65(W) x 79(H) cm, floor space required: 69(L) x 63(W) cm, Material - frame made of metal and plastic, textiles: reduction cushion 75% polyester, 25% cotton, back 98% polyester, 2% elastane, filling material 100% polyester, cover 100% polyester, play elements 100% polyester, all textiles machine washable, Dimensions - 630 x 630 x 930 mm / 5 kg, Adjustability - Seat can be rotated 360°, 3-way adjustable backrest, 2-way adjustable seat, Recommended age - from birth to 6 months, Scope of delivery - Swoon Evolution Connect baby swing, newborn insert, play arch with 3 hanging figures, adapter (2.5 m), "
  },
  {
      "slug": "acer-predator-orion-7000-po7-660-ultra-7-265f-32gb-2tb-ssd-rtx-5080",
      "text": "Acer Predator Orion 7000 (PO7-660) Gaming Desktop - Intel® Core™ Ultra 7-265F - 32GB - 1TB SSD - NVIDIA® GeForce® RTX™ 5080, EAN - 4711474318466, Model - DG.E4DEG.007, Memory - 32 GB DDR5 RAM RGB (2 x 16 GB), up to 128 GB dual-channel DDR5 6000 MHz XMP RGB, Processor - Intel® Core™ Ultra 7 265KF, Hard drive - 2048 GB M.2 PCIe SSD, Graphics card - NVIDIA® GeForce® RTX™ 5080 (16 GB GDDR7), Operating system - Windows 11 Home (64 bit), Special features - CycloneX 360 + CPU Liquid Cooler, Scope of delivery - USB - Predator keyboard RGB and mouse USB - Predator mouse RGB, Case dimensions (W x H x D in mm) - 219 x 485 x 505, approx. 19.8 kg, "
  },
  {
      "slug": "samsung-monitor-samsung-samsung-odyssey-g6-g65b-32-32-ls32bg650euxen",
      "text": "Samsung - 32\" Samsung Odyssey G6 G65B  (32\") LS32BG650EUXEN, Model - LS32BG650EUXEN, Display - VA 32 inches (2560 x 1440), 240Hz, Dimensions - 71.3 x 60.6 x 31.1 cm • 7.4 kg, Connectivity - 2x HDMI 2.1, 1x Display Port 1.4, 1x Gb LAN (RJ-45), 2x USB-A 3.0, 1x USB-B 3.0, 1x 3.5 mm, Response Time - 1ms, High Dynamic Range (HDR) - Yes, "
  },
  {
      "slug": "dyson-v12-detect-slim-absolute-2023",
      "text": "Dyson V12 Detect Slim Absolute (2023), Dimensions - 250 x 1234 x 252 mm / 2.4 kg, Animal brush - Yes, operation area - Tiles, hardwood floors, laminates, parquet floors, furniture, stone floors, allergies, pets, cracks, carpets, fabric, Special features - Battery performance up to (Eco, Boost mode) 18.55 / 25.2 volts, scope of delivery - Cordless vacuum cleaner, wall mount with charging function, combination accessory nozzle, crevice nozzle, hair nozzle, flex adapter, accessory holder for the suction tube, Maximum suction power - 150 AW, Maximum operating time - 60 mins, Maximum volume of the dust container - 0.35 L, Charging time according to the manufacturer - 4 hours, "
  },
  {
      "slug": "hp-omen-16l-tg03-0278ng-i7-14700-32gb-1tb-rtx-5060-ti",
      "text": "HP OMEN 16L TG03-0278ng Gaming Desktop - Intel® Core™ i7-14700 - 32GB - 1TB SSD - NVIDIA® GeForce® RTX™ 5060 Ti, EAN - 199251604225, Model - BU8K8EA#ABD, Memory - 32GB, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5060 Ti, Processor - Intel® Core™ i7-14700, Dimensions - 21 x 40.8 x 41 cm • 14.5 kg, Operating System - Windows® 11 Home, "
  },
  {
      "slug": "hp-gt15-1002ng",
      "text": "HP GT15-1002ng Gaming Desktop - Intel® Core™ i7-13700F - 16GB - 512GB SSD + 1TB HDD - NVIDIA® GeForce® RTX 4070 Ti, Model - 7N7X4EA, Memory - 16GB, Storage - 512GB SSD + 1TB HDD, Graphics - NVIDIA® GeForce® RTX 4070 Ti, Processor - Intel® Core™ i7-13700F, Dimensions - 16.5 x 39.61 x 44.8 cm • 13.8 kg, Operating System - Windows® 11 Home, Keyboard Language - , "
  },
  {
      "slug": "sony-fe-24-70mm-f-2-8-gm-ii",
      "text": "Sony FE 24-70mm F/2.8 GM II, Focus - Autofocus, Mount - Sony E mount, Length - 152mm, Weight - 695g, Aperture - F/2.8 to F/22,  11 blades, Lens type - Full Frame, Filter size - 82mm, Focal length - 24mm to 70mm, Focus Distance - 21cm, Image stabiliser - Yes, Scope of delivery - Sony FE 24-70mm f/2.8 GM II lens, Front & Rear lens cap, lens Hood, Lens Case, "
  },
  {
      "slug": "powercolor-graphics-card-powercolor-hellhound-amd-radeon-rx-9070-xt-16gb-gddr6",
      "text": "Graphics Card PowerColor Hellhound AMD Radeon™ RX 9070 XT 16GB GDDR6, OpenGL - 4.6, Bus Standard - PCIE 5.0 x16, Memory Speed - 20.0 Gbps, Video Memory - 16GB GDDR6, Engine Clock(OC) - up to 2460MHz(Game) up to 3010MHz(Boost), Memory Interface - 256-bit, Stream Processor - 4096 Units, DirectX® Support - 12, Engine Clock(STD/Silent) - up to 2400MHz(Game) up to 2970MHz(Boost), Maximum Resolution (HDMI) - 7680×4320, Standard Display Connectors - 1 x HDMI 2.1b，3 x DisplayPort 2.1a, Maximum Resolution (DisplayPort) - 7680×4320, "
  },
  {
      "slug": "delonghi-coffee-machine-delonghi-magnifica-evo-ecam-290-61-sb",
      "text": "De'Longhi Magnifica Evo ECAM 290.61 Coffee Machine, Power - 1450W, Screen - Yes, Grinder - Adjustable, Cleaning - Rinsing function, descaling program, removable brew group, adjustable water hardness, Features - Suitable for coffee beans and coffee powder, touch control operation, hot water function, cup height max. 140mm, double coffee spout, 2-cup function, automatic switch-off (energy-saving mode), programmable switch-off time, Programs - 4 pre-installed drinks - espresso, coffee, MyLatte, cappuccino and hot water function for tea, Dimensions - 240 x 440 x 360 mm / 9.6 kg, Milk system - Yes, with a removable milk container, Water amount - Adjustable, Pump pressure - 15 bar, Amount of coffee - adjustable in 3 levels, Special features - LatteCrema milk system with adjustable milk foam consistency and automatic cleaning, MyLatte function – decide how much milk you want to use to prepare your coffee milk drink, conical grinder with adjustable grinding level (13 levels), Scope of delivery - milk container, water filter, cleaning brush, coffee measure, Coffee temperature - Adjustable, Water tank capacity - 1.8l, detachable with integrated water filter, Fixed water connection - No, Capacity bean container - 250g, Coffee grounds container capacity - 14 portions, "
  },
  {
      "slug": "xgimi-horizon-ultra-projector",
      "text": "Xgimi Horizon Ultra 4K Projector, Lens - Coated lens with high light transmission, MEMC - Yes, WiFi - Wifi 6 dual band 2.4/5 GHz, 802.11a/b/g/n/ac/ax 4, R.A.M - 2GB, Inputs - DC x 1, HDMI x 1, HDMI (EARC supported) x 1, USB x 2, LAN x 1, Outputs: Headphones x 1 (3.5mm), OPTICAL x 1, Latency - Game mode ≤ 18 ms (AK off), Speaker - 2 x 12W Harman/Kardon, Bluetooth - 5.2/BLE, Brightness - 2300 ISO lumens, Image size - 40” - 200”, Power loss - <300W, Dolby audio - Yes, Noise level - <28 dB@1m 7, Performance - AC100~240V, 50/60Hz, adapter 19V 15.79A, Display chip - 0.47” DMD, Light source - Dual Light (LED + Laser), Optical zoom - Yes, Storage space - 32GB, Product weight - 5.2kg, Operating system - Android TV™ 11.0 3, Projection ratio - 1.2-1.5:1, Display mirroring - Chromecast built-in/Airscreen, Projection method - Front, back, blanket in front, blanket behind, Supported formats - HDR10, HLG, Dolby Vision, Display technology - DLP, Dolby Digital (DD) - Yes, Expected lamp life - 25000 hours, ISA 3.0 technology - Uninterrupted automatic keystone correction, Uninterrupted autofocus, Intelligent screen alignment, Intelligent obstacle avoidance, Intelligent eye protection, Wall color adjustment, Standard resolution - 3840x2160 pixels, 4K, Product classification - Home Projector, Dolby Digital Plus (DD+) - Yes, Product size (H x W x D) - 265 x 224 x 170mm, "
  },
  {
      "slug": "philips-coffee-machine-philips-ep5447-90-serie-5400-lattego",
      "text": "Philips Coffee Machine Philips EP5447/90 Serie 5400 LatteGo, Screen - Yes, Grinder - 12-level adjustable ceramic grinder, cleaning - automatic cleaning program, removable brew group, adjustable water hardness, Water tank - 1.8L, milk system - Yes, with removable milk container, performance - 1500W, Water amount - Adjustable, Coffee amount - Adjustable, Pump pressure - 15bar, Special features - Memory function, Suitable for coffee beans and coffee powder, touch control, hot water function, american coffee function, double height-adjustable coffee spout, 2-cup function, coffee temperature - 3 levels adjustable, Capacity Bean container - 250g, Coffee ground container capacity - 12 Servings, "
  },
  {
      "slug": "msi-thin-a15-b7vf-ryzen-7-16gb-512gb-rtx-4060",
      "text": "MSI Thin A15 B7VF Gaming Laptop - AMD Ryzen 7 7735HS - 16 GB - 512GB SSD - NVIDIA® GeForce® RTX 4060, Model - 0016RK-410, Memory - 16 GB, Display - 15.6 inches (1920 x 1080), 144Hz, Storage - 512GB SSD, Graphics - NVIDIA® GeForce® RTX 4060 , Processor - AMD Ryzen 7 7735HS, Dimensions - 35.9 x 25.4 x 2.1 cm • 1.86 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "samsung-smartphone-galaxy-z-flip-5-5g-12gb-256gb",
      "text": "Samsung Galaxy Z Flip5 5G Smartphone - 256GB - Dual SIM, Memory - 8GB, Battery - 3700 mAh, Display - 6.7 (3.4)-inch Dynamic AMOLED 2X (2640 x 1080), Storage - 256GB, Processor - Snapdragon 8 Gen 2, Rear Camera - 12MP + 12MP, Connectivity - 5G, Front Camera - 10MP, Operating System - Android 13, "
  },
  {
      "slug": "epson-projector-epson-eh-ls500-android-tv-edition",
      "text": "Epson Ultra-Short Throw EH-LS500 Projector - 4K UHD, Brightness - 4000 ANSI lumens, Connections - USB 1.1 Type A, USB 2.0 Type Mini-B, RS-232C, Wireless LAN b / g / n (2.4 GHz) (optional), stereo mini-jack output, HDMI (HDCP 2.2) (3x), Aspect ratio - 16:9, Picture quality - 4K UHD, Projection size - 65 to 130 inches (1,65 m to 3,30 m) , 3D functionality - Full 3D, Special features - 4K PRO-UHD • 3LCD technology • Android TV Edition: Stream shows, games, films, news, sports and much more • Two built-in 10 W speakers • Easy to use: three HDMI inputs and space for streaming devices • Automatic Keystone Correction • Digital Zoom • Frame Interpolation • Game Mode, Screen resolution - 3840 x 2160 pixels, Projection distance - 0,4 m - 0,82 m, "
  },
  {
      "slug": "asus-graphics-card-asus-tuf-gaming-geforce-rtx-3080-ti-oc",
      "text": "Asus TUF Gaming GeForce RTX™ 3080 Ti OC LHR Graphics Card, GPU - GeForce RTX 3080 Ti, Power - 750 W, Cooling - Active, 3 fans, Interface - PCI Express 4.0, Dimensions - 29.99 x 12.69 x 5.17 cm and 0.9 kg, Processor clock speed - 1785 MHz, Separate graphics adapter memory - 12 GB, "
  },
  {
      "slug": "roborock-vacuum-cleaner-roborock-q-revo",
      "text": "Roborock Qrevo Vacuum & Mop Robot Cleaner, Depth - 96.5 mm, Width - 350 mm, Height - 353 mm, Weight - 3.8 kg, Runtime - 180 min, Battery life - 400 m², Charging time - 4 h, Suction power - 5500 Pa, Brush material - Rubber, Operation area - Tiles, hardwood floors, laminates, parquet floors, stone floors, carpets, Special features - Suction function with an ultra-high suction power of 5500Pa, mopping function with mop pads that can be raised by 7mm and rotate at 200 rpm with room-specific control of the amount of mopping water, LDS sensors & AI-controlled obstacle detection, intelligent path planning with real-time room maps & selective individual room planning with virtual suction & wiping -Restricted zones, quick creation of the map, controllable via smartphone & voice assistant, movable solid rubber brush for better floor contact, suction station with automatic emptying, refilling of water and automatic cleaning of the mopping pad, Scope of delivery - Robot vacuum cleaner, suction station, dust filter, wipes, power cable, operating instructions, Obstacle detection - No, Water tank capacity - 0.08 L, Dust capacity (total) - 0.35 L, Vacuum cleaner programs - Around/along obstacles, Base station dimensions (W x D x H) - 340 x 487 x 561 mm, "
  },
  {
      "slug": "dyson-vacuum-cleaner-dyson-dyson-v15s-detect-submarine-a16d1665-cb7b-4fff-adf0-ea6772752e91",
      "text": "Dyson V15s Detect Submarine Wet & Dry Vacuum Cleaner, Weight - 3.8 kg, Runtime - 60 min, Dimensions - 253 x 1246 x 266 mm / 3.8 kg, Motor power - 660 W, Charging base - No, Charging time - 4.5 h, Cleaning type - Dry&wet, Suction power - 240 AW, Operation Area - Tiles, hardwood floors, laminates, parquet floors, carpets, furniture, cracks, stone floors, Special Features - Floor attachment with wet roller, Dyson Hyperdymium™ motor, piezoelectric sensor, precisely aimed light beam, dust analysis on the LCD display, Dirt capacity dry - 0.76 L, Number of settings - 3, Dust container type - Bagless, Runtime (low speed) - 5 min, Dirt separating method - Cyclonic, Runtime with motorized brush (high speed) - 60 min, "
  },
  {
      "slug": "samsung-smartphone-s22-ultra-enterprise-edition-8gb-128gb",
      "text": "Samsung Galaxy S22 Ultra Enterprise Edition Smartphone - 128GB - Dual SIM, Memory - 8GB, Battery - 5000 mAh, Display - 6.8-inch Dynamic AMOLED 2X, HDR10+ (1440 x 3088), Storage - 128GB, Processor -  Exynos 2200 (4 nm), Dimensions - 7.79 x 16.33 x 0.89 cm (0.228kg), Rear Camera - 108MP+10MP+10MP+12MP, Connectivity - 5G, Front Camera - 40MP, Operating System - Android 12, One UI 4, "
  },
  {
      "slug": "apple-apple-watch-ultra-2-gps-cellular-titanium-case-and-alpine-loop-m",
      "text": "Apple Watch Ultra 2 GPS + Cellular, Titanium Case, 49mm, Type - Smartwatch, Features - Powered by new S9 SiP, New Double Tap Gesture (answer a call, open a notification, play and pause music and more), Biggest and brightest Apple Watch display, Always-On Retina display, Faster on-device Siri with health data access, Precision Finding for iPhone, Fall Detection and Crash detection, Siren, Customizable Action Button, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Blood Oxygen app, ECG app, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Precision dual-frequency GPS, Durable from -20° C to 55° C, Emergency SOS, International Emergency Calling, Strong Battery Performance, Pair Multiple Watches with Family Setup, Band Size - M (145–190mm), Battery Life - Up to 36h / 72h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Titanium Case and Alpine Loop, Music playback - Yes, Water/Dust proof - Up to 10 ATM / MIL-STD-810H, Activity Tracking - Blood oxygen, Electrocardiography (ECG), Hours slept, Resting heart rate, Target heart rate, Skin temperature, Running (Stride Length, Ground Contact Time, Vertical Oscillation), Depth/Pressure/Location Tracking for Divers, Multisport Workouts, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "lg-oled42c27la-aeud",
      "text": "TV LG 42\" OLED42C27LA OLED 4K, Screen - Flat, Delivery - OLED42C27LA, LG Magic Remote MR22GN (NFC), Remote control batteries (2x AA), Quick Start Guide, Power cord, Stand(s) (depending on the design type of each TV model), Processor - α9 Gen5 AI Processor 4K, Model Name - TV LG OLED42C27LA, Connections - 4x HDMI 2.1, 1x LAN (Ethernet), 1x optical digital output (S/PDIF, fiber optic cable), 1x CI slot, Product type - OLED TV 4K, VESA standard - 300 x 200, Receptions Types - DVB-T2 HD, DVB-C, DVB-S, DVB-S7, Special Features - 4K AI processor with AI Sound Pro, AI Picture Pro and AI Brightness Control, Google Assistant, Amazon Alexa, Apple AirPlay, Dimensions with stand - 932mm / 577mm / 170mm, Dimensions without stand - 932mm / 540mm / 41.1mm, HDR (High Dynamic Range) - Cinema HDR (Dolby Vision IQ™, HDR10 Pro and HLG), "
  },
  {
      "slug": "gopro-hero12-black-creator-edition",
      "text": "Gopro HERO 12 Black Creator Edition, Video - 5312 x 2988 at 60 fps // 1920 x 1080p at 200/240 fps, Sensor - 27 megapixel, Storage - MicroSD (U3/V30 recommended), Photography - RAW 27mp, IP Streaming - H.265 1920x1080p, Waterproofing - Up to 10 meters (Camera body), Special features - 8x slow-motion video, Scope of delivery - Gopro Hero 12 black, Battery, Adhesive mount, Mounting buckle, Thumbscrew, USB-C cable, Image stabilization - Hypersmooth 6.0, Media Pod with built-in microphone, Battery tripod grip, "
  },
  {
      "slug": "msi-vector-gp78-hx-13vg-054-i7-13700hx-16gb-1tb-rtx-4070",
      "text": "MSI Vector GP78 HX 13VG-054 Gaming Laptop - Intel® Core™ i7-13700HX - 16GB - 1TB SSD - NVIDIA® GeForce® RTX 4070, Model - 0017S2-054, Memory - 16GB, Display - 17.3 inches (2560 x 1600), 240, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX 4070, Processor - Intel® Core™ i7-13700HX, Dimensions - 38 x 29.7 x 2.94 cm • 3.1 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "google-smartphone-google-pixel-9-pro-16gb-128gb",
      "text": "Google Pixel 9 Pro Smartphone - 128GB - Dual SIM, Memory - 16GB, Battery - 4700 mAh, Display - 6.3-inch LTPO - OLED (1280 x 2856), Storage - 128GB, Processor - , Dimensions - , Rear Camera - 50MP+48MP+48MP, Connectivity - 5G, Front Camera - 42MP, Operating System - Android 14, "
  },
  {
      "slug": "sony-alpha-6000-kit-system-camera-24-3-megapixel-with-lens-16-50-mm",
      "text": "Sony Alpha 6000 Camera Kit with E PZ 16-50 mm f/3.5-5.6 OSS Lens, ISO - 100 to 25,600, Photo - JPEG, Raw  , Video - Full HD (1920 x 1080) at 59.94fps, Storage - SD Card slot, Mount Type - Sony E, Screen Type - 3\" Tilting 921,600-Dot LCD, View Finder - 0.39” EVF, Connectivity - 1x Micro-HDMI output / Micro-B interface / WiFi, Image Sensor - 24.7MP APS-C CMOS, Shutter Speed - 30’ -  1/4000 sec, Auto-Focus Points - 179-Point AF System, Scope of delivery - Sony a6000, Sony 16-50mm f3.5-5.6 OSS lens,  Lens Cap, Body Cap, Sony NP-FW50 Battery, Eye piece, AC adapter, Micro USB cable, Strap , "
  },
  {
      "slug": "garmin-fenix-7s-stainless-steel-case-silicone-band-42mm",
      "text": "Garmin FENIX 7S Smartwatch, Stainless Steel Case, 42mm, Type - Sport & GPS Watch, Sensors - Accelerometer, Altimeter, Barometer, Compass, Gyro sensor, Heart rate sensor, Pulse oximeter (Sp02) sensor, Temperature sensor, Features - Body battery™, Garmin Pay™, Climb/PacePro™, Sleep Score, Real-Time STAMINA rest energie tracking, Adjustable Brightness, Customizable Watch Faces, Sleep quality, Temperature, Fall Detection, Various sport functions: Fitness, Golf, Intervall training, Running, Multisport, Cycling, Swimming, Ski, Hiking, Band Size - 108-182mm, Durability - Up to 10 ATM + Dust resistant, Battery Life - up to 11 days, Connectivity - GPS, NFC, Bluetooth 5.0, WiFi, Compatibility - Android / iOS, Build Material - Stainless Steel Case & Silicone Band, Music playback - Yes, Operating System - Garmin OS, Activity Tracking - Activity vs. inactivity, Altitude changes, Blood oxygen, Breathing patterns, Cadence, Calories burned, Cycling speed, Distance swam, Distance traveled, Duration of exercise, Heart rate, Hours slept, Laps swam, Pace, Speed, Stairs climbed, Steps taken, Global Positioning - GPS, NFC, GLONASS, "
  },
  {
      "slug": "sony-fe-lens-24-70mm-f2-8-gm",
      "text": "Sony FE Lens 24-70mm F2.8 GM, Sensor Type - Full frame, Product Type - Standard zoom lens, Filter Thread - 82 mm, Min. Close-up - 38 cm, Light Intensity - 2.8, Bayonet connection - Sony E, Max. Light intensity - 2.8, "
  },
  {
      "slug": "canon-eos-r10-rf-s-18-150mm-f3-5-6-3-is-stm-camera-kit",
      "text": "Canon EOS R10 Camera Kit with RF-S 18-150mm f/3.5-6.3 IS STM Lens, "
  },
  {
      "slug": "canon-rf-15-35mm-f-2-8-l-is-usm-lens",
      "text": "Canon RF 15-35mm f/2.8 L IS USM Lens, "
  },
  {
      "slug": "sony-headphones-sony-wh-1000xm5-noise-cancelling-in-ear-bluetooth-headphones",
      "text": "Sony WF-1000 XM5 Noise-cancelling In-ear Bluetooth Headphones, Battery - Up to 8 +16h (case charging), Sensors - Speak-to-Chat, proximity sensor for adaptive playback, 2x two acceleration sensors for wear detection, Connections - USB-C, Key features - HD Noise cancelling processor QN2e and Integrated V2 processor with new Dynamic driver X  ensures low distortion and crystal clear audio reproduction. Other premium sound technologies include High-resolution Audio wireless, DSEE Extreme to enhance music and immersive 360 Reality Audio., Noise canceling - Yes, Wireless charging - Yes, Water/splash resistant - IPX4, Outstanding Functionality - Can be paired with two bluetooth devices at the same time , Fast charging, "
  },
  {
      "slug": "yamaha-dj-studio-equipment-yamaha-hs5-bassreflex-studio-monitor-piece",
      "text": "Yamaha HS5 Active 2-Way Nearfield Monitor (Piece), Type - Active 2-Way Nearfield Monitor (Piece), Model - HS5, Battery - , Chassis - 5-inch Woofer (45 W) + 1-inch Tweeter (25 W), Amplifier - 70 W biamp, Frequency - 54-30,000 Hz, Durability - -, Connections - Balanced XLR and 6.3 mm balanced jack, Connectivity - -, Operating mode - Plug-in, Special features - Bass reflex system. Adjustable input level. Room control and high trim response control, Intelligent functions - -, "
  },
  {
      "slug": "garmin-fenix-7-pro-solar-stainless-steel-and-silicone-band-47mm",
      "text": "Garmin Fenix 7 Pro SOLAR Smartwatch, Stainless Steel, 47mm, Type - Sport & GPS Watch, Features - Rugged design, Power Glass™ and solar charging lens provides a superior battery life, LED Flashlight,80+ sports/Outdoor apps, Minimize Jetlag with Jetlag guide, Real-Time STAMINA rest energie tracking, Explore your surroundings with RoundTrip Routing / Around Me function, Sleep analysis with SleepScore, Start your day with Morning Report, Smart Features (receive calls, nofitications), Make contactless payments with Garmin Pay™, Get dynamic data on your pace while running with PacePro™, Manage your energy with ClimbPro™, Targeted Training Recommendations, Animated Workouts, Emergency Assistance and Accident Notifications / LiveTrack lets you share your real-time location with others, Band Size - 22mm, Battery Life - 122h in GPS mode / Up to 37 days in smartwatch mode (with solar power), Connectivity - GPS, NFC, Bluetooth 5.0, WiFi, Compatibility - Android / iOS, Build Material - Stainless Steel and Silicone Band, Music playback - Yes, Water/Dust proof - , Activity Tracking - 80+ Sports/Outdoor apps (Running, Mountain biking, Team sports), Activity vs. inactivity, Altitude changes, Blood oxygen, Heart Rate, Breathing patterns, Cadence, Calories burned, Cycling speed, Distance swam, Distance traveled, Duration of exercise, Heart rate, Laps swam, Pace, Speed, Stairs climbed, Steps taken, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "ecovacs-deebot-t30s-combo-complete-robot-cleaner",
      "text": "Ecovacs DEEBOT T30S Combo Complete Robot Cleaner, Suction power - 11000 Pa, Special features - Combo design that allows both the versatile handheld vacuum and the smart robotic vacuum cleaner to share the same station, Powerful 11000Pa Suction, OZMO Turbo 2.0 features a dual-plate rotating mop system, TrueDetect 3D 3.0 Technology with structured light, enabling millimeter-level obstacle avoidance, recognizes carpets with extraordinary accuracy, Station Dimension - 554 x 445 x 528 mm / 14.4 kg, Wet Mopping function - Yes, Dimensions of the station - 554 x 445 x 528 mm / 14.4 kg, Ultrasonic carpet detection - Yes, Charging time according to manufacturer - ≈3.1 Hours, "
  },
  {
      "slug": "apple-macbook-air-13-m3-8cpu-8gb-256gb-8gpu-eng",
      "text": "MacBook Air 13\" Apple M3 Chip 8GB Memory 256GB SSD - Integrated 8-core GPU, Model - MRXN3F/A, Memory - 8GB, Display - 13.6 inches (2560 x 1664), Storage - 256GB SSD, Graphics - Apple Integrated 8-core GPU, Processor - Apple M3, Dimensions - 30.41 x 21.5 x 1.13 cm • 1.24 kg, Operating System - macOS, Keyboard Language - English, "
  },
  {
      "slug": "microsoft-console-xbox-series-x-1tb-digital",
      "text": "Microsoft Xbox Series X 1TB Digital Console, Color - Robot White, Wi-Fi - Yes, Weight - 6.1 kg, Equipment - Including 1x Xbox Wireless Controller Robot White, Dimensions - Width: 216 mm, Height: 378 mm, Depth: 294 mm, Disk Drive - No, Connections - 1x HDMI-Out 2.1, 1x Storage Expansion, 3x USB 3.1, 1x Ethernet, 1x Network Slot (Power), Product Type - Game Console, Console System - Xbox Series X, Storage Capacity - 1 TB, Scope of Delivery - Xbox Series X Console, 1x Xbox Wireless Controller Robot White, High-speed HDMI Cable, Power Cable, 2x AA Batteries, Screen Resolution - Native resolution up to 4K / 1440p, Manufacturer Article Number - EP2-00702, "
  },
  {
      "slug": "irobot-vacuum-cleaner-irobot-roomba-976",
      "text": "iRobot Roomba 976 Vacuum Cleaner Robot, Battery - Up to 75 min, Control - Via iRobot Home App and voice control (Amazon Alexa and Google Assistant), Chip Logo - iRobot Manufacturer of the Year 2023 - Readers' Choice March 2023 vacuum cleaner - chip.de/CD164400, Dimensions - 35 x 35 x 9.1 cm • 3.9 kg, Operation Area - All floors, Special Features - Connected via Wi-Fi • Extra strong suction power • Two rubber brushes for all floors • iAdapt® 2.0 Navigation • vSlam sensors for mapping of cleaning areas • Automatic recharging and resume • Ideal for pets • Dirt Detect ™ sensors • Cliff detection sensors • Imprint® coupling technology • Tailored cleaning recommendations • Captures 99% of allergens, pollen and particles with AeroForce® high-performance filter, Volume of the Dust Container - 0.6 L, "
  },
  {
      "slug": "apple-desktop-apple-mac-mini-late-2020-apple-m1-8gb-512gb-ssd",
      "text": "Mac Mini Desktop - Apple M1 Chip 8GB Memory 512GB SSD - Integrated 8-core GPU, Memory - 8GB, Storage - 512GB SSD, Processor - Apple M1, Dimensions - 19.7 x 19.7 x 3.6 cm • 1.2 kg, Operating System - macOS Big Sur, "
  },
  {
      "slug": "sony-6700-18-135mm-lens-kit",
      "text": "Sony Alpha 6700 Camera Kit with E 18-135mm F3.5-5.6 OSS Lens, "
  },
  {
      "slug": "samsung-tv-samsung-gu55du8579uxzg",
      "text": "Samsung GU55DU8579UXZG - TV 55\" Crystal UHD 4K, HDR 10+ - Yes, Contrast - Mega Contrast, Smart TV - Yes, Gaming Hub - Yes, Connections - HDMI x3, USB x2, Digital audio output (optical) x1, Antenna input x3, CI+ slot x1, Network connection (LAN) x1, Screen Type - Crystal UHD, SmartThings - Yes, Ambient Mode - Ambient Mode, Analog Tuner - Yes, Power Supply - 220‑240V, Speaker Type - 2-Channel, Picture Engine - Crystal Processor 4K, Remote Control - TM2360E, Adjustable Stand - No, Screen Mirroring - Yes, Bluetooth Version - BT5.2, Contrast Enhancer - Yes, Motion Technology - Motion Xcelerator, Refresh Rate (Hz) - 50, Screen Resolution - 3,840x2,160, Screen Size in cm - 138, Weight with stand - 16.2 kg, Weight without stand - 15.5 kg, HDR (High Dynamic Range) - HDR, VESA Wall Mount Standard - 200x200mm, Output Power (RMS) in Watts - 20W, Dimensions with stand (HxWxD) - 774 x 1232 x 249mm, Digital Television Reception (DVB) - DVB-T2;DVB-C, HDMI-eARC (enhanced Audio Return Channel) - eARC/ARC, "
  },
  {
      "slug": "valve-console-valve-steam-deck-256gb",
      "text": "Valve Steam Deck 256GB Gaming Console, Depth - 49 mm, Width - 298 mm, Height - 117 mm, Weight - 669 g, Display - LCD, Platform - Steam Deck, Gyroscope - Yes, Aspect ratio - 16:10, Display diagonal - 17.8 cm (7\"), Battery life (max) - 8 h, USB Power Delivery - Yes, Processor frequency - 2400 MHz, Video game included - No, Maximum refresh rate - 60 Hz, Number of microphones - 2, Processor performance - 448 GFLOPS, Headphone connectivity - 3.5 mm, Compatible memory cards - MicroSD (TransFlash), MicroSDHC, MicroSDXC, Built-in memory capacity - 256 GB, Processor boost frequency - 3.5 GHz, Operating system installed - SteamOS, Graphics processor performance - 1.6 TFLOPS, Graphics processor architecture - AMD RDNA 2, "
  },
  {
      "slug": "apple-watch-se-gps-aluminium-case-and-sport-band-40mm",
      "text": "Apple Watch SE GPS, Aluminium Case, 40mm, Type - Smartwatch, Features - Apple Pay, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Emergency SOS, Fall Detection, Crash Detection, Pair Multiple Watches with Family Setup, Cycle Tracking, Sleep Stages, Medications App, AFib History, Swim-proof, Listen Music, Podcast, Audiobooks, Battery Life - Up to 18h, Connectivity - Wi-Fi, Bluetooth 5.0, NFC, Compatibility - iOS, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 5ATM, Activity Tracking - Continuous Heart Rate Tracking, Multisport workouts; Swimming, Running, Yoga, Cycling and Several Other Sport, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "ecovacs-vacuum-cleaner-ecovacs-deebot-t10-plus-saug-wischroboter",
      "text": "Ecovacs Deebot T10 PLUS Vacuum & Mop Robot Cleaner with Automatic Dirt Disposal, Control - App controlled, Runtime - 260 minutes, Dimensions - 7.62 x 22.86 x 7.62 cm / 14.3 kg, Suitable For - Tiles, hardwood floors, laminates, parquet floors, carpets, stone floors, Suction power - 3000Pa, Wipe function - yes, special features - OZMO Pro 3.0 Electric Oscillating Wiping System, TrueMapping 2.0 (DToF laser), AIVI 3.0 (camera), Scope of delivery - 1 DEEBOT T10 PLUS,1 suction station,1 reusable wipe,2 disposable wipes,1 charging cable,2 side brushes,1 user manual,1 cleaning tool,1 OZMO™ Pro 3.0 Vibrating Mopping System,1 air freshener module, Water tank volume - 0.24 L, Dust container volume - 0.4 L, "
  },
  {
      "slug": "philips-neopix-ultra-2-projector",
      "text": "Philips NeoPix Ultra 2 Projector - Full HD, Smart TV - Philips OS, Brightness - 300 ANSI lumens, Connections - 1x USB Type A, 2x HDMI, 1x VGA, 1x 3.5 mm audio jack, 1x Micro SD slot, Aspect ratio - 16:9, Picture quality - Full HD, Projection size - 20 - 65 inches, 3D functionality - No, Special features - WiFi, built-in speakers, built-in apps (Netflix, YouTube, Firefox, Express VPN, VLC), keystone correction, Screen resolution - 1920 x 1080 pixels, Projection distance - 0.8 - 2.0 m, "
  },
  {
      "slug": "jbl-party-box-on-the-go-portable-bluetooth-speaker",
      "text": "JBL Partybox on the go , "
  },
  {
      "slug": "apple-smartphone-iphone-se-2022-4gb-128gb",
      "text": "Apple iPhone SE (2022) - 128GB - Dual SIM, Memory - 4GB, Battery - 2018 mAh, Display - 4.7-inch Retina IPS LCD (750 x 1334), Storage - 128GB, Processor - Apple A15 Bionic, Dimensions - 6.73 x 13.8 x 0.73 cm (0.144kg), Rear Camera - 12MP, Connectivity - 5G, Front Camera - 7MP, Operating System - iOS 15.4, "
  },
  {
      "slug": "canon-rf-100-400mm-f5-6-8-is-usm",
      "text": "Canon RF 100-400mm F5.6-8 IS USM, "
  },
  {
      "slug": "eufy-vacuum-cleaner-eufy-robovac-lr30-hybrid-eu",
      "text": "eufy RoboVac LR30 Hybrid, Control - App, Google Assistant, and Alexa, Dimensions - 35 x 35 x 10 cm • 3.2 kg, Running time - 145 min, Suitable for - All floors, Suction power - 3000 Pa, Delivery Scope - Reufy RoboVac LR30 Hybrid, a charging station, a power supply, 2 side brushes, an additional filter, a water tank, , a user manual, Dust bin volume - 0.33L, Mopping function - Yes, Special Features - Carpet Detection • Laser Navigation • Quiet Mode • Multi-Floor Technology • Zone Cleaning • Noise level 62db • Mapping function, Water tank volume - 0.2 L, "
  },
  {
      "slug": "acer-predator-helios-neo-16-ai-ultra-9-275hx-32gb-1tb-rtx-5070-ti",
      "text": "Acer Predator Helios Neo 16 AI Gaming Laptop - Intel® Core™ Ultra 9-275HX - 32GB - 1TB SSD - NVIDIA® GeForce® RTX™ 5070 Ti, EAN - 4711474410016, Modelo - NH.QX2EG.002, Memoria - 32 GB de RAM DDR5, Pantalla - 16 pulgadas (2560 × 1600), 240 Hz, Procesador - Intel® Core™ Ultra 9-275HX, Tarjeta gráfica - NVIDIA® GeForce® RTX™ 5070 Ti, Sistema operativo - Windows® 11 Home, Dimensiones y peso - 35,6 x 27,5 x 2,6 cm - 2,7 kg, Idioma del teclado - alemán (QWERTY), 4 zonas RGB, Almacenamiento masivo - 1.000 GB M.2 PCIe Gen4 SSD, Duración de la batería - hasta 5 horas (según los resultados de las pruebas de reproducción de vídeo), Características especiales - Compatible con Copilot+, webcam FHD, A-Cover de aluminio, refrigeración 3D Aeroblade de 5ª generación, Liquid Metal, Vector Heat Pipe, Predator Premium Service, "
  },
  {
      "slug": "sony-lens-sel-85-f-85-mm-85-mm-f-1-8-objective-fixed-focal-length-system-sony-e-objektiv",
      "text": "Sony FE 85mm f/1.8, "
  },
  {
      "slug": "4moms-mamaroo-4-babywippe",
      "text": "4MOMS mamaRoo 4, Power - AC adaptor, Delivery - Baby bouncer, fabric cover, toy balls, power adaptor, AUX cable, user manual, Connectivity - Bluetooth enabled (motion and sound), Weight Limit - 9 kg, App-controlled - Yes, Special features - 25 motion and speed combinations, 4 built-in sounds, MP3 compatible, Full recline, Removable seat fabric, "
  },
  {
      "slug": "philips-2200-series-ep2224-10-coffee-machine",
      "text": "Philips 2200 Series EP2224/10 Coffee Machine, Display - Touch screen, Grinder - Adjustable ceramic disc grinder (12 levels), Dimensions - 246 x 371 x 433 mm / 7.5 kg, Coffee system - Coffee beans, coffee powder, pump pressure - 15 bars, Special features - Double height-adjustable beverage spout, 2-cup function, automatic switch-off (adjustable), hot water/​steam nozzle, hot water function, removable water tank, integrated water filter, removable brewing group, adjustable water hardness, descaling program, Power consumption - 1500 W, Water tank volume - 1.8 L, Bean container volume - 275 g, "
  },
  {
      "slug": "yamaha-dtx-452k",
      "text": "Yamaha DTX-452K E-drum Set, Type - Drum system, USB port - Yes, DC-in jack - Yes, Drum sound types - Crash, Hi-hat, Kick, Ride, Snare drum, Tom, Drum kits quantity - 10, Sound module weight - 500 g, Sound module included - Yes, Sound module dimensions (WxDxH) - 269 x 39 x 147 mm, "
  },
  {
      "slug": "gainward-graphics-card-gainward-rtx-5090-phantom-32gb-gddr7",
      "text": "Graphics Card Gainward RTX 5090 Phantom 32GB GDDR7, EAN - 4710562244878, GPU - NVIDIA GeForce RTX 5090, Memory - 32 GB (GDDR7), Supports - Windows 11, Windows 10, Model-Nr. - NE75090019R5-GB2020P, Connection - 512 bits, Dimensions - 14.6 x 33.2 x 7 cm • 3.0 kg, Connections - 1x HDMI version 2.1b, 3x Displayport version 2.1b, Clock frequency - 2010 MHz, Boost Clock Speed - 2,407 MHz, "
  },
  {
      "slug": "google-pixel-watch-3-smartwatch-aluminium-case-41mm",
      "text": "Google Pixel Watch3 Smartwatch, Aluminium Case, 41mm, Type - Smartwatch, Features - All-day battery life (with always-on display) & faster loading time, Detects loss of pulse and alerts emergency services, Balance activity and rest with readiness insights, Feel safe thanks to Security check feature, Google Wallet, Recycled, premium stainless steel finish, All the information you need is right on your wrist (Gmail, Google Calendar and Google Wallet), On-wrist calls, Fall Detection, Emergeny SOS, Band Size - , Battery Life - Up to 24h, Connectivity - Bluetooth®, Wi-Fi, NFC, Compatibility - Compatible with most phones running on Android 10.0 or newer, Build Material - Aluminium Case and Fluoroelastomer Band, Music playback - Yes, Water/Dust proof - 5 ATM / IP68, Activity Tracking - All-day Activity Tracking (steps, distance & calories),Track run performance and 40+ exercises (HIIT, spinning and rowing and more), Daily Readiness Score, Continuous Heart Rate Tracking, Activity vs. inactivity, Global Positioning - GLONASS, GPS, BeiDou (BDS), Galileo, "
  },
  {
      "slug": "sony-srs-xp700-portable-wireless-speaker",
      "text": "Sony SRS-XP700 Portable Speaker, Type - Portable Wireless Speaker, Model - SRS-XP700, Power - -, Battery - Up to 25h battery, Chassis - 3x 6 cm Tweeters, 1x 5 cm rear, 2x 17 cm Woofers, Frequency - -, Durability - IPX4 Water-repellent, Connections - 1x Stereo mini jack (IN), 2x USB A, 1x microphone input, 1x guitar input, Connectivity - Bluetooth, Technologies - -, Operating mode - Battery-powered, Special features - The XP700 offers room-filling sound. The omnidirectional party sound, which is generated by the X-Balanced Speaker Unit and powerful front and rear tweeters, creates rich, clear sound in all directions. The speaker is perfect for parties - whether indoors or outdoors -, offers a long battery life, is water-repellent according to IPX4 and has a practical handle so that it can be easily transported from one party to the next., "
  },
  {
      "slug": "samsung-tablet-galaxy-tab-s9-ultra-wifi-256gb-12gb",
      "text": "Samsung Tablet, Galaxy Tab S9 Ultra - WIFI - Android - 256GB, Memory - 12GB, Battery - 11200 mAh, Display - 14.6-inch Dynamic AMOLED 2X (2960x1848), Storage - 256GB, Processor - Qualcomm Snapdragon® 8 Gen 2 , Dimensions - 21 x 32.6 x 0.6 cm (0.73kg), Rear Camera - 13MP + 8MP, Connectivity - WIFI, Front Camera - 12MP + 12MP, Operating System - Android, "
  },
  {
      "slug": "fe-70-200-mm-f2-8-gm-oss",
      "text": "Sony FE 70-200 mm F2.8 GM OSS, "
  },
  {
      "slug": "sapphire-graphics-card-sapphire-sapphire-rx-7900-xt-nitro-gaming-oc",
      "text": "Sapphire RX 7900 XT Nitro+ Gaming OC Graphics Card, Memory - 20GB (GDDR6X), Dimensions - 13.5 x 32 x 7.1 cm • 3.6 kg, Boost Clock Speed - 2500 MHz, "
  },
  {
      "slug": "logitech-driving-force-5311",
      "text": "Logitech G920 Driving Force Racing Steering Wheel, Connections - USB, Floor pedal - pressure-sensitive brake and clutch, Fixing clips - Strong mounting brackets for superior stability, Steering Range - 900°, Product dimensions - 10.9 x 10.2 x 10.6 cm; 5.4 kilograms, Signal Transmission - Wired, Supported Platforms - Xbox Series X|S, Xbox One/PC/Mac, "
  },
  {
      "slug": "hp-17-cp0276ng-r7-5700u-16gb-512gb",
      "text": "HP 17-CP0276NG Laptop - AMD Ryzen™ 7 5700U - 16GB - 512GB - AMD Radeon™ Graphics, Model - A00WDEA#ABD, Memory - 16GB, Display - 17.3 inches (1920 x 1080), Storage - 512GB, Graphics - AMD Radeon™ Graphics, Processor - AMD Ryzen™ 7 5700U, Dimensions - 35.6 x 24.2 x 1.49 cm • 1.6 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "irobot-vacuum-cleaner-irobot-irobot-roomba-combo",
      "text": "iRobot Roomba Combo Vacuum & Mop Robot Cleaner, Features - Connected via WiFi with several cleaning modes - Powerful vacuuming - Daily mopping - Personalized schedules and cleaning settings - Compatibility with voice assistants - Navigates purposefully and logically – Compatible with Alexa and Google Assistant, Chip Logo - iRobot Manufacturer of the Year 2023 - Readers' Choice March 2023 vacuum cleaner - chip.de/CD164400, Dimensions - 35.1 x 35.6 x 8.2 cm • 3.2 kg, Application - Allergies, hardwood floors, pets, parquet floors, App-controlled - Yes, Max. Running Time - 100 min, Max. volume of the water tank - 0.3 L, Max. Volume of the Dust Container - 0.45 L, "
  },
  {
      "slug": "jbl-sound-system-jbl-bar-9-1",
      "text": "JBL Bar 9.1, Delivery - Soundbar, wireless subwoofer, remote control with battery, power supply, power cord (number and type vary by region), HDMI cable, AUX cable, bracket for wall mounting, quick start guide, safety data sheet, Bluetooth - Yes, Components - 9.1 speaker system, Connections - 1x power, 1x USB (service), 1x Ethernet, 1x optical, 1x HDMI input, 1x HDMI ARC (4K, Dolby Vision, HDR), Total Power - 820 Watt, Product type - Home theater system, Special features - 13 speakers (9 in the bar, 2 per detachable speaker), Number of channels - 9.1, Internet connection - No, Signal transmission - Wireless, Wired, "
  },
  {
      "slug": "jbl-bluetooth-speaker-jbl-partybox-110-party-bluetooth-speaker",
      "text": "JBL Partybox 110 Party Speaker, Type - Party Bluetooth Speaker, Model - Partybox 110, Battery - Up to 12h battery, Chassis - , Amplifier - , Frequency - 45-20,000 Hz, Durability - IPX4 splashproof, Connections - USB, 2 x RCA output, Connectivity - Bluetooth 5.1, Operating mode - Battery-powered, Special features - Incredible JBL Sound with a Dazzling Light Show, With a telescopic handle and built-in smooth-glide wheels, you can take the party from your patio to the park, Connect compatible speakers wirelessly via TWS for really loud sound, the control panel on JBL PartyBox 110 has convenient built-in backlighting that activates in the dark.Dual mic and guitar inputs turn any party into a karaoke party., Intelligent functions - App controllable, "
  },
  {
      "slug": "lenovo-thinkpad-e16-g1-i5-16gb-512ssd-w11p-eng",
      "text": "Lenovo ThinkPad E16 G1 Laptop - Intel® Core™ i5-1335U - 16GB - 512GB - Intel® Iris Xe, Model - 21JN00ALMH, Memory - 16GB, Display - 16 inches (1920 x 1200), -, Storage - 512GB, Graphics - Intel® Iris XE, Processor - Intel® Core™ i5-1335U, Dimensions - 36 x 27.9 x 2.8 cm • 2.6 kg, Operating System - Windows® 11 Pro, Keyboard Language - English, "
  },
  {
      "slug": "thrustmaster-t248-x-racing-steering-wheel",
      "text": "Thrustmaster T248X Racing Steering Wheel, Depth - 300 mm, Width - 280 mm, Height - 280 mm, Weight - 2.7 kg, Device type - Steering wheel + Pedals, Power source - AC, Clamps included - Yes, Built-in display - Yes, Device interface - USB, Reflex vibration - Yes, Power supply included - Yes, Connectivity technology - Wired, Gaming platforms supported - PC, Xbox One, Xbox One S, Xbox One X, Xbox Series S, Xbox Series X, "
  },
  {
      "slug": "acer-nitro-series-i5-12400f-16-512-3060ti",
      "text": "Acer Nitro 5 Gaming Desktop - Intel® Core™ i5-12400F - 16GB - 512GB SSD - NVIDIA® GeForce® RTX 3060ti, Model - DG.E35EG.00B, Memory - 16GB, Storage - 512GB SSD, Graphics - NVIDIA® GeForce® RTX 3060ti, Processor - Intel® Core™ i5-12400F, Dimensions - 17.5 x 38.6 x 39.2 cm • 8.25 kg, Operating System - Windows® 11 Home, Keyboard Language - , "
  },
  {
      "slug": "fujifilm-x-t5-xf-18-55mm-f-2-8-4-0-r-lm-ois-silver",
      "text": "Fujifilm X-T5 Camera Kit with XF 18-55mm f/2.8-4 R LM OIS Lens, ISO - 80 to 51,200, Lens - Fujifilm XF 18-55mm f/2,8-4,0 R LM OIS, Video - H.264/H.265/MP4/MPEG-4 4:2:2 10-Bit, 6240 x 3140 at 23.98/24.00/25/29.97 fps [50 to 360 Mb/s], DCI 4K (4096 x 2160) at 23.98/24.00/25/29.97/50/59.94 fps [50 to 360 Mb/s], Storage - Dual SD Card slot, USH-II (V90 or faster recommended), Mount type - Fujifilm X-mount, Screen Type - 3\" Tilting 1,084,000-Dot Touchscreen LCD, View Finder - 3,690,00-Dot OLED EVF, Connectivity - 1x Micro-HDMI output / 1x3.5mm TRS Stereo microphone input, 1x3.5mm TRS headphone output / USB-C interface / WiFi / Bluetooth, Image Sensor - 40MP APS-C X-Trans CMOS 5 HR BSI sensor, Photo format - HEIF, JPEG, Raw, TIFF, Shutter Speed - 30' -  1/8000, Stabilization - 5-Axis Sensor-Shift, Max Resolution - 7728 x 5152, Auto-Focus Points - 425-point Phase detect AF / Face/eye detect, Subject selection (Animal, bird, automobile, motorcycle&bike, airplane, train), Scope of delivery - Fujifilm X-T5 Mirrorless Camera, 18-55mm lens, NP-W235S Battery, AC-4VJ power Adapter, Shoulder strap, Body cap, Electronic Shutter - Up to 20 fps at 40.2 MP for up to 168 Frames (JPEG) / 37 Frames (Raw), Mechanical Shutter - Up to 15 fps at 40.2 MP for up to 119 Frames (JPEG) / 19 Frames (Raw), "
  },
  {
      "slug": "valve-console-valve-steam-deck-512gb",
      "text": "Valve Steam Deck 512GB Gaming Console, Depth - 49 mm, Width - 298 mm, Height - 117 mm, Weight - 669 g, Display - LCD, Platform - Steam Deck, Gyroscope - Yes, Aspect ratio - 16:10, Display diagonal - 17.8 cm (7\"), Battery life (max) - 8 h, USB Power Delivery - Yes, Processor frequency - 2400 MHz, Video game included - No, Maximum refresh rate - 60 Hz, Number of microphones - 2, Processor performance - 448 GFLOPS, Headphone connectivity - 3.5 mm, Compatible memory cards - MicroSD (TransFlash), MicroSDHC, MicroSDXC, Built-in memory capacity - 512 GB, Processor boost frequency - 3.5 GHz, Operating system installed - SteamOS, Graphics processor performance - 1.6 TFLOPS, Graphics processor architecture - AMD RDNA 2, "
  },
  {
      "slug": "fujifilm-x100v-compact-camera",
      "text": "Fujifilm X100V Compact Camera, ISO - 160-12800 Auto (expands to 80-51200), Mount Type - In-built, Resolution - 26.1MP, Screen Type - 3 inch Touchscreen, Connectivity - WLAN, BLUETOOTH, Image Sensor - BSI-CMOS (X-Trans color filter array), Camera Format - Compact Camera, Shutter Speed - 30 - 1/4000 sec, Auto-Focus Points - 425, Scope of Delivery - Fujifilm X100V, lithium-ion battery NP-W126S, shoulder strap, lens cap, strap clip made of metal, tool for attaching the clips, protective cover, USB cable, hot shoe cover, instruction manual, Dimensions & Weight - 12.8 x 7.5 x 5.3 cm • 0.43 kg, "
  },
  {
      "slug": "irobot-vacuum-cleaner-irobot-roomba-j7-j7158",
      "text": "iRobot Roomba J7 (J7158) Robot Vacuum, CONTROL - Via iRobot Home App and voice control (Amazon Alexa and Google Assistant), Chip Logo - iRobot Manufacturer of the Year 2023 - Readers' Choice March 2023 vacuum cleaner - chip.de/CD164400, DIMENSIONS - 33.8 x 33.9 x 8.7 • 3.4 kg, Running time - Up to 75 min, OPERATION AREAS - Parquet floors, carpets, stone floor, laminates, hardwood floors, Special Features - Genius Technology and PrecisionVision Navigation: recognition and avoidance of common objects such as cords and pet waste • iRobot Genius: Personalized cleaning experience based on preferences, habits and seasons • Imprint® coupling technology: possible connection between the Roomba® j7 vacuum robot and Braava jet® m6 • Dirt Detect ™ technology that focuses on the dirty spots like high traffic areas of the house • Dual Multi-Surface Rubber Brushes, VOLUME OF THE DUST CONTAINER - 0.4 L, "
  },
  {
      "slug": "xiaomi-vacuum-cleaner-xiaomi-g10-plus-eu",
      "text": "Xiaomi G10 Plus Vacuum Cleaner , Runtime - 65 min, Brush tool - Yes, Crevice tool - Yes, Power source - Battery, Cleaning type - Dry&wet, Suction power - 150 AW, Hard floor brush - Yes, Dust container type - Bagless, Mini motorized brush - Yes, "
  },
  {
      "slug": "shark-iw3611-detect-pro-cordless-vacuum-cleaner",
      "text": "Shark IW3611 Detect Pro Cordless Vacuum Cleaner, Dimensions - 264 x 1092 x 353 mm / 2.78 kg, Charging time - 4.5 h, suction power - 240 W, Special features - DirtDetect, EdgeDetect, FloorDetect, LightDetect, Anti-Hair Wrap technology removes hair from the brush roll while cleaning - perfect for households with pets, LED display shows battery status, dirt detection and mode type in real time, Scope of delivery - 1 main device, 1 crevice nozzle 20 cm, 1 lithium-ion battery, 1 AED 2 L incl. charging station, Maximum operating time - 60 mins, Maximum volume of the dust container - 0.42 L, "
  },
  {
      "slug": "sony-over-ear-headphones-sony-wh-1000xm4",
      "text": "Sony WH-1000 XM4 Noise-cancelling Over-ear Bluetooth Headphones, Type - Over-ear headphones, Codecs - LDAC, SBC, AAC, DSEE Extreme, Battery - Up to 30h, Sensors - Speak-to-Chat (music pauses automatically when you speak and resumes after), wear detection, Connections - USB-C, 3.5 mm male connector, Noise canceling - ANC + PNC, Special features - Excellent noise cancelling, high quality sound, multi-connect, high resolution sound, fast charging (5 hours playback after 10 mins of charging), up to 30h battery life., Wireless charging - No, Integrated microphone - 5x microphone, Intelligent functions - Voice prompts, voice & intuitive controls, Water/splash resistant - N/A, Frequency response, Sound pressure level & Impedance - 20-2000Hz or 4-40000Hz (with cable) / 98dB / 46 Ohms, "
  },
  {
      "slug": "jbl-basspro-go-portable-bluetooth-party-speaker",
      "text": "JBL BASSPRO GO Portable Bluetooth Party Speaker, Type - Portable Bluetooth Party Speaker, Model - BASSPRO GO, Power - 100 W (max performance 200 W), Battery - Up to 8h battery, Chassis - -, Frequency - 40 Hz to 20 kHz at -3 dB, Durability - IPX5 water protection, Connections - , Connectivity - Bluetooth, Technologies - , Operating mode - Battery-powered, Special features - -, "
  },
  {
      "slug": "yamaha-dtx402k-digital-drum-kit-2019",
      "text": "YAMAHA DTX402K Digital Drum Kit, "
  },
  {
      "slug": "asus-rog-g700tf-07265f328w-u7-265f-32gb-1tb-rtx-5070",
      "text": "ASUS ASUS ROG G700TF-07265F328W Gaming Desktop - Intel® Core™ Ultra 7-265F - 32GB - 1TB SSD - NVIDIA® GeForce® RTX™ 5070, Model - 90PF0561-M01HN0, Memory - 32GB, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5070, Processor - Intel® Core™ Ultra 7-265F, Dimensions - 50.9 x 24 x 47.9 cm • 18 kg, Operating System - Windows® 11 Pro, "
  },
  {
      "slug": "apple-macbook-air-15-m3-8cpu-8gb-256gb-10gpu-eng",
      "text": "MacBook Air 15\" - Apple M3 Chip 8GB Memory 256GB SSD - Integrated 10-core GPU, Model - MRYM3F/A, Memory - 8GB, Display - 15.3 inches (2880 x 1864), Storage - 256GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M3, Dimensions - 34.04 x 23.76 x 1.15 cm • 1.51 kg, Operating System - macOS, Keyboard Language - English, "
  },
  {
      "slug": "denon-dj-sc-live-4-dj-studio-equipment",
      "text": "Denon Dj SC Live 4 DJ Controller, Type - DJ Controller, Model - SC Live 4, Connections - 2 x 6.3mm jack / 3.5mm mini jack headphones outputs, 2 RCA main out, 2 XLR male Main Outs, 2 RCA aux in, XLR mic input, 1/4inch mono jack Mic input, SD Card input, USB-B input, 2 USB-A inputs, No of channels - 4-channel, Operating mode - built-in WiFi, What's included - Power supply unit, USB cable, display cleaning cloth, Special features - The SC LIVE 4's integration with Amazon Music Unlimited and other popular streaming services gives DJs instant access to over 100 million CD quality songs across all musical genres. With built-in Wi-Fi and lightning-fast onboard song analysis,the SC LIVE 4 is powered by Engine DJ, the same leading standalone DJ operating system that fuels laptop-free performances. The powerful, built-in speakers offer the perfect sound solution for livestreaming, practicing, content creation, and personal monitoring during live shows. The dedicated volume knob and on/off switch offers full control to meet the needs of any gig., "
  },
  {
      "slug": "hp-16-r0077ng",
      "text": "HP Victus 16-r0077ng Gaming Laptop - Intel® Core™ i7-13700H - 16GB - 1TB SSD - NVIDIA® GeForce® RTX 4070, Model - 84R94EA#ABD, Memory - 16GB, Display - 16.1 inches (1920 x 1080), 144Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX 4070, Processor - Intel® Core™ i7-13700H, Dimensions - 40 x 25.7 x 2.06 cm • 2.19 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "philips-ep3329-70-coffee-machine",
      "text": "Philips EP3329/70 Coffee Machine, Dimensions - 433 x 246 x 371 mm / 7.5 kg, pump pressure - 15 bar, Special features - double cup, removable brewing group, aroma setting before brewing, height-adjustable coffee spout, 3 temperature settings, 12 grinding levels, milk container, milk frothing nozzle, app controllable, Water tank capacity - 1.8L​, Bean container capacity - 275g​, Milk container capacity - 0.26 L, "
  },
  {
      "slug": "shark-hd352-speedstyle-hair-styler-hair-dryer",
      "text": "Shark HD352 SpeedStyle Hair Styler & Hair Dryer, Hair type - For all hair types, Cold setting - Yes, Maximum power - 1700 W, Special features - Ionization, hanging loop, Scope of delivery - SpeedStyle, concentrator, diffuser, RapidGloss Finishing Tool, QuickSmooth Brush, Express Touchup Brush, Travel Bag (neoprene), Temperature levels - 3 (Low, Medium, High), "
  },
  {
      "slug": "dyson-vacuum-cleaner-dyson-cyclone-v10-extra-2-generation",
      "text": "Dyson Cyclone V10 Extra (2nd Generation), Depth - 256 mm, Width - 250 mm, Height - 1249 mm, Weight - 2.68 kg, Runtime - 60 min, Crevice tool - Yes, Power source - Battery, Charging base - Yes, Charging time - 3.5 h, Cleaning type - Dry, Suction power - 150 AW, Wall mountable - Yes, Motorized brush - Yes, Cleaning surfaces - Carpet, Hard floor, Dirt capacity dry - 0.76 L, Number of settings - 3, Mini motorized brush - Yes, Multifunctional brush - Yes, Easy to empty container - Yes, Suitable for all types of surface - Yes, "
  },
  {
      "slug": "razer-blade-18-i9-32gb-2tb-rtx-4090",
      "text": "Razer Blade 18 Gaming Laptop - Intel® Core™ i9-13950HX - 32GB - 2TB SSD - NVIDIA® GeForce® RTX 4090, Model - RZ09-0484UGH3-R3G1, Memory - 32GB, Display - 18 inches (2560 x 1600), 240Hz, Storage - 2TB SSD, Graphics - NVIDIA® GeForce® RTX 4090, Processor - Intel® Core™ i9-13950HX, Dimensions - 39.9796 x 27.5336 x 2.1844 cm • 3.19727891156463 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "ecovacs-vacuum-cleaner-ecovacs-deebot-t9-aivi",
      "text": "Ecovacs Deebot T9 AIVI Vacuum & Mop Robot Cleaner, Dimensions - 35.3 x 35.3 x 9.36 cm • 3.88 kg, Filter type - Fine dust filter, Special features - Object recognition and avoidance • Cleaning plans • AeroForce® multi-surface rubber brushes • TrueMapping 2.0 • vibrating mopping plate (OZMO ™ Pro 2.0) • Two-way communication system • ECOVACS HOME app • Automatic carpet detection • Compatibility with Amazon Alexa and Google Assistant, Maximum suction power - 3000 Pa, Maximum operating time - 150 min, Maximum volume of the water tank - 0.18 L, Maximum volume of the dust container - 0.3 L, "
  },
  {
      "slug": "irobot-vacuum-cleaner-irobot-roomba-i8178",
      "text": "iRobot Roomba i8178 Vacuum & Mop Robot Cleaner, Capacity - 0.57l (0.21l wet, 0.36l dry), Chip Logo - iRobot Manufacturer of the Year 2023 - Readers' Choice March 2023 vacuum cleaner - chip.de/CD164400, Equipment - Programmable cleaning times, 2x rubber brushes, side brush, app control, voice control (Amazon Alexa, Google Assistant, Siri), Dimensions - 93x342mm / 3.38kg, Accessories - Charging station, drip tray, exchangeable collection container, 1 replacement high-performance filter, 1 additional corner and edge brush, 2 microfibre mopping pads, power cord, Charging time - 3h, Cleaning modes - 4 levels, dirt sensor, Operating time - 75 minutes, Charging system - Automatic, "
  },
  {
      "slug": "apple-smartphone-iphone-15-6gb-256gb",
      "text": "Apple iPhone 15 - 256GB, Memory - 6GB, Battery - 3300 mAh, Display - 6.1-inch OLED Super Retina XDR (2556 x 1179), Storage - 256GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 17, "
  },
  {
      "slug": "hp-reverb-g2-cable-v2",
      "text": "HP Reverb G2 Cable V2, Connector 1 - USB B, Connector 2 - USB A/Micro-USB B, Cable length - 6 m, Connector 1 gender - Male, Connector 2 gender - Male, "
  },
  {
      "slug": "apple-laptop-apple-macbook-pro-late-2021-14-liquid-retina-xdr-promotion-120hz-apple-m1-pro-16gb-512gb-integrated-14-core-gpu",
      "text": "MacBook Pro 14\" Apple M1 Pro chip - 16GB Memory 512GB SSD Integrated 14-core GPU, Model - MKGP3D/A, Memory - 16GB, Display - 14 inches (3024 x 1964 ), 120Hz, Storage - 512GB, Graphics - Integrated 14-core GPU, Processor - Apple M1 Pro 8-core, Dimensions - 31.26 x 22.12 x 1.55 cm • 1.6 kg, Operating System - macOS Monterey, Keyboard Language - German, "
  },
  {
      "slug": "lenovo-thinkcentre-m90a-gen-3",
      "text": "Lenovo ThinkCentre M90a Gen 3 Al All-in-One - Intel® Core™ i5-12500H - 16GB - 512GB SSD, Model - 11VF008HGE, Memory - 64GB, Display - 23.8 inches (1920x1080), 60Hz, Storage - 512GB SSD, Graphics - Intel® UHD Graphics (iGPU), Processor - Intel® Core™ i5-12500H, Dimensions - 53.96 x 21.73 x 39.46 cm • 8.24 kg, Operating System - Windows® 11 Pro (64 Bit), Keyboard Language - German, "
  },
  {
      "slug": "samsung-smartwatch-samsung-galaxy-watch6-classic-stainless-steel-case-and-sport-band-47mm",
      "text": "Samsung Galaxy Watch6 Classic Smartwatch, Stainless steel case, 47mm, Type - Smartwatch, Sensors - Accelerometer,Barometer,Bioelectrical Impedance Analysis Sensor,Electrical Heart Sensor,Gyro Sensor,Geomagnetic Sensor,Infrared Temperature Sensor,Light Sensor,Optical Heart Rate Sensor, Features - Samsung + Google Pay, Sleep Coach & Analysis, Advanced Body Composition Analysis, Women's Health (Track Fertility Windows, Ovulation Cycles and Periods), Google Apps + OS, Strong Battery Performance & Fast Wireless Charging, Customisation of the workout routine, Analyze your personal heart rate zone., Battery Life - Up to 40 hours, Connectivity - Bluetooth® 5.3, WLAN 2,4 GHz & 5 GHz, Compatibility - Android, Build Material - Stainless steel case and Sport band, Operating System - Wear OS, Water/Dust proof - 5ATM / IP68 / MIL-STD-810H, Activity Tracking - Heart Rate Monitor, ECG, Continuous Sp02, Blood Pressure, Bioelictrical impedance analysis (Body composition), Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "sigma-24-70mm-f-2-8-dg-dn-art-sony-fe-mount",
      "text": "Sigma 24-70mm f/2.8 DG DN ART Sony FE-mount, "
  },
  {
      "slug": "apple-tablet-12-9-ipad-pro-2022-wi-fi-8gb-256gb",
      "text": "Apple 12.9\" iPad Pro (2022) - Wi-Fi - 256GB, Memory - 8GB, Battery - 40.88 Wh, Display - 12.9-inch Liquid Retina XDR (2732 x 2048), Storage - 256GB, Processor - Apple M2, Dimensions - 22.7 x 29.3 x 0.51 cm (1.3kg), Rear Camera - 12MP Wide + 10MP Ultra-wide + LiDAR, Connectivity - Wi-Fi, Front Camera - 12MP, Operating System - iPadOS 16, "
  },
  {
      "slug": "canon-eos-r100-rf-s-18-45mm-is-stm-rf-s-55-210-is-stm",
      "text": "Canon EOS R100 Camera Kit with RF-S 18-45mm f/4.5-6.3 IS STM + RF-S 55-210mm f/5-7.1 IS STM Lens, Video - 4K 4K (3840 x 2160 pixels), Sensor - 24MP APS-C CMOS sensor, Weight - 356g body, Storage - Single SD card Slot, Viewfinder - Electronic EVF 2.36m-dot resolution, Connectivity - WLAN, Bluetooth, App control, Scope of Delivery - Canon R100 Camera, Canon LP-E17 Battery, Canon RF-S 18-45mm lens, Canon RF-S 55-210mm lens, Canon Neck strap, Camera and lens cover, "
  },
  {
      "slug": "razer-blade-16-2025-ryzenai9-32gb-2tb-rtx-5090",
      "text": "Razer Blade 16 (2025) Gaming Laptop - AMD Ryzen™ 9 HX370 - 32GB - 2TB SSD - NVIDIA® GeForce® RTX™ 5090, Model - RZ09-05289GN4-R3G1, Memory - 32GB, Display - 16 inches (2560 x 1600), 240Hz, Storage - 2TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5090, Processor - AMD Ryzen™ 9 HX370, Dimensions - 24.4 x 22 x 35.5 cm • 2.45 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "samsung-smartphone-samsung-s23-ultra-12gb-512gb",
      "text": "Samsung Galaxy S23 Ultra Smartphone - 512GB - Dual SIM, Memory - 12GB, Battery - 5000mAh, Display - 6.8-inch Dynamic AMOLED 2X (1440 x 3088), Storage - 512GB, Processor - Qualcomm® Snapdragon 8 Gen 2, Dimensions - 7.81 x 16.34 x 0.89 cm (0.233kg), Rear Camera - 200MP (Wide) + 12MP (Ultra Wide) + 10MP (Periscope Telephoto) +10MP (Telephoto), Connectivity - 5G, Front Camera - 12MP, Operating System - Android 13, "
  },
  {
      "slug": "asus-graphics-card-asus-tuf-gaming-geforce-rtx-4090-oc",
      "text": "Asus TUF Gaming GeForce RTX 4090 OC Graphics Card, Memory - 24GB (GDDR6X), Dimensions - 34.82 x 1.5 x 0.726 cm • 2.34 kg, Boost Clock Speed - 2595 MHz, "
  },
  {
      "slug": "canon-rf-70-200mm-f-4-0-l-is-usm-lens",
      "text": "Canon RF 70-200mm f/4.0 L IS USM Lens, "
  },
  {
      "slug": "samsung-hw-q995gc-zg",
      "text": "Samsung HW-Q995GC/ZG, "
  },
  {
      "slug": "dreame-z10-station-cordless-vacuum-cleaner",
      "text": "Dreame Z10 Station Cordless Vacuum Cleaner, Dimensions - 1115 x 321 x 282 mm / 9.3 kg, Charging time - 3.5h, Suction power - 20000 pa / 400 W, Operating time - 56 min, Special features - The wireless operation allows maximum flexibility without annoying cables, while the suction and charging station ensure convenient charging and automatic emptying of dust. The cyclone separation technology ensures powerful and constant suction power by effectively separating dust and dirt from the air. The integrated HEPA filter ensures that even the smallest particles that can cause allergies are reliably retained, thereby cleaning the air while vacuuming. The brush roller of the attachment is equipped with innovative LED lighting, which ensures optimal visibility even in dark corners., Scope of delivery - Suction station (2.5l), extension tube, dust bag, mini brush, combination nozzle, dust brush, multi-surface brush, universal brush roll, Dust container capacity - 500 ml, "
  },
  {
      "slug": "apple-ipad-mini-2024-wi-fi-128gb",
      "text": "Apple iPad mini (2024) - WIFI - iOS - 128GB, Memory - 8GB, Battery - 19.3 Wh, Display - 8.3-inch Liquid Retina (2266 x 1488), Storage - 128GB, Processor - Apple A17 Pro Chip, Dimensions - 13.4 x 19.5 x 0.63 cm (0.29kg), Rear Camera - 12MP, Connectivity - WIFI, Front Camera - 12MP, Operating System - iOS, "
  },
  {
      "slug": "hp-omen-35l-gt16-0064ng-ultra-7-265f-32gb-1tb-rtx-5070",
      "text": "HP OMEN 35L GT16-0064ng Gaming Desktop - Intel® Core™ Ultra 7-265F - 32GB - 1TB SSD - NVIDIA® GeForce® RTX™ 5070, EAN - 0198990795409, NPU - Intel AI Boost (13 TOPs), Model - BA2U0EA#ABD, Memory - 32GB, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5070, Processor - Intel® Core™ Ultra 7-265F, Dimensions - 21 x 40.8 x 41 cm • 14.5 kg, Operating System - Windows® 11 Home, "
  },
  {
      "slug": "microsoft-surface-pro-11th-copilot-pc-lcd-x-plus-16gb-256gb-ssd-w-o-pa",
      "text": "Microsoft Surface Pro, Copilot+ PC, 13” Touchscreen, Snapdragon® X Plus, 16GB RAM, 256GB SSD, 11. Edition (only Tablet, without adaptor), Model - EP2-08340, Memory - 16GB, Display - 13 inches (2880 x 1920), 120Hz, Storage - 256GB SSD, Graphics - Qualcomm® Adreno™ GPU, Dimensions - 20.9 x 28.7 x 0.93 cm • 0.9 kg, Power Adaptor - Not included, Operating System - Windows® 11 Home, Keyboard Language - Keyboard not included, "
  },
  {
      "slug": "hp-omnibook-ultra-flip-14-fh0091ng-ultra-9-288v-32gb-1tb",
      "text": "HP OmniBook Ultra Flip 14-fh0091ng Laptop - Intel® Core™ Ultra 9-288V - 32GB - 1TB SSD - Intel® Intel Arc Graphics, EAN - 198828722881, Model - B40JXEA#ABD, Memory - 32GB, Display - 14 inches (2880 x 1800 ), 120Hz, Storage - 1TB SSD, Graphics - Intel® Intel Arc Graphics, Processor - Intel® Core™ Ultra 9-288V, Dimensions - 31.3 x 21.6 x 14.9 cm • 2.5 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "samsung-smartphone-galaxy-a54-8gb-128gb",
      "text": "Samsung Galaxy A54 Smartphone - 128GB - Dual SIM, Memory - 8GB, Battery - 5000mAh, Display - 6.4-inch Super AMOLED (1080 x 2400), Storage - 128GB, Processor - Exynos 1380, Dimensions - 15.8 x 7.7 x 0.8 mm (0.202kg), Rear Camera - 50MP + 12MP +5MP, Connectivity - 5G, Front Camera - 32MP, Operating System - Android 13, "
  },
  {
      "slug": "sony-lens-sel35f18-ae-35-mm-f-1-8-oss-fixed-focal-length",
      "text": "Sony AF 35mm f/1,8 OSS, "
  },
  {
      "slug": "hp-victus-16-s1076ng-r7-8840h-16gb-1tb-rtx-4060",
      "text": "HP Victus 16-s1076ng Gaming Laptop - AMD Ryzen™ 7 8840H - 16GB - 1TB - NVIDIA® GeForce® RTX™ 4060, EAN - 0198122513888, Model - 9Z332EA#ABD, Memory - 16GB (2x8GB DDR5-SDRAM), Webcam - Full HD, Display - 16 inches (1920 x 1080), 165Hz, Full HD, IPS-Panel,, Storage - 2TB, Graphics - NVIDIA® GeForce® RTX™ 4060, Processor - AMD Ryzen™ 7 8840H, Dimensions - 37 x 26 x 2.4 cm • 2.3 kg, Connectivity - USB 3.2 Gen (3.1 Gen 1) Type A 3x, Type C 1x, Ethernet LAN ports 1x, HDMI 1x, Operating System - Windows® 11 Home, Keyboard Language - German, Sustainable technologies and materials - Recycled plastic, which would otherwise end up in the sea, in frames; keycaps and scissors on the keyboard contain recycled plastic, Rechargeable battery/battery operating time - 8.75 h, fast charging time (50%) in 30 min, "
  },
  {
      "slug": "asus-tuf-a17-r7-7735hs-16gb-1tb-rtx-4060",
      "text": "Asus TUF A17 Gaming Laptop - AMD Ryzen™ 7 7735HS - 16GB - 1TB SSD - NVIDIA® GeForce® RTX 4060, Model - FA707NV-HX013W, Memory - 16GB, Display - 17.3 inches (1920 x 1080), 144Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX 4060, Processor - AMD Ryzen™ 7 7735HS, Dimensions - 39.5 x 26.4 x 2.29 cm • 2.6 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "xiaomi-heater-xiaomi-mi-smart-space-heater-s",
      "text": "Xiaomi Mi Smart Space Heater S, Power - 2200W (230V), Dimensions - 780 x 526 x 216mm / 5.7kg, Special features - Overheating protection, timer 12h, IPX4, app control, automatic switch-off (tilt protection), voice control (Amazon Alexa, Google Assistant), Temperature control - 6 levels, Type of installation - Standing device, "
  },
  {
      "slug": "dyson-air-purifier-dyson-tp09-purifier",
      "text": "Dyson TP09 Purifier Cool Formaldehyde, Features - Night mode, remote control, app control, filter saturation indicator, LCD, room air monitoring (dust, fine dust, humidity, temperature, VOC), automatic switch-on, voice control, Dimensions - 220 x 1050 x 220mm / 4.65kg, Filtration - HEPA filter (H13, 99.95%), Activated carbon filter, Cold catalyst filter, Noise level - 61.5dB(A), Power regulation - 10 levels (automatic), "
  },
  {
      "slug": "microsoft-surface-pro-12-copilot-pc-12-lcd-x-plus-16gb-256gb-ssd-no-p-a",
      "text": "Microsoft Surface Pro 12\", Copilot+ PC, 12” LCD | X Plus 16GB Memory 256GB SSD (Device Only), Ports - 2 x USB-C®, Wi-Fi - Yes, Weight - 685 g, Variant - 16 GB RAM | 256 GB SSD | Snapdragon X Plus, RAM size - 16 GB, Speakers - Yes, Bluetooth - 5.4, SSD Cache - 256 GB, Screen type - LCD, Touchscreen - Yes, AI assistant - Microsoft Copilot+, Aspect ratio - 3:2, Battery type - Lithium Ion, Front camera - Yes, Product type - Tablet Convertible, Graphics card - Adreno™ Onboard Graphics, Clock frequency - 3.2 GHz, Processor brand - Qualcomm, Processor model - Snapdragon® X Plus, Screen diagonal - 30.48 cm / 12 inches, Screen features - PixelSense, Wi-Fi standards - IEEE 802.11 a/b/g/n/ac/ax/be (802.11be), Battery capacity - 37.45 Wh, Operating system - Windows 11 Home, Processor number - X1P-42-100, Storage capacity - 256 GB, Integrated webcam - Yes, Scope of delivery - Tablet, USB-C Cable, Quick start guide (Keyboard, Pen and Power Adaptor not included), Screen resolution - 2,196 x 1,464 pixels, Charging via USB port - Yes, Integrated microphone - Yes, Dimensions (W x H x D) - 274.4 mm x 7.8 mm x 189.8 mm, Graphics chipset manufacturer - Qualcomm, "
  },
  {
      "slug": "canon-rf-50mm-f-1-8-stm-lens",
      "text": "Canon RF 50mm f/1.8 STM Lens, Focus - Autofocus, Mount - Canon RF mount, Weight - 5.6 oz / 160 g, Lens Type - Full Frame, Dimensions - 2.7 x 1.6\" / 69 x 40 mm, Filter size - 77mm, Image Stabilizer - No, Scope of Delivery - RF 50mm F1.8 lens, front and rear cover, Minimum focus distance - 11.8\" / 30 cm, "
  },
  {
      "slug": "yamaha-musical-instrument-yamaha-psr-e273-portable-digital-piano",
      "text": "Yamaha PSR-E273 61-Key Portable Keyboard, Type - Portable Keyboard, Model - PSR-E273 61-Key, Connections - DC IN, Headphones IN (Standard stereo phone jack), Sustain Pedal IN, AUX IN (Stereo mini jack), USB to Host, Connectivity - -, Key features - With 61 keys, the PSR-E273 is a good companion for beginners and is equipped with a multitude of sounds and functions. It is the ideal first keyboard for budding musicians who want to start making music. Direct user interface, small and light design, Smart chord, quiz mode, learning functions, recording., Operating mode - AC Adaptor (PA-130, PA-3C, or an equivalent recommended by Yamaha) or batteries (Six “AA” size alkaline (LR6), manganese (R6) or Ni-MH rechargeable (HR6) batteries), Included Accessories - Music rest, Amplifiers & Speakers - 2 x 2.5 W, 2 x 12 cm drivers, "
  },
  {
      "slug": "acer-predator-3000-p03-655-i7-14700f-16gb-512gb-rtx-4070",
      "text": "Acer Predator 3000 P03-655 Gaming Desktop - Intel® Core™ i7-14700F - 16GB - 512GB SSD - NVIDIA® GeForce® RTX 4070, Model - DG.E45EG.004, Memory - 16GB, Storage - 512GB SSD, Graphics - NVIDIA® GeForce® RTX 4070, Processor - Intel® Core™ i7-14700F, Dimensions - 17.5 x 38.5 x 37.7 cm • 9.6 kg, Operating System - Windows® 11 Home, Keyboard Language - , "
  },
  {
      "slug": "samsung-monitor-samsung-odyssey-neo-g8-g85nb-32-ls32bg850npxen",
      "text": "Samsung - 32\" Odyssey Neo G8 G85NB  LS32BG850NPXEN, Model - LS32BG850NPXEN, Display - VA, QLED 32 inches (3840 x 2160), 240Hz, Dimensions - 71.3 x 60.6 x 31.1 cm • 8.9 kg, Connectivity - 2x HDMI 2.1, 1x DisplayPort 1.4, 2x USB-A 3.0, 1x USB-B 3.0, 1x 3.5mm, Response Time - 1ms, High Dynamic Range (HDR) - Yes, "
  },
  {
      "slug": "acer-nitro-70-n70-130-r7-7700-32gb-1tb-4060",
      "text": "Acer Nitro 70 (N70-130) Gaming Desktop - AMD Ryzen™ 7 7700 - 32GB - 1TB SSD - NVIDIA® GeForce® RTX™ 4060, EAN - 4711121959783, Model - DG.E3TEG.002, Memory - 32 GB DDR5 RAM (2 x 16 GB), up to 32 GB dual-channel DDR5 4800 MHz, Hard disk - 1 TB PCIe SSD, Processor - AMD Ryzen™ 7 7700, Dimensions - 32.9 x 66.5 x 58.7 cm - 16.8 kg, Graphics card - NVIDIA® GeForce® RTX™ 4060 (8 GB GDDR6X), Operating system - Windows 11 Home (64 bit), "
  },
  {
      "slug": "msi-meg-trident-x2-14nuf7-280at",
      "text": "MSI MEG Trident X2 14NUF7-280AT Gaming Desktop - Intel® Core™ i7-14700KF - 32GB - 1TB SSD - MSI GeForce® RTX 4070 Ti, Model - 00B92221-280, Memory - 32GB, Storage - 1TB SSD, Graphics - MSI GeForce® RTX 4070 Ti, Processor - Intel® Core™ i7-14700KF, Dimensions - 21.5 x 42.96 x 48.96 cm • 14.06 kg, Operating System - Windows® 11 Home, Keyboard Language - , "
  },
  {
      "slug": "msi-console-msi-claw-a1m-036",
      "text": "MSI Claw A1M-036 Handheld Console, WLAN - Wi-Fi 7 (Intel® Killer™ Wi-Fi 7 BE1750), Audio - Microphone, Headphones (Hi-Res Audio, Combo Connection for CTIA & OMTP Headsets), Ports - 1x Thunderbolt™ 4 (with USB 4.0 Type-C, DisplayPort, and USB-PD 3.0 up to 65 W), Slots - 1x M.2 2230 PCIe 4.0 x4, Memory - 16 GB LPDDR5-6400 (Dual-Channel), Screen - 17.8 cm (7.0\"), Sensor - 6-Axis IMU for Orientation (Gyroscope) and Acceleration (Accelerometer), Battery - 6-cell Li-Polymer, 53 Wh (integrated), Cooling - Cooler Boost HyperFlow, Graphics - Intel® Arc™ Graphics, Security - Authentication via Fingerprint Scanner, Bluetooth - Bluetooth 5.4, Processor - Intel® Core™ Ultra 5 Processor 135H (14-core, up to 4.60 GHz, 18 MB SmartCache), Power Supply - 65 Watt (external, USB Type-C, 90-264 Volts), Sound System - Stereo Speakers, Nahimic 3 Audio Enhancer, Monitor Output - 1x DisplayPort via Thunderbolt™ 4, Memory Expansion - microSD Card Reader, Operating System - Windows 11 Home, Panel Technology - 120 Hz, Wide View (IPS-Level), Native Resolution - Full HD (1920 x 1080 pixels), Multi-Touch Screen - Yes, Dimensions (W x D x H) - 294 x 117 x 21.2 mm (without grips), Solid State Drive (SSD) - 512 GB (M.2 PCIe NVMe), Weight (including battery) - 675 g, "
  },
  {
      "slug": "garmin-venu-3s-fiber-reinforced-polymer-case-and-sport-band-30mm",
      "text": "Garmin VENU® 3S Smartwatch, Fiber reinforced polymer case, 41mm, Type - Smartwatch, Band Size - 110-175mm, Durability - Up to 5ATM, Key Feature - Stylish & compact design, 30+ sports apps, Garmin Coach and Animated workouts and training plans that help you face your challenges, More convenience on the go, thanks to Garmin Pay and Garmin Music. Brilliant AMOLED display and a battery life of up to 10 days. Smart notifications, telephony, and voice and emergency assistance. More detailed insights into your health and fitness with Body. Battery 2.0, sleep coach, nap, stress, fitness age and more, Battery Life - Up to 10 days, Connectivity - Bluetooth, WiFi, Compatibility - Android / iOS, Build Material - Fiber reinforced polymer case & sport band, Music playback - Store your songs on the watch and listen to downloaded playlists from compatible music streaming services like Spotify®, Deezer and Amazon via Bluetooth headphones., Wireless & Location - Galileo, GLONASS, GPS, Health, Sport & Activity Tracking - 24/7 Activity Tracking, "
  },
  {
      "slug": "samsung-tablet-galaxy-tab-a8-2021",
      "text": "Samsung Tablet, Galaxy Tab A8 (2021) - WiFi - Android - 32GB, Memory - 3GB, Battery - 7040 mAh, Display - 10.5-inch TFT (1920 x 1200), Storage - 32GB, Processor - UNISOC Tiger T618, Dimensions - 16.2 x 24.6 x 0.7 cm (0.5kg), Rear Camera - 8MP, Connectivity - WiFi, Front Camera - 8MP, Operating System - Android 11, "
  },
  {
      "slug": "msi-gf63-thin-12uc-674-i5-12450h-16gb-512gb-rtx-3050",
      "text": "MSI GF63 Thin 12UC-674 Gaming Laptop - Intel® Core™ i5-12450H - 16GB - 512GB SSD - NVIDIA® GeForce® RTX 3050, Model - 0016R8-674, Memory - 16GB, Display - 15.6 inches (1920 x 1080), 144Hz, Storage - 512GB SSD, Graphics - NVIDIA® GeForce® RTX 3050, Processor - Intel® Core™ i5-12450H, Dimensions - 35.9 x 25.4 x 2.17 cm • 1.86 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "denon-dj-prime-4-dj-controller",
      "text": "Denon Dj Prime 4+ DJ Controller, "
  },
  {
      "slug": "samsung-tv-samsung-gu55u8079fuxzg",
      "text": "Samsung GU55U8079FUXZG - TV 55\" UHD 4K, HD type - 4K Ultra HD, Wi-Fi standards - Wi-Fi 5 (802.11ac), Display diagonal - 139.7 cm (55\"), Bluetooth version - 5.3, Display resolution - 3840 x 2160 pixels, Display technology - LED, Number of speakers - 2, Native aspect ratio - 16:9, Native refresh rate - 50 Hz, Remote control type - Samsung Smart Remote, Weight (without stand) - 9.6 kg, Panel mounting interface - 200 x 200 mm, Display diagonal (metric) - 138 cm, Dimensions (without stand) - 76.6 x 1224.6 x 717.8mm, Multiroom audio technology - Samsung Multiroom Link, Operating system installed - Tizen, Backlight dimming technology - UHD Dimming, Digital signal format system - DVB-C, DVB-S2, DVB-T2, Samsung technologies (AV/TV) - Object Tracking Sound Lite, Q-Symphony, Samsung Knox Security, Samsung TV Plus, Energy efficiency class (SDR) - G, Picture processing technology - Crystal Processor 4K, Samsung Contrast Enhancer, Motion interpolation technology - Motion Xcelerator, High Dynamic Range (HDR) technology - Filmmaker Mode, High Dynamic Range 10+ (HDR10 Plus), Hybrid Log-Gamma (HLG), "
  },
  {
      "slug": "apple-apple-watch-series-9-gps-cellular-stainless-steel-case-and-milanese-band-41mm",
      "text": "Apple Watch Series 9 GPS + Cellular, Stainless Steel Case, 41mm, Type - Smartwatch, Features - Powered by new S9 SiP, New Double Tap Gesture (answer a call, open a notification, play and pause music and more), 2x Brighter Display, Always-On Retina display, Faster on-device Siri with health data access, Precision Finding for iPhone, Crash detection, Fall Detection, Heart arrhythmia, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Pair Multiple Watches with Family Setup, Sleep Stages, Apple Pay, Listen Music, Podcast, Audiobooks, Band Size - S/M, Battery Life - Up to 18h / 36h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Stainless Steel Case and Milanese Band, Music playback - Yes, Water/Dust proof - Up to 5ATM, Activity Tracking - Continuous Heart Rate Tracking, Steps taken, Hours slept, Resting heart rate, Target heart rate, Skin temperature, Multisport workouts; Strength training, HIIT, Pilates, Meditation, Swimming, Running, Yoga, Cycling and Other Sports, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "irobot-mopping-robot-irobot-braava-jet-m6",
      "text": "iRobot Braava jet m6 Mopping Robot, Battery - Up to 90 min, Best for - Entire home, Dimensions - 27 x 25.2 x 9 cm • 2.2 kg, App-Controlled - Yes, works with Amazon Alexa, Google Assistant, Delivery Scope - Braava jet m6, wet wipes, dry wipes, cleaning solution, Compatible Floor Type - Bamboo, Ceramic tile, Engineered woods, Hardwoods, Laminate, Marble, Porcelain tile, "
  },
  {
      "slug": "apple-laptop-apple-macbook-air-late-2020-english-qwerty-13-3-apple-m1-16gb-256gb-ssd-apple-integrated-8-core-gpu",
      "text": "Apple MacBook Air 13\" (Late 2020) Laptop - Apple M1 - 16GB - 256GB SSD - Apple Integrated 7-core GPU, Model - MGN63D/A-410152, Memory - 16GB, Display - 13.3 inches (2560 x 1600), Storage - 256GB SSD, Graphics - Apple Integrated 7-core GPU, Processor - Apple M1, Dimensions - 30.41 x 21.24 x 1.61 cm • 1.29 kg, Operating System - macOS Big Sur, Keyboard Language - English, "
  },
  {
      "slug": "oculus-virtual-reality-oculus-quest-2-256gb",
      "text": "Meta Quest 2 256 GB VR Headset, Audio - Integrated audio, in-strap, Model - Meta Quest 2 256GB, Weight - 0.5kg, Battery - Up to 2-3h, Sensors - Meta Insight tracking system, 6DoF motion tracking, Connections - 1x USB-C, Controllers - 2x Meta touch controllers, Refresh rate - 72Hz at launch, 90Hz to come, Field of View - 104°, Operating mode - Standalone/Tethered, Processor & Storage - Qualcomm Snapdragon XR2, 6GB RAM, 256GB storage, Supported platforms - Cross-platform, Display type, lens & resolution - Single Fast-Switch LCD, 1832×1920px per eye, sdjustable - 3 preset IPD adjustments, Controller Batteries included (AA) - No, "
  },
  {
      "slug": "canon-lens-canon-rf-100-500mm-f4-5-7-1l-is-usm",
      "text": "Canon RF 100-500mm f/4.5-7.1L IS USM Lens, "
  },
  {
      "slug": "roborock-vacuum-cleaner-roborock-s8-sonic",
      "text": "Roborock S8 Vacuum & Mop Robot Cleaner, Runtime - 180 min, Noise level - 68.5 dB, Wet mopping - Yes, Suction power - 6000 Pa, Packaging content - S8 Robot Vacuum (1)\nVibraWash Water Tank (1)\nVibraWash Mop Cloth (1)\nVibraWash Mop Cloth Mount (1)\nCharging Dock (1)\nPower Cable (1)\nUser Manual (1), Mobile app support - Yes, Dust container type - Bagless, Water tank capacity - 0.3 L, Dust capacity (total) - 0.4 L, Brand-specific features - Adaptive Route Algorithm, Selective Room Cleaning, LDS Laser Navigation, VibraRise Mopping System, Reactive 3D Obstacle Avoidance, PreciSense LiDAR Navigation, Smart Suggestions for No-Go-Zones, Works with Amazon Alexa - Yes, Smartphone remote support - Yes, Works with the Google Assistant - Yes, "
  },
  {
      "slug": "xiaomi-smartphone-13-8gb-256gb",
      "text": "Xiaomi 13 Smartphone - 256GB - Dual SIM, Memory - 8GB, Battery - 4500mAh, Display - 6.36-inch AMOLED (1080 x 2400), Storage - 256GB, Processor - Qualcomm® Snapdragon 8 Gen 2, Dimensions - 6.99 x 15.27 x 0.816 cm (0.18kg), Rear Camera - 50MP (Wide) + 12MP (Ultrawide) + 10MP (Telephoto), Connectivity - 5G, Front Camera - 32MP, Operating System - Android 13, "
  },
  {
      "slug": "samsung-smartwatch-samsung-galaxy-watch6-classic-lte-stainless-steel-case-and-sport-band-47mm",
      "text": "Samsung Galaxy Watch6 Classic LTE Smartwatch, Stainless steel case, 47mm, Type - Smartwatch, Sensors - Accelerometer,Barometer,Bioelectrical Impedance Analysis Sensor,Electrical Heart Sensor,Gyro Sensor,Geomagnetic Sensor,Infrared Temperature Sensor,Light Sensor,Optical Heart Rate Sensor, Features - Samsung + Google Pay, Sleep Coach & Analysis, Advanced Body Composition Analysis, Women's Health (Track Fertility Windows, Ovulation Cycles and Periods), Google Apps + OS, Strong Battery Performance & Fast Wireless Charging, Customisation of the workout routine, Analyze your personal heart rate zone., Battery Life - Up to 40 hours, Connectivity - LTE, Bluetooth® 5.3, WLAN 2,4 GHz & 5 GHz, Compatibility - Android, Build Material - Stainless steel case and Sport band, Operating System - Wear OS, Water/Dust proof - 5ATM / IP68 / MIL-STD-810H, Activity Tracking - Heart Rate Monitor, ECG, Continuous Sp02, Blood Pressure, Bioelictrical impedance analysis (Body composition), Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "dyson-vacuum-cleaner-dyson-gen5detect-absolute",
      "text": "Dyson Gen5detect Absolute Vacuum Cleaner, Depth - 250 mm, Width - 276 mm, Height - 1276 mm, Weight - 3.5 kg, Runtime - 70 min, Crevice tool - Yes, Power source - Battery, Cleaning type - Dry, Suction power - 280 AW, Delivery Scope - Gen5 Detect Absolute Cordless Vacuum Cleaner, Digital Motorbar Floor Tool, Floor Tool with Dust Detection Technology, Combo Accessory Tool, Hair Tool, Integrated Dust and Crevice Tool, Wall Mount Charging Bracket, User Manual, Motorized brush - Yes, Removable filter - Yes, Cleaning surfaces - Carpet, Hard floor, Upholstery, Dust container type - Bagless, Vacuum wand assembly - Yes, Multifunctional brush - Yes, "
  },
  {
      "slug": "acer-predator-orion-5000-po5-660-ultra-7-265f-32gb-2tb-ssd-rtx-5070",
      "text": "Acer Predator Orion 5000 (PO5-660) Gaming Desktop - Intel® Core™ Ultra 7-265F - 32GB - 2TB SSD - NVIDIA® GeForce® RTX™ 5070, EAN - 4711474396785, Model - DG.E4EEG.001, Memory - 32GB, Storage - 2TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5070, Processor - Intel® Core™ Ultra 7-265F, Dimensions - 21.9 x 48.5 x 50.5 cm • 18.5 kg, Operating System - Windows® 11 Home, Scope of Delivery - USB - Predator Keyboard RGB (German) and USB - Predator Mouse RGB, "
  },
  {
      "slug": "402965-16-1-4-dc-dn-c-sony-e",
      "text": "Sigma 16mm f/1.4 DC DN C, Sony E-Mount, "
  },
  {
      "slug": "dyson-vacuum-cleaner-dyson-v12-slim-absolute",
      "text": "Dyson V12 Slim Absolute, Filter - Advanced, high-efficiency filtration locks in 99.99% of 0.3 micron particles and allergens, Dimensions - 1234 x 250 x 252mm • 2.4kg, FLOOR TOOLS - Laser Slim Fluffy™ floor nozzle, direct drive electric brush, Box contents - Dyson V12 Slim Absolute, Laser Slim Fluffy™ floor nozzle, electric brush with direct drive, hair nozzle, extra hard brush, combination accessory nozzle, extra soft brush, charger, flex adapter, Running time - 60 mins, Suction power - 150 AW, Dust container - Bagless, 0.35 L, Special features - High suction power for cleaning anywhere • Laser Slim Fluffy™ floor nozzle: 25 cm wide floor nozzle with soft nylon bristles and anti-static carbon fibers • Electric brush with direct drive: cleans thoroughly on all types of floors • Hair nozzle: picks up long hair and pet hair • Comfortable one One button on/off: no need to hold the trigger anymore • LCD • Hygienic bin emptying • Easy maintenance • Click-in battery, "
  },
  {
      "slug": "sony-fe-85mm-f-1-4-gm",
      "text": "Sony FE 85mm F/1.4 GM, Focus - Autofocus, Mount - Sony E mount, Weight - 1.8 lb / 820 g, Aperture - F/1.4 to F/16,  11 blades, Lens type - Full Frame, Dimensions - 3.52 x 4.23\" / 89.5 x 107.5 mm  (ø x L), Filter size - 77mm, Focal length - 85mm, Image stabilizer - No, Scope of delivery - Sony FE 85mm F1.4 lens, Front and Rear lens cap, Lens Hood, Minimum Focus Distance - 2.62' / 80 cm, "
  },
  {
      "slug": "apple-tv-64gb-4k-wifi-gen-3",
      "text": "Apple TV 64GB 4K WiFi (Gen. 3), Weight - 208 g, HD type - 4K Ultra HD, Frame rate - 60 fps, HDMI version - 2.1, Wi-Fi standards - Wi-Fi 6 (802.11ax), Scope of Delivery - Apple TV 4K, Siri Remote, power cord, Supported video modes - 2160p, Remote control included - Yes, Video formats supported - AVC, H.264, HEVC, M4V, MP4, MPEG4, Internal storage capacity - 64 GB, "
  },
  {
      "slug": "dyson-fan-dyson-hp09",
      "text": "Dyson HP09 Purifier Hot+Cool Formaldehyde, Depth - 130 mm, Timer - Yes, Width - 205 mm, Height - 764 mm, Weight - 5.7 kg, HEPA filter - Yes, Noise level - 63 dB, Display type - LCD, Number of speeds - 10, Oscillation angle - 350°, Air purifiers functions - Cooling, Heating, Remote control included - Yes, Suitable for room area up to - 27 m², "
  },
  {
      "slug": "acer-predator-3000-p03-650-i5-13400f-16gb-512gb-rtx-4060",
      "text": "Acer Predator 3000 P03-650 Gaming Desktop - Intel® Core™ i5-13400F - 16GB - 512GB SSD - NVIDIA® GeForce® RTX 4060, Model - DG.BK4EG.00L, Memory - 16GB, Storage - 512GB SSD, Graphics - NVIDIA® GeForce® RTX 4060, Processor - Intel® Core™ i5-13400F, Dimensions - 17.5 x 37.9 x 38.5 cm • 9.6 kg, Operating System - Windows® 11 Home, Keyboard Language - , "
  },
  {
      "slug": "razer-blade-14-2025-ryzen-ai9-32gb-1tb-rtx-5070",
      "text": "Razer Blade 14 (2025) Gaming Laptop - AMD Ryzen™ 9 AI365 - 32GB - 1TB SSD - NVIDIA® GeForce® RTX™ 5070, Model - RZ09-05306GS3-R3G1, Memory - 32GB, Display - 14 inches (2560 x 1600), 240Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5070, Processor - AMD Ryzen™ 9 AI365, Dimensions - 22.8 x 18 x 31.1 cm • 1.84 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "sony-headphones-sony-wf-1000-xm4-noise-cancelling-in-ear-bluetooth-headphones",
      "text": "Sony WF-1000 XM4 Noise-cancelling In-ear Bluetooth Headphones, Type  - In-ear Bluetooth Headphones, Codecs - SBC, AAC, LDAC, Battery - Up to 6+18h, Sensors - Speak-to-Chat, proximity sensor for adaptive playback, 2x two acceleration sensors for wear detection, Connections - USB-C, Key features - Industry leading noise canceling - now even better. Integrated V1 processor developed by Sony for improved noise cancellation. Powerful dual sound sensor microphones enables better detection of ambient noise. Automatic wind noise reduction, noise isolating earplugs. Outstanding call quality. High-resolution audio. Outstanding call quality, automatic adaptation to the respective situation with the adaptive noise control. Fast pairing and fast charging., Noise canceling - ANC, Wireless charging - Yes, Integrated microphone - 2 x Microphones, Intelligent functions - , Water/splash resistant - IPX4, Frequency response, Sound pressure level & Impedance - 20–20,000Hz, "
  },
  {
      "slug": "fujifilm-xf-33mm-f-1-4-r-lm-wr",
      "text": "Fujifilm XF 33mm F/1.4 R LM WR, Focus - Autofocus, Mount - Fujifilm X mount, Weight - 12.7 oz / 360 g, Aperture - F/1.4 to F/16,  9 blades, Lens type - APS-C, Dimensions - 2.6 x 2.9\" / 67 x 73.5 mm (ø x L), Filter size - 58mm, Focal length - 33mm (50mm Full Frame equivalent), Image stabilizer - No, Scope of delivery - FUJIFILM XF 33mm f/1.4 R LM WR Lens, Front & Rear lens cap, Lens hood, "
  },
  {
      "slug": "apple-smartphone-iphone-13-mini-4gb-128gb",
      "text": "Apple iPhone 13 mini - 128GB - Dual SIM, Sim - Dual SIM (Nano Sim + eSim), Memory - 4GB, Battery - 2425 mAh, Display - 5.4-inch Super Retina XDR display (2340 x 1080), Storage - 128GB, Processor - Apple A15 Bionic, Dimensions - 6.42 x 13.15 x 0.765 cm (0.141kg), Rear Camera - 12mp + 12mp, Connectivity - 5G, Front Camera - 12mp, Operating System - iOS 15, "
  },
  {
      "slug": "dyson-air-purifier-dyson-purifier-cool-autoreact-tp7a",
      "text": "Dyson Purifier Cool Autoreact TP7A, Modes - Night mode • In warm weather, a powerful airflow with cleaned air provides cooling, or it can direct the airflow through the device from the rear. This cleans the air without exposing you to the cooling airflow, Range - Rotational movement up to 350 degrees, Filter - HEPA-13 filter removes 99.95% of airborne particles such as bacteria, viruses, house dust and pollen, Dimensions - 1050 x 120 x 204mm • 4.99kg, Sound level - 61.5 dB, Box contents - Dyson Purifier Cool Autoreact air purifier TP7A, HEPA filter with glass fibers and internal activated carbon filter, remote control, Special features - 10 speed settings Includes LCD display with real-time information 20% quieter than previous model Tested by the Asthma & Allergy Foundation Odor reduction seal of approval, "
  },
  {
      "slug": "apple-laptop-apple-apple-macbook-pro-41cm-16-m1-pro-10-core-cpu-16-core-gpu-int-16",
      "text": "Apple MacBook Pro 16\" Laptop - Apple M1 Pro - 16GB - 512GB SSD - Apple Integrated 14-core GPU, Model - 1Z14V-0006, Memory - 16GB, Display - 16 inches (3024 x 1964 ), 120Hz, Storage - 512GB SSD, Graphics - Apple Integrated 14-core GPU, Processor - Apple M1 Pro, Dimensions - 35.57 x 24.8 x 1.6 cm • 2.1 kg, Operating System - macOS Monterey, Keyboard Language - English, "
  },
  {
      "slug": "pioneer-ddj-flx4-dj-studio-equipment",
      "text": "Pioneer DDJ-FLX4 DJ Controller, Type - DJ Controller, Model - DDJ-FLX4, Ratio - 103dB, Sound Card - 16bits/24bits, 44.1kHz/48kHz, Connections - Input: 1 MIC (1/4\" jack). Output: 1 MASTER (RCA)/1 Phones (3.5mm stereo mini jack). 2 sets USB Type-C port, No of channels - 2-channel / 2 decks control, Frequency range - 20Hz-20kHz, What's included - DDJ-FLX4, Quick start guide, Instructions for use, Serato Flyer, USB-C cable, Warranty (in some regions), Special features - Whether you want to connect to a PC, Mac, iPhone, iPad or an Android phone or tablet, the DDJ-FLX4 will do it all. Even better, if you're using the controller with rekordbox for iOS/Android when the update is available in early 2023, you'll be able to connect to your device via Bluetooth® or USB. So there is nothing that could stop you from starting as a DJ., Intelligent features - With the Smart Fader function you can start right away. It automatically adjusts volume, bass volume and BPM, so you can create smooth transitions between your tracks by simply moving the channel faders or the crossfader. And with Smart CFX, you can conjure up an effect combination that adds drama to the sound. All you have to do is turn a knobs, "
  },
  {
      "slug": "hp-15-fc0052ng-r5-7520u-16gb-1tb",
      "text": "HP 15-fc0052ng Laptop - AMD Ryzen™ 5 7520U - 16GB - 1TB SSD - AMD Radeon™ Graphics, EAN - 198701941286, Model - B04R3EA#ABD, Memory - 16GB, Display - 15.6 inches (Full HD, 1920 x 1080 pixels), Storage - 1TB SSD, Processor - AMD Ryzen™ 5 7520U, Graphics card - AMD Radeon™ Graphics, Operating system - Windows® 11 Home, Keyboard language - German, Max. Battery life - 10.5 h, Dimensions and weight - 35.9 x 23.6 x 1.8 cm - 1.59 kg, Sustainable technologies and materials - Plastic that would otherwise end up in the sea in the speaker housing; keycaps and keyboard switches with recycled household plastic, "
  },
  {
      "slug": "hp-17-cp0263ng-r5-5500u-16gb-512gb",
      "text": "HP 17-CP0263NG Laptop - AMD Ryzen™ 5 5500U - 16GB - 512GB - AMD Radeon™ Graphics, Model - A00WCEA#ABD, Memory - 16GB, Display - 17.3 inches (1920 x 1080), Storage - 512GB, Graphics - AMD Radeon™ Graphics, Processor - AMD Ryzen™ 5 5500U, Dimensions - 35.6 x 24.2 x 1.49 cm • 1.6 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "hp-16-s0076ng",
      "text": "HP Victus 16-s0076ng Gaming Laptop - AMD Ryzen™ 7 7840HS - 16GB - 512GB SSD - NVIDIA® GeForce® RTX 4060, Model - 84R97EA, Memory - 16GB, Display - 16.1 inches (1920 x 1080), 144Hz, Storage - 512GB SSD, Graphics - NVIDIA® GeForce® RTX 4060, Processor - AMD Ryzen™ 7 7840HS, Dimensions - 40 x 25.7 x 2.06 cm • 2.19 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "dyson-vacuum-cleaner-dyson-v12-detect-slim-absolute",
      "text": "Dyson V12 Detect Slim Absolute Vacuum Cleaner, Filter - Advanced, high-efficiency filtration locks in 99.99% of 0.3 micron particles and allergens, Dimensions - 1264 x 250 x 252 mm • 2.2 kg, Box contents - Dyson V12 Detect Slim Absolute, floor nozzle with dust detection technology, motor bar floor nozzle, hair nozzle, flex adapter, combination accessory nozzle, crevice nozzle, charger, accessory holder for the suction tube, wall bracket, Running time - 60 mins, FLOOR NOZZLES - Floor nozzle with dust detection technology: 25 cm wide floor nozzle with soft nylon bristles and anti-static carbon fibers / motor bar floor nozzle for hair removal, Suction power - 150 AW, Dust container - Bagless, 0.35 L, Special features - High suction power for cleaning anywhere • Thoroughly cleans on all floor types • Hair nozzle: Picks up long hair and pet hair • Convenient on/off switching with a single button: The trigger no longer needs to be held down • LCD • Hygienic container emptying • Easy maintenance • Click-in battery, "
  },
  {
      "slug": "hp-printers-hp-smart-tank-7005-aio",
      "text": "HP Smart Tank 7005 AiO Printer , Wi-Fi - Yes, Faxing - No, Weight - 6.38 kg, Printing - Colour printing, USB port - Yes, Bluetooth - Yes, Control type - Touch, Ink included - Rated as 3 year supply (at 300 ppm): 12,000 pages of monochrome + 8,000 pages of color., Scanner type - Flatbed scanner, Paper tray media types - Thick paper, Photo paper, Plain paper, Recycled paper, Glossy paper, Matte paper, Print resolution black - 1200 x 1200 DPI, Print resolution colour - 4800 x 1200 DPI, Document formats supported - PDF, Maximum ISO A-series paper size - A4, Sustainable technologies and materials - 25% post-consumer recycled plastic; Recyclable through HP Planet Partners, "
  },
  {
      "slug": "samsung-smartwatch-samsung-samsung-galaxy-watch6-aluminium-case-and-sport-band-40mm",
      "text": "Samsung Galaxy Watch6 Smartwatch, Aluminium case, 40mm, Type - Smartwatch, Sensors - Accelerometer,Barometer,Bioelectrical Impedance Analysis Sensor,Electrical Heart Sensor,Gyro Sensor,Geomagnetic Sensor,Infrared Temperature Sensor,Light Sensor,Optical Heart Rate Sensor, Features - Samsung + Google Pay, Sleep Coach & Analysis, Advanced Body Composition Analysis, Women's Health (Track Fertility Windows, Ovulation Cycles and Periods), Google Apps + OS, Strong Battery Performance & Fast Wireless Charging, Customisation of the workout routine, Analyze your personal heart rate zone., Battery Life - Up to 40 hours, Connectivity - Bluetooth® 5.3, WLAN 2,4 GHz & 5 GHz, Compatibility - Android, Build Material - Aluminium case and Sport Band, Operating System - Wear OS, Water/Dust proof - 5ATM / IP68 / MIL-STD-810H, Activity Tracking - Heart Rate Monitor, ECG, Continuous Sp02, Blood Pressure, Bioelictrical impedance analysis (Body composition), Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "lenovo-thinkpad-e14-u7-155h-16gb-512gb",
      "text": "Lenovo ThinkPad E14 Laptop - Intel® Core™ Ultra 7-155H - 16GB - 512GB SSD - Intel® Integrated Intel® Graphics, Model - 21M7002XGE, Memory - 16GB, Display - 14 inches (1920 x 1200), 60Hz, Storage - 512GB SSD, Graphics - Intel® Integrated Intel® Graphics, Processor - Intel® Core™ Ultra 7-155H, Dimensions - 31.3 x 21.9 x 1.8 cm • 1.44 kg, Operating System - Windows® 11 Pro, Keyboard Language - German, "
  },
  {
      "slug": "dyson-v15-detect-absolute-2023-vacuum-cleaner",
      "text": "Dyson V15 Detect Absolute (2023) Vacuum Cleaner, Features - Automatic thorough cleaning of carpets • The laser detects otherwise invisible particles • Sensor continuously calculates the number and size of the vacuumed dust particles - and automatically increases the suction power if necessary • The LCD shows the amount in real time and size of the vacuumed dust particles • Dyson Hyperdymium™ motor • Root Cyclone™ technology • Three suction modes: Eco, Auto, Boost • Easy maintenance: the filter and the Fluffy™ brush bar are washable and the dust container and floor nozzles can simply be wiped off, Dimensions - 1205 x 26.6 x 25 cm • 3.1 kg, Running time - Up to 60 min, FLOOR NOZZLES - Motorbar floor nozzle (with anti-tangle hair protection), Slim Fluffy floor nozzle with dust detection, DUST CONTAINER - Bagless, 0.77 L, Scope of delivery - Cordless vacuum cleaner, wall mount with charging function, combination accessory nozzle, crevice nozzle, operating instructions, "
  },
  {
      "slug": "apple-laptop-apple-macbook-pro-mkgp3d-a-english-qwerty-14-apple-m1-pro-16gb-512gb-ssd-apple-integrated-14-core-gpu",
      "text": "Apple MacBook Pro 14\" Laptop - Apple M1 Pro - 16GB - 512GB SSD - Apple Integrated 14-core GPU, Model - MKGP3D/A, Memory - 16GB, Display - 14 inches (3024 x 1964 ), 120Hz, Storage - 512GB SSD, Graphics - Apple Integrated 14-core GPU, Processor - Apple M1 Pro, Dimensions - 31.26 x 22.12 x 1.55 cm • 1.6 kg, Operating System - macOS Monterey, Keyboard Language - English, "
  },
  {
      "slug": "dyson-fan-dyson-pure-cool-tp00",
      "text": "Dyson Pure Cool TP00 Air Purifier, Features - Timer, remote control, Filtering - Activated carbon filter, HEPA filter (H13, 99.95%), Dimensions - 196x1018x196mm / 3.67kg, Air circulation - 1562m³/​h, Power regulation - 10 levels (automatic), "
  },
  {
      "slug": "microsoft-surface-laptop-7th-copilot-pc-15-x-elite-16gb-512gb-ssd",
      "text": "Microsoft Surface Laptop, Copilot+ PC – 7th Edition – 15” touchscreen – Snapdragon® X Elite – 16GB – 512GB SSD, Model - ZHH-00005, Memory - 16GB, Display - 15 inches (2304 x 1536), 120Hz, Storage - 512GB SSD, Graphics - Qualcomm® Adreno™ GPU, Processor - , Dimensions - 30.1 x 22 x 1.75 cm • 1.34 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "htc-virtual-reality-vive-focus-vision-business-edition",
      "text": "HTC Vive Focus Vision - Business Edition Virtual Reality, Audio - Dual microphones with noise and echo cancellation, 2 patented directional speakers, privacy mode, 3.5 mm audio jack, Wi-Fi - 6E, Inputs - Headset button, volume +/- buttons, Battery - Up to 15 hours³ runtime, built-in battery, rechargeable via USB-C, Runtime - up to 2 hours, charges to 50% in 30 minutes, Sensors - 4 tracking cameras, 2 eye-tracking cameras, G-sensor, gyroscope, depth sensor, proximity sensor, infrared floodlight, Storage - 128 GB internal storage, expandable up to 2 TB via microSD, Accuracy - 0.5° – 1.1° within 20° FOV, 5-point calibration, automatic IPD adjustment, Hot-swap - support with built-in backup battery for up to 20 minutes standby, Bluetooth - 5.2 + BLE, IPD range - 57 – 72 mm, Processor - Qualcomm® Snapdragon™ XR2, 12 GB LPDDR5 RAM, Ergonomics - Magnetically attached front and rear PU leather pads (washable), Passthrough - 2 high-resolution full-color passthrough cameras, Eye Tracking - 120 Hz binocular eye data output, Refresh rate - up to 120 Hz in DisplayPort mode (Beta), Display panel - Dual LCD panels, Play Area Size - Up to 10 x 10 m with VIVE inside-out tracking, up to 1000 m² supported via VIVE Business, Glasses-friendly - (up to 150 mm width), Controller sensors - Hall sensors, capacitive sensors, G-sensor, gyroscope, Display resolution - 2448 x 2448 pixels per eye (4896 x 2448 total),, Field of view (FOV) - up to 120°, Ports & Connectivity - USB 3.2 Gen 1 Type-C, USB 3.2 Gen 1 Type-C with DisplayPort support, Tracking Usage Modes - Standing, seated, "
  },
  {
      "slug": "lens-150-600mm-f-5-0-6-3-for-canon-7ea83130-1c0a-454a-9eb6-d777ba2b092d",
      "text": "Sigma 150-600mm 1:5-6.3 DG OS HSM Canon EF-Mount, "
  },
  {
      "slug": "dyson-hair-care-dyson-supersonic-hd07-hair-dryer",
      "text": "Dyson Supersonic HD07 Hair Dryer, Dimensions - 7.8 x 24.4 x 9.7 cm / 0.63 kg, Box contents - Dyson Supersonic hair dryer HD07, flyaway attachment, diffuser, gentle airflow attachment, wide-tooth comb, styling nozzle, instruction manual, Cable length - 2.7 m, Special features - 77 dB (A), ionization, LED display, removable filter sleeve, air volume 41 litres/second, drying time: 5.7 g/minute, highest level 100°C, medium level 80°C, low level 60° C, cold stage 28° C, "
  },
  {
      "slug": "hp-15s-eq2232ng-r3-5300u-8gb-512gb",
      "text": "HP 15S-EQ2232NG Laptop - AMD Ryzen™ 3 5300U - 8GB - 512GB - AMD Radeon™ Graphics, Model - A00W2EA#ABD, Memory - 8GB, Display - 15.6 inches (1920 x 1080), Storage - 512GB, Graphics - AMD Radeon™ Graphics, Processor - AMD Ryzen™ 3 5300U, Dimensions - 35.6 x 24.2 x 1.49 cm • 1.6 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "sony-lens-sel-p-e-pz-g-oss-18-mm-105-mm-f-4-standard-zoom",
      "text": "Sony 18-105mm f/4 G PZ OSS, E-Mount, Focus - Autofocus, Mount - Sony E mount, Weight - 15.1 oz / 427 g, Aperture - F4 to F22,  7 blades, Dimensions - 3.1 x 4.3\" / 78 x 110 mm (ø x L), Filter size - 72mm, Lens format - APS-C, Focal length - 18mm to 105mm, Image stabilizer - Yes, Special Features - Power zoom control lever, Scope of delivery - Sony E PZ 18-105mm f/4 G OSS Lens, Lens hood, Front & Rear lens cap, "
  },
  {
      "slug": "apple-headphones-apple-airpods-3-in-ear-bluetooth-headphones",
      "text": "Apple AirPods 3 In-ear Bluetooth Headphones, Type  - In-ear Bluetooth Headphones, Codecs - AAC, Battery - Up to 6+24h battery, Sensors - Two beamforming microphones, Inward-facing microphone, Skin detection sensor, Accelerometer with motion detection, Accelerometer with speech recognition, Pressure sensor, Connections - Lightning connector, Key features - Spatial audio with dynamic head tracking places sound all around you, adaptive EQ automatically tunes music to your ears, Force sensor lets you easily control your entertainment, answer or end calls, and more, Easily share audio between two sets of AirPods on your iPhone, iPad, iPod touch, or Apple TV, Noise canceling - , Wireless charging - Qi-certified wireless charging, MagSafe Charging Case2, Integrated microphone - Yes, Intelligent functions - Voice control with Siri, Water/splash resistant - IPX4, Frequency response, Sound pressure level & Impedance - -, "
  },
  {
      "slug": "acer-predator-orion-3000",
      "text": "Acer Predator Orion 3000 Gaming Desktop - Intel® Core™ i7-13700F - 32GB - 1TB SSD - NVIDIA® GeForce® RTX 4070, Model - DG.BK4EB.00E, Memory - 32GB, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX 4070, Processor - Intel® Core™ i7-13700F, Dimensions - 17.5 x 37.9 x 38.5 cm • 9.6 kg, Operating System - Windows® 11 Home, Keyboard Language - , "
  },
  {
      "slug": "lg-monitor-lg-lg-ultragear-34gn850p-b-34-34gn850p-b-aeu",
      "text": "LG - 34\" LG UltraGear 34GN850P-B (34\") 34GN850P-B.AEU, Model - 34GN850P-B.AEU, Display - IPS 34 inches (3440 x 1440), 144Hz, Dimensions - 81.9 x 31.2 x 46.4 cm • 7.6 kg, Connectivity - 2x HDMI 2.0, 1x DisplayPort 1.4, 2x USB-A 3.0, 1x USB-B 3.0, 1x 3.5mm, Response Time - 1ms, High Dynamic Range (HDR) - Yes, "
  },
  {
      "slug": "microsoft-surface-laptop-13-copilot-pc-13-lcd-x-plus-16gb-512gb-ssd-no-p-a",
      "text": "Surface Laptop 13\", Copilot+ PC, 13” LCD | X Plus/16GB/512GB SSD, Cache - 30 MB, Depth - 1.56 cm, Wi-Fi - WiFi 7 (802.11be), Width - 28.56 cm, Height - 21.41 cm, Weight - 1.247 kg, Feature - PixelSense™ Flow Display, RAM size - 16 GB, RAM type - LPDDR5x, Bluetooth - 5.4, Resolution - 1920 x 1080 pixels (Full HD), Form factor - Notebook, Display size - 33 cm (13\"), EPEAT rating - EPEAT Bronze, SSD capacity - 512 GB, Storage type - UFS 2.1, Headphone out - Yes, Microphone in - Yes, USB 3.0 ports - 2x, Audio features - Combo audio/mic jack (3.5mm), Clock frequency - 3.40 GHz, Cores / Threads - 8-Core, Processor model - Snapdragon X Plus, Battery capacity - 50 Wh, Operating system - Windows 11 Home, Processor number - X1P-42-100, Touchscreen type - Finger and pen input (capacitive touchscreen), Power adapter included - No, Processor manufacturer - Qualcomm, Total storage capacity - 512 GB, Number of storage drives - 1, "
  },
  {
      "slug": "shark-iz400-cordless-vacuum-cleaner",
      "text": "Shark IZ400 Stratos Cordless Vacuum Cleaner, Dimensions - 270 x 1140 x 170 mm / 4.07 kg, Animal brush - Yes, operation area - Tiles, hardwood floors, laminates, parquet floors, cracks, furniture, carpets, Special features - Clean Snese iQ, PowerFins Plus, DuoClean technology, Anti Hair Wrap technology, handheld vacuum cleaner mode, Anti-Allergen Complete Seal, Scope of delivery - 1 main unit, 1 multi-surface attachment, 1 crevice tool, 1 lithium-ion battery, 1 charger, 1 accessory bag, Type brushes/nozzles - Crevice nozzle, multi-surface attachment, Maximum volume of the dust container - 0.7L, Charging time according to the manufacturer - 3.5 hours, "
  },
  {
      "slug": "sonos-one-gen2",
      "text": "Sonos One Gen2, Type - Portable Speakers, Connectivity - Wired, Wi-Fi, Dimensions and weight - 11.9 cm x 11.9 cm x 16.1 cm, 1.85 kg, "
  },
  {
      "slug": "apple-smartphone-iphone-14-6gb-256gb",
      "text": "Apple iPhone 14 - 256GB - Dual SIM, Memory - 6GB, Battery - 3279 mAh, Display - 6.1-inch OLED (2532 x 1170), Storage - 256GB, Processor - Apple A15 Bionic, Dimensions - 8.96 x 16.57 x 2.8 cm (0.33kg), Rear Camera - 12MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 16, "
  },
  {
      "slug": "apple-watch-se-gps-aluminium-case-and-sport-band-44mm",
      "text": "Apple Watch SE GPS, Aluminium Case, 44mm, Type - Smartwatch, Features - Apple Pay, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Emergency SOS, Fall Detection, Crash Detection, Pair Multiple Watches with Family Setup, Cycle Tracking, Sleep Stages, Medications App, AFib History, Swim-proof, Listen Music, Podcast, Audiobooks, Battery Life - Up to 18h , Connectivity - Wi-Fi, Bluetooth 5.0, NFC, Compatibility - iOS, Build Material - Aluminium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 5ATM, Activity Tracking - Continuous Heart Rate Tracking, Multisport workouts; Swimming, Running, Yoga, Cycling and Several Other Sport, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "hp-omen-35l-i7-14700f-32gb-1tb-rtx-4060-ti",
      "text": "HP Omen 35L Gaming Desktop | Gaming PC GT16-0075ng - Intel® Core™ i7-14700F - 32GB - 1TB SSD - NVIDIA® GeForce® RTX 4060 Ti, EAN - 0198701355311, Model - AM9L2EA#ABD, Memory - 32GB, Cooling - Air Cooling, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX 4060 Ti, Processor - Intel® Core™ i7-14700F, Dimensions - 21 x 40.8 x 41 cm • 14.5 kg, Operating System - Windows® 11 Home, "
  },
  {
      "slug": "apple-macbook-pro-16-m3-pro-12cpu-36gb-512gb-18gpu-eng",
      "text": "Apple MacBook Pro 16\" Laptop - Apple M3 Pro - 36GB - 512GB SSD - Apple Integrated 18-core GPU, Model - MRW23, Memory - 36GB, Display - 16.2 inches (3024 x 1964), Storage - 512GB SSD, Graphics - Apple Integrated 18-core GPU, Processor - Apple M3 Pro, Dimensions - 35.57 x 35.57 x 1.68 cm • 2.14 kg, Operating System - macOS, Keyboard Language - English, "
  },
  {
      "slug": "dyson-v11-2023-cordless-vacuum-cleaner",
      "text": "Dyson V11 (2023) Cordless Vacuum Cleaner, Dimensions - 271 x 990 x 154 mm / 3 kg, Operation Area - Tiles, hardwood floors, laminates, parquet floors, furniture, carpets, Special features - MotorbarTM electric brush, 3 cleaning modes (Auto, Eco, Boost), LCD display intelligent messages in real time, large post-motor filter, operating time up to (Eco, Auto/Med, Boost mode): 60 / 40 / 5 min., battery power up to (Eco, Auto/Med, Boost mode) 18.55 / 25.2 / 29.4 volts, Scope of delivery - V11 cordless vacuum cleaner, NEW: MotorbarTM electric brush, combination accessory nozzle, crevice tool, wall mount, Maximum suction power - 185 AW, Maximum operating time - 60 mins, Maximum volume of the dust container - 0.76 L, Charging time according to the manufacturer - 4.5 hours, "
  },
  {
      "slug": "samsung-monitor-samsung-samsung-odyssey-g4-g4b-25-25-ls25bg400euxen",
      "text": "Samsung - 25\" Samsung Odyssey G4 G4B (25\") LS25BG400EUXEN, Model - LS25BG400EUXEN, Display - IPS 25 inches (1920 x 1080), 240Hz, Dimensions - 55.8 x 55.2 x 24.4 cm • 4.5 kg, Connectivity - 2x HDMI 2.0, 1x DisplayPort 1.2, Response Time - 1ms, High Dynamic Range (HDR) - Yes, "
  },
  {
      "slug": "lenovo-thinkpad-x1-carbon-g12-ultra-7-258v-32gb-1tb-copilot-pc",
      "text": "Lenovo Thinkpad X1 Carbon G12 Notebook - Intel® Core™ Ultra 7-258V - 32GB - 1TB SSD - Intel® Integrated Intel Arc Graphics 140V, Model - 21NS0010GE, Memory - 32GB, Display - 14 inches (2880 x 1800), 120Hz, Storage - 1TB SSD, Graphics - Intel® Integrated Intel Arc Graphics 140V, Processor - Intel® Core™ Ultra 7-258V, Dimensions - 31.28 x 21.47 x 1.5 cm • 1.12 kg, Operating System - Windows® 11 Pro, Keyboard Language - German, "
  },
  {
      "slug": "samsung-smartphone-s24-12gb-256gb",
      "text": "Samsung S24+ Smartphone - 256GB - Dual SIM, Memory - 12GB, Battery - 4900 mAh, Display - 6.7-inch Dynamic AMOLED 2X (1440 x 3120), Storage - 256GB, Processor - , Dimensions - , Rear Camera - 50MP+10MP+12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - Android 14, "
  },
  {
      "slug": "acer-chromebook-314-n100-4gb-128gb",
      "text": "Acer Chromebook 314 Laptop - Intel® N-Series-N100 - 4GB - 128GB - Intel® Intel® UHD Graphics, Model - NX.KNBEG.003, Memory - 4GB, Display - 14 inches (1920 x 1080), Storage - 128GB, Graphics - Intel® Intel® UHD Graphics, Processor - Intel® N-Series-N100, Dimensions - 45.7 x 28.8 x 65 cm • 2.44 kg, Operating System - Chrome OS™, Keyboard Language - German, "
  },
  {
      "slug": "acer-predator-orion-x-pox-955-i9-14900kf-64gb-2tb-rtx-4090",
      "text": "Acer Predator Orion X (POX-955) Gaming Desktop | Gaming PC - Intel® Core™ i9-14900KF - 64GB - 1TB SSD + 1TB SSD - NVIDIA® GeForce® RTX™ 4090, Model - DG.E4AEG.005, Memory - 64GB, Storage - 1TB SSD + 1TB SSD, Graphics - NVIDIA® GeForce® RTX™ 4090, Processor - Intel® Core™ i9-14900KF, Dimensions - 17.9 x 25.8 x 33.6 cm • 10.3 kg, Operating System - Windows® 11 Home, Keyboard Language - , "
  },
  {
      "slug": "samsung-galaxy-watch-5-44mm",
      "text": "Samsung Galaxy Watch5 Smartwatch, Aluminium Case, 44mm, Type - Smartwatch, Sensors - Accelerometer, Barometer, Ambient Light Sensor, Compass, Pulse oximeter (Sp02), Samsung BioActive Sensor (Herzfrequenz, ECG und BIA), Features - Modern Aluminium design with Sapphire Crystal, Samsung + Google Pay, Sleep Coach & Analysis, Blood Oxygen Saturation and Heart Rate Analysis, Performance Tracking, Smart Fall Detection, Advanced Body Composition Analysis, Women's Health (Track Fertility Windows, Ovulation Cycles and Periods), Google Apps + OS, Strong Battery Performance & Fast Wireless Charging, Band Size - M/L, Battery Life - Up to 40 hours, Connectivity - Bluetooth® 5.2, WLAN 2,4 GHz & 5 GHz, Compatibility - Android 8.0 and higher, Build Material - Aluminium Case and Sport Band, Music playback - On-board music storage, Operating System - Wear OS, Water/Dust proof - 5ATM / IP68 / MIL-STD-810H, Activity Tracking - Blood oxygen, Blood pressure, Heart rate, Bioelectrical Impedance Analysis (BIA), Steps Taken, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "google-smartphone-pixel-6-8gb-128-gb",
      "text": "Google Pixel 6 Smartphone - 128 GB - Dual SIM, Memory - 8GB, Battery - 4614 mAH, Display - 6.4-inch AMOLED, HDR10+ (1080 x 2400), Storage - 128 GB, Processor - Google Tensor, Dimensions - 7.48 x 15.86 x 0.89 cm (0.207kg), Rear Camera - 50MP+12MP, Connectivity - 5G, Front Camera - 8MP, Operating System - Android™ 12, "
  },
  {
      "slug": "samsung-monitor-samsung-s27a800uju-27-ls27a800ujuxen",
      "text": "Samsung - 27\" S27A800UJU LS27A800UJUXEN, Model - LS27A800UJUXEN, Display - IPS 27 inches (3840 x 2160), Dimensions - 61.5 x 45 x 17.1 cm • 6.7 kg, Connectivity - 1x HDMI 2.0, 1x DisplayPort 1.2, 3x USB-A, 1x USB-C, Response Time - 5ms, High Dynamic Range (HDR) - Yes, "
  },
  {
      "slug": "hp-victus-16-r1077ng-i7-14700hx-16gb-512gb-ssd",
      "text": "HP Victus 16-r1077ng Gaming Notebook - Intel® Core™ i7-14700HX - 16GB - 512GB SSD - NVIDIA® GeForce RTX™ 4070, Model - 9P3A0EA#ABD, Memory - 16GB, Display - 16 inches (1920 x 1080 ), 144Hz, Storage - 512GB SSD, Graphics - NVIDIA® GeForce RTX™ 4070 , Processor - Intel® Core™ i7-14700HX, Dimensions - 6.9 x 55.2 x 34.5 cm • 2.33 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "samsung-tablet-galaxy-tab-a9-wifi-4gb-64gb",
      "text": "Samsung Tablet, Galaxy Tab A9+ - WiFi -4GB - 64GB, Depth - 6.9 mm, Width - 257.1 mm, Height - 168.7 mm, Weight - 480 g, Stylus pen - No, Cables included - USB Type-C, Internal memory - 4 GB, Display diagonal - 27.9 cm (11\"), Keyboard included - No, Display resolution - 1920 x 1200 pixels, Display technology - LCD, Battery recharge time - 3 h, Internal storage capacity - 64 GB, Mobile network connection - No, Rear camera resolution (numeric) - 8 MP, Front camera resolution (numeric) - 5 MP, "
  },
  {
      "slug": "asus-monitor-asus-be279qsk-hdmi-dp-ips-spk-lift-27-90lm04p1-b02370",
      "text": "Asus - 27\" BE279QSK HDMI+DP IPS Spk Lift (SOLD) 90LM04P1-B02370, Model - 90LM04P1-B02370, Display - IPS 27 inches (1920 x 1080), Dimensions - 54.8 x 26.6 x 39.8 cm • 6.8 kg, Connectivity - 1x VGA, 1x HDMI 1.4, 1x DisplayPort 1.2, 4x USB-A 3.0, 1x USB-B 3.0, Response Time - 5ms, High Dynamic Range (HDR) - No, "
  },
  {
      "slug": "samsung-galaxy-buds3-pro-in-ear-bluetooth-headphones",
      "text": "Samsung Galaxy Buds3 Pro In-ear Bluetooth Headphones, Type - In-ear Bluetooth Headphones, Codecs - AAC, SBC, SSC (Samsung Seamless Codec), SSC-UHQ, Battery - Up to 24h battery, Sensors - Acceleration sensor, position sensor, Hall sensor, proximity sensor, touch, VPU (Voice Pickup Unit), Connections - USB-C, Loudspeaker - Two-way speaker (10.5 mm dynamic driver and 6.1 mm tweeter), dual amplifier, Connectivity - Bluetooth® 5.4 (supports LE Audio), Key features - With their new iconic design and dynamic lighting, the Galaxy Buds3 Pro are a real eye-catcher. First Galaxy buds with Galaxy AI into play for smarter sound optimisation and ANC, the high-quality 2-way speaker brings your favourite music, films and games to life with 24-bit audio providing with exceptional sound quality., Technologies - Voice assistant with voice activation option (BixbyVoice), 360° audio, 24 bit Hi-Fi sound, Automatic device switching, SmartThings support (Find myBuds), Auracast, Automatic wearer detection, Noise cancelling - ANC, Integrated microphone - Three microphones per earbud, Water/splash resistant - IP57, "
  },
  {
      "slug": "samsung-smartwatch-samsung-samsung-galaxy-watch6-aluminium-case-and-sport-band-44mm",
      "text": "Samsung Galaxy Watch6 Smartwatch, Aluminium case, 44mm, Type - Smartwatch, Sensors - Accelerometer,Barometer,Bioelectrical Impedance Analysis Sensor,Electrical Heart Sensor,Gyro Sensor,Geomagnetic Sensor,Infrared Temperature Sensor,Light Sensor,Optical Heart Rate Sensor, Features - Samsung + Google Pay, Sleep Coach & Analysis, Advanced Body Composition Analysis, Women's Health (Track Fertility Windows, Ovulation Cycles and Periods), Google Apps + OS, Strong Battery Performance & Fast Wireless Charging, Customisation of the workout routine, Analyze your personal heart rate zone., Battery Life - Up to 40 hours, Connectivity - Bluetooth® 5.3, WLAN 2,4 GHz & 5 GHz, Compatibility - Android, Build Material - Aluminium case and Sport Band, Operating System - Wear OS, Water/Dust proof - 5ATM / IP68 / MIL-STD-810H, Activity Tracking - Heart Rate Monitor, ECG, Continuous Sp02, Blood Pressure, Bioelictrical impedance analysis (Body composition), Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "acer-swift-go-14-oled-ultra-5-125u-16gb-512gb",
      "text": "Acer Swift Go 14 OLED Laptop - Intel® Core™ Ultra 5-125U - 16GB - 512GB - Intel® Intel® Graphics, Model - NX.KWMEG.008, Memory - 16GB, Display - 14 inches (2880 x 1800), Storage - 512GB, Graphics - Intel® Intel® Graphics, Processor - Intel® Core™ Ultra 5-125U, Dimensions - 45.7 x 28.8 x 65 cm • 2.28 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "samsung-galaxy-watch-5-lte-40mm",
      "text": "Samsung Galaxy Watch5 LTE Smartwatch, Aluminium Case, 40mm, Type - Smartwatch, Sensors - Accelerometer, Barometer, Ambient Light Sensor, Compass, Pulse oximeter (Sp02), Samsung BioActive Sensor (Herzfrequenz, ECG und BIA), Features - Modern Aluminium design with Sapphire Crystal, Samsung + Google Pay, Sleep Coach & Analysis, Blood Oxygen Saturation and Heart Rate Analysis, Performance Tracking, Smart Fall Detection, Advanced Body Composition Analysis, Women's Health (Track Fertility Windows, Ovulation Cycles and Periods), Google Apps + OS, Strong Battery Performance & Fast Wireless Charging, Band Size - S/M, Battery Life - Up to 40 hours, Connectivity - Bluetooth® 5.2, WLAN 2,4 GHz & 5 GHz, Compatibility - Android 8.0 and higher, Build Material - Aluminium Case and Sport Band, Music playback - On-board music storage, Operating System - Wear OS, Water/Dust proof - 5ATM / IP68 / MIL-STD-810H, Activity Tracking - Blood oxygen, Blood pressure, Heart rate, Bioelectrical impedance analysis (BIA), Steps Taken, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "dyson-vacuum-cleaner-dyson-v11-total-clean",
      "text": "Dyson V11 Total Clean Cordless Vacuum Cleaner, Filter - Removes 99.97% of particles down to 0.3 microns in size, Battery - Up to 60 min, Dimensions - 26.1 x 128.6 x 25 cm • 3.08 kg, Suitable for - Allergies, tiles, hardwood floors, pets, laminates, furniture, hardwood floors, cracks, stone floors, carpets, Floor Nozzles - Electric brush with direct drive, electric brush with soft roller, Suction Power - 220 AW, Dust Container - Bagless, 0.76 L, Special Features - Three cleaning modes: the right suction power for different cleaning tasks • Large container with hygienic and precise container emptying • LCD display for real-time information • Unique battery power management system • Wall bracket with charging function, Scope of Delivery - Electric brush with direct drive, electric brush with soft roller, wall bracket with charging function, combination accessory nozzle, crevice nozzle, flex adapter, accessory holder for the suction tube, operating instructions, "
  },
  {
      "slug": "samsung-tablet-galaxy-tab-s9-5g-256gb-12gb",
      "text": "Samsung Tablet, Galaxy Tab S9 - 5G - Android - 256GB, Memory - 12GB, Battery - 8400 mAh, Display - 11-inch Dynamic AMOLED 2X (2560x1600), Storage - 256GB, Processor - Qualcomm Snapdragon® 8 Gen 2, Dimensions - 16.5 x 25.4 x 0.6 cm (0.5kg), Rear Camera - 13MP, Connectivity - 5G, Front Camera - 12MP, Operating System - Android, "
  },
  {
      "slug": "sony-tv-sony-kd43x75wlpaep",
      "text": "Sony KD-43X75WL - TV 43\" BRAVIA LED, Screen - Flat, Delivery - TVs, remote controls (RMF-TX810U, RMT-TX450E), Processor - 4K HDR Processor X1, Model Name - KD43X75WLPAEP, Connections - 4x HDMI, 2x USB, digital audio output, Wi-Fi Direct, W-LAN, Ethernet, Product type - LED TV UHD 4K, VESA standard - 200 x 200, Receptions Types - DVB-T2 HD, DVB-C, DVB-S, DVB-S2, Special Features - Google TV, ECO PACK, BRAVIA CORE, Narrow Bezel Design, Dimensions with stand - 972mm / 632mm / 266mm, Dimensions without stand - 972mm / 567mm / 70mm, HDR (High Dynamic Range) - Dolby Vision, HDR10, Hybrid Log-Gamma (HLG), "
  },
  {
      "slug": "htc-virtual-reality-headset-htc-vive-pro-2",
      "text": "HTC Vive Pro 2 VR Headset, CPU - Intel® Core™ i5-4590 or AMD Ryzen 1500 equivalent or better, GPU - NVIDIA® GeForce® GTX 1060 or AMD Radeon RX 480 equivalent or better, RAM - 8GB+, Audio - Speakers with 2.0 sound and microphone, Display - LCD, Sensors - Accelerometer, magnetometer, gyro sensor, proximity sensor, USB port - 1x USB 3.0 or better, Resolution - 2448x2448 pixels, Connections - DisplayPort 1.2 (or newer version), Image matrix - RGB matrix, Refresh rate - 120Hz, Communication - Bluetooth available, Field of view - 120°, Manufacturer no - 99HASW004-00, Operating system - Windows 10 or better, Accessories available - Link Box 2.0, DisplayPort and USB 3.0 cable, Suitable for glasses wearers - Yes, "
  },
  {
      "slug": "gigabyte-graphics-card-gigabyte-geforce-rtx-3070-gaming-oc-8g-lhr",
      "text": "Gigabyte GeForce RTX 3070 Gaming OC 8G LHR Graphics Card, Memory - 8GB GDDR6, Dimensions - 28.6 x 11.5 x 5.1 cm • 1 kg, Boost Clock Speed - 1,815 MHz, "
  },
  {
      "slug": "apple-smartphone-galaxy-s25-12gb-256-gb",
      "text": "Samsung Galaxy S25 Smartphone  - 256 GB - Dual SIM, Memory - 12GB, Battery - 3885 mAh, Display - 6.2-inch Dynamic AMOLED 2X (1080 x 2340), Storage - 256 GB, Processor - , Dimensions - , Rear Camera - 12 MP + 50 MP + 10 MP, Connectivity - 5G, Front Camera - 12 MP, Operating System - Android 15, "
  },
  {
      "slug": "acer-predator-orion-3000-po3-655-i5-14400f-16gb-512gb-rtx4060",
      "text": "Acer Predator Orion 3000 (PO3-655) Gaming Desktop | Gaming PC - Intel® Core™ i5-14400F - 16GB - 512GB SSD - NVIDIA® GeForce® RTX 4060, Model - DG.E45EG.00S, Memory - 16GB, Storage - 512GB SSD, Graphics - NVIDIA® GeForce® RTX 4060, Processor - Intel® Core™ i7-14400F, Dimensions - 17.5 x 37.7 x 38.5 cm • 8.7 kg, Operating System - Windows® 11 Home, Keyboard Language - , "
  },
  {
      "slug": "samsung-smartwatch-samsung-samsung-galaxy-watch6-lte-aluminium-case-and-sport-band-40mm",
      "text": "Samsung Galaxy Watch6 LTE Smartwatch, Aluminium case, 40mm, Type - Smartwatch, Sensors - Accelerometer,Barometer,Bioelectrical Impedance Analysis Sensor,Electrical Heart Sensor,Gyro Sensor,Geomagnetic Sensor,Infrared Temperature Sensor,Light Sensor,Optical Heart Rate Sensor, Features - Samsung + Google Pay, Sleep Coach & Analysis, Advanced Body Composition Analysis, Women's Health (Track Fertility Windows, Ovulation Cycles and Periods), Google Apps + OS, Strong Battery Performance & Fast Wireless Charging, Customisation of the workout routine, Analyze your personal heart rate zone., Battery Life - Up to 40 hours, Connectivity - LTE, Bluetooth® 5.3, WLAN 2,4 GHz & 5 GHz, Compatibility - Android, Build Material - Aluminium case and Sport Band, Operating System - Wear OS, Water/Dust proof - 5ATM / IP68 / MIL-STD-810H, Activity Tracking - Heart Rate Monitor, ECG, Continuous Sp02, Blood Pressure, Bioelictrical impedance analysis (Body composition), Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "samsung-monitor-samsung-odyssey-g5-g55c-32-ls32cg554euxen",
      "text": "Samsung - 32\" Odyssey G5 G55C LS32CG554EUXEN, Model - LS32CG554EUXEN, Display - VA 31.5 inches (2560 x 1440), 165Hz, Dimensions - 79 x 49 x 20 cm • 7.3 kg, Connectivity - 1x DisplayPort 1.2 1x HDMI, 1x 3.5 mm Klinke, Response Time - 1ms, High Dynamic Range (HDR) - Yes, "
  },
  {
      "slug": "samsung-soundbar-samsung-hw-q800a-zg",
      "text": "Samsung HW-Q800A/ZG Soundbar + Subwoofer, WiFi - Yes, Delivery - HW-Q800A/ZG, remote control, HDMI cable, wall bracket, Bluetooth - Yes, Components - 3.1.2 Soundbar Speaker System, Connections - 1x HDMI In, 1x HDMI Out, digital audio input (optical): Multi channel, Total Power - 330 watt, Product type - Soundbar + Subwoofer, Special features - True Dolby Atmos, DTS:X, Game Mode Pro, Amazon Alexa, AirPlay2, SmartThings, Q-Symphony, SpaceFit Sound, One Control, Tap Sound, Number of channels - 3.1.2, Signal transmission - Wireless, Wired, "
  },
  {
      "slug": "gopro-hero-13-black-creator-edition",
      "text": "GoPro HERO 13 Black Creator Edition, GPS - Tracks information about speed, altitude, G-force and more, Video - Up to 5.3K60p / 4K120p, Storage - MicroSD, Photography - 27MP photos, Slow Motion - 13x (720p400fps) for 15 seconds / 12x (900p360fps) for 15 seconds / 4x (5.3K120fps) for 5 seconds, Stabilisation - Hypersmooth, Waterproofing - up to 10 meters, Special features - GPS, ultra-slow-motion, HLG-HDR Video recording, WLAN-6, Scope of delivery - Gopro Hero 13 Black, Enduro Battery, Mounting kit, USB-C cable, Volta Battery grip, Light mod, Media Mod, magnetic latch mount, 2X USB-C cable, mounting kit, Carry case, "
  },
  {
      "slug": "acer-predator-5000-po5-655-i7-14700f-32gb-1tb-rtx4070-ti",
      "text": "Acer Predator 5000 (PO5-655)Gaming Desktop - Intel® Core™ i7-14700F - 32GB - 1TB SSD - NVIDIA® GeForce® RTX 4070 Ti, EAN - 4711121885112, Model - DG.E40EG.005, Memory - 32 GB DDR5 RAM (2 x 16 GB), Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX 4070 Ti, Processor - Intel® Core™ i7-14700F, Dimensions - 21.9 x 50.5 x 48.5 cm • 17.5 kg, Operating System - Windows® 11 Home, "
  },
  {
      "slug": "huawei-smartphone-pura70-ultra-16gb-512gb",
      "text": "Huawei Pura70 Ultra Smartphone - 512GB - Dual SIM, Memory - 16GB, Battery - 5200mAh, Display - 6.8-inch LTPO OLED (1260 x 2844), Storage - 512GB, Processor - , Dimensions - , Rear Camera - 50MP+50MP+40MP, Connectivity - 5G, Front Camera - 13MP, Operating System - EMUI 14.2, "
  },
  {
      "slug": "razer-laptop-razer-blade-pro-17-2021-17-3-intel-core-i7-10875h-16gb-ddr4-512gb-pcie-nvidia-geforce-rtx-3070",
      "text": "Razer Blade Pro 17 (Early 2021) - Gaming Laptop - Intel® Core™ i7-10875H - 16GB (DDR4) - 512GB PCIe - NVIDIA® GeForce® RTX 3070, Model - RZ09-0368BGC2-R3G1, Memory - 16GB (DDR4), Display - 17.3 inches (1920 x 1080), 360Hz, Storage - 512GB PCIe, Graphics - NVIDIA® GeForce® RTX 3070, Processor - Intel® Core™ i7-10875H, Dimensions - 39.5 x 26 x 1.99 cm • 2.75 kg, Operating System - Windows® 10 Home (64 Bit), Keyboard Language - German, "
  },
  {
      "slug": "siemens-eq-900-tq903d03-coffee-machine",
      "text": "Siemens EQ.900 TQ903D03 Coffee Machine, Programs - Switch-off time, demo mode, drink size, brightness, coffee temperature, child lock, mixed milk drinks, languages, key tone, water filter, water hardness, Dimensions - 355 x 392 x 470 mm / 12.5 kg, Grind levels - 1-6 levels, Pump pressure - 19 bar, 2 cup function - Yes, Special Features - Up to 29 different coffee specialties (in the device and the Home Connect app), supply of warm milk, milk foam and hot water, milk proportion adjustable for classic mixed milk drinks, illuminated coffee spout height-adjustable (glasses up to 15 cm high), oneTouch DoubleCup - available at the push of a button two cups, active cup preheating, removable brewing unit: easy and hygienic cleaning, drip tray and coffee grounds container removable and dishwasher safe, reminds you in good time about cleaning, descaling and changing the water filter, child lock, Scope of Delivery - 1 fully automatic coffee machine, 1 BRITA INTENZA water filter cartridge, 1 simple milk container, Water tank capacity - 2.3L, Bean container contents - 375g, Milk container capacity - 0.7L, Suitable type of coffee - Coffee beans, "
  },
  {
      "slug": "razer-blade-18-2025-ultra9-32gb-2tb-rtx-5090",
      "text": "Razer Blade 18 (2025) Gaming Laptop - Intel® Core™ Ultra 9-275HX - 32GB - 2TB SSD - NVIDIA® GeForce® RTX™ 5090, Model - RZ09-05299GR4-R3G1, Memory - 32GB, Display - 18 inches (3840 x 2400), 120Hz, Storage - 2TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5090, Processor - Intel® Core™ Ultra 9-275HX, Dimensions - 40 x 27.5 x 2.2 cm • 3.1 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "sony-playstation-5-slim-fc25-disk-bundle",
      "text": "Sony PlayStation 5 Slim - FC25 Disk Bundle, CPU - x86-64-AMD Ryzen “Zen 2”, 8 Cores / 16 Threads, Variable frequency, up to 3.5 GHz, GPU - AMD Radeon RDNA 2-based graphics engine, Ray Tracing Acceleration, Variable frequency, up to 2.23 GHz, Memory - 16GB, 448GB/s Bandwidth, Weight - 3.2kg, USB Ports - USB Type-C (Super-Speed USB 10Gbps), USB Type-C (Hi-Speed USB), USB Type-A port (Super-Speed USB 10Gbps) x2, Dimensions - 96mm x 358mm x 216mm, Performance - 4K @ 60 FPS, Up to 120 FPS and 8K, Storage Type - 1TB Custom NVME SSD, Optical Drive - 4K UHD Blu-ray Player, Vertical Stand - Not included, Scope of Delivery - PlayStation®5 console, DualSense™ Wireless Controller, 1TB SSD, 2 Horizontal stand feet, HDMI® cable, AC power cord, USB cable, Printed materials, EA SPORTS FC™ 25 Disk, Expandable Storage - NVMe SSD Slot, Number of USB Ports - 4, "
  },
  {
      "slug": "bose-soundbar-900",
      "text": "Bose 900 Smart Soundbar, WiFi - Yes, Delivery - Bose Smart Soundbar900 - Premium soundbar with Dolby Atmos® - Black, HDMI™ eARC cable, Optical cable, ADAPTiQ headset, Power cord, Remote control (battery included), Quick start guide, Bluetooth - Yes, Components - 5.1.2 Soundbar, Connections -  HDMI eARC, optical connection, Total Power - , Product type - Soundbar, Special features - Dolby Atmos, Chromecast, Number of channels - 5.1.2, Signal transmission - Wireless, Wired, "
  },
  {
      "slug": "yamaha-dj-studio-equipment-yamaha-hs8-bassreflex-studio-monitor-piece",
      "text": "Yamaha HS8 Active 2-Way Nearfield Monitor (Piece), Type - Active 2-Way Nearfield Monitor (Piece), Model - HS8, Battery - , Chassis - 8-inch Woofer (75 W) + 1-inch Tweeter (45 W), Amplifier - 120 W biamp, Frequency - 38-30,000 Hz, Durability - -, Connections - Balanced XLR and 6.3 mm balanced jack, Connectivity - -, Operating mode - Plug-in, Special features - Bass reflex system. Adjustable input level. Room control and high trim response control, Intelligent functions - -, "
  },
  {
      "slug": "philips-air-purifier-philips-ac2729-10-purifier-and-humidifier",
      "text": "Philips AC2729/10 Air Purifier and Humidifier, Filter - VitaShield IPS cleaning technology - removes 99.97% of particles with 3 nm - multi-stage active filtration system: pre-filter, multicare filter, activated carbon filter, HEPA filter, Features - NanoCloud technology leads to a natural evaporation process that humidifies the air in a hygienic way • Air values can be read in real time on the practical digital display • AeraSense technology detects even the smallest particle changes in the air and reacts quickly to it • Real-time PM2.5 feedback • 4-level humidity settings • 3 automatic cleaning modes: general mode, allergy mode and sleep mode., Dimensions - 23 cm x 58 cm x 39.6 cm • 8.2 kg, App-controlled - Yes, Air Matters app: control your air purifier from anywhere, turn on the air purifier, change the fan speed, check the filter lifespan, Max. room size - up to 60m², Scope of delivery - Combination device AC2729 / 10, humidification element FY2425, NanoProtect particle filter FY1410, activated carbon filter FY1413, operating instructions, "
  },
  {
      "slug": "ricoh-theta-x-360-camera",
      "text": "Ricoh Theta X - 360° Camera, Photo - (EXIF / JPEG) 60 MP 11,008x5504px / 15 MP 5504x2752px, mount - 1/4\"-20 Female, Display - 2.23\" LCD touchscreen, Storage - 46Gb internal Storage / Micro SD (U3/V30 or Faster Recommended), Stitching - Internal & Real-time stitching, Dimensions - 136.2 x 51.7 x 29 mm @ 170g, Resolution - 11K Photos (stitched) / 5.7K video (Stitched), Camera sensor - 2x 1/2\"-type 48MP CMOS Sensor, 360 video format - 5760 x 2880 at 30 fps / 3840 x 2910 at 60 fps, Special features - Video Streaming in 360 degree 4K30p, Image stabilization at 5.7K30p,  Integrated GPS, Plug-in expandability, "
  },
  {
      "slug": "acer-predator-x45bmiiphuzx-45-oled-curved",
      "text": "Acer - 45\" Predator X45bmiiphuzx | 45\" OLED Curved UM.MXXEE.001, Model - UM.MXXEE.001, Display - OLED 45 inches (3440x1440), 240Hz, Dimensions - 99.2 x 30.6 x 55.2 cm • 13.1 kg, Connectivity - 2x HDMI, 1x DP, 1x USB3.1 Type-C, USB 3.2 x2 + USB-B (2up 2down), Audio Out, Response Time - 0.01ms, High Dynamic Range (HDR) - Yes, "
  },
  {
      "slug": "acer-predator-orion-3000-po3-655-i7-14700f-16gb-512gb-rtx4060",
      "text": "Acer Predator Orion 3000 (PO3-655) Gaming Desktop | Gaming PC - Intel® Core™ i7-14700F - 16GB - 512GB SSD - NVIDIA® GeForce® RTX 4060, Model - DG.E45EG.007, Memory - 16GB, Storage - 512GB SSD, Graphics - NVIDIA® GeForce® RTX 4060, Processor - Intel® Core™ i7-14700F, Dimensions - 17.5 x 37.7 x 38.5 cm • 8.7 kg, Operating System - Windows® 11 Home, "
  },
  {
      "slug": "samsung-smartwatch-samsung-galaxy-watch6-classic-stainless-steel-case-and-sport-band-43mm",
      "text": "Samsung Galaxy Watch6 Classic Smartwatch, Stainless steel case, 43mm, Type - Smartwatch, Sensors - Accelerometer,Barometer,Bioelectrical Impedance Analysis Sensor,Electrical Heart Sensor,Gyro Sensor,Geomagnetic Sensor,Infrared Temperature Sensor,Light Sensor,Optical Heart Rate Sensor, Features - Samsung + Google Pay, Sleep Coach & Analysis, Advanced Body Composition Analysis, Women's Health (Track Fertility Windows, Ovulation Cycles and Periods), Google Apps + OS, Strong Battery Performance & Fast Wireless Charging, Customisation of the workout routine, Analyze your personal heart rate zone., Battery Life - Up to 40 hours, Connectivity - Bluetooth® 5.3, WLAN 2,4 GHz & 5 GHz, Compatibility - Android, Build Material - Stainless steel case and Sport band, Operating System - Wear OS, Water/Dust proof - 5ATM / IP68 / MIL-STD-810H, Activity Tracking - Heart Rate Monitor, ECG, Continuous Sp02, Blood Pressure, Bioelictrical impedance analysis (Body composition), Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "sony-console-sony-playstation-5-slim-digital-fortnite-bundle",
      "text": "Sony PlayStation 5 Slim Digital Console Fortnite Bundle, CPU - x86-64-AMD Ryzen “Zen 2”, 8 Cores / 16 Threads, Variable frequency, up to 3.5 GHz, GPU - AMD Radeon RDNA 2-based graphics engine, Ray Tracing Acceleration, Variable frequency, up to 2.23 GHz, Memory - 16GB, 448GB/s Bandwidth, Weight - 2.6kg, USB Ports - USB Type-C (Super-Speed USB 10Gbps), USB Type-C (Hi-Speed USB), USB Type-A port (Super-Speed USB 10Gbps) x2, Dimensions - 80mm x 358mm x 216mm, Performance - 4K @ 60 FPS, Up to 120 FPS and 8K, Storage Type - 1TB Custom NVME SSD, Optical Drive - all-digital version without a disc drive, Vertical Stand - Not included, Scope of Delivery - PlayStation®5 console, DualSense™ Wireless Controller, 1TB SSD, 2 Horizontal stand feet, HDMI® cable, AC power cord, USB cable, Printed materials, Expandable Storage - NVMe SSD Slot, Number of USB Ports - 4, Fortnite Cobalt Star Pack - Cobalt Snowfoot Outfit (with LEGO style), Sapphire Star Back Bling, Indigo Inverter Pickaxe, Weathered Snow Stripe Paint, Cobalt Crash Drums, Stellar Spheres Rocket Trail, Stellar Spokes Wheels, Stellar Velocity Trail, 1,000 V-Bucks, "
  },
  {
      "slug": "apple-smartphone-iphone-16-pro-max-8gb-1tb",
      "text": "Apple iPhone 16 Pro Max - 1TB - Dual SIM, Memory - 8GB, Battery - 4676 mAh, Display - 6.9-inch OLED Super Retina XDR (2868 x 1320), Storage - 1TB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP + 48MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 18, "
  },
  {
      "slug": "sony-lens-sel50f18f-syx-objektiv-50-mm-f-1-8",
      "text": "Sony FE 50mm F1.8, "
  },
  {
      "slug": "pioneer-dj-equipment-pioneer-ddj-200-smart-controller",
      "text": "Pioneer DJ DDJ-200 Smart DJ controller, Type - DJ controller, Model - DDJ-200 Smart, Connections - 1 USB Type B, split output, Connectivity - Bluetooth, App-controllable, Operating mode - Plug in, Special features - Compatible with WeDj, djay, edjing Mix and rekordbox dj apps; compatible with Beatport, LINK, Soundcloud Go +, Deezer and Spotify Streaming for mixing tracks; WeDj App for iPhone contains tutorials, pop-up tips and transition effects, "
  },
  {
      "slug": "lg-washing-machine-lg-washingmachine-f6wv710p2s",
      "text": "LG F6WV710P2S Washing Machine, Design - Standing device, Capacity - 10.5 kg, Programs - Allergy, app programs, Eco 40-60°C, delicates, whites/​colors, short 14min, night, gentle/​wool, sport, Dimensions - 600 x 850 x 565mm / Weight: 70kg, Noise level - 73dB(A), Spin speed max. - 1600/​min, Special features - AquaStop, child safety, Water consumption - 53l/​cycle, Additional options - Steam, Half load, Anti-crease at the end of the programme, Rinse, Prewash, Energy consumption - 53kWh/​100 cycles, Spin efficiency class - A (A to G), Energy efficiency class - A (A to G), Airborne noise emission class - B (A to D), "
  },
  {
      "slug": "google-smartphone-google-pixel-9-pro-fold-16gb-512gb",
      "text": "Google Pixel 9 Pro Fold Smartphone - 512GB - Dual SIM, Memory - 16GB, Battery - 4650 mAh, Display - 6.3 (8.0)-inch OLED (2076 x 2152), Storage - 512GB, Processor - , Dimensions - , Rear Camera - 48MP+10.5MP+10.8MP, Connectivity - 5G, Front Camera - 10MP, Operating System - Android 14, "
  },
  {
      "slug": "sony-console-sony-playstation-5-slim-fortnite-bundle",
      "text": "Sony PlayStation 5 Slim Console Fortnite Bundle, CPU - x86-64-AMD Ryzen “Zen 2”, 8 Cores / 16 Threads, Variable frequency, up to 3.5 GHz, GPU - AMD Radeon RDNA 2-based graphics engine, Ray Tracing Acceleration, Variable frequency, up to 2.23 GHz, Memory - 16GB, 448GB/s Bandwidth, Weight - 3.2kg, USB Ports - USB Type-C (Super-Speed USB 10Gbps), USB Type-C (Hi-Speed USB), USB Type-A port (Super-Speed USB 10Gbps) x2, Dimensions - 96mm x 358mm x 216mm, Performance - 4K @ 60 FPS, Up to 120 FPS and 8K, Storage Type - 1TB Custom NVME SSD, Optical Drive - 4K UHD Blu-ray Player, Vertical Stand - Not included, Scope of Delivery - PlayStation®5 console, DualSense™ Wireless Controller, 1TB SSD, 2 Horizontal stand feet, HDMI® cable, AC power cord, USB cable, Printed materials, Expandable Storage - NVMe SSD Slot, Number of USB Ports - 4, Fortnite Cobalt Star Pack - Cobalt Snowfoot Outfit (with LEGO style), Sapphire Star Back Bling, Indigo Inverter Pickaxe, Weathered Snow Stripe Paint, Cobalt Crash Drums, Stellar Spheres Rocket Trail, Stellar Spokes Wheels, Stellar Velocity Trail, 1,000 V-Bucks, "
  },
  {
      "slug": "xiaomi-smartphone-xiaomi-14-12gb-512gb",
      "text": "Xiaomi 14 Smartphone - 512GB, Memory - 12GB, Battery - 4610mAh, Display - 6.36-inch AMOLED (2670 x 1200), Storage - 512GB, Processor - , Dimensions - , Rear Camera - 50MP + 50MP, Connectivity - 5G, Front Camera - 32MP, Operating System - Android 14, "
  },
  {
      "slug": "htv-vive-pro-headset",
      "text": "HTC Vive Pro Full Kit VR Headset, Sensors - SteamVR tracking, G-sensor, gyroscope, distance sensor, IPD sensor, Resolution - 1440 x 1600 pixel per eye, Connections - USB-C 3.0, DP 1.2, Bluetooth, Controllers - Steam VR Tracking 2.0, 6 hours battery life, Display type - Dual AMOLED 3.5\", Refresh rate - 90 Hz, Horizontal view point - 110 degrees, "
  },
  {
      "slug": "meta-virtual-reality-quest-3s-256gb",
      "text": "Meta Quest 3S 256 GB VR Headset, Gaming - Powerful technology for smooth gameplay, Weight - 515g, VR Type - Mixed reality experiences and immersive VR, Controller - Touch Plus Controller Hands-free control, Resolution - HD resolution 1832 × 1920 pixels per eye, Connections - 1x USB Type-C, Social Apps - WhatsApp, Instagram and Facebook Messenger, Wired/Wireless - Wireless design for freedom of movement, Internal Storage - 256GB, Scope of delivery - All-in-One Quest Headset, Standard Immersion Headset Insert (pre-installed), 2 Meta Quest Touch Plus Controllers, 2 Wrist Straps, Power Adapter, Charging Cable, Supported Platforms - Android, iOS, PC, "
  },
  {
      "slug": "huawei-gt4-stainless-steel-case-and-stainless-steel-strap-46mm",
      "text": "Huawei Watch GT4 Smartwatch, Stainless Steel Case, 46mm, Type - Smartwatch, Features - High resolution AMOLED display, 100+ Workout Modes, Bluetooth calling, message viewing&notification, Physical button, Band Size - M/L, Battery Life - Up to 14 days, Connectivity - GPS, NFC, Bluetooth 5.2, WiFi, Compatibility - Android 6.0 or later / iOS 9.0 or later, Build Material - Stainless Steel Case and Stainless Steel Band, Music playback - Yes, Water/Dust proof - 5 ATM / IP68, Activity Tracking - Step counting, activity reminders, heart rate detection, stress monitoring, breathing exercises, sleep monitoring, irregular heart rate alerts, SpO2,healthy living, skin temperature measurement, etc, Global Positioning - GPS, Beidou, GLONASS, Galileo, QZSS, "
  },
  {
      "slug": "lg-monitor-lg-ultragear-32-32gp850-b",
      "text": "LG - 32\" UltraGear 32GP850-B (32\") (SOLD) 32GP850-B , Model - 32GP850-B , Display - IPS 31.5 inches (2560 x 1440), 165Hz, Dimensions - 71.4 x 49 x 29.2 cm • 7.1 kg, Connectivity - 2x HDMI 2.0, 1x DisplayPort 1.4, 2x USB-A 3.0, 1x USB-B 3.0, 1x 3.5mm, Response Time - 1ms, High Dynamic Range (HDR) - Yes, "
  },
  {
      "slug": "bose-soundbar-700",
      "text": "Bose 700 Soundbar, Delivery - Bose soundbar 700, universal remote control, ADAPTiQ headset, optical cable, HDMI cable, power cord, quick start guide, Bluetooth - Yes, version 4.2, range up to 9 m, Components - Soundbar, Dimensions - 5.72 cm x 97.8 cm x 19.8 cm • 4.76 kg, Connections - 1x HDMI OUT, 1x Toslink, 1x USB IN, Product type - Soundbar, Special features - Room-filling home cinema experience • Control via remote control, Bose Music app or with the integrated Amazon Alexa and Google Assistant voice assistants • Other devices can be connected via WLAN, Apple AirPlay 2 or Bluetooth • HDMI ™ ARC connectivity, Internet Connection - Yes, Signal Transmission - Wireless, Wired, "
  },
  {
      "slug": "acer-projector-acer-h6522abd",
      "text": "Acer H6522ABD Projector - Full HD, Brightness - 2800 ANSI lumens, Connections - 1x HDMI 1.4a, 1x HDMI (MHL), 1x VGA, 1x composite video, 1x audio in (3.5mm), 1x DC out 5V USB type A, 1x audio out, 1x Kensington lock slot, Aspect ratio - 16:9, Picture quality - Full HD, Projection size - 0.73 - 7.62 m, 3D functionality - Full 3D, Special features - , Screen resolution - 1920 x 1080 pixels, Projection distance - 1.0 - 9.5 m, "
  },
  {
      "slug": "huawei-gt4-stainless-steel-case-and-gold-milanese-strap-41mm",
      "text": "Huawei Watch GT4 Smartwatch, Stainless Steel Case, 41mm, Type - Smartwatch, Features - High resolution AMOLED display, 100+ Workout Modes, Bluetooth calling, message viewing&notification, Physical button, Band Size - S/M, Battery Life - Up to 7 days, Connectivity - GPS, NFC, Bluetooth 5.2, WiFi, Compatibility - Android 6.0 or later / iOS 9.0 or later, Build Material - Stainless Steel Case and Gold Milanese Band, Music playback - Yes, Water/Dust proof - 5 ATM / IP68, Activity Tracking - Step counting, activity reminders, heart rate detection, stress monitoring, breathing exercises, sleep monitoring, irregular heart rate alerts, SpO2,healthy living, skin temperature measurement, etc, Global Positioning - GPS, Beidou, GLONASS, Galileo, QZSS, "
  },
  {
      "slug": "apple-macbook-pro-16-m3-max-16cpu-48gb-1tb-40gpu-eng",
      "text": "Apple MacBook Pro 16\" Laptop - Apple M3 Max - 48GB - 1TB SSD - Apple Integrated 40-core GPU, Model - MUW63, Memory - 48GB, Display - 16.2 inches (3024 x 1964), Storage - 1TB SSD, Graphics - Apple Integrated 40-core GPU, Processor - Apple M3 Max, Dimensions - 35.57 x 35.57 x 1.68 cm • 2.16 kg, Operating System - macOS, Keyboard Language - English, "
  },
  {
      "slug": "lg-tv-lg-oled48c37la-aeud",
      "text": "LG OLED48C37LA - TV 48\" OLED evo 4K, Screen - Flat, Delivery - Remote control, batteries for the remote control (2x AA for Magic Remote-FB or 2x AAA for Standard-FB), quick start guide, power cable, stand/feet (depending on the design type of the respective TV model), Processor - α9 Gen6 4K AI-Processor, Model Name - OLED48C37LA.AEUD, Connections - 4x HDMI (4K 120Hz, eARC, VRR, ALLM, QMS (4 ports)), 3x USB 2.0, 1x LAN (Ethernet), WiFi 6 (802.11ax), 1x LAN (Ethernet), Optical output. CI+ slot, Product type - OLED TV UHD 4K, VESA standard - 300 x 200, Receptions Types - Twin Triple Tuner (DVB-T2/-C2/-S2), Special Features - The powerful α9 Gen6 4K AI processor and Dolby Vision™ for outstanding images, as well as the intense Dolby Atmos® sound, will completely captivate you. Gamers will also benefit from the OLED evo C3 with Nvidia G-Sync™, AMD FreeSync and HGiG support, whichwill enable you to get the most intense HDR gaming experience., Dimensions with stand - 1071 x 675 x 230 mm, Dimensions without stand - 1071 x 618 x 46.9 mm, HDR (High Dynamic Range) - Dolby Vision / HDR10 / HLG, "
  },
  {
      "slug": "epson-projector-epson-ef-11",
      "text": "Epson EF-11 Laser Projector - Full HD, Eco Mode - Yes, Brightness - 1000 ANSI lumens, Connections - 1x HDMI 1.4, 1x USB 2.0 Type A, 1x USB 2.0 Type B, 1x stereo mini jack audio out, Aspect ratio - 16:9, Picture quality - Full HD, Projection size - 30 - 150 inches, 3D functionality - No, Special features - Display content from a phone, streaming device, laptop, games console, and more with built-in Miracast., Screen resolution - 1920 x 1080 pixels, Keystone Correction - Yes, Projection distance - 1.33 m (60 inch screen), "
  },
  {
      "slug": "apple-smartphone-iphone-16-pro-8gb-512gb",
      "text": "Apple iPhone 16 Pro - 512GB - Dual SIM, Memory - 8GB, Battery - 3577 mAh, Display - 6.3-inch OLED Super Retina XDR (2622 x 1206), Storage - 512GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP + 48MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 18, "
  },
  {
      "slug": "lg-tv-lg-oled48cx9lb-aeu",
      "text": "LG OLED48CX9LB - TV 48\" OLED 4K, Screen - Flat, Delivery - OLED48CX9LB, Magic Remote MR20, batteries for remote control, quick start guide, power cable (permanently installed on the device), stand, Processor - α9 Gen3 AI Prozessor 4K, Model Name - OLED48CX9LB.AEU 2020, Connections - 4x HDMI 2.1 (with HDCP 2.3), 3x USB 2.0, 1x LAN, 1x optical digital output (S / PDIF, fiber optic), 1x headphone / line out (3.5 mm jack), 3x antenna (2x satellite, 1x cable / terrestrial ), 1x CI slot, Product type - OLED TV 4K, VESA standard - 300x200, Receptions Types - DVB-T2 HD, DVB-C, DVB-S, DVB-S2, Special Features - 4K AI-Processor with AI Sound Pro, AI Picture Pro and AI Brightness Control, Filmmaker Mode™, Dolby Vision IQ™ and Dolby Atmos®, Cinema HDR, Smart TV with Google Assistant, Alexa and AirPlay 2/HomeKit, Dimensions with stand - 1071.0 mm / 650.0 mm / 251.0 mm, Dimensions without stand - 1071.0 mm / 618.0 mm / 47.0 mm, HDR (High Dynamic Range) - Cinema HDR with Dolby Vision IQ™, HDR10 Pro and HLG, "
  },
  {
      "slug": "garmin-venu-2-smartwatch-45mm-fiber-reinforced-polymer-case-sport-band",
      "text": "Garmin Venu 2 Smartwatch, Fiber reinforced polymer case, 45mm, Type - Smartwatch, Band Size - 135-200mm, Durability - Up to 5ATM, Key Feature - Stylish design, Extensive health analysis functions, Choose from over 25 pre-installed sports apps and find your sport or discover new sports. Animated workouts and training plans that help you face your challenges, let your favorite music accompany you - without your smartphone. Right on your watch. Your wallet on your wrist. Pay conveniently and contactlessly in next to no time. Brilliant AMOLED display and a battery life of up to 11 days., Battery Life - Up to 11 days, Connectivity - Bluetooth, ANT +, WiFi, Compatibility - Android / iOS, Build Material - Fiber reinforced polymer case & sport band, Music playback - On-board music storage (Up to 650 tracks), Wireless & Location - Galileo, GLONASS, GPS, Health, Sport & Activity Tracking - 24/7 Activity Tracking, "
  },
  {
      "slug": "huawei-gt5-pro-titanium-case-and-titanium-band-46mm",
      "text": "Huawei Watch GT5 Pro Smartwatch, Titanium Case, 46mm, Type - Smartwatch, Features - Premium design, Heart Rate Monitoring, Blood oxygen detection, Sleep monitoring, Automatic stress test, Breathing exercises, Health clovers, Menstrual cycle, Sleep apnea detection, Bluetooth calling, message viewing&notification, Battery Life - Up to 14 days, Connectivity - GPS, Bluetooth, Wi-Fi, NFC, Compatibility - iOS / Android, Build Material - Titanium Case and Titanium Band, Music playback - Yes, Water/Dust proof - 5 ATM / IP68, Activity Tracking - 24/7 heart rate tracking; Skin temperature; Stress level; Calories burned; Can track swimming, running, hiking and general workouts, Global Positioning - GPS, Beidou, GLONASS, Galileo, QZSS, "
  },
  {
      "slug": "google-smartphone-google-pixel-9-12gb-256gb",
      "text": "Google Pixel 9 Smartphone - 256GB - Dual SIM, Memory - 12GB, Battery - 4700 mAh, Display - 6.3-inch OLED (1080 x 2424), Storage - 256GB, Processor - , Dimensions - , Rear Camera - 50MP + 48MP, Connectivity - 5G, Front Camera - 10.5MP, Operating System - Android 14, "
  },
  {
      "slug": "samsung-24-business-monitor-t45f-f24t450fzu",
      "text": "Samsung 24\" Business Monitor T45F LF24T450FZUXEN with USB-C, Model - LF24T450FZUXEN, Display - IPS 24 inches (1920 x 1080), Dimensions - 53.92 x 322.8 x 39.4 cm • 4.2 kg, Connectivity - 2x HDMI and 1 x Displayport connection, Response Time - 5ms, High Dynamic Range (HDR) - No, "
  },
  {
      "slug": "sonos-ray-soundbar",
      "text": "Sonos Ray Soundbar, WiFi - Yes, Delivery - Soundbar, Power Cable (2m), Optical Cable (1.5m), Quick Start Guide, Bluetooth - No, Components - , Connections - Optical, Lan, Total Power - , Product type - Soundbar, Special features - AirPlay, WiFi, TV remote sync, Sonos App, Touch controls, Number of channels - , Signal transmission - Wireless, Wired, "
  },
  {
      "slug": "sony-mhc-v13-partybox-party-bluetooth-speaker",
      "text": "Sony MHC-V13 Partybox , Type - Party Bluetooth Speaker, Model - MHC-V13 Partybox, Battery - Plug-in, Chassis - 2x 5 cm (powerful horn) Tweeter, 1x 20 cm Woofer, Amplifier - 150 W, Frequency - -, Durability - , Connections - 1x USB, 1x audio-in, 1x mic-in (6mm), party chain, Connectivity - Bluetooth, NFC, Operating mode - Plug-in, Special features - MEGA BASS, 2 microphone inputs for Karako use (vocal fader, tone control, microphone volume, echo, voice changer (effect), multi-colored loudspeaker lighting, child lock, tweeter: 2x 5 cm (powerful horn), woofer: 1 x 20 cm, Intelligent functions - -, "
  },
  {
      "slug": "acer-predator-orion-5000-po5-655-i7-14700f-32gb-1tb-rtx-4080-super",
      "text": "Acer Predator Orion 5000 (PO5-655) Gaming Desktop - Intel® Core™ i7-14700F - 32GB - 1TB SSD - NVIDIA® GeForce® RTX™ 4080 SUPER, Model - DG.E40EG.00C, Memory - 32GB, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX™ 4080 SUPER, Processor - Intel® Core™ i7-14700F, Dimensions - 21.9 x 50.4 x 48.5 cm • 17.5 kg, Operating System - Windows® 11 Home, Keyboard Language - , "
  },
  {
      "slug": "asus-laptop-asus-zenbook-pro-duo-15-6-intel-core-i7-10750h-16gb-1tb-ssd-nvidia-geforce-rtx-2060-6gb-gddr6",
      "text": "Asus ZenBook Pro Duo, Model - 90NB0RQ1-M00560, Memory - 16GB, Display - 15.6 inches (3840 x 2160), Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX 2060 (6GB GDDR6), Processor - Intel® Core™ i7-10750H, Dimensions - 35.6 x 22.5 x 2.4 cm • 2.5 kg, Operating System - Windows® 10 Pro (64 Bit), Keyboard Language - German, "
  },
  {
      "slug": "yamaha-p-45-b-digital-piano",
      "text": "Yamaha P-45B 88-Key Digital Piano, Type - Digital Piano, Model - P-45B 88-Key, Connections - DC IN, Headphones IN, Sustain Pedal IN, USB to Host, Connectivity - -, Key features - Key feel provides an authentic piano-playing experience. Recreates the real reverberation of a grand piano. Compact and light design provides for easy transportation. Simple operation with a single button., Operating mode - AC Adapter, Included Accessories - Music rest, Pedal / footswitch, AC Adapter, Amplifiers & Speakers - 2 x 6 W, 2 x 12 cm drivers, "
  },
  {
      "slug": "acer-swift-14-sfg14-63-r3xb-r7-88455hs-16gb-1tb",
      "text": "Acer Swift 14 SFG14-63-R3XB Laptop - AMD Ryzen™ 7 8845HS - 16GB - 1TB SSD - AMD Radeon™ Graphics, EAN - 4711474293367, Model - NX.KTSEG.00C, Memory - 16GB, Display - 14 inches (2880 x 1800 ), Storage - 1TB SSD, Graphics - AMD Radeon™ Graphics, Processor - AMD Ryzen™ 7 8845HS, Dimensions - 45.7 x 28.8 x 6.5 cm • 2.28 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "ps4-pro-3291",
      "text": "Playstation Pro PS4, Memory - GDDR5 8GB, Network - Ethernet, IEEE 802.11 a/b/g/n/ac, Bluetooth® 4.0, AV output - HDMI™ out port (supports 4K/HDR), digital out (optical) port, Hard drive - 1TB, Main Processor - CPU 2.1GHz x86-64 AMD “Jaguar”, 8 cores - GPU 4.20 TFLOPS, AMD Radeon™ based graphics engine, Input and output - Super-Speed USB (USB 3.1 Gen.1) port × 3, AUX port × 1, Dimensions and Weight - 29.5 × 32.7 × 5.5, 3.3 kg, "
  },
  {
      "slug": "apple-series-10-gps-cellular-titanium-case-and-milanese-band-46mm",
      "text": "Apple Watch Series 10 GPS + Cellular, Titanium Case, 46mm, Type - Apple Watch, Features - Powered by new S10 SiP, LTPO3 OLED Always-On Retina display (Wide-angle OLED, 40% brighter), Sleep Tracking, Sleep apnea notifications, Double Tap Gesture (answer a call, open a notification, play and pause music and more), Faster on-device Siri with health data access, Precision Finding for iPhone, Crash detection, Fall Detection, Heart arrhythmia, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Pair Multiple Watches with Family Setup, Apple Pay, Listen Music, Podcast, Audiobooks, Battery Life - Up to 18h / 36h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Titanium Case and Milanese Band, Music playback - Yes, Water/Dust proof - Up to 50m, Activity Tracking - Continuous Heart Rate Tracking, Steps taken, Hours slept, Resting heart rate, Target heart rate, Skin temperature, Multisport workouts; Strength training, HIIT, Pilates, Meditation, Swimming, Running, Yoga, Cycling and Other Sports, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "sony-playstation-5-fc24-disk-bundle",
      "text": "Sony PlayStation 5 Slim - FC24 Disk Bundle, CPU - x86-64-AMD Ryzen “Zen 2”, 8 Cores / 16 Threads, Variable frequency, up to 3.5 GHz, GPU - AMD Radeon RDNA 2-based graphics engine, Ray Tracing Acceleration, Variable frequency, up to 2.23 GHz, Memory - 16GB, 448GB/s Bandwidth, Weight - 3.2kg, USB Ports - USB Type-C (Super-Speed USB 10Gbps), USB Type-C (Hi-Speed USB), USB Type-A port (Super-Speed USB 10Gbps) x2, Dimensions - 96mm x 358mm x 216mm, Performance - 4K @ 60 FPS, Up to 120 FPS and 8K, Storage Type - 1TB Custom NVME SSD, Optical Drive - 4K UHD Blu-ray Player, Vertical Stand - Not included, Scope of Delivery - PlayStation®5 console, DualSense™ Wireless Controller, 1TB SSD, 2 Horizontal stand feet, HDMI® cable, AC power cord, USB cable, Printed materials, EA SPORTS FC™ 24 Disk, Expandable Storage - NVMe SSD Slot, Number of USB Ports - 4, "
  },
  {
      "slug": "samsung-dv5000c-heat-pump-dryer",
      "text": "Samsung DV5000C Heat Pump Dryer, Capacity - 8 kg, Programs - Cotton, easy-care, delicates, mixed laundry, iron-dry, hygiene, wool, outdoor, XXL laundry, towels, super short 35', drying time, cold airing, download program (shirts, air bedding care, air refresh, jeans, warm airing), Dimensions - 600 x 850 x 600 mm / 48 kg, Special features - Super Short 35´, WiFi control via app, Voice control (Bixby, Google Assistant, Alexa),, Energy Efficiency Class - A++, "
  },
  {
      "slug": "dyson-vacuum-cleaner-dyson-v15-detect-absolute",
      "text": "Dyson V15 Detect Absolute Cordless Vacuum Cleaner, Features - The laser detects otherwise invisible particles • Sensor continuously calculates the number and size of the vacuumed dust particles - and automatically increases the suction power if necessary • The LCD shows the amount and size of the vacuumed dust particles in real time • Dyson Hyperdymium™ motor • Root Cyclone™ Technology • Three suction modes: Eco, Auto, Boost • Easy maintenance: The filter and Fluffy™ brush bar are washable and the dust container and floor nozzles can be wiped clean, Dimensions - 1205 x 26.6 x 25 cm • 2.74 kg, Box contents - Dyson V15 Detect Absolute, Torque Drive floor nozzle, Slim Fluffy Laser with dust detection, hair nozzle, extra hard brush, crevice nozzle, combination accessory nozzle, extra soft brush, Dyson Flex adapter, accessory holder for the suction tube, wall mount, charger, Running time - Up to 60 min, FLOOR NOZZLES - Torque-Drive floor nozzle (with protection against tangled hair), Slim fluffy laser with dust detection, SUCTION POWER - 240 AW, DUST CONTAINER - Bagless, 0.77 L, "
  },
  {
      "slug": "dyson-pure-cool-me-luftreiniger",
      "text": "Dyson Pure Cool Me BP01 Purifier, Modus - Sleep timer, fan, Range - Rotates up to 70˚, Filter - HEPA filters remove 99.95% of the ultra-fine particles such as allergens and pollutants, Dimensions - 27.3 x 40.1 x 27.3 cm • 2.8 kg, Device Type - Desk fan, Special Features - LCD display • Remote control • Quiet Mark Excellent • Core Flow technology with focused airflow for personal use, Scope of delivery - 1x Dyson Pure Cool Me, 1x remote control, 1x instruction manual, "
  },
  {
      "slug": "huawei-headphones-huawei-freeclip-noise-cancelling-in-ear-bluetooth-headphones",
      "text": "Huawei FreeClip Headphones, Battery - Up to 8 + 32h (case charging), Sensors - VPU sensor/IMU sensor/Hall sensor/CAP sensor, Connections - USB-C, Key features - C-bridge design, Open ear listening Technology, Auto left-right recognition, Gesture controls,, Noise canceling - Yes, Wireless charging - N/A, Water/splash resistant - IPX4, Outstanding Functionality - Dual-device connections, Fast charging, "
  },
  {
      "slug": "oculus-quest-vr-128gb",
      "text": "Oculus Quest 128 GB VR Headset, Battery - 3h Battery, Sensors - Oculus Insight tracking system (no external sensors), Speicher - 128 GB, Resolution - 1600 x 1440 Pixel per eye, Connections - USB-C charging port, Controllers - 2 touch controllers, Display type - OLED, Refresh rate - 72 Hz, "
  },
  {
      "slug": "lg-vacuum-cleaner-lg-vcc-a9t-ultra1c",
      "text": "LG A9T-ULTRA1C Cordless Vacuum Cleaner, Filter type - 3-stage, Maximum power - 200 watts, Special features - Dual battery: 2 batteries for twice the running time (up to 120 minutes) • 3 different suction levels • Extendable telescopic tube • Dust compressor: up to 2.4x more content by compressing the dust container • ThinQ® • Smart Inverter Motor® • All-in-One Tower • Automatic emptying • Dual battery charging station: charge 2 batteries at the same time • Integrated storage space for accessories and attachments • UVC LED: prevents bacterial growth in the dust bag • Wiping attachment with rotating wiping pads and simultaneous suction, Scope of delivery - CordZero®, All-in-One Tower, DUAL battery, carpet attachment, hard floor attachment, pet hair attachment, mop attachment, 2 in 1 combination accessories, grout attachment, instruction manual, Maximum operating time - 120 min, Maximum volume of the dust container - 0.44 l, "
  },
  {
      "slug": "lenovo-500e-yoga-chrome-gen-4-n200-8gb-64gb",
      "text": "Lenovo 500e Yoga Chrome Gen 4 Laptop - Intel® N-Series-N200 - 8GB - 64GB SSD - Intel® Intel® UHD Graphics, Model - 82W5CTO1WW, Memory - 8GB, Display - 12.2 inches (1920 x 1200), 60HZ, Storage - 64GB SSD, Graphics - Intel® Intel® UHD Graphics, Processor - Intel® N-Series-N200, Dimensions - 28.7 x 20.8 x 1.89 cm • 1.32 kg, Operating System - Chrome OS™, Keyboard Language - German, "
  },
  {
      "slug": "dyson-305162-01-pure-cool-link-turm-4989",
      "text": "Dyson Pure Cool Link Tower, Modus - Night-time mode, ventilator, Filter - HEPA filters capture 99.95% of fine particles such as allergens and pollutants, Delivery - Dyson Pure Cool Link Tower, Remote Control, Special features - Monitor air with the Dyson Link App • Remote control • Quiet Mark certification • Automatically monitors air quality • Schedule, "
  },
  {
      "slug": "google-smartphone-google-pixel-9-pro-xl-16gb-512gb",
      "text": "Google Pixel 9 Pro XL Smartphone - 512GB - Dual SIM, Memory - 16GB, Battery - 5060 mAh, Display - 6.8-inch LTPO - OLED (1344 × 2992), Storage - 512GB, Processor - , Dimensions - , Rear Camera - 50MP+48MP+48MP, Connectivity - 5G, Front Camera - 42MP, Operating System - Android 14, "
  },
  {
      "slug": "dyson-hair-care-dyson-corrale-hair-straightener",
      "text": "Dyson Corrale Hair Straightener, Power - 200W, Safety - Overheating protection, automatic switch-off after 10 minutes, Display - Yes, Equipment - Automatic voltage adjustment 110-230V, Accessories - Bag, charging station, Heat levels - 3, Cable length - 4.3m, Temperature range - 165-210°C, "
  },
  {
      "slug": "microsoft-surface-pro-x-13-2in1-platin-sq2-16gb-512gb-keyboard-pen",
      "text": "Microsoft Tablet, Surface Pro X Convertible with Keyboard and Pen (Bundle) - LTE - Windows - 512GB, Memory - 16GB, Battery - 5170 mAh, Display - 13-inch PixelSense ™ (2880 x 1920), Storage - 512GB, Processor - Qualcomm Microsoft SQ® 2, Dimensions - 20.8 x 28.8 x 0.73 cm (0.77kg), Rear Camera - 10MP, Connectivity - LTE, Front Camera - 5MP, Operating System - Windows® 10 Home (64 Bit), "
  },
  {
      "slug": "hp-24-cr1002ng-ultra-5-125u-16gb-512gb",
      "text": "Hp 24-cr1002ng All-in-One - Intel® Core™ Ultra 5-125U - 16GB - 512 GB - Intel® Intel® Arc™, EAN - 198415227775, Model - A45CREA#ABD, Memory - 16GB, Display - 24 inches (1920 x 1080), Storage - 512 GB, Graphics - Intel® Intel® Arc™, Processor - Intel® Core™ Ultra 5-125U, Dimensions - 54 x 18.6 x 48.5 cm • 5.53 kg, Operating System - Windows® 11 Home, Integrated Camera - 1080p, Full HD, Keyboard Language - German, Sustainable technologies and materials - 40% recycled household plastic; water-based paint; plastic that would otherwise end up in the sea; 10% recycled material, "
  },
  {
      "slug": "msi-mpg-infinite-x2-14nug7-460at-i7-32gb-1tb",
      "text": "MSI MPG Infinite X2 14NUG7-460AT Gaming Desktop - Intel® Core™ i7-14700F - 32GB - 1TB SSD - NVIDIA® GeForce® RTX™ 4080 SUPER, Storage media - SSD, Internal memory - 32 GB, Processor model - i7-14700KF, Processor family - Intel® Core™ i7, Total storage capacity - 1 TB, Discrete graphics card model - NVIDIA GeForce RTX 4080 SUPER, "
  },
  {
      "slug": "samsung-ww8400d-washing-machine",
      "text": "Samsung WW8400D Washing Machine, Capacity - 9 kg, Controls - xRotary knob and touch buttons on the device, control via app and voice control Voice Assistant (Alexa, Google Assistant, Bixby), Programs - Eco 40-60, Cotton, AutoOptimal Wash, Baby Care Intensive, Cold Wash Intensive, Coloureds, Easy-care, Delicates, Wool, Towels, XXL Laundry, Hygiene Steam Program, Outdoor, Sportswear, Jeans, Shirts, SuperSpeed ​​39 Min., Quick Wash 15', Microplastics Program, Super Quiet, Cloudy Day, Drum Clean+, Rinse & Spin, Drain/Spin, Dimensions - 600 x 850 x 600 mm / 69 kg, Spin speed max. - 1400/​min, Special features - AI sorting of programs based on washing habits, AI program suggestions based on washing habits or weather data, WiFi control via app, AI Energy Mode - automatically save energy, Textile type detection, Energy Efficiency Class - A, Energy Consumption (100 cycles) - 35 kWh, "
  },
  {
      "slug": "apple-smartphone-iphone-se-2022-4gb-64gb",
      "text": "Apple iPhone SE (2022) - 64GB - Dual SIM, Memory - 4GB, Battery - 2018 mAh, Display - 4.7-inch Retina IPS LCD (750 x 1334), Storage - 64GB, Processor - Apple A15 Bionic, Dimensions - 6.73 x 13.8 x 0.73 cm (0.144kg), Rear Camera - 12MP, Connectivity - 5G, Front Camera - 7MP, Operating System - iOS 15.4, "
  },
  {
      "slug": "samsung-vacuum-cleaner-samsung-jet-75-complete",
      "text": "Samsung Jet 75 Complete Cordless Vacuum Cleaner, FILTER - 5-stage HEPA filtration system, DIMENSIONS - 25 x 113 x 21.5 cm • 2.8 kg, Accessories - 2-in-1 combination nozzle •  Telescopic crevice nozzle • Mini turbo brush • Flexible tool, BRUSH TYPES - Soft Action Brush (hard floors) • Turbo Action Brush (hard floors and carpets), 180-degree swivel joint, easy cleaning, RUNNING TIME - 6min / 30min / 60min (max./ mid./min.), SUITABLE FOR - Hard flooring, High-pile carpet, Low-pile carpet, Wood flooring, Allergies, Pet hairs, SUCTION POWER - Up to 200W, SPECIAL FEATURES - Strong engine power and high suction power thanks to Digital Inverter Motor and Jet Cyclone • Lightweight design • 2-in-1 charging station can either be mounted on the wall or used as a free-standing charging station for the battery • Digital display • Washable dust container, VOLUME OF THE DUST BIN - 0.8 L, "
  },
  {
      "slug": "dreame-vacuum-cleaner-dreame-w10",
      "text": "Dreame W10 Self Cleaning Robot and Mop, Control - App, Amazon Alexa, Google Assistant, Runtime - 150 min, Dimensions - 32 x 10.5 x 32 cm / 3.7 kg robot, 10 kg base station, Filter Type - HEPA, Suitable For - Parquet Floors, Hardwood Floors, Pets, Laminates, Stone Floors, Carpets, Suction Power - 4,000 Pa, Delivery Scope - 1 robot duster, 1 charging and self-cleaning station, 1 dust container, 1 pure water tank, 1 cleaning tool, user manual, Mopping Function - Yes, Special Features - When the mop pads are dirty, the W10 returns to the base independently and has them cleaned • Automatic drying system • LDS lidar laser • New SLAM intelligent algorithm, Volume of the Water Tank - 0.45L, Volume of the Dust Container - 0.45L, "
  },
  {
      "slug": "lg-dryer-lg-dryer-rt80v9",
      "text": "LG RT80V9 Heat Pump Tumble Dryer, Design - Standing device, column-compatible, Capacity - 8kg, Programs - Allergy, cotton+, bed linen, download, delicates, towels, whites/​coloreds, basket program, short 30min, mix, easy-care, sport, drying/​airing warm, wool, Door stop - Right, changeable, Dimensions - 690 x 850 x 600mm / 57kg, Smart Home - App control, Noise level - 62dB(A), Refrigerant - R290, Special features - Program progress display, remaining time display, child safety lock, maintenance instructions (lint filter, filter), Standard program - 181min, Additional options - Crease protection at the end of the program, start/​pause, Energy consumption - 176kWh/​year, Energy efficiency class - A+++ (A+++ to D), Condensation efficiency class - A (A to G), "
  },
  {
      "slug": "hp-15-fc0035ng",
      "text": "HP 15-fc0035ng Laptop - AMD Ryzen™ 3 1335U - 8GB - 512GB SSD - AMD Radeon® 610M, Model - 7N2G9EA#ABD, Memory - 8GB, Display - 15.6 inches (1920 x 1080), Storage - 512GB SSD, Graphics - AMD Radeon® 610M, Processor - AMD Ryzen™ 3 1335U, Dimensions - 35.98 x 23.6 x 1.86 cm • 1.6 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "insta360-one-r-1-inch-edition-actioncam",
      "text": "Insta360 One R 1-Inch Edition Actioncam, "
  },
  {
      "slug": "amazon-e-reader-kindle-2022-16gb",
      "text": "Amazon Kindle (2022) E-Reader -  6\" - 16GB, TYPE - E-reader, DISPLAY - 6” E-ink touch screen, FEATURES - Compact and slim design, glare-free, paper-like display, adjustable front light (4 LEDs) and dark mode, Upgraded high resolution display, USB-C for fast charging and data transfer, Bluetooth for audiobooks and text-to-speech, Battery Life - Up to 6 weeks, CONNECTIVITY - Wi-Fi, USB-C, Bluetooth, STORAGE CAPACITY - 16GB, DISPLAY RESOLUTION - 300ppi, DIMENSIONS / WEIGHT - 157.8 x 108.6 x 8.0 mm / 158g, SUPPORTED MEDIA FORMATS - Kindle Format 8 (AZW3), Kindle (AZW), TXT, PDF, unprotected MOBI, PRC natively; PDF, DOCX, DOC, HTML, EPUB, TXT, RTF, JPEG, GIF, PNG, BMP through conversion; Audible audio format (AAX), "
  },
  {
      "slug": "lenovo-thinkpad-e14-g5-i7-13700h-16gb-512gb",
      "text": "Lenovo ThinkPad E14 G5 Laptop - Intel® Core™ i7-13700H - 16GB - 512GB - Intel® Iris® Xe Graphics, Model - 21JK00DJGE, Memory - 16GB, Display - 14 inches (1920 x 1200), Storage - 512GB, Graphics - Intel® Iris® Xe Graphics, Processor - Intel® Core™ i7-13700H, Dimensions - 36 x 27.9 x 2.8 cm • 2.6 kg, Operating System - Windows® 11 Pro, Keyboard Language - German, "
  },
  {
      "slug": "samsung-smartphone-samsung-galaxy-s21-ultra-256gb",
      "text": "Samsung Galaxy S21 Ultra Smartphone - 256GB - Dual Sim, Memory - 12GB, Battery - 5000mAh, Display - 6.8-inch Dynamic AMOLED (1440 x 3200), Storage - 256GB, Processor - Samsung Exynos 2100, Dimensions - 7.6 x 16.5 x 0.9 cm (0.23kg), Rear Camera - 108MP + 12MP + 10MP + 10MP, Connectivity - 5G, Front Camera - 40MP, Operating System - Android™ 11, "
  },
  {
      "slug": "asus-monitor-asus-vp28uqgl-28-90lm03m0-b02170",
      "text": "Asus - 28\" VP28UQGL (SOLD) 90LM03M0-B02170, Model - 90LM03M0-B02170, Display - TN 28 inches (3840 x 2160), 60Hz, Dimensions - 66 x 22.6 x 67.3 cm • 7.4 kg, Connectivity - 2x HDMI(v2.0), 1x DisplayPort, 1x Headphone Out, Response Time - 1ms, High Dynamic Range (HDR) - No, "
  },
  {
      "slug": "apple-13-ipad-pro-2024-wi-fi-cellular-8gb-512gb",
      "text": "Apple 13\" iPad Pro (2024) - Wi-Fi + Cellular - M4 - 512GB, Memory - 8GB, Battery - 38,99 Wh, Display - 13-inch Ultra Retina XDR display (2752 x 2064), Storage - 512GB, Processor - Apple M4, Dimensions - 22.75 x 29.55 x 3.15 cm (0.96kg), Rear Camera - 12MP, Connectivity - Wi-Fi + Cellular, Front Camera - 12MP, Operating System - iOS, "
  },
  {
      "slug": "dyson-hair-care-dyson-corrale-cordless-hair-straightener",
      "text": "Dyson Corrale Cordless Hair Straightener, Drive - 4-cell lithium-ion battery, Power - 200W, Voltage - 10.8V-16.8V, Dimensions - 45 x 292 x 41mm / 0.561kg, Cable length - 4.34m, OLED Display - Shows battery level, temperature and charging status, Bending Plates - Manganese Copper Alloy, Special features - OLED display, Multi-style, Suitable for all hair types, Up to 30 minutes of cordless styling, Fully recharges in just 70 minutes, Charging station, Wired hair styling for longer runtime, Auto shut-off and safety lock, Universal voltage, Intelligent temperature regulation, Scope of delivery - Dyson Corrale hair straightener, charging station, heat-resistant travel bag, magnetic 360° charging cable, Temperature setting - 165ᵒC, 185ᵒC, 210ᵒC, "
  },
  {
      "slug": "lg-monitor-lg-24-24bp450s-b-aeu",
      "text": "LG - 24\" 24BP450S Full HD (1920x1080) IPS Monitor 24BP450S-B.AEU, Model - 24BP450S-B.AEU, Display - IPS 23.8 inches (1920 x 1080), Dimensions - 53.99 x 24.95 x 50.6 cm • 4.3 kg, Connectivity - 1x HDMI in, 1x DisplayPort in, (DisplayPort version: 1.2), 1x VGA in, 1x 3.5mm audio in, 1x headphone out, Response Time - 5ms, High Dynamic Range (HDR) - No, "
  },
  {
      "slug": "apple-smartphone-iphone-16-plus-8gb-256gb",
      "text": "Apple iPhone 16 Plus - 256GB - Dual SIM, Memory - 8GB, Battery - 4006 mAh, Display - 6.7-inch OLED Super Retina XDR (2796 x 1290), Storage - 256GB, Processor - , Dimensions - , Rear Camera - 48MP + 12MP, Connectivity - 5G, Front Camera - 12MP, Operating System - iOS 18, "
  },
  {
      "slug": "apple-series-10-gps-cellular-titanium-case-and-sport-band-46mm",
      "text": "Apple Watch Series 10 GPS + Cellular, Titanium Case, 46mm, Type - Apple Watch, Features - Powered by new S10 SiP, LTPO3 OLED Always-On Retina display (Wide-angle OLED, 40% brighter), Sleep Tracking, Sleep apnea notifications, Double Tap Gesture (answer a call, open a notification, play and pause music and more), Faster on-device Siri with health data access, Precision Finding for iPhone, Crash detection, Fall Detection, Heart arrhythmia, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Pair Multiple Watches with Family Setup, Apple Pay, Listen Music, Podcast, Audiobooks, Band Size - M/L, Battery Life - Up to 18h / 36h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Titanium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 50m, Activity Tracking - Continuous Heart Rate Tracking, Steps taken, Hours slept, Resting heart rate, Target heart rate, Skin temperature, Multisport workouts; Strength training, HIIT, Pilates, Meditation, Swimming, Running, Yoga, Cycling and Other Sports, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "apple-mac-m1-mini",
      "text": "Mac Mini Desktop - Apple M1 Chip 8GB Memory 256GB SSD - Integrated 8-core GPU, Model - MGNR3D/A, Memory - 8GB, Storage - 256GB SSD, Graphics - Apple Integrated 8-core GPU, Processor - Apple M1, Dimensions - 19.7 x 19.7 x 3.6 cm • 1.2 kg, Operating System - macOS, Keyboard Language - -, "
  },
  {
      "slug": "asus-laptop-asus-rog-zephyrus-m-15-6-intel-core-i7-10750h-8gb-1tb-ssd-nvidia-geforce-rtx-2070-8gb",
      "text": "Asus ROG Zephyrus M - Gaming Laptop - Intel® Core™ i7-10750H - 16GB - 1TB SSD - NVIDIA® GeForce® RTX™ 2070 (8GB), Model - 90NR02W2-M02520, Memory - 16GB, Display - 15.6 inches (1920 x 1080), 240Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX™ 2070 (8GB), Processor - Intel® Core™ i7-10750H, Dimensions - 36 x 25.2 x 1.89 cm • 1.9 kg, Operating System - Windows® 10 Home (64 Bit), Keyboard Language - German, "
  },
  {
      "slug": "asus-monitor-asus-mb16ah-mobile-monitor-usb-ips-16-90lm04t0-b02170",
      "text": "Asus - 16\" MB16AH Mobile-Monitor USB IPS 90LM04T0-B02170, Model - 90LM04T0-B02170, Display - IPS 16 inches (1920 x 1080), Dimensions - 36 x 1 x 22.7 cm • 0.73 kg, Connectivity - 1x Micro HDMI 1.4, 1x USB-C, DisplayPort, Response Time - 5ms, High Dynamic Range (HDR) - No, "
  },
  {
      "slug": "razer-blade-18-2025-ultra9-32gb-1tb-rtx-5080",
      "text": "Razer Blade 18 (2025) Gaming Laptop - Intel® Core™ Ultra 9-275HX - 32GB - 1TB SSD - NVIDIA® GeForce® RTX™ 5080, Model - RZ09-05298GR3-R3G1, Memory - 32GB, Display - 18 inches (3840 x 2400), 120Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5080, Processor - Intel® Core™ Ultra 9-275HX, Dimensions - 40 x 27.5 x 2.2 cm • 3.1 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "lenovo-14e-chromebook-gen-3-n200-8gb-128gb",
      "text": "Lenovo 14e Chromebook Gen 3 Laptop - Intel® N-Series-N200 - 8GB - 128GB SSD - Intel® Intel® UHD Graphics, Model - 82W7CTO1WW, Memory - 8GB, Display - 14 inches (1920 x 1200), Storage - 128GB SSD, Graphics - Intel® Intel® UHD Graphics, Processor - Intel® N-Series-N200, Dimensions - 32.44 x 21.62 x 1.69 cm • 1.5 kg, Operating System - Chrome OS™, Keyboard Language - German, "
  },
  {
      "slug": "marshall-woburn-iii-bluetooth-speaker",
      "text": "Marshall Woburn III , Type - Bluetooth Speaker, Model - Woburn III, Frequency - 35Hz - 20kHz, Connections - 3.5 mm jack. RCA input. HDMI input, Connectivity - Bluetooth 5.2, Technologies - PVC-free, made from 70% recycled plastic and only vegan materials, Operating mode - Wireless, Special features - Woburn III has an even wider soundstage than its predecessor. It has been redesigned with a new three-way driver system that delivers more controlled low end and greater clarity in the midrange. The new Woburn generation features outward-angled tweeters and updated waveguides to deliver consistently solid sound that is expansive enough to be experienced throughout the room. In addition, Woburn III features Dynamic Loudness, which adjusts the tonal balance of the sound so your music sounds brilliant at any volume. When you connect HDMI, night mode reduces loud sounds and keeps quiet sounds audible. Your neighbors won't complain anymore either., "
  },
  {
      "slug": "garmin-fenix-e-smartwatch-stainless-steel-47mm",
      "text": "Garmin fēnix® E Smartwatch, Stainless Steel, 47mm, Type - GPS-Multisport-Smartwatches, Features - Scratch-resistant Corning® Gorilla® Glass, Multisport smartwatch with AMOLED display, Stay on track with international topographic maps and preloaded golf and ski maps, Tailored training plans for different sports, Assess your training readiness based on training load, recovery, sleep and health data, Dynamic Roundtrip Routing for Staying on Track, Monitor your HRV, sleep, respiratory rate, Pulse Ox3, Easily Share Routes, Workouts, and Locations with Garmin-Compatible Products, Endurance value for different sports, Minimize Jetlag effects with Jetlag advisor, Track your uphill running progress with Hillscore, Smart Features (receive calls, messages, weather updates, save and play songs from compatible services (Garmin Music, Spotify, Youtube Music, Deezer Amazon Music), Morning report (sleep summary, HRV status along with daily training recommendations), Pay contactless with Garmin Pay, Train with Animated workours and Garmin coach, Communicate without mobile signal with Inreach Compatability share your location, or send SOS alerts via the Iridium satellite network, Band Size - L, Battery Life - Up to 42h in GPS mode / 16 days in Smartwatch mode, Connectivity - GPS, NFC, Bluetooth®, WiFi, Compatibility - Android / iOS, Build Material - Stainless Steel and Silicone Band, Music playback - Yes, Water/Dust proof - Up to 10 ATM, Activity Tracking - 80+ Sports/Outdoor apps (Running, Mountain biking, Team sports), Activity vs. inactivity, Altitude changes, Blood oxygen, Heart Rate, Breathing patterns, Cadence, Calories burned, Cycling speed, Distance swam, Distance traveled, Duration of exercise, Heart rate, Laps swam, Pace, Speed, Stairs climbed, Steps taken, Global Positioning - GPS, NFC, GLONASS, "
  },
  {
      "slug": "samsung-soundbar-samsung-hw-s61a-zg",
      "text": "Samsung HW-S61A/ZG Soundbar, WiFi - Yes, Delivery - Soundbar, wall bracket, HDMI cable, quick start guide, remote control, Bluetooth - Yes, Components - 5.0 Soundbar, Connections - Digital audio input (optical), Anynet + (HDMI ™ -CEC), Bluetooth 4.2, WiFi, Total Power - 200 watt, Product type - Soundbar, Special features - 5.0-channel system in all-in-one design with 7 integrated speakers including center speaker, Room-filling sound thanks to Samsung Acoustic Beam technology with side horn speakers, TV and soundbar speakers in impressive harmony thanks to Q-Symphony, Noble textile design in matt black that merges with your interior design, Smart operation thanks to the integrated Alexa voice assistant and Airplay 2 support, Number of channels - 5.0, Signal transmission - Wireless, Wired, "
  },
  {
      "slug": "lenovo-laptop-lenovo-thinkpad-x1-fold-gen-1-13-3-intel-core-i5-l16g7-8gb-512gb-ssd-intel-uhd-graphics",
      "text": "Lenovo ThinkPad X1 Fold G1 Laptop - Intel® Core™ i5-L16G7 - 8GB - 512GB SSD - Intel® UHD Graphics, Model - 20RL000GGE, Memory - 8GB, Display - 13.3 inches (2048 x 1536), Storage - 512GB SSD, Graphics - Intel® UHD Graphics, Processor - Intel® Core™ i5-L16G7, Dimensions - 15.8 x 23.56 x 2.78 cm • 0.99 kg, Operating System - Windows® 10 Pro (64 Bit), Keyboard Language - German, "
  },
  {
      "slug": "acer-m511-projector",
      "text": "Acer M511 Projector - Full HD, Brightness - 4300 ANSI lumens, Connections - USB, Composite video, 1xVGA, 1x Audio input, 1x Audio output, Audio line in, Audio line out, Aspect ratio - 16:9, Picture quality - Full HD, Projection size - -, 3D functionality - No, Special features - , Screen resolution - 1920 x 1200 pixels, Projection distance - 1.00 - 10.00 m, "
  },
  {
      "slug": "huawei-gt4-stainless-steel-case-and-black-fluorolastomer-strap-46mm",
      "text": "Huawei Watch GT4 Smartwatch, Stainless Steel Case, 46mm, Type - Smartwatch, Features - High resolution AMOLED display, 100+ Workout Modes, Bluetooth calling, message viewing&notification, Physical button, Band Size - M/L, Battery Life - Up to 14 days, Connectivity - GPS, NFC, Bluetooth 5.2, WiFi, Compatibility - Android 6.0 or later / iOS 9.0 or later, Build Material - Stainless Steel Case and Black Fluorolastomer Band, Music playback - Yes, Water/Dust proof - 5 ATM / IP68, Activity Tracking - Step counting, activity reminders, heart rate detection, stress monitoring, breathing exercises, sleep monitoring, irregular heart rate alerts, SpO2,healthy living, skin temperature measurement, etc, Global Positioning - GPS, Beidou, GLONASS, Galileo, QZSS, "
  },
  {
      "slug": "nikon-z-100-400mm-s",
      "text": "Nikon Z 100-400mm f/4.5-5.6 VR S, Focus - Autofocus, Mount - Nikon Z mount, Weight - 3.2 lb / 1435 g, Aperture - F/4.5 to F/40,  12 blades, Dimensions - 3.9 x 8.7\" / 98 x 222 mm (ø x L), Filter size - 77mm, Lens format - Full Frame, Focal length - 100mm to 40mm, Image stabilizer - Yes, Scope of delivery - Nikkor Z 100-400mm f/4.5-5.6 VR S lens, Front and rear lens caps, Lens hood, "
  },
  {
      "slug": "asus-monitor-asus-eye-care-24-vp247hae",
      "text": "Asus - 24\" Eye Care VP247HAE, Model - VP247HAE, Display - VA 23.6 inches (1920 x 1080), Dimensions - 56.11 x 40.1 x 19.9 cm • 3.4 kg, Connectivity - HDMI, VGA, Response Time - 5ms, High Dynamic Range (HDR) - No, "
  },
  {
      "slug": "alesis-musical-instrument-alesis-recital-pro",
      "text": "Alesis Recital Pro Digital Piano, Type - Digital Piano, Model - Recital Pro, Connections - 1x USB-MIDI output, 1x 6.3 mm jack input (Sustain), 3x 6.3 mm Kline outputs (2 x master, 1 x headphones), USB, Connectivity - N/A, Key features - 88 keys hammer action keyboard with adjustable velocity, built-in recording function, 128-note polyphony, Metronome (30-280 BPM), Effects (modulation, reverb, chorus), 12 built-in premium sounds with split function and layering (acoustic piano, acoustic piano (light), electric piano, Vibraphone, organ, Church organ, harpsichord, Clavi. Synth, Strings, acoustic bass, double bass., Operating mode - Plug-in, "
  },
  {
      "slug": "hp-27-cr1000ng-ultra-7-125u-16gb-512gb",
      "text": "Hp 27-cr1000ng All-in-One - Intel® Core™ Ultra 5-125U - 16GB - 512 GB - Intel® Intel® Arc™, Model - A45F5EA#ABD, Memory - 16GB, Display - 27 inches (1920 x 1080), Storage - 512 GB, Graphics - Intel® Intel® Arc™, Included - Keyboard & Mouse (white, wireless), Processor - Intel® Core™ Ultra 5-125U, Dimensions - 61.3 x 18.6 x 51.7 cm • 6.7 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "lg-washer-dryer-lg-washdryer-v7wd906a",
      "text": "LG V7WD906A Washer Dryer Combo, Design - Standing device, Capacity - 9kg washing / 6kg drying, Programs - AllergyCare, Refresh with steam, Download, Eco 40-60°C, Delicates, Cottons, Mix, Dry only, Easy care, Quick 14min, Drum cleaning, TurboWash 39min, Wash & Dry - 6kg, Wool/​Hand wash, Dimensions - 600 x 850 x 565 mm / Weight: 73 kg, Smart Home - App control, Noise level - 71dB(A), Spin speed max. - 1400/​min, Special features - Remaining time display, start time preselection (19h), AquaStop (Aqua Lock), child safety device, imbalance control, automatic quantity control, machine care program, Additional options - Intensive, cold wash, no spin cycle, rinse+, start/​pause with refill function, TurboWash, prewash, Spin efficiency class - A (A to G), Energy efficiency class old - A (A+++ to D), "
  },
  {
      "slug": "google-pixel-watch-3-smartwatch-aluminium-case-45mm",
      "text": "Google Pixel Watch3 Smartwatch, Aluminium Case, 45mm, Type - Smartwatch, Features - Glance on the go with the larger Actua display, All-day battery life (with always-on display) & faster loading time, Detects loss of pulse and alerts emergency services, Balance activity and rest with readiness insights, Feel safe thanks to Security check feature, Google Wallet, Recycled, premium stainless steel finish, All the information you need is right on your wrist (Gmail, Google Calendar and Google Wallet), On-wrist calls, Fall Detection, Emergeny SOS, Battery Life - Up to 24h, Connectivity - Bluetooth®, Wi-Fi, NFC, Compatibility - Compatible with most phones running on Android 10.0 or newer, Build Material - Aluminium Case and Fluoroelastomer Band, Music playback - Yes, Water/Dust proof - 5 ATM / IP68, Activity Tracking - All-day Activity Tracking (steps, distance & calories),Track run performance and 40+ exercises (HIIT, spinning and rowing and more), Daily Readiness Score, Continuous Heart Rate Tracking, Activity vs. inactivity, Global Positioning - GLONASS, GPS, BeiDou (BDS), Galileo, "
  },
  {
      "slug": "samsung-monitor-samsung-s34j550wqr-34-ls34j550wqrxen",
      "text": "Samsung - 34\" S34J550WQR LS34J550WQRXEN, Model - LS34J550WQRXEN, Display - VA 34 inches (3440 x 1440), Dimensions - 82.81 x 24.28 x 47.08 cm • 6.9 kg, Connectivity - 2x HDMI, 1x DisplayPort, 1x Headphone Out, Response Time - 4ms, High Dynamic Range (HDR) - No, "
  },
  {
      "slug": "laptop-hp-chromebook-11a-nb0210ng-11-6-intel-celeron-n4000-4gb-32gb-emmc-intel-uhd-graphics",
      "text": "HP Chromebook 11a-nb0210ng Laptop - Intel® Celeron®-N4000 - 4GB - 32GB eMMC - Intel® UHD Graphics, Model - 187S5EA, Memory - 4GB, Display - 11.6 inches (1366 x 768), Storage - 32GB eMMC, Graphics - Intel® UHD Graphics, Processor - Intel® Celeron®-N4000, Dimensions - 30.6 x 20.8 x 1.8 cm • 1.36 kg, Operating System - Chrome OS™, Keyboard Language - German, "
  },
  {
      "slug": "lg-washing-machine-lg-f6w105a-frontlader",
      "text": "LG F6W105A Washing Machine , Depth - 565 mm, Width - 600 mm, Height - 850 mm, Weight - 70 kg, Half-load - , Control type - Rotary, Touch, Rated capacity - 10.5 kg, Washing programs - Hygiene/anti-allergy, Cotton, Eco, Wool, Intensive/outdoor, Night, Quick, Sport, Steam, Hot colour, Delicate/silk, Wi-Fi controlled - Yes, Maximum spin speed - 1600 RPM, Noise level (spin) - 73 dB, Noise level (wash) - 54 dB, Appliance placement - Freestanding, Noise emission class - B, Adjustable spin speed - Yes, Energy efficiency class - A, Energy efficiency scale - A to G, Remaining time indication - Yes, Energy consumption per 100 cycles - 53 kWh, "
  },
  {
      "slug": "sigma-16-28mm-f-2-8-dg-dn-contemporary-sony-fe-mount",
      "text": "Sigma 16-28mm f/2.8 DG DN Contemporary Sony FE mount, "
  },
  {
      "slug": "asus-graphics-card-asus-geforce-rtx-3070-ti-rog-strix-8g-lhr",
      "text": "Asus GeForce RTX 3070 Ti ROG Strix 8G LHR Graphics Card, Memory - 8GB GDDR6X, Dimensions - 31.85 x 14.01 x 5.8 cm • 1 kg, Boost Clock Speed - 1,800 MHz, "
  },
  {
      "slug": "shark-neverchange-hp150eu-air-purifier",
      "text": "Shark NeverChange HP150EU Air Purifier, Capacity - 60 m² (single air exchange per hour) / 12 m² (4.8 air exchanges per hour)., Dimensions - 237 x 266 x 385 mm / 3.3 kg, Filter type - HEPA Filter, Special features - 5 speed settings, Anti-Allergene, no filter replacement is necessary for up to 5 years, Scope of delivery - Main unit, NeverChange HEPA Filter, Anti-Odour Cartridge, Product description - Powerful cleaning and odor neutralization with an air purifier that automatically monitors air quality for better air and adjusts cleaning performance. Thanks to the Shark NeverChange5 filter system, no filter replacement is necessary for up to 5 years - that means up to €200 less on filter replacement costs. The 4-stage filter captures 99.97% of all allergens and irritants. Anti-odor technology releases a fresh scent when cleaning and neutralizes up to twice as many odors for a fresh-smelling home, "
  },
  {
      "slug": "google-smartphone-google-pixel-9-pro-16gb-512gb",
      "text": "Google Pixel 9 Pro Smartphone - 512GB - Dual SIM, Memory - 16GB, Battery - 4700 mAh, Display - 6.3-inch LTPO - OLED (1280 x 2856), Storage - 512GB, Processor - , Dimensions - , Rear Camera - 50MP+48MP+48MP, Connectivity - 5G, Front Camera - 42MP, Operating System - Android 14, "
  },
  {
      "slug": "lenovo-thinkpad-x1-2-in-1-g9-ultra7-155u-32-1tb",
      "text": "Lenovo ThinkPad X1 2-in-1 G9 Laptop - Intel® Core™ Ultra 7-155U - 32GB - 1TB SSD - Intel® Integrated Intel® Graphics, Model - 21KE0065GE, Memory - 32GB, Display - 14 inches (1920 x 1200), 60Hz, Storage - 1TB SSD, Graphics - Intel® Integrated Intel® Graphics, Processor - Intel® Core™ Ultra 7-155U, Dimensions - 31.2674 x 21.7678 x 1.54 cm • 1.35 kg, Operating System - Windows® 11 Pro, Keyboard Language - German, "
  },
  {
      "slug": "apple-macbook-air-13-m3-8cpu-8gb-512gb-10gpu-eng",
      "text": "MacBook Air 13\" - Apple M3 Chip 8GB Memory 512GB SSD - Integrated 10-core GPU, Model - MRXP3F/A, Memory - 8GB, Display - 13.6 inches (2560 x 1664), Storage - 512GB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M3, Dimensions - 30.41 x 21.5 x 1.13 cm • 1.24 kg, Operating System - macOS, Keyboard Language - English, "
  },
  {
      "slug": "thrustmaster-t150-rs-steering-wheel-2-pedal-set",
      "text": "Thrustmaster T150 RS Steering Wheel + 2 Pedal Set, Device type - Steering wheel + Pedals, Size (imperial) - 27.9 cm (11\"), Device interface - USB, Housing material - Plastic, Rubber, Connectivity technology - Wired, Gaming platforms supported - PC, PlayStation 4, Playstation 3, Gaming control function buttons - D-pad, Windows operating systems supported - Yes, "
  },
  {
      "slug": "focusrite-scarlett-2i2-4th-gen-dj-studio-equipment",
      "text": "Focusrite Scarlett 2i2 (4th Gen) Audio Interface, Type - Audio Interface, Model - Scarlett 2i2 (3rd Gen), Connections - 2 mic/instrument/line inputs: balanced XLR/1/4in jack combo. 2 line outputs: 1/4in jack balanced. Stereo headphone output: 6.3 mm jack. USB-C connection, Connectivity - USB bus powered, No of channels - 2-channel, Special features - 69dB mic gain range, 120dB dynamic range, Auto Gain, Clip safe, Air modes, Complete Software bundle, "
  },
  {
      "slug": "roborock-vacuum-cleaner-roborock-roborock-h6-akkusauger-mit-stiel",
      "text": "Roborock H6 Cordless Vacuum Cleaner, Engine - 420 W, Battery - up to 90 min, Dimensions - 28.4 x 22.1 x 30.3 cm • 1.4 kg, Brush types - 2in1 carpet & floor brush, dust brush for flat surfaces, motorized mini upholstery brush, crevice nozzle, flexible hose, Filter type - 5-stage HEPA - filters up to 99.97% of all particles and allergens up to a size of 0.3 μm, Operation areas - Hardwood floors, parquet floors, carpets, furniture, fabric, Special Features - Suction power of 150 AW at max. 72 dB, light & handy, automatic detection of carpets and automatic increase in suction power when using the carpet brush, wall charging station, OLED display, filter & dust container removable and easy to clean, Volume of the dust container - 0.4 L, "
  },
  {
      "slug": "all-in-one-apple-27-imac-retina-5k-mid-2020-27-intel-core-i5-10600-8gb-512gb-ssd-amd-radeon-pro-5300-4gb-gddr6",
      "text": "Apple 27\" iMac Retina 5K (Mid 2020), Model - MXWU2D/A, Memory - 8GB, Display - 27 inches (5120 x 2880), Storage - 512GB SSD, Graphics - AMD Radeon Pro 5300 (4GB GDDR6), Processor - Intel® Core™ i5-10600, Dimensions - 65 x 20.3 x 8.92 cm • 51.6 kg, Operating System - macOS Catalina, Keyboard Language - German, "
  },
  {
      "slug": "laptop-hp-15-da0359ng-i3-4gb-256gb-ssd-uhd-graphics-620",
      "text": "HP 15-da0359ng Laptop - Intel® Core™ i3-7020U - 4GB - 256GB SSD - Intel® HD Graphics 620, Model - 6TA78EA, Memory - 4GB, Display - 15.6 inches (1366 x 768), Storage - 256GB SSD, Graphics - Intel® HD Graphics 620, Processor - Intel® Core™ i3-7020U, Dimensions - 37.6 x 24.6 x 2.25 cm • 1.77 kg, Operating System - Windows® 10 Home, Keyboard Language - German, "
  },
  {
      "slug": "lg-washing-machine-lg-washingmachine-v7w800a",
      "text": "LG V7W800A Washing Machine, Design - Standing device, Screen - Yes, Capacity - 8 kg, Programs - Allergy, app programs, bed linen, eco 40-60°C, delicates, whites/colors, short 14min, mix, night, easy-care, gentle/​wool, sport, drum cleaning, TurboWash 39min, Dimensions - 600 x 850 x 565mm / 70kg, Smart Home - App control (SmartThinQ), Noise level - 71dB(A), Spin speed max. - 1400/​min, Special features - Remaining time display, start time preselection, AquaStop, child safety device, imbalance control, machine care program, Water consumption - 48l/​cycle, Additional options - Steam, start/​pause with refill function, TurboWash, prewash, Energy consumption - 48kWh/​100 cycles, Number of programs - 14, Duration Eco program - 3h 38min, Spin efficiency class - A (A to G), Energy efficiency class - A (A to G), Airborne noise emission class - A (A to D), "
  },
  {
      "slug": "razer-blade-16-2025-ryzenai9-32gb-1tb-rtx-5070",
      "text": "Razer Blade 16 (2025) Gaming Laptop - AMD Ryzen™ 9 HX370 - 32GB - 1TB SSD - NVIDIA® GeForce® RTX™ 5070, Model - RZ09-05287GN3-R3G1, Memory - 32GB, Display - 16 inches (2560 x 1600), 240Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5070, Processor - AMD Ryzen™ 9 HX370, Dimensions - 24.4 x 22 x 35.5 cm • 2.45 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "acer-nitro-xv275up3biiprx-27-wqhd",
      "text": "Acer - 27\" Nitro XV275UP3biiprx | 27\" WQHD UM.HXXEE.301, Model - UM.HXXEE.301, Display - VA 27 inches (2560x1440), 170Hz, Dimensions - 61.3 x 26.7 x 43.7 cm • 6.3 kg, Connectivity - 2x HDMI, 1x DP, Audio Out, Response Time - 2ms, High Dynamic Range (HDR) - Yes, "
  },
  {
      "slug": "garmin-fenix-8-smartwatch-stainless-steel-43mm",
      "text": "Garmin Fēnix® 8 Smartwatch, Stainless Steel, 43mm, Type - GPS-Multisport-Smartwatches, Features - Scratch-resistant Corning® Gorilla® Glass, AMOLED Display, Microphone and Speaker, Sport-Specific Training Plans, Supports Recreational Diving and Freediving Up to 40 Meters, Dynamic Roundtrip Routing for Staying on Track, Easily Share Routes, Workouts, and Locations with Garmin-Compatible Products, Get Slope Information and Cross-Country Ski Trails, Training Readiness Score with recommendations, Track your uphill running progress with Hillscore, Train with Animated workours and Garmin coach, Sleep monitoring with insights into sleep quality and HRV status, Morning report (sleep summary, HRV status along with daily training recommendations), Minimize Jetlag effects with Jetlag advisor, Pay contactless with Garmin Pay™, Emergency assistance and automatic incident notifications during activities, Send message from your smartwatch, Smart Features (receive calls, messages, weather updates, save and play songs from compatible services (Garmin Music, Spotify, Youtube Music, Deezer Amazon Music), View your health and fitness data in one place with Garmin Connect, Communicate without mobile signal with Inreach Compatability share your location, or send SOS alerts via the Iridium satellite network, Band Size - S/M, Battery Life - Up to 28h in GPS mode / 10 days in Smartwatch mode, Connectivity - GPS, NFC, Bluetooth®, WiFi, Compatibility - Android / iOS, Build Material - Stainless Steel and Silicone Band, Music playback - Yes, Water/Dust proof - Up to 10 ATM / 40 m, Activity Tracking - 80+ Sports/Outdoor apps (Running, Mountain biking, Team sports), Activity vs. inactivity, Altitude changes, Blood oxygen, Heart Rate, Breathing patterns, Cadence, Calories burned, Cycling speed, Distance swam, Distance traveled, Duration of exercise, Heart rate, Laps swam, Pace, Speed, Stairs climbed, Steps taken, Global Positioning - GPS, NFC, GLONASS, "
  },
  {
      "slug": "dreame-z30-cordless-vacuum-cleaner",
      "text": "Dreame Z30 Cordless Vacuum Cleaner, Runtime - 90 minutes, Dimensions - 1116 x 256 x 256 mm / 7.3 kg, Filter type - HEPA, Full charge time - 4 hours, Special features - Intelligent particle detection and automatic adjustment of suction power, extensive accessories including brush for pets, impressive running time of 90 minutes, LCD screen for real-time display of cleaning status, 310 AW suction power, Scope of delivery - Main unit, pet brush, motorized mini brush, combo tool, illuminated multi-surface brush, illuminated soft roller brush, rotating soft dust brush, soft dust brush, floor stand, flexible adapter, extension hose, extension rod, Area of Application - Tiles, hardwood floors, pets, laminates, furniture, parquet floors, cracks, carpets, allergies, stone floors, Maximum volume of the dust container - 0.6 L, "
  },
  {
      "slug": "beats-headphones-beats-studio-pro-over-ear-bluetooth-headphones",
      "text": "Beats Studio Pro Over-ear Bluetooth Headphones, Type - Over-ear Bluetooth headphones, Battery - Up to 40h battery, Connections - USB-C, Key features - 3D Audio, Improved compatibility with Android/ Apple, Crystal clear calls, optimized sound profiles, Noise cancelling - ANC, Integrated microphone - Yes, "
  },
  {
      "slug": "lenovo-laptop-lenovo-thinkpad-x1-carbon-gen-9-english-qwerty-ips-14-wuxga-intel-core-i7-1165g7-16gb-512gb-ssd-intel-iris-xe-graphics",
      "text": "Lenovo ThinkPad X1 Carbon Gen 9 Laptop - Intel® Core™ i7-1165G7 - 16GB - 512GB SSD - Intel® Iris® Xe Graphics, Model - 20XW005NMH, Memory - 16GB, Display - 14 inches (1920 x 1200), Storage - 512GB SSD, Graphics - Intel® Iris® Xe Graphics, Processor - Intel® Core™ i7-1165G7, Dimensions - 31.5 x 22.1 x 1.49 cm • 1.13 kg, Operating System - Windows® 10 Pro, Keyboard Language - English, "
  },
  {
      "slug": "lenovo-laptop-lenovo-thinkpad-e14-gen-2-english-qwerty-ips-14-fhd-intel-core-i5-1135g7-8gb-256gb-ssd-intel-iris-xe-graphics",
      "text": "Lenovo ThinkPad E14 Gen 2 Laptop - Intel® Core™ i5-1135G7 - 8GB - 256GB SSD - Intel® Iris® Xe Graphics, Model - 20TA00L4MH, Memory - 8GB, Display - 14 inches (1920 x 1080), Storage - 256GB SSD, Graphics - Intel® Iris® Xe Graphics, Processor - Intel® Core™ i5-1135G7, Dimensions - 32.4 x 22 x 1.79 cm • 1.64 kg, Operating System - Windows® 10 Pro, Keyboard Language - English, "
  },
  {
      "slug": "msi-graphics-card-msi-gaming-z-trio-radeon-rx-6900-xt",
      "text": "MSI Gaming Z Trio Radeon RX 6900 XT Graphics Card, Memory - 16GB (GDDR6), Dimensions - 5.5 x 32.4 x 14.1 cm • 1.5 kg, "
  },
  {
      "slug": "laptop-apple-macbook-pro-15-i7-16gb-256gb-touch-bar-mid-2018",
      "text": "Apple 15\" MacBook Pro Touch Bar (Mid 2018), RAM - 16GB, Storage - 256GB SSD, Graphics - AMD Radeon™ Pro 555X, Processor - 2.2GHz 6-Core Intel® Core™ i7 (Turbo Boost up to 4.1GHz), Screen Size - 15.4, Model Number - MR932D/A, Touch Screen - No, Operating System - macOS, Screen Resolution - 2880 x 1800 Pixels, "
  },
  {
      "slug": "huawei-gt5-stainless-steel-case-and-milanese-band-41mm",
      "text": "Huawei Watch GT5 Smartwatch, Stainless Steel Case, 41mm, Type - Smartwatch, Features - High resolution AMOLED Color screen, 100+ Workout Modes, Bluetooth calling, message viewing&notification, Physical button, Heart Rate Monitoring, Blood oxygen detection, Sleep monitoring, Automatic stress test, Breathing exercises, Health clovers, Menstrual cycle, Sleep apnea detection, Battery Life - Up to 14 days, Connectivity - GPS, Bluetooth, Wi-Fi, NFC, Compatibility - iOS / Android, Build Material - Stainless Steel Case and Milanese Band, Music playback - Yes, Water/Dust proof - 5 ATM / IP68, Activity Tracking - 24/7 heart rate tracking; Skin temperature; Stress level; Calories burned; Can track swimming, running, hiking and general workouts, Global Positioning - GPS, Beidou, GLONASS, Galileo, QZSS, "
  },
  {
      "slug": "google-smartphone-google-pixel-9-pro-xl-16gb-1tb",
      "text": "Google Pixel 9 Pro XL Smartphone - 1TB - Dual SIM, Memory - 16GB, Battery - 5060 mAh, Display - 6.8-inch LTPO - OLED (1344 × 2992), Storage - 1TB, Processor - , Dimensions - , Rear Camera - 50MP+48MP+48MP, Connectivity - 5G, Front Camera - 42MP, Operating System - Android 14, "
  },
  {
      "slug": "dyson-vacuum-cleaner-dyson-omni-glide",
      "text": "Dyson Omni-Glide (2022) Cordless Vacuum Cleaner, Filter - Advanced whole-machine filtration traps 99.99% of particles, dust and allergens as small as 0.3 microns, Runtime - Up to 20 min, Features - Dyson's slimmest, most maneuverable vacuum for hard floors, Compact and Lightweight, Omnidirectional soft roller cleaner head, Converts to a handheld for easy cleaning of surfaces and tight spaces., Bin Capacity - 0.2 L, Compatible Floor Type - Tile, Bare Floor, Bamboo, Ceramic tile, Engineered woods, Laminate, Linoleum, Vinyl, "
  },
  {
      "slug": "huawei-smartwatch-huawei-watch-gt2-pro-47mm",
      "text": "Huawei Watch GT2 Pro Smartwatch, Titanium, 47mm, Type - Smartwatch, Band Size - , Durability - Up to 5 ATM, Key Feature - Elegant, integrated GPS, 100 training modes (incl. ski, snowboard, gold etc.), advanced health tracking features, route back feature, exercise monitor with TruRelax, smart notification and reminder functions, Bluetooth calls and voice assistant, control music playback and take photos, premium materials (sapphire surface, titanium case, ceramic back case), long battery life., Battery Life - Up to 14 days, Connectivity - Bluetooth, Compatibility - Android / iOS, Build Material - Titanium casing with silicone/leather band, Music playback - Yes, Wireless & Location - GPS, Health, Sport & Activity Tracking - Continuous heart rate measurement, step and calorie counter, tracks VO2Max, Oxygen Saturation detection, 100+ workout modes and 17 professional modes (incl. skiing, snowboarding, golf), more than 10 running courses , "
  },
  {
      "slug": "jura-coffee-machine-jura-ena4-eb",
      "text": "Jura ENA4 (EB), Depth - 445 mm, Width - 271 mm, Height - 323 mm, Weight - 8.4 kg, Bluetooth - Yes, Display type - Analog, Auto power off - Yes, Heating system - Thermoblock, Wireless ready - Yes, Built-in grinder - Yes, Capacity in cups - 10 cups, Hot water system - Yes, Coffee input type - Coffee beans, Coffee maker type - Fully-auto, Water tank capacity - 1.1 L, Coffee beans capacity - 125 g, Adjustable coffee strength - Yes, Maximum operating pressure - 15 bar, Number of coffee strength settings - 3, Adjustable coffee spout height range - 75 - 105 mm, "
  },
  {
      "slug": "jura-coffee-machine-jura-e4-ea",
      "text": "Jura E4 (EA), Power - 1450W, Cleaning - Rinsing function, cleaning program, descaling program, adjustable water hardness, Water amount - Programmable, Coffee amount - Programmable, Pump pressure - 15 bar, Special features - Suitable for coffee beans and coffee powder, app control, variable brewing system (P.E.P. pulse brewing system), hot water function, double height-adjustable beverage outlet (65-111mm), 2-cup function, automatic switch-off (energy-saving mode), automatic switch-off (adjustable), removable water tank, integrated water filter, Water tank capacity - 1.9l, Capacity bean container - 280g, Coffee grounds container capacity - 16 portions, "
  },
  {
      "slug": "huawei-gt5-stainless-steel-case-and-fluorolastomer-strap-41mm",
      "text": "Huawei Watch GT5 Smartwatch, Stainless Steel Case, 41mm, Type - Smartwatch, Features - High resolution AMOLED Color screen, 100+ Workout Modes, Bluetooth calling, message viewing&notification, Physical button, Heart Rate Monitoring, Blood oxygen detection, Sleep monitoring, Automatic stress test, Breathing exercises, Health clovers, Menstrual cycle, Sleep apnea detection, Battery Life - Up to 14 days, Connectivity - GPS, Bluetooth, Wi-Fi, NFC, Compatibility - iOS / Android, Build Material - Stainless Steel Case and Fluorolastomer Strap, Music playback - Yes, Water/Dust proof - 5 ATM / IP68, Activity Tracking - 24/7 heart rate tracking; Skin temperature; Stress level; Calories burned; Can track swimming, running, hiking and general workouts, Global Positioning - GPS, Beidou, GLONASS, Galileo, QZSS, "
  },
  {
      "slug": "huawei-gt5-stainless-steel-case-and-fluorolastomer-strap-46mm",
      "text": "Huawei Watch GT5 Smartwatch, Stainless Steel Case, 46mm, Type - Smartwatch, Features - High resolution AMOLED Color screen, 100+ Workout Modes, Bluetooth calling, message viewing&notification, Physical button, Heart Rate Monitoring, Blood oxygen detection, Sleep monitoring, Automatic stress test, Breathing exercises, Health clovers, Menstrual cycle, Sleep apnea detection, Battery Life - Up to 14 days, Connectivity - GPS, Bluetooth, Wi-Fi, NFC, Compatibility - iOS / Android, Build Material - Stainless Steel Case and Fluorolastomer Strap, Music playback - Yes, Water/Dust proof - 5 ATM / IP68, Activity Tracking - 24/7 heart rate tracking; Skin temperature; Stress level; Calories burned; Can track swimming, running, hiking and general workouts, Global Positioning - GPS, Beidou, GLONASS, Galileo, QZSS, "
  },
  {
      "slug": "samsung-ai-galaxy-book4-xelite-16gb-512gb-copilot-pc",
      "text": "Samsung AI Galaxy Book4 Copilot+ PC - 16GB - 512 GB - Qualcomm® Adreno™ GPU, Model - NP964XMA-MC1DE, Memory - 16GB, Display - 16 inches (2880 x 1800 ), 120Hz, Storage - 512 GB, Graphics - Qualcomm® Adreno™ GPU, Processor - , Dimensions - 35.5 x 12.3 x 25 cm • 1.55 kg, Operating System - Windows® 11 Pro Premium, Keyboard Language - German, "
  },
  {
      "slug": "apple-pencil-pro",
      "text": "Apple Pencil Pro, Features - Apple Pencil Pro gives you ultimate creative control with gestures like Squeeze and Barrel Roll to access tools, change brushes, and create strokes without missing a beat. Haptics allow you to feel shapes snap into place, and more. Use Apple Pencil hover on iPad Pro and iPad Air (M2) to preview your mark before you make it. And now, you can use Find My to locate your Apple Pencil Pro., Compatibility - iPad Pro 13-inch (M4), iPad Pro 11-inch (M4), iPad Air 13-inch (M2), iPad Air 11-inch (M2), "
  },
  {
      "slug": "lg-fridge-freezer-combo-lg-bottomfreezer-gbb92mcbap",
      "text": "LG GBB92MCBAP Fridge Freezer Combo , Design - Standing device, Screen - Yes, Features - Meat compartment (Fresh Converter), vegetable compartment (Fresh Balancer), NoFrost, quick freezing, quick cooling, dynamic cooling, bottle rack, LED lighting, door alarm, Dimensions - 2030 x 595 x 675mm, Noise level - 35dB(A), Energy consumption - 110kWh/​year, Net volume freezer - 107l (below), Total net capacity - 384l, Energy efficiency class (A to G) - A, Usable capacity of the cooling zone - 277l (above), incl. cold storage zone, Storage time in the event of a fault - 13.5 hours, Airborne noise emission class (A to D) - B, "
  },
  {
      "slug": "lenovo-thinkpad-e14-g6-ultra-7-155h-16gb-512gb-eng",
      "text": "Lenovo ThinkPad E14 G6 Laptop - Intel® Core™ Ultra 7-155H - 16GB - 512GB SSD - Intel® Intel Arc Graphics, EAN - 197530430299, NPU - Integrated Intel® AI Boost, up to 11 TOPS, Model - 21M7002YMH, Memory - 16GB, Display - 14\" WUXGA (1920x1200) IPS 300nits Anti-glare, 45% NTSC, Storage - 512GB SSD, Graphics - Intel® Intel Arc Graphics, Processor - Intel Core Ultra 7 155H, 16C (6P + 8E + 2LPE) / 22T, Max Turbo up to 4.8GHz, 24MB, Dimensions - 45 x 8 x 30 cm • 2.4 kg, Operating System - Windows® 11 Pro, Keyboard Language - English, "
  },
  {
      "slug": "acer-travelmate-p2-tmp216-51-55t6-i5-1335u-16gb-512gb-intel-iris-eng",
      "text": "Acer TravelMate P2 TMP216-51-55T6 Laptop - Intel® Core™ i5-1335U - 16GB - 512GB SSD - Intel® Iris® Xe Graphics, Model - NX.B17EH.001, Memory - 16GB, Display - 16 inches (1920 x 1200), Storage - 512GB SSD, Graphics - Intel® Iris® Xe Graphics, Processor - Intel® Core™ i5-1335U, Dimensions - 36.3 x 25.5 x 1.99 cm • 1.9 kg, Operating System - Windows® 11 Home, Keyboard Language - English, "
  },
  {
      "slug": "msi-laptop-msi-katana-gf76-12uc-001nl-english-qwerty-17-3-fhd-144hz-intel-core-i7-12700h-16gb-1tb-ssd-nvidia-geforce-rtx-3050",
      "text": "MSI Katana GF76 12UC-001NL Gaming Laptop - Intel® Core™ i7-12700H - 16GB - 1TB SSD - NVIDIA® GeForce® RTX 3050, Model - 9S7-17L422-001, Memory - 16GB, Display - 17.3 inches (1920x1080), 144Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX 3050, Processor - Intel® Core™ i7-12700H, Dimensions - 39.8 x 27.3 x 2.52 cm • 2.6 kg, Operating System - Windows® 11 Home, Keyboard Language - English, "
  },
  {
      "slug": "laptop-dell-xps-13-9380-touch-i7-8565u-16gb-512gb-uhd-graphics-620",
      "text": "Dell XPS 13 9380 Touch, Memory - 16GB, Display - 13.3 inches, 3840 x 2160 Pixels, Storage - 512GB, Graphics - Intel UHD Graphics 620, Processor - Intel Core i7-8565U, Operating System - Windows 10 Home (64 Bit), "
  },
  {
      "slug": "samsung-galaxybook4-core-5-120u-16gb-256gb",
      "text": "Samsung GalaxyBook4 Laptop - Intel® Core™ 5-120U - 16GB - 256GB - Intel® Integrated Intel® Graphics, Model - NP754XGK-KS2DE, Memory - 16GB, Display - 15.6 inches (1920 x 1080), Storage - 256GB, Graphics - Intel® Integrated Intel® Graphics, Processor - Intel® Core™ 5-120U, Dimensions - 35.6 x 22.9 x 15.4 cm • 1.55 kg, Operating System - Windows® 11 Pro, Keyboard Language - German, "
  },
  {
      "slug": "gigabyte-aero-x16-r7-ai-350-32gb-1tb-rtx-5060",
      "text": "Gigabyte AERO X16 Gaming Laptop - AMD Ryzen™ 7 AI 350 - 32GB - 1TB SSD - NVIDIA® GeForce® RTX™ 5060, EAN - 4719331764098, Model - 1VH93DEC64AH, Memory - 32GB, Display - 16 inches (2560 × 1600), 165Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5060, Processor - AMD Ryzen™ 7 AI 350, Dimensions - 39.5 x 27.8 x 2.7 cm • 4.6 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "microsoft-surface-pro-11th-copilot-pc-lcd-5g-x-plus-16gb-256gb-ssd",
      "text": "Microsoft Surface Pro 5G, Copilot+ PC, 13” Touchscreen, Snapdragon® X Plus, 16GB RAM, 256GB SSD, 11. Edition, Platin, Model - EP2-08261, Memory - 16GB, Display - 13 inches (2880 x 1920), 120Hz, Storage - 256GB SSD, Graphics - Qualcomm® Adreno™ GPU, Processor - , Dimensions - 20.9 x 28.7 x 0.93 cm • 0.9 kg, Operating System - Windows® 11 Home, "
  },
  {
      "slug": "microsoft-laptop-microsoft-microsoft-surface-laptop-go-2020-english-qwerty-12-4-8gb-128gb-ssd-intel-uhd-graphics",
      "text": "Microsoft Surface Laptop Go - Intel® Core™ i5-1035G1 - 8GB - 128GB SSD - Intel® UHD Graphics, Model - THH-00009, Memory - 8GB, Display - 12.4 inches (1536 x 1024), 60Hz, Storage - 128GB SSD, Graphics - Intel® UHD Graphics, Processor - Intel® Core™ i5-1035G1, Dimensions - 27.82 x 20.57 x 1.57 cm • 1.11 kg, Operating System - Windows® 10 Home (64 Bit), Keyboard Language - English, "
  },
  {
      "slug": "acer-nitro-16-r7-7840hs-16gb-1tb-rtx-4070-eng",
      "text": "Acer Nitro 16 Gaming Laptop - AMD Ryzen™ 7 7840HS - 16GB - 1TB SSD - NVIDIA® GeForce® RTX 4070, Model - NH.QLJEH.003, Memory - 16GB, Display - 16 inches (2560 x 1600), 165Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX 4070, Processor - AMD Ryzen™ 7 7840HS, Dimensions - 36 x 28 x 2.8 cm • 2.7 kg, Operating System - Windows® 11 Home, Keyboard Language - English, "
  },
  {
      "slug": "ecovacs-vacuum-cleaner-ecovacs-ozmo-t8-aivi",
      "text": "Ecovacs Deebot OZMO T8 AIVI Vacuum & Mop Robot Cleaner, Features - Robot cleaner with wiping function • TrueMapping technology: next generation of laser-based navigation technology • Automatic obstacle recognition and avoidance • Virtual boundaries • Carpet detection • Individual room cleaning plans and mapping of several floors • OZMO ™ Pro wiping technology: an electrically controlled wiping plate works on stubborn stains with high-frequency vibrations, Dimensions - 35.3 cm x 35.3 cm x 9.3 cm • 4.3 kg, Application - Allergies, hardwood floors, pets, parquet floors, carpets, Filter type - High Efficiency Filter, App-controlled - Yes, Maximum operating time - 175 min, Max. volume of the water tank - 0.24 L, Max. volume of the dust container - 0.42 L, "
  },
  {
      "slug": "monitor-samsung-c34h890wju-34-lc34h890wjuxen",
      "text": "Samsung - 34\" C34H890WJU (SOLD) LC34H890WJUXEN, Model - LC34H890WJUXEN, Display - VA 34 inches (3440 x 1440), Dimensions - 81.14 x 12.33 x 36.19 cm • 7.9 kg, Connectivity - 1x HDMI, 1x DisplayPort, 2x USB-A, 1x USB-C, Response Time - 4ms, High Dynamic Range (HDR) - No, "
  },
  {
      "slug": "samsung-galaxybook4-core-7-150u-16gb-512gb",
      "text": "Samsung GalaxyBook4 Laptop - Intel® Core™ 7-150 U - 16GB - 512GB - Intel® Integrated Intel® Graphics, Model - NP754XGK-KS1DE, Memory - 16GB, Display - 15.6 inches (1920 x 1080), Storage - 512GB, Graphics - Intel® Integrated Intel® Graphics, Processor - Intel® Core™ 7-150 U, Dimensions - 35.6 x 22.9 x 15.4 cm • 1.55 kg, Operating System - Windows® 11 Pro, Keyboard Language - German, "
  },
  {
      "slug": "samsung-27-uhd-monitor-viewfinity-s8-s27b800pxp",
      "text": "Samsung - 27\" Samsung - 27\" UHD Monitor ViewFinity S8 S27B800PXP LS27B800PXPXEN, Model - LS27B800PXPXEN, Display - IPS 27 inches (3840 x 2160), Dimensions - 615.5 x 368.2 x 42.7 cm • 6.7 kg, Connectivity - 1x (1.4) Display port, headphones, 3.0 USB hub version, 1x Ethernet (LAN), 1x GDCP version (Mini-DP, HDCP 2.2), 3x USB ports, 1x USB-c with P/D up to 90W, Response Time - 5ms, High Dynamic Range (HDR) - Yes, "
  },
  {
      "slug": "sennheiser-md-421-ii-dynamic-microphone",
      "text": "Sennheiser MD 421-II Dynamic microphone, "
  },
  {
      "slug": "apple-laptop-apple-apple-macbook-pro-41cm-16-m1-max-10-core-cpu-32-core-gpu-int-16",
      "text": "Apple MacBook Pro 16\" Laptop - Apple M1 Max - 32GB - 512GB SSD - Apple Integrated 32-core GPU, Model - 2Z14V-1006, Memory - 32GB, Display - 16 inches (3024 x 1964 ), 120Hz, Storage - 512GB SSD, Graphics - Apple Integrated 32-core GPU, Processor - Apple M1 Max, Dimensions - 35.57 x 24.8 x 1.6 cm • 2.1 kg, Operating System - macOS Monterey, Keyboard Language - English, "
  },
  {
      "slug": "samsung-ai-galaxy-book4-14-xelite-16gb-512gb-copilot-pc",
      "text": "Samsung AI Galaxy Book4 Copilot+ PC - 16GB - 512 GB - Qualcomm® Adreno™ GPU, Model - NP944XMA-MC1DE, Memory - 16GB, Display - 14 inches (2880 x 1800 ), 120Hz, Storage - 512 GB, Graphics - Qualcomm® Adreno™ GPU, Processor - , Dimensions - 31.2 x 10.9 x 22.3 cm • 1.55 kg, Operating System - Windows® 11 Pro Premium, Keyboard Language - German, "
  },
  {
      "slug": "acer-aspire-5-r5-5500u-16-512-15-6-eng",
      "text": "Acer Aspire 5 Laptop - AMD Ryzen™ 5 5500U - 16GB - 512GB SSD - AMD Radeon™ RX 640, Model - NX.A8CEH.005, Memory - 16GB, Display - 15.6 inches (1920 x 1080), Storage - 512GB SSD, Graphics - AMD Radeon™ RX 640, Processor - AMD Ryzen™ 5 5500U, Dimensions - 26.3 x 25 x 1.8 cm • 1.77 kg, Operating System - Windows® 11 Home, Keyboard Language - English, "
  },
  {
      "slug": "lenovo-legion-5-15ach6-r7-16gb-512gb-rtx-3050ti-eng",
      "text": "Lenovo Legion 5 15ACH6 Gaming Laptop - AMD Ryzen™ 7 5800H - 16GB - 512GB SSD - NVIDIA® GeForce® RTX 3050ti, Model - 82JW00H5MH, Memory - 16GB, Display - 15.6 inches (1920 x 1080), 120Hz, Storage - 512GB SSD, Graphics - NVIDIA® GeForce® RTX 3050ti, Processor - AMD Ryzen™ 7 5800H, Dimensions - 36.2 x 26 x 2.5 cm • 2.4 kg, Operating System - Windows® 11 Home, Keyboard Language - English, "
  },
  {
      "slug": "dreame-l10s-ultra-gen2-robot-cleaner",
      "text": "Dreame L10s Ultra Gen2 Robot Cleaner, Run time - 120 mins, Dimensions - 450 x 35 x 591 mm / 13.3 kg, Suction Power - 10.000 Pa, Special features - The fully automatic base station of the L10s Ultra Generation 2 takes your convenience to a whole new level. With a generous 3.2-liter dust bag and intelligent automatic suction, you can relax for up to 75 days without worrying about emptying it. But that’s not all – the self-cleaning and air-drying mop pads ensure that no unpleasant odors or stains develop. The system automatically refills the water tank and adds cleaning solution as needed, so your home always stays hygienically clean. Enjoy effortless cleaning and use the time saved for the truly important things in life., Dust Bag capacity - 0.3 L, Scope of delivery - 1x side brush, 2x mop pad (pre-installed), 2x mop holders, 1x base station ramp extension plate, 2x dust bags (1x pre-installed), Water Tank capacity - 4.5 L, Automatic Dust Suction - Yes, Self Cleaning and Air Drying Mop Pads - Yes, "
  },
  {
      "slug": "dreame-h14-pro-wash-dry-vacuum-cleaner",
      "text": "Dreame H14 Pro Wash & Dry Vacuum Cleaner, Range - 300 m2, Runtime - 40 mins, Dimensions - 266 x 275 x 110 mm / 5.7 kg, Suction Power - 18.000 Pa, Special features - The H14 Pro wet and dry vacuum cleaner redefines cleanliness and offers innovative features that make your life easier. With the push of a button, self-cleaning starts: Brush cleaning at 60°C, 5-minute hot air drying, and 2-way rotation minimize residue and ensure top hygiene. Achieve impressively precise cleaning results with 18,000 Pa suction power and a long-lasting cleaning time of 40 minutes. Its flat design and 180° range allow you to clean even the most hard-to-reach spaces with ease. The best part? With the Dreamehome app, you can intelligently dose and individually adjust the amount of cleaning solution. Opt for efficiency and thoroughness – with the H14 Pro from Dreame, you’ll experience a new dimension of cleaning., Water tank capacity - 880 ml, Automatic Brush Cleaning - Yes, "
  },
  {
      "slug": "lenovo-thinkpad-x1-carbon-u7-155u-16gb-512gb",
      "text": "Lenovo ThinkPad X1 Carbon Laptop - Intel® Core™ Ultra 7-155U - 16GB - 512GB SSD - Intel® Integrated Intel® Graphics, Model - 21KC0051GE, Memory - 16GB, Display - 14 inches (1920 x 1200), 60Hz, Storage - 512GB SSD, Graphics - Intel® Integrated Intel® Graphics, Processor - Intel® Core™ Ultra 7-155U, Dimensions - 31.3 x 21.9 x 1.5 cm • 1 kg, Operating System - Windows® 11 Pro, Keyboard Language - German, "
  },
  {
      "slug": "huawei-smartwatch-huawei-gt3-stainless-steel-case-leather-band-42mm",
      "text": "Huawei Watch GT3 Smartwatch, Stainless Steel Case, 42mm, Type - Smartwatch, Sensors - Accelerometer, Air pressure sensor, Optical heart rate sensor, Geomagnetic sensor, Gyroscope sensor, Temperature sensor, SpO2 sensor, Features - High resolution AMOLED display, Personal AI Running Coach, 100+ Workout Modes, Bluetooth calling, Integrated speaker, Band Size - 130-190mm, Battery Life - up to 14 days, Connectivity - GPS, Bluetooth 5.0, WiFi, Compatibility - Androing / iOS / HarmonyOS, Build Material - Stainless Steel Case & Leather Band, Music playback - Yes, Operating System - HarmonyOS 2.0, Water/Dust proof - Up to 5 ATM, Activity Tracking - Blood oxygen, Skin temperature, Stress level, Interval training, Running, Swimming, Hiking, Global Positioning - GPS, Beidou, GLONASS, Galileo, QZSS , "
  },
  {
      "slug": "acer-aspire-5-a517-51-57mk-17-3-display-core-i5-prozessor-8-gb-ram-1-tb-hdd-uhd-graphics-620",
      "text": "Acer Aspire 5 (A517-51-57MK), "
  },
  {
      "slug": "acer-swift-14-ai-sf14-11-x8mn-x-elite-16gb-1tb-ssd",
      "text": "Acer Swift 14 AI SF14-11-X8MN Copilot+ Qualcomm® X Elite 16GB 1TB SSD - Qualcomm® Adreno™ GPU, Model - NX.KZXEG.003, Memory - 16GB, Display - 14.5 inches (2560 x 1440), 120Hz, Storage - 1 TB SSD, Graphics - Qualcomm® Adreno™ GPU, Processor - Qualcomm® X Elite X1E-78-100, Dimensions - 45.7 x 28.8 x 65 cm • 2.4 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "msi-laptop-msi-katana-gf76-12ud-003nl-english-qwerty-17-3-fhd-144hz-intel-core-i7-12700h-16gb-512gb-ssd-nvidia-geforce-rtx-3050-ti",
      "text": "MSI Katana GF76 12UD-003NL Gaming Laptop - Intel® Core™ i7-12700H - 16GB - 512GB SSD - NVIDIA® GeForce® RTX 3050 Ti, Model - 9S7-17L422-003, Memory - 16GB, Display - 17.3 inches (1920x1080), 144Hz, Storage - 512GB SSD, Graphics - NVIDIA® GeForce® RTX 3050 Ti, Processor - Intel® Core™ i7-12700H, Dimensions - 39.8 x 27.3 x 2.52 cm • 2.6 kg, Operating System - Windows® 11 Home, Keyboard Language - English, "
  },
  {
      "slug": "msi-laptop-msi-ge66-raider-11ug-205nl-english-qwerty-15-6-intel-core-i7-11800h-16gb-2tb-ssd-nvidia-geforce-rtx-3070",
      "text": "MSI Raider GE66 11UG-205NL Gaming Laptop - Intel® Core™ i7-11800H - 16GB - 2TB SSD - NVIDIA® GeForce® RTX 3070, Model - GE66 11UG-205NL, Memory - 16GB, Display - 15.6 inches (2560 x 1440), 240Hz, Storage - 2TB SSD, Graphics - NVIDIA® GeForce® RTX 3070, Processor - Intel® Core™ i7-11800H, Dimensions - 35.8 x 26.7 x 2.34 cm • 2.38 kg, Operating System - Windows® 10 Home, Keyboard Language - English, "
  },
  {
      "slug": "razer-laptop-razer-blade-stealth-13-late-2020-english-qwerty-oled-13-3-fhd-60hz-intel-core-i7-1165g7-16gb-512gb-ssd-nvidia-geforce-gtx-1650-ti-max-q-4gb-gddr6",
      "text": "Razer Blade Stealth 13 (Late 2020) Gaming Laptop - Intel® Core™ i7-1165G7 - 16GB - 512GB SSD - NVIDIA® GeForce® GTX 1650 Ti Max-Q, Model - RZ09-03272E82-R3E1, Memory - 16GB, Display - 13.3 inches (1920 x 1080), 60Hz, Storage - 512GB SSD, Graphics - NVIDIA® GeForce® GTX 1650 Ti Max-Q, Processor - Intel® Core™ i7-1165G7, Dimensions - 30.46 x 21 x 1.53 cm • 1.41 kg, Operating System - Windows® 10 Home, Keyboard Language - English, "
  },
  {
      "slug": "samsung-gear-vr-blue-black-4865",
      "text": "Samsung Gear + Remote VR Headset, Weight - 345g, Sensors - Accelerometer, Gyroscope, Proximity sensor, Controls - Touchpad, Back button, Volume key, Focus adjustment wheel, Connectors - Micro USB connector for connection to smartphone, Scope of delivery - Micro USB - USB Type-C charging adapter, Micro USB holder, USB Type-C holder, Compatible Operating System - Android, "
  },
  {
      "slug": "apple-macbook-pro-16-m2-max-12cpu-32gb-1tb-30gpu",
      "text": "MacBook Pro 16\" Apple M2 Max Chip 32GB Memory 1TB SSD - Integrated 30-core GPU, Model - Z175-MNW93N-33, Memory - 32GB, Display - 16.2 inches (3456 x 2234), Storage - 1TB SSD, Graphics - Apple Integrated 30-core GPU, Processor - Apple M2 Max, Dimensions - 35.57 x 24.81 x 1.68 cm • 2.1 kg, Operating System - macOS, Keyboard Language - English, "
  },
  {
      "slug": "samsung-tablet-galaxy-tab-s10-wifi-12gb-256gb",
      "text": "Samsung Tablet, Galaxy Tab S10+ - WIFI - Android - 256GB, Memory - 12GB, Battery - 10090mAh, Display - 12.4-inch Dynamic AMOLED 2X (2800 x 1752), Storage - 256GB, Processor - MediaTek Dimensity 9300+, Dimensions - 18.4 x 28.5 x 0.56 cm (0.571kg), Rear Camera - 13MP Primary +8MP Ultrawide, Connectivity - WIFI, Front Camera - 12MP, Operating System - Android, "
  },
  {
      "slug": "acer-nitro-50-n50-656-i5-14400f-16gb-512gb-rtx5060",
      "text": "Acer Nitro 50 (N50-656) Gaming Desktop - Intel® Core™ i5-14400F - 16GB - 512GB SSD - NVIDIA® GeForce® RTX™ 5060, EAN - 4711474567161, WLAN - Wi-Fi 6E, Intel® Wi-Fi 6E (802.11 ax), Model - DG.E3UEG.00L, Memory - 16 GB DDR5 RAM (2 x 8 GB), up to 32 GB dual-channel DDR5 5600 MHz, Bluetooth - Bluetooth® 5.3, Processor - Intel® Core™ i5-14400F, Dimensions - 17.5 x 39.2 x 38.6 cm - 9.3 kg, Hard drive - 512 GB PCIe SSD, Power supply - 500 watt power supply, Graphics card - NVIDIA® GeForce® RTX™ 5060 (8 GB GDDR7), Operating system - Windows 11 Home (64 bit), Power efficiency - 87+, Scope of delivery - USB keyboard & mouse, Ethernet technology - Gigabit LAN, "
  },
  {
      "slug": "huawei-gt5-pro-ceramic-case-and-ceramic-band-41mm",
      "text": "Huawei Watch GT5 Pro Smartwatch, Ceramic Case, 41mm, Type - Smartwatch, Features - Premium design, Heart Rate Monitoring, Blood oxygen detection, Sleep monitoring, Automatic stress test, Breathing exercises, Health clovers, Menstrual cycle, Sleep apnea detection, Bluetooth calling, message viewing&notification, Battery Life - Up to 14 days, Connectivity - GPS, Bluetooth, Wi-Fi, NFC, Compatibility - iOS / Android, Build Material - Ceramic Case and Ceramic Band, Music playback - Yes, Water/Dust proof - 5 ATM / IP68, Activity Tracking - 24/7 heart rate tracking; Skin temperature; Stress level; Calories burned; Can track swimming, running, hiking and general workouts, Global Positioning - GPS, Beidou, GLONASS, Galileo, QZSS, "
  },
  {
      "slug": "lenovo-laptop-gaming-legion-y530-15ich-i7-8750h-12gb-1tb-128gb",
      "text": "Lenovo Laptop Legion Y530 (15ICH), "
  },
  {
      "slug": "poly-blackwire-c8225-stereo-usb-c-a-office-headphones",
      "text": "Poly Blackwire C8225 Stereo USB-C/A Office Headphones, "
  },
  {
      "slug": "hp-laptop-hp-15s-eq1355ng",
      "text": "HP 15s-eq1355ng Laptop - AMD Ryzen™ 5 4500U - 8GB - 512GB SSD - AMD Radeon™ Graphics, Model - 37H63EA, Memory - 8GB, Display - 15.6 inches (1920 x 1080), Storage - 512GB SSD, Graphics - AMD Radeon™ Graphics, Processor - AMD Ryzen™ 5 4500U, Dimensions - 35.9 x 24.2 x 1.8 cm • 1.7 kg, Operating System - Windows® 10 Home, Keyboard Language - German, "
  },
  {
      "slug": "logitech-g29-driving-force-racing-steering-wheel",
      "text": "Logitech G29 Driving Force Racing Steering Wheel, Connections - USB, Special Features - Force feedback for realistic gaming experience, powerful floor pedal unit with non-linear brake pedal, smooth operation, durable, Signal Transmission - Wired, Supported Platforms - PlayStation 5, PlayStation 4, PlayStation 3 and PC, "
  },
  {
      "slug": "lenovo-ideacentre-300-20ish-90da005age-5309",
      "text": "Lenovo IdeaCentre 300-20ISH, "
  },
  {
      "slug": "polaroid-i-2-premium-camera-black",
      "text": "Polaroid I-2 Premium Camera Black, Battery - Internal rechargeable battery, Aperture - f/8 to f/64, Dimensions - 149 x 119 x 91 mm - 563g, Focus type - LiDAR Autofocus & Manual focus, Self-Timer - 3,6,9,12 seconds, Viewfinder - Optical, Focal length - 98mm, Shutter Speed - 1/250 to 30s, Bulb Mode, Built-in Flash - Yes, Compatible Film - Polaroid Originals i-Type, Polaroid 600, Polaroid SX-70, Special features - App control, Tripod screw mount, Scope of delivery - Polaroid I-2 Instant Camera, Lens cap, Camera pouch, USB-C charging cable, Hand strap, Minimum Focus distance - 40cm, "
  },
  {
      "slug": "asus-laptop-asus-tuf-gaming-a17-fa706iu-h7241t",
      "text": "Asus TUF Gaming A17 Fa706Iu-H7241T Laptop, Memory - 16GB, Display - 17.3 inches (1.920 x 1.080 Pixel), Storage - 512GB, Graphics - GeForce¬†GTX¬†1660 Ti, Processor - AMD Ryzen 9 4900H, Dimensions - 2.52 x 39.9 x 26.9 cm - 1.6 kg, Operating System - Windows 10 Home, Keyboard Language - , "
  },
  {
      "slug": "msi-laptop-msi-gp76-leopard-11uh-671nl-english-qwerty-ips-17-3-fhd-144hz-intel-core-i7-11800h-16gb-1tb-ssd-nvidia-geforce-rtx-3080",
      "text": "MSI Leopard GP76 11UH-671NL Gaming Laptop - Intel® Core™ i7-11800H - 16GB - 1TB SSD - NVIDIA® GeForce® RTX 3080, Model - GP76-11UH-671NL, Memory - 16GB, Display - 17.3 inches (1920 x 1080), 144Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX 3080, Processor - Intel® Core™ i7-11800H, Dimensions - 39.7 x 28.4 x 2.59 cm • 2.9 kg, Operating System - Windows® 10 Home, Keyboard Language - English, "
  },
  {
      "slug": "elgato-gaming-accessories-elgato-stream-deck-mk-2",
      "text": "Elgato Stream Deck MK.2 Stream Control, Type - Stream Control, Model - Stream Deck MK.2, Connections - USB 2.0, Key features - Instantly trigger unlimited actions with one tap., Button layout - 15 customizable LCD buttons, Operating mode - USB 2.0, Supported platforms - MAC, PC, "
  },
  {
      "slug": "apple-smartphone-galaxy-s25-12gb-256-gb-01a2122a-6719-4dcc-b37c-8de815521507",
      "text": "Samsung Galaxy S25+ Smartphone  - 512 GB - Dual SIM, Memory - 12GB, Battery - 4775 mAh, Display - 6.7-inch Dynamic AMOLED 2X (1440 x 3120), Storage - 512 GB, Processor - Qualcomm Snapdragon Snapdragon 8 Elite for Galaxy (SM8750), Dimensions - 7.58 x 15.84 x 0.73 cm (0.19kg), Rear Camera - 12 MP + 50 MP + 10 MP, Connectivity - 5G, Front Camera - 12 MP, Operating System - Android 15, "
  },
  {
      "slug": "apple-laptop-apple-apple-macbook-pro-41cm-16-m1-max-10-core-cpu-32-core-gpu-1tb-int-16",
      "text": "Apple MacBook Pro 16\" Laptop - Apple M1 Max - 32GB - 512GB SSD - Apple Integrated 32-core GPU, Model - 2Z14V-1016, Memory - 32GB, Display - 16 inches (3024 x 1964 ), 120Hz, Storage - 512GB SSD, Graphics - Apple Integrated 32-core GPU, Processor - Apple M1 Max, Dimensions - 35.57 x 24.8 x 1.6 cm • 2.1 kg, Operating System - macOS Monterey, Keyboard Language - English, "
  },
  {
      "slug": "dell-xps-13-9320-i7-32gb-1tb-eng",
      "text": "Dell XPS 13\" 9320 Laptop  - Intel® Core™ i7-1260P - 32GB - 1TB SSD, Model - 1R9V0, Memory - 32GB, Display - 13.4 inches (3840 x 2400), 60Hz, Storage - 1TB SSD, Graphics - Intel® Iris® Xe Graphics, Processor - Intel® Core™ i7-1260P, Dimensions - 29.5 x 19.9 x 1.53 cm • 1.27 kg, Operating System - Windows® 11 Pro, Keyboard Language - English, "
  },
  {
      "slug": "lg-fridge-freezer-combo-lg-bottomfreezer-gbp62mctbc",
      "text": "LG GBP62MCTBC Fridge Freezer Combo , Design - Standing device, Equipment - LINEARCooling®: Temperature difference in the refrigerator reduced to ±0.5°C; DoorCooling+®: cooling much faster and more evenly; Fresh features: FreshZone, FRESHConverter®, frost-free, Dimensions - 2030 x 595 x 675mm / 90kg, Noise level - 35dB, Special features - Multi-airflow forced air cooling; express cooling; Soft, comfortable LED light; The side-pocket handle ensures a simple design; Inverter Linear Compressor®, Energy efficiency class - B, Energy consumption per year - 137 kWh/a, Volume of freezer compartments - 107 l, Volume of cold storage compartments - 277 l, "
  },
  {
      "slug": "apple-series-10-gps-cellular-titanium-case-and-milanese-band-42mm",
      "text": "Apple Watch Series 10 GPS + Cellular, Titanium Case, 42mm, Type - Apple Watch, Features - Powered by new S10 SiP, LTPO3 OLED Always-On Retina display (Wide-angle OLED, 40% brighter), Sleep Tracking, Sleep apnea notifications, Double Tap Gesture (answer a call, open a notification, play and pause music and more), Faster on-device Siri with health data access, Precision Finding for iPhone, Crash detection, Fall Detection, Heart arrhythmia, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Pair Multiple Watches with Family Setup, Apple Pay, Listen Music, Podcast, Audiobooks, Battery Life - Up to 18h / 36h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Titanium Case and Milanese Band, Music playback - Yes, Water/Dust proof - Up to 50m, Activity Tracking - Continuous Heart Rate Tracking, Steps taken, Hours slept, Resting heart rate, Target heart rate, Skin temperature, Multisport workouts; Strength training, HIIT, Pilates, Meditation, Swimming, Running, Yoga, Cycling and Other Sports, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "thrustmaster-racing-steering-wheel-3-pedal-set-t-gt-ii",
      "text": "Thrustmaster T-GT II Racing Steering Wheel + 3 Pedal Set, Type - Racing Steering Wheel + 3 Pedal Set, Model - T-GT II, Connections - Bus-powered, Key features - Leather-covered steering wheel with 25 action buttons, 1 push button and 4 rotary selector switches, which are natively recognized in GT Sport. Next-generation high-speed, brushless 40 watt motor for exceptionally responsive force feedback with high torque capacity. Quick and easy steering wheel changing system that enables the use of different types of steering wheels., Button layout - 25 action buttons, 1 push-button and 4 rotary selectors, Operating mode - Bus-powered, Supported platforms - Officially licensed for PlayStation 5 and Gran Turismo; compatible with PS5, PS4 and PC, "
  },
  {
      "slug": "acer-aspire-5-pro-a517-53-76rm-i7-1255u-16gb-512gb-intel-iris-eng",
      "text": "Acer Aspire 5 Pro A517-53-76RM Laptop - Intel® Core™ i7-1255U - 16GB - 512GB SSD - Intel® Iris® Xe Graphics, Model - NX.K64EH.006, Memory - 16GB, Display - 17 inches (1920 x 1080), 60Hz, Storage - 512GB SSD, Graphics - Intel® Iris® Xe Graphics, Processor - Intel® Core™ i7-1255U, Dimensions - 40.2 x 25.7 x 1.99 cm • 2.2 kg, Operating System - Windows® 11 Pro, Keyboard Language - English, "
  },
  {
      "slug": "google-pixel-watch-3-lte-smartwatch-aluminium-case-45mm",
      "text": "Google Pixel Watch3 LTE Smartwatch, Aluminium Case, 45mm, Type - Smartwatch, Features - Glance on the go with the larger Actua display, All-day battery life (with always-on display) & faster loading time, Detects loss of pulse and alerts emergency services, Balance activity and rest with readiness insights, Feel safe thanks to Security check feature, Google Wallet, Recycled, premium stainless steel finish, All the information you need is right on your wrist (Gmail, Google Calendar and Google Wallet), On-wrist calls, Fall Detection, Emergeny SOS, Battery Life - Up to 24h, Connectivity - LTE, Bluetooth®, Wi-Fi, NFC, Compatibility - Compatible with most phones running on Android 10.0 or newer, Build Material - Aluminium Case and Fluoroelastomer Band, Music playback - Yes, Water/Dust proof - 5 ATM / IP68, Activity Tracking - All-day Activity Tracking (steps, distance & calories),Track run performance and 40+ exercises (HIIT, spinning and rowing and more), Daily Readiness Score, Continuous Heart Rate Tracking, Activity vs. inactivity, Global Positioning - GLONASS, GPS, BeiDou (BDS), Galileo, "
  },
  {
      "slug": "dji-rs-4-combo",
      "text": "DJI RS 4 Combo, Weight - 1kg, Payload - 3Kg, Runtime - Max. 12h, Connectivity - App Control (IOS / Android), Special Features - Automatic Screen lock, 2nd Gen Axle lock. Vertical Recording optimized, Scope of delivery - DJI RS4 gimbal, BG21 Battery Grip, Quick release plate, Extension handle/Tripod, Lens attachment support, Multi-camera control cable (USB-C 30cm), USB-C charging cable (40cm), Screw set, Transport Case, Focus Pro Motor, Rod mounting set, Gear belt, "
  },
  {
      "slug": "adidas-headphones-adidas-z-n-e-01-in-ear-bluetooth-headphones",
      "text": "Adidas Z.N.E. 01 TW In-ear Bluetooth Headphones, Type - In-ear Bluetooth Headphones, Battery - Up to 20h battery, Connections - USB-C, Key features - From rainy day walks to quick lunchtime workouts, these IPX4-rated earbuds will keep up. They're sweat-proof and splash-proof, so active days are never a problem. Always at the ready, with up to 25 hours of total playime. 5 hours of paytime in the buds and on-th-go charging in the case., Integrated microphone - Yes, Water/splash resistant - IPX5 sweat resistant and splashproof, Frequency response, Sound pressure level & Impedance - 20Hz - 20kHz, 32 ohms, 93 dB/mW, "
  },
  {
      "slug": "lenovo-tablet-tab-m10-lte-2gb-32gb",
      "text": "Lenovo Tablet, Tab M10 - LTE - Android - 32GB, Memory - 2GB, Battery - 5000 mAh, Display - , Storage - 32GB, Processor - Mediatek Helio P22T, Dimensions - 15.3 x 24.4 x 0.8 cm (0.46kg), Rear Camera - 8MP, Connectivity - LTE, Front Camera - 5MP, Operating System - Android 9, "
  },
  {
      "slug": "lenovo-tablet-tab-p11-lte-4gb-128gb",
      "text": "Lenovo Tablet, Tab P11 (2021) - LTE - Android - 128GB, Memory - 4GB, Battery - 7500 mAh, Display - 11-inch IPS TDDI (2000 x 1200), Storage - 128GB, Processor - Qualcomm Snapdragon 662, Dimensions - 16.3 x 25.8 x 0.7 cm (0.5kg), Rear Camera - 13MP, Connectivity - LTE, Front Camera - 8MP, Operating System - Android 10, "
  },
  {
      "slug": "lg-ds80qr-ddeullk",
      "text": "LG DS80QR Soundbar, WiFi - Yes, Delivery - -, Bluetooth - Yes, Components - 5.1.3 Soundbar + Subwoofer, Connections - 2x HDMI 2.1 (HDCP 2.3) with 4K pass-through (In & Out), 1x USB, 1x optical, Total Power - 620 watts, Product type - Soundbar + Subwoofer, Special features - , Number of channels - 5.1.3, Signal transmission - Wireless, Wired, "
  },
  {
      "slug": "lenovo-tablet-tab-p11-pro-with-keyboard-and-pen-wifi-4gb-128gb",
      "text": "Lenovo Tablet, Tab P11 Pro with Keyboard and Pen - WiFi - Android - 128GB, Memory - 4GB, Battery - 8600 mAh, Display - 11.5-inch OLED (2560 x 1600), Storage - 128GB, Processor - Qualcomm Snapdragon 730G, Dimensions - 17.1 x 26.4 x 0.6 cm (0.49kg), Rear Camera - 13MP, Connectivity - WiFi, Front Camera - 8MP, Operating System - Android 10, "
  },
  {
      "slug": "asus-laptop-asus-zenbook-flip-14-oled-english-qwerty-14-intel-core-i7-1165g7-16gb-1tb-ssd-intel-iris-xe-graphics",
      "text": "ASUS Zenbook Flip 14\" Laptop - Intel® Core™ i7-1165G7 - 16GB - 1TB SSD - Intel® Iris® Xe Graphics, Model - UP5401EA-KN105W, Memory - 16GB, Display - 14 inches (), 90Hz, Storage - 1TB SSD, Graphics - Intel® Iris® Xe Graphics, Processor - Intel® Core™ i7-1165G7, Dimensions - 31.1 x 22.3 x 1.4 cm • 1.4 kg, Operating System - Windows® 11 Home, Keyboard Language - English, "
  },
  {
      "slug": "apple-laptop-apple-macbook-pro-mk193d-a-english-qwerty-16-apple-m1-pro-16gb-1tb-ssd-apple-integrated-16-core-gpu",
      "text": "Apple MacBook Pro 16\" Laptop - Apple M1 Pro - 16GB - 1TB SSD - Apple Integrated 16-core GPU, Model - MK193D/A, Memory - 16GB, Display - 16 inches (3456 x 2234), 120Hz, Storage - 1TB SSD, Graphics - Apple Integrated 16-core GPU, Processor - Apple M1 Pro, Dimensions - 35.7 x 24.8 x 1.7 cm • 2.1 kg, Operating System - macOS Monterey, Keyboard Language - English, "
  },
  {
      "slug": "apple-tablet-13-ipad-air-2025-wifi-8gb-256gb",
      "text": "Apple 13\" iPad Air (2025) - WIFI - iOS - 256GB, Memory - 8GB, Battery - 36,59 Wh, Display - 13-inch Liquid Retina (2732 x 2048), Storage - 256GB, Processor - Apple M3, Dimensions - 22.7 x 29.5 x 3.3 cm (0.616kg), Rear Camera - 12MP, Connectivity - WIFI, Front Camera - 12MP, Operating System - iOS, "
  },
  {
      "slug": "samsung-sm-t585nzwa-tab-a-10-1-lte-weiss-4901",
      "text": "Samsung Galaxy Tab A, "
  },
  {
      "slug": "roland-aira-tr-8-1100",
      "text": "Roland Rhythm Machine AIRA TR-8, "
  },
  {
      "slug": "apple-series-10-gps-cellular-titanium-case-and-sport-band-42mm",
      "text": "Apple Watch Series 10 GPS + Cellular, Titanium Case, 42mm, Type - Apple Watch, Features - Powered by new S10 SiP, LTPO3 OLED Always-On Retina display (Wide-angle OLED, 40% brighter), Sleep Tracking, Sleep apnea notifications, Double Tap Gesture (answer a call, open a notification, play and pause music and more), Faster on-device Siri with health data access, Precision Finding for iPhone, Crash detection, Fall Detection, Heart arrhythmia, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Pair Multiple Watches with Family Setup, Apple Pay, Listen Music, Podcast, Audiobooks, Band Size - S/M, Battery Life - Up to 18h / 36h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Titanium Case and Sport Band, Music playback - Yes, Water/Dust proof - Up to 50m, Activity Tracking - Continuous Heart Rate Tracking, Steps taken, Hours slept, Resting heart rate, Target heart rate, Skin temperature, Multisport workouts; Strength training, HIIT, Pilates, Meditation, Swimming, Running, Yoga, Cycling and Other Sports, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "google-pixel-watch-3-lte-smartwatch-aluminium-case-41mm",
      "text": "Google Pixel Watch3 LTE Smartwatch, Aluminium Case, 41mm, Type - Smartwatch, Features - All-day battery life (with always-on display) & faster loading time, Detects loss of pulse and alerts emergency services, Balance activity and rest with readiness insights, Feel safe thanks to Security check feature, Google Wallet, Recycled, premium stainless steel finish, All the information you need is right on your wrist (Gmail, Google Calendar and Google Wallet), On-wrist calls, Fall Detection, Emergeny SOS, Battery Life - Up to 24h, Connectivity - LTE, Bluetooth®, Wi-Fi, NFC, Compatibility - Compatible with most phones running on Android 10.0 or newer, Build Material - Aluminium Case and Fluoroelastomer Band, Music playback - Yes, Water/Dust proof - 5 ATM / IP68, Activity Tracking - All-day Activity Tracking (steps, distance & calories),Track run performance and 40+ exercises (HIIT, spinning and rowing and more), Daily Readiness Score, Continuous Heart Rate Tracking, Activity vs. inactivity, Global Positioning - GLONASS, GPS, BeiDou (BDS), Galileo, "
  },
  {
      "slug": "dell-latitude-5530-15-i5-8gb-256gb-english-qwerty",
      "text": "Dell Latitude 5530 15\" Laptop - Intel® Core™ i5-1235U - 8GB - 256GB SSD - Intel® Iris® Xe Graphics, Model - VK7PD, Memory - 8GB, Display - 15.6 inches (1920 x 1080), 60Hz, Storage - 256GB SSD, Graphics - Intel® Iris® Xe Graphics, Processor - Intel® Core™ i5-1235U, Dimensions - 35.78 x 23.33 x 2.21 cm • 1.59 kg, Operating System - Windows® 10 Pro, Keyboard Language - English, "
  },
  {
      "slug": "philips-scd-733-26-avent-dect-baby-monitor",
      "text": "Philips SCD 733/26 Baby Monitor, "
  },
  {
      "slug": "apple-ultra-2-gps-cellular-titanium-case-and-milanese-band-s",
      "text": "Apple Watch Ultra 2 GPS + Cellular, Titanium Case, 49mm, Type - Apple Watch, Features - Powered by new S9 SiP, Double Tap Gesture (answer a call, open a notification, play and pause music and more), LTPO2 OLED Always-On Retina display (Up to 3000 nits), Faster on-device Siri with health data access, Precision Finding for iPhone, Sleep Tracking, Sleep apnea notifications, Fall Detection and Crash detection, Siren, Customizable Action Button, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Blood Oxygen app, ECG app, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Precision dual-frequency GPS, Durable from -20° C to 55° C, Emergency SOS, International Emergency Calling, Strong Battery Performance, Pair Multiple Watches with Family Setup, Band Size - S, Battery Life - Up to 36h / 72h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Titanium Case and Milanese Band, Music playback - Yes, Water/Dust proof - Up to 100m / IP6X, Activity Tracking - Blood oxygen, Electrocardiography (ECG), Hours slept, Resting heart rate, Target heart rate, Skin temperature, Running (Stride Length, Ground Contact Time, Vertical Oscillation), Depth/Pressure/Location Tracking for Divers, Multisport Workouts, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "thrustmaster-gaming-accessories-thrustmaster-tca-yoke-pack-boeing-edition-pc-xbo",
      "text": "Thrustmaster TCA Yoke Pack BOEING Edition Joystick, Type - Joystick, Model - TCA Yoke Pack BOEING Edition (PC/XBO), Connections - USB, Key features - With HEART HallEffect Accurate technology, magnetic sensor technology, autopilot function, interchangeable levers, 3 axes, Button layout - 17 action buttons, Operating mode - USB, Supported platforms - Made for PC, Microsoft Xbox One, Microsoft Xbox Series S, Microsoft Xbox Series X, "
  },
  {
      "slug": "asus-g614jz-n3012w-rog-strix-g16",
      "text": "ASUS ROG Strix G16 G614JZ-N3012W Gaming Laptop - Intel® Core™ i7-13650HX - 16GB - 512GB SSD - NVIDIA® GeForce® RTX 4080, Model - G614JZ-N3012W, Memory - 16GB, Display - 16 inches (1920 x 1200), 165Hz, Storage - 512GB SSD, Graphics - NVIDIA® GeForce® RTX 4080, Processor - Intel® Core™ i7-13650HX, Dimensions - 35.4 x 26.4 x 2.26 cm • 2.5 kg, Operating System - Windows® 11 Home, Keyboard Language - English, "
  },
  {
      "slug": "galaxy-tab-a-10-1-32gb-2gb-ram-android-7-0",
      "text": "Galaxy TAB A 10.1\", "
  },
  {
      "slug": "apple-ultra-2-gps-cellular-titanium-case-and-trail-loop-s-m",
      "text": "Apple Watch Ultra 2 GPS + Cellular, Titanium Case, 49mm, Type - Apple Watch, Features - Powered by new S9 SiP, Double Tap Gesture (answer a call, open a notification, play and pause music and more), LTPO2 OLED Always-On Retina display (Up to 3000 nits), Faster on-device Siri with health data access, Precision Finding for iPhone, Sleep Tracking, Sleep apnea notifications, Fall Detection and Crash detection, Siren, Customizable Action Button, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Blood Oxygen app, ECG app, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Precision dual-frequency GPS, Durable from -20° C to 55° C, Emergency SOS, International Emergency Calling, Strong Battery Performance, Pair Multiple Watches with Family Setup, Band Size - S/M, Battery Life - Up to 36h / 72h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Titanium Case and Trail Loop, Music playback - Yes, Water/Dust proof - Up to 100m / IP6X, Activity Tracking - Blood oxygen, Electrocardiography (ECG), Hours slept, Resting heart rate, Target heart rate, Skin temperature, Running (Stride Length, Ground Contact Time, Vertical Oscillation), Depth/Pressure/Location Tracking for Divers, Multisport Workouts, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "lg-f4wr703y-washing-maschine",
      "text": "LG F4WR703Y Washing Maschine, Display - Digital touch display with remaining display and start time preselection., Programs - AI Wash, cooking/colorful laundry, Eco 40-60, TurboWash 39, Mix, easy care, Allergy Care, delicate laundry, gentle/wool, sportswear, short 14, duvets, drum cleaning, download/new. Switchable functions: steam, TurboWash, rinse+, prewash, intensive, time delay, laundry, remote start., Dimensions - 600 x 850 x 615 mm / 73 kg, Spin Speed - 1360 rpm, Drum volume - 81 L, Energy Class - A, App-controllable - Yes, Special features - Safety glass door: stable, scratch-resistant, hygienic and heat-resistant. Put on clothes: simply add forgotten pieces of laundry.ThinQ®: networked future built in. Steam: Deep cleaning with steam with special programs such as Allergy Care., Scope of delivery - Washing machine, cold water supply hose, wrench, caps for covering the transport screw openings, angle hose guide for connecting the drain hose, Number of programs - 14, Energy consumption in kWh per operating cycle in the eco 40-60 program - 0.444 kWh, "
  },
  {
      "slug": "microsoft-surface-laptop-7th-copilot-pc-15-x-elite-16gb-512gb-ssd-eng",
      "text": "Microsoft Surface Laptop (7th) Copilot+ PC 15\" Laptop - - 16GB - 512GB SSD - Qualcomm® Adreno™ GPU, Model - ZHH-00034, Memory - 16GB, Display - 15 inches (2304 x 1536), 120Hz, Storage - 512GB SSD, Graphics - Qualcomm® Adreno™ GPU, Processor - , Dimensions - 30.1 x 22 x 1.75 cm • 1.34 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "dell-latitude-3450-i7-16gb-512gb-fr",
      "text": "Dell Latitude 3450 Laptop - Intel® Core™ i7-1335U - 16GB - 512GB - Intel® Iris® Xe Graphics, Model - 210-BLLF, Memory - 16GB, Display - 14 inches (1920 x 1080), Storage - 512GB, Graphics - Intel® Iris® Xe Graphics, Processor - Intel® Core™ i7-1335U, Dimensions - 32.22 x 21.94 x 17.7 cm • 1.5 kg, Operating System - Windows® 11 Pro, Keyboard Language - French EU, "
  },
  {
      "slug": "huawei-tablet-matepad-wifi-4gb-64gb",
      "text": "Huawei Tablet, MatePad - WiFi - Android - 64GB, Memory - 4GB, Battery - 7250mAh, Display - 10.4-inch IPS (2000 x 1200), Storage - 64GB, Processor - HiSilicon Kirin 810, Dimensions - 15.5 x 24.5 x 0.7 cm (0.45kg), Rear Camera - 8MP, Connectivity - WiFi, Front Camera - 8MP, Operating System - Android 10, "
  },
  {
      "slug": "huawei-tablet-matepad-wifi-3gb-32gb",
      "text": "Huawei Tablet, MatePad - WiFi - Android - 32GB, Memory - 3GB, Battery - 7250mAh, Display - 10.4-inch IPS (2000 x 1200), Storage - 32GB, Processor - HiSilicon Kirin 810, Dimensions - 15.5 x 24.5 x 0.7 cm (0.45kg), Rear Camera - 8MP, Connectivity - WiFi, Front Camera - 8MP, Operating System - Android 10, "
  },
  {
      "slug": "next-level-racing-gt-lite-pro-foldable-cockpit",
      "text": "Next Level Racing GT Lite Pro Foldable Cockpit, Transport - Foldable and Rollabl, Dimensions - (L) 170 cm x (W) 87 cm x (H) 105 cm, Adjustability - Cockpit settings are possible without additional tools, Compatibility - Entry-Level DD Steering Wheel Bases Up to 13 NM, Product Weight - 15.5 kg, Packaging Weight - 19 kg, Supported Height - 120 - 210 cm, Scope of Delivery - Next Level Racing GTLite Pro Cockpit, Next Level Racing® universal handbrake plate, Cable management ties, Mounting accessories for attaching accessories, Packaging Dimensions - 78 cm (L) x 77 cm (W) x 26 cm, Accessory Compatibility - Shifters and Handbrakes with the Included Shifter and Handbrake Bracket, Maximum Body Weight Supported - 150 kg, "
  },
  {
      "slug": "steelseries-over-ear-gaming-headphones-steelseries-arctis-nova-pro-wireless",
      "text": "Steelseries Arctis Nova Pro Wireless Over-ear Gaming Headphones, Type - Over-ear Gaming Headphones, Model - Arctis Nova Pro Wireless, Battery - 2 batteries (up to 22 hours per battery). Non-stop battery with hot-swap (within 8 seconds). Fast charge (15 mins for 3 hours play), Included - Arctis Nova Pro Wireless Headset, 2x USB-C System Connections (1x Line-in, 1x Line-out), 2x Lithium Ion Batteries, 2x USB-C to USB-A Cable, 3.5mm to 3.5mm Audio Cable, 2x Removable Magnetic Ear Plates, Microphone Pop Filter, Product Information Guide, Connections - 3.5mm jack, 2xUSB-C, Connectivity - Bluetooth 5.0, Key features - Hot-swap between two batteries to keep playing as long as desired, never running out of power. AI-powered ClearCast Gen 2 noise cancelling microphone silences background noise and keyboard sounds for pristine audio communication and a fully retractable design. Multi-System Connect with dual USB ports works with PC, Mac, PlayStation, Switch and more, More features - Nova Pro Acoustic System and Premium High Fidelity Drivers,, Operating mode - Wireless, Surround sound - 360° Spatial Audio, Noise canceling - Noise reduction, ANC (4-mic hybrid design with Transparency Mode), volume control on the headphones/cable, Supported platforms - Gaming, Mac, PC, Mobile Phones, PlayStation 4, PlayStation 5, Nintendo Switch, Frequency response, Sound pressure level & Impedance - Headphone: 10Hz - 22kHz, 38 ohm, 93 dBSPL. Microphone: ClearCast Gen 2 - Fully Retractable Boom, Bidirectional Noise-Canceling, 100Hz - 10kHz, 2200 ohm, "
  },
  {
      "slug": "poly-voyager-focus-2-uc-inkl-ls-usb-c-a-office-headphones",
      "text": "Poly Voyager Focus 2 UC inkl. LS USB-C/A Office Headphones, "
  },
  {
      "slug": "thrustmaster-formula-wheel-add-on-ferrari-sf1000-edition-racing-steering-wheel",
      "text": "Thrustmaster Formula Wheel Add-On Ferrari SF1000 Edition Racing Steering Wheel, Type - Racing Steering Wheel, Model - Formula Wheel Add-On Ferrari SF1000 Edition, Scale - 1:1 scale replica of the steering wheel of the legendary Ferrari SF1000 single-seat racing car., Display - 109mm IPS LCD display that shows up to 69 race information., Connections - USB-C, Button layout - 25 action buttons, Compatibility - Compatible with PS4, PS5, Xbox Series S/X, Xbox One, PC, Operating mode - USB-C, Wheel base compatibility - TS-XW, T-GT, T300, TX and TS-PC, "
  },
  {
      "slug": "msi-laptop-msi-katana-gf66-12ud-003nl-english-qwerty-15-6-fhd-144hz-intel-core-i7-12700h-16gb-512gb-ssd-nvidia-geforce-rtx-3050-ti",
      "text": "MSI Katana GF66 12UD-003NL Gaming Laptop - Intel® Core™ i7-12700H - 16GB - 512GB SSD - NVIDIA® GeForce® RTX 3050 Ti, Model - 9S7-158422-003, Memory - 16GB, Display - 15.6 inches (1920x1080), 144Hz, Storage - 512GB SSD, Graphics - NVIDIA® GeForce® RTX 3050 Ti, Processor - Intel® Core™ i7-12700H, Dimensions - 35.9 x 25.9 x 2.49 cm • 2.25 kg, Operating System - Windows® 11 Home, Keyboard Language - English, "
  },
  {
      "slug": "dell-latitude-3450-i7-16gb-512gb-eng-us",
      "text": "Dell Latitude 3450 Laptop - Intel® Core™ i7-1335U - 16GB - 512GB - Intel® Iris® Xe Graphics  (US Keyboard), Model - XCTO, Memory - 16GB, Display - 14 inches (1920 x 1080), Storage - 512GB, Graphics - Intel® Iris® Xe Graphics, Processor - Intel® Core™ i7-1335U, Dimensions - 32.22 x 21.94 x 17.7 cm • 1.5 kg, Operating System - Windows® 11 Pro, Keyboard Language - English US, "
  },
  {
      "slug": "thrustmaster-t300-ferrari-integral-racing-wheel-alcantara-edition-with-3-pedal-set",
      "text": "Thrustmaster T300 Ferrari Racing Steering Wheel, Type - Integral Racing Wheel Alcantara Edition with 3-pedal set, Model - T300 Ferrari, Weight - Approx. 2.3 kg (with wheel and pedals), Dimensions - 350 mm x 260 mm x 300 mm (wheel base), Wheel Size - 8/10-inch GT-style Ferrari design, T3PA Pedals - Pedal set features adjustable resistance for the accelerator and brake pedal, Connection Type - USB for PC connection; proprietary connection for PlayStation consoles, Adjustable Rotation - 270° to 1080° rotation (adjustable), Force Feedback Power - 25W motor for a highly responsive and immersive experience, Platform Compatibility - PlayStation 3, PlayStation 4, PC, Official Ferrari License - Branded with Ferrari’s logo and design elements for an authentic experience, Wheel Buttons & Controls - 13 action buttons, including the D-pad and +/− buttons for various game controls, "
  },
  {
      "slug": "razer-laptop-razer-blade-15-advanced-early-2021-english-qwerty-15-6-qhd-240hz-intel-core-i7-10875h-32gb-ddr4-1tb-ssd-nvidia-geforce-rtx-3080",
      "text": "Razer Blade 15 Advanced (Early 2021) Gaming Laptop - Intel® Core™ i7-10875H - 32GB - 1TB SSD - NVIDIA® GeForce® RTX 3080, Model - RZ09-0367CED3-R3E1, Memory - 32GB, Display - 15.6 inches (2560 x 1440), 240Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX 3080, Processor - Intel® Core™ i7-10875H, Dimensions - 35.5 x 23.5 x 1.7 cm • 2.14 kg, Operating System - Windows® 10 Home, Keyboard Language - English, "
  },
  {
      "slug": "atomos-ninja-v-monitor-recorder",
      "text": "Atomos Ninja V+ Monitor/Recorder, Audio - 3.5mm mic/line input + 3.5mm Headphone output, Power - 5.8 to 7.2 VDC, Display - 5.2\" 1920x1080px IPS-LCD touchscreen (423 PPI), Brightness - 1000 cd/m2, Dimensions - 151 x 91.5 x 31.5 mm @ 360 g, Gamma curve - Rec709, Other inputs - 2.5mm LANC, Battery mount - L-type series, Color support - 8-Bit+FRC (1.07 Billion Colors), Camera trigger - Via HDMI, Format support - HDMI (8/10-Bit 4:2:2) up to 8K30p RAW, Image controls - Anamorphic De-Squeeze, Blue Only, False Color, Focus Peaking, Image Flip, Pixel Zoom, RGB Parade, Scaling, Screen Markers, Vectorscope, Waveform, Zebra, LUT monitoring - SDR, HDR, input & Output - 1x HDMI 2.0 Input / 1x HDMI 2.0 Output, Media recording - Single Slot SSDmini / SSD with Master Caddy II/III, Encoding Formats - Up to 7680 x 4320 / ProRes 422, 422 HQ, LT, Raw, Raw HQ 10/12-Bit 4:2:2, DNxHD 36, 145, 220x, HQ, HQX, LB, SQ 10/12-Bit 4:2:2, DNxHR HQ, HQX, LQ, SQ 10/12-Bit 4:2:2, H.265 420, 422, HQ, LQ, MQ 8/10-Bit 4:2:2, Timecode support - Yes, HDR compatibility - HDR10, Hybrid Log Gamma, Power consumption - 10W nominal (up to 22W), Maximum Audio Tracks - 12, "
  },
  {
      "slug": "razer-laptop-razer-blade-stealth-13-late-2020-english-qwerty-13-3-fhd-120hz-intel-core-i7-1165g7-16gb-512gb-ssd-nvidia-geforce-gtx-1650-ti-max-q-4gb-gddr6",
      "text": "Razer Blade Stealth 13 (Late 2020) Gaming Laptop - Intel® Core™ i7-1165G7 - 16GB - 512GB SSD - NVIDIA® GeForce® GTX 1650 Ti Max-Q, Model - RZ09-03272E12-R3E1, Memory - 16GB, Display - 13.3 inches (1920 x 1080), 120Hz, Storage - 512GB SSD, Graphics - NVIDIA® GeForce® GTX 1650 Ti Max-Q, Processor - Intel® Core™ i7-1165G7, Dimensions - 30.46 x 21 x 1.53 cm • 1.41 kg, Operating System - Windows® 10 Home, Keyboard Language - English, "
  },
  {
      "slug": "asus-laptop-asus-tuf-gaming-f17-english-qwerty-ips-17-3-fhd-144hz-intel-core-i7-11800h-8gb-512gb-ssd-nvidia-geforce-rtx-3050-ti",
      "text": "ASUS TUF Gaming F17 Gaming Laptop - Intel® Core™ i7-11800H - 8GB - 512GB SSD - NVIDIA® GeForce® RTX™ 3050 Ti, Model - FX706HEB-HX114W, Memory - 8GB, Display - 17.3 inches (1920 x 1080), 144Hz, Storage - 512GB SSD, Graphics - NVIDIA® GeForce® RTX™ 3050 Ti, Processor - Intel® Core™ i7-11800H, Dimensions - 39.9 x 26.9 x 2.33 cm • 2.6 kg, Operating System - Windows® 11 Home, Keyboard Language - English, "
  },
  {
      "slug": "lenovo-thinkpad-x1-carbon-gen-10-i7-16gb-512gb-english-qwerty",
      "text": "Lenovo ThinkPad X1 Carbon Gen 10 Laptop - Intel® Core™ i7-1260P - 16GB - 512GB SSD - Intel® Iris® Xe Graphics, Model - 21CB00AYMH, Memory - 16GB, Display - 14 inches (1920 x 1200), Storage - 512GB SSD, Graphics - Intel® Iris® Xe Graphics, Processor - Intel® Core™ i7-1260P, Dimensions - 31.5 x 22.25 x 1.53 cm • 1.12 kg, Operating System - Windows® 11 Pro, Keyboard Language - English, "
  },
  {
      "slug": "apple-keyboard-apple-magic-keyboard-f448a046-9e73-41b2-a0a5-bb87d35cdfe3",
      "text": "Apple Magic Keyboard, Layout - QWERTZ, Dimensions - 27.9 x 11.49 x 1.09 cm • 0.23 kg, Connectivity - Bluetooth, "
  },
  {
      "slug": "switch-pro-controller",
      "text": "Nintendo Switch Pro Controller, Weight - 246g, Battery - Lithium-Ion, Charging - UBC-C, Transmission - Bluetooth Wireless, Compatibility - Nintendo Switch, Special features - Vibration, textured grip, Dimensions and Weight - 15 x 10 x 6, 2.5 kg, "
  },
  {
      "slug": "playseat-racing-seat-playseat-trophy-logitech-g-edition",
      "text": "Playseat Trophy - Logitech G Edition Racing Seat, Depth - 1380 mm, Theme - Racing, Width - 1100 mm, Weight - 16 kg, Foldable - Yes, Product type - Universal gaming chair, Frame material - Steel, Maximum user height - 220 cm, Maximum user weight - 122 kg, Minimum user height - 120 cm, "
  },
  {
      "slug": "all-in-one-apple-imac-21-5-retina-4k-early-2019-english-qwerty-i5-8gb-1tb-fusion-drive-radeon-pro-560x",
      "text": "Apple iMac 21.5\" Retina 4K (Early 2019) All-in-One - Intel® Core™ i5-8500 - 8GB - 1TB SSD - AMD Radeon™ Pro 560x, Model - MRT42_CTO_1, Memory - 8GB, Display - 21.5 inches (4096 x 2304), Storage - 1TB SSD, Graphics - AMD Radeon™ Pro 560x, Processor - Intel® Core™ i5-8500, Dimensions - 52.8 x 17.5 x 45 cm • 5.66 kg, Operating System - macOS Mojave, Keyboard Language - English, "
  },
  {
      "slug": "thrustmaster-airbus-flight-simulator-pc-xbox",
      "text": "Thrustmaster TCA Captain Pack X Airbus Edition, Depth - 235 mm, Width - 190 mm, Height - 85 mm, Device type - Joystick + engine control lever, LED indicators - Y, Number of axis - 4, Auto calibration - Yes, USB connector type - USB Type-A, USB Type-C, Gaming control technology - Analogue, Gaming platforms supported - PC, Xbox, "
  },
  {
      "slug": "apple-ultra-2-gps-cellular-titanium-case-and-alpine-loop-s",
      "text": "Apple Watch Ultra 2 GPS + Cellular, Titanium Case, 49mm, Type - Apple Watch, Features - Powered by new S9 SiP, Double Tap Gesture (answer a call, open a notification, play and pause music and more), LTPO2 OLED Always-On Retina display (Up to 3000 nits), Faster on-device Siri with health data access, Precision Finding for iPhone, Sleep Tracking, Sleep apnea notifications, Fall Detection and Crash detection, Siren, Customizable Action Button, High and Low Heart Rate Notifications, Irregular Rhythm Notification, Low cardio fitness notifications, Blood Oxygen app, ECG app, Temperature sensing, Cycle Tracking with retrospective ovulation estimates, Precision dual-frequency GPS, Durable from -20° C to 55° C, Emergency SOS, International Emergency Calling, Strong Battery Performance, Pair Multiple Watches with Family Setup, Band Size - S, Battery Life - Up to 36h / 72h in Low Power Mode, Connectivity - GPS, LTE, Bluetooth, Wi-Fi, NFC, Compatibility - iOS, Build Material - Titanium Case and Alpine Loop, Music playback - Yes, Water/Dust proof - Up to 100m / IP6X, Activity Tracking - Blood oxygen, Electrocardiography (ECG), Hours slept, Resting heart rate, Target heart rate, Skin temperature, Running (Stride Length, Ground Contact Time, Vertical Oscillation), Depth/Pressure/Location Tracking for Divers, Multisport Workouts, Global Positioning - Galileo, GLONASS, GPS, "
  },
  {
      "slug": "lenovo-thinkpad-p1-g6-16-i7-32gb-1tb-ssd-eng",
      "text": "Lenovo ThinkPad P1 G6 16\" Laptop - Intel® Core™ i7-13700H - 32GB - 1TB SSD - NVIDIA® RTX 2000, Model - 21FVCTO1WW, Memory - 32GB, Display - 16 inches (2560x1600), 165Hz, Storage - 1TB SSD, Graphics - NVIDIA® RTX 2000 , Processor - Intel® Core™ i7-13700H, Dimensions - 35.9 x 25.3 x 1.75 cm • 1.86 kg, Operating System - Windows® 11 Pro, Keyboard Language - English, "
  },
  {
      "slug": "dell-latitude-3450-i7-16gb-512gb-eng",
      "text": "Dell Latitude 3450 Laptop - Intel® Core™ i7-1335U - 16GB - 512GB - Intel® Iris® Xe Graphics, Model - 210-BLLF, Memory - 16GB, Display - 14 inches (1920 x 1080), Storage - 512GB, Graphics - Intel® Iris® Xe Graphics, Processor - Intel® Core™ i7-1335U, Dimensions - 32.22 x 21.94 x 17.7 cm • 1.5 kg, Operating System - Windows® 11 Pro, Keyboard Language - English UK, "
  },
  {
      "slug": "lg-washing-machine-lg-f4wv510s0e",
      "text": "LG Washing Machine F4WV510S0E, Capacity - 10.5 kg, Programs - Cottons / coloreds • Steam - Allergy Care • Sportswear • Short 14 • Delicates • Eco 40 ° -60 ° • Night program • Gentle / Wool • Prewash • Download new, Dimensions - 600 x 565 x 850 mm • 70 kg, Smart Control - LG ThinQ®: Intelligent washing machine from remote control to downloading additional washing programs • Compatible with Amazon Alexa and Google Assistant, Max Spin Speed - 1400 RPM/min, Special Features - AI DD ™: Intelligent detection of the fibers for 18% more fabric protection • TurboWash ™: Faster and gentler washing in just 59 minutes (half load) • LG ThinQ® • Steam: Deep cleaning with steam with a special program such as Allergy Care • Add Item, Annual energy consumption - 143 kWh, Energy Efficiency Class (Scale) - B (A - G), "
  },
  {
      "slug": "iphone-7-32gb-2863",
      "text": "Apple iPhone 7 32GB, "
  },
  {
      "slug": "asus-gu604vz-nm008w-rog-zephyrus-m16",
      "text": "ASUS ROG Zephyrus M16 GU604VZ-NM008W Gaming Laptop - Intel® Core™ i9-13900H - 32GB - 1TB SSD - NVIDIA® GeForce® RTX 4080, Model - GU604VZ-NM008W, Memory - 32GB, Display - 16 inches (2560 x 1600), 240Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX 4080, Processor - Intel® Core™ i9-13900H, Dimensions - 35.5 x 24.6 x 2.11 cm • 2.3 kg, Operating System - Windows® 11 Home, Keyboard Language - English, "
  },
  {
      "slug": "apple-accessories-apple-magic-keyboard-12-9-ipad-pro-5th-gen-german",
      "text": "Apple Magic Keyboard 12.9\" Ipad Pro (6th Gen) - QWERTZ, "
  },
  {
      "slug": "hp-omen-16-b0340nd-i7-16gb-1tb-rtx-3060-english-qwerty",
      "text": "HP Omen 16-b0340nd Gaming Laptop - Intel® Core™ i7-11800H - 16GB - 1TB SSD - NVIDIA® GeForce® RTX 3060, Model - 4B719EA#ABH, Memory - 16GB, Display - 16.1 inches (1920 x 1080), 144Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX 3060, Processor - Intel® Core™ i7-11800H, Dimensions - 36.92 x 24.8 x 2.3 cm • 2.36 kg, Operating System - Windows® 11 Home, Keyboard Language - English, "
  },
  {
      "slug": "acer-nitro-v15-anv15-52-73zm-i7-13620h-16gb-1tb-rtx-5060",
      "text": "Acer Nitro V15 ANV15-52-73ZM Gaming Laptop - Intel® Core™ i7-13620H - 16GB - 1TB SSD - NVIDIA® GeForce® RTX™ 5060, EAN - 4711474535597, Model - NH.QZAEG.007, Memory - 16GB, Display - 15.6 inches (1920 x 1080 ), 165Hz, Storage - 1TB SSD, Graphics - NVIDIA® GeForce® RTX™ 5060, Processor - Intel® Core™ i7-13620H, Dimensions - 49.8 x 31 x 6.5 cm • 3.26 kg, Operating System - Windows® 11 Home, Keyboard Language - German, "
  },
  {
      "slug": "lg-fridge-freezer-combo-lg-gbb62pzffn",
      "text": "LG Fridge Freezer Combo GBB62PZFFN, Dimensions - 59,5 x 203 x 68,2 cm • 78 kg, App-compatible - LG ThinQ: smart diagnosis function, remote control of the temperature of the refrigerator, Total Capacity - 384 Liters, Special Features - Display with temperature display, touch control, LED interior lighting, LINEAR Cooling ™ + DoorCooling + ™, Total No-Frost Technology, Moist Balance Crisper ™, Installation type - Freestanding, Freezer compartment - 107 L • NoFrost, quick freeze function, 2 drawers + big box, Refrigerator compartment - 277 L • 4 shelves, 3 height-adjustable shelves, 4 door shelves, 2 refrigerator drawers, Annual energy consumption - 215 kWh, Energy efficiency class (scale) - D (A to G), "
  },
  {
      "slug": "apple-macbook-pro-m1-pro-10cpu-16gb-1tb-14gpu-qwerty",
      "text": "Apple MacBook Pro 14\" Laptop - Apple M1 Pro - 16GB - 1TB SSD - Apple Integrated 14-core GPU, Model - MKGP3D/A, Memory - 16GB, Display - 14 inches (3024 x 1964 ), 120Hz, Storage - 1TB SSD, Graphics - Apple Integrated 14-core GPU, Processor - Apple M1 Pro, Dimensions - 31.26 x 22.12 x 1.55 cm • 1.6 kg, Operating System - macOS Monterey, Keyboard Language - English, "
  },
  {
      "slug": "huawei-smartphone-nova-9-8gb-128gb",
      "text": "Huawei Nova 9 - 128GB, Memory - 8GB, Battery - 4300 mAh, Display - 6.57-inch OLED, HDR10 (1080 x 2340), Storage - 128GB, Processor - Qualcomm® Snapdragon 778G 4G, Dimensions - 7.37 x 16 x 0.78 cm (0.175kg), Rear Camera - 50MP+8MP+2MP+2MP, Connectivity - 4G, Front Camera - 32MP, Operating System - EMUI 12 (Based on Android 11); no Google Mobile Services, "
  },
  {
      "slug": "apple-laptop-apple-apple-macbook-pro-41cm-16-m1-pro-10-core-cpu-16-core-gpu-1tb-int-16",
      "text": "Apple MacBook Pro 16\" Laptop - Apple M1 Pro - 16GB - 1TB SSD - Apple Integrated 16-core GPU, Model - 1Z14V-0016, Memory - 16GB, Display - 16 inches (3024 x 1964 ), 120Hz, Storage - 1TB SSD, Graphics - Apple Integrated 16-core GPU, Processor - Apple M1 Pro, Dimensions - 35.57 x 24.8 x 1.6 cm • 2.1 kg, Operating System - macOS Monterey, Keyboard Language - English, "
  },
  {
      "slug": "lg-styler-lg-styler-s3mcf",
      "text": "LG S3MCF Styler, Capacity - 5.2 kg, Dehumidify - Yes, Dimensions - 445 x 1850 x 585 mm, Gentle Dry - Yes, Noise (dB) - 40, TrueSteam™ - Yes, RPM (M/Hanger) - 180, Smart Features - ThinQ™ (WI-FI), Smart Diagnosis™, use Cycle Download to add newly developed care cycles, Special Features - Refresh Clothes in the Comfort of Your Home / Steam Clothing Care / Shake off Wrinkles and Odors / Efficiently reduce allergens / Prevent shrinkage and damage / Dehumidify: helps to refresh surrounding clothes and atmosphere / Touch control display / Energy monitoring / Remote control /Mirror Design: Check Your Look Immediately, Energy Consumption - 1850W (Refresh Normal), Total Place Settings - 3 hangers + 1 trouser, "
  },
  {
      "slug": "mac-mini-quad-core-i3-16gb-ram-128gb-ssd-10gigabit-ethernet",
      "text": "Apple Mac Mini, "
  },
  {
      "slug": "apple-magic-keyboard-for-ipad-pro-11-inch-m4-german",
      "text": "Apple Magic Keyboard for 11\" iPad Pro (M4) - QWERTZ, Features - The Magic Keyboard for iPad Pro offers an exceptional typing and trackpad experience in a sleek, portable design. It features a 14-key function row, USB-C pass-through charging, and a floating cantilever design for adjustable viewing angles. The larger trackpad with haptic feedback enhances precision tasks, while the durable outer cover ensures front and back protection on the go., Compatibility - 11\" iPad Pro (M4), "
  },
  {
      "slug": "microsoft-elite-series-2-wireless-controller-core-edition",
      "text": "Xbox Elite Wireless Controller Series 2 - Core Edition, Weight - 345g, Features - Adjustable thumbsticks and shorter hair trigger locks, Supported - Xbox Series X, Xbox Series S, Xbox One, PC, Connections - UBC-C, Scope of Delivery - Xbox Elite Wireless Series 2, 2 thumbsticks, 1 D-pad, thumbstick adjustment tool, USB-C cable, Signal transmission - Wired and wireless, "
  },
  {
      "slug": "apple-macbook-pro-13-3-m2-8cpu-16gb-1tb-10gpu-english-qwerty",
      "text": "Apple MacBook Pro 13\" Laptop - Apple M2 - 16GB - 1TB SSD - Apple Integrated 10-core GPU, Model - MNEP3D/A, Memory - 16GB, Display - 13.3 inches (2560 x 1600), 60Hz, Storage - 1TB SSD, Graphics - Apple Integrated 10-core GPU, Processor - Apple M2, Dimensions - 11.97 x 8.36 x 0.61 cm • 3.09 kg, Operating System - macOS Monterey, Keyboard Language - English, "
  },
  {
      "slug": "thrustmaster-t150-pro-ergonomic-racing-steering-wheel-with-3-pedal-set",
      "text": "Thrustmaster T150 PRO Racing Steering Wheel, Type - Ergonomic Racing Steering Wheel with 3-pedal set, Model - T150 PRO, Pedal Set - T3PA 3-pedal set, featuring 100% metal pedals, fully adjustable, Connections - Bus-powered, Button layout - 13 action buttons (including 2 on the base) + directional buttons, Operating mode - Bus-powered, Rotation angle - 1080°, Racing game styles - Rally, F1, NASCAR and even GT, Steering wheel size - 28cm diameter, Supported platforms - PS4, PS5, PC, Gear Stick Compatibility - Thrustmaster TH8A, "
  },
  {
      "slug": "playseat-formula-instinct-f1-edition-racing-seat",
      "text": "Playseat Formula Instinct - F1 Edition Racing Seat, Color - White, Weight - 23kg, Features - Spell-free, robust support for your steering wheel, Foldable - No, Materials - modular fabric padding, F1® seat cushioning, PU Leather, Dimensions - 150 x 60 x 87 cm, Compatibility - All wheels, pedals and consoles, Customization - Unlimited position customization, Quick Release - Yes, Seat Position - The authentic F1® racing position, Recommended driver weight - 20kg - 163kg, Direct Drive Steering Compatible - Yes, "
  },
  {
      "slug": "logitech-mouse-logitech-logitech-mx-master-for-mac",
      "text": "Logitech MX Master for Mac ,  - 8000DPI, Feature - Wireless, Dimensions - 0.84 x 0.51 x 0.125 cm • 0.141 kg, Compatibility - 7 Programmable Buttons, for Mac, Max. Sensitivity - Optical, "
  },
  {
      "slug": "apple-magic-keyboard-with-touch-id-spa",
      "text": "Apple Magic Keyboard with Touch ID (SPA), Layout - QWERTY, Feature - Touch ID, Dimensions - 27.89 x 11.5 x 1.09 cm • 0.24 kg, Connectivity - Bluetooth, "
  },
  {
      "slug": "gopro-hero-11-black-us",
      "text": "Gopro HERO 11 Black, Sensor - 27MP CMOS sensor, Weight - 4.5 oz / 127 g, Battery - Rechargeable 1720 mAh Battery pack, Display - 2.27\" Touch screen LCD / front live-view monitor, Storage - Single slot microSD, Dimension - 2.8 x 2 x 1.3\" / 71.8 x 50.8 x 33.6 mm, Recording - 5.3K60/2.7K240 Video, 27MP Photos, Connectivity - 1x USB-C / Headphone jack, Focal length - 24.4mm, Special Features - HyperSmooth 5.0 Image Stabilization, 8x Slow-Motion Video, Scope of Delivery - Gopro Hero 11, Adhesive Mount, Mounting Buckle, THumbscrew, Gopro battery, USB Type-C cable, Carry Case, Weather resistance - 33' Waterproof without Housing, Image Stabilization - Digital, Supported languages - English, French, German, Italian, Japanese, Korean, Portuguese, Simplified Chinese, "
  }
]

// =================== utils to get slugs list from grover ================

async function getProductsList(page, limit, newArray){
  return fetch("https://supergraph-edge.grover.com/graphql", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Not;A=Brand\";v=\"99\", \"Google Chrome\";v=\"139\", \"Chromium\";v=\"139\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-graphql-client-name": "catalog-ui-browser",
      "x-graphql-client-version": "production-v0.83.0",
      "x-grover-device-id": "KmEKGF3NGjMN17F8bVKSF",
      "x-grover-language": "de",
      "x-grover-store": "de"
    },
    "referrer": "https://www.grover.com/",
    "body": `{\"query\":\"query searchProductsFull($query: String, $filters: FilterArgs, $resultsPerPage: Int, $page: Int, $sort: Sort) {\\n  searchProducts(\\n    query: $query\\n    filters: $filters\\n    resultsPerPage: $resultsPerPage\\n    page: $page\\n    sort: $sort\\n  ) {\\n    products {\\n      ...ProductCard\\n    }\\n    facets {\\n      name\\n      __typename\\n      ... on MatchFacet {\\n        values {\\n          value\\n          count\\n        }\\n      }\\n      ... on RangeFacet {\\n        min\\n        max\\n      }\\n      ... on SpecFacet {\\n        name\\n        label\\n        values {\\n          min\\n          max\\n          value\\n          count\\n        }\\n      }\\n    }\\n    pagination {\\n      currentPage\\n      nextPage\\n      prevPage\\n      totalPages\\n      totalItems\\n    }\\n  }\\n}\\n\\nfragment ProductCard on Product {\\n  slug\\n}\",\"variables\":{\"filters\":{},\"sort\":\"RANK\",\"resultsPerPage\":${limit},\"page\":${page}}}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  }).then(data => data.json()).then(res => {
    if(res.data.searchProducts.products.length > 0){
      newArray = [...newArray, ...res.data.searchProducts.products];
      return {
        status: 'inProgress',
        newArray
      }
    }
    return {
        status: 'done',
        newArray
      };
  });
}

async function getAllProductsList(page = 1, limit = 200, newArray = []){
    const allProducts = await getProductsList(page, limit, newArray);
    if(allProducts.status === 'inProgress'){
        page++;
        console.log('hit', page)
        return await getAllProductsList(page, limit, allProducts.newArray);
    }
    return allProducts.newArray;
}

// call this function to get all products list
// const allProducts = await getAllProductsList();
// console.log(allProducts)

// =================== utils to get slugs list from grover ================





// =================== utils to get product data from grover ================
async function getProductData(slug) {
  return fetch('https://supergraph-edge.grover.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-grover-store': 'de-en',
      'x-grover-language': 'en'
    },
    body: JSON.stringify({
      query: `
        query GetProductData($where: ProductWhereInput) {
          product(where: $where) {
          name
          specifications
          }
        }
      `,
      variables: {
        where: {
          slug: { _eq: slug }
        }
      },
      operationName: "GetProductData"
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data?.data?.product?.specifications)
    let string = `${data?.data?.product?.name}, `;
    if(data?.data?.product?.specifications){
      for (const [key, value] of Object.entries(data?.data?.product?.specifications)) {
        string += `${key} - ${value}, `
      }
    }
    
    return string
  });
}

async function getAllProductData(inputAsset) {
  for (let i = 0; i < inputAsset.length; i++) {
    console.log('hit', i)
    const productData = await getProductData(inputAsset[i].slug);
    inputAsset[i].text = productData;
  }
  return inputAsset;
}

// =================== utils to get product data from grover ================