import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo1Component } from './lib65-demo1.component';

describe('Lib65Demo1Component', () => {
  let component: Lib65Demo1Component;
  let fixture: ComponentFixture<Lib65Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
