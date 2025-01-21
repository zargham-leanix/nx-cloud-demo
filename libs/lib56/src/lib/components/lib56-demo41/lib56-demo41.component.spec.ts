import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo41Component } from './lib56-demo41.component';

describe('Lib56Demo41Component', () => {
  let component: Lib56Demo41Component;
  let fixture: ComponentFixture<Lib56Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
