import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo41Component } from './lib30-demo41.component';

describe('Lib30Demo41Component', () => {
  let component: Lib30Demo41Component;
  let fixture: ComponentFixture<Lib30Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
