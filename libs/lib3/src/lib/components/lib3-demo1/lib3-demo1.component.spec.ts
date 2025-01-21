import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo1Component } from './lib3-demo1.component';

describe('Lib3Demo1Component', () => {
  let component: Lib3Demo1Component;
  let fixture: ComponentFixture<Lib3Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
