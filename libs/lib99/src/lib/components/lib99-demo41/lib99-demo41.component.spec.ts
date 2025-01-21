import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo41Component } from './lib99-demo41.component';

describe('Lib99Demo41Component', () => {
  let component: Lib99Demo41Component;
  let fixture: ComponentFixture<Lib99Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
