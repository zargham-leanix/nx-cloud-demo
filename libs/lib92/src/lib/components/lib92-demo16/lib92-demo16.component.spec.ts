import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo16Component } from './lib92-demo16.component';

describe('Lib92Demo16Component', () => {
  let component: Lib92Demo16Component;
  let fixture: ComponentFixture<Lib92Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
