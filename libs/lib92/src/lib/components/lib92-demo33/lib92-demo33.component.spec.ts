import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo33Component } from './lib92-demo33.component';

describe('Lib92Demo33Component', () => {
  let component: Lib92Demo33Component;
  let fixture: ComponentFixture<Lib92Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
