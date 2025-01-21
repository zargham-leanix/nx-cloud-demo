import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo41Component } from './lib5-demo41.component';

describe('Lib5Demo41Component', () => {
  let component: Lib5Demo41Component;
  let fixture: ComponentFixture<Lib5Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
