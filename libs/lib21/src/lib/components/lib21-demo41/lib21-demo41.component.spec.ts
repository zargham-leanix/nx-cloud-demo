import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo41Component } from './lib21-demo41.component';

describe('Lib21Demo41Component', () => {
  let component: Lib21Demo41Component;
  let fixture: ComponentFixture<Lib21Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
