import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo27Component } from './lib92-demo27.component';

describe('Lib92Demo27Component', () => {
  let component: Lib92Demo27Component;
  let fixture: ComponentFixture<Lib92Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
