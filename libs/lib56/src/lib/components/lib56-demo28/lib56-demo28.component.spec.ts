import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo28Component } from './lib56-demo28.component';

describe('Lib56Demo28Component', () => {
  let component: Lib56Demo28Component;
  let fixture: ComponentFixture<Lib56Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
