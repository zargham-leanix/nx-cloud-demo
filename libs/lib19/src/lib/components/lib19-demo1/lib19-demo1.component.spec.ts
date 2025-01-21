import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo1Component } from './lib19-demo1.component';

describe('Lib19Demo1Component', () => {
  let component: Lib19Demo1Component;
  let fixture: ComponentFixture<Lib19Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
