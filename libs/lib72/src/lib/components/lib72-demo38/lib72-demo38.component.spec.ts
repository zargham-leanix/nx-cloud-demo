import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo38Component } from './lib72-demo38.component';

describe('Lib72Demo38Component', () => {
  let component: Lib72Demo38Component;
  let fixture: ComponentFixture<Lib72Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
