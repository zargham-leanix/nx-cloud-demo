import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo36Component } from './lib98-demo36.component';

describe('Lib98Demo36Component', () => {
  let component: Lib98Demo36Component;
  let fixture: ComponentFixture<Lib98Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
