import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo49Component } from './lib92-demo49.component';

describe('Lib92Demo49Component', () => {
  let component: Lib92Demo49Component;
  let fixture: ComponentFixture<Lib92Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
