import os
import fitz  # PyMuPDF para ler o PDF
import openai  # Biblioteca para acessar a API do ChatGPT
from fpdf import FPDF  # Biblioteca para criar PDFs

def extract_text_from_pdf(pdf_path):
    """Extrai o texto de um arquivo PDF."""
    doc = fitz.open(pdf_path)  # Abre o arquivo PDF
    text = ""  # Inicializa a string de texto
    for page in doc:  # Itera sobre cada página
        text += page.get_text("text") + "\n"  # Obtém o texto da página
    return text.strip()  # Retorna o texto sem espaços extras

def translate_text(text, target_language="en"):
    """Traduz o texto usando a API do ChatGPT."""
    openai.api_key = "SUA_API_KEY_AQUI"  # Insira sua chave da API
    response = openai.ChatCompletion.create(
        model="gpt-4",  # Modelo utilizado
        messages=[
            {"role": "system", "content": f"Traduza para {target_language}."},
            {"role": "user", "content": text},
        ]
    )
    return response["choices"][0]["message"]["content"].strip()  # Retorna a tradução

def create_pdf(text, output_path):
    """Cria um PDF com o texto traduzido."""
    pdf = FPDF()
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.add_page()
    pdf.set_font("Arial", size=12)
    for line in text.split("\n"):  # Adiciona cada linha ao PDF
        pdf.cell(200, 10, txt=line, ln=True, align='L')
    pdf.output(output_path)  # Salva o PDF

def main():
    """Executa o fluxo de leitura, tradução e criação do PDF."""
    input_pdf = "./src/img/input.pdf"  # Caminho do PDF original
    output_pdf = "./src/img/output_translated.pdf"  # Caminho do PDF traduzido
    
    if not os.path.exists(input_pdf):
        print("Arquivo PDF de entrada não encontrado!")
        return
    
    print("Lendo o PDF...")
    text = extract_text_from_pdf(input_pdf)  # Extrai o texto
    print("Traduzindo...")
    translated_text = translate_text(text, target_language="en")  # Traduz o texto
    print("Criando novo PDF...")
    create_pdf(translated_text, output_pdf)  # Cria o PDF traduzido
    print(f"PDF traduzido salvo em: {output_pdf}")

if __name__ == "__main__":
    main()
