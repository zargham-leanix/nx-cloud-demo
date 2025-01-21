import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo41Component } from './lib94-demo41.component';

describe('Lib94Demo41Component', () => {
  let component: Lib94Demo41Component;
  let fixture: ComponentFixture<Lib94Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
