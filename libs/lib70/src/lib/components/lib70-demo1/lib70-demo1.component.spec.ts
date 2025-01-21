import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo1Component } from './lib70-demo1.component';

describe('Lib70Demo1Component', () => {
  let component: Lib70Demo1Component;
  let fixture: ComponentFixture<Lib70Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
