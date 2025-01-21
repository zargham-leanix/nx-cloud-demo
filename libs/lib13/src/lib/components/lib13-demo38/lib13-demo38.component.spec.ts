import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo38Component } from './lib13-demo38.component';

describe('Lib13Demo38Component', () => {
  let component: Lib13Demo38Component;
  let fixture: ComponentFixture<Lib13Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
