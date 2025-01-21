import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo36Component } from './lib19-demo36.component';

describe('Lib19Demo36Component', () => {
  let component: Lib19Demo36Component;
  let fixture: ComponentFixture<Lib19Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
