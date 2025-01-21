import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo28Component } from './lib69-demo28.component';

describe('Lib69Demo28Component', () => {
  let component: Lib69Demo28Component;
  let fixture: ComponentFixture<Lib69Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
