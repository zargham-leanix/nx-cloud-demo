import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo1Component } from './lib9-demo1.component';

describe('Lib9Demo1Component', () => {
  let component: Lib9Demo1Component;
  let fixture: ComponentFixture<Lib9Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
