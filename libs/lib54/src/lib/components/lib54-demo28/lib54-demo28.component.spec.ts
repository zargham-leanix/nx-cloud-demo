import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo28Component } from './lib54-demo28.component';

describe('Lib54Demo28Component', () => {
  let component: Lib54Demo28Component;
  let fixture: ComponentFixture<Lib54Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
