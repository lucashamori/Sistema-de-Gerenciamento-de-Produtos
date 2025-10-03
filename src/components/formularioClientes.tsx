import { GalleryVerticalEnd } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Formulario({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              
            </a>
            <h1 className="text-xl font-bold">Cadastro de Clientes</h1>
            
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="nome">Nome</Label>
              <Input
                id="nome"
                type="name"
                placeholder="Lucas Mori"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="cpf">CPF</Label>
              <Input
                id="cpf"
                type="document"
                placeholder="116.393.898.79"
                required
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="endereco">Endereço completo</Label>
              <Input
                id="endereco"
                type="local"
                placeholder="Rua Adilson dos Anjos 393"
                required
              />

            </div>
             <div className="grid gap-2">
              <Label htmlFor="endereco">Telefone</Label>
              <Input
                id="Telefone"
                type="telefone"
                placeholder="35992445674"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Cadastrar
            </Button>
          </div>
          
        </div>
      </form>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">
        Desenvolvido por Lucas Mori
      </div>
    </div>
  )
}
