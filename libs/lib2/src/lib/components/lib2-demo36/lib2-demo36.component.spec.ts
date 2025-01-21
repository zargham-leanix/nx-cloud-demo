import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo36Component } from './lib2-demo36.component';

describe('Lib2Demo36Component', () => {
  let component: Lib2Demo36Component;
  let fixture: ComponentFixture<Lib2Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
