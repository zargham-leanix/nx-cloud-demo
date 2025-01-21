import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo28Component } from './lib82-demo28.component';

describe('Lib82Demo28Component', () => {
  let component: Lib82Demo28Component;
  let fixture: ComponentFixture<Lib82Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
