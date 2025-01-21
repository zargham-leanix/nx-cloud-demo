import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo36Component } from './lib65-demo36.component';

describe('Lib65Demo36Component', () => {
  let component: Lib65Demo36Component;
  let fixture: ComponentFixture<Lib65Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
