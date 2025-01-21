import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo41Component } from './lib86-demo41.component';

describe('Lib86Demo41Component', () => {
  let component: Lib86Demo41Component;
  let fixture: ComponentFixture<Lib86Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
