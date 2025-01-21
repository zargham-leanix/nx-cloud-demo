import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo9Component } from './lib92-demo9.component';

describe('Lib92Demo9Component', () => {
  let component: Lib92Demo9Component;
  let fixture: ComponentFixture<Lib92Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
