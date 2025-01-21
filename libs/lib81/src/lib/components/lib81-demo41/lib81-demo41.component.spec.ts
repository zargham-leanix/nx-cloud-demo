import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo41Component } from './lib81-demo41.component';

describe('Lib81Demo41Component', () => {
  let component: Lib81Demo41Component;
  let fixture: ComponentFixture<Lib81Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
