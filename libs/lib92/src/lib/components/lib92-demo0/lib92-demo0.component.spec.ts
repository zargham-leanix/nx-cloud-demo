import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo0Component } from './lib92-demo0.component';

describe('Lib92Demo0Component', () => {
  let component: Lib92Demo0Component;
  let fixture: ComponentFixture<Lib92Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
