import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo28Component } from './lib6-demo28.component';

describe('Lib6Demo28Component', () => {
  let component: Lib6Demo28Component;
  let fixture: ComponentFixture<Lib6Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
