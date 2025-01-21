import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo36Component } from './lib92-demo36.component';

describe('Lib92Demo36Component', () => {
  let component: Lib92Demo36Component;
  let fixture: ComponentFixture<Lib92Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
