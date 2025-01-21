import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo47Component } from './lib92-demo47.component';

describe('Lib92Demo47Component', () => {
  let component: Lib92Demo47Component;
  let fixture: ComponentFixture<Lib92Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
