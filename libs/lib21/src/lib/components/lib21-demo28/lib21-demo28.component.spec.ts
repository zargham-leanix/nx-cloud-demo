import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo28Component } from './lib21-demo28.component';

describe('Lib21Demo28Component', () => {
  let component: Lib21Demo28Component;
  let fixture: ComponentFixture<Lib21Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
