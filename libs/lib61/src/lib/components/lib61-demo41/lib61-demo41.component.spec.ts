import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo41Component } from './lib61-demo41.component';

describe('Lib61Demo41Component', () => {
  let component: Lib61Demo41Component;
  let fixture: ComponentFixture<Lib61Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
