import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo41Component } from './lib59-demo41.component';

describe('Lib59Demo41Component', () => {
  let component: Lib59Demo41Component;
  let fixture: ComponentFixture<Lib59Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
