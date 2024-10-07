import ErrorRepository from '../js/ErrorRepository';

describe('ErrorRepository', () => {
    let errorRepo;

    beforeEach(() => {
        errorRepo = new ErrorRepository();

        // Добавляем тестовые ошибки
        errorRepo.addError(404, 'Not Found');
        errorRepo.addError(500, 'Internal Server Error');
        errorRepo.addError(401, 'Unauthorized');
    });

    test('должен возвращать описание ошибки по коду', () => {
        expect(errorRepo.translate(404)).toBe('Not Found');
        expect(errorRepo.translate(500)).toBe('Internal Server Error');
        expect(errorRepo.translate(401)).toBe('Unauthorized');
    });

    test('должен возвращать "Unknown error" для несуществующих кодов', () => {
        expect(errorRepo.translate(999)).toBe('Unknown error');
        expect(errorRepo.translate(0)).toBe('Unknown error');
    });

    test('должен добавлять новую ошибку', () => {
        errorRepo.addError(403, 'Forbidden');
        expect(errorRepo.translate(403)).toBe('Forbidden');
    });
});