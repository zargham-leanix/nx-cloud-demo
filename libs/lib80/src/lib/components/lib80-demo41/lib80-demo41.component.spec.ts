import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo41Component } from './lib80-demo41.component';

describe('Lib80Demo41Component', () => {
  let component: Lib80Demo41Component;
  let fixture: ComponentFixture<Lib80Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
