"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  House,
  Users,
  GalleryVerticalEnd,
  LayoutDashboard,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Lucas Mori",
    email: "lucas@mori.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Léo",
      logo: GalleryVerticalEnd,
      plan: "Conexões Imobiliárias",
    },
    {
      name: "Lucas Mori",
      logo: AudioWaveform,
      plan: "Conexões Imobiliárias",
    },
    {
      name: "Marcelo",
      logo: Command,
      plan: "Conexões Imobiliárias",
    },
  ],
  navMain: [
    
    {
      title: "Dashboard",
      url: "dashboard",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Página Principal",
          url: "dashboard",
        },
      ],
    },
    
    {
      title: "Clientes",
      url: "clientes",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Cadastrar Clientes",
          url: "cadastroClientes",
        },
        {
          title: "Exibir Clientes",
          url: "cadastroClientes",
        },
      ],
    },

    {
      title: "Alugueis",
      url: "#",
      icon: House,
      isActive: true,
      items: [
        {
          title: "Clientes",
          url: "#",
        },
        
      ],
    },
    {
      title: "Vendas",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Imoveis",
          url: "vendas",
        },
        
      ],
    },
    
    {
      title: "Configurações",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
