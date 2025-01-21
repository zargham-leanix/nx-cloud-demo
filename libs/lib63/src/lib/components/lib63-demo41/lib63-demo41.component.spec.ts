import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo41Component } from './lib63-demo41.component';

describe('Lib63Demo41Component', () => {
  let component: Lib63Demo41Component;
  let fixture: ComponentFixture<Lib63Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
