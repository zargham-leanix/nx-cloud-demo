import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo32Component } from './lib92-demo32.component';

describe('Lib92Demo32Component', () => {
  let component: Lib92Demo32Component;
  let fixture: ComponentFixture<Lib92Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
