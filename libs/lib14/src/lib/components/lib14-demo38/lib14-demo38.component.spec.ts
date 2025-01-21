import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo38Component } from './lib14-demo38.component';

describe('Lib14Demo38Component', () => {
  let component: Lib14Demo38Component;
  let fixture: ComponentFixture<Lib14Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
