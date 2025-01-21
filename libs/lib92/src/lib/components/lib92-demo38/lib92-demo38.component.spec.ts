import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo38Component } from './lib92-demo38.component';

describe('Lib92Demo38Component', () => {
  let component: Lib92Demo38Component;
  let fixture: ComponentFixture<Lib92Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
