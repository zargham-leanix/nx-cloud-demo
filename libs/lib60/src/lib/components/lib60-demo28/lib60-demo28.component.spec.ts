import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo28Component } from './lib60-demo28.component';

describe('Lib60Demo28Component', () => {
  let component: Lib60Demo28Component;
  let fixture: ComponentFixture<Lib60Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
