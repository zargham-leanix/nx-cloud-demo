import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo15Component } from './lib92-demo15.component';

describe('Lib92Demo15Component', () => {
  let component: Lib92Demo15Component;
  let fixture: ComponentFixture<Lib92Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
