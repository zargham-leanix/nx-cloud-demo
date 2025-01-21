import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo40Component } from './lib92-demo40.component';

describe('Lib92Demo40Component', () => {
  let component: Lib92Demo40Component;
  let fixture: ComponentFixture<Lib92Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
