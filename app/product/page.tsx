import Image from "next/image";
import Faqs from "@/components/Faqs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faqs - Product",
  description: "",
  robots: {
    index: false,
    follow: false,
  },
};
export default function Page() {
  const faqItems = [
    {
      name: "Overview",
      content: [
        {
          question: "How does the RocketBox™ work",
          answer:
            '<div ><p class="mb-4"> RocketBox™ from IntelliConnex is a revolutionary new platform that provides the fastest, simplest and most secure data transfers between Computer Systems such as PCs, laptops, tablets and smart phones using USB.</p><p><ol class="!space-y-4"><li>Systems connect to the RocketBox™ using standard USB cables supporting the desired speed and connectors.</br>>>> Learn more about <u>cables</u> and <u>connectors</u>.</li><li>Certified USB-C cables with an appropriate power rating can be used to provide power to connected systems.</br> >>> Learn more about <u>power delivery</u>.</li><li>IntelliConnex software is installed on each connected system .</br> >>> Learn more about <u>connection software</u>.</li><li>Additional functions and capabilities are unlocked through software updates.</li></ol></div> <div><img src="/media/faqs/technology/rocket-box.webp" class="max-w-2xl mx-auto pt-10" alt="USB 2.0" /><p class="text-center font-semibold !text-[15px] md:mt-8">Any combination of laptops tablets, phones, personal computers or other intelligent systems bay be connected.</p></div>',
        },
        {
          question: "What is a USB Host?  Why is RocketBox™ Revolutionary?",
          answer:
            '<div ><p class="md:!mb-6"><b class="text-primary">USB Basics</b></p><ul class="!space-y-4"><li><p>Universal Serial Bus (USB) communications offer fast, easy-to-use and inexpensive data connections largely due to its simple architecture. This architecture requires that there can only one USB Host that controls attached USB Devices. USB prohibits directly connecting two or more USB Hosts.</p></li></ul><div><img src="/media/faqs/technology/usb-host.webp" class="max-w-2xl mx-auto py-8" alt="USB 2.0" /></div><ul class="!space-y-4 ml-6 md:ml-10"><li><p>A <b>USB Host</b> System is a computer or Intelligent System that controls additional electronic “things” that are connected using USB cables, ports and connectors. Examples of a USB Host System include a laptop, desktop or similar computer. It might also be a gaming console, Smart TV, Setop box or other “intelligent system”.</p></li><li><p>A <b>USB Device</b>, in contrast, is an a piece of computer electronics that is controlled, and is dependent, on the intelligent system, or compueter, to which it is connected. Examples include keyboard, mouse, printer, USB hard drive, camera etc.</p></li><li><p><b>Dual Role</b> capabilities were later created to allow smaller intelligent systems - like phones and tablets - to sometimes act a USB Host and sometimes act a USB Device. Connecting a Phone to a Laptop forces a Phone to act as a Device and controlled by the Laptop. USB-C cables make it easy to connect two phones together, but doing so forces one Phone to be a Host and makes the other a Device.</p></li></ul><p class="md:!mb-6 md:!mt-10"><b class="text-primary">Revolutionary RocketBox™</b></p><ul class="!space-y-4"><li><p>RocketBox™ is a revolutionary USB Device connecting multiple USB Hosts - such as Laptops, Desktops, Phones, Tablets and more - together to share and exchange data while ensuring each system retains full control of is operations and data.</p></li><li><p>It is easier to use than any other platform and connects more types of systems, uses less power, and offers better cost and capabilities than any other technology.</p></li><li>RocketBox™is the world’s first and only method of quickly and safely linking USB Host computers to share data instantly and seamlessly.</li></ul><div><img src="/media/faqs/technology/revolutionary-rocketBox.webp" class="max-w-2xl mx-auto py-8" alt="USB 2.0" /></div></div>',
        },
        {
          question: "Can’t I simply connect systems using a USB-C cable?",
          answer:
            '<div ><p class="md:!mb-6"><b class="text-primary">Only in some cases, and with many restrictions</b></p><ul class="!space-y-4"><li><p>Some small systems like SmartPhones and Tablets, can be connected to each other, or connected to a larger system such as a laptop or PC. Larger systems are always a Host and smaller systems always a Device. When both systems are smaller, one must chose to be the Host and the other must be the Device. Systems connected as a device are limited in functionality and are completely vulnerable to being controlled by the connected Host. </p></li><li><p>Large systems, such as laptops and desktops or servers cannot be connected to each other using a USB-C cable.</p></li><li><p>In contrast, any two Thunderbolt™ systems can be directly connected to each other without restriction.</p></li><li><p><b>RocketBox™</b> makes it simple to connect any USB or Thunderbolt™ system to any other at the <b>fastest speeds,</b> with <b>ultimate flexibility</b> and <b>without any loss of security or functionality.</b></p></li></ul></div> ',
        },
        {
          question: "Is the RocketBox™ the same as a USB Switch?",
          answer:
            '<p  class="md:!mb-6"><b class="text-primary">No</b></p><ul class="md:!mb-6"><li><div><p>A USB switch is a device that provides the ability to alternately connect one or more USB Host system to different USB devices.</p><p>A <b>USB switch</b> is used to share USB devices between several systems. This reduces the need to purchase many of the same device, reduces the clutter of multiple cables and eliminates the need to unplug and plug devices from systems.</p></div></li><li><div><p>RocketBox™ is different. The <b>RocketBox™</b> connects multiple USB Host Systems to each other, making stored data and system capabilities on any of the systems instantly available to any (or all) of the other connected systems. </p><p>The <b>RocketBox™</b> is used to move data between USB Systems quickly and easily.</p><img src="/media/faqs/technology/usb-switch.webp" class="max-w-2xl mx-auto pt-10" alt="USB 2.0" /></div></li></ul>',
        },
        {
          question:
            "Can I connect USB devices or Storage Drives to the RocketBox™?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">Not at this time</b></p><ul class="!space-y-4"><li><p>IntelliConnex’s RocketBox is currently sold with four Upstream ports; meaning that you can only connect a USB Host System, or computer. </p></li><li><div><p>Current products support connections by up to four USB Host System, such as Laptops, Desktops, Phones, Tablets and more, so that they can instantly, easily and securely share data between them; much like Ethernet or WiFi networks, simply better.</p><img src="/media/faqs/technology/usb-drive.webp" class="max-w-2xl mx-auto pt-10" alt="USB 2.0" /></div></ul> ',
        },
        {
          question:
            "Why is a RocketBox™ USB Network better than Ethernet and WiFi?",
          answer:
            '<ul class="!space-y-4"><li ><p class="md:!mb-6">A USB Network created by RocketBox™ is far superior to a traditional network - in cost, security, ease-of use, and performance.</p></li></ul><div class="grid md:grid-cols-[65%_auto]"><div class="space-y-3"><ol class="tick !space-y-4 text-neutral-800 !ml-16"><li><p>Lower Cost to buy, and operate</p></li><li><p>Simpler to use</p></li><li><p>Better Performance than the latest Data Center and AI switches</p></li><li><p>Faster than Ethernet and WiFi, even at the same rated speed</p></li><li><p>Dedicated bandwidth to concurrent transfers, and</p></li><li><p>Unparallelled data security and privacy.</p></li><li><p>Combines power and data cables into a single USB-C connection</p></li><li><p>A Platform for additional Functionality and Capabilities via Software </p></li></ol></div> <div class=""><img src="/media/faqs/technology/rocket.png" class="max-w-[300px] mx-auto" alt="USB" /></div> </div>',
        },
        {
          question:
            "Does the RocketBox™ replace a USB Dock or Port Replicator?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">Not yet</b></p> <ul class="!space-y-4"><li><p>A <b class="!font-semibold">Dock</b> (docking station) and <b class="!font-semibold">Port Replicator</b> are electronic devices used to increase the number of connections that can be used via USB or Thunderbolt™ connection. At their core, a dock and port replicator include a USB hub for splitting a single connection into many. A dock and port replicator may also include several protocol conversions for splitting out, or combining, different protocols into a USB or Thunderbolt™ link. Most docks and port replicators provide support to connect one or more monitors.  </p></li><li><p> The <b class="!font-semibold">RocketBox™</b> does not split out a USB or Thunderbolt™ connection into more ports or connections, or even to convert signals to support other protocols. Rather, the RocketBox™ provides switchable direct links to other connected systems for transferring data faster, easier and more securely than any other method.</p></li><li><p>Future designs of the RocketBox™ may provide compelling alternatives to the Port Replicator and Docking Stations. For now, the RocketBox™ is best described of as a replacement for a local Ethernet Network Switch.</p></li></ul> ',
        },
        {
          question:
            "How is the RocketBox™ better than connecting a tablet or Phone directly to a Laptop? ",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">Much, much better; and much more secure</b></p><ul class="!space-y-4"><li><p>Phones and Tablets use a special kind of USB controller that allows them to be either a Host of Device. </p></li><li><p>Acting as a Host, phones and tablets can add USB devices that enhance the capability of the phone and tablet</p></li><li><p>However, when connecting a Phone or Tablet to a laptop or Desktop computer, the smaller systems are forced to act as a device. In both cases, the smaller systems appear as an external storage drive to the larger laptop or PC. This is hardwired into the design of USB and gives the larger systems complete control over the smaller systems. As a result, the phones and tablets are vulnerable to the larger system.</p></li><li><p>RocketBox™ changes how USB rules apply. Connecting phones, tablets, laptops and PCs via Rocketbox™ device and software results in each system remaining fully secure. Each system is able to operate independently as a peer. For those who want to control their PC with a phone can now do so.</p></li></ul>',
        },
        {
          question: "Isn’t the RocketBox™ just like a USB CrossOver cable?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">RocketBox™ is much , much more than a CrossOver cable</b></p><div class="grid md:grid-cols-[70%_auto]"><div class="space-y-3"><ul class="!space-y-4"><li>USB CrossOver Cables were first introduced as Microsoft’s Easy Transfer Cable in 2004. Powered by software that moved user settings and files, USB2 transfers were some of the fastest at the time.</li><li>Today’s USB 3.0 5 Gbps CrossOver cables barely reach 30% of advertised speeds due to delays in the middle bump. Complicated electronics that sit in the middle of the two ends are busy writing and reading data in buffers, slowing transfers significantly. </li><li>Rocketbox™ is based on the world’s first and fastest USB 3.0 to USB 3.0 transfer cable. Built in 2015, our technology reached 457 MBps - nearly 10X what the USB 3.0 Cross Over cables sold today can achieve.</li><li><div><p class="md:!mb-5 !font-semibold">RocketBox™ technology is superior in several ways:</p></div></li></ul></div> <div class=""><img src="/media/faqs/technology/cable.png" class="max-w-[300px] mx-auto " alt="USB" /></div> </div>  <div class="grid grid-cols-1 md:grid-cols-2  md:mx-32"><div><ul class="!space-y-4"><li>More than 3X Faster</li><li>Connect 4 systems, not just 2</li><li>Optional power delivery</li><li>Switching between systems</li></ul></div><div><ul class="!space-y-4"><li>Less Latency (less data delays)</li><li>Supports multiple transfers at the same time</li><li>Supports file transfers to multiple systems at once </li></ul></div></div>',
        },

        // sdfghjkl;''
        {
          question: "How large is the RocketBox™? Can I carry it with me?",
          answer:
            '<div class="grid md:grid-cols-[55%_auto] items-start"><div class="space-y-3"><ul class="!space-y-4 !mt-3"><li>The device is not yet finalized, so exact measurements may change.</li><li>Approximate measurements of prototypes 6.5” x 2.5” x ¾” or 17mm x 6.7 mm x 1.7mm</li><li>We expect a final device to be similar in size, easily allowing it to fit into a coat pocket, knapsack or bag for easy portability.</li></ul></div> <div class=" "><img src="/media/faqs/big-device.webp" class="max-w-[200px]  mx-auto" alt="USB" /></div> </div>',
        },
        {
          question: "What types of USB Host Systems can be connected?",
          answer:
            '<div class="grid grid-cols-1 sm:grid-cols-2"><div><p>10s of billions of USB Host systems of all types will eventually connect to the IntelliConnex platform.<br/> <br/><p class="text-neutral-800"> This includes</p></p> <ul class="text-neutral-800 !space-y-4"><li>Personal Computers (PCs)</li><li>Servers</li><li>Laptops</li><li>Tablets</li><li>Phablets</li><li>Mobile Phones</li><li>Smart Watches*</li><li>Smart TVs*</li><li>Network Storage*</li><li>Video Games*</li><li>Other Smart Devices*</li></ul></div> <div><img src="/media/faqs/technology/usb-host.png" class="max-w-xl mx-auto mt-4 md:mt-0" alt="USB" /></div> </div><p class="!mt-10">*Systems must have a USB connection and be able to run IntelliConnex’s intelligent connection apps</p>',
        },
        {
          question:
            "Why is RocketBox™ required for Creative workflows and workspaces?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">Seamless & Simple Creative Computing</b></p><div class="grid md:grid-cols-2 gap-8"><div class="space-y-3"><ul class="!space-y-4"><li ><p >Digital media creation typically requires the use of multiple systems, from powerful phones capturing high resolution video and pictures, portable laptops for on-the-go work, and powerful desktop computers for rendering and final production.</p></li><li><p>RocketBox pulls together all your digital files instantly across all your systems, making files instantly and seamlessly connected; reducing clutter, eliminating setup complexities and reducing the overall cost of an integrated compute environement.</p></li></ul><ol class="md:!ml-12 md:!mt-6 gary-tick text-light-gray"><li>Highest Speed transfers for very large files</li><li>Plug & Play connections</li><li>Supports more systems</li><li>Safe & Secure from the Internet</li><li>Best performance at the lowest cost</li></ol></div> <div class=""><img src="/media/faqs/technology/workspace.png" class="" alt="USB" /><p class="text-neutral-800 !text-[15px] font-normal ml-8 mt-8">Move huge files instantly and seamlessly between multiple computer systems.</p ></div> </div>',
        },
        // End
      ],
    },
    {
      name: "Connections",
      content: [
        {
          question: "What versions of USB are supported by RocketBox™?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">All USB versions are supported.</b></p><ul class="!space-y-4"><li><p >RocketBox™ connects systems across all versions of USB and Thunderbolt™.</p></li><li><div><p>A great feature of USB is that it is forwards and backwards compatible. This means you can connect any USB Host System using any version of USB from USB 1.1 (12 Mbps) to USB4 v2 (80 Gbps) to the RocketBox™ and transfer data effortlessly.</p><div class="ml-4"><p class="italic">Effective transfer speeds are determined by the slowest of the connections and the speed of the RocketBox™ itself.</p><p class="italic !leading-[30px]">A newer laptop using USB 3.2 Gen 2. also known as SuperSpeed Plus with speeds at up to 10 Gbps, can exchange data over the RocketBox™ with an older system that might only have USB 3.0, (SuperSpeed) supporting 5 Gbps. Ultimately the transfer speed is limited by the slower connection, but RocketBox™ makes it easy to move data between all USB Host Systems.</p></div><img src="/media/faqs/connection/typeA-rocketbox.webp" class="max-w-2xl mx-auto"  alt="USB 2.0" /></div></li></ul><br />',
        },
        {
          question:
            "Can I connect a system with an older USB type-A port to the RocketBox™?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">Yes.</b></p><ul class="!space-y-4"><li><p>RocketBox™ uses the newer type-C port to deliver the fastest speeds and support the latest power delivery.</p></li><li><div><p>An older Type-A system port is supported in two ways:</p><div><ol class="list-decimal !pl-10 marker:!font-normal !space-y-4 marker:!text-light-gray !font-normal "><li>Using a conversion cable with a USB-C connector on one end and a USB-A  on the  end. These cables are relatively easy to find at many online and local stores.</li><li>Using a USB adapter with a USB-C connector on one end and a USB-A connector on the other. See here</li></ol><p class="!text-sm !leading-9 "><span class="font-semibold">IMPORTANT</span>: USB-A ports, cables and adapters do not support the advanced power delivery functions provided by RocketBox™, so you will not be able to charge a laptop. Smaller systems like tablets or phones that use a version of the older Type-A port for charging at the standard USB 3.3V or 5V settings are expected to work.</p><img src="/media/faqs/connection/type-a.webp" class="max-w-md mx-auto"  alt="USB 2.0" /></li></ul><br />',
        },
        {
          question:
            "Can I connect a system with an older mini- or micro USB port to the RocketBox™?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">Yes.</b></p><ul class="!space-y-3"><li><p>RocketBox™ uses the newer type-C port to deliver the fastest speeds and support the latest power delivery.</p></li><li><div><p>Older Mini and Micro USB ports are supported in two ways:</p><div><ol class="list-decimal !pl-10 marker:!font-normal !space-y-4 marker:!text-light-gray !font-normal "><li class="!pl-0"><p>Using a conversion cable with a USB-C connector on one end and a USB-A connector on the other end. These cables are relatively easy to find at many online and local stores.</p></li><li class="!pl-0"><p>Using a USB adapter with a USB-C connector on one end and a USB-A connector on the other. See here</p></li></ol><p class="!text-sm"><span class="font-semibold !leading-9 ">IMPORTANT</span>: Micro and mini USB-A ports, cables and adapters do not support the advanced power delivery functions provided by RocketBox™, so you will not be able to charge a laptop. Smaller systems like tablets or phones that use a version of the older Type-A port for charging at the standard USB 3.3V or 5V settings are expected to work.</p><img src="/media/faqs/connection/usb-port.webp" class="max-w-[250px] mx-auto"  alt="USB 2.0" /></li></ul><br />',
        },

        {
          question: "Does the RocketBox™ support Thunderbolt connections?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">Yes, however older versions will require adapters</b></p><ul class="!space-y-4"><li><p>Even before Intel shared the core design of Thunderbolt™ with the USB Association to create USB4, Thunderbolt™ has been fully backwards compatible with USB, meaning all versions of Thunderbolt™ can connect to, and transfer data over, the RocketBox™.</p></li><li><p>The RocketBox™ only supports native connections using the newer Thunderbolt™ cables that share the USB Type-C connector. To connect a system that has the old Thunderbolt™ connector, you will need an adapter or conversion cable. </p></li><li><div><p> Actual transfer speeds are limited by the speed of the RocketBox™ and the speed of the other system connections.</p><h3 class="text-center !mt-20  !my-6 text-3xl !text-[#8F9196]">Thunderbolt™ Connections</h3><img src="/media/faqs/connection/thunderbolt-usb.webp" class="max-w-2xl mx-auto"  alt="USB 2.0" /></div></li></ul> ',
        },
        {
          question:
            "Can I connect systems to the RocketBox™ with both USB and Thunderbolt™?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">Yes</b></p><ul class="!space-y-4"><li><p>Thunderbolt™ is backwards compatible with USB, and systems can be connected to the RocketBox’s USB platform using Thunderbolt™ cables and system ports.</p></li><li><p>The patented process and method used by RocketBox™ allows transfers data between systems, no matter which of the two connections are used. This means systems can connect using either USB or Thunderbolt™. </p></li><li><div><p>As always, transfer speeds between USB and Thunderbolt™ systems are limited by the slowest connection or the RocketBox™ capability. Actual transfer speeds are limited by the speed of the RocketBox™ and the speed of the other system connections.As always, transfer speeds between USB and Thunderbolt™ systems are limited by the slowest connection or the RocketBox™ capability.</p><h3 class="text-center !text-[#8F9196] md:!mt-12 md:!mb-8 text-3xl">USB ←-> Thunderbolt™ Transfers</h3><img src="/media/faqs/connection/thunderbolt-transfers.webp" class="max-w-4xl mx-auto"  alt="USB 2.0" /> <p class="text-center  md:!my-12 ">View Speed Chart</p><p class="md:!my-12 md:!mb-16 text-center font-semibold !text-[#8F9196]">USB ←-> Thunderbolt™ Connection Speeds</p><img src="/media/faqs/connection/thunderbolt-connection.webp" class="max-w-4xl mx-auto"  alt="USB 2.0" /></div></li></ul> ',
        },
        {
          question:
            "USB Cables are short – Can I connect systems beyond 3 feet (1 meter)?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">Yes</b></p><ul class="!space-y-4"><li><p>Active Optical Cables (AOC) supporting USB and Thunderbolt™ are now available at 5, 10 and even 40 Gbps. </p></li><li><p>Cable lengths vary from 10m, 15m and even 100 meters (333 feet). </p></li><li><div><p>Several AOC offerings even integrate power delivery to 15 meters.</p><br /><img src="/media/faqs/connection/usb-cable.webp" class=" mx-auto"  alt="USB 2.0" /></div></li></ul>',
        },

        {
          question: "Can I connect a system that doesn’t have a USB-C port?",
          answer:
            '<p class="md:!mb-6">RocketBox™ uses standard Type-C port to deliver the fastest speeds and Power Delivery features.</p><p class="md:!mb-6"><b class="text-primary ">Yes, Systems without a USB-C port can be connected</b></p><ul class="!space-y-4"><li><p>Systems without a USB Type-C port can be connected to the RocketBox™ using a USB conversion cable, or USB Adapter.</p></li><li><div><p class="">USB-C conversion cables and adapters are readily available in your favorite retailer or online store.</p><p>IMPORTANT: Use of conversion cables or adapters may impact Power Delivery features.</p><h3 class="text-center !text-light-gray my-4 text-3xl md:!mb-10 md:!mt-10">USB-C Conversion Cables</h3><img src="/media/faqs/connection/usb-c-port.webp" class="max-w-2xl mx-auto"  alt="USB 2.0" /> <p class="text-center md:!mb-4 md:!mt-10" ">USB-C Conversion Adapters</p><img src="/media/faqs/connection/usb-c-adapter.webp" class="max-w-2xl mx-auto"  alt="USB 2.0" /></div></li></ul> ',
        },

        // End,
      ],
    },
    {
      name: "Power",
      content: [
        {
          question: "How is power provided to connected systems?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">Current designs support a total 140W in total; across three ports.</b> </p> <ul class="!space-y-4"><li><p >All ports provide USB Power</p></li><li>USB supports up to 240 Watts in power delivery per port. However, this large amount of power would generate a huge amount of heat and require an AC/DC power adapter almost as big as a computer and be incredibly heavy.</li><li><div><p>Our current product provides the most amount of power delivery available from the latest power supply adapters, while still ensuring that you can still fit everything into a jacket pocket, satchel or knapsack.</p><p class="text-center text-[#9A9A9A]  md:!mb-2 md:!mt-10 text-xl font-extrabold ">RocketBox™ Power Delivery</p><img src="/media/faqs/power/power-provided.webp" class="max-w-5xl mx-auto !rounded-none" alt="USB" /></div></li></ul>',
        },
        {
          question:
            "Can I use the Rocketbox without a wall plug power adapter?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">Yes </b></p> <ul class="!space-y-4"><li><div><p>The IntelliConnex data transfer platform can be powered by any of the connected systems, enabling it to be used anywhere and at any time.</p><p class="text-center  my-4 text-xl font-extrabold text-[#9A9A9A]">File Transfer Powered by Connected Systems</p><img class="max-w-5xl mx-auto" src="/media/faqs/power/exchange-platform.webp" alt="USB" /><p class="text-center max-w-2xl text-blackd !mt-2 !italic !text-[15px]  mx-auto text-black">When power is not provided by the power adapter, connected systems provide operating power over standard USB cables</p></div></li></ul>',
        },
        {
          question: "Do all USB Cables deliver power?",
          answer:
            '<p class="md:!mb-4"><b class="text-primary">All USB Cables support a minimum power delivery; not all cables work for all power levels</b></p> <ul class="mb-4"><li><p class="md:!mb-6">The USB data exchange platform can be powered by any of the connected systems, enabling it to be used anywhere and at any time.</p></li></ul> <h3 class="md:!mb-6 !text-[18px]">All USB Cables support a minimum power delivery; not all cables work for all power levels</h3><ul class="!space-y-4"><li><p >The USB Association (USB-IF) requires that cables clearly communicate how much power delivery (PD) it will support. Unfortunately, this directive is not always followed, or cable capabilities are marked on packaging that is lost.</p></li><li><p ">As a rule of thumb, only USB-C cables will carry higher levels of power. Conversion cables are limited to the power delivery support of the older connectors, typically only 5W.</p></li><li><div><p">Check for USB-IF power delivery logos and clearly mark your cables for quick and handy use.</p>  <img class="max-w-2xl md:!mt-10 md:!ml-8 " src="/media/faqs/cable-support.webp" alt="Cable Support" /></div></li></ul>',
        },
        {
          question:
            "How can I confirm power delivery capabilities of my cables?",
          answer:
            '<ul class="!space-y-4"><li><p>The best way to confirm your cables are working for you is to get a USB Voltage and Current tester. Available from your favorite retailer and online store, a USB cable tester will help you confirm which cables should be used to deliver the right amount of power. Test your cables and mark them for easy selection and proper use. </p></li><li><div><p>Using the wrong cable can not only result in poor power delivery but can also damage your system or even result in a fire in extreme cases.</p><div class="grid grid-cols-[1fr_auto] max-w-5xl mx-auto justify-center  items-start gap-2 md:!mt-16"><div class="w-full flex flex-col items-center"><div class="max-w-lg mt-6"><p>Example USB Voltage and Current Tester Kit</p><p>A faulty USB cable means you cannot power/recharge a connected system.</p></div></div><div class="max-w-lg mx-auto h-auto"><img src="/media/faqs/power/power-delivery.png" class=" mx-auto" alt="Power Delivery" /></div></div> </div></li></ul> ',
        },
        {
          question:
            "Does IntelliConnex 5Gbps data transfer platform use less energy than Ethernet switches?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">Yes – by almost 99%</b></p> <ul class="!space-y-4"><li><p>The 5Gbps USB data transfer platform from IntelliConnex takes almost no power at all.</p></li><li><p>Power is only required to establish a direct and secure data circuit between participating systems. This can be provided by systems themselves over connected USB cables.</p></li><li> <p>By contrast, Ethernet switches need to unpack data signals, make routing decisions, repack and send out the data to the correct connected system; this uses a lot of energy – even when very little data is being transferred.</p></li></ul>  <p class="md:!mb-6 md:!mt-10"><b class="text-primary ">“Off” really means Off</b></p><ul class="!space-y-4"><li><p>Most importantly, the IntelliConnex 5Gbps data transfer platform consumes no power at all when it is not in use, and powers on instantly when it is needed.</p></li><li><p>Ethernet switches never truly turn off. Even the newest energy saving designs reduce power only 40 to 60% from peak power use; which, even then, can be quite significant.</p></li></ul>   <p class="md:!mb-6 md:!mt-10"><b class="text-primary">Learn How much money can this can save</b></p> <ul class="!space-y-4"><li><div><p class="md:!mb-8">Actual savings will depend on how much you pay for electricity.</p><img src="/media/faqs/power/money-save.webp" class="max-w-4xl mx-auto !rounded-none" alt="USB" /></div></li></ul>',
        },
        // End
      ],
    },
    {
      name: "Software",
      content: [
        {
          question: "Is special software required?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">Yes</b></p><ul class="!space-y-4"><li><p >IntelliConnex creates intelligent transfer software that uses connected systems to negotiate and establish direct transfers, eliminating the complexity of traditional networking configurations. </p></li><li><p>Each software installation registers the system with the IntelliConnex transfer platform.</p></li></ul> ',
        },
        {
          question: "Are special drivers required?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">No</b></p><ul class="!space-y-4"><li><p>IntelliConnex uses standard, cerified and proven USB driver software to support transfers. We have tested LibUSB, WinUSB, FTD, infineon and MCCI custom drivers. All work.</p></li></ul>',
        },
        {
          question: "Which operating systems are supported?",
          answer:
            '<p class="md:!mb-6"><b class="text-primary">All of them.</b></p><ul class="!space-y-4"><li>One of the benefits of  key benefits to using USB technologies is that USB is supported by every Operating System, even virtual ones.</li><li>Of course, we cannot support all operating systems at launch, but we will add support as quickly as we can.</li></ul><br /><img src="/media/faqs/software/operating-systems.webp" alt="USB 2.0" class="max-w-2xl  md:!mt-6 mx-auto" />',
        },
        {
          question:
            "Will I be able to connect and transfer to/from Apple systems?",
          answer:
            "<p class='md:!mb-6'><b class='text-primary'>Yes</b></p><ul class='!space-y-4'><li><p>Transfers will be supported to/from Apple systems over Thunderbolt™ or USB using Standard drivers.</p></li></ul>",
        },
        {
          question:
            "Will I be able to connect and transfer to/from a Linux-based system?",
          answer:
            "<p class='md:!mb-6'><b class='text-primary'>Yes</b></p><ul class='!space-y-4'><li><p>Transfers will be supported to/from any Linux or Unix-based systems over Thunderbolt™ or USB using Standard Linux or Unix drivers.</p></li></ul>",
        },
        {
          question:
            "Will I be able to connect and transfer to/from an Android system?",
          answer:
            "<p class='md:!mb-6'><b class='text-primary'>Yes</b></p><ul class='!space-y-4'><li><p>Transfers will be supported to/from Android systems over Thunderbolt™ or USB using Standard drivers.</p></li></ul>",
        },
        {
          question:
            "Will I be able to connect and transfer between Apple systems and Windows systems?",
          answer:
            "<p class='md:!mb-6'><b class='text-primary'>Yes</b></p><ul class='!space-y-4'><li><p>Transfers will be supported between Apple and Windows systems over Thunderbolt™ or USB using Standard drivers.</p></li></ul>",
        },
        {
          question:
            "Will I be able to connect and transfer between systems using multiple different operating systems?",
          answer:
            "<p class='md:!mb-6'><b class='text-primary'>Yes</b></p><ul class='!space-y-4'><li><p>Transfers will be supported between different operating systems over Thunderbolt™ or USB using Standard drivers. </p></li><li><p'> IntelliConnex Apps may not be available for all operating systems yet, but we are working to provide as many as possible according to popularity and demand.</p></li></ul> ",
        },
        // End
      ],
    },
  ];

  return (
    <div className="  bg-[#F8F8F8]">
      <header className="pt-12 md:pt-20 pb-8 md:pb-10 px-4 grid md:grid-cols-5 gap-10 md:px-5 xl:px-10 2xl:px-12 md:items-center main max-w-[1460px] w-full !mx-auto">
        {/* Text section: order-1 below md, order-2 on md+ */}
        <div className=" md:col-span-3 max-md:text-center flex flex-col max-md:justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold">
            Can <span className="text-primary">Connectivity</span> be that easy?
          </h1>
          <p className="text-lg lg:text-2xl text-light-gray mt-4 md:mt-10 max-w-xl">
            Learn how the new RocketBox™ connects your digital world, simpler
            and faster than ever before.
          </p>
        </div>

        {/* Image section: order-1 on md+, order-2 below md */}
        <Image
          src={"/media/faqs/technology/banner.webp"}
          width={320}
          height={80}
          quality={100}
          className=" w-3/4 md:w-full max-w-[370px] h-auto max-md:mx-auto md:ml-auto rounded-md md:col-span-2"
          alt="Logo"
        />
      </header>

      <Faqs data={faqItems} />
    </div>
  );
}
