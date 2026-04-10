import {
  Wrench,
  BugPlay,
  DatabaseBackup,
  Unplug,
  CloudSun,
  ShieldCheck,
} from "lucide-react";

export const SERVICES_DATA = [
  {
    id: "repair",
    title: "LAPTOP/DESKTOP/ SERVER REPAIR",
    description:
      "We rely on our computers for all kinds of business and personal use. But what happens when our computers suffer water damage, a crashed hard drive, or some other issue?",
    longDescription: [
      "We rely on our computers for all kinds of business and personal use. But what happens when our computers suffer water damage, a crashed hard drive, or some other issue? Whether you work from home, are preparing a report for school, or are organizing your family photos, your computer is an important tool, and not being able to use it can turn into a major inconvenience. Finding a computer repair service that can properly fix your computer may seem impossible. However, no matter the size, style, or type of computer, Hoilett Business Systems, Inc. is equipped and ready to take on your computer repairs.",
      "Hoilett Business Systems, Inc. has a knowledgeable team with years of experience, having assisted thousands of customers across the United States through both in-person and remote computer support services.",
      "If your computer takes a hit, we can dispatch our crew to your home or business in just a matter of hours. However, if time is a factor, consider our convenient remote service, where our technician logs into your machine and you can watch our technicians troubleshoot your computer issues live. Does your home or business have various computers? Whether you have a Dell desktop, a Mac Pro, or a Chromebook, our team of experts is equipped to take on a variety of services with any computer, making our monthly subscription services the perfect solution for any business or home with multiple computers.",
      "We know how critical your computer is and how important it is to find a reliable computer repair specialist for either Mac or PC products. That is why Hoilett Business Systems, Inc. is fully committed to helping you receive the very best service as quickly as possible! Give us a call today so that we can help you set up your network, or troubleshoot any issues you may be experiencing. We offer reasonable pricing plans, either for one-time services or a monthly subscription.",
    ],
    icon: Wrench,
    image:
      "https://res.cloudinary.com/drhmemypy/image/upload/v1775858007/laptop-desktop-and-server-repair_rq84hj.jpg",
    accentColor: "#3a86ff", // Electric Blue
    bgGradient: "from-blue-500/10",
    slug: "laptop-desktop-and-server-repair",
  },
  {
    id: "virus",
    title: "VIRUS AND SPYWARE REMOVAL",
    description:
      "Viruses are getting more sophisticated by the day. There are some viruses that are able to evade most virus protection programs. Unfortunately, they have become a force in today's computing...",
    longDescription: [
      "Viruses are getting more sophisticated by the day. There are some viruses that are able to evade most virus protection programs. Unfortunately they have become a force in today’s computing age. If you catch a virus turn off your computer as soon as you notice it and call our professional technicians.",
      "Our virus removal service ensures that the virus in completely removed. We utilize a combination of software and manual techniques to completely remove the virus from your system.",
    ],
    icon: BugPlay,
    image:
      "https://res.cloudinary.com/drhmemypy/image/upload/v1775858047/virus-and-spyware-removal_vm3wno.jpg",
    accentColor: "#10b981", // Emerald Green
    bgGradient: "from-emerald-500/10",
    slug: "virus-and-spyware-removal",
  },
  {
    id: "data",
    title: "DATA RECOVERY AND BACKUP",
    description:
      "Do you have sufficient resources and platforms for computer data recovery? Have you created back-up to avoid any potential data loss? For a single computer, it may be an easy task...",
    longDescription: [
      "Do you have sufficient resources and platforms for computer data recovery? Have you created back-up to avoid any potential data loss? For a single computer, it may be an easy task. For organizations, educational institutes and similar other offices, you need an expert hand for computer data recovery and back-up.",
      "No matter your business size, cloud storage and cloud backup are options that can keep your data safe and secure. Business continuity and disaster recovery belong to all businesses; we can help get you running—and keep you going.",
    ],
    image:
      "https://res.cloudinary.com/drhmemypy/image/upload/v1775857972/data-recovery-and-backup_mx3tkk.jpg",
    icon: DatabaseBackup,
    accentColor: "#60a5fa", // Sky Blue
    bgGradient: "from-sky-500/10",
    slug: "data-recovery-and-backup",
  },
  {
    id: "network",
    title: "NETWORK DESIGN",
    description:
      "Keeping your business running smoothly requires building and maintaining a robust, highly available network. We offer proven network design and implementation services that drive results...",
    longDescription: [
      "Keeping your business running smoothly requires building and maintaining a robust, highly available network. Hoilett Business Systems, Inc. offers proven network design and implementation services that drive results for your business.",
    ],
    image:
      "https://res.cloudinary.com/drhmemypy/image/upload/v1775858024/network-design_xkfarp.jpg",
    icon: Unplug,
    accentColor: "#3b82f6", // Royal Blue
    bgGradient: "from-blue-600/10",
    slug: "network-design",
  },
  {
    id: "cloud",
    title: "CLOUD SERVICES",
    description:
      "How ready is your practice to join the cloud revolution? Is AWS, Google Cloud, or Office 365 right for you? We'll look at your usage patterns to determine the best fit for your needs.",
    longDescription: [
      "How ready is your practice to join the cloud revolution? Is AWS, Google Cloud, or Office 365 right for you? We’ll look at your usage patterns to determine the kinds (and volume) of resources that are best for you, map out a recommendation, and then migrate your infrastructure, applications, and business processes, with a keen eye on risk—and potential opportunities.",
    ],
    image:
      "https://res.cloudinary.com/drhmemypy/image/upload/v1775857886/cloud-services_lv1ou6.jpg",
    icon: CloudSun,
    accentColor: "#0ea5e9", // Ocean Blue
    bgGradient: "from-cyan-500/10",
    slug: "cloud-services",
  },
  {
    id: "security",
    title: "CYBER SECURITY",
    description:
      "What worked before will not work now. Our cybersecurity professionals provide business owners with a full-spectrum service offering from incident response to audit advisory services.",
    longDescription: [
      "What worked before will not work now.",
      "Hoilett Business Systems, Inc. cybersecurity professionals provide business owners with a full-spectrum service offering from incident response and audit advisory services, to breach response, and post-incident remediation. Hoilett Business Systems, Inc. works with organizations to ensure needs are not only met but aligned with industry and regulatory requirements.",
      "Hoilett Business Systems, Inc. full stack services include advisory focused services such as security risk assessments, security awareness training, and pen testing. Our tiered Managed Security Packages include tiers of protection that meet demands and enable visibility and budget planning.",
    ],
    image:
      "https://res.cloudinary.com/drhmemypy/image/upload/v1775857940/cyber-security_gby0b7.jpg",
    icon: ShieldCheck,
    accentColor: "#ef4444", // Tech Red
    bgGradient: "from-red-500/10",
    slug: "cyber-security",
  },
];
