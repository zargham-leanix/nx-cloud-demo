import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo1Component } from './lib2-demo1.component';

describe('Lib2Demo1Component', () => {
  let component: Lib2Demo1Component;
  let fixture: ComponentFixture<Lib2Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
