import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo41Component } from './lib25-demo41.component';

describe('Lib25Demo41Component', () => {
  let component: Lib25Demo41Component;
  let fixture: ComponentFixture<Lib25Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
