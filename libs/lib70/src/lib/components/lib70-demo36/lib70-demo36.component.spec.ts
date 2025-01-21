import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo36Component } from './lib70-demo36.component';

describe('Lib70Demo36Component', () => {
  let component: Lib70Demo36Component;
  let fixture: ComponentFixture<Lib70Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
