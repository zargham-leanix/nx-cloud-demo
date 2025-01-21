import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo36Component } from './lib96-demo36.component';

describe('Lib96Demo36Component', () => {
  let component: Lib96Demo36Component;
  let fixture: ComponentFixture<Lib96Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
