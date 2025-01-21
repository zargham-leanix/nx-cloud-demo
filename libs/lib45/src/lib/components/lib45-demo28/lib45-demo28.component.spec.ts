import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo28Component } from './lib45-demo28.component';

describe('Lib45Demo28Component', () => {
  let component: Lib45Demo28Component;
  let fixture: ComponentFixture<Lib45Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
