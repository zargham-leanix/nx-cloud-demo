import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo1Component } from './lib92-demo1.component';

describe('Lib92Demo1Component', () => {
  let component: Lib92Demo1Component;
  let fixture: ComponentFixture<Lib92Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
