import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo28Component } from './lib22-demo28.component';

describe('Lib22Demo28Component', () => {
  let component: Lib22Demo28Component;
  let fixture: ComponentFixture<Lib22Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
