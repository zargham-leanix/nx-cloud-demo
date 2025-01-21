import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo38Component } from './lib97-demo38.component';

describe('Lib97Demo38Component', () => {
  let component: Lib97Demo38Component;
  let fixture: ComponentFixture<Lib97Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
