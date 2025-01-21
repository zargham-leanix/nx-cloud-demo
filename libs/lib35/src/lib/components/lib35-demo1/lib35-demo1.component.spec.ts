import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo1Component } from './lib35-demo1.component';

describe('Lib35Demo1Component', () => {
  let component: Lib35Demo1Component;
  let fixture: ComponentFixture<Lib35Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
