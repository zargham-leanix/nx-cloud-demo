import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo36Component } from './lib3-demo36.component';

describe('Lib3Demo36Component', () => {
  let component: Lib3Demo36Component;
  let fixture: ComponentFixture<Lib3Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
