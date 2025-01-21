import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo38Component } from './lib15-demo38.component';

describe('Lib15Demo38Component', () => {
  let component: Lib15Demo38Component;
  let fixture: ComponentFixture<Lib15Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
