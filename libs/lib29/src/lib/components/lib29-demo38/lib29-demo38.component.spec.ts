import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo38Component } from './lib29-demo38.component';

describe('Lib29Demo38Component', () => {
  let component: Lib29Demo38Component;
  let fixture: ComponentFixture<Lib29Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
