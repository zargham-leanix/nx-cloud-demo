import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo41Component } from './lib28-demo41.component';

describe('Lib28Demo41Component', () => {
  let component: Lib28Demo41Component;
  let fixture: ComponentFixture<Lib28Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
