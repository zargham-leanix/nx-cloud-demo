import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo45Component } from './lib92-demo45.component';

describe('Lib92Demo45Component', () => {
  let component: Lib92Demo45Component;
  let fixture: ComponentFixture<Lib92Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
