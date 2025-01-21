import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo21Component } from './lib92-demo21.component';

describe('Lib92Demo21Component', () => {
  let component: Lib92Demo21Component;
  let fixture: ComponentFixture<Lib92Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
