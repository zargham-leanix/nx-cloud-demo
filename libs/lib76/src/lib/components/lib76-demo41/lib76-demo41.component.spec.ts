import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo41Component } from './lib76-demo41.component';

describe('Lib76Demo41Component', () => {
  let component: Lib76Demo41Component;
  let fixture: ComponentFixture<Lib76Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
