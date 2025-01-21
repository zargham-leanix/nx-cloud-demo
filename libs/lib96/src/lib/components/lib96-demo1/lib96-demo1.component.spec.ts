import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo1Component } from './lib96-demo1.component';

describe('Lib96Demo1Component', () => {
  let component: Lib96Demo1Component;
  let fixture: ComponentFixture<Lib96Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
