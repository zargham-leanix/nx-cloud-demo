import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo38Component } from './lib46-demo38.component';

describe('Lib46Demo38Component', () => {
  let component: Lib46Demo38Component;
  let fixture: ComponentFixture<Lib46Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
