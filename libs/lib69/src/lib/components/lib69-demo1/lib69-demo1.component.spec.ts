import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo1Component } from './lib69-demo1.component';

describe('Lib69Demo1Component', () => {
  let component: Lib69Demo1Component;
  let fixture: ComponentFixture<Lib69Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
