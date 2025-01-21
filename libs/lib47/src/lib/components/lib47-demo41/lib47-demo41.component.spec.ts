import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo41Component } from './lib47-demo41.component';

describe('Lib47Demo41Component', () => {
  let component: Lib47Demo41Component;
  let fixture: ComponentFixture<Lib47Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
