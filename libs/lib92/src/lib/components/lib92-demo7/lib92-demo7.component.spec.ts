import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo7Component } from './lib92-demo7.component';

describe('Lib92Demo7Component', () => {
  let component: Lib92Demo7Component;
  let fixture: ComponentFixture<Lib92Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
