export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-3xl font-semibold text-gray-700 mb-6">
          Página Não Encontrada
        </p>
        <div className="max-w-md mx-auto">
          <p className="text-xl text-gray-600 mb-8">
            Ops! A página que você está procurando não existe. Ela pode ter sido
            movida ou excluída.
          </p>
        </div>
      </div>
    </div>
  );
}
