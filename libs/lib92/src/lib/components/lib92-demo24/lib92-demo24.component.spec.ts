import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo24Component } from './lib92-demo24.component';

describe('Lib92Demo24Component', () => {
  let component: Lib92Demo24Component;
  let fixture: ComponentFixture<Lib92Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
